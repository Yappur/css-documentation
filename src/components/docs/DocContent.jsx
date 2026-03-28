import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";

// ── Orden explícito de las lecciones ──────────────────────────
// Usamos un array separado porque los objetos JS no garantizan
// orden. Este array define qué lección es "anterior" y cuál es
// "siguiente" para cada slug.
const DOCS_ORDER = [
  "introduccion",
  "conectar_html_a_css",
  "selectores_basicos",
  "especificidad",
  "colores",
  "tipografias",
  "gradientes",
  "sombras",
  "animaciones",
  "box_model",
  "unidades",
  "flexbox",
  "flexbox_avanzado",
  "position",
  "grid",
  "pseudo_clases",
  "pseudo_elementos",
  "responsive_design",
  "mobile_first",
];

const DOCS = {
  introduccion: () => import("../../content/1_introduccion.md?raw"),
  conectar_html_a_css: () => import("../../content/2_conectar_html_a_css.md?raw"),
  selectores_basicos: () => import("../../content/3_selectores_basicos.md?raw"),
  especificidad: () => import("../../content/4_especificidad.md?raw"),
  colores: () => import("../../content/2_colores.md?raw"),
  tipografias: () => import("../../content/3_tipografias.md?raw"),
  gradientes: () => import("../../content/gradientes.md?raw"),
  sombras: () => import("../../content/sombras.md?raw"),
  animaciones: () => import("../../content/animaciones.md?raw"),

  box_model: () => import("../../content/_box_model.md?raw"),
  unidades: () => import("../../content/4_unidades.md?raw"),
  flexbox: () => import("../../content/flexbox.md?raw"),
  flexbox_avanzado: () => import("../../content/flexbox_avanzado.md?raw"),
  position: () => import("../../content/position.md?raw"),
  grid: () => import("../../content/css-grid-guia.md?raw"),
  pseudo_clases: () => import("../../content/pseudo_clases.md?raw"),
  pseudo_elementos: () => import("../../content/pseudo_elementos.md?raw"),
  responsive_design: () => import("../../content/responsive_design.md?raw"),
  mobile_first: () => import("../../content/mobile_first.md?raw"),
};

