import React, { useState, useEffect } from "react";
import { MessageCircle, Instagram, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipos", href: "#equipos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_NUMBER = "5491127227613";
const INSTAGRAM_USER = "g_tsoluciones";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(8, 17, 32, 0.96)"
          : "rgba(8, 17, 32, 0.55)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,212,255,0.12)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: 1320,
          margin: "0 auto",
          padding: "16px 32px",
          gap: 20,
        }}
      >
        {/* Logo */}
        <a
          href="#inicio"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "linear-gradient(135deg, #00D4FF, #0080CC)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: 17,
              color: "#0A1628",
            }}
          >
            GT
          </div>
          <span
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "#F0F4F8",
              letterSpacing: "0.04em",
            }}
          >
            SOLUCIONES
          </span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: 34,
            listStyle: "none",
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            fontWeight: 500,
          }}
          className="nav-desktop"
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setActive(l.href)}
                style={{
                  color: active === l.href ? "#00D4FF" : "#C4D4E4",
                  textDecoration: "none",
                  paddingBottom: 4,
                  borderBottom:
                    active === l.href
                      ? "2px solid #00D4FF"
                      : "2px solid transparent",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    active === l.href ? "#00D4FF" : "#C4D4E4")
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div
          style={{ display: "flex", gap: 10, alignItems: "center" }}
          className="nav-desktop"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#25D366",
              color: "#fff",
              textDecoration: "none",
              padding: "9px 18px",
              borderRadius: 8,
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 13.5,
              transition: "filter 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "brightness(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = "brightness(1)")
            }
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a
            href={`https://instagram.com/${INSTAGRAM_USER}`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)",
              color: "#fff",
              textDecoration: "none",
              padding: "9px 18px",
              borderRadius: 8,
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 13.5,
              transition: "filter 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "brightness(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = "brightness(1)")
            }
          >
            <Instagram size={16} /> Instagram
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: "#00D4FF",
          }}
          className="nav-hamburger"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(10,22,40,0.98)",
            borderTop: "1px solid rgba(0,212,255,0.15)",
            padding: "1.5rem 2rem",
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => {
                setActive(l.href);
                setOpen(false);
              }}
              style={{
                display: "block",
                color: "#F0F4F8",
                textDecoration: "none",
                fontFamily: "Rajdhani, sans-serif",
                fontSize: 20,
                fontWeight: 600,
                padding: "10px 0",
                borderBottom: "1px solid rgba(0,212,255,0.08)",
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
                padding: "11px 0",
                borderRadius: 8,
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={`https://instagram.com/${INSTAGRAM_USER}`}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background:
                  "linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)",
                color: "#fff",
                textDecoration: "none",
                padding: "11px 0",
                borderRadius: 8,
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
