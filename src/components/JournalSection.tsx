import React from "react";
import { JournalItem } from "../types";

interface JournalSectionProps {
  journal: JournalItem[];
}

export const JournalSection: React.FC<JournalSectionProps> = ({ journal }) => {
  return (
    <section id="journal" className="py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-stone-200/60 dark:border-stone-800/60">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/60 dark:border-stone-800/60">
        <div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-stone-500 dark:text-stone-400 uppercase">
            EDITORIAL / JOURNAL
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight mt-2">
            Architectural Essays
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md mt-4 sm:mt-0 leading-relaxed font-light">
          Observations on spatial theory, material authenticity, and modern brutalism.
        </p>
      </div>

      {/* JOURNAL CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {journal.map((item, idx) => (
          <article
            key={idx}
            className="group cursor-pointer space-y-5 p-4 rounded-xs bg-stone-50/50 dark:bg-stone-900/20 border border-stone-200/40 dark:border-stone-800/40 hover:border-stone-400 dark:hover:border-stone-600 transition-colors"
          >
            <div className="aspect-16/10 overflow-hidden rounded-xs bg-stone-200 dark:bg-stone-800">
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-[9px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest">
                <span>{item.category}</span>
                <span>•</span>
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.readTime}</span>
              </div>

              <h3 className="text-base sm:text-lg font-light tracking-tight group-hover:translate-x-1 transition-transform duration-300 leading-snug">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
