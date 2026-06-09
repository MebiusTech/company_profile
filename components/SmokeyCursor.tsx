"use client";

import { useEffect, useRef } from "react";

export default function SmokeyCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; size: number; life: number; velX: number; velY: number; color: string }[] = [];
    let mouse = { x: -100, y: -100 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Buat 3 partikel per pergerakan agar terlihat tebal
      for (let i = 0; i < 3; i++) {
        // Pilih secara acak antara ungu dan cyan/biru
        const isPurple = Math.random() > 0.5;
        const color = isPurple ? "125, 50, 255" : "0, 229, 255";

        particles.push({
          x: mouse.x,
          y: mouse.y,
          size: Math.random() * 8 + 4,
          life: 1,
          velX: (Math.random() - 0.5) * 1.5,
          velY: (Math.random() - 0.5) * 1.5 - 0.5, // asap cenderung naik (-y)
          color: color
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = `rgba(${p.color}, ${p.life})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.life -= 0.03; // kecepatan hilang
        p.size += 0.2; // membesar saat menghilang
        p.x += p.velX;
        p.y += p.velY;
      }
      
      particles = particles.filter(p => p.life > 0);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]"
    />
  );
}