import Scene3D from "../components/Scene3D";
import HeroUI from "../components/HeroUI";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    // bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]
    <div className="relative w-full min-h-screen bg-[#0a0a0a]">
      <Navbar transparent />

      <HeroUI />
    </div>
  );
}
