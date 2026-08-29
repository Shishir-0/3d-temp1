import React from "react";

interface SpatialHUDProps {
  progress: number;
  activeSection: string;
}

export const SpatialHUD: React.FC<SpatialHUDProps> = ({ progress, activeSection }) => {
  const getZoneLabel = (p: number) => {
    if (p < 0.12) return "01 / ARRIVAL PAVILION & PLINTH";
    if (p < 0.28) return "02 / ATRIUM & LIGHT COURT";
    if (p < 0.44) return "03 / SELECTED WORKS PAVILIONS";
    if (p < 0.58) return "04 / FEATURED INSTALLATION";
    if (p < 0.72) return "05 / MATERIALITY ARCHIVE";
    if (p < 0.84) return "06 / SPATIAL DIAGRAMS";
    if (p < 0.94) return "07 / DISCIPLINES & ESSAYS";
    return "08 / NOCTURNE CHAMBER";
  };

  const getElevation = (p: number) => {
    const elev = (4.2 - p * 2.0).toFixed(2);
    return `+${elev}m`;
  };

  return (
    <div className="fixed bottom-6 left-6 sm:left-12 right-6 sm:right-12 z-30 pointer-events-none flex items-center justify-between text-[9px] font-mono tracking-[0.24em] text-stone-400 dark:text-stone-500 uppercase">
      {/* LEFT: ZONE NAME */}
      <div className="flex items-center space-x-3 bg-white/70 dark:bg-[#121110]/70 backdrop-blur-md px-3.5 py-1.5 rounded-xs border border-stone-200/40 dark:border-stone-800/40">
        <span className="w-1.5 h-1.5 rounded-full bg-stone-900 dark:bg-stone-100" />
        <span>{getZoneLabel(progress)}</span>
      </div>

      {/* RIGHT: CAMERA RAIL & ELEVATION */}
      <div className="hidden sm:flex items-center space-x-6 bg-white/70 dark:bg-[#121110]/70 backdrop-blur-md px-3.5 py-1.5 rounded-xs border border-stone-200/40 dark:border-stone-800/40">
        <span>ELEV: {getElevation(progress)}</span>
        <span>•</span>
        <span>RAIL: {Math.round(progress * 100)}%</span>
      </div>
    </div>
  );
};
