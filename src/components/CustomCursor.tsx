import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "view" | "drag" | "link">("default");
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const fineQuery = window.matchMedia("(pointer: fine)");
    setIsPointerFine(fineQuery.matches);

    const handlePointerMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });

      // Detect hover targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const customState = target.closest("[data-cursor]")?.getAttribute("data-cursor");
        if (customState === "view" || customState === "drag" || customState === "link") {
          setCursorState(customState as any);
          return;
        }
        if (target.closest("button, a, input, select, textarea")) {
          setCursorState("link");
          return;
        }
      }
      setCursorState("default");
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;
    let animationFrameId: number;

    const lerp = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.25,
        y: prev.y + (targetPos.y - prev.y) * 0.25,
      }));
      animationFrameId = requestAnimationFrame(lerp);
    };

    lerp();
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPos, isPointerFine]);

  if (!isPointerFine) return null;

  const isExpanded = cursorState !== "default";

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-stone-800/80 dark:border-stone-200/80 backdrop-blur-[2px]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        width: isExpanded ? 64 : 12,
        height: isExpanded ? 64 : 12,
        backgroundColor:
          cursorState === "view"
            ? "rgba(28, 27, 26, 0.9)"
            : cursorState === "drag"
            ? "rgba(115, 112, 107, 0.85)"
            : cursorState === "link"
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(28, 27, 26, 0.4)",
        transition: "width 0.25s ease-out, height 0.25s ease-out, background-color 0.25s ease-out",
      }}
    >
      {cursorState === "view" && (
        <span className="text-[9px] font-bold tracking-[0.2em] text-white uppercase">
          VIEW
        </span>
      )}
      {cursorState === "drag" && (
        <span className="text-[9px] font-bold tracking-[0.2em] text-white uppercase">
          DRAG
        </span>
      )}
    </div>
  );
};
