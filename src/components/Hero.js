import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Clock, Users } from 'lucide-react';

const BADGES = [
  { icon: ShieldCheck, label: 'Calidad Garantizada' },
  { icon: Clock, label: 'Respuesta Rápida' },
  { icon: Users, label: 'Experiencia y Confianza' },
];

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
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
      position: 'relative', minHeight: '92vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden', paddingTop: 90,
    }}>
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/fondo.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* Gradient overlay so left-side text reads clearly */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(8,15,28,0.94) 0%, rgba(8,15,28,0.72) 38%, rgba(8,15,28,0.25) 65%, rgba(8,15,28,0.1) 100%)',
        zIndex: 1,
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
        background: 'linear-gradient(to bottom, transparent, #0A1628)',
        zIndex: 2,
      }} />

      {/* Content */}
      <div ref={contentRef} style={{
        position: 'relative', zIndex: 3,
        width: '100%', maxWidth: 1320, margin: '0 auto',
        padding: '40px 32px 60px',
      }}>
        <div style={{ maxWidth: 640 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18,
          }}>
            <div style={{ width: 18, height: 2, background: '#00D4FF' }} />
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: 12.5, fontWeight: 600,
              color: '#00D4FF', letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              Conectamos lo que te mueve
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            lineHeight: 1.1, letterSpacing: '-0.01em',
            color: '#F0F4F8', marginBottom: 22,
          }}>
            Soluciones de <span style={{ color: '#2FA8FF' }}>Fibra Óptica</span> y <span style={{ color: '#2FA8FF' }}>Seguridad IP</span>
          </h1>

          <p style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 400,
            fontSize: 'clamp(0.98rem, 1.4vw, 1.08rem)',
            color: '#B9C8DA', lineHeight: 1.7, marginBottom: 36, maxWidth: 520,
          }}>
            Especialistas en tendido y fusionado de fibra óptica, instalación de cámaras IP e implementación de sistemas IVMS.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
            <a href="#servicios" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 26px',
              background: 'linear-gradient(135deg, #00A3FF, #0072D6)',
              color: '#fff', fontFamily: 'Inter, sans-serif',
              fontWeight: 600, fontSize: 15,
              textDecoration: 'none', borderRadius: 8,
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 20px rgba(0,163,255,0.35)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Nuestros Servicios
            </a>
            <a href="#contacto" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 26px',
              background: 'rgba(255,255,255,0.04)',
              color: '#F0F4F8', fontFamily: 'Inter, sans-serif',
              fontWeight: 600, fontSize: 15,
              textDecoration: 'none', borderRadius: 8,
              border: '1px solid rgba(240,244,248,0.28)',
              transition: 'border-color 0.2s, color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#00D4FF'; e.currentTarget.style.color = '#00D4FF'; e.currentTarget.style.background = 'rgba(0,212,255,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,244,248,0.28)'; e.currentTarget.style.color = '#F0F4F8'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
            >
              Contactanos
            </a>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {BADGES.map(({ icon: Icon, label }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <Icon size={18} color="#00D4FF" strokeWidth={2} />
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 13.5,
                  color: '#C4D4E4', fontWeight: 500,
                }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
