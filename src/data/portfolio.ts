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
  href?: string;
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
      description:
        "Platform monitoring peternakan pintar berbasis IoT dengan arsitektur backend FastAPI yang menangani telemetri sensor kandang (suhu & kelembapan) secara real-time dan dashboard multi-role.",
      longDescription:
        "Proyek praktikum PMLD yang bertujuan membantu peternak memantau kondisi kandang secara real-time melalui integrasi sensor IoT ke dashboard analitik. Sistem ini memiliki arsitektur multi-role untuk memisahkan hak akses antara Administrator, Pemilik Usaha, dan Peternak di lapangan.",
      keyContributions: [
        "Merancang dan mengimplementasikan RESTful API serta WebSocket pipeline telemetri sensor menggunakan FastAPI.",
        "Membangun skema database relasional PostgreSQL untuk penyimpanan data time-series sensor kandang.",
        "Menerapkan Role-Based Access Control (RBAC) aman untuk 3 role pengguna (Admin, Pemilik, Peternak).",
        "Menyusun simulator pengiriman data sensor (mock telemetry) untuk kemudahan live demo tanpa ketergantungan hardware fisik.",
        "Mendokumentasikan seluruh endpoint menggunakan OpenAPI/Swagger untuk kolaborasi mulus dengan tim frontend.",
      ],
      demoCredentials: [
        {
          role: "Administrator",
          email: "admin@smartfarm.demo",
          pass: "admin123",
        },
        {
          role: "Pemilik Usaha",
          email: "owner@smartfarm.demo",
          pass: "owner123",
        },
        {
          role: "Peternak Lapangan",
          email: "farmer@smartfarm.demo",
          pass: "farmer123",
        },
      ],
      tech: [
        "FastAPI",
        "Python",
        "PostgreSQL",
        "IoT Telemetry",
        "React",
        "Tailwind CSS",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "pad2-telemetry-dashboard",
      title: "UXTrace 2.0 — Web Telemetry & Event Analytics Dashboard",
      subtitle: "Proyek PAD 2 — Analytics Dashboard",
      role: "Project Manager & System Analyst",
      teamSize: "4 Anggota Tim (1 PM, 1 UI/UX, 1 FE, 1 BE)",
      description:
        "Dashboard analitik interaktif kelanjutan dari PAD 1 untuk memvisualisasikan data telemetri dan interaksi pengguna yang terekam oleh script tracker secara real-time.",
      longDescription:
        "Pada PAD 2, kami mengembangkan antarmuka visual berupa dashboard monitoring komprehensif (UXTrace 2.0). Sebagai PM, saya mengarahkan seluruh siklus pengembangan mulai dari penentuan requirement visualisasi data, perancangan alur data, pembagian modul frontend & backend, hingga pengujian dan presentasi akhir.",
      keyContributions: [
        "Memimpin koordinasi tim 4 orang dengan metodologi Agile/Scrum dan sprint mingguan via Trello.",
        "Menyusun Product Requirement Document (PRD) dan user flow navigasi dashboard.",
        "Merancang kontrak API bersama Backend dan Frontend untuk visualisasi grafik metrik telemetri.",
        "Mengelola timeline dan memastikan seluruh fitur selesai 100% tepat waktu sebelum sesi evaluasi dosen.",
      ],
      demoCredentials: [
        {
          role: "Quick Access (Demo Mode)",
          email: "demo@uxtrace.io",
          pass: "Bebas / Klik tombol 'Masuk Mode Demo'",
        },
      ],
      tech: [
        "SvelteKit",
        "TypeScript",
        "Tailwind CSS",
        "Telemetry Analytics",
        "Chart.js",
        "Scrum",
      ],
      liveUrl: "https://uxtrace-demo.vercel.app",
      githubUrl: "https://github.com/faridahmadnr/uxtrace-demo",
      deckUrl: "https://youtu.be/vnOAe-dPMUI",
    },
    {
      id: "pad1-web-tracker",
      title: "Lightweight Web Event & Telemetry Tracker",
      subtitle: "Proyek PAD 1 — Data Ingestion & Tracking",
      role: "Project Manager & System Analyst",
      teamSize: "4 Anggota Tim (1 PM, 1 UI/UX, 1 FE, 1 BE)",
      description:
        "Script pelacak event ringan yang dapat diinjeksikan ke website eksternal untuk merekam aktivitas pengguna langsung ke database.",
      longDescription:
        "Fondasi dari ekosistem analitik PAD. Proyek ini berfokus pada mekanisme injection script pelacak (mirip Google Analytics mini) yang ditanam pada website yang sudah berjalan untuk mencatat log interaksi (click, pageview, session duration) langsung ke basis data terpusat.",
      keyContributions: [
        "Memetakan arsitektur sistem pengumpulan data (Data Ingestion) dari website klien ke database.",
        "Menentukan scoping fungsionalitas tracker agar tidak membebani performa website target.",
        "Mengorkestrasi pembagian tugas riset script injection dan struktur tabel log database.",
        "Mempresentasikan hasil uji coba tracking dan verifikasi integritas data log kepada dosen penguji.",
      ],
      tech: [
        "JavaScript",
        "Event Tracking",
        "MySQL/PostgreSQL",
        "System Architecture",
        "Trello",
      ],
      githubUrl: "#",
      deckUrl: "#",
    },
    {
      id: "gps-art-creator",
      title: "GPS Art Creator (GPXShare)",
      subtitle: "Personal Full-Stack Project",
      role: "Full Stack Developer",
      teamSize: "Proyek Mandiri",
      description:
        "Aplikasi web interaktif untuk membuat rute seni GPS (GPS Art) dengan generator bentuk otomatis dan ekspor file GPX.",
      longDescription:
        "Proyek web mandiri yang memungkinkan pelari dan pesepeda menggambar bentuk tertentu di atas peta interaktif untuk kemudian diekspor ke format file GPX dan diunggah ke smartwatch atau aplikasi Strava.",
      keyContributions: [
        "Mengintegrasikan peta interaktif menggunakan Leaflet.js dan OpenStreetMap.",
        "Mengimplementasikan algoritma konversi titik koordinat (Waypoints) ke format standar GPX XML.",
        "Mendesain UI/UX yang responsif dan intuitif untuk desktop maupun mobile.",
      ],
      tech: ["JavaScript", "Leaflet.js", "HTML5", "GPX XML", "Tailwind CSS"],
      liveUrl: "https://gpx-share.vercel.app/",
      githubUrl: "#",
    },
    {
      id: "djaya-roaster",
      title: "Djaya Roaster",
      subtitle: "PPW1 - Project Based Learning",
      role: "Fullstack Developer",
      teamSize: "Personal",
      description:
        "Platform e-commerce coffee roastery lokal yang menyediakan katalog varian biji kopi, keranjang belanja interaktif, dan dashboard pengelolaan produk bagi admin.",
      longDescription:
        "Proyek Project Based Learning (PPW1) yang berangkat dari inisiatif nyata untuk mendigitalkan bisnis coffee roastery milik saudara yang sebelumnya belum memiliki kehadiran web. Dibangun secara mandiri dari sisi antarmuka belanja pelanggan hingga dashboard admin untuk mengelola inventaris produk kopi, pembaruan stok, dan pemrosesan pesanan.",
      keyContributions: [
        "Membangun sistem e-commerce end-to-end menggunakan PHP native dan database relasional MySQL untuk pengelolaan transaksi serta data produk.",
        "Mengembangkan alur belanja interaktif meliputi penjelajahan katalog kopi, halaman detail produk, keranjang belanja (shopping cart), hingga modul checkout pesanan.",
        "Merancang dashboard admin terproteksi untuk operasi CRUD produk kopi, pengelompokan kategori, fitur restok cepat, dan rekapitulasi pesanan masuk.",
        "Mendesain antarmuka web yang responsif dan ramah mobile menggunakan Bootstrap 5 serta CSS kustom bertema kedai kopi.",
      ],
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "HTML5/CSS3"],
      liveUrl: "https://djayaroaster.duckdns.org",
      githubUrl: "https://github.com/faridahmadnr/DjayaRoasters",
    },
    {
      id: "ppbo-ayam-jago",
      title: "Ayam Jago Labirin Game",
      subtitle: "Object-Oriented Programming Project",
      role: "Java & Web Game Developer",
      teamSize: "Individu",
      description:
        "Game labirin 2D turn-based berbasis Java Swing dengan sistem level, item pemulihan, dan AI musuh yang di-porting ke web untuk live demo.",
      longDescription:
        "Membangun game labirin grid 25×20 menggunakan konsep Pemrograman Berorientasi Objek (inheritance, encapsulation, dan animasi sprite) di Java Swing, lalu menghadirkannya ke browser dengan HTML5 Canvas agar dapat dimainkan langsung.",
      keyContributions: [
        "Merancang arsitektur OOP modular untuk karakter, item, tile labirin, dan sistem animasi sprite.",
        "Mengimplementasikan mekanik turn-based combat, AI pengejaran musuh, dan sistem level-up progresif.",
        "Melakukan porting game loop dan rendering sprite ke HTML5 Canvas untuk live demo interaktif.",
      ],
      tech: ["Java", "Java Swing", "OOP", "HTML5 Canvas", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/faridahmadnr/PPBO-AyamJago",
    },
    {
      id: "pbo-rocket-dodge",
      title: "Rocket Dodge 2-Player Survival",
      subtitle: "Java OOP Arcade Game",
      role: "Java & Web Game Developer",
      teamSize: "Individu",
      description:
        "Game arcade survival 2-player berbasis Java Swing dengan homing rocket, eskalasi kesulitan otomatis, serta versi live demo berbasis web.",
      longDescription:
        "Mengembangkan game desktop 2-player (WASD vs Arrow Keys) dengan mekanik roket pelacak, deteksi kolisi, audio SFX/BGM, dan timer bertahan hidup, lalu mengadaptasinya ke HTML5 Canvas agar dapat dicoba langsung di browser.",
      keyContributions: [
        "Membangun game loop 60 FPS dengan kontrol simultan 2 pemain dan deteksi kolisi real-time.",
        "Mengimplementasikan homing rocket AI dengan peningkatan tingkat kesulitan otomatis setiap 5 detik.",
        "Mengadaptasi aset audio dan logika permainan ke web statis untuk deployment instan di Vercel.",
      ],
      tech: ["Java", "Java Swing", "HTML5 Canvas", "JavaScript", "CSS3"],
      liveUrl: "#",
      githubUrl: "https://github.com/faridahmadnr/PBO",
    },
    {
      id: "avm-asteroids",
      title: "Asteroids 2D Vector Space Shooter",
      subtitle: "Python Pygame Arcade",
      role: "Game Developer",
      teamSize: "Individu",
      description:
        "Game space shooter 2D klasik berbasis Python dan Pygame dengan pergerakan vektor, rotasi pesawat, dan versi web interaktif.",
      longDescription:
        "Merancang game Asteroids dengan fisika gerak berbasis vektor 2D, rotasi pesawat 360 derajat, screen-wrapping asteroid, sistem invulnerability, serta animasi ledakan multi-frame yang juga di-porting ke HTML5 Canvas.",
      keyContributions: [
        "Mengimplementasikan fisika gerak vektor 2D, rotasi sudut, dan proyektil peluru di Pygame.",
        "Menambahkan sistem nyawa, status immune sementara dengan efek blink, dan animasi ledakan 4 frame.",
        "Membuat versi web HTML5 Canvas beserta integrasi efek suara dan musik latar.",
      ],
      tech: ["Python", "Pygame", "HTML5 Canvas", "JavaScript", "CSS3"],
      liveUrl: "#",
      githubUrl: "https://github.com/faridahmadnr/AVM",
    },
    {
      id: "contacts-app-kotlin",
      title: "MyContact Android App",
      subtitle: "Native Mobile & Interactive Preview",
      role: "Android Developer",
      teamSize: "Individu",
      description:
        "Aplikasi manajemen kontak Android native menggunakan Kotlin, Room SQLite, dan SessionManager, dilengkapi simulasi web interaktif.",
      longDescription:
        "Membangun aplikasi Android untuk autentikasi pengguna dan pengelolaan kontak (CRUD) menggunakan Room Database dan SharedPreferences, serta menyediakan interactive web preview agar alur UI/UX dapat dicoba langsung melalui browser.",
      keyContributions: [
        "Mengimplementasikan autentikasi Register/Login dan manajemen sesi menggunakan SharedPreferences.",
        "Membangun operasi CRUD kontak secara asinkron dengan Room SQLite dan Kotlin Coroutines.",
        "Membuat interactive web preview dalam frame Android untuk mendemonstrasikan alur aplikasi di web.",
      ],
      tech: [
        "Kotlin",
        "Android SDK",
        "Room SQLite",
        "Coroutines",
        "JavaScript",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/faridahmadnr/Contacts-App",
    },
  ],
  experiences: [
    {
      role: "Networking Member",
      company: "Asgama KOMATIK UGM",
      period: "2026 - Present",
      description:
        "Participating in networking activities and collaborative projects within the KOMATIK UGM community, while developing practical skills in computer networking and teamwork.",
      href: "https://komatik.wg.ugm.ac.id/",
    },
    // {
    //   role: "Web Application Developer",
    //   company: "Independent Freelance",
    //   period: "2023 - 2024",
    //   description:
    //     "Developed and maintained full-stack web applications, implemented responsive interfaces, and integrated payment gateways.",
    // },
    // {
    //   role: "Frontend Developer",
    //   company: "Web Studio Project",
    //   period: "2022 - 2023",
    //   description:
    //     "Crafted modern user interfaces using React.js and Tailwind CSS, collaborating closely with UI/UX designers.",
    // },
  ],
};
