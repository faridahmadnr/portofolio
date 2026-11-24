export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  iconName?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: string;
    about: string;
    email: string;
    phone: string;
    location: string;
    cvUrl: string;
    avatarUrl?: string;
  };
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Farid Ahmad",
    role: "Full Stack Developer",
    headline: "Passionate about creating innovative web solutions and turning ideas into reality. Specialized in modern JavaScript frameworks, backend development, and scalable systems.",
    about: "I'm a dedicated Full Stack Developer with a passion for creating efficient, scalable, and user-friendly applications. With expertise in both frontend and backend technologies, I bring ideas to life through clean code, robust architecture, and innovative solutions.",
    email: "asv.developer@email.com",
    phone: "+62 123 456 7890",
    location: "Jakarta, Indonesia",
    cvUrl: "/cv.pdf",
    avatarUrl: "/images/profile.jpg",
  },
  socialLinks: [
    { platform: "GitHub", url: "https://github.com", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { platform: "Instagram", url: "https://instagram.com", icon: "instagram" },
  ],
  skills: [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript / TypeScript", level: 80 },
        { name: "PHP", level: 75 },
        { name: "Kotlin", level: 50 },
      ],
    },
    {
      category: "Frameworks & Backend",
      skills: [
        { name: "FastAPI / Python", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Next.js", level: 70 },
      ],
    },
    {
      category: "Tools & Infrastructure",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Docker & Linux VPS", level: 80 },
        { name: "PostgreSQL & SQLite", level: 85 },
        { name: "Figma (UI/UX)", level: 85 },
      ],
    },
  ],
  projects: [
    {
      id: "gps-art-creator",
      title: "GPS Art Creator (GPXShare)",
      description: "Interactive web application for creating GPS art routes with automatic shape generation and GPX export functionality.",
      tech: ["JavaScript", "Leaflet.js", "HTML5", "GPX"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "smartfarm-iot",
      title: "SmartFarm IoT & Telemetry Platform",
      description: "Full-stack IoT and AI-driven smart farming monitoring system with automated telemetry, multi-tenant kandang isolation, and forecasting.",
      tech: ["FastAPI", "React", "PostgreSQL", "Machine Learning", "IoT"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "e-commerce-platform",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and an administrative dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "analytics-dashboard",
      title: "Analytics & Telemetry Dashboard",
      description: "Real-time data visualization dashboard with interactive charts and customizable widgets for business intelligence.",
      tech: ["React", "Vite", "Chart.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  experiences: [
    {
      role: "Full Stack Developer",
      company: "SmartFarm IoT Project",
      period: "2024 - Present",
      description: "Architecting backend microservices with FastAPI, optimizing multi-tenant security, and integrating IoT device telemetry pipelines.",
    },
    {
      role: "Web Application Developer",
      company: "Independent Freelance",
      period: "2023 - 2024",
      description: "Developed and maintained full-stack web applications, implemented responsive interfaces, and integrated payment gateways.",
    },
    {
      role: "Frontend Developer",
      company: "Web Studio Project",
      period: "2022 - 2023",
      description: "Crafted modern user interfaces using React.js and Tailwind CSS, collaborating closely with UI/UX designers.",
    },
  ],
};
