import React, { useEffect, useState } from "react";
import { defineTemplate, useField, useTheme } from "@cutiepage/template-sdk";

import "./styles.css";

import { ProjectItem, MaterialItem, ServiceItem, JournalItem } from "./types";
import { parseProjects, parseMaterials, parseServices, parseJournal } from "./utils/dataParsers";

import { SEOHead } from "./components/SEOHead";
import { Header } from "./components/Header";
import { ContinuousSpatialCanvas } from "./components/3d/ContinuousSpatialCanvas";
import { SpatialHUD } from "./components/SpatialHUD";
import { ProjectGrid } from "./components/ProjectGrid";
import { FeaturedProject } from "./components/FeaturedProject";
import { MaterialLibrary } from "./components/MaterialLibrary";
import { SpatialDrawings } from "./components/SpatialDrawings";
import { ServicesSection } from "./components/ServicesSection";
import { JournalSection } from "./components/JournalSection";
import { ContactSection } from "./components/ContactSection";
import { ProjectDetailModal } from "./components/ProjectDetailModal";
import { Footer } from "./components/Footer";

// DEFAULT PREVIEW DATASETS (NEUTRAL TEMPLATE DEFAULTS)
const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: "01",
    title: "Residence 01",
    category: "Residential Architecture",
    location: "Zurich, Switzerland",
    year: "2026",
    area: "4,800 sq ft",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
    description: "A subterranean monolithic residence sculpted from natural travertine and board-formed concrete, prioritizing natural cross-ventilation, rainwater harvesting, and deep shadow play.",
  },
  {
    id: "02",
    title: "House 02",
    category: "Contemporary Residence",
    location: "Kyoto, Japan",
    year: "2025",
    area: "6,200 sq ft",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600",
    description: "A minimalist cantilevered glass villa suspended over lake topography, integrating floor-to-ceiling triple glazing, burnt cedar cladding, and geothermal heating.",
  },
  {
    id: "03",
    title: "Villa 03",
    category: "Interior Architecture",
    location: "Mumbai, India",
    year: "2025",
    area: "3,500 sq ft",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
    description: "A contemplative courtyard residence featuring raw basalt masonry, acoustic screens, and custom hand-rubbed brass joinery.",
  },
  {
    id: "04",
    title: "Interior 04",
    category: "Spatial & Gallery Design",
    location: "Copenhagen, Denmark",
    year: "2024",
    area: "5,100 sq ft",
    imageUrl: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600",
    description: "An adaptive reuse gallery and design laboratory housed in a historic brick warehouse with stainless steel spatial partitions.",
  },
];

const DEFAULT_MATERIALS: MaterialItem[] = [
  {
    name: "Travertine Navona",
    origin: "Tivoli, Italy",
    finish: "Honed & Unfilled",
    description: "Warm cream limestone with linear vein patterns, bringing quiet warmth to interior walls and courtyard paving.",
    colorHex: "#e4dcd3",
  },
  {
    name: "Smoked European Oak",
    origin: "Bavaria, Germany",
    finish: "Brushed Matte Wax",
    description: "Deep chocolate-brown grain with tactile texture, specified for custom architectural millwork and floating cabinetry.",
    colorHex: "#3d3128",
  },
  {
    name: "Patinated Brass",
    origin: "Kyoto, Japan",
    finish: "Hand-Rubbed Oil",
    description: "A living metallic finish that develops a rich antique sheen over time, executed on door handles and light fittings.",
    colorHex: "#a89264",
  },
  {
    name: "Board-Formed Concrete",
    origin: "Zurich, Switzerland",
    finish: "Off-Shutter Natural",
    description: "Raw structural concrete capturing grain impressions of rough-sawn cedar formwork for textural exterior facades.",
    colorHex: "#9c9790",
  },
  {
    name: "Fluted Low-Iron Glass",
    origin: "Venice, Italy",
    finish: "Acid-Etched Backing",
    description: "Translucent obscurity glass diffusing sunlight into soft ambient illumination across interior partitions.",
    colorHex: "#d8dfde",
  },
];

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Architectural Design",
    description: "Full-scope master planning, conceptual design, construction documentation, and site supervision for private and public commissions.",
  },
  {
    number: "02",
    title: "Interior Architecture",
    description: "Spatial layout optimization, bespoke furniture creation, material curation, acoustic design, and detailed joinery specifications.",
  },
  {
    number: "03",
    title: "Spatial & Experience Design",
    description: "Luxury hospitality concepts, retail flagship environments, gallery curation, and brand architecture.",
  },
  {
    number: "04",
    title: "3D Spatial Visualization",
    description: "Cinematic rendering, architectural walkthroughs, digital twin development, and physical material simulation.",
  },
];

