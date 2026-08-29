import React, { useEffect, useState } from "react";
import { ProjectItem } from "../types";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  allProjects?: ProjectItem[];
  studioName?: string;
  onClose: () => void;
  onSelectProject?: (project: ProjectItem) => void;
  onNavigateContact?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  allProjects = [],
  studioName = "STUDIO NAME",
  onClose,
  onSelectProject,
  onNavigateContact,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "gallery" | "materials" | "drawings">("overview");

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

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const handleInquire = () => {
    onClose();
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white/95 dark:bg-[#121110]/95 backdrop-blur-2xl overflow-y-auto animate-in fade-in duration-300">
      {/* TOP STICKY BAR */}
      <div className="sticky top-0 z-30 bg-white/90 dark:bg-[#121110]/90 backdrop-blur-md px-6 sm:px-12 py-4 border-b border-stone-200/60 dark:border-stone-800/60 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-xs font-mono tracking-[0.25em] text-stone-500 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-950 dark:bg-stone-100" />
          <span>PROJECT CASE STUDY / {project.id}</span>
        </div>

        <div className="flex items-center space-x-3">
          {allProjects.length > 1 && onSelectProject && (
            <div className="hidden sm:flex items-center space-x-2 mr-4">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="px-3 py-1.5 border border-stone-200 dark:border-stone-800 rounded-xs text-[10px] font-mono uppercase tracking-widest hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              >
                ← PREV
              </button>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="px-3 py-1.5 border border-stone-200 dark:border-stone-800 rounded-xs text-[10px] font-mono uppercase tracking-widest hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              >
                NEXT →
              </button>
            </div>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2 border border-stone-300/80 dark:border-stone-700/80 rounded-full text-xs font-mono tracking-widest uppercase hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            CLOSE [ESC]
          </button>
        </div>
      </div>

      {/* CASE STUDY ARTICLE CONTENT */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-12 sm:py-20 space-y-16 sm:space-y-20">
        {/* HERO TITLE BLOCK */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-3 text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <h1 className="text-4xl sm:text-7xl font-light tracking-tight leading-[1.06]">
            {project.title}
          </h1>
        </div>

        {/* HERO IMAGE */}
        <div className="aspect-16/9 w-full overflow-hidden rounded-xs bg-stone-100 dark:bg-stone-900 shadow-2xl border border-stone-200/50 dark:border-stone-800/50">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* METADATA SPECIFICATIONS TABLE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-stone-200/60 dark:border-stone-800/60 text-xs font-mono">
          <div>
            <span className="block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest">LOCATION</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100">{project.location}</span>
          </div>
          <div>
            <span className="block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest">COMPLETION</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100">{project.year}</span>
          </div>
          <div>
            <span className="block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest">FOOTPRINT</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100">{project.area}</span>
          </div>
          <div>
            <span className="block opacity-45 uppercase text-[9px] mb-1.5 tracking-widest">TYPOLOGY</span>
            <span className="font-semibold text-stone-900 dark:text-stone-100">{project.category}</span>
          </div>
        </div>

        {/* ARCHITECTURAL CONCEPT & NARRATIVE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-stone-400 dark:text-stone-500 uppercase">
              ARCHITECTURAL INTENTION
            </span>
            <h3 className="text-xl sm:text-2xl font-light tracking-tight mt-2">
              Concept & Spatial Strategy
            </h3>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="text-base sm:text-lg font-serif italic text-stone-800 dark:text-stone-200 leading-relaxed">
              "Architecture begins with the way light enters a room and lives through the materiality of its craft."
            </p>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* EDITORIAL GALLERY SPREAD */}
        <div className="space-y-6 pt-4">
          <div className="text-[10px] font-mono tracking-[0.25em] text-stone-400 dark:text-stone-500 uppercase">
            PROJECT GALLERY & PERSPECTIVES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="aspect-4/3 overflow-hidden rounded-xs bg-stone-100 dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200"
                  alt="Interior perspective"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="block text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest">
                FIG 01. DAYLIGHT PENETRATION ACROSS NATURAL HONED PLINTH
              </span>
            </div>

            <div className="space-y-3">
              <div className="aspect-4/3 overflow-hidden rounded-xs bg-stone-100 dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50">
                <img
                  src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=1200"
                  alt="Material detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="block text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest">
                FIG 02. BOARD-FORMED CONCRETE & TIMBER JOINERY INTERSECTION
              </span>
            </div>
          </div>
        </div>

        {/* PROJECT MATERIAL PALETTE */}
        <div className="space-y-6 pt-6 border-t border-stone-200/60 dark:border-stone-800/60">
          <div className="text-[10px] font-mono tracking-[0.25em] text-stone-400 dark:text-stone-500 uppercase">
            SPECIFIED MATERIAL PALETTE
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xs bg-stone-50 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/50 space-y-2">
              <div className="w-6 h-6 rounded-full bg-[#e4dcd3] border border-black/10" />
              <div className="text-xs font-semibold">Travertine Navona</div>
              <div className="text-[10px] font-mono opacity-60">Honed Stone</div>
            </div>
            <div className="p-4 rounded-xs bg-stone-50 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/50 space-y-2">
              <div className="w-6 h-6 rounded-full bg-[#3d3128] border border-black/10" />
              <div className="text-xs font-semibold">Smoked European Oak</div>
              <div className="text-[10px] font-mono opacity-60">Brushed Wax</div>
            </div>
            <div className="p-4 rounded-xs bg-stone-50 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/50 space-y-2">
              <div className="w-6 h-6 rounded-full bg-[#a89264] border border-black/10" />
              <div className="text-xs font-semibold">Patinated Brass</div>
              <div className="text-[10px] font-mono opacity-60">Hand-Rubbed Oil</div>
            </div>
            <div className="p-4 rounded-xs bg-stone-50 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/50 space-y-2">
              <div className="w-6 h-6 rounded-full bg-[#9c9790] border border-black/10" />
              <div className="text-xs font-semibold">Off-Shutter Concrete</div>
              <div className="text-[10px] font-mono opacity-60">Board-Formed</div>
            </div>
          </div>
        </div>

        {/* TECHNICAL DRAWING PREVIEW */}
        <div className="space-y-6 pt-6 border-t border-stone-200/60 dark:border-stone-800/60">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-mono tracking-[0.25em] text-stone-400 dark:text-stone-500 uppercase">
              TECHNICAL DRAWING / LEVEL 01 PLAN
            </div>
            <div className="text-[10px] font-mono opacity-50 uppercase">SCALE 1:100 @ A1</div>
          </div>
          <div className="aspect-21/9 w-full bg-stone-50 dark:bg-stone-950 p-6 sm:p-10 rounded-xs border border-stone-200/60 dark:border-stone-800/60 flex items-center justify-center text-stone-800 dark:text-stone-200">
            <svg viewBox="0 0 440 180" className="w-full h-full stroke-current fill-none stroke-[0.85]">
              <line x1="40" y1="20" x2="40" y2="160" className="stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]" />
              <line x1="160" y1="20" x2="160" y2="160" className="stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]" />
              <line x1="280" y1="20" x2="280" y2="160" className="stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]" />
              <line x1="380" y1="20" x2="380" y2="160" className="stroke-stone-300 dark:stroke-stone-700 stroke-dasharray-[3,3]" />
              <rect x="40" y="30" width="340" height="120" className="stroke-stone-900 dark:stroke-stone-100 stroke-[1.5]" />
              <rect x="160" y="60" width="120" height="60" className="stroke-stone-500 dark:stroke-stone-400 stroke-dasharray-[4,4]" />
              <circle cx="70" cy="50" r="3" className="fill-current" />
              <circle cx="350" cy="50" r="3" className="fill-current" />
              <circle cx="70" cy="130" r="3" className="fill-current" />
              <circle cx="350" cy="130" r="3" className="fill-current" />
              <text x="185" y="95" className="text-[8px] font-mono fill-current stroke-none tracking-widest">COURTYARD</text>
              <text x="65" y="100" className="text-[8px] font-mono fill-current stroke-none tracking-widest">LIVING PAVILION</text>
              <text x="300" y="100" className="text-[8px] font-mono fill-current stroke-none tracking-widest">STUDIO</text>
            </svg>
          </div>
        </div>

        {/* INQUIRY CTA & FOOTNOTE CREDITS */}
        <div className="p-8 sm:p-12 rounded-xs bg-stone-100 dark:bg-stone-900/50 border border-stone-200/60 dark:border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-light">Interested in a similar commission?</h4>
            <p className="text-xs text-stone-500 font-light">Discuss your site topography, program, and spatial objectives.</p>
          </div>
          <button
            onClick={handleInquire}
            className="px-8 py-3.5 bg-stone-950 text-white dark:bg-stone-100 dark:text-stone-950 text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:opacity-85 transition-opacity cursor-pointer shadow-md"
          >
            Start a Project →
          </button>
        </div>

        <div className="pt-8 border-t border-stone-200/60 dark:border-stone-800/60 flex flex-col sm:flex-row justify-between text-xs font-mono opacity-50 space-y-2 sm:space-y-0">
          <div>STUDIO: {studioName}</div>
          <div>DOCUMENTATION: ARCHITECTURAL PORTFOLIO ARCHIVE</div>
        </div>
      </div>
    </div>
  );
};
