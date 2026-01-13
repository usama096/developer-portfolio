import type { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  content?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

// FIX: Added React import for proper type resolution
export interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
}

export interface Skill {
  category: string;
  items: string[];
}

// Added: Experience and Education types for better type safety
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

