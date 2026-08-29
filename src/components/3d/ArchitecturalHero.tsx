import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ArchitecturalModelBuilder } from "./ArchitecturalModelBuilder";

interface ArchitecturalHeroProps {
  activeMaterialColor?: string;
  isDarkMode?: boolean;
}

export const ArchitecturalHero: React.FC<ArchitecturalHeroProps> = ({
  activeMaterialColor,
  isDarkMode = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

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
    scene.fog = new THREE.FogExp2(isDarkMode ? 0x121110 : 0xfbfaf8, 0.032);

    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
    const baseCamPos = new THREE.Vector3(isMobile ? 9.5 : 8.0, isMobile ? 4.2 : 3.6, isMobile ? 11.5 : 9.8);
    camera.position.copy(baseCamPos);
    camera.lookAt(0, 0.1, 0);

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

    // --- ARCHITECTURAL LIGHTING SYSTEM ---
    const ambientLight = new THREE.AmbientLight(
      isDarkMode ? 0x3d3a36 : 0xfbf7f0,
      isDarkMode ? 1.4 : 1.8
    );
    scene.add(ambientLight);

    // Warm Sun Directional Light
    const sunLight = new THREE.DirectionalLight(
      isDarkMode ? 0xf0e6dc : 0xfffaed,
      isDarkMode ? 2.0 : 2.8
    );
    sunLight.position.set(14, 20, 11);
    sunLight.castShadow = !prefersReducedMotion;
    if (sunLight.castShadow) {
      sunLight.shadow.mapSize.width = isHighQuality ? 1024 : 512;
      sunLight.shadow.mapSize.height = isHighQuality ? 1024 : 512;
      sunLight.shadow.camera.near = 2;
      sunLight.shadow.camera.far = 40;
      const d = 9;
      sunLight.shadow.camera.left = -d;
      sunLight.shadow.camera.right = d;
      sunLight.shadow.camera.top = d;
      sunLight.shadow.camera.bottom = -d;
      sunLight.shadow.bias = -0.0004;
    }
    scene.add(sunLight);

    // Cool Sky Bounce Fill Light
    const skyFillLight = new THREE.DirectionalLight(
      isDarkMode ? 0x222a33 : 0xbfd3e6,
      isDarkMode ? 0.7 : 0.9
    );
    skyFillLight.position.set(-12, -4, -9);
    scene.add(skyFillLight);

    // --- BUILD MONUMENTAL ARCHITECTURAL MODEL ---
    const modelBuilder = new ArchitecturalModelBuilder();
    const modelGroup = modelBuilder.build({
      activeMaterialColor,
      isDarkMode,
      quality: isHighQuality ? "high" : "medium",
    });
    scene.add(modelGroup);

    // --- SMOOTH PARALLAX & SCROLL RIG ---
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetMouseX = (e.clientX - halfW) / halfW;
      targetMouseY = (e.clientY - halfH) / halfH;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // --- RENDER LOOP ---
    const renderLoop = () => {
      const delta = clock.getDelta();

      // Smooth lerp
      mouseX += (targetMouseX - mouseX) * 0.035;
      mouseY += (targetMouseY - mouseY) * 0.035;

      if (!prefersReducedMotion) {
        const scrollFactor = Math.min(scrollY / 1200, 1.0);
        camera.position.x = baseCamPos.x + mouseX * 1.1;
        camera.position.y = baseCamPos.y - mouseY * 0.6 + scrollFactor * 1.2;
        camera.position.z = baseCamPos.z + scrollFactor * 1.6;
        camera.lookAt(0, 0.1 - scrollFactor * 0.3, 0);

        // Subtle model slow ambient breath
        modelGroup.rotation.y = Math.sin(clock.getElapsedTime() * 0.15) * 0.04 + mouseX * 0.08;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      modelBuilder.dispose();
      scene.clear();
      renderer.dispose();
    };
  }, [isHydrated, webglSupported, isDarkMode]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[72vh] sm:h-[82vh] min-h-[520px] max-h-[920px] overflow-hidden select-none"
      style={{
        background: isDarkMode ? "#121110" : "#fbfaf8",
      }}
    >
      {/* 3D WebGL Canvas or Axonometric Fallback */}
      {isHydrated && webglSupported ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 opacity-80">
          <div className="relative w-[420px] h-[320px] max-w-[85vw] border border-stone-300/40 dark:border-stone-800/40 p-8 rounded-xs flex items-center justify-center">
            <svg viewBox="0 0 300 200" className="w-full h-full stroke-stone-800 dark:stroke-stone-200 fill-none stroke-[1.2]">
              <polygon points="50,150 150,190 250,150 150,110" />
              <polygon points="50,150 50,110 150,70 150,110" />
              <polygon points="250,150 250,110 150,70 150,110" />
              <polygon points="80,90 180,50 220,70 120,110" className="stroke-stone-400 dark:stroke-stone-500 stroke-dasharray-[3,3]" />
            </svg>
            <div className="absolute bottom-4 left-6 text-[9px] font-mono tracking-widest uppercase opacity-50">
              AXONOMETRIC PAVILION — STILL MODE
            </div>
          </div>
        </div>
      )}

      {/* Atmospheric Spatial Gradient Blend */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: isDarkMode
            ? "radial-gradient(ellipse at 50% 40%, transparent 50%, rgba(18, 17, 16, 0.75) 100%), linear-gradient(to bottom, transparent 65%, #121110 100%)"
            : "radial-gradient(ellipse at 50% 40%, transparent 50%, rgba(251, 250, 248, 0.65) 100%), linear-gradient(to bottom, transparent 65%, #fbfaf8 100%)",
        }}
      />
    </div>
  );
};
