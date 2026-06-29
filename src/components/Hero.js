import React, { useEffect, useRef } from 'react';
import FiberCanvas from './FiberCanvas';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <section id="inicio" style={{
      position: 'relative', height: '100vh', minHeight: 620,
      display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
      overflow: 'hidden',
    }}>
     <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/fondo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Deep gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(10,22,40,0.45) 0%, rgba(10,22,40,0.82) 500%)',
        zIndex: 1,
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 200,
        background: 'linear-gradient(to bottom, transparent, #0A1628)',
        zIndex: 2,
      }} />

      {/* Content */}
      <div ref={titleRef} style={{
        position: 'relative', zIndex: 3,
        textAlign: 'center', padding: '0 1.5rem', maxWidth: 720,
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)',
          borderRadius: 100, padding: '6px 18px', marginBottom: 28,
        }}>
            
          <div style={{ width:6, height: 6, borderRadius: '50%', background: '#00D4FF', animation: 'blink 1.4s infinite' }} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500, color: '#00D4FF', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Conectividad · Seguridad · Tecnología
          </span>
        </div>

        <h1 style={{
          fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          lineHeight: 1.05, letterSpacing: '-0.01em',
          color: '#F0F4F8', marginBottom: 24,
        }}>
          Infraestructura que<br />
          <span style={{ color: '#00D4FF' }}>conecta</span> el futuro
        </h1>

        <p style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 300,
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#ffffff', lineHeight: 1.7, marginBottom: 42, maxWidth: 560, margin: '0 auto 42px',
        }}>
          Especialistas en tendido y fusionado de fibra óptica, instalación de cámaras IP y sistemas iVMS para empresas e industrias que exigen máxima velocidad, seguridad y confiabilidad.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#servicios" style={{
            display: 'inline-block', padding: '14px 34px',
            background: 'linear-gradient(135deg, #00D4FF, #0080CC)',
            color: '#0A1628', fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700, fontSize: 16, letterSpacing: '0.05em',
            textDecoration: 'none', borderRadius: 6,
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 0 30px rgba(0,212,255,0.3)',
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 0 50px rgba(0,212,255,0.5)'; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0 30px rgba(0,212,255,0.3)'; }}
          >
            VER SERVICIOS
          </a>
          <a href="#contacto" style={{
            display: 'inline-block', padding: '14px 34px',
            background: 'transparent',
            color: '#F0F4F8', fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 600, fontSize: 16, letterSpacing: '0.05em',
            textDecoration: 'none', borderRadius: 6,
            border: '1px solid rgba(240,244,248,0.25)',
            transition: 'border-color 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#00D4FF'; e.currentTarget.style.color = '#00D4FF'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,244,248,0.25)'; e.currentTarget.style.color = '#F0F4F8'; }}
          >
            CONTACTANOS
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#8AA4C0', letterSpacing: '0.12em', textTransform: 'uppercase' }}>scroll</span>
        <div style={{
          width: 1, height: 40, background: 'linear-gradient(to bottom, #00D4FF, transparent)',
          animation: 'scrollFade 1.8s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes scrollFade { 0%{opacity:0;transform:scaleY(0);transform-origin:top} 50%{opacity:1} 100%{opacity:0;transform:scaleY(1);transform-origin:top} }
      `}</style>
    </section>
  );
}
