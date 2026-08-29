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
    scene.fog = new THREE.FogExp2(fogColor, 0.022);

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 140);
    const cameraPos = new THREE.Vector3(9.2, 4.0, 11.2);
    const cameraTarget = new THREE.Vector3(0.4, 0.35, 0.4);
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

    // --- NATURAL ARCHITECTURAL LIGHTING SYSTEM ---
    // Warm Ground & Interior Bounce Ambient Light
    const ambientLight = new THREE.AmbientLight(
      isDarkMode ? 0x302e2b : 0xfbf7f0,
      isDarkMode ? 1.3 : 1.7
    );
    scene.add(ambientLight);

    // Warm Late-Afternoon Sun Directional Light
    const sunLight = new THREE.DirectionalLight(
      isDarkMode ? 0xf5ebd9 : 0xfff8eb,
      isDarkMode ? 2.2 : 3.0
    );
    sunLight.position.set(16, 22, 12);
    sunLight.castShadow = !prefersReducedMotion;
    if (sunLight.castShadow) {
      sunLight.shadow.mapSize.width = isHighQuality ? 1024 : 512;
      sunLight.shadow.mapSize.height = isHighQuality ? 1024 : 512;
      sunLight.shadow.camera.near = 2;
      sunLight.shadow.camera.far = 80;
      const d = 18;
      sunLight.shadow.camera.left = -d;
      sunLight.shadow.camera.right = d;
      sunLight.shadow.camera.top = d;
      sunLight.shadow.camera.bottom = -d;
      sunLight.shadow.bias = -0.00025;
    }
    scene.add(sunLight);

    // Soft Atmospheric Sky Dome Fill Light
    const skyFillLight = new THREE.DirectionalLight(
      isDarkMode ? 0x1a242d : 0xc2d4e4,
      isDarkMode ? 0.65 : 0.85
    );
    skyFillLight.position.set(-14, -4, -10);
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

    // --- RESTRAINED CINEMATIC MOUSE RIG ---
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
      // Ultra-smooth lerping
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      // Evaluate camera rail at current scroll progress
      const railState = cameraRail.evaluate(scrollProgressRef.current, targetRailPos, targetRailLook);

      // Smooth camera position interpolation
      currentPos.lerp(targetRailPos, 0.055);
      currentTarget.lerp(targetRailLook, 0.055);

      // Subtle architectural perspective parallax
      camera.position.x = currentPos.x + mouseX * 0.55;
      camera.position.y = currentPos.y - mouseY * 0.3;
      camera.position.z = currentPos.z;
      camera.lookAt(currentTarget.x, currentTarget.y, currentTarget.z);

      // Lighting transition
      sunLight.intensity = THREE.MathUtils.lerp(
        sunLight.intensity,
        isDarkMode ? railState.lightIntensity * 0.75 : railState.lightIntensity,
        0.04
      );

      if (scene.fog && scene.fog instanceof THREE.FogExp2) {
        scene.fog.density = THREE.MathUtils.lerp(scene.fog.density, railState.fogDensity, 0.04);
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
        /* RESTRAINED AXONOMETRIC FALLBACK */
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-stone-500">
            ARCHITECTURAL SPATIAL ENVIRONMENT — STILL
          </div>
        </div>
      )}

      {/* QUIET TONAL ATMOSPHERE VIGNETTE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDarkMode
            ? "radial-gradient(ellipse at 50% 45%, transparent 45%, rgba(18, 17, 16, 0.7) 100%)"
            : "radial-gradient(ellipse at 50% 45%, transparent 45%, rgba(251, 250, 248, 0.58) 100%)",
        }}
      />
    </div>
  );
};
