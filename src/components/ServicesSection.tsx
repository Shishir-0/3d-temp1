import React from "react";
import { ServiceItem } from "../types";

interface ServicesSectionProps {
  services: ServiceItem[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section id="services" className="py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-stone-200/60 dark:border-stone-800/60">
      {/* HEADER */}
      <div className="max-w-2xl space-y-4 mb-16">
        <span className="text-[10px] font-mono tracking-[0.25em] text-stone-500 dark:text-stone-400 uppercase">
          PRACTICE / DISCIPLINES
        </span>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
          Architectural Services
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
          From master planning to bespoke interior joinery, we offer complete spatial creation.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((srv) => (
          <div
            key={srv.number}
            className="p-8 sm:p-10 bg-stone-50/70 dark:bg-stone-900/30 rounded-xs border border-stone-200/60 dark:border-stone-800/60 space-y-4 hover:border-stone-400 dark:hover:border-stone-600 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-mono text-stone-400 dark:text-stone-500">
              <span>{srv.number}</span>
              <span>STUDIO PRACTICE</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-light tracking-tight">
              {srv.title}
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed">
              {srv.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
