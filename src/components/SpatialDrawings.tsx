import React, { useEffect, useState } from "react";

interface DrawingItem {
  title: string;
  type: string;
  description: string;
  scale: string;
  svg: React.ReactNode;
}

export const SpatialDrawings: React.FC = () => {
  const [selectedDrawing, setSelectedDrawing] = useState<DrawingItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDrawing(null);
      }
    };
    if (selectedDrawing) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedDrawing]);

  const drawings: DrawingItem[] = [
    {
      title: "CASA MONO — GROUND FLOOR PLAN",
      type: "Architectural Plan",
      scale: "1:100 @ A1",
      description: "Axial arrangement around a central open-air atrium, integrating subterranean living quarters and thermal buffer zones.",
      svg: (
        <svg viewBox="0 0 440 280" className="w-full h-full stroke-current fill-none stroke-[0.85]">
          {/* North Arrow */}
          <g transform="translate(400, 40)">
            <line x1="0" y1="20" x2="0" y2="0" className="stroke-stone-900 dark:stroke-stone-100 stroke-[1.5]" />
            <polygon points="-4,6 0,0 4,6" className="fill-stone-900 dark:fill-stone-100 stroke-none" />
            <text x="-3" y="-3" className="text-[8px] font-mono fill-current stroke-none">N</text>
          </g>

          {/* Grid Axes */}
          <line x1="40" y1="20" x2="40" y2="250" className="stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]" />
          <line x1="160" y1="20" x2="160" y2="250" className="stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]" />
          <line x1="280" y1="20" x2="280" y2="250" className="stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]" />
          <line x1="380" y1="20" x2="380" y2="250" className="stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]" />

          {/* Exterior Walls */}
          <rect x="40" y="40" width="340" height="200" className="stroke-stone-900 dark:stroke-stone-100 stroke-[1.5]" />

          {/* Inner Atrium & Courtyard */}
          <rect x="160" y="90" width="120" height="100" className="stroke-stone-500 dark:stroke-stone-400 stroke-dasharray-[4,4]" />

          {/* Structural Partitions */}
          <line x1="40" y1="120" x2="160" y2="120" className="stroke-stone-800 dark:stroke-stone-200 stroke-[1.8]" />
          <line x1="280" y1="140" x2="380" y2="140" className="stroke-stone-800 dark:stroke-stone-200 stroke-[1.8]" />

          {/* Columns */}
          <circle cx="70" cy="70" r="3" className="fill-current" />
          <circle cx="350" cy="70" r="3" className="fill-current" />
          <circle cx="70" cy="210" r="3" className="fill-current" />
          <circle cx="350" cy="210" r="3" className="fill-current" />

          {/* Space Labels */}
          <text x="185" y="145" className="text-[8px] font-mono fill-current stroke-none tracking-widest">COURTYARD</text>
          <text x="65" y="160" className="text-[8px] font-mono fill-current stroke-none tracking-widest">LIVING PAVILION</text>
          <text x="300" y="180" className="text-[8px] font-mono fill-current stroke-none tracking-widest">STUDIO</text>

          {/* Dimension Callouts */}
          <text x="190" y="32" className="text-[7px] font-mono fill-stone-400 stroke-none">34.00 m</text>
          <text x="22" y="145" className="text-[7px] font-mono fill-stone-400 stroke-none transform -rotate-90">20.00 m</text>
        </svg>
      ),
    },
    {
      title: "VILLA NO. 07 — LONGITUDINAL SECTION",
      type: "Building Section",
      scale: "1:50 @ A1",
      description: "Cantilevered structural steel trusses anchoring the upper sleeping volume over Lake Zurich's topographical incline.",
      svg: (
        <svg viewBox="0 0 440 280" className="w-full h-full stroke-current fill-none stroke-[0.85]">
          {/* Elevation Level Markers */}
          <g className="text-[7px] font-mono fill-stone-400 stroke-none">
            <text x="10" y="80">+ 6.40 m</text>
            <text x="10" y="150">+ 3.20 m</text>
            <text x="10" y="230">± 0.00 m</text>
          </g>

          {/* Ground Incline Line */}
          <path d="M 30 240 Q 180 220 410 160" className="stroke-stone-500 dark:stroke-stone-400 stroke-[1.2]" />

          {/* Substructure Foundation */}
          <polygon points="60,235 180,215 180,150 60,150" className="stroke-stone-800 dark:stroke-stone-200 stroke-[1.6]" />

          {/* Upper Cantilevered Slab */}
          <polygon points="140,150 390,150 390,80 140,80" className="stroke-stone-900 dark:stroke-stone-100 stroke-[2]" />

          {/* Blackened Steel Columns */}
          <line x1="180" y1="215" x2="180" y2="150" className="stroke-stone-700 dark:stroke-stone-300 stroke-[1.8]" />
          <line x1="300" y1="190" x2="300" y2="150" className="stroke-stone-700 dark:stroke-stone-300 stroke-[1.8]" />

          {/* Structural Trusses */}
          <line x1="140" y1="80" x2="390" y2="150" className="stroke-stone-400 dark:stroke-stone-600 stroke-dasharray-[3,3]" />

          {/* Space Labels */}
          <text x="220" y="120" className="text-[8px] font-mono fill-current stroke-none tracking-widest">CANTILEVER RESIDENCE</text>
          <text x="80" y="185" className="text-[8px] font-mono fill-current stroke-none tracking-widest">GROUND ATELIER</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-28 sm:py-40 px-6 sm:px-12 max-w-7xl mx-auto border-t border-stone-200/50 dark:border-stone-800/50">
      {/* SECTION HEADER */}
      <div className="max-w-2xl space-y-4 mb-16 sm:mb-24">
        <span className="text-[10px] font-mono tracking-[0.28em] text-stone-400 dark:text-stone-500 uppercase">
          03 / SPATIAL DRAWINGS
        </span>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
          Architectural Diagrams
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
          Vector floor plans, structural sections, and spatial proportion studies.
        </p>
      </div>

      {/* DRAWINGS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {drawings.map((dwg) => (
          <div
            key={dwg.title}
            onClick={() => setSelectedDrawing(dwg)}
            data-cursor="view"
            className="group cursor-pointer bg-stone-50/70 dark:bg-stone-900/30 border border-stone-200/50 dark:border-stone-800/50 rounded-xs p-6 space-y-6 hover:border-stone-400 dark:hover:border-stone-600 transition-colors"
          >
            <div className="aspect-16/10 w-full bg-white dark:bg-[#121110] p-6 rounded-xs border border-stone-200/40 dark:border-stone-800/40 flex items-center justify-center text-stone-800 dark:text-stone-200">
              {dwg.svg}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                <span>{dwg.type}</span>
                <span>{dwg.scale}</span>
              </div>
              <h3 className="text-lg font-medium tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {dwg.title}
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                {dwg.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedDrawing && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-6 sm:p-12 animate-in fade-in duration-200"
          onClick={() => setSelectedDrawing(null)}
        >
          <div
            className="relative bg-white dark:bg-[#121110] border border-stone-800 p-8 sm:p-12 rounded-xs max-w-5xl w-full text-stone-900 dark:text-stone-100 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-stone-400">
                  {selectedDrawing.type} — {selectedDrawing.scale}
                </span>
                <h3 className="text-xl sm:text-2xl font-light mt-0.5">
                  {selectedDrawing.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDrawing(null)}
                className="px-4 py-2 text-xs font-mono uppercase tracking-widest border border-stone-300 dark:border-stone-700 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              >
                CLOSE [ESC]
              </button>
            </div>

            <div className="aspect-16/10 w-full bg-stone-50 dark:bg-stone-950 p-8 sm:p-12 rounded-xs border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200">
              {selectedDrawing.svg}
            </div>

            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-light leading-relaxed max-w-3xl">
              {selectedDrawing.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
