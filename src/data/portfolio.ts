export interface DemoCredential {
  role: string;
  email: string;
  pass: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  role?: string;
  teamSize?: string;
  description: string;
  longDescription?: string;
  keyContributions?: string[];
  demoCredentials?: DemoCredential[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  deckUrl?: string;
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
    headline:
      "Passionate about creating innovative web solutions and turning ideas into reality. Specialized in modern JavaScript frameworks, backend development, and scalable systems.",
    about:
      "I'm a dedicated Full Stack Developer with a passion for creating efficient, scalable, and user-friendly applications. With expertise in both frontend and backend technologies, I bring ideas to life through clean code, robust architecture, and innovative solutions.",
    email: "faridahmadnr@gmail.com",
    phone: "+62 895-6404-80900",
    location: "Yogyakarta, Indonesia",
    cvUrl: "/cv.pdf",
    avatarUrl: "/images/profile.jpg",
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/faridahmadnr",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/farid-ahmad-492296322/",
      icon: "linkedin",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/faadnrr",
      icon: "instagram",
    },
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
      id: "smartfarm-iot",
      title: "SmartFarm IoT & Telemetry Platform",
      subtitle: "Proyek PMLD — IoT Monitoring",
      role: "Backend Developer",
      teamSize: "4 Anggota Tim (1 BE, 1 FE, 1 IoT Dev, 1 UI/UX)",
      description: "Platform monitoring peternakan pintar berbasis IoT dengan arsitektur backend FastAPI yang menangani telemetri sensor kandang (suhu & kelembapan) secara real-time dan dashboard multi-role.",
      longDescription: "Proyek praktikum PMLD yang bertujuan membantu peternak memantau kondisi kandang secara real-time melalui integrasi sensor IoT ke dashboard analitik. Sistem ini memiliki arsitektur multi-role untuk memisahkan hak akses antara Administrator, Pemilik Usaha, dan Peternak di lapangan.",
      keyContributions: [
        "Merancang dan mengimplementasikan RESTful API serta WebSocket pipeline telemetri sensor menggunakan FastAPI.",
        "Membangun skema database relasional PostgreSQL untuk penyimpanan data time-series sensor kandang.",
        "Menerapkan Role-Based Access Control (RBAC) aman untuk 3 role pengguna (Admin, Pemilik, Peternak).",
        "Menyusun simulator pengiriman data sensor (mock telemetry) untuk kemudahan live demo tanpa ketergantungan hardware fisik.",
        "Mendokumentasikan seluruh endpoint menggunakan OpenAPI/Swagger untuk kolaborasi mulus dengan tim frontend.",
      ],
      demoCredentials: [
        { role: "Administrator", email: "admin@smartfarm.demo", pass: "admin123" },
        { role: "Pemilik Usaha", email: "owner@smartfarm.demo", pass: "owner123" },
        { role: "Peternak Lapangan", email: "farmer@smartfarm.demo", pass: "farmer123" },
      ],
      tech: ["FastAPI", "Python", "PostgreSQL", "IoT Telemetry", "React", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "pad2-telemetry-dashboard",
      title: "Web Telemetry & Event Analytics Dashboard",
      subtitle: "Proyek PAD 2 — Analytics Dashboard",
      role: "Project Manager & System Analyst",
      teamSize: "4 Anggota Tim (1 PM, 1 UI/UX, 1 FE, 1 BE)",
      description: "Dashboard analitik interaktif kelanjutan dari PAD 1 untuk memvisualisasikan data telemetri dan interaksi pengguna yang terekam oleh script tracker secara real-time.",
      longDescription: "Pada PAD 2, kami mengembangkan antarmuka visual berupa dashboard monitoring komprehensif. Sebagai PM, saya mengarahkan seluruh siklus pengembangan mulai dari penentuan requirement visualisasi data, perancangan alur data, pembagian modul frontend & backend, hingga pengujian dan presentasi akhir.",
      keyContributions: [
        "Memimpin koordinasi tim 4 orang dengan metodologi Agile/Scrum dan sprint mingguan via Trello.",
        "Menyusun Product Requirement Document (PRD) dan user flow navigasi dashboard.",
        "Merancang kontrak API bersama Backend dan Frontend untuk visualisasi grafik metrik.",
        "Mengelola timeline dan memastikan seluruh fitur selesai 100% tepat waktu sebelum sesi evaluasi dosen.",
      ],
      demoCredentials: [
        { role: "Viewer / Demo Account", email: "demo@telemetry.io", pass: "demopass123" },
      ],
      tech: ["React", "Chart.js", "REST API", "PostgreSQL", "Tailwind CSS", "Scrum"],
      liveUrl: "#",
      githubUrl: "#",
      deckUrl: "#",
    },
    {
      id: "pad1-web-tracker",
      title: "Lightweight Web Event & Telemetry Tracker",
      subtitle: "Proyek PAD 1 — Data Ingestion & Tracking",
      role: "Project Manager & System Analyst",
      teamSize: "4 Anggota Tim (1 PM, 1 UI/UX, 1 FE, 1 BE)",
      description: "Script pelacak event ringan yang dapat diinjeksikan ke website eksternal untuk merekam aktivitas pengguna langsung ke database.",
      longDescription: "Fondasi dari ekosistem analitik PAD. Proyek ini berfokus pada mekanisme injection script pelacak (mirip Google Analytics mini) yang ditanam pada website yang sudah berjalan untuk mencatat log interaksi (click, pageview, session duration) langsung ke basis data terpusat.",
      keyContributions: [
        "Memetakan arsitektur sistem pengumpulan data (Data Ingestion) dari website klien ke database.",
        "Menentukan scoping fungsionalitas tracker agar tidak membebani performa website target.",
        "Mengorkestrasi pembagian tugas riset script injection dan struktur tabel log database.",
        "Mempresentasikan hasil uji coba tracking dan verifikasi integritas data log kepada dosen penguji.",
      ],
      tech: ["JavaScript", "Event Tracking", "MySQL/PostgreSQL", "System Architecture", "Trello"],
      githubUrl: "#",
      deckUrl: "#",
    },
    {
      id: "gps-art-creator",
      title: "GPS Art Creator (GPXShare)",
      subtitle: "Personal Full-Stack Project",
      role: "Full Stack Developer",
      teamSize: "Proyek Mandiri",
      description: "Aplikasi web interaktif untuk membuat rute seni GPS (GPS Art) dengan generator bentuk otomatis dan ekspor file GPX.",
      longDescription: "Proyek web mandiri yang memungkinkan pelari dan pesepeda menggambar bentuk tertentu di atas peta interaktif untuk kemudian diekspor ke format file GPX dan diunggah ke smartwatch atau aplikasi Strava.",
      keyContributions: [
        "Mengintegrasikan peta interaktif menggunakan Leaflet.js dan OpenStreetMap.",
        "Mengimplementasikan algoritma konversi titik koordinat (Waypoints) ke format standar GPX XML.",
        "Mendesain UI/UX yang responsif dan intuitif untuk desktop maupun mobile.",
      ],
      tech: ["JavaScript", "Leaflet.js", "HTML5", "GPX XML", "Tailwind CSS"],
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
