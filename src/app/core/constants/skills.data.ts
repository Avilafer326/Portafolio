import { Skill } from '../interfaces/skill.interface';

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'Angular', icon: 'angular', category: 'Frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'Frontend' },
  { name: 'React', icon: 'react', category: 'Frontend' },
  { name: 'Vue', icon: 'vue', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'Frontend' },
  { name: 'HTML5', icon: 'html', category: 'Frontend' },
  { name: 'CSS3', icon: 'css', category: 'Frontend' },

  // Backend
  { name: 'Node.js', icon: 'nodejs', category: 'Backend' },
  { name: 'Express', icon: 'express', category: 'Backend' },
  { name: 'Python', icon: 'python', category: 'Backend' },
  { name: 'Java', icon: 'java', category: 'Backend' },
  { name: 'C#', icon: 'csharp', category: 'Backend' },

  // Mobile
  { name: 'Flutter', icon: 'flutter', category: 'Mobile' },
  { name: 'React Native', icon: 'react', category: 'Mobile' },
  { name: 'Kotlin', icon: 'kotlin', category: 'Mobile' },
  { name: 'Swift', icon: 'swift', category: 'Mobile' },

  // Game Dev
  { name: 'Unity', icon: 'unity', category: 'Game Dev' },
  { name: 'C#', icon: 'csharp', category: 'Game Dev' },
  { name: 'Unreal', icon: 'unreal', category: 'Game Dev' },

  // Database
  { name: 'PostgreSQL', icon: 'postgres', category: 'Database' },
  { name: 'MongoDB', icon: 'mongo', category: 'Database' },
  { name: 'MySQL', icon: 'mysql', category: 'Database' },
  { name: 'Firebase', icon: 'firebase', category: 'Database' },
];
