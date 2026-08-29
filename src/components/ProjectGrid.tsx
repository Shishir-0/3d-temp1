import React, { useState } from "react";
import { ProjectItem } from "../types";

interface ProjectGridProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const categories = ["ALL", "RESIDENTIAL", "INTERIOR", "SPATIAL"];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "ALL") return true;
    const cat = project.category.toUpperCase();
    if (selectedFilter === "RESIDENTIAL") return cat.includes("RESIDEN") || cat.includes("HOUSE") || cat.includes("VILLA");
    if (selectedFilter === "INTERIOR") return cat.includes("INTERIOR");
    if (selectedFilter === "SPATIAL") return cat.includes("SPATIAL") || cat.includes("GALLERY") || cat.includes("CULTURAL");
    return true;
  });

  return (
    <section id="projects" className="py-28 sm:py-40 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* SECTION HEADER — RESTRAINED EDITORIAL STYLE */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-stone-200/50 dark:border-stone-800/50">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-[0.3em] text-stone-500 dark:text-stone-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-900 dark:bg-stone-100" />
            <span>PORTFOLIO / SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight mt-3">
            Selected Works
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-md mt-6 md:mt-0 leading-relaxed font-light">
          A curated portfolio of monolithic residences, private villas, and interior architecture defined by materiality and natural light.
        </p>
      </div>

      {/* PORTFOLIO CATEGORY FILTER */}
      <div className="flex flex-wrap items-center gap-2.5 mb-16 pb-2">
        <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest mr-2">
          INDEX:
        </span>
        {categories.map((cat) => {
          const isActive = selectedFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xs text-[10px] font-mono tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-stone-950 text-white dark:bg-stone-100 dark:text-stone-950 font-bold shadow-xs"
                  : "bg-stone-100/80 dark:bg-stone-900/60 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* EDITORIAL PORTFOLIO PROJECT LIST */}
      <div className="space-y-28 sm:space-y-40">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-6 sm:p-10 rounded-xs bg-white/65 dark:bg-[#121110]/65 backdrop-blur-md border border-stone-200/50 dark:border-stone-800/50 hover:border-stone-400/80 dark:hover:border-stone-600/80 transition-all duration-500 shadow-xs"
            >
              {/* IMAGE CONTAINER */}
              <div
                className={`lg:col-span-7 overflow-hidden rounded-xs relative bg-stone-100 dark:bg-stone-900 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="aspect-16/10 sm:aspect-16/10 w-full overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                  />
                </div>

                {/* CORNER NUMBERING BADGE */}
                <div className="absolute top-5 left-5 px-3.5 py-1.5 bg-stone-950/80 text-white backdrop-blur-md rounded-xs text-[10px] font-mono tracking-widest uppercase">
                  {project.id}
                </div>
              </div>

              {/* METADATA & EDITORIAL SUMMARY */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-light tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-stone-300 font-light">
                  {project.description}
                </p>

                {/* SPECIFICATION DIVIDER */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-stone-200/50 dark:border-stone-800/50 text-[11px] font-mono">
                  <div>
                    <span className="block text-[9px] text-stone-400 dark:text-stone-500 uppercase tracking-widest">
                      COMPLETION
                    </span>
                    <span className="font-semibold text-stone-800 dark:text-stone-200">
                      {project.year}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-stone-400 dark:text-stone-500 uppercase tracking-widest">
                      BUILT AREA
                    </span>
                    <span className="font-semibold text-stone-800 dark:text-stone-200">
                      {project.area}
                    </span>
                  </div>
                </div>

                {/* CASE STUDY TRIGGER BUTTON */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="inline-flex items-center space-x-3 px-6 py-3 bg-stone-950 text-white dark:bg-stone-100 dark:text-stone-950 text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:opacity-85 transition-opacity cursor-pointer shadow-sm hover:scale-105 active:scale-95 duration-200"
                  >
                    <span>View Case Study</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>

                  <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                    CASE STUDY 0{project.id}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
