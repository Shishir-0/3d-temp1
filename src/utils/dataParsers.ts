import { ProjectItem, MaterialItem, ServiceItem, JournalItem } from "../types";

export function parseProjects(raw: string | undefined, defaultProjects: ProjectItem[]): ProjectItem[] {
  if (!raw || typeof raw !== "string" || !raw.trim()) {
    return defaultProjects;
  }
  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return defaultProjects;

  return lines.map((line, index) => {
    const parts = line.split("|").map((p) => p.trim());
    return {
      id: parts[0] || `0${index + 1}`,
      title: parts[1] || `Project 0${index + 1}`,
      category: parts[2] || "Architecture",
      location: parts[3] || "Global",
      year: parts[4] || "2026",
      area: parts[5] || "4,000 sq ft",
      imageUrl: parts[6] || defaultProjects[index % defaultProjects.length]?.imageUrl || "",
      description: parts[7] || "An architectural exploration of space, light, and material.",
    };
  });
}

export function parseMaterials(raw: string | undefined, defaultMaterials: MaterialItem[]): MaterialItem[] {
  if (!raw || typeof raw !== "string" || !raw.trim()) {
    return defaultMaterials;
  }
  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return defaultMaterials;

  return lines.map((line, index) => {
    const parts = line.split("|").map((p) => p.trim());
    return {
      name: parts[0] || `Material 0${index + 1}`,
      origin: parts[1] || "Natural Origin",
      finish: parts[2] || "Natural Finish",
      description: parts[3] || "Selected for tactile warmth and architectural clarity.",
      colorHex: parts[4] || defaultMaterials[index % defaultMaterials.length]?.colorHex || "#dcd7d0",
    };
  });
}

export function parseServices(raw: string | undefined, defaultServices: ServiceItem[]): ServiceItem[] {
  if (!raw || typeof raw !== "string" || !raw.trim()) {
    return defaultServices;
  }
  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return defaultServices;

  return lines.map((line, index) => {
    const parts = line.split("|").map((p) => p.trim());
    return {
      number: parts[0] || `0${index + 1}`,
      title: parts[1] || "Design Service",
      description: parts[2] || "Full spatial design and execution.",
    };
  });
}

export function parseJournal(raw: string | undefined, defaultJournal: JournalItem[]): JournalItem[] {
  if (!raw || typeof raw !== "string" || !raw.trim()) {
    return defaultJournal;
  }
  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return defaultJournal;

  return lines.map((line, index) => {
    const parts = line.split("|").map((p) => p.trim());
    return {
      date: parts[0] || "AUG 2026",
      category: parts[1] || "ESSAY",
      title: parts[2] || "Architectural Perspective",
      readTime: parts[3] || "5 MIN READ",
      imageUrl: parts[4] || defaultJournal[index % defaultJournal.length]?.imageUrl || "",
    };
  });
}
