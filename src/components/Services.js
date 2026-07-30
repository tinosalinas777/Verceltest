import React, { useEffect, useRef } from "react";

const SERVICES = [
  {
    photo: "/fibra.jpg",
    title: "Tendido de Fibra Óptica",
    desc: "Diseño e instalación de redes de fibra óptica para garantizar la máxima velocidad y estabilidad en tus conexiones.",
    features: [
      "Fibra monomodo y multimodo",
      "Cables aéreos y subterráneos",
      "Grandes extensiones de red",
    ],
  },
  {
    photo: "/fusionadora.webp",
    title: "Fusionado de Fibra Óptica",
    desc: "Empalmes de alta precisión con equipos de última generación para asegurar conexiones confiables y duraderas.",
    features: [
      "Fusión por arco eléctrico",
      "Certificación de pérdidas OTDR",
      "Empalmes mecánicos y ópticos",
    ],
  },
  {
    photo: "Hikvision_ivms_download.webp",
    title: "Instalación de Cámaras IP e IVMS",
    desc: "Implementación de sistemas de vigilancia IP e integración con IVMS para el control total de tu entorno.",
    features: [
      "Resolución 4K / visión nocturna",
      "Gestión multi-sitio",
      "Compatible Hikvision / Dahua",
    ],
  },
];

export default function Services() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = 1;
            e.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      style={{ padding: "100px 2rem", background: "var(--bg-deep)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            Servicios
          </span>
          <h2
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#F0F4F8",
              marginTop: 12,
              lineHeight: 1.1,
            }}
          >
            ¿Qué ofrecemos?
          </h2>
          <div
            style={{
              width: 48,
              height: 3,
              background: "#00D4FF",
              margin: "20px auto 0",
              borderRadius: 2,
            }}
          />
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {SERVICES.map((s, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                overflow: "hidden",
                opacity: 0,
                transform: "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color 0.2s, box-shadow 0.2s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(0,212,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Realistic photo */}
              <div style={{ width: "100%", height: 190, overflow: "hidden" }}>
                <img
                  src={s.photo}
                  alt={s.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ padding: "28px 28px 32px" }}>
                <h3
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontWeight: 700,
                    fontSize: 21,
                    color: "#F0F4F8",
                    marginBottom: 4,
                  }}
                >
                  {s.title}
                </h3>
                <div
                  style={{
                    width: 30,
                    height: 3,
                    background: "#00D4FF",
                    borderRadius: 2,
                    marginBottom: 14,
                  }}
                />
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    color: "#8AA4C0",
                    lineHeight: 1.7,
                    marginBottom: 18,
                  }}
                >
                  {s.desc}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {s.features.map((f, j) => (
                    <li
                      key={j}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#00D4FF",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: 13,
                          color: "#8AA4C0",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
