'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface CursorStyle {
  top: string;
  left: string;
  width: string;
  height: string;
  backgroundColor: string;
  border: string;
}

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<'default' | 'text' | 'image'>('default');

  useEffect(() => {
    const updateCursorPos = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterText = () => setCursorType('text');
    const handleMouseEnterImage = () => setCursorType('image');
    const handleMouseLeave = () => setCursorType('default');

    const textElements = document.querySelectorAll('.hover-text');
    const imageElements = document.querySelectorAll('.hover-image');

    textElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterText);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    imageElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterImage);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateCursorPos);

    return () => {
      textElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterText);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      imageElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterImage);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      window.removeEventListener('mousemove', updateCursorPos);
    };
  }, []);

  const cursorStyles: { [key: string]: CursorStyle } = {
    default: {
      top: "-2px",
      left: "-2px",
      width: '38px',
      height: '38px',
      backgroundColor: '#3bc47f8c',
      border: '2px solid white',
    },
    text: {
      top: "-10px",
      left: "-10px",
      width: '60px',
      height: '60px',
      backgroundColor: '#3bc47f8c',
      border: '3px solid white',
    },
    image: {
      top: "-5px",
      left: "-5px",
      width: '45px',
      height: '45px',
      backgroundColor: '#ff7f50',
      border: '2px solid white',
    },
  };

  return (
    <>
      <motion.div className='md:block hidden'
        style={{
          position: 'fixed',
          top: cursorStyles[cursorType].top,
          left: cursorStyles[cursorType].left,
          pointerEvents: 'none',
          borderRadius: '50%',
          backgroundColor: cursorStyles[cursorType].backgroundColor,
          width: cursorStyles[cursorType].width,
          height: cursorStyles[cursorType].height,
          transform: `translate3d(${cursorPos.x - 15}px, ${cursorPos.y - 15}px, 0)`,
          transition: '0.1s ease-out',
          zIndex: 999999999,
        }}
      />
    </>
  );
};

export default CustomCursor;
