import React from "react";

interface FooterProps {
  studioName?: string;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ studioName = "ATELIER NORTH", onNavigate }) => {
  return (
    <footer className="bg-stone-950 text-stone-100 py-24 sm:py-32 px-6 sm:px-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* TOP BRANDING & NAVIGATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-4xl sm:text-7xl font-bold tracking-[0.18em] uppercase font-sans">
              {studioName}
            </h2>
            <p className="text-xs font-mono text-stone-400 tracking-widest uppercase">
              ARCHITECTURE • INTERIOR • SPATIAL PHILOSOPHY
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            <div className="space-y-3">
              <span className="block text-[9px] text-stone-500 uppercase tracking-widest">NAVIGATION</span>
              <ul className="space-y-2 text-stone-300">
                <li><button onClick={() => onNavigate("projects")} className="hover:text-white">Projects</button></li>
                <li><button onClick={() => onNavigate("studio")} className="hover:text-white">Studio</button></li>
                <li><button onClick={() => onNavigate("materiality")} className="hover:text-white">Materiality</button></li>
                <li><button onClick={() => onNavigate("services")} className="hover:text-white">Services</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="block text-[9px] text-stone-500 uppercase tracking-widest">OFFICES</span>
              <ul className="space-y-2 text-stone-300">
                <li>Zurich</li>
                <li>Kyoto</li>
                <li>Mumbai</li>
                <li>Copenhagen</li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="block text-[9px] text-stone-500 uppercase tracking-widest">LEGAL</span>
              <ul className="space-y-2 text-stone-300">
                <li>Privacy Policy</li>
                <li>Imprint</li>
                <li>Terms of Studio</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-12 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-stone-500 space-y-4 sm:space-y-0">
          <div>© {new Date().getFullYear()} {studioName}. ALL RIGHTS RESERVED.</div>
          <div>POWERED BY CUTIEPAGE TEMPLATE SDK</div>
          <div>CRAFTED WITH INTENTION</div>
        </div>
      </div>
    </footer>
  );
};
