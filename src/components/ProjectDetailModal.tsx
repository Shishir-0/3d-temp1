import React, { useEffect } from "react";
import { ProjectItem } from "../types";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/95 dark:bg-[#121110]/95 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      {/* TOP STICKY BAR */}
      <div className="sticky top-0 z-20 bg-white/85 dark:bg-[#121110]/85 backdrop-blur-md px-6 sm:px-12 py-5 border-b border-stone-200/60 dark:border-stone-800/60 flex items-center justify-between">
        <div className="text-xs font-mono tracking-[0.25em] text-stone-500 uppercase">
          PROJECT CASE STUDY / {project.id}
        </div>
        <button
          onClick={onClose}
          className="px-5 py-2 border border-stone-300/80 dark:border-stone-700/80 rounded-full text-xs font-mono tracking-widest uppercase hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
        >
          CLOSE [ESC]
        </button>
      </div>

      {/* CASE STUDY ARTICLE CONTENT */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 space-y-20">
        {/* HERO TITLE BLOCK */}
        <div className="space-y-4 max-w-4xl">
          <div className="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest">
            {project.category} — {project.location} ({project.year})
          </div>
          <h1 className="text-4xl sm:text-7xl font-light tracking-tight leading-[1.06]">
            {project.title}
          </h1>
        </div>

        {/* HERO IMAGE */}
        <div className="aspect-16/9 w-full overflow-hidden rounded-xs bg-stone-100 dark:bg-stone-900 shadow-2xl">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* METADATA SPECIFICATIONS TABLE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-stone-200/60 dark:border-stone-800/60 text-xs font-mono">
          <div>
            <span className="block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest">LOCATION</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100">{project.location}</span>
          </div>
          <div>
            <span className="block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest">YEAR OF COMPLETION</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100">{project.year}</span>
          </div>
          <div>
            <span className="block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest">BUILT FOOTPRINT</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100">{project.area}</span>
          </div>
          <div>
            <span className="block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest">DISCIPLINE</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100">{project.category}</span>
          </div>
        </div>

        {/* CONCEPT PULL STATEMENT */}
        <div className="max-w-3xl space-y-8">
          <span className="text-[10px] font-mono tracking-[0.25em] text-stone-400 dark:text-stone-500 uppercase">
            ARCHITECTURAL CONCEPT
          </span>
          <h2 className="text-2xl sm:text-4xl font-light italic font-serif leading-snug text-stone-900 dark:text-stone-100">
            "Architecture begins with the way light enters a room and lives through the materiality of its craft."
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* EDITORIAL GALLERY SPREAD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
          <div className="space-y-3">
            <div className="aspect-4/3 overflow-hidden rounded-xs bg-stone-100 dark:bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200"
                alt="Interior perspective"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest">
              FIG 01. NATURAL DAYLIGHT PENETRATION ACROSS TRAVERTINE PLINTH
            </span>
          </div>

          <div className="space-y-3">
            <div className="aspect-4/3 overflow-hidden rounded-xs bg-stone-100 dark:bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=1200"
                alt="Material detail"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest">
              FIG 02. BOARD-FORMED CONCRETE & SMOKED OAK JOINERY INTERSECTION
            </span>
          </div>
        </div>

        {/* FOOTNOTE CREDITS */}
        <div className="pt-12 border-t border-stone-200/60 dark:border-stone-800/60 flex flex-col sm:flex-row justify-between text-xs font-mono opacity-50 space-y-2 sm:space-y-0">
          <div>COMMISSION: ATELIER NORTH ARCHITECTURAL PRACTICE</div>
          <div>DOCUMENTATION: ARCHITECTURAL MONOGRAPH ARCHIVE</div>
        </div>
      </div>
    </div>
  );
};
