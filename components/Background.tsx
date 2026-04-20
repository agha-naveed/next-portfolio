"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Helper function to generate a circular texture dynamically
function createCircleTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (context) {
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
  }
  return new THREE.CanvasTexture(canvas);
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    
    // Added subtle fog so particles fade out smoothly into the distance
    scene.fog = new THREE.FogExp2(0x0A0805, 0.03);

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.z = 12;

    /* ── Deep Flowing Data Dust ─────────────────────────── */
    // Dropped the count from 4000 to 800 for a much cleaner, less crowded look
    const N = 800; 
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const sizes = new Float32Array(N);

    const warm = [
      new THREE.Color("#C8854A"),
      new THREE.Color("#8B3A1E"),
      new THREE.Color("#D9D0C0"),
      new THREE.Color("#5C5549"),
      new THREE.Color("#F2EDE4"),
    ];

    for (let i = 0; i < N; i++) {
      // Spread particles in a vast 3D volume
      pos[i*3]   = (Math.random() - 0.5) * 50;
      pos[i*3+1] = (Math.random() - 0.5) * 50;
      pos[i*3+2] = (Math.random() - 0.5) * 50;
      
      const c = warm[Math.floor(Math.random() * warm.length)];
      col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b;
      sizes[i] = Math.random() * 2.0 + 0.2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Create the circular texture
    const circleTexture = createCircleTexture();

    const mat = new THREE.PointsMaterial({
      size: 0.12, 
      vertexColors: true,
      transparent: true, 
      opacity: 0.7,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      map: circleTexture,
      depthWrite: false,
    });
    
    const dust = new THREE.Points(geo, mat);
    scene.add(dust);

    /* ── Mouse parallax ─────────────────────────── */
    let mx = 0, my = 0, cx = 0, cy = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 1.5;
      my = (e.clientY / window.innerHeight - 0.5) * 1.2;
    };
    window.addEventListener("mousemove", onMouse);

    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let t = 0;
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      t += 0.0008;

      // Smooth camera follow
      cx += (mx - cx) * 0.04;
      cy += (my - cy) * 0.04;
      
      camera.position.x = cx;
      
      // Allow scrolling to move you slightly "through" the particles
      camera.position.y = -cy - scrollY * 0.0015;
      camera.position.z = 12 - scrollY * 0.002;
      camera.lookAt(0, -scrollY * 0.0015, 0);

      // Rotate the dust field slowly
      dust.rotation.y = t * 0.4;
      dust.rotation.x = t * 0.15;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      
      // Cleanup memory
      geo.dispose();
      mat.dispose();
      circleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}