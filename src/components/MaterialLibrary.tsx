import React, { useState } from "react";
import { MaterialItem } from "../types";

interface MaterialLibraryProps {
  title?: string;
  description?: string;
  materials: MaterialItem[];
  onSelectMaterialHex?: (hex: string) => void;
}

export const MaterialLibrary: React.FC<MaterialLibraryProps> = ({
  title = "ARCHITECTURAL MATERIAL ARCHIVE",
  description = "Physicality is our primary language. Every surface is chosen for its tactile warmth, aging patina, and light interaction.",
  materials,
  onSelectMaterialHex,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeMat = materials[selectedIndex] || materials[0];

  const handleSelect = (index: number, hex: string) => {
    setSelectedIndex(index);
    if (onSelectMaterialHex) {
      onSelectMaterialHex(hex);
    }
  };

  return (
    <section id="materiality" className="py-28 sm:py-40 px-6 sm:px-12 max-w-7xl mx-auto border-t border-stone-200/50 dark:border-stone-800/50">
      {/* SECTION HEADER */}
      <div className="max-w-2xl space-y-4 mb-16 sm:mb-24">
        <span className="text-[10px] font-mono tracking-[0.28em] text-stone-400 dark:text-stone-500 uppercase">
          02 / MATERIALITY
        </span>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* MATERIAL ARCHIVE SELECTOR & ACTIVE FOCUS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* MATERIAL LIST SELECTOR */}
        <div className="lg:col-span-5 space-y-2.5">
          {materials.map((mat, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <div
                key={mat.name}
                onClick={() => handleSelect(idx, mat.colorHex)}
                className={`p-5 rounded-xs transition-all duration-300 cursor-pointer flex items-center justify-between border ${
                  isSelected
                    ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 border-transparent shadow-sm"
                    : "bg-transparent hover:bg-stone-100/60 dark:hover:bg-stone-900/60 border-stone-200/60 dark:border-stone-800/60"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span
                    className="w-4 h-4 rounded-full border border-black/15 dark:border-white/20 shadow-xs"
                    style={{ backgroundColor: mat.colorHex }}
                  />
                  <div>
                    <h3 className="text-sm font-medium tracking-wide">
                      {mat.name}
                    </h3>
                    <span className="text-[10px] font-mono opacity-60 uppercase tracking-wider">
                      {mat.origin}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono opacity-40">0{idx + 1}</span>
              </div>
            );
          })}
        </div>

        {/* ACTIVE SPECIFICATION ARCHIVE CARD */}
        {activeMat && (
          <div className="lg:col-span-7 bg-stone-50 dark:bg-stone-900/40 p-8 sm:p-14 rounded-xs border border-stone-200/50 dark:border-stone-800/50 space-y-8">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">
                  SPECIFICATION ARCHIVE / SAMPLE 0{selectedIndex + 1}
                </span>
                <h3 className="text-2xl sm:text-4xl font-light tracking-tight mt-2">
                  {activeMat.name}
                </h3>
              </div>
              <div
                className="w-16 h-16 rounded-xs shadow-md border border-black/10 dark:border-white/10"
                style={{ backgroundColor: activeMat.colorHex }}
              />
            </div>

            <div className="grid grid-cols-2 gap-6 text-xs font-mono border-t border-b border-stone-200/50 dark:border-stone-800/50 py-5">
              <div>
                <span className="block opacity-45 text-[9px] uppercase tracking-widest mb-1">
                  GEOLOGICAL ORIGIN
                </span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">
                  {activeMat.origin}
                </span>
              </div>
              <div>
                <span className="block opacity-45 text-[9px] uppercase tracking-widest mb-1">
                  TACTILE SURFACE
                </span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">
                  {activeMat.finish}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed">
              {activeMat.description}
            </p>

            <div className="text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest flex items-center space-x-2 pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>3D Spatial Model PBR Material Applied</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
