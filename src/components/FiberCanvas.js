import React, { useEffect, useRef } from 'react';

export default function FiberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Nodes: represent connection points in a fiber network
    const NODE_COUNT = 38;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Light pulses that travel along edges
    const pulses = [];
    const MAX_PULSES = 14;

    const addPulse = () => {
      if (pulses.length >= MAX_PULSES) return;
      const a = Math.floor(Math.random() * nodes.length);
      let b = Math.floor(Math.random() * nodes.length);
      while (b === a) b = Math.floor(Math.random() * nodes.length);
      const dx = nodes[b].x - nodes[a].x;
      const dy = nodes[b].y - nodes[a].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80 || dist > 340) return;
      pulses.push({ a, b, t: 0, speed: 0.006 + Math.random() * 0.006 });
    };

    let frame = 0;
    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.03;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 230) {
            const alpha = (1 - dist / 230) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        const pulse = 0.5 + 0.5 * Math.sin(n.pulse);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + pulse * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${0.3 + pulse * 0.4})`;
        ctx.fill();

        // Glow ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + pulse * 4, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 212, 255, ${0.05 + pulse * 0.08})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Animate pulses
      if (frame % 55 === 0) addPulse();
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t >= 1) { pulses.splice(i, 1); continue; }
        const na = nodes[p.a];
        const nb = nodes[p.b];
        const px = na.x + (nb.x - na.x) * p.t;
        const py = na.y + (nb.y - na.y) * p.t;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, 8);
        grad.addColorStop(0, 'rgba(0, 212, 255, 0.9)');
        grad.addColorStop(0.4, 'rgba(0, 212, 255, 0.4)');
        grad.addColorStop(1, 'rgba(0, 212, 255, 0)');
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.85,
      }}
    />
  );
}
