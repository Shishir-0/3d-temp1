import React from "react";

interface FooterProps {
  studioName?: string;
  studioDescriptor?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  contactInstagram?: string;
  footerCopyright?: string;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  studioName = "STUDIO NAME",
  studioDescriptor = "ARCHITECTURE & INTERIORS",
  contactEmail = "inquiries@yourstudio.com",
  contactPhone = "+1 (555) 019-2834",
  contactAddress = "Studio Address / City, Country",
  contactInstagram = "@yourstudio.arch",
  footerCopyright = "ALL RIGHTS RESERVED.",
  onNavigate,
}) => {
  return (
    <footer className="bg-stone-950 text-stone-100 py-24 sm:py-32 px-6 sm:px-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* TOP BRANDING & NAVIGATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-4xl sm:text-7xl font-bold tracking-[0.18em] uppercase font-sans">
              {studioName}
            </h2>
            <p className="text-xs font-mono text-stone-400 tracking-widest uppercase">
              {studioDescriptor}
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            <div className="space-y-3">
              <span className="block text-[9px] text-stone-500 uppercase tracking-widest">NAVIGATION</span>
              <ul className="space-y-2 text-stone-300">
                <li><button onClick={() => onNavigate("projects")} className="hover:text-white cursor-pointer">Projects</button></li>
                <li><button onClick={() => onNavigate("studio")} className="hover:text-white cursor-pointer">Studio</button></li>
                <li><button onClick={() => onNavigate("materiality")} className="hover:text-white cursor-pointer">Materiality</button></li>
                <li><button onClick={() => onNavigate("services")} className="hover:text-white cursor-pointer">Services</button></li>
                <li><button onClick={() => onNavigate("journal")} className="hover:text-white cursor-pointer">Journal</button></li>
                <li><button onClick={() => onNavigate("contact")} className="hover:text-white cursor-pointer">Contact</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="block text-[9px] text-stone-500 uppercase tracking-widest">CONTACT</span>
              <ul className="space-y-2 text-stone-300">
                <li><a href={`mailto:${contactEmail}`} className="hover:text-white">{contactEmail}</a></li>
                <li><a href={`tel:${contactPhone}`} className="hover:text-white">{contactPhone}</a></li>
                <li className="text-stone-400">{contactAddress}</li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="block text-[9px] text-stone-500 uppercase tracking-widest">PERSPECTIVE</span>
              <ul className="space-y-2 text-stone-300">
                <li><span>{contactInstagram}</span></li>
                <li className="text-stone-500">Spatial Practice</li>
                <li className="text-stone-500">Material Research</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-12 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-stone-500 space-y-4 sm:space-y-0">
          <div>© {new Date().getFullYear()} {studioName}. {footerCopyright}</div>
          <div>POWERED BY CUTIEPAGE TEMPLATE SDK</div>
          <div>CRAFTED FOR ARCHITECTURAL PRACTICES</div>
        </div>
      </div>
    </footer>
  );
};
