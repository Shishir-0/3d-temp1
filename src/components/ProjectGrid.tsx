import React from "react";
import { ProjectItem } from "../types";

interface ProjectGridProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelectProject }) => {
  return (
    <section id="projects" className="py-28 sm:py-40 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 sm:mb-28 pb-8 border-b border-stone-200/50 dark:border-stone-800/50">
        <div>
          <span className="text-[10px] font-mono tracking-[0.28em] text-stone-400 dark:text-stone-500 uppercase">
            01 / PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight mt-3">
            Selected Works
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md mt-4 md:mt-0 leading-relaxed font-light">
          A collection of contemporary residences, cultural interventions, and interior architecture defined by materiality and natural light.
        </p>
      </div>

      {/* ASYMMETRIC EDITORIAL PRESENTATION */}
      <div className="space-y-28 sm:space-y-44">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              data-cursor="view"
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* IMAGE CONTAINER */}
              <div
                className={`lg:col-span-8 overflow-hidden rounded-xs relative bg-stone-100 dark:bg-stone-900 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="aspect-16/10 sm:aspect-16/10 w-full overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* CORNER NUMBERING BADGE */}
                <div className="absolute top-6 left-6 px-3 py-1.5 bg-stone-950/80 text-white backdrop-blur-md rounded-xs text-[10px] font-mono tracking-widest uppercase">
                  PROJECT {project.id}
                </div>
              </div>

              {/* METADATA & EDITORIAL SUMMARY */}
              <div
                className={`lg:col-span-4 space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest">
                    <span>{project.category}</span>
                    <span>/</span>
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
                    <span className="font-medium text-stone-800 dark:text-stone-200">
                      {project.year}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-stone-400 dark:text-stone-500 uppercase tracking-widest">
                      FOOTPRINT
                    </span>
                    <span className="font-medium text-stone-800 dark:text-stone-200">
                      {project.area}
                    </span>
                  </div>
                </div>

                {/* CASE STUDY LINK TRIGGER */}
                <div className="inline-flex items-center text-xs font-semibold tracking-[0.2em] uppercase text-stone-900 dark:text-stone-100 group-hover:underline pt-2">
                  <span>Explore Case Study</span>
                  <span className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300">
                    →
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
