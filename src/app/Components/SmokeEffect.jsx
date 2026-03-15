"use client";

import { useEffect, useRef } from "react";

export default function SmokeEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let frameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    class Particle {
      constructor(x, y) {
        this.x = x + (Math.random() * 20 - 10);
        this.y = y + (Math.random() * 20 - 10);
        this.size = Math.random() * 15 + 10;
        this.weight = Math.random() * 1.5 + 0.5;
        this.directionX = Math.random() * 1 - 0.5;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
      }
      update() {
        this.life -= this.decay;
        this.y -= this.weight;
        this.x += this.directionX;
        this.size += 0.4;
      }
      draw(ctx) {
        if (this.life <= 0) return;
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        const alpha = Math.max(0, this.life * 0.2); 
        gradient.addColorStop(0, `rgba(180, 180, 180, ${alpha})`);
        gradient.addColorStop(1, 'rgba(180, 180, 180, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const handleMouseMove = (e) => {
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
