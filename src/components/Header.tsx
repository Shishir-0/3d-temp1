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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "projects", label: "Projects", isPrimary: true },
    { id: "studio", label: "Studio" },
    { id: "services", label: "Services" },
    { id: "journal", label: "Journal" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-white/90 dark:bg-[#121110]/90 backdrop-blur-md border-b border-stone-200/60 dark:border-stone-800/60 shadow-xs"
          : "py-7 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* STUDIO LOGO / IDENTITY */}
        <button
          onClick={() => onNavigate("hero")}
          className="text-left group cursor-pointer focus:outline-hidden"
        >
          <span className="block text-xs sm:text-sm font-bold tracking-[0.24em] uppercase font-sans transition-opacity group-hover:opacity-70">
            {studioName}
          </span>
          <span className="block text-[9px] tracking-[0.26em] text-stone-500 dark:text-stone-400 uppercase mt-0.5 font-mono">
            {studioDescriptor}
          </span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-9">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[11px] tracking-[0.22em] uppercase transition-all duration-300 relative py-1 cursor-pointer focus:outline-hidden ${
                  item.isPrimary
                    ? "font-bold text-stone-950 dark:text-stone-50"
                    : isActive
                    ? "text-stone-950 dark:text-stone-100 font-semibold"
                    : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 font-medium"
                }`}
              >
                <span>{item.label}</span>
                {item.isPrimary && (
                  <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-stone-950 dark:bg-stone-100 align-middle" />
                )}
                {isActive && !item.isPrimary && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-stone-950 dark:bg-stone-100 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* UTILITIES: THEME TOGGLE & MOBILE DRAWER */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle dark gallery mode"
            className="px-3.5 py-1.5 rounded-full border border-stone-300/80 dark:border-stone-700/80 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer text-[10px] tracking-widest uppercase font-mono"
          >
            {isDarkMode ? "LIGHT" : "DARK"}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-800 dark:text-stone-200 focus:outline-hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE NAV DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#121110]/98 backdrop-blur-xl border-b border-stone-200 dark:border-stone-800 px-6 py-6 space-y-4 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-xs tracking-[0.22em] uppercase py-3 border-b border-stone-100 dark:border-stone-900 cursor-pointer ${
                item.isPrimary
                  ? "font-bold text-stone-950 dark:text-stone-50"
                  : "font-medium text-stone-700 dark:text-stone-300"
              }`}
            >
              {item.label} {item.isPrimary ? "→" : ""}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
