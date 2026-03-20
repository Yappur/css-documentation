// ─────────────────────────────────────────────────────────────
// Sidebar.jsx — Navegación lateral de la documentación
//
// Recibe currentSlug para resaltar el ítem activo.
// Usa <Link> de React Router en lugar de <a> para navegar
// sin recargar la página (SPA navigation).
// ─────────────────────────────────────────────────────────────
import { Link } from "react-router-dom";

// ── Estructura de la documentación ───────────────────────────
// Cada sección tiene un título y una lista de páginas.
// El `slug` debe coincidir con el nombre del archivo en /content/
const NAV = [
  {
    section: "Introducción",
    items: [
      { slug: "introduccion", label: "Qué es CSS" },
      { slug: "como-funciona", label: "Cómo funciona" },
    ],
  },
  {
    section: "Selectores",
    items: [
      { slug: "selectores-basicos", label: "Selectores básicos" },
      { slug: "selectores-combinados", label: "Selectores combinados" },
      { slug: "pseudoclases", label: "Pseudoclases" },
      { slug: "pseudoelementos", label: "Pseudoelementos" },
    ],
  },
  {
    section: "Caja y layout",
    items: [
      { slug: "box-model", label: "Box model" },
      { slug: "flexbox", label: "Flexbox" },
      { slug: "grid", label: "CSS Grid" },
      { slug: "posicion", label: "Position" },
    ],
  },
  {
    section: "Tipografía",
    items: [
      { slug: "fuentes", label: "Fuentes y font-face" },
      { slug: "texto", label: "Propiedades de texto" },
    ],
  },
  {
    section: "Visual",
    items: [
      { slug: "colores", label: "Colores y variables" },
      { slug: "gradientes", label: "Gradientes" },
      { slug: "sombras", label: "Sombras" },
      { slug: "animaciones", label: "Transiciones y animaciones" },
    ],
  },
  {
    section: "Avanzado",
    items: [
      { slug: "custom-properties", label: "Custom Properties" },
      { slug: "media-queries", label: "Media Queries" },
      { slug: "container-queries", label: "Container Queries" },
    ],
  },
];

export default function Sidebar({ currentSlug }) {
  return (
    // h-full → ocupa toda la altura del aside
    // overflow-y-auto → scroll si hay muchos items
    // border-r → línea divisoria con el contenido
    <div className="h-full overflow-y-auto border-r border-white/[0.06] bg-[#0a0a0a] flex flex-col">
      {/* ── Navegación ────────────────────────────────────── */}
      <nav className="flex-1 px-3 py-4">
        {NAV.map((group) => (
          <div key={group.section} className="mb-5">
            {/* Título de sección (no es un link) */}
            <p className="px-2 mb-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
              {group.section}
            </p>

            {/* Links de la sección */}
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = item.slug === currentSlug;
                return (
                  <li key={item.slug}>
                    <Link
                      to={`/docs/${item.slug}`}
                      className={`
                        flex items-center gap-2 px-2 py-1.5 rounded-md text-sm
                        transition-all duration-150
                        ${
                          isActive
                            ? // Activo: fondo azul tenue + texto blanco
                              "bg-[#264de4]/15 text-white"
                            : // Inactivo: texto gris, hover claro
                              "text-white/45 hover:text-white/80 hover:bg-white/[0.04]"
                        }
                      `}
                    >
                      {/* Indicador activo */}
                      {isActive && (
                        <span className="w-1 h-1 rounded-full bg-[#264de4] shrink-0" />
                      )}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      {/* 
      <div className="px-5 py-4 border-t border-white/[0.06]">
        <p className="text-white/20 text-[11px]">CSS Reference v1.0</p>
      </div> */}
    </div>
  );
}
