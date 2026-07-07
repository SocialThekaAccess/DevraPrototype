export interface ProjectNarrative {
  site: string;
  planning: string;
  materials: string;
  lightVentilation: string;
  execution: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  size: string;
  scope: string;
  heroImage: string;
  description: string;
  narrative: ProjectNarrative;
  images: string[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  clientType: string;
  projects: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  image?: string;
  author: string;
  readTime: string;
}
