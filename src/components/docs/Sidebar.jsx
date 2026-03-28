// Recibe currentSlug para resaltar el ítem activo.
// Usa <Link> de React Router en lugar de <a> para navegar
// sin recargar la página (SPA navigation).
import { Link } from "react-router-dom";

// El `slug` debe coincidir con el nombre del archivo en /content/
const NAV = [
  {
    section: "Introducción",
    items: [{ slug: "introduccion", label: "Qué es CSS" }, { slug: "conectar_html_a_css", label: "Conectar CSS con HTML" }],
  },
  {
    section: "Selectores",
    items: [
      { slug: "selectores_basicos", label: "Selectores básicos" },
      { slug: "especificidad", label: "Especificidad" },
    ],
  },
  {
    section: "Visual",
    items: [
      { slug: "colores", label: "Colores y variables" },
      { slug: "tipografias", label: "Tipografías" },
      { slug: "gradientes", label: "Gradientes" },
      { slug: "sombras", label: "Sombras" },
      { slug: "animaciones", label: "Transiciones y animaciones" },
    ],
  },
  
  {
    section: "Caja y layout",
    items: [
      { slug: "box_model", label: "Box model" },
      { slug: "unidades", label: "Unidades" },
      { slug: "flexbox", label: "Flexbox" },
      { slug: "flexbox_avanzado", label: "Flexbox Avanzado" },
      
      { slug: "position", label: "Position" },
      { slug: "grid", label: "CSS Grid" },
    ],
  },
  {
    section: "Avanzado",
    items: [
      { slug: "pseudo_clases", label: "Pseudo-clases" },
      { slug: "pseudo_elementos", label: "Pseudo-elementos" },
      { slug: "responsive_design", label: "Responsive" },
      { slug: "mobile_first", label: "Mobile First" },
    ],
  },
];

export default function Sidebar({ currentSlug, sidebarOpen, setSidebarOpen }) {
  return (
    <div className="h-full overflow-y-auto border-r border-white/6 bg-[#0a0a0a] flex flex-col">
      <div className="px-3 py-4 border-b border-white/6 flex justify-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-white/4 hover:bg-white/8 transition-colors"
        >
          <svg
            className={`w-5 h-5 text-white/60 transition-transform ${sidebarOpen ? "" : "rotate-180"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <nav className={`flex-1 px-3 py-4 ${sidebarOpen ? "" : "hidden"}`}>
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
                            ? "bg-[#264de4]/15 text-white"
                            : "text-white/45 hover:text-white/80 hover:bg-white/4"
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
    </div>
  );
}
