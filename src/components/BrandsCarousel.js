import React from "react";

// Official brand logos (hotlinked from Wikimedia Commons) representing
// the equipment manufacturers GT Soluciones installs and supports.
// Shown for identification purposes only; each mark belongs to its respective owner.
const BRANDS = [
  {
    name: "Dahua",
    sub: "Videovigilancia",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Dahua_Technology_logo.svg",
    h: 26,
  },
  {
    name: "Hikvision",
    sub: "Cámaras IP",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Hikvision_logo.svg",
    h: 22,
  },
  {
    name: "Cisco",
    sub: "Networking",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Cisco_logo_blue_2016.svg",
    h: 34,
  },
  {
    name: "MikroTik",
    sub: "Routing",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/MikroTik_logo.svg",
    h: 22,
  },
];

const Track = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 100,
      flexShrink: 1,
      paddingRight: 100,
    }}
  >
    {BRANDS.map((b, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          background: "#F5F8FB",
          border: "1px solid rgba(0,212,255,0.12)",
          borderRadius: 12,
          padding: "18px 32px",
          minWidth: 150,
        }}
      >
        <img
          src={b.logo}
          alt={`Logo ${b.name}`}
          loading="lazy"
          style={{
            height: b.h,
            maxWidth: 130,
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 10.5,
            letterSpacing: "0.08em",
            color: "#5C7799",
            textTransform: "uppercase",
          }}
        >
          {b.sub}
        </div>
      </div>
    ))}
  </div>
);

export default function BrandsCarousel() {
  return (
    <section
      style={{
        background: "#0D1E38",
        borderTop: "1px solid rgba(0,212,255,0.1)",
        borderBottom: "1px solid rgba(0,212,255,0.1)",
        padding: "26px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 11.5,
            fontWeight: 500,
            color: "#5C7799",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Trabajamos con equipos de las mejores marcas
        </span>
      </div>

      <div className="brands-marquee-mask" style={{ position: "relative" }}>
        <div className="brands-marquee-track">
          <Track />
          <Track />
        </div>
      </div>

      <style>{`
        .brands-marquee-mask {
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .brands-marquee-track {
          display: flex;
          width: max-content;
          animation: brandsScroll 22s linear infinite;
        }
        .brands-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes brandsScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
