import { useEffect, useRef } from 'react';

const LivingBackground = ({ mode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationFrame;

    // Palette Configuration
    // Home (LoveAll): Royal Blue, Navy, White/Cream, Light Blue
    // Lab (LIO): Hermès Orange (#fc4c02), Charcoal, Warm Grey, White
    const colors = mode === 'lab'
      ? ['#fc4c02', '#292524', '#f5f5f4', '#ea580c', '#44403c']
      : ['#1e3a8a', '#3b82f6', '#172554', '#f3f0e6', '#60a5fa'];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 200 + 100;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.angle = Math.random() * Math.PI * 2;
        this.life = 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += 0.002;
        this.life++;

        if (this.x < -200) this.x = width + 200;
        if (this.x > width + 200) this.x = -200;
        if (this.y < -200) this.y = height + 200;
        if (this.y > height + 200) this.y = -200;
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();

        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(this.size/2, -this.size/4, this.size, 0, this.size, this.size/2);
        ctx.bezierCurveTo(this.size, this.size, this.size/2, this.size * 1.5, 0, this.size);
        ctx.bezierCurveTo(-this.size/2, this.size, -this.size, this.size/2, -this.size, 0);
        ctx.bezierCurveTo(-this.size, -this.size/2, -this.size/2, -this.size, 0, 0);

        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.08;
        ctx.globalCompositeOperation = 'source-over';
        ctx.fill();

        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 45; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (mode === 'lab') {
         ctx.fillStyle = 'rgba(28, 25, 23, 0.05)';
         ctx.fillRect(0, 0, width, height);
      } else {
         ctx.fillStyle = 'rgba(243, 240, 230, 0.02)';
         ctx.fillRect(0, 0, width, height);
      }

      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none transition-all duration-1000"
      style={{
        filter: 'url(#oil-paint-effect) blur(40px)'
      }}
    />
  );
};

export default LivingBackground;
