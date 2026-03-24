// ─────────────────────────────────────────────────────────────
// Navbar.jsx — Barra de navegación global
//
// Se usa en Home y en Docs.
// Recibe prop `transparent` para el hero (fondo transparente)
// y sin prop para docs (fondo sólido oscuro).
// ─────────────────────────────────────────────────────────────
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// ── Links internos (React Router) ────────────────────────────
const INTERNAL_LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Documentación", to: "/docs" },
  { label: "Herramientas", to: "/herramientas" },
];

// ── Links externos ────────────────────────────────────────────
const EXTERNAL_LINKS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@MattYappp",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
  },
  {
    label: "HTMLDocu",
    href: "https://htmldocu.vercel.app/index.html",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
];

// ── Ícono de menú hamburguesa ─────────────────────────────────
function IconMenu({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </>
      ) : (
        <>
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
        </>
      )}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Navbar — componente principal
//
// Props:
//   transparent (bool) → true en el Hero para fondo transparente
// ─────────────────────────────────────────────────────────────
export default function Navbar({ transparent = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // para saber qué ruta está activa

  // Una función helper para saber si un link interno está activo
  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <>
      {/* ── Barra principal ──────────────────────────────── */}
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-6 md:px-10 h-14
        transition-all duration-300
        ${
          transparent
            ? // Hero: fondo transparente con blur leve
              "bg-black/20 backdrop-blur-sm border-b border-white/[0.06]"
            : // Docs: fondo sólido oscuro
              "bg-[#0a0a0a] border-b border-white/[0.06]"
        }
      `}
      >
        {/* ── Logo ─────────────────────────────────────── */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="flex items-center gap-2 opacity-0-init animate-fade-up delay-100">
            <div className="w-2 h-2 rounded-full bg-[#264de4]" />
            <span className="font-display text-white text-sm tracking-[0.3em] uppercase">
              CSS DOCUMENTACIÓN
            </span>
          </div>
        </Link>

        {/* ── Links centrales (desktop) ─────────────────── */}
        <div className="hidden md:flex items-center gap-1">
          {INTERNAL_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`
                px-3 py-1.5 rounded-md text-sm transition-colors duration-150
                ${
                  isActive(link.to)
                    ? "text-white bg-white/[0.08]"
                    : "text-white/45 hover:text-white/80 hover:bg-white/[0.04]"
                }
              `}
            >
              {link.label}
            </Link>
          ))}

          {/* Separador */}
          <div className="w-px h-4 bg-white/[0.1] mx-1" />

          {/* Links externos */}
          {EXTERNAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm
                text-white/35 hover:text-white/70 hover:bg-white/[0.04]
                transition-colors duration-150
              "
            >
              {link.icon}
              {link.label}
              {/* Ícono de link externo */}
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-50"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ))}
        </div>

        {/* ── Botón derecho + hamburguesa (mobile) ─────── */}
        <div className="flex items-center gap-3">
          {/* Hamburguesa en mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/50 hover:text-white transition-colors p-1"
            aria-label="Menú"
          >
            <IconMenu open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* ── Menú mobile desplegable ───────────────────────── */}
      {menuOpen && (
        <div
          className="
          fixed top-14 left-0 right-0 z-40
          bg-[#0a0a0a] border-b border-white/[0.06]
          px-6 py-4 flex flex-col gap-1
          md:hidden
        "
        >
          {/* Links internos */}
          {INTERNAL_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`
                px-3 py-2.5 rounded-md text-sm transition-colors
                ${
                  isActive(link.to)
                    ? "text-white bg-white/[0.08]"
                    : "text-white/50 hover:text-white"
                }
              `}
            >
              {link.label}
            </Link>
          ))}

          <div className="h-px bg-white/[0.06] my-2" />

          {/* Links externos */}
          {EXTERNAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* ── Espaciado para que el contenido no quede bajo el navbar ─
          Solo en páginas que NO son el hero (el hero es fullscreen) */}
      {!transparent && <div className="h-14" />}
    </>
  );
}
