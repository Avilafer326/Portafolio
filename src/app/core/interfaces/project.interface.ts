export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  status: 'completed' | 'upcoming';
}
