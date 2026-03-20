// ─────────────────────────────────────────────────────────────
// App.jsx — Componente raíz
//
// Estructura:
//   <App>
//     <Scene3D />   ← La escena Three.js (fondo)
//     <HeroUI />    ← El texto y UI superpuesta (encima del canvas)
// ─────────────────────────────────────────────────────────────

import Scene3D from "./components/Scene3D";
import HeroUI from "./components/HeroUI";

export default function App() {
  return (
    // ── Contenedor principal ──────────────────────────────────
    // `relative` permite posicionar hijos con absolute sobre él.
    // `w-full h-full` ocupa todo el viewport (definido en index.css).
    <div className="relative w-full h-full bg-[#0a0a0a]">
      {/* ── Escena 3D ──────────────────────────────────────────
          Ocupa el 100% del contenedor. El canvas de Three.js
          se monta aquí adentro. Es el "fondo interactivo". */}
      <Scene3D />

      {/* ── UI superpuesta ─────────────────────────────────────
          `pointer-events-none` evita que el texto capture
          eventos del mouse, dejando el drag funcionar en el canvas. */}
      <HeroUI />
    </div>
  );
}
