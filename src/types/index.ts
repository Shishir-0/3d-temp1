export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  imageUrl: string;
  description: string;
}

export interface MaterialItem {
  name: string;
  origin: string;
  finish: string;
  description: string;
  colorHex: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface JournalItem {
  date: string;
  category: string;
  title: string;
  readTime: string;
  imageUrl: string;
}
