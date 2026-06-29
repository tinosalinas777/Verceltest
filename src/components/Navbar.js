import React, { useState, useEffect } from 'react';

const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      background: scrolled ? 'rgba(10, 22, 40, 0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,212,255,0.12)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <nav
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          width: "100%",
          padding: "20px 60px",
        }}
      >
        {/* Logo */}
        <a href="#inicio" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 8,
            background: 'linear-gradient(135deg, #00D4FF, #0080CC)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: 18,
            color: '#0A1628',
          }}>GT</div>
          <span style={{
            fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
            fontSize: 22, color: '#F0F4F8', letterSpacing: '0.04em',
          }}>GT<span style={{ color: '#00D4FF' }}>Soluciones</span></span>
        </a>

        {/* Desktop links */}
        <ul style={{
          display: 'flex', gap: 36, listStyle: 'none',
          fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500,
        }} className="nav-desktop">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                color: '#8AA4C0', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#00D4FF'}
                onMouseLeave={e => e.target.style.color = '#8AA4C0'}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', padding: 8,
        }} className="nav-hamburger" aria-label="Menu">
          <div style={{ width: 24, height: 2, background: '#00D4FF', marginBottom: 5, borderRadius: 2 }} />
          <div style={{ width: 24, height: 2, background: '#00D4FF', marginBottom: 5, borderRadius: 2 }} />
          <div style={{ width: 24, height: 2, background: '#00D4FF', borderRadius: 2 }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(10,22,40,0.98)', borderTop: '1px solid rgba(0,212,255,0.15)',
          padding: '1.5rem 2rem',
        }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', color: '#F0F4F8', textDecoration: 'none',
              fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 600,
              padding: '10px 0', borderBottom: '1px solid rgba(0,212,255,0.08)',
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
