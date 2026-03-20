import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, AdaptiveDpr } from "@react-three/drei";
import CSSLogo from "./CSSLogo";

// ── Fallback mientras el .glb carga ──────────────────────────
// Mientras useGLTF descarga el archivo, Suspense muestra esto.
// Es un cubo azul simple como placeholder.
function LogoFallback() {
  return (
    <mesh>
      <boxGeometry args={[1.5, 1.5, 0.2]} />
      <meshStandardMaterial color="#264de4" roughness={0.3} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 cursor-grab">
      <Canvas
        camera={{ fov: 45, position: [0, 0, 7] }}
        shadows
        gl={{
          antialias: true,
          toneMappingExposure: 1.4,
        }}
        dpr={[1, 2]}
      >
        <AdaptiveDpr pixelated />

        <ambientLight intensity={0.2} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={2.5}
          color="#ffffff"
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={20}
        />
        <directionalLight
          position={[-4, 2, -3]}
          intensity={0.8}
          color="#4466ff"
        />
        <pointLight
          position={[0, -3, -4]}
          intensity={1.5}
          color="#264de4"
          distance={10}
        />

        <Environment preset="studio" environmentIntensity={0.5} />

        {/* Suspense es OBLIGATORIO para useGLTF.
            Sin esto React tira un error porque useGLTF
            "suspende" el render mientras carga el archivo. */}
        <Suspense fallback={<LogoFallback />}>
          <CSSLogo />
        </Suspense>

        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.5}
          scale={8}
          blur={2.5}
          far={4}
          color="#1a36b0"
        />
      </Canvas>
    </div>
  );
}
