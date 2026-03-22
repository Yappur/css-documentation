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
// import { Input } from "@/components/ui/input";

const Tools = () => {
  const tools = [
    {
      nombre: "CSS-Tricks",
      url: "https://css-tricks.com/",
      descripcion:
        "CSS-Tricks es un sitio web dedicado a compartir trucos, consejos y recursos relacionados con CSS.",
      categoria: "documentacion",
    },
    {
      nombre: "MDN Web Docs",
      url: "https://developer.mozilla.org/es/docs/Web/CSS",
      descripcion:
        "Documentación oficial de Mozilla para CSS, con referencias completas, guías y ejemplos.",
      categoria: "documentacion",
    },
    {
      nombre: "Can I Use",
      url: "https://caniuse.com/",
      descripcion:
        "Herramienta que muestra la compatibilidad de las características de CSS con diferentes navegadores.",
      categoria: "documentacion",
    },
    {
      nombre: "Flexbox Froggy",
      url: "https://flexboxfroggy.com/",
      descripcion:
        "Juego interactivo para aprender Flexbox de una manera divertida y práctica.",
      categoria: "juegos",
    },
    {
      nombre: "CSS Grid Garden",
      url: "https://cssgridgarden.com/",
      descripcion:
        "Juego educativo para aprender CSS Grid Layout a través de niveles progresivos.",
      categoria: "juegos",
    },
    {
      nombre: "CSS Battle",
      url: "https://cssbattle.dev/",
      descripcion:
        "Juego donde los jugadores compiten creando diseños con el mínimo código posible.",
      categoria: "juegos",
    },
    {
      nombre: "Animated Backgrounds",
      url: "https://animatedbackgrounds.me/",
      descripcion:
        "Colección de fondos animados en CSS que puedes usar en tus proyectos.",
      categoria: "fondos",
    },
    {
      nombre: "Gradient Magic",
      url: "https://www.gradientmagic.com/",
      descripcion:
        "Generador de gradientes CSS que permite crear gradientes lineales, radiales y cónicos.",
      categoria: "colores",
    },
    {
      nombre: "Get Waves",
      url: "https://getwaves.io/",
      descripcion:
        "Generador de ondas SVG para crear formas de onda personalizadas para fondos.",
      categoria: "fondos",
    },
    {
      nombre: "Magic Patterns",
      url: "https://www.magicpattern.design/tools/css-backgrounds",
      descripcion:
        "Colección de patrones CSS para agregar un toque visual atractivo a tus proyectos.",
      categoria: "fondos",
    },
    {
      nombre: "Random Background",
      url: "https://random.css-pattern.com/",
      descripcion:
        "Generador de fondos aleatorios en CSS para crear patrones únicos.",
      categoria: "fondos",
    },
    {
      nombre: "Coolors",
      url: "https://coolors.co/",
      descripcion:
        "Generador de paletas de colores para encontrar combinaciones armoniosas.",
      categoria: "colores",
    },
    {
      nombre: "HTML Color Codes",
      url: "https://htmlcolorcodes.com/es/",
      descripcion:
        "Herramienta para crear combinaciones de colores y obtener códigos HEX.",
      categoria: "colores",
    },
    {
      nombre: "CSS Gradient",
      url: "https://cssgradient.io/",
      descripcion: "Generador de gradientes CSS de manera visual e intuitiva.",
      categoria: "colores",
    },
    {
      nombre: "CSS Generator",
      url: "https://cssgenerator.org",
      descripcion:
        "Generador de sombras para texto y cajas con efectos de profundidad.",
      categoria: "efectos",
    },
    {
      nombre: "Google Fonts",
      url: "https://fonts.google.com/",
      descripcion:
        "Biblioteca de fuentes de Google con tipografías gratuitas para proyectos web.",
      categoria: "tipografia",
    },
    {
      nombre: "DaFont",
      url: "https://www.dafont.com/es/",
      descripcion:
        "Colección de fuentes personalizadas gratuitas para diseño gráfico y web.",
      categoria: "tipografia",
    },
    {
      nombre: "Animista",
      url: "https://animista.net/",
      descripcion:
        "Generador de animaciones CSS para personalizar y usar en proyectos web.",
      categoria: "efectos",
    },
  ];

  const categories = [
    { id: "todos", label: "Todos", icon: Sparkles },
    { id: "documentacion", label: "Documentación", icon: BookOpen },
    { id: "juegos", label: "Juegos", icon: Gamepad2 },
    { id: "colores", label: "Colores", icon: Palette },
    { id: "fondos", label: "Fondos", icon: Waves },
    { id: "tipografia", label: "Tipografía", icon: Type },
    { id: "efectos", label: "Efectos", icon: Box },
  ];

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
    <div className="relative w-full bg-[#0f0f0f] text-white">
      <Navbar transparent />

      <section className="border-b-2 border-blue-400/40 py-16 text-center sm:py-24 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Herramientas CSS
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            Descubre las mejores herramientas y recursos para dominar CSS y
            mejorar tus diseños web.
          </p>

          {/* Search Bar */}
          <div className="relative mx-auto mt-6 max-w-lg">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar herramientas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 rounded-xl border-border bg-card pl-11 pr-4 text-base shadow-sm transition-shadow focus:shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters */}
          <aside className="w-full shrink-0 lg:w-56">
            <div className="sticky top-8">
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
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{category.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Tools Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
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
                    className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
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
  );
};

export default Tools;
