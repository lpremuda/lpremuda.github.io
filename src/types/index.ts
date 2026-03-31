import type { LucideIcon } from 'lucide-react';

export interface Job {
  role: string;
  company: string;
  companyUrl: string;
  date: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  name: string;
  Icon: LucideIcon;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}
