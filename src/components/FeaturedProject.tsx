import React from "react";
import { ProjectItem } from "../types";

interface FeaturedProjectProps {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  onSelectProject,
}) => {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto">
      <div
        className="relative overflow-hidden rounded-xs bg-stone-950 text-white min-h-[580px] sm:min-h-[660px] flex items-end p-8 sm:p-20 group cursor-pointer border border-stone-800/60"
        onClick={() => onSelectProject(project)}
        data-cursor="view"
      >
        {/* BACKGROUND FULL BLEED IMMERSIVE IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-60 group-hover:scale-[1.015] transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        </div>

        {/* TOP EDITORIAL METADATA */}
        <div className="absolute top-8 left-8 sm:top-12 sm:left-12 z-10 flex items-center space-x-3 text-[10px] font-mono tracking-[0.28em] text-stone-300 uppercase">
          <span className="w-2 h-2 rounded-full bg-amber-400/90" />
          <span>FEATURED COVER STORY / ISSUE 08</span>
        </div>

        {/* CONTENT NARRATIVE */}
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="text-xs font-mono text-stone-400 uppercase tracking-widest">
            {project.category} — {project.location} ({project.year})
          </div>

          <h2 className="text-4xl sm:text-7xl font-light tracking-tight text-white leading-[1.05]">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed max-w-xl">
            {project.description}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono tracking-[0.2em] uppercase">
            <button className="px-7 py-3.5 bg-white text-stone-950 font-semibold hover:bg-stone-200 transition-colors rounded-xs flex items-center space-x-3 cursor-pointer">
              <span>View Case Study</span>
              <span>→</span>
            </button>
            <span className="text-stone-400 text-[11px]">SCALE: {project.area}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
