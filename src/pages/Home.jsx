import Scene3D from "../components/Scene3D";
import HeroUI from "../components/HeroUI";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    // El hero es fullscreen, el Navbar flota encima con z-50
    <div className="relative w-full h-full bg-[#0a0a0a]">
      {/* transparent=true → fondo con blur, no sólido */}
      <Navbar transparent />
      <Scene3D />
      <HeroUI />
    </div>
  );
}