const DEFAULT_JOURNAL: JournalItem[] = [
  {
    date: "AUG 2026",
    category: "ESSAY",
    title: "The Quiet Space: Reducing Visual Noise in Residential Architecture",
    readTime: "5 MIN READ",
    imageUrl: "https://images.unsplash.com/photo-160058515526-990dced4db0d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    date: "JUL 2026",
    category: "MATERIALITY",
    title: "Tactile Brutalism: Honest Expressions of Board-Formed Concrete and Travertine",
    readTime: "7 MIN READ",
    imageUrl: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    date: "MAY 2026",
    category: "PROCESS",
    title: "Light as a Primary Construction Material",
    readTime: "4 MIN READ",
    imageUrl: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000",
  },
];

export default defineTemplate({
  slug: "atelier-3d",
  name: "Atelier 3d",
  description: "A luxury 3D architectural & interior design portfolio template showcasing selected projects in an immersive virtual spatial gallery.",
  category: "portfolio",
  tags: ["architecture", "interior", "portfolio", "3d", "spatial", "luxury"],

  theme: {
    background: { type: "color", label: "Light Background", default: "#fbfaf8" },
    foreground: { type: "color", label: "Text Color", default: "#1c1b1a" },
    accent: { type: "color", label: "Accent Color", default: "#73706b" },
    stone: { type: "color", label: "Stone Tint", default: "#e6e2dd" },
    darkBg: { type: "color", label: "Dark Gallery Background", default: "#121110" },
  },

  fieldGroups: {
    hero: {
      label: "Hero & Studio Identity",
      blockType: "hero",
      description: "Studio title, descriptor, headline, and call to actions",
    },
    projects: {
      label: "Selected Portfolio Projects",
      blockType: "gallery",
      description: "Primary architectural portfolio projects list",
    },
    studio: {
      label: "Studio Philosophy",
      blockType: "story",
      description: "Architectural narrative, approach, and metrics",
    },
    materiality: {
      label: "Material Archive",
      blockType: "details",
      description: "Physical material specifications and research",
    },
    services: {
      label: "Services & Disciplines",
      blockType: "details",
      description: "Architectural practice offerings",
    },
    journal: {
      label: "Journal & Essays",
      blockType: "story",
      description: "Editorial articles and essays",
    },
    contact: {
      label: "Contact & Inquiries",
      blockType: "cta",
      description: "Commission inquiry details",
    },
  },

  fields: {
    studioName: {
      type: "text",
      label: "Studio Name",
      group: "hero",
      required: true,
      maxLength: 40,
      default: "STUDIO NAME",
    },
    studioDescriptor: {
      type: "text",
      label: "Studio Descriptor",
      group: "hero",
      maxLength: 60,
      default: "ARCHITECTURE & INTERIORS",
    },
    heroEyebrow: {
      type: "text",
      label: "Hero Eyebrow Label",
      group: "hero",
      maxLength: 80,
      default: "ARCHITECTURE & INTERIORS / SELECTED WORKS PORTFOLIO",
    },
    heroHeadline: {
      type: "text",
      label: "Hero Headline",
      group: "hero",
      required: true,
      maxLength: 90,
      default: "Designing spaces shaped by intention, material, and proportion.",
    },
    heroDesc: {
      type: "textarea",
      label: "Hero Description",
      group: "hero",
      maxLength: 240,
      default: "A contemporary architecture and interior practice creating quiet, enduring residential and cultural environments worldwide.",
    },
    ctaProjects: {
      type: "text",
      label: "Primary CTA Label (View Projects)",
      group: "hero",
      default: "View Projects",
    },
    ctaStudio: {
      type: "text",
      label: "Secondary CTA Label (About Studio)",
      group: "hero",
      default: "About Studio",
    },
    projectsData: {
      type: "textarea",
      label: "Projects List (ID|Title|Category|Location|Year|Area|ImageURL|Description per line)",
      group: "projects",
    },
    studioStatement: {
      type: "text",
      label: "Studio Philosophy Statement",
      group: "studio",
      maxLength: 160,
      default: "Architecture begins with the way light enters a room and lives through the materiality of its craft.",
    },
    studioDesc: {
      type: "textarea",
      label: "Studio Detailed Philosophy",
      group: "studio",
      maxLength: 320,
      default: "Founded on principles of spatial purity and material authenticity, our practice operates at the intersection of architecture, interior design, and structural philosophy.",
    },
    stat1Number: { type: "text", label: "Metric 1 Value", group: "studio", default: "24+" },
    stat1Label: { type: "text", label: "Metric 1 Label", group: "studio", default: "Completed Works" },
    stat2Number: { type: "text", label: "Metric 2 Value", group: "studio", default: "12" },
    stat2Label: { type: "text", label: "Metric 2 Label", group: "studio", default: "Design Awards" },
    stat3Number: { type: "text", label: "Metric 3 Value", group: "studio", default: "08" },
    stat3Label: { type: "text", label: "Metric 3 Label", group: "studio", default: "Global Locations" },
    materialityTitle: {
      type: "text",
      label: "Material Archive Title",
      group: "materiality",
      default: "ARCHITECTURAL MATERIAL ARCHIVE",
    },
    materialityDesc: {
      type: "text",
      label: "Material Archive Description",
      group: "materiality",
      default: "Physicality is our primary language. Every surface is chosen for its tactile warmth, aging patina, and light interaction.",
    },
    materialsData: {
      type: "textarea",
      label: "Materials List (Name|Origin|Finish|Description|ColorHex per line)",
      group: "materiality",
    },
    servicesData: {
      type: "textarea",
      label: "Services List (Number|Title|Description per line)",
      group: "services",
    },
    journalData: {
      type: "textarea",
      label: "Journal List (Date|Category|Title|ReadTime|ImageURL per line)",
      group: "journal",
    },
    contactHeadline: {
      type: "text",
      label: "Contact Section Headline",
      group: "contact",
      default: "START A PROJECT",
    },
    contactEmail: {
      type: "text",
      label: "Contact Email",
      group: "contact",
      default: "inquiries@yourstudio.com",
    },
    contactPhone: {
      type: "text",
      label: "Contact Phone",
      group: "contact",
      default: "+1 (555) 019-2834",
    },
    contactAddress: {
      type: "text",
      label: "Studio Address",
      group: "contact",
      default: "Studio Address / City, Country",
    },
    contactInstagram: {
      type: "text",
      label: "Instagram Handle",
      group: "contact",
      default: "@yourstudio.arch",
    },
    footerCopyright: {
      type: "text",
      label: "Footer Copyright Note",
      group: "contact",
      default: "ALL RIGHTS RESERVED.",
    },
  },

  render: () => {
    const theme = useTheme();
    const fgVal = theme?.foreground || "#1c1b1a";

    const studioName = useField<string>("studioName") || "STUDIO NAME";
    const studioDescriptor = useField<string>("studioDescriptor") || "ARCHITECTURE & INTERIORS";
    const heroEyebrow = useField<string>("heroEyebrow") || "ARCHITECTURE & INTERIORS / SELECTED WORKS PORTFOLIO";
    const heroHeadline = useField<string>("heroHeadline") || "Designing spaces shaped by intention, material, and proportion.";
    const heroDesc = useField<string>("heroDesc") || "A contemporary architecture and interior practice creating quiet, enduring residential and cultural environments worldwide.";
    const ctaProjects = useField<string>("ctaProjects") || "View Projects";
    const ctaStudio = useField<string>("ctaStudio") || "About Studio";

    const studioStatement = useField<string>("studioStatement") || "Architecture begins with the way light enters a room and lives through the materiality of its craft.";
    const studioDesc = useField<string>("studioDesc") || "Founded on principles of spatial purity and material authenticity, our practice operates at the intersection of architecture, interior design, and structural philosophy.";
    const stat1Number = useField<string>("stat1Number") || "24+";
    const stat1Label = useField<string>("stat1Label") || "Completed Works";
    const stat2Number = useField<string>("stat2Number") || "12";
    const stat2Label = useField<string>("stat2Label") || "Design Awards";
    const stat3Number = useField<string>("stat3Number") || "08";
    const stat3Label = useField<string>("stat3Label") || "Global Locations";

    const rawProjects = useField<string>("projectsData");
    const rawMaterials = useField<string>("materialsData");
    const rawServices = useField<string>("servicesData");
    const rawJournal = useField<string>("journalData");

    const materialityTitle = useField<string>("materialityTitle") || "ARCHITECTURAL MATERIAL ARCHIVE";
    const materialityDesc = useField<string>("materialityDesc") || "Physicality is our primary language. Every surface is chosen for its tactile warmth, aging patina, and light interaction.";

    const contactHeadline = useField<string>("contactHeadline") || "START A PROJECT";
    const contactEmail = useField<string>("contactEmail") || "inquiries@yourstudio.com";
    const contactPhone = useField<string>("contactPhone") || "+1 (555) 019-2834";
    const contactAddress = useField<string>("contactAddress") || "Studio Address / City, Country";
    const contactInstagram = useField<string>("contactInstagram") || "@yourstudio.arch";
    const footerCopyright = useField<string>("footerCopyright") || "ALL RIGHTS RESERVED.";

    // Parsed datasets
    const projects = parseProjects(rawProjects, DEFAULT_PROJECTS);
    const materials = parseMaterials(rawMaterials, DEFAULT_MATERIALS);
    const services = parseServices(rawServices, DEFAULT_SERVICES);
    const journal = parseJournal(rawJournal, DEFAULT_JOURNAL);

    // States
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeMaterialHex, setActiveMaterialHex] = useState(materials[0]?.colorHex || "#e4dcd3");
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const [activeSection, setActiveSection] = useState("hero");
    const [scrollProgress, setScrollProgress] = useState(0);

    // Continuous Scroll Progress Calculation
    useEffect(() => {
      const handleScroll = () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
        setScrollProgress(Math.min(1, Math.max(0, currentProgress)));
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigate = (sectionId: string) => {
      setActiveSection(sectionId);
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <main
        className={`min-h-screen font-sans relative transition-colors duration-700 cursor-default ${
          isDarkMode ? "dark text-[#fbfaf8]" : "text-[#1c1b1a]"
        }`}
        style={{
          color: isDarkMode ? "#fbfaf8" : fgVal,
        }}
      >
        <SEOHead
          studioName={studioName}
          studioDescriptor={studioDescriptor}
          description={heroDesc}
          email={contactEmail}
          address={contactAddress}
        />

        {/* FULLSCREEN CONTINUOUS 3D ARCHITECTURAL WORLD */}
        <ContinuousSpatialCanvas
          isDarkMode={isDarkMode}
          activeMaterialHex={activeMaterialHex}
          scrollProgress={scrollProgress}
        />

        {/* ARCHITECTURAL SPATIAL COORDINATE HUD */}
        <SpatialHUD progress={scrollProgress} activeSection={activeSection} />

        {/* FLOATING TOP NAVIGATION */}
        <Header
          studioName={studioName}
          studioDescriptor={studioDescriptor}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        {/* SPATIAL SECTIONS (RENDERED AS FLOATING ARCHITECTURAL STATIONS) */}
        <div className="relative z-10 pointer-events-auto">
          {/* STATION 01: HERO / ARRIVAL & STUDIO IDENTITY */}
          <section
            id="hero"
            className="min-h-screen flex flex-col justify-end px-6 sm:px-12 pb-24 sm:pb-32 pt-32 max-w-7xl mx-auto"
          >
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center space-x-3 text-[10px] font-mono tracking-[0.3em] uppercase bg-white/80 dark:bg-[#121110]/80 backdrop-blur-md px-4 py-2 rounded-xs border border-stone-200/60 dark:border-stone-800/60 text-stone-700 dark:text-stone-300 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-950 dark:bg-stone-100" />
                <span>{heroEyebrow}</span>
              </div>

              <div className="space-y-2">
                <div className="text-xs sm:text-sm font-mono tracking-[0.24em] text-stone-500 dark:text-stone-400 uppercase">
                  {studioName} — {studioDescriptor}
                </div>
                <h1 className="text-4xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-[1.03]">
                  {heroHeadline}
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 items-end">
                <p className="md:col-span-7 text-sm sm:text-base text-stone-700 dark:text-stone-300 font-light leading-relaxed max-w-xl">
                  {heroDesc}
                </p>

                <div className="md:col-span-5 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleNavigate("projects")}
                    className="px-8 py-4 bg-stone-950 text-white dark:bg-stone-100 dark:text-stone-950 text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:opacity-85 transition-opacity cursor-pointer flex items-center space-x-2.5 shadow-xl"
                  >
                    <span>{ctaProjects}</span>
                    <span>↓</span>
                  </button>

                  <button
                    onClick={() => handleNavigate("studio")}
                    className="px-8 py-4 bg-white/80 dark:bg-[#121110]/80 backdrop-blur-md border border-stone-300/80 dark:border-stone-700/80 text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer shadow-sm"
                  >
                    {ctaStudio}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* STATION 02: SELECTED WORKS PORTFOLIO (CENTER OF THE EXPERIENCE) */}
          <div className="bg-white/40 dark:bg-[#121110]/40 backdrop-blur-xs py-8">
            <ProjectGrid
              projects={projects}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          </div>

          {/* STATION 03: FEATURED COVER STORY / FLAGSHIP WORK */}
          {projects[0] && (
            <div className="py-8">
              <FeaturedProject
                project={projects[0]}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            </div>
          )}

          {/* STATION 04: STUDIO ATRIUM & PHILOSOPHY */}
          <section
            id="studio"
            className="min-h-screen flex items-center px-6 sm:px-12 py-32 max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start w-full bg-white/70 dark:bg-[#121110]/70 backdrop-blur-md p-8 sm:p-16 rounded-xs border border-stone-200/60 dark:border-stone-800/60 shadow-xl">
              <div className="lg:col-span-7 space-y-8">
                <span className="text-[10px] font-mono tracking-[0.28em] text-stone-400 dark:text-stone-500 uppercase">
                  PHILOSOPHY / SPATIAL INTENTION
                </span>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-snug font-serif italic text-stone-950 dark:text-stone-50">
                  "{studioStatement}"
                </h2>

                <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 font-light leading-relaxed max-w-2xl">
                  {studioDesc}
                </p>
              </div>

              {/* METRICS */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8 pt-4 lg:pt-0">
                <div className="border-l-2 border-stone-950 dark:border-stone-100 pl-6 space-y-1">
                  <span className="text-4xl sm:text-6xl font-light tracking-tight font-mono">{stat1Number}</span>
                  <span className="block text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest">{stat1Label}</span>
                </div>
                <div className="border-l-2 border-stone-950 dark:border-stone-100 pl-6 space-y-1">
                  <span className="text-4xl sm:text-6xl font-light tracking-tight font-mono">{stat2Number}</span>
                  <span className="block text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest">{stat2Label}</span>
                </div>
                <div className="border-l-2 border-stone-950 dark:border-stone-100 pl-6 space-y-1">
                  <span className="text-4xl sm:text-6xl font-light tracking-tight font-mono">{stat3Number}</span>
                  <span className="block text-[10px] font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest">{stat3Label}</span>
                </div>
              </div>
            </div>
          </section>

          {/* STATION 05: MATERIALITY ARCHIVE */}
          <div className="bg-white/50 dark:bg-[#121110]/50 backdrop-blur-xs py-8">
            <MaterialLibrary
              title={materialityTitle}
              description={materialityDesc}
              materials={materials}
              onSelectMaterialHex={(hex) => setActiveMaterialHex(hex)}
            />
          </div>

          {/* STATION 06: SPATIAL DIAGRAMS LIGHTBOX */}
          <div className="py-8">
            <SpatialDrawings />
          </div>

          {/* STATION 07: DISCIPLINES & SERVICES */}
          <div className="bg-white/50 dark:bg-[#121110]/50 backdrop-blur-xs py-8">
            <ServicesSection services={services} />
          </div>

          {/* STATION 08: JOURNAL & ESSAYS */}
          <div className="py-8">
            <JournalSection journal={journal} />
          </div>

          {/* STATION 09: COMMISSIONS & CONTACT */}
          <div className="bg-white/60 dark:bg-[#121110]/60 backdrop-blur-md py-8">
            <ContactSection
              studioName={studioName}
              headline={contactHeadline}
              email={contactEmail}
              phone={contactPhone}
              address={contactAddress}
              instagram={contactInstagram}
            />
          </div>

          {/* FOOTER */}
          <Footer
            studioName={studioName}
            studioDescriptor={studioDescriptor}
            contactEmail={contactEmail}
            contactPhone={contactPhone}
            contactAddress={contactAddress}
            contactInstagram={contactInstagram}
            footerCopyright={footerCopyright}
            onNavigate={handleNavigate}
          />
        </div>

        {/* FULL CASE STUDY DETAIL MODAL */}
        <ProjectDetailModal
          project={selectedProject}
          allProjects={projects}
          studioName={studioName}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onNavigateContact={() => handleNavigate("contact")}
          onClose={() => setSelectedProject(null)}
        />
      </main>
    );
  },
});
