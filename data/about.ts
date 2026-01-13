import type { Experience, Education, Value } from '../types';

// Extracted from about.tsx for better maintainability and reusability
export const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovators Inc.',
    period: '2022 - Present',
    description:
      'Leading development of cloud-native applications serving millions of users. Architected microservices infrastructure reducing deployment time by 60%.',
  },
  {
    title: 'Software Engineer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description:
      'Built and scaled the core product from MVP to production, handling 100k+ daily active users. Implemented real-time features using WebSockets.',
  },
  {
    title: 'Junior Developer',
    company: 'Digital Agency Co.',
    period: '2018 - 2020',
    description:
      'Developed responsive web applications for enterprise clients. Collaborated with design teams to implement pixel-perfect UIs.',
  },
];

export const education: Education[] = [
  {
    degree: 'M.S. Computer Science',
    school: 'Stanford University',
    period: '2016 - 2018',
  },
  {
    degree: 'B.S. Computer Engineering',
    school: 'UC Berkeley',
    period: '2012 - 2016',
  },
];

export const values: Value[] = [
  {
    icon: '🎯',
    title: 'Quality First',
    description: 'I believe in writing clean, maintainable code that stands the test of time.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'The best solutions come from diverse perspectives working together.',
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    description: "Technology evolves rapidly, and so should we. I'm always learning something new.",
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'I love exploring new technologies and finding creative solutions to problems.',
  },
  {
    icon: '🌍',
    title: 'Impact',
    description: "Building products that positively impact people's lives is my ultimate goal.",
  },
  {
    icon: '⚡',
    title: 'Efficiency',
    description: 'Time is valuable. I focus on delivering maximum value with minimal waste.',
  },
];
