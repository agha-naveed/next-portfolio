'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // --- Particle field (starfield) ---
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const c1 = new THREE.Color('#00FFD1');
    const c2 = new THREE.Color('#C8FF00');
    const c3 = new THREE.Color('#8899AA');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const rnd = Math.random();
      const col = rnd < 0.5 ? c3 : rnd < 0.8 ? c1 : c2;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      sizes[i] = Math.random() * 2.5 + 0.5;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    pGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const pMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // --- Wireframe Torus Knot ---
    const tkGeo = new THREE.TorusKnotGeometry(1.8, 0.5, 120, 16, 2, 3);
    const tkMat = new THREE.MeshBasicMaterial({
      color: 0x00FFD1,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const torusKnot = new THREE.Mesh(tkGeo, tkMat);
    torusKnot.position.set(3.5, 0, -2);
    scene.add(torusKnot);

    // --- Icosahedron (floating near hero) ---
    const icoGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xC8FF00,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(-3.5, 1, -1);
    scene.add(ico);

    // --- Grid plane ---
    const gridHelper = new THREE.GridHelper(40, 40, 0x00FFD1, 0x0a1a2a);
    gridHelper.position.y = -4;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.15;
    scene.add(gridHelper);

    // --- Connection lines (neural network style) ---
    const nodeCount = 30;
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 5
      ));
    }

    const linePoints: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 5) {
          linePoints.push(nodes[i].clone(), nodes[j].clone());
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00FFD1,
      transparent: true,
      opacity: 0.06,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // Node spheres
    const nodeDotGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const nodeDotMat = new THREE.MeshBasicMaterial({ color: 0x00FFD1 });
    nodes.forEach(pos => {
      const dot = new THREE.Mesh(nodeDotGeo, nodeDotMat);
      dot.position.copy(pos);
      scene.add(dot);
    });

    // Mouse parallax
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      targetY = -(e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Scroll effect
    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll);

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    let frame = 0;
    const animate = () => {
      const raf = requestAnimationFrame(animate);
      frame += 0.003;

      // Smooth mouse follow
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      camera.position.x = currentX;
      camera.position.y = currentY - scrollY * 0.002;
      camera.lookAt(0, -scrollY * 0.002, 0);

      // Rotate objects
      particles.rotation.y = frame * 0.05;
      particles.rotation.x = frame * 0.02;

      torusKnot.rotation.x = frame * 0.3;
      torusKnot.rotation.y = frame * 0.5;

      ico.rotation.x = -frame * 0.4;
      ico.rotation.z = frame * 0.2;

      lines.rotation.y = frame * 0.03;

      renderer.render(scene, camera);

      return raf;
    };

    const raf = animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      id="canvas-container"
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
    />
  );
}
