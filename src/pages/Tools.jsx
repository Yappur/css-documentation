import Navbar from "../components/Navbar";
import { useState, useMemo } from "react";
import {
  Search,
  ExternalLink,
  Sparkles,
  Palette,
  Type,
  Box,
  Waves,
  Gamepad2,
  BookOpen,
} from "lucide-react";
import { tools } from "../data/tools";

const categoryDefs = [
  { id: "todos", label: "Todos" },
  { id: "documentacion", label: "Documentación" },
  { id: "juegos", label: "Juegos" },
  { id: "colores", label: "Colores" },
  { id: "fondos", label: "Fondos" },
  { id: "tipografia", label: "Tipografía" },
  { id: "efectos", label: "Efectos" },
];

const iconMap = {
  todos: Sparkles,
  documentacion: BookOpen,
  juegos: Gamepad2,
  colores: Palette,
  fondos: Waves,
  tipografia: Type,
  efectos: Box,
};

const categories = categoryDefs.map((cat) => ({
  ...cat,
  icon: iconMap[cat.id],
}));

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.descripcion.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "todos" || tool.categoria === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const toolCount = filteredTools.length;

  return (
    <div className="flex flex-col h-screen bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <section className="border-b-2 border-blue-400/40 shadow-md shadow-blue-400/20 pt-12 pb-8 text-center sm:pt-18 sm:pb-14 bg-[#0f0f0f]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Herramientas CSS
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
              Descubre las mejores herramientas y recursos para dominar CSS y
              mejorar tus diseños web.
            </p>

            {/* Search Bar */}
            <div className="relative mx-auto mt-6 max-w-xs border-2 border-white/70">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar herramientas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 w-full bg-card pl-11 pr-4 text-base shadow-sm transition-shadow focus:outline-none"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar Filters */}
            <aside className="w-full shrink-0 lg:w-56">
              <h2 className="mb-4 text-sm font-medium text-muted-foreground">
                Filtrar por categoría
              </h2>
              <nav className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors cursor-pointer ${
                        isActive
                          ? "text-white bg-white/8"
                          : "text-white/70 hover:text-white/80 hover:bg-white/4"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{category.label}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Tools Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm tracking-[0.3em] uppercase">
                  {toolCount}{" "}
                  {toolCount === 1
                    ? "herramienta encontrada"
                    : "herramientas encontradas"}
                </p>
              </div>

              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredTools.map((tool, index) => (
                    <a
                      key={index}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 border-blue-400/40 shadow-md shadow-blue-400/20 hover:border-blue-400/70 hover:shadow-lg hover:shadow-blue-400/30"
                    >
                      <div className="mb-3 flex items-start justify-between">
                        <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                          {tool.nombre}
                        </h3>
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                        {tool.descripcion}
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground capitalize">
                          {tool.categoria}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
                  <Search className="mb-4 h-10 w-10 text-muted-foreground/50" />
                  <h3 className="text-lg font-medium">
                    No se encontraron herramientas
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Intenta ajustar tu búsqueda o filtros
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tools;
