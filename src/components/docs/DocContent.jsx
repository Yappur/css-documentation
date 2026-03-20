// ─────────────────────────────────────────────────────────────
// DocContent.jsx — Renderiza el archivo markdown del slug actual
//
// Flujo:
//   1. Recibe el slug ("flexbox", "grid", etc.)
//   2. Importa dinámicamente el archivo .md correspondiente
//   3. Lo renderiza con react-markdown + plugins de sintaxis
//   4. Muestra estados de loading y error
//
// Librerías:
//   react-markdown     → convierte string Markdown a JSX
//   remark-gfm         → habilita tablas, listas de tareas, etc.
//   rehype-highlight   → resaltado de sintaxis en bloques de código
// ─────────────────────────────────────────────────────────────
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";

// ── Mapa de slugs a imports dinámicos ─────────────────────────
// Vite necesita conocer los archivos en tiempo de build,
// por eso no podemos hacer import(`../content/${slug}.md`)
// directamente — tenemos que listar los imports posibles.
// ?raw → importa el archivo como string puro (no como módulo)

const DOCS = {
  introduccion: () => import("../../content/guia_css_1.md?raw"),
  Layoutdiseño: () => import("../../content/guia_css_2.md?raw"),
  avanzado: () => import("../../content/guia_css_3.md?raw"),
};

const MD_COMPONENTS = {
  // Títulos
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-white mt-0 mb-4 pb-4 border-b border-white/[0.08]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold text-white mt-10 mb-4 pb-2 border-b border-white/[0.06]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold text-white/90 mt-7 mb-3">
      {children}
    </h3>
  ),

  // Párrafo
  p: ({ children }) => (
    <p className="text-white/60 leading-7 mb-4 text-[15px]">{children}</p>
  ),

  // Código inline: `color: red`
  code: ({ inline, className, children }) => {
    if (inline) {
      return (
        <code className="px-1.5 py-0.5 rounded bg-white/[0.08] text-[#7dd3fc] text-[13px] font-mono">
          {children}
        </code>
      );
    }
    // Bloque de código (con lenguaje)
    return <code className={`${className} block`}>{children}</code>;
  },

  // Bloque de código completo
  pre: ({ children }) => (
    <pre className="bg-[#161616] border border-white/[0.08] rounded-lg p-5 overflow-x-auto mb-6 text-[13px] font-mono leading-6">
      {children}
    </pre>
  ),

  // Lista desordenada
  ul: ({ children }) => (
    <ul className="text-white/60 mb-4 space-y-1.5 pl-5 list-none">
      {children}
    </ul>
  ),

  // Lista ordenada
  ol: ({ children }) => (
    <ol className="text-white/60 mb-4 space-y-1.5 pl-5 list-decimal">
      {children}
    </ol>
  ),

  // Item de lista
  li: ({ children }) => (
    <li className="flex gap-2 text-[15px] leading-6">
      <span className="text-[#264de4] mt-2 shrink-0 w-1 h-1 rounded-full bg-[#264de4] relative top-2.5" />
      <span>{children}</span>
    </li>
  ),

  // Blockquote → tip/nota destacada
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[#264de4] bg-[#264de4]/[0.06] px-5 py-3 rounded-r-lg mb-4">
      <div className="text-white/70 text-[14px] leading-6 [&>p]:mb-0 [&>p]:text-white/70">
        {children}
      </div>
    </blockquote>
  ),

  // Tabla (GFM)
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-white/[0.1]">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="text-left py-2 px-4 text-white/50 text-[11px] uppercase tracking-wider font-medium">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-2.5 px-4 text-white/60 text-[14px] border-b border-white/[0.04]">
      {children}
    </td>
  ),

  // Links
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#264de4] hover:text-[#5580ff] underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  ),

  // Separador
  hr: () => <hr className="border-white/[0.06] my-8" />,

  // Strong
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
};

// ── Skeleton de carga ─────────────────────────────────────────
function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4 max-w-3xl">
      <div className="h-8 bg-white/[0.06] rounded w-2/3" />
      <div className="h-px bg-white/[0.06]" />
      <div className="space-y-2 pt-2">
        <div className="h-4 bg-white/[0.04] rounded w-full" />
        <div className="h-4 bg-white/[0.04] rounded w-5/6" />
        <div className="h-4 bg-white/[0.04] rounded w-4/6" />
      </div>
      <div className="h-32 bg-white/[0.04] rounded-lg mt-4" />
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────
export default function DocContent({ slug }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const loader = DOCS[slug];

    // Si el slug no existe en nuestro mapa, mostramos error
    if (!loader) {
      setLoading(false);
      setError(true);
      return;
    }

    // Cargamos el archivo .md dinámicamente
    loader()
      .then((module) => {
        // module.default es el contenido del archivo como string
        setContent(module.default);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [slug]); // Se re-ejecuta cada vez que cambia el slug

  return (
    // max-w-3xl → limita el ancho del texto a ~768px (legibilidad óptima)
    // mx-auto → centra el contenido
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
        // prose → clase de Tailwind Typography (si lo instalás)
        // Por ahora usamos nuestros MD_COMPONENTS para los estilos
        <div className="docs-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_COMPONENTS}>
            {content}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}
