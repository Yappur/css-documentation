import { Link } from "react-router-dom";
import Scene3D from "./Scene3D";

export default function HeroUI() {
  return (
    <div className="relative w-full min-h-screen flex flex-col z-10 select-none overflow-hidden">
      {/* ── Contenido principal ── */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* MOBILE: texto ocupa lo que necesita, sin padding exagerado */}
        {/* DESKTOP: columna izquierda, centrada verticalmente */}
        <div className="flex flex-col justify-center px-10 pt-24 pb-6 md:py-0 md:px-16 md:flex-1 md:max-w-xl">
          <div className="opacity-0-init animate-fade-up delay-100 mb-5">
            <span className="inline-flex items-center gap-2 text-xs font-body font-medium text-[#264de4] uppercase tracking-widest border border-[#264de4]/30 rounded-full px-4 py-1.5 bg-[#264de4]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#264de4] animate-pulse" />
              CSS Documentacion Principiantes
            </span>
          </div>

          <h1
            className="opacity-0-init animate-fade-up delay-200 font-display text-white leading-[0.9] mb-4"
            style={{ fontSize: "clamp(2.8rem, 8vw + 0.5rem, 7.5rem)" }}
          >
            CASCADING
            <br />
            <span className="text-[#264de4]">STYLE</span>
            <br />
            SHEETS
          </h1>

          <div className="flex items-center gap-2">
            <p className="opacity-0-init animate-fade-up delay-300 font-body text-white/40 text-sm leading-relaxed max-w-xs">
              El lenguaje que da vida al diseño web.
            </p>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white/30 shrink-0"
            >
              <path
                d="M8 3L8 14L11 11L13 15L15 14L13 10L17 10L8 3Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Logo 3D */}
        {/* MOBILE: altura fija razonable, sin min-h que compita */}
        {/* DESKTOP: flex-1 ocupa toda la mitad derecha con altura completa */}
        <div className="w-full h-[280px] md:flex-1 md:h-auto overflow-hidden">
          <Scene3D />
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="flex items-end justify-between px-10 pb-8 opacity-0-init animate-fade-up delay-500 pointer-events-none">
        <span className="font-body text-white/80 text-xs tracking-widest uppercase">
          Hecho con 💙 por Mateo Yapur
        </span>
        <div className="pointer-events-auto flex items-center gap-3">
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#264de4] hover:bg-[#3357f5] text-white text-sm font-medium font-body transition-all duration-200 hover:shadow-[0_0_20px_rgba(38,77,228,0.4)] hover:-translate-y-0.5"
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
