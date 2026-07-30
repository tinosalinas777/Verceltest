import React, { useEffect, useRef } from "react";
import { Trophy, Users, Linkedin } from "lucide-react";

const CEOS = [
  {
    name: "Matias Soria",
    role: "Co-Fundador & CEO",
    photo: "/maty.jpeg",
    linkedin: "#",
  },
  {
    name: "Cristian Salinas",
    role: "Co-Fundador & CEO",
    photo: "/pela.jpeg",
    linkedin: "#",
  },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".ceo-card").forEach((c, i) => {
              setTimeout(() => {
                c.style.opacity = 1;
                c.style.transform = "translateY(0)";
              }, i * 180);
            });
          }
        });
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="nosotros"
      ref={ref}
      style={{
        padding: "100px 2rem",
        background: "linear-gradient(180deg, var(--bg-deep) 0%, #0D1E38 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 56,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: text + stats */}
          <div>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: "#00D4FF",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Nosotros
            </span>
            <h2
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.9rem, 3.6vw, 2.6rem)",
                color: "#F0F4F8",
                marginTop: 10,
                marginBottom: 8,
                lineHeight: 1.15,
              }}
            >
              Conocé a nuestros CEOs
            </h2>
            <div
              style={{
                width: 44,
                height: 3,
                background: "#00D4FF",
                borderRadius: 2,
                marginBottom: 22,
              }}
            />
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14.5,
                color: "#8AA4C0",
                lineHeight: 1.8,
                marginBottom: 32,
                maxWidth: 440,
              }}
            >
              Somos un equipo apasionado por la tecnología y las comunicaciones.
              Con años de experiencia en el rubro, fundamos GT Soluciones con el
              objetivo de brindar servicios de alta calidad, innovadores y
              adaptados a las necesidades de cada cliente.
            </p>

            <div style={{ display: "flex", gap: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Trophy size={26} color="#00D4FF" />
                <div>
                  <div
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontWeight: 700,
                      fontSize: 24,
                      color: "#F0F4F8",
                      lineHeight: 1,
                    }}
                  >
                    +10 Años
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12.5,
                      color: "#8AA4C0",
                      marginTop: 4,
                    }}
                  >
                    de experiencia
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Users size={26} color="#00D4FF" />
                <div>
                  <div
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontWeight: 700,
                      fontSize: 24,
                      color: "#F0F4F8",
                      lineHeight: 1,
                    }}
                  >
                    100%
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12.5,
                      color: "#8AA4C0",
                      marginTop: 4,
                    }}
                  >
                    Comprometidos
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CEO photo cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
            }}
          >
            {CEOS.map((ceo, i) => (
              <div
                key={i}
                className="ceo-card"
                style={{
                  opacity: 0,
                  transform: "translateY(40px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "3 / 3.4",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={ceo.photo}
                    alt={ceo.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ padding: "18px 16px 22px" }}>
                  <h3
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: "#F0F4F8",
                      marginBottom: 4,
                    }}
                  >
                    {ceo.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12.5,
                      color: "#00D4FF",
                      marginBottom: 12,
                    }}
                  >
                    {ceo.role}
                  </div>
                  <a
                    href={ceo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      color: "#8AA4C0",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#00D4FF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#8AA4C0")
                    }
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
