// El slug de la URL determina qué archivo .md se muestra.
import { useParams } from "react-router-dom";
import Sidebar from "../components/docs/SideBar";
import DocContent from "../components/docs/DocContent";
import Navbar from "../components/Navbar";

export default function Docs() {
  // useParams() lee los parámetros dinámicos de la URL.
  // Si la URL es /docs/flexbox → slug = "flexbox"
  // Si la URL es /docs        → slug = undefined
  const { slug } = useParams();

  // Si no hay slug en la URL, mostramos "introduccion" por defecto
  const currentSlug = slug || "introduccion";

  return (
    <div className="flex flex-col h-screen bg-[#0f0f0f] text-white overflow-hidden">
      {/* Navbar ocupa su h-14, el resto se divide en sidebar + contenido */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 shrink-0">
          <Sidebar currentSlug={currentSlug} />
        </aside>
        <main className="flex-1 overflow-y-auto">
          <DocContent slug={currentSlug} />
        </main>
      </div>
    </div>
  );
}
