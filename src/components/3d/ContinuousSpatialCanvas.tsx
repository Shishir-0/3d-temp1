import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ArchitecturalWorld } from "./ArchitecturalWorld";
import { CameraRail } from "./CameraRail";

interface ContinuousSpatialCanvasProps {
  isDarkMode?: boolean;
  activeMaterialHex?: string;
  scrollProgress: number;
}

export const ContinuousSpatialCanvas: React.FC<ContinuousSpatialCanvasProps> = ({
  isDarkMode = false,
  activeMaterialHex,
  scrollProgress,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  const worldRef = useRef<ArchitecturalWorld | null>(null);
  const scrollProgressRef = useRef(scrollProgress);

  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    setIsHydrated(true);

    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl2") || testCanvas.getContext("webgl");
      if (!gl) {
        setWebglSupported(false);
      }
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated || !webglSupported || !containerRef.current || !canvasRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const isLowPower = isMobile || (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
    const isHighQuality = !prefersReducedMotion && !isLowPower;

    // --- THREE.JS SCENE SETUP ---
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const fogColor = isDarkMode ? 0x121110 : 0xfbfaf8;
    scene.fog = new THREE.FogExp2(fogColor, 0.024);

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 120);
    const cameraPos = new THREE.Vector3(9.5, 4.2, 11.5);
    const cameraTarget = new THREE.Vector3(0, 0.4, 0);
    camera.position.copy(cameraPos);
    camera.lookAt(cameraTarget);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: isHighQuality,
      powerPreference: "high-performance",
    });

    const maxPixelRatio = isHighQuality ? Math.min(window.devicePixelRatio, 2) : 1.25;
    renderer.setPixelRatio(maxPixelRatio);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = !prefersReducedMotion;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(isDarkMode ? 0x383532 : 0xfdfaf5, isDarkMode ? 1.4 : 1.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(isDarkMode ? 0xf0e6dc : 0xfffaed, isDarkMode ? 2.0 : 2.8);
    sunLight.position.set(14, 20, 11);
    sunLight.castShadow = !prefersReducedMotion;
    if (sunLight.castShadow) {
      sunLight.shadow.mapSize.width = isHighQuality ? 1024 : 512;
      sunLight.shadow.mapSize.height = isHighQuality ? 1024 : 512;
      sunLight.shadow.camera.near = 2;
      sunLight.shadow.camera.far = 70;
      const d = 16;
      sunLight.shadow.camera.left = -d;
      sunLight.shadow.camera.right = d;
      sunLight.shadow.camera.top = d;
      sunLight.shadow.camera.bottom = -d;
      sunLight.shadow.bias = -0.0003;
    }
    scene.add(sunLight);

    const skyFillLight = new THREE.DirectionalLight(isDarkMode ? 0x1f2830 : 0xbfd3e6, isDarkMode ? 0.6 : 0.85);
    skyFillLight.position.set(-12, -4, -9);
    scene.add(skyFillLight);

    // --- ARCHITECTURAL WORLD MODEL ---
    const world = new ArchitecturalWorld();
    worldRef.current = world;
    const worldGroup = world.build({
      isDarkMode,
      activeMaterialHex,
      quality: isHighQuality ? "high" : "medium",
    });
    scene.add(worldGroup);

    const cameraRail = new CameraRail();

    // --- MOUSE PARALLAX RIG ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentPos = new THREE.Vector3().copy(cameraPos);
    let currentTarget = new THREE.Vector3().copy(cameraTarget);
    let targetRailPos = new THREE.Vector3();
    let targetRailLook = new THREE.Vector3();

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfW) / halfW;
      targetMouseY = (e.clientY - halfH) / halfH;
    };

    const handleResize = () => {
      if (!containerRef.current || !renderer) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // --- RENDER LOOP ---
    let animationFrameId: number;

    const renderLoop = () => {
      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Evaluate camera rail at current scroll progress
      const railState = cameraRail.evaluate(scrollProgressRef.current, targetRailPos, targetRailLook);

      // Smooth camera position interpolation
      currentPos.lerp(targetRailPos, 0.06);
      currentTarget.lerp(targetRailLook, 0.06);

      // Apply subtle mouse parallax offset to camera position
      camera.position.x = currentPos.x + mouseX * 0.7;
      camera.position.y = currentPos.y - mouseY * 0.4;
      camera.position.z = currentPos.z;
      camera.lookAt(currentTarget.x, currentTarget.y, currentTarget.z);

      // Dynamic light intensity transition
      sunLight.intensity = THREE.MathUtils.lerp(sunLight.intensity, isDarkMode ? railState.lightIntensity * 0.7 : railState.lightIntensity, 0.05);
      if (scene.fog && scene.fog instanceof THREE.FogExp2) {
        scene.fog.density = THREE.MathUtils.lerp(scene.fog.density, railState.fogDensity, 0.05);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      world.dispose();
      scene.clear();
      renderer.dispose();
      worldRef.current = null;
    };
  }, [isHydrated, webglSupported, isDarkMode]);

  // Sync active accent color changes
  useEffect(() => {
    if (activeMaterialHex && worldRef.current) {
      worldRef.current.updateAccentColor(activeMaterialHex);
    }
  }, [activeMaterialHex]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{
        background: isDarkMode ? "#121110" : "#fbfaf8",
      }}
    >
      {isHydrated && webglSupported ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        /* FALLBACK */
        <div className="absolute inset-0 flex items-center justify-center opacity-60">
          <div className="text-[11px] font-mono tracking-widest uppercase">
            ARCHITECTURAL SPATIAL ENVIRONMENT — STILL
          </div>
        </div>
      )}

      {/* ATMOSPHERIC VIGNETTE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDarkMode
            ? "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(18, 17, 16, 0.65) 100%)"
            : "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(251, 250, 248, 0.55) 100%)",
        }}
      />
    </div>
  );
};
