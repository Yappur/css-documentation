import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, ContactShadows, AdaptiveDpr } from "@react-three/drei";
import CSSLogo from "./CSSLogo";

function LogoFallback() {
  return (
    <mesh>
      <boxGeometry args={[1.5, 1.5, 0.2]} />
      <meshStandardMaterial color="#264de4" roughness={0.3} />
    </mesh>
  );
}

function ResponsiveCamera() {
  const { camera } = useThree();

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 1060) {
        // Mobile: logo más chico para que quepa bien
        camera.fov = 38;
        camera.position.z = 7;
      } else {
        // Desktop: logo grande, ocupa la mitad derecha
        camera.fov = 28;
        camera.position.z = 7;
      }
      camera.updateProjectionMatrix();
    };

    update(); // ejecutar al montar
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [camera]);

  return null;
}

export default function Scene3D() {
  return (
    <div className="w-full h-full cursor-grab" style={{ overflow: "hidden" }}>
      <Canvas
        camera={{ fov: 25, position: [0, 0, 7] }}
        shadows
        gl={{ antialias: true, toneMappingExposure: 1.4 }}
        dpr={[1, 2]}
      >
        <AdaptiveDpr pixelated />
        <ResponsiveCamera />

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
