import React, { useEffect, useState } from "react";

interface HeaderProps {
  studioName?: string;
  studioDescriptor?: string;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  studioName = "STUDIO NAME",
  studioDescriptor = "ARCHITECTURE & INTERIORS",
  isDarkMode,
  onToggleDarkMode,
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "projects", label: "Projects", num: "01", isPrimary: true },
    { id: "studio", label: "Studio", num: "02" },
    { id: "services", label: "Services", num: "03" },
    { id: "journal", label: "Journal", num: "04" },
    { id: "contact", label: "Contact", num: "05" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        isScrolled
          ? "py-3.5 bg-white/90 dark:bg-[#121110]/90 backdrop-blur-xl border-b border-stone-200/70 dark:border-stone-800/70 shadow-xs"
          : "py-6 sm:py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* STUDIO LOGO / IDENTITY (SOPHISTICATED REVEAL) */}
        <button
          onClick={() => onNavigate("hero")}
          className={`text-left group cursor-pointer focus:outline-hidden transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <span className="block text-xs sm:text-sm font-bold tracking-[0.24em] uppercase font-sans text-stone-950 dark:text-stone-50 transition-opacity duration-300 group-hover:opacity-60">
            {studioName}
          </span>
          <span className="block text-[9px] tracking-[0.26em] text-stone-500 dark:text-stone-400 uppercase mt-0.5 font-mono">
            {studioDescriptor}
          </span>
        </button>

        {/* DESKTOP REFINED EDITORIAL NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const staggerDelay = `${index * 40}ms`;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                style={{
                  transitionDelay: mounted ? "0ms" : staggerDelay,
                }}
                className={`group relative text-[11px] tracking-[0.22em] uppercase py-1.5 cursor-pointer focus:outline-hidden transition-all duration-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1.5"
                } ${
                  item.isPrimary
                    ? "font-bold text-stone-950 dark:text-stone-50"
                    : isActive
                    ? "font-semibold text-stone-950 dark:text-stone-100"
                    : "font-medium text-stone-500 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50"
                }`}
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-[1px]">
                  {item.label}
                </span>

                {/* PRIMARY HIGHLIGHT INDICATOR */}
                {item.isPrimary && (
                  <span
                    className={`ml-1.5 inline-block w-1.5 h-1.5 rounded-full transition-all duration-300 align-middle ${
                      isActive
                        ? "bg-stone-950 dark:bg-stone-100 scale-110"
                        : "bg-stone-400 dark:bg-stone-500 opacity-60 group-hover:opacity-100"
                    }`}
                  />
                )}

                {/* ANIMATED ACTIVE UNDERLINE PILL */}
                {isActive && !item.isPrimary && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-stone-950 dark:bg-stone-100 rounded-full transition-all duration-300" />
                )}

                {/* SUBTLE HOVER UNDERLINE REVEAL */}
                {!isActive && !item.isPrimary && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[1px] bg-stone-400 dark:bg-stone-500 transition-all duration-300 rounded-full opacity-60" />
                )}
              </button>
            );
          })}
        </nav>

        {/* UTILITIES: THEME TOGGLE & ANIMATED HAMBURGER */}
        <div
          className={`flex items-center space-x-3 sm:space-x-4 transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle dark gallery mode"
            className="px-3.5 py-1.5 rounded-full border border-stone-300/80 dark:border-stone-700/80 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-300 cursor-pointer text-[10px] tracking-widest uppercase font-mono hover:scale-105 active:scale-95"
          >
            {isDarkMode ? "LIGHT" : "DARK"}
          </button>

          {/* ANIMATED LUXURY HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-hidden cursor-pointer rounded-full border border-stone-200 dark:border-stone-800 hover:bg-stone-100/60 dark:hover:bg-stone-900/60 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`w-4 h-[1.5px] bg-stone-900 dark:bg-stone-100 transition-transform duration-300 origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-stone-900 dark:bg-stone-100 transition-opacity duration-200 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-stone-900 dark:bg-stone-100 transition-transform duration-300 origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE GALLERY NAVIGATION OVERLAY */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#121110]/98 backdrop-blur-2xl border-b border-stone-200 dark:border-stone-800 px-6 py-8 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="text-[9px] font-mono tracking-[0.28em] text-stone-400 dark:text-stone-500 uppercase pb-3 border-b border-stone-100 dark:border-stone-900">
            PORTFOLIO DIRECTORY
          </div>
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              style={{ animationDelay: `${i * 30}ms` }}
              className={`w-full flex items-center justify-between py-3.5 border-b border-stone-100 dark:border-stone-900 text-left transition-colors cursor-pointer ${
                activeSection === item.id
                  ? "text-stone-950 dark:text-stone-50 font-bold"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50 font-light"
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-mono opacity-40">{item.num}</span>
                <span className="text-sm tracking-[0.2em] uppercase">{item.label}</span>
              </div>
              <span className="text-xs font-mono opacity-50">→</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
