import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'NestJS Kafka App',
    description:
      'A NestJS application demonstrating Kafka integration for event-driven microservice communication. Implements producers and consumers with TypeScript for type-safe message handling.',
    tags: ['TypeScript', 'NestJS', 'Kafka'],
    githubUrl: 'https://github.com/lpremuda/nestjs-kafka-app',
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
