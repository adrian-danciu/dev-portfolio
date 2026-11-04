import type { AccentName } from '@adrian-danciu/ink-ui';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  accent: AccentName;
  description: string;
  tech: string[];
  links: {
    label: string;
    url: string;
  }[];
  installCmd?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  accent: AccentName;
  client?: string;
  subRoles?: {
    title: string;
    period: string;
    bullets: string[];
  }[];
  bullets?: string[];
}

export const PROFILE_DATA = {
  name: 'Adrian Danciu',
  role: 'Software Engineer',
  location: 'Bucharest, Romania',
  email: 'adrian.razvan.dnc@gmail.com',
  phone: '+40 720 058 583',
  cvUrl: '/Adrian_Danciu_CV.pdf',
  links: {
    github: 'https://github.com/adrian-danciu',
    inkUiRepo: 'https://github.com/adrian-danciu/ink-ui',
    inkUiNpm: 'https://www.npmjs.com/package/@adrian-danciu/ink-ui',
    linkedin: 'https://www.linkedin.com/in/adrian-danciu-165095171/',
    artie: 'https://artie.chat',
  },
  summary:
    'Software Engineer with 3+ years of experience building web and mobile applications across media, fintech, insurance, and enterprise platforms. Currently driving a 50+ component Stencil.js design system powering 5+ products at DHL. Strong in React, Next.js, TypeScript, component architecture, accessibility (WCAG), and mentoring junior engineers.',
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'dhl',
    company: 'DHL',
    role: 'Software Engineer',
    period: 'Apr 2025 – Present',
    location: 'Remote',
    accent: 'lime',
    subRoles: [
      {
        title: 'Design System Engineer · Stencil.js',
        period: 'Aug 2025 – Present',
        bullets: [
          'Maintain and extend a Stencil.js component library powering 5+ DHL consumer-facing products, with 50+ components in production and an active pipeline of new work.',
          'Ship new components, refactor existing ones, and manage breaking changes across consumer teams at a fast cadence; partner with product teams to triage bugs and evolve the library against real consumer needs.',
        ],
      },
      {
        title: 'AEM Engineer',
        period: 'Apr 2025 – Aug 2025',
        bullets: [
          'Remediated AEM and Stencil components against internal WCAG accessibility audits; shipped design refreshes and stakeholder-driven updates to customer-facing pages.',
        ],
      },
    ],
  },
  {
    id: '3pillar',
    company: '3Pillar Global',
    role: 'Software Engineer',
    period: 'Aug 2024 – Apr 2025',
    location: 'Remote',
    client: 'The Telegraph',
    accent: 'purple',
    bullets: [
      "Contributed to The Telegraph's mobile app — built with Next.js and integrated with the Twipe digital publishing platform — shipping features, bug fixes, and visual reskins for iOS/Android.",
      'Worked within the AEM engineering team responsible for platform stability: dependency upgrades, version migrations, refactors, and system-wide fixes that kept editorial and product teams unblocked.',
    ],
  },
  {
    id: 'nn',
    company: 'NN Asigurări',
    role: 'React Developer',
    period: 'Jun 2024 – Aug 2024',
    location: 'Bucharest',
    accent: 'turquoise',
    bullets: [
      'Built internal web and mobile interfaces with React, TypeScript, and Redux, integrating UI with backend services from design specifications.',
    ],
  },
  {
    id: 'secretcode',
    company: 'Secretcode.ro',
    role: 'Frontend Developer',
    period: 'May 2023 – Jun 2024',
    location: 'Remote',
    accent: 'yellow',
    bullets: [
      'Built modular, performant interfaces for an internal developer-focused education platform end-to-end: React, TypeScript, Redux, backend integration, and Cypress E2E tests.',
    ],
  },
  {
    id: 'newtech',
    company: 'NewTech Academy',
    role: 'Frontend Trainer (Part-Time)',
    period: 'Feb 2023 – Aug 2024',
    location: 'Bucharest / Remote',
    accent: 'pink',
    bullets: [
      'Promoted from Assistant Trainer after graduating top of class; taught HTML, CSS/SCSS, JavaScript, TypeScript, React, Git, and Firebase across multiple cohorts.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'corpex',
    title: 'Corpex',
    subtitle: 'Integrated ERP for Romanian SMEs (Bachelor Thesis)',
    accent: 'turquoise',
    description:
      'Stock, HR, fleet, finance, projects, and reporting unified in one platform. Built end-to-end with a GraphQL API featuring department-based RBAC, a Prisma data model across 9 modules, and an interactive dashboard with kanban, org chart, invoice PDF generation, and document-expiry tracking.',
    tech: [
      'React',
      'TypeScript',
      'NestJS',
      'GraphQL',
      'Prisma',
      'PostgreSQL',
      'TailwindCSS',
      'shadcn/ui',
    ],
    links: [
      { label: 'GitHub Profile', url: 'https://github.com/adrian-danciu' },
    ],
  },
  {
    id: 'artie',
    title: 'Artie (artie.chat)',
    subtitle: 'AI Image Generation Chat Application',
    accent: 'purple',
    description:
      'Conversational web application for generating and refining AI images through chat. Built the frontend chat UI, design system, fluid motion transitions, and brand identity from scratch.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'GSAP'],
    links: [
      { label: 'Visit artie.chat', url: 'https://artie.chat' },
    ],
  },
  {
    id: 'ink-ui',
    title: 'Ink UI (@adrian-danciu/ink-ui)',
    subtitle: 'Open-Source Component Library for React, Next.js & React Native',
    accent: 'lime',
    installCmd: 'bun add @adrian-danciu/ink-ui',
    description:
      'MIT-licensed UI library built with Bun workspaces, TypeScript, and a shared design-token package. Ships 34+ accessible components across three themes (Poster, Paper, Electric) with light/dark modes and configurable accents—used to build this portfolio.',
    tech: [
      'React',
      'Next.js',
      'React Native',
      'TypeScript',
      'Bun',
      'Design Tokens',
      'CSS Variables',
    ],
    links: [
      { label: 'NPM Package', url: 'https://www.npmjs.com/package/@adrian-danciu/ink-ui' },
      { label: 'GitHub Repo', url: 'https://github.com/adrian-danciu/ink-ui' },
    ],
  },
];

export const SKILL_GROUPS = [
  {
    title: 'Languages & Frameworks',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Stencil.js', 'Node.js'],
  },
  {
    title: 'Styling & UI',
    items: ['TailwindCSS', 'SCSS', 'CSS', 'MUI', 'Design Systems', 'Ink UI'],
  },
  {
    title: 'State & Data',
    items: ['Redux', 'Zustand', 'React Query', 'GraphQL'],
  },
  {
    title: 'Testing',
    items: ['Cypress', 'Jest', 'Vitest'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'JIRA', 'Azure', 'Adobe Experience Manager (AEM)', 'Figma', 'Bun'],
  },
  {
    title: 'Practices',
    items: [
      'Component Library Architecture',
      'Accessibility (WCAG)',
      'Responsive Design',
      'Performance Optimization',
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor's, Computer Science",
    institution: 'Universitatea Titu Maiorescu',
    period: 'Oct 2023 – Jul 2026 (Expected)',
    note: 'Bachelor Thesis: Corpex — Integrated ERP Platform',
  },
  {
    degree: 'Fullstack Development Bootcamp',
    institution: 'NewTech Academy',
    period: 'Mar 2022 – Feb 2023',
    note: 'Graduated Top of Class · Promoted to Trainer',
  },
];

export const LANGUAGES = [
  { language: 'Romanian', level: 'Native' },
  { language: 'English', level: 'Professional' },
];
