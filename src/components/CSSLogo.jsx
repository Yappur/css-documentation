import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const AUTO_ROTATION_SPEED = 0.004;
const FLOAT_AMPLITUDE = 0.12;
const FLOAT_SPEED = 1.2;
const DRAG_SENSITIVITY = 0.008;
const INERTIA_DECAY = 0.92;

function useDragRotation() {
  const { gl } = useThree();
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const velocityRef = useRef(0);
  const isManual = useRef(false);

  useEffect(() => {
    const canvas = gl.domElement;
    const onDown = (e) => {
      isDragging.current = true;
      isManual.current = true;
      lastX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      velocityRef.current = 0;
    };
    const onMove = (e) => {
      if (!isDragging.current) return;
      const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      velocityRef.current = (x - lastX.current) * DRAG_SENSITIVITY;
      lastX.current = x;
    };
    const onUp = () => {
      isDragging.current = false;
    };

    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("touchstart", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [gl]);

  return { velocityRef, isDragging, isManual };
}

export default function CSSLogo() {
  const groupRef = useRef();
  const timeRef = useRef(0);
  // ── FIX DOBLE EJECUCIÓN ───────────────────────────────────
  // React StrictMode en dev ejecuta useEffect dos veces.
  // Este ref actúa como guardia: si ya aplicamos el fix, no lo
  // volvemos a aplicar sobre el modelo ya transformado.
  const fixApplied = useRef(false);

  const { scene } = useGLTF("/css-logo.glb");

  useEffect(() => {
    if (!scene) return;
    // Si ya aplicamos el fix en este mount, salimos
    if (fixApplied.current) return;
    fixApplied.current = true;

    // Forzar actualización de matrices del modelo
    scene.updateMatrixWorld(true);

    // Medir tamaño real del modelo sin transformar
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    console.log("[Fix] Tamaño original:", size);
    console.log("[Fix] Centro original:", center);

    // Normalizar: el lado más largo = 1 unidad
    const maxDim = Math.max(size.x, size.y, size.z);
    const s = 1 / maxDim;

    // Reset completo antes de aplicar transformaciones
    scene.scale.setScalar(s);
    scene.position.set(-center.x * s, -center.y * s, -center.z * s);

    console.log("[Fix] Escala aplicada:", s);

    // Arreglar materiales
    scene.traverse((child) => {
      if (!child.isMesh) return;
      child.castShadow = true;
      child.receiveShadow = true;
      const fix = (mat) => {
        if (!mat) return;
        mat.side = THREE.DoubleSide;
        mat.envMapIntensity = 1.5;
        mat.needsUpdate = true;
      };
      Array.isArray(child.material)
        ? child.material.forEach(fix)
        : fix(child.material);
    });
  }, [scene]);

  const { velocityRef, isDragging, isManual } = useDragRotation();

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const g = groupRef.current;
    timeRef.current += delta;

    // Flotación: el 0 es el centro vertical de la pantalla.
    // Ajustá el primer número si el logo no está centrado:
    //   positivo = sube, negativo = baja
    g.position.y =
      0 + Math.sin(timeRef.current * FLOAT_SPEED) * FLOAT_AMPLITUDE;

    if (isDragging.current) {
      g.rotation.y += velocityRef.current;
    } else if (isManual.current) {
      g.rotation.y += velocityRef.current;
      velocityRef.current *= INERTIA_DECAY;
      if (Math.abs(velocityRef.current) < 0.0005) {
        isManual.current = false;
        velocityRef.current = 0;
      }
    } else {
      g.rotation.y += AUTO_ROTATION_SPEED;
    }

    g.rotation.x = Math.sin(timeRef.current * 0.4) * 0.04;
  });

  return (
    // position={[0, 0, 0]} → centrado en la escena
    // scale={2} → tamaño visual (ajustá si es muy chico/grande)
    <group ref={groupRef} position={[0, 0, 0]} scale={2}>
      <primitive object={scene} />
      <pointLight
        position={[0, 0, 2]}
        intensity={1.0}
        color="#264de4"
        distance={6}
      />
    </group>
  );
}

useGLTF.preload("/css-logo.glb");
