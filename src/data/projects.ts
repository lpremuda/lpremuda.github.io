import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'lpremuda.github.io',
    description:
      'This portfolio site. Built with React 19, TypeScript, and Vite. Styled with Tailwind CSS v4, animated with Framer Motion, and deployed to GitHub Pages via a two-environment GitHub Actions CI/CD pipeline with automatic staging and production deployments.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Actions'],
    githubUrl: 'https://github.com/lpremuda/lpremuda.github.io',
    liveUrl: 'https://lpremuda.github.io',
  },
  {
    title: 'React Firebase Auth App',
    description:
      'A React application with full Firebase authentication integration — login, registration, protected routes, and real-time user state management.',
    tags: ['React', 'Firebase', 'JavaScript'],
    githubUrl: 'https://github.com/lpremuda/reactjs-firebase-auth-app',
  },
  {
    title: 'YourLibrary',
    description:
      'A full-stack RESTful MVC application for managing personal book collections. Built with Node.js, Express, and MongoDB following clean architecture principles.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/lpremuda/YourLibrary',
  },
];
