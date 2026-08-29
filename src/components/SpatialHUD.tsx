import React from "react";

interface SpatialHUDProps {
  progress: number;
  activeSection: string;
}

export const SpatialHUD: React.FC<SpatialHUDProps> = ({ progress, activeSection }) => {
  const getZoneLabel = (p: number) => {
    if (p < 0.14) return "01 / STUDIO HERO & IDENTITY";
    if (p < 0.38) return "02 / SELECTED PORTFOLIO WORKS";
    if (p < 0.52) return "03 / FLAGSHIP CASE STUDY";
    if (p < 0.66) return "04 / STUDIO PHILOSOPHY";
    if (p < 0.78) return "05 / MATERIAL ARCHIVE & DRAWINGS";
    if (p < 0.90) return "06 / DISCIPLINES & ESSAYS";
    return "07 / COMMISSIONS & CONTACT";
  };

  const getElevation = (p: number) => {
    const elev = (4.2 - p * 2.0).toFixed(2);
    return `+${elev}m`;
  };

  return (
    <div className="fixed bottom-6 left-6 sm:left-12 right-6 sm:right-12 z-30 pointer-events-none flex items-center justify-between text-[9px] font-mono tracking-[0.24em] text-stone-400 dark:text-stone-500 uppercase">
      {/* LEFT: ZONE NAME */}
      <div className="flex items-center space-x-3 bg-white/80 dark:bg-[#121110]/80 backdrop-blur-md px-3.5 py-1.5 rounded-xs border border-stone-200/50 dark:border-stone-800/50 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-stone-900 dark:bg-stone-100" />
        <span>{getZoneLabel(progress)}</span>
      </div>

      {/* RIGHT: CAMERA RAIL & ELEVATION */}
      <div className="hidden sm:flex items-center space-x-6 bg-white/80 dark:bg-[#121110]/80 backdrop-blur-md px-3.5 py-1.5 rounded-xs border border-stone-200/50 dark:border-stone-800/50 shadow-xs">
        <span>ELEV: {getElevation(progress)}</span>
        <span>•</span>
        <span>RAIL: {Math.round(progress * 100)}%</span>
      </div>
    </div>
  );
};
