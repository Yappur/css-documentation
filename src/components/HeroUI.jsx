// ─────────────────────────────────────────────────────────────
// HeroUI.jsx — Interfaz superpuesta sobre la escena 3D
//
// ¿Qué hace?
//   Renderiza el texto, badges y footer encima del canvas 3D.
//   Usa `pointer-events-none` para que el mouse "pase a través"
//   hacia el canvas, permitiendo el drag del logo.
//
// ¿Cómo se posiciona?
//   `absolute inset-0` → cubre exactamente el mismo espacio
//   que Scene3D (ambos son hijos absolutos del App).
//   El Canvas de Three.js queda por debajo en el z-index.
// ─────────────────────────────────────────────────────────────

export default function HeroUI() {
  return (
    // ── Contenedor full-screen ────────────────────────────────
    // `pointer-events-none` → el overlay no intercepta el mouse.
    // `z-10` → por encima del canvas (z-0).
    // `select-none` → evita selección de texto al arrastrar.
    <div className="absolute inset-0 z-10 pointer-events-none select-none flex flex-col">

      {/* ── Header / Navbar ────────────────────────────────── */}
      <header className="flex items-center justify-between px-10 pt-8">
        {/* Logo de marca (texto) */}
        <div className="flex items-center gap-2 opacity-0-init animate-fade-up delay-100">
          <div className="w-2 h-2 rounded-full bg-[#264de4]" />
          <span className="font-display text-white text-sm tracking-[0.3em] uppercase">
            CSS Universe
          </span>
        </div>

        {/* Navigation links (decorativos) */}
        <nav className="flex items-center gap-8 opacity-0-init animate-fade-up delay-200">
          {['Docs', 'Examples', 'Community'].map((item) => (
            <span
              key={item}
              className="font-body text-white/40 text-sm tracking-wide hover:text-white/80 transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </nav>
      </header>

      {/* ── Hero text — izquierda vertical center ─────────── */}
      <div className="flex-1 flex flex-col justify-center px-10 max-w-sm">

        {/* Badge superior */}
        <div className="opacity-0-init animate-fade-up delay-100 mb-5">
          <span className="inline-flex items-center gap-2 text-xs font-body font-medium text-[#264de4] uppercase tracking-[0.2em] border border-[#264de4]/30 rounded-full px-4 py-1.5 bg-[#264de4]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#264de4] animate-pulse" />
            CSS Level 3
          </span>
        </div>

        {/* Título principal */}
        <h1 className="opacity-0-init animate-fade-up delay-200 font-display text-white leading-[0.9] mb-4"
            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
          CASCADING<br />
          <span className="text-[#264de4]">STYLE</span><br />
          SHEETS
        </h1>

        {/* Subtítulo */}
        <p className="opacity-0-init animate-fade-up delay-300 font-body text-white/40 text-sm leading-relaxed max-w-[260px]">
          El lenguaje que da vida al diseño web. Arrastra el logo para explorarlo.
        </p>

        {/* Hint de interacción */}
        <div className="opacity-0-init animate-fade-up delay-500 mt-8 flex items-center gap-3">
          <div className="flex gap-1">
            {/* Icono de mouse/cursor animado */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                 className="text-white/30">
              <path d="M8 3L8 14L11 11L13 15L15 14L13 10L17 10L8 3Z"
                    fill="currentColor" />
            </svg>
          </div>
          <span className="font-body text-white/30 text-xs tracking-widest uppercase">
            Drag to rotate
          </span>
        </div>

      </div>

      {/* ── Glow decorativo debajo del logo ───────────────── */}
      {/* Centrado horizontalmente, en el tercio inferior */}
      <div className="absolute left-1/2 top-[62%]">
        <div
          className="glow-pulse"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '300px',
            height: '60px',
            background: 'radial-gradient(ellipse, rgba(38, 77, 228, 0.35) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>

      {/* ── Stats laterales derecha ───────────────────────── */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-8">
        {[
          { label: 'Especificaciones', value: 'W3C' },
          { label: 'Versión actual', value: 'CSS3' },
          { label: 'Propiedades', value: '500+' },
        ].map(({ label, value }, i) => (
          <div
            key={label}
            className="opacity-0-init animate-fade-up text-right"
            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
          >
            <p className="font-body text-white/25 text-[10px] uppercase tracking-widest mb-0.5">
              {label}
            </p>
            <p className="font-display text-white/70 text-xl tracking-wide">
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="flex items-end justify-between px-10 pb-8 opacity-0-init animate-fade-up delay-500">
        <span className="font-body text-white/20 text-xs tracking-widest uppercase">
          Interactive 3D Demo
        </span>
        <span className="font-body text-white/20 text-xs">
          Built with React · Three.js · R3F
        </span>
      </footer>

    </div>
  )
}
