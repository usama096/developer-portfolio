import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard. Built for scale with microservices architecture.',
    image: '/images/projects/ecommerce.svg',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Redis'],
    githubUrl: 'https://github.com/usama-hafeez/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.usamahafeez.dev',
  },
  {
    title: 'DevOps Dashboard',
    description:
      'Real-time monitoring and deployment dashboard for cloud infrastructure. Features CI/CD pipeline visualization, container orchestration, and alerting system.',
    image: '/images/projects/devops.svg',
    techStack: ['React', 'Node.js', 'Docker', 'Kubernetes', 'Prometheus'],
    githubUrl: 'https://github.com/usama-hafeez/devops-dashboard',
    liveUrl: 'https://devops-demo.usamahafeez.dev',
  },
  {
    title: 'AI Content Generator',
    description:
      'An AI-powered content generation tool that helps marketers create blog posts, social media content, and email campaigns using GPT models.',
    image: '/images/projects/ai-content.svg',
    techStack: ['Python', 'FastAPI', 'React', 'OpenAI', 'MongoDB'],
    githubUrl: 'https://github.com/usama-hafeez/ai-content-gen',
    liveUrl: 'https://ai-content.usamahafeez.dev',
  },
  {
    title: 'Real-Time Collaboration Tool',
    description:
      'A Notion-like collaborative workspace with real-time editing, rich text formatting, and team management features.',
    image: '/images/projects/collab.svg',
    techStack: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis', 'AWS'],
    githubUrl: 'https://github.com/usama-hafeez/collab-tool',
    liveUrl: 'https://collab-demo.usamahafeez.dev',
  },
  {
    title: 'Fitness Tracking App',
    description:
      'A comprehensive fitness tracking application with workout planning, progress visualization, and social features for accountability.',
    image: '/images/projects/fitness.svg',
    techStack: ['React Native', 'Node.js', 'GraphQL', 'MongoDB'],
    githubUrl: 'https://github.com/usama-hafeez/fitness-app',
  },
  {
    title: 'Financial Analytics Platform',
    description:
      'Enterprise-grade financial analytics platform with real-time market data, portfolio tracking, and automated reporting.',
    image: '/images/projects/finance.svg',
    techStack: ['Vue.js', 'Python', 'PostgreSQL', 'Apache Kafka', 'D3.js'],
    githubUrl: 'https://github.com/usama-hafeez/finance-analytics',
  },
];
