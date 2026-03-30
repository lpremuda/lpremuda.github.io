import { Code2, Monitor, Server, Database, HelpCircle, BarChart2 } from 'lucide-react';
import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    Icon: Code2,
    items: ['TypeScript / JavaScript', 'Java', 'Kotlin', 'Scala', 'Python', 'Shell / Bash'],
  },
  {
    name: 'Frontend',
    Icon: Monitor,
    items: ['React', 'Angular', 'HTML / CSS', 'Responsive Design'],
  },
  {
    name: 'Backend',
    Icon: Server,
    items: ['Node.js / NestJS', 'Spring (Java)', 'REST APIs', 'Kafka', 'Reactive Streams'],
  },
  {
    name: 'Data & Infra',
    Icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Docker', 'Git / GitHub'],
  },
  {
    name: 'Paradigms',
    Icon: HelpCircle,
    items: [
      'Functional Programming',
      'Reactive Programming',
      'Microservices',
      'MVC Architecture',
      'Event-Driven Design',
    ],
  },
  {
    name: 'Observability',
    Icon: BarChart2,
    items: ['Splunk', 'Logging', 'Distributed Tracing', 'CI/CD', 'GitHub Actions'],
  },
];
