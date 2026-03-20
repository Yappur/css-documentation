import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
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

function normalizeScene(scene) {
  scene.updateMatrixWorld(true);

  const box = new THREE.Box3().setFromObject(scene);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);

  if (maxDim === 0) return; // modelo vacío, salimos

  const s = 1 / maxDim;
  scene.scale.setScalar(s);
  scene.position.set(-center.x * s, -center.y * s, -center.z * s);

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
}

export default function CSSLogo() {
  const groupRef = useRef();
  const timeRef = useRef(0);
  // Guardamos el clon en un ref para poder hacer dispose al desmontar
  const cloneRef = useRef(null);

  // ── Cargamos el modelo ────────────────────────────────────
  // useGLTF suspende el render hasta que el .glb esté listo,
  // así que cuando este componente ejecuta, scene YA existe.
  const { scene: originalScene } = useGLTF("/css-logo.glb");

  // ── Clonamos usando SkeletonUtils ─────────────────────────
  // SkeletonUtils.clone es el método recomendado por three-stdlib
  // para clonar modelos que pueden tener skeletons/bones.
  // three-stdlib ya viene instalado con @react-three/drei.
  // Hacemos el clon fuera de useEffect para que esté disponible
  // en el primer render — esto evita el flash de "logo invisible".
  if (!cloneRef.current) {
    const clone = SkeletonUtils.clone(originalScene);
    normalizeScene(clone);
    cloneRef.current = clone;
  }

  // ── Cleanup al desmontar ──────────────────────────────────
  useEffect(() => {
    return () => {
      if (!cloneRef.current) return;
      cloneRef.current.traverse((child) => {
        if (child.isMesh) {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material?.dispose();
          }
        }
      });
      cloneRef.current = null;
    };
  }, []);

  const { velocityRef, isDragging, isManual } = useDragRotation();

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const g = groupRef.current;
    timeRef.current += delta;

    g.position.y = Math.sin(timeRef.current * FLOAT_SPEED) * FLOAT_AMPLITUDE;

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

  if (!cloneRef.current) return null;

  return (
    <group ref={groupRef} scale={2} rotation={[0, 4.3708, 0]}>
      <primitive object={cloneRef.current} />
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
