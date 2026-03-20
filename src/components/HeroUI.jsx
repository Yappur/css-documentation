// ¿Cómo se posiciona?
//   `absolute inset-0` → cubre exactamente el mismo espacio
//   que Scene3D (ambos son hijos absolutos del App).
//   El Canvas de Three.js queda por debajo en el z-index.
// ─────────────────────────────────────────────────────────────

import { Link } from "react-router-dom";

export default function HeroUI() {
  return (
    // ── Contenedor full-screen ────────────────────────────────
    // `pointer-events-none` → el overlay no intercepta el mouse.
    // `z-10` → por encima del canvas (z-0).
    // `select-none` → evita selección de texto al arrastrar.
    <div className="absolute inset-0 z-10 pointer-events-none select-none flex flex-col">
      {/* ── Hero text — izquierda vertical center ─────────── */}
      <div className="flex-1 flex flex-col justify-center px-10 max-w-sm">
        <div className="opacity-0-init animate-fade-up delay-100 mb-5">
          <span className="inline-flex items-center gap-2 text-xs font-body font-medium text-[#264de4] uppercase tracking-widest border border-[#264de4]/30 rounded-full px-4 py-1.5 bg-[#264de4]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#264de4] animate-pulse" />
            CSS Documentacion Principiantes
          </span>
        </div>

        {/* Título principal */}
        <h1
          className="opacity-0-init animate-fade-up delay-200 font-display text-white leading-[0.9] mb-4"
          style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
        >
          CASCADING
          <br />
          <span className="text-[#264de4]">STYLE</span>
          <br />
          SHEETS
        </h1>

        <div className="flex">
          <p className="opacity-0-init animate-fade-up delay-300 font-body text-white/40 text-sm leading-relaxed max-w-65">
            El lenguaje que da vida al diseño web.{" "}
          </p>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white/30"
          >
            <path
              d="M8 3L8 14L11 11L13 15L15 14L13 10L17 10L8 3Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* ── Glow decorativo debajo del logo ───────────────── */}
      {/* Centrado horizontalmente, en el tercio inferior */}
      <div className="absolute left-1/2 top-[62%]">
        <div
          className="glow-pulse"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "300px",
            height: "60px",
            background:
              "radial-gradient(ellipse, rgba(38, 77, 228, 0.35) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </div>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="flex items-end justify-between px-10 pb-8 opacity-0-init animate-fade-up delay-500">
        <span className="font-body text-white/80 text-xs tracking-widest uppercase">
          Hecho con 💙 por Mateo Yapur
        </span>
        <div className="pointer-events-auto flex items-center gap-3 mt-8">
          <Link
            to="/docs"
            className="
      inline-flex items-center gap-2 px-5 py-3 rounded-full
      bg-[#264de4] hover:bg-[#3357f5]
      text-white text-sm font-medium font-body
      transition-all duration-200
      hover:shadow-[0_0_20px_rgba(38,77,228,0.4)]
      hover:-translate-y-0.5
    "
          >
            Ver documentación
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  );
}
