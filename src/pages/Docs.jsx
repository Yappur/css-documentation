// El slug de la URL determina qué archivo .md se muestra.
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/docs/Sidebar";
import DocContent from "../components/docs/DocContent";
import Navbar from "../components/Navbar";

export default function Docs() {
  // useParams() lee los parámetros dinámicos de la URL.
  // Si la URL es /docs/flexbox → slug = "flexbox"
  // Si la URL es /docs        → slug = undefined
  const { slug } = useParams();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Si no hay slug en la URL, mostramos "introduccion" por defecto
  const currentSlug = slug || "introduccion";

  return (
    <div className="flex flex-col h-screen bg-[#0f0f0f] text-white overflow-hidden">
      {/* Navbar ocupa su h-14, el resto se divide en sidebar + contenido */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`${sidebarOpen ? "w-64" : "w-12"} shrink-0 transition-all`}
        >
          <Sidebar
            currentSlug={currentSlug}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </aside>
        <main className="flex-1 overflow-y-auto">
          <DocContent slug={currentSlug} />
        </main>
      </div>
    </div>
  );
}