const MD_COMPONENTS = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-white mt-0 mb-4 pb-4 border-b border-white/8">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold text-white mt-10 mb-4 pb-2 border-b border-white/6">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold text-white/90 mt-7 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-white/60 leading-7 mb-4 text-[15px]">{children}</p>
  ),
  code: ({ inline, className, children }) => {
    if (inline) {
      return (
        <code className="px-1.5 py-0.5 rounded bg-white/8 text-[#7dd3fc] text-[13px] font-mono">
          {children}
        </code>
      );
    }
    return (
      <code
        className={`${className ?? ""} block w-full bg-transparent p-0 text-[13px] font-mono text-white/85 leading-6`}
      >
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-[#161616] border border-white/8 rounded-lg p-5 overflow-x-auto mb-6 text-[13px] font-mono leading-6 [&>code]:whitespace-pre">
      {children}
    </pre>
  ),
  ul: ({ children }) => (
    <ul className="text-white/60 mb-4 space-y-1.5 pl-5 list-disc marker:text-[#264de4] text-[15px] leading-7 [&_ul]:mt-1.5 [&_ol]:mt-1.5">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-white/60 mb-4 space-y-1.5 pl-5 list-decimal marker:text-white/40 text-[15px] leading-7 [&_ul]:mt-1.5 [&_ol]:mt-1.5">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="pl-1 text-[15px] leading-7 marker:text-inherit [&>p]:mb-2 [&>p:last-child]:mb-0">
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[#264de4] bg-[#264de4]/6 px-5 py-3 rounded-r-lg mb-4">
      <div className="text-white/70 text-[14px] leading-6 [&>p]:mb-0 [&>p]:text-white/70">
        {children}
      </div>
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-white/10">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => (
    <th className="text-left py-2 px-4 text-white/50 text-[11px] uppercase tracking-wider font-medium [&_code]:text-[11px] [&_code]:uppercase">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-2.5 px-4 text-white/60 text-[14px] border-b border-white/4 align-top [&_code]:text-[13px]">
      {children}
    </td>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#264de4] hover:underline"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="border-white/6 my-8" />,
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
};

function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4 max-w-3xl">
      <div className="h-8 bg-white/6 rounded w-2/3" />
      <div className="h-px bg-white/6" />
      <div className="space-y-2 pt-2">
        <div className="h-4 bg-white/4 rounded w-full" />
        <div className="h-4 bg-white/4 rounded w-5/6" />
        <div className="h-4 bg-white/4 rounded w-4/6" />
      </div>
      <div className="h-32 bg-white/4 rounded-lg mt-4" />
    </div>
  );
}

// ── Botones de navegación entre lecciones ─────────────────────
// Recibe prevSlug y nextSlug (pueden ser null si no existen).
// Solo renderiza el botón si el slug correspondiente no es null.
// justify-end → alinea los botones a la derecha.
// Si hay ambos botones, justify-between los separa a los extremos.
function NavButtons({ prevSlug, nextSlug }) {
  const hasBoth = prevSlug && nextSlug;

  return (
    <div
      className={`flex mt-16 pt-6 border-t  border-white/6 ${
        hasBoth ? "justify-between" : "justify-end"
      }`}
    >
      {/* Botón anterior: solo se muestra si prevSlug no es null */}
      {prevSlug && (
        <Link
          to={`/docs/${prevSlug}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/8 text-white/50 hover:text-white hover:border-white/2 shadow-md shadow-white/4 text-sm hover:shadow-md hover:shadow-white/6 transition-colors group"
        >
          {/* Flecha izquierda */}
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Lección anterior
        </Link>
      )}

      {/* Botón siguiente: solo se muestra si nextSlug no es null */}
      {nextSlug && (
        <Link
          to={`/docs/${nextSlug}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border duration-200 border-blue-400/40 shadow-sm shadow-blue-400/20 hover:border-blue-400/70 hover:shadow-md hover:shadow-blue-400/30 text-sm transition-colors group"
        >
          Siguiente lección
          {/* Flecha derecha */}
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────
export default function DocContent({ slug }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // ── Calcular lecciones anterior y siguiente ────────────────
  // Buscamos el índice del slug actual en el array de orden.
  // Si currentIndex es 0, no hay anterior (prevSlug = null).
  // Si currentIndex es el último, no hay siguiente (nextSlug = null).
  const currentIndex = DOCS_ORDER.indexOf(slug);
  const prevSlug = currentIndex > 0 ? DOCS_ORDER[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < DOCS_ORDER.length - 1 ? DOCS_ORDER[currentIndex + 1] : null;

  useEffect(() => {
    setLoading(true);
    setError(false);

    const loader = DOCS[slug];

    if (!loader) {
      setLoading(false);
      setError(true);
      return;
    }

    loader()
      .then((module) => {
        setContent(module.default);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [slug]);

  return (
    <div className="max-w-3xl mx-auto px-8 py-10">
      {loading && <LoadingSkeleton />}

      {error && (
        <div className="text-center py-20">
          <p className="text-white/20 text-6xl mb-4">404</p>
          <p className="text-white/40 text-lg mb-2">Página no encontrada</p>
          <p className="text-white/25 text-sm mb-6">
            El archivo <code className="text-white/40">{slug}.md</code> no
            existe todavía.
          </p>
          <Link
            to="/docs/introduccion"
            className="text-[#264de4] text-sm hover:underline"
          >
            ← Volver a la introducción
          </Link>
        </div>
      )}

      {!loading && !error && (
        <div className="docs-content ">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_COMPONENTS}>
            {content}
          </ReactMarkdown>

          {/* ── Navegación entre lecciones ───────────────────
              Se pasan prevSlug y nextSlug; el componente decide
              cuáles mostrar según cuáles no son null.           */}
          <NavButtons prevSlug={prevSlug} nextSlug={nextSlug} />
        </div>
      )}
    </div>
  );
}
