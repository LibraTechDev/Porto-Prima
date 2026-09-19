export interface ExperienceItem {
  id: string;
  role: { id: string; en: string };
  company: string;
  period: { id: string; en: string };
  location: { id: string; en: string };
  description: { id: string; en: string };
  highlights?: { id: string[]; en: string[] };
  badges: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: { id: string; en: string };
  major: { id: string; en: string };
  period: string;
  note?: { id: string; en: string };
  badges: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: { id: string; en: string };
  description: { id: string; en: string };
  category: { id: string; en: string };
  tech: string[];
  featured?: boolean;
  architecture?: {
    frontend: string;
    backend: string;
    oltp: string;
    olap: string;
    service: string;
    ops: string[];
  };
  link?: string;
  linkText?: { id: string; en: string };
}

export interface PublicationItem {
  id: string;
  title: { id: string; en: string };
  journal: string;
  volume: string;
  year: string;
  sinta?: string;
  note?: { id: string; en: string };
  link?: string;
}

export interface SkillCategory {
  id: string;
  name: { id: string; en: string };
  skills: Array<{ name: string; level: { id: string; en: string }; highlight?: boolean }>;
}

export interface OrganizationItem {
  id: string;
  role: { id: string; en: string };
  organization: string;
  period: { id: string; en: string };
  duration?: string;
  category?: string;
  description: { id: string; en: string };
  certificateUrl?: string;
  detailsUrl?: string;
  badges?: string[];
  isHighlighted?: boolean;
}

export interface ProfileData {
  identity: {
    fullName: string;
    shortName: string;
    initials: string;
    avatar: string;
    title: { id: string; en: string };
    location: { id: string; en: string };
    summary: { id: string; en: string };
    bio: { id: string[]; en: string[] };
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    gitlab: string;
    instagram: string;
    cv?: string;
  };
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  languages: Array<{ name: { id: string; en: string }; level: { id: string; en: string } }>;
  certificates: Array<{ title: string; desc: { id: string; en: string }; link?: string }>;
  organizations: OrganizationItem[];
  publications: PublicationItem[];
  projects: ProjectItem[];
}

export const profile: ProfileData = {
  identity: {
    fullName: "Primavieri Rhesa Ardana",
    shortName: "Primavieri",
    initials: "PR",
    avatar: "/images/profile.webp",
    title: {
      id: "Dedicated Software Engineer For Making A Better Society | 2+ Tahun Pengalaman",
      en: "Dedicated Software Engineer For Making A Better Society | 2+ Years Experience",
    },
    location: {
      id: "Semarang, Jawa Tengah, Indonesia",
      en: "Semarang, Central Java, Indonesia",
    },
    summary: {
      id: "Software Engineer yang berdedikasi membangun solusi perangkat lunak skala enterprise dan sistem terdistribusi. Berpengalaman dalam pengembangan aplikasi enterprise internal (Custom ERP, App Internal Produksi), fullstack web (Laravel, Blade Engine, Vue.js, React, Next.js), multi-platform client (Flutter Mobile, Electron Desktop), arsitektur multi-database & cache (SQL Server, MySQL, PostgreSQL, Redis), serta sistem modern berbasis FastAPI dan Rust dengan analitik DuckDB dan Linux server deployment.",
      en: "Dedicated Software Engineer committed to engineering high-performance enterprise solutions and distributed systems. Experienced in internal enterprise application development (Custom ERP, Production Internal Apps), fullstack web (Laravel, Blade Engine, Vue.js, React, Next.js), multi-platform client ecosystems (Flutter Mobile, Electron Desktop), multi-database & caching architectures (SQL Server, MySQL, PostgreSQL, Redis), and modern systems using FastAPI and Rust with DuckDB analytics and Linux server deployment.",
    },
    bio: {
      id: [
        "Fokus pada rekayasa perangkat lunak skala enterprise yang andal, efisien, dan berdampak nyata bagi operasional bisnis dan industri.",
        "Menggabungkan keahlian enterprise & multi-platform (Laravel, Blade, Flutter Mobile, Electron Desktop) dengan kapabilitas komputasi berkecepatan tinggi menggunakan FastAPI, Rust, dan DuckDB.",
        "Terbiasa mengelola siklus hidup aplikasi dari perancangan arsitektur multi-database (SQL Server, MySQL, PostgreSQL, Redis), implementasi REST API, hingga deployment aman pada server Linux & VPS menggunakan Docker, Nginx, UFW, GoAccess, dan fail2ban."
      ],
      en: [
        "Focused on engineering reliable, efficient, and scalable enterprise-grade software solutions that drive real operational and industrial impact.",
        "Combining enterprise & multi-platform mastery (Laravel, Blade, Flutter Mobile, Electron Desktop) with high-speed systems engineering using FastAPI, Rust, and DuckDB.",
        "Adept at managing the end-to-end software lifecycle from multi-database architecture (SQL Server, MySQL, PostgreSQL, Redis), REST API design, to secure Linux server & VPS deployment with Docker, Nginx, UFW, GoAccess, and fail2ban."
      ]
    }
  },
  contact: {
    email: "primavieri@gmail.com",
    linkedin: "https://linkedin.com/in/primavieri",
    github: "https://github.com/LibraTechDev",
    gitlab: "https://gitlab.com/LibraTechDev",
    instagram: "https://instagram.com/prmvri",
    cv: "https://drive.google.com/file/d/1LnreeN-eS3tHbDuUIu3WKHl-TAvucVgb/view?usp=sharing",
  },
  experiences: [
    {
      id: "mrp",
      role: {
        id: "Fullstack Developer",
        en: "Fullstack Developer",
      },
      company: "MULTI REVA PARAMA",
      period: {
        id: "Januari 2026 – Sekarang",
        en: "January 2026 – Present",
      },
      location: {
        id: "Semarang, Jawa Tengah",
        en: "Semarang, Central Java",
      },
      description: {
        id: "Mengembangkan dan memelihara aplikasi web skala enterprise dan sistem internal perusahaan: menangani Custom ERP (Laravel, Blade Engine, SQL Server, MySQL, PostgreSQL, Redis, Linux Deployment via Git pull manual) serta App Internal Produksi (REST API Laravel, Flutter Mobile App, Electron Desktop App).",
        en: "Developing and maintaining enterprise-scale web applications and company internal systems: handling Custom ERP (Laravel, Blade Engine, SQL Server, MySQL, PostgreSQL, Redis, Linux Deployment via manual Git pull) and Production Internal Apps (Laravel REST API, Flutter Mobile App, Electron Desktop App).",
      },
      badges: ["Custom ERP", "Laravel", "Blade", "SQL Server", "Redis", "Flutter", "Electron", "Linux (Pull Manual)"],
      isCurrent: true,
    },
    {
      id: "prime-tekno",
      role: {
        id: "Founder",
        en: "Founder",
      },
      company: "Prime Tekno",
      period: {
        id: "April 2025 – Sekarang",
        en: "April 2025 – Present",
      },
      location: {
        id: "Semarang, Indonesia",
        en: "Semarang, Indonesia",
      },
      description: {
        id: "Mendirikan dan memimpin inisiatif perangkat lunak untuk kebutuhan digitalisasi bisnis dan automasi operasional klien.",
        en: "Founded and leading software initiatives providing tailored digital transformation and automated business solutions for clients.",
      },
      badges: ["Founder", "Software Agency", "Business Solutions"],
      isCurrent: true,
    },
    {
      id: "rapier",
      role: {
        id: "Back End Developer",
        en: "Back End Developer",
      },
      company: "PT. Rapier Technology International",
      period: {
        id: "Februari 2025 – Juli 2025",
        en: "February 2025 – July 2025",
      },
      location: {
        id: "Semarang, Jawa Tengah",
        en: "Semarang, Central Java",
      },
      description: {
        id: "Merancang dan mengoptimalkan RESTful API backend, manajemen database, serta integrasi layanan pihak ketiga pada proyek-proyek teknologi rapiertechnology.co.id.",
        en: "Designed and optimized backend RESTful APIs, database schema management, and third-party integrations across tech initiatives at rapiertechnology.co.id.",
      },
      badges: ["Backend", "REST APIs", "Database Optimization"],
    },
    {
      id: "bbpmp",
      role: {
        id: "Project Manager",
        en: "Project Manager",
      },
      company: "BBPMP Provinsi Jawa Tengah",
      period: {
        id: "Januari 2025 – Februari 2025",
        en: "January 2025 – February 2025",
      },
      location: {
        id: "Semarang, Jawa Tengah",
        en: "Semarang, Central Java",
      },
      description: {
        id: "Memimpin proyek pengembangan website PGRI Tembalang: merumuskan jobdesk, memberikan mentoring tim teknis, dan mengawasi jadwal pelaksanaan hingga serah terima.",
        en: "Spearheaded the development project for the PGRI Tembalang website: delegating job specifications, mentoring technical members, and overseeing delivery timelines.",
      },
      badges: ["Project Management", "Leadership", "Mentoring", "PGRI Tembalang"],
    },
    {
      id: "hmti-dev",
      role: {
        id: "Full-stack Developer",
        en: "Full-stack Developer",
      },
      company: "HMTI Udinus",
      period: {
        id: "Mei 2024 – Oktober 2024",
        en: "May 2024 – October 2024",
      },
      location: {
        id: "Semarang, Indonesia",
        en: "Semarang, Indonesia",
      },
      description: {
        id: "Anggota tim inti pengembang sistem platform SEKARI (Serat Kartini) dalam program PPK Ormawa HMTI Udinus.",
        en: "Core software developer for the SEKARI (Serat Kartini) community platform within the national PPK Ormawa HMTI Udinus program.",
      },
      badges: ["Full-stack", "PPK Ormawa", "SEKARI Platform", "Vue / Laravel"],
    },
    {
      id: "hmti-it",
      role: {
        id: "Information Technology Specialist",
        en: "Information Technology Specialist",
      },
      company: "HMTI Udinus",
      period: {
        id: "September 2023 – Juli 2025",
        en: "September 2023 – July 2025",
      },
      location: {
        id: "Semarang, Indonesia",
        en: "Semarang, Indonesia",
      },
      description: {
        id: "Mengelola infrastruktur teknologi informasi organisasi, sistem administrasi digital, dan mendukung kelancaran kegiatan kemahasiswaan.",
        en: "Managed organizational IT infrastructure, digital administration portals, and technical operations for student association initiatives.",
      },
      badges: ["IT Support", "Systems Administration", "Student Organization"],
    },
    {
      id: "dncc",
      role: {
        id: "Head of Research Development Department Specialist",
        en: "Head of Research Development Department Specialist",
      },
      company: "DNCC (Dian Nuswantoro Computer Club)",
      period: {
        id: "September 2023 – Agustus 2024",
        en: "September 2023 – August 2024",
      },
      location: {
        id: "Semarang, Indonesia",
        en: "Semarang, Indonesia",
      },
      description: {
        id: "Memimpin departemen riset dan pengembangan teknologi, menyusun kurikulum pelatihan teknis, serta membimbing anggota dalam eksplorasi teknologi baru.",
        en: "Led the Research & Development department, structured technical training modules, and mentored developers in emerging computer science technologies.",
      },
      badges: ["R&D Leadership", "Tech Curriculum", "Mentorship"],
    },
  ],
  education: [
    {
      id: "udinus",
      institution: "Universitas Dian Nuswantoro (UDINUS)",
      degree: {
        id: "Sarjana Komputer (S.Kom)",
        en: "Bachelor of Computer Science (B.CS)",
      },
      major: {
        id: "Teknik Informatika / Computer Programming, Aplikasi Spesifik",
        en: "Informatics / Computer Programming, Specialized Applications",
      },
      period: "Agustus 2022 – Februari 2026",
      note: {
        id: "NIM: A11.2022.14557 • Fokus pada Rekayasa Perangkat Lunak, Basis Data Analitik, & Arsitektur Terdistribusi.",
        en: "Student ID: A11.2022.14557 • Focus on Software Engineering, Analytical Databases, & Distributed Systems.",
      },
      badges: ["Informatika", "S1", "Software Engineering", "UDINUS"],
    },
    {
      id: "sman5",
      institution: "SMA Negeri 5 Semarang",
      degree: {
        id: "Pendidikan Menengah Atas",
        en: "High School Diploma",
      },
      major: {
        id: "MIPA (Matematika & Ilmu Pengetahuan Alam)",
        en: "Natural Sciences & Mathematics",
      },
      period: "Juni 2019 – Juli 2022",
      badges: ["Science", "Semarang"],
    },
  ],
  skills: [
    {
      id: "languages-runtime",
      name: {
        id: "Bahasa Pemrograman & Runtime",
        en: "Programming Languages & Runtimes",
      },
      skills: [
        { name: "PHP / Laravel (Core Enterprise)", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "RESTful API Architecture", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "FastAPI / Python", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "Rust", level: { id: "Tingkat Menengah / Aktif", en: "Intermediate / Active" }, highlight: true },
        { name: "JavaScript / TypeScript", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "Dart (Flutter Engine)", level: { id: "Kompeten", en: "Competent" } },
        { name: "Node.js / Express", level: { id: "Mahir", en: "Proficient" } },
      ],
    },
    {
      id: "frontend",
      name: {
        id: "Frontend & Multi-Platform Client",
        en: "Frontend & Multi-Platform Clients",
      },
      skills: [
        { name: "Flutter (Mobile App - iOS & Android)", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "Electron (Desktop App - Cross-platform)", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "Blade Engine (Laravel Templating)", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "Vue.js (Vue 3, Pinia, Vite)", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "React / Next.js", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "Tailwind CSS / daisyUI", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "HTML5 / Semantic / Responsive CSS", level: { id: "Mahir", en: "Proficient" } },
      ],
    },
    {
      id: "database",
      name: {
        id: "Basis Data & Penyimpanan",
        en: "Databases & Storage",
      },
      skills: [
        { name: "Microsoft SQL Server (Enterprise OLTP)", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "PostgreSQL (Enterprise OLTP)", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "MySQL / MariaDB", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "Redis (Caching, Sessions, & Queues)", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "DuckDB (OLAP Analytics)", level: { id: "Mahir", en: "Proficient" }, highlight: true },
      ],
    },
    {
      id: "devops-ops",
      name: {
        id: "DevOps, Server, & Keamanan",
        en: "DevOps, Infrastructure, & Security",
      },
      skills: [
        { name: "Linux Server Deployment & Admin", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "Docker & Containerization", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "Nginx Reverse Proxy & VPS", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "Git & GitLab CI/CD", level: { id: "Mahir", en: "Proficient" }, highlight: true },
        { name: "UFW Firewall & fail2ban", level: { id: "Kompeten", en: "Competent" }, highlight: true },
        { name: "GoAccess Server Monitoring", level: { id: "Kompeten", en: "Competent" } },
      ],
    },
  ],
  languages: [
    {
      name: { id: "Bahasa Indonesia", en: "Indonesian" },
      level: { id: "Penutur Asli (Native)", en: "Native Speaker" },
    },
    {
      name: { id: "Bahasa Inggris", en: "English" },
      level: { id: "Kemampuan Kerja Profesional", en: "Professional Working Proficiency" },
    },
    {
      name: { id: "Bahasa Jerman", en: "German" },
      level: { id: "Tingkat Dasar (Elementary)", en: "Elementary Proficiency" },
    },
  ],
  certificates: [
    {
      title: "Sertifikasi Kompetensi BNSP - Web Developer",
      desc: {
        id: "Sertifikasi kompetensi kerja nasional Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia pada bidang Pemrograman & Rekayasa Perangkat Lunak Web (Web Developer).",
        en: "National Professional Competency Certification by BNSP (Badan Nasional Sertifikasi Profesi) Republic of Indonesia in Web Development.",
      },
      link: "https://drive.google.com/file/d/1cn9tfUQiF30-n91RhPzDlhqGvC8Siq7D/view?usp=sharing",
    },
    {
      title: "TOEFL Like Certificate",
      desc: {
        id: "Sertifikasi kemahiran berbahasa Inggris.",
        en: "English language proficiency assessment.",
      },
      link: "https://drive.google.com/file/d/1j5p3S-qdrVARLFtg85gmhsHIazQ1HZun/view?usp=sharing",
    },
    {
      title: "LKMM TM",
      desc: {
        id: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Menengah.",
        en: "Intermediate Student Management Skills Training.",
      },
      link: "https://drive.google.com/file/d/1gc4M_1RptHj1mRCJJlRGpxMCokBfunL0/view?usp=sharing",
    },
    {
      title: "LKMM TD",
      desc: {
        id: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar.",
        en: "Basic Student Management Skills Training.",
      },
      link: "https://drive.google.com/file/d/1A46qpVQDmZ4438ABEOpAFYbGcnL_2PNF/view?usp=sharing",
    },
  ],
  publications: [
    {
      id: "pub-sea",
      title: {
        id: "Sosialisasi Website SEA / SEKARI",
        en: "Socialization of the SEA / SEKARI Website",
      },
      journal: "Jurnal Abdi (Jurnal Pengabdian Kepada Masyarakat)",
      volume: "Vol 6 No 4",
      year: "2024",
      sinta: "S3",
      note: {
        id: "Terakreditasi SINTA 3. Publikasi implementasi platform digital kemasyarakatan SEKARI untuk pemberdayaan komunitas.",
        en: "Accredited SINTA 3. Published paper on community deployment and digital adoption of the SEKARI platform.",
      },
      link: "https://abdi.ppj.unp.ac.id/index.php/abdi/article/view/981",
    },
    {
      id: "pub-lms",
      title: {
        id: "Multi-Tier LMS Serat Kartini",
        en: "Multi-Tier LMS Serat Kartini",
      },
      journal: "ISI (Journal of Information System and Informatics)",
      volume: "Vol 7 No 4",
      year: "Desember 2025",
      sinta: "S2",
      note: {
        id: "Terakreditasi SINTA 2. Desain konseptual arsitektur multi-tier LMS (Bukan sistem production).",
        en: "Accredited SINTA 2. Conceptual architectural design of a multi-tier learning management system (Conceptual design, not production).",
      },
      link: "https://journal-isi.org/index.php/isi/article/view/1341",
    },
  ],
  organizations: [
    {
      id: "hmti-field-coord",
      role: {
        id: "Field Coordinator (Koordinator Lapangan)",
        en: "Field Coordinator",
      },
      organization: "Himpunan Mahasiswa Teknik Informatika (HMTI) UDINUS",
      period: {
        id: "September 2024 – Oktober 2024",
        en: "September 2024 – October 2024",
      },
      duration: "2 bln",
      category: "Sains dan Teknologi",
      description: {
        id: "Menjadi Koordinator Lapangan untuk acara Penerimaan Anggota Aktif HMTI 2024/2025, mengoordinasi mobilisasi massa, alur operasional lapangan, dan ketertiban seluruh rangkaian kegiatan orientasi.",
        en: "Served as Field Coordinator for HMTI Active Member Induction 2024/2025, leading crowd mobilization, on-site operational logistics, and event safety protocols.",
      },
      detailsUrl: "https://www.linkedin.com/in/primavieri/details/volunteer-experiences/edit/forms/738767306/",
      badges: ["Field Coordinator", "Crowd Control", "Event Operations", "HMTI Udinus"],
      isHighlighted: false,
    },
    {
      id: "hmti-semnasti",
      role: {
        id: "Sponsorship Staff - Semnasti 2024",
        en: "Sponsorship Staff - Semnasti 2024",
      },
      organization: "Himpunan Mahasiswa Teknik Informatika (HMTI) UDINUS",
      period: {
        id: "Mei 2024 – Juni 2024",
        en: "May 2024 – June 2024",
      },
      duration: "2 bln",
      category: "Sains dan Teknologi",
      description: {
        id: "Anggota Sie Sponsorship untuk acara Seminar Nasional Teknologi Informasi (Semnasti) 2024, menjalin kemitraan strategis dengan instansi dan sponsor eksternal guna pendanaan seminar.",
        en: "Sponsorship staff member for the National Information Technology Seminar (Semnasti) 2024, building external institutional sponsorships and financial partnerships.",
      },
      certificateUrl: "https://www.linkedin.com/in/primavieri/overlay/VolunteerExperience/1547108715/treasury/?profileId=ACoAADcfdG0BU982xSLSvdDCkuKMPvq8PNMu_jQ",
      detailsUrl: "https://www.linkedin.com/in/primavieri/details/volunteer-experiences/edit/forms/1547108715/",
      badges: ["Sponsorship", "Partnerships", "Semnasti 2024", "HMTI Udinus"],
      isHighlighted: false,
    },
    {
      id: "dncc-techverse",
      role: {
        id: "Wakil Ketua Pelaksana (Vice Leader) - TechVerse 2024",
        en: "Vice Project Leader - TechVerse 2024",
      },
      organization: "Dian Nuswantoro Computer Club (DNCC)",
      period: {
        id: "Maret 2024 – Juli 2024",
        en: "March 2024 – July 2024",
      },
      duration: "5 bln",
      category: "Sains dan Teknologi",
      description: {
        id: "Wakil ketua pelaksana untuk program kerja unggulan DNCC bernama TechVerse, seminar nasional seputar tren teknologi terdepan, memimpin koordinasi lintas divisi kepanitiaan dan alur acara.",
        en: "Vice project leader for DNCC's flagship TechVerse national technology seminar, steering cross-divisional committee workflows and executive event execution.",
      },
      detailsUrl: "https://www.linkedin.com/in/primavieri/details/volunteer-experiences/edit/forms/248865895/",
      badges: ["Vice Leader", "Project Leadership", "TechVerse 2024", "DNCC Udinus"],
      isHighlighted: true,
    },
    {
      id: "hmti-hitech",
      role: {
        id: "Ketua Pelaksana (Leader) - Hi Technology 2024",
        en: "Project Leader - Hi Technology 2024",
      },
      organization: "Himpunan Mahasiswa Teknik Informatika (HMTI) UDINUS",
      period: {
        id: "September 2023 – April 2024",
        en: "September 2023 – April 2024",
      },
      duration: "8 bln",
      category: "Sains dan Teknologi",
      description: {
        id: "Ketua Pelaksana Hi Technology 2024, program kerja tahunan berskala besar HMTI Udinus. Bertanggung jawab penuh memimpin seluruh kepanitiaan, manajemen anggaran, konsep kegiatan, dan relasi institusi.",
        en: "Project Leader for Hi Technology 2024, HMTI Udinus' premier annual technology competition and event. Fully responsible for leading all committees, budgeting, technical planning, and institutional relations.",
      },
      certificateUrl: "https://www.linkedin.com/in/primavieri/overlay/VolunteerExperience/1547006025/treasury/?profileId=ACoAADcfdG0BU982xSLSvdDCkuKMPvq8PNMu_jQ",
      detailsUrl: "https://www.linkedin.com/in/primavieri/details/volunteer-experiences/edit/forms/1547006025/",
      badges: ["Project Leader", "Event Chair", "Hi Technology 2024", "HMTI Udinus"],
      isHighlighted: true,
    },
    {
      id: "dncc-rnd-head",
      role: {
        id: "Head of Research and Development (R&D) Department Specialist",
        en: "Head of Research and Development (R&D) Department Specialist",
      },
      organization: "Dian Nuswantoro Computer Club (DNCC)",
      period: {
        id: "September 2023 – Agustus 2024",
        en: "September 2023 – August 2024",
      },
      duration: "1 thn",
      category: "Kepemimpinan Teknologi",
      description: {
        id: "Memimpin departemen riset dan pengembangan teknologi DNCC, merancang kurikulum pelatihan teknologi komputasi modern, mengorkestrasi proyek riset internal, serta membimbing dan mementori anggota dalam eksplorasi teknologi baru.",
        en: "Led the Research & Development department at DNCC, formulating modern software training curricula, orchestrating internal tech initiatives, and mentoring members across advanced software engineering topics.",
      },
      badges: ["R&D Leadership", "Tech Curriculum", "Software Mentorship", "DNCC Core Board"],
      isHighlighted: true,
    },
    {
      id: "dncc-dinacom",
      role: {
        id: "Sponsorship Staff - Dinacom 2024",
        en: "Sponsorship Staff - Dinacom 2024",
      },
      organization: "Dian Nuswantoro Computer Club (DNCC)",
      period: {
        id: "November 2023 – Februari 2024",
        en: "November 2023 – February 2024",
      },
      duration: "4 bln",
      category: "Sains dan Teknologi",
      description: {
        id: "Anggota sie sponsorship untuk acara Dinacom (Dian Nuswantoro Competition) 2024 yang diselenggarakan oleh DNCC Udinus, mengamankan sponsorship industri dan pendanaan kompetisi IT nasional.",
        en: "Sponsorship committee member for Dinacom 2024 national IT competition organized by DNCC Udinus, securing enterprise tech sponsorships and tournament funding.",
      },
      certificateUrl: "https://www.linkedin.com/in/primavieri/overlay/VolunteerExperience/135682292/treasury/?profileId=ACoAADcfdG0BU982xSLSvdDCkuKMPvq8PNMu_jQ",
      detailsUrl: "https://www.linkedin.com/in/primavieri/details/volunteer-experiences/edit/forms/135682292/",
      badges: ["Sponsorship", "Dinacom 2024", "Fundraising", "DNCC Udinus"],
      isHighlighted: false,
    },
    {
      id: "hmti-mc",
      role: {
        id: "Master of Ceremonies (MC) - Pembekalan Anggota Aktif",
        en: "Master of Ceremonies (MC) - Active Member Briefing",
      },
      organization: "Himpunan Mahasiswa Teknik Informatika (HMTI) UDINUS",
      period: {
        id: "Oktober 2023 – November 2023",
        en: "October 2023 – November 2023",
      },
      duration: "2 bln",
      category: "Sains dan Teknologi",
      description: {
        id: "Menjadi Master of Ceremonies (MC) memandu jalannya sesi formal dan interaktif acara pembekalan anggota aktif untuk HMTI Udinus.",
        en: "Served as Master of Ceremonies (MC) hosting the formal onboarding and interactive briefing assemblies for active members of HMTI Udinus.",
      },
      detailsUrl: "https://www.linkedin.com/in/primavieri/details/volunteer-experiences/edit/forms/2002670693/",
      badges: ["Master of Ceremonies", "Public Speaking", "Event Host", "HMTI Udinus"],
      isHighlighted: false,
    },
    {
      id: "hmti-it-spec",
      role: {
        id: "Information Technology Specialist",
        en: "Information Technology Specialist",
      },
      organization: "Himpunan Mahasiswa Teknik Informatika (HMTI) UDINUS",
      period: {
        id: "September 2023 – Juli 2025",
        en: "September 2023 – July 2025",
      },
      duration: "1 thn 11 bln",
      category: "Sains dan Teknologi",
      description: {
        id: "Mengelola infrastruktur teknologi informasi organisasi, sistem administrasi digital, dan mendukung kelancaran kegiatan kemahasiswaan.",
        en: "Managed organizational IT infrastructure, digital administration portals, and technical operations for student association initiatives.",
      },
      badges: ["IT Support", "Systems Administration", "HMTI Udinus"],
      isHighlighted: false,
    },
  ],
  projects: [
    {
      id: "fms",
      title: "Fleet Management System",
      featured: true,
      category: {
        id: "Sistem Terdistribusi & Analitik Armada",
        en: "Distributed Systems & Fleet Analytics",
      },
      tagline: {
        id: "Arsitektur hybrid OLTP & OLAP: Vue.js, Pinia, FastAPI, Rust, DuckDB, PostgreSQL, Automated CI/CD Linux",
        en: "Hybrid OLTP & OLAP architecture: Vue.js, Pinia, FastAPI, Rust, DuckDB, PostgreSQL, Automated CI/CD Linux",
      },
      description: {
        id: "Aplikasi web manajemen armada multi-role dengan pemisahan beban transaksional (OLTP) dan analitik (OLAP). FastAPI dan PostgreSQL menangani CRUD data operasional (kendaraan, sopir, reservasi, dan autentikasi JWT). Service Rust (Axum) mengeksekusi agregasi dashboard di atas PostgreSQL, sementara DuckDB in-process di backend mempercepat analitik dari snapshot yang disinkron tiap 5 menit. Antarmuka web dibuat dengan Vue.js 3 dan Pinia (chart dashboard, peta Leaflet, polling status), di-deploy secara otomatis (Automated CI/CD) ke server Linux VPS via Docker, reverse proxy Nginx, dan pemantauan trafik GoAccess.",
        en: "Multi-role fleet management web app separating transactional (OLTP) and analytical (OLAP) workloads. FastAPI and PostgreSQL handle operational CRUD (fleet assets, drivers, reservations, and JWT auth). A Rust (Axum) service runs dashboard aggregations over PostgreSQL, while in-process DuckDB in the backend accelerates analytics over snapshots synced every 5 minutes. The web UI is built with Vue.js 3 and Pinia (chart dashboards, Leaflet maps, polling sync status), deployed via Automated CI/CD pipeline to a Linux VPS via Docker behind an Nginx reverse proxy with GoAccess traffic monitoring.",
      },
      tech: [
        "Vue.js 3",
        "Pinia Store",
        "FastAPI",
        "Rust Services",
        "PostgreSQL (OLTP)",
        "DuckDB (OLAP)",
        "Automated CI/CD (Linux)",
        "Docker",
        "GoAccess",
      ],
      architecture: {
        frontend: "Vue.js 3 SPA with Chart Dashboards & Leaflet Maps",
        backend: "FastAPI REST Server (Operational endpoints & Auth)",
        oltp: "PostgreSQL Database (Vehicles, Drivers, Active Trips, Relational Data)",
        service: "Rust Microservice (PostgreSQL-backed dashboard aggregations)",
        olap: "DuckDB In-Process OLAP (Analytics over synced snapshots)",
        ops: [
          "Automated CI/CD deployment pipeline to Linux VPS",
          "Containerized via Docker on VPS",
          "Nginx Reverse Proxy with gzip & rate limiting",
          "UFW & fail2ban brute-force protection + ban auditor",
          "GoAccess real-time visual web log analyzer",
        ],
      },
    },
    {
      id: "custom-erp",
      title: "Custom ERP Enterprise",
      featured: true,
      category: {
        id: "Aplikasi Internal Enterprise",
        en: "Enterprise Internal Application",
      },
      tagline: {
        id: "Sistem ERP internal terintegrasi multi-database dan Linux deployment (Git pull manual)",
        en: "Internal ERP system with multi-database integration and Linux deployment (manual Git pull)",
      },
      description: {
        id: "Aplikasi ERP kustom internal perusahaan untuk manajemen operasional, inventaris, dan transaksi bisnis. Dibangun menggunakan framework Laravel dan Blade Engine dengan integrasi multi-database (Microsoft SQL Server, MySQL, dan PostgreSQL). Memanfaatkan Redis untuk caching performa tinggi serta manajemen session, dan di-deploy pada server Linux standar dengan mekanisme Git pull manual.",
        en: "Custom internal enterprise ERP application managing business operations, inventory, and transactions. Engineered with Laravel and Blade Engine, integrating a multi-database topology (Microsoft SQL Server, MySQL, and PostgreSQL). Powered by Redis for high-throughput caching & session management, deployed on standard Linux servers via manual Git pull.",
      },
      tech: [
        "Laravel",
        "Blade Engine",
        "SQL Server",
        "MySQL",
        "PostgreSQL",
        "Redis",
        "Linux (Pull Manual)",
      ],
    },
    {
      id: "app-internal-produksi",
      title: "App Internal Produksi",
      featured: true,
      category: {
        id: "Aplikasi Internal Produksi",
        en: "Manufacturing & Production Internal App",
      },
      tagline: {
        id: "Ekosistem multi-platform lantai produksi: REST API Laravel, Flutter, dan Electron",
        en: "Multi-platform shopfloor ecosystem: Laravel REST API, Flutter, and Electron",
      },
      description: {
        id: "Ekosistem aplikasi digital internal lantai produksi terpadu. Backend menggunakan RESTful API berbasis Laravel untuk pertukaran data real-time, melayani aplikasi mobile Flutter untuk mobilitas operator lapangan serta aplikasi desktop Electron untuk workstation manufaktur di lini perakitan produksi.",
        en: "Unified internal digital ecosystem for manufacturing production shopfloors. Powered by a high-performance Laravel RESTful API serving both cross-platform Flutter mobile applications for field operators and Electron desktop clients on assembly line workstations.",
      },
      tech: [
        "REST API Laravel",
        "Flutter (Mobile App)",
        "Electron (Desktop App)",
        "MySQL",
        "Linux Server",
      ],
    },
    {
      id: "iss-compro",
      title: "Indonesian Strategic Syndicate Compro",
      category: {
        id: "Headless CMS & Corporate Profile",
        en: "Headless CMS & Corporate Profile",
      },
      tagline: {
        id: "Company profile Astro.js dengan Headless CMS admin dashboard",
        en: "Astro.js company profile with a Headless CMS admin dashboard",
      },
      description: {
        id: "Website company profile untuk Indonesian Strategic Syndicate. Bagian publik dibangun dengan Astro.js dan Redux untuk rendering halaman yang cepat, sedangkan admin dashboard menggunakan Vue.js dan Tailwind CSS untuk pengelolaan artikel berita dan penanganan pesan masuk dari formulir kontak.",
        en: "Company profile website for Indonesian Strategic Syndicate. The public site uses Astro.js with Redux for fast page delivery, while the headless admin dashboard is built with Vue.js and Tailwind CSS for managing articles and incoming contact form submissions.",
      },
      tech: ["Astro.js", "Vue.js", "Redux", "Tailwind CSS", "MySQL", "Headless CMS"],
      link: "https://indonesian-strategic-syndicate.org",
      linkText: {
        id: "Kunjungi Website",
        en: "Visit Website",
      },
    },
    {
      id: "pgri-tembalang",
      title: "PGRI Tembalang Website",
      category: {
        id: "Portal Organisasi & CMS",
        en: "Organizational Portal & CMS",
      },
      tagline: {
        id: "Website profil dan portal interaksi anggota PGRI Cabang Tembalang",
        en: "Official profile and member portal for PGRI Tembalang",
      },
      description: {
        id: "Website profil organisasi dan portal keanggotaan PGRI Cabang Tembalang. Menggunakan Filament untuk CMS admin dashboard serta Laravel 11 Blade dan Tailwind CSS pada halaman publik. Memiliki sistem hak akses multi-role untuk kebutuhan upload artikel berita antar anggota dan pencatatan pembayaran iuran.",
        en: "Organizational profile and membership portal for PGRI Tembalang. Built with Filament for the admin CMS dashboard and Laravel 11 Blade with Tailwind CSS for public pages. Features multi-role access for member article publishing and dues payment tracking.",
      },
      tech: ["Laravel 11", "Blade Engine", "Filament", "MySQL", "Tailwind CSS"],
    },
    {
      id: "perkasa-makmur",
      title: "Perkasa Makmur Compro",
      category: {
        id: "Headless CMS & Company Profile",
        en: "Headless CMS & Company Profile",
      },
      tagline: {
        id: "Company profile berbasis Headless CMS dengan Filament dan React",
        en: "Headless CMS company profile with Filament and React",
      },
      description: {
        id: "Website company profile dengan arsitektur headless CMS. Filament dan MySQL bertindak sebagai backend CMS untuk mengelola artikel dan konten profil, sedangkan frontend dibangun secara terpisah menggunakan React, Tailwind CSS, dan Redux state management.",
        en: "Company profile website built on a headless CMS architecture. Filament and MySQL serve as the backend CMS for managing articles and content, while the frontend is built separately with React, Tailwind CSS, and Redux.",
      },
      tech: ["React", "Redux", "Tailwind CSS", "Filament", "MySQL", "Headless CMS"],
    },
    {
      id: "lms-serat-kartini",
      title: "LMS Serat Kartini",
      category: {
        id: "Learning Management System (LMS)",
        en: "Learning Management System (LMS)",
      },
      tagline: {
        id: "Learning Management System berbasis Laravel 11 dengan kontrol akses multi-role",
        en: "Laravel 11 Learning Management System with multi-role access",
      },
      description: {
        id: "Aplikasi LMS berbasis Laravel 11 Blade dan Filament dengan pembagian peran multi-role (Admin, Pengajar, dan Siswa). Berfungsi untuk distribusi materi pelajaran, pengelolaan tugas, serta pencatatan evaluasi belajar.",
        en: "Web-based Learning Management System built with Laravel 11 Blade and Filament with role-based access for Admins, Instructors, and Students. Handles course material distribution, assignments, and grade tracking.",
      },
      tech: ["Laravel 11", "Blade Engine", "Filament", "MySQL", "Tailwind CSS"],
    },
  ],
};

export const i18nStrings = {
  id: {
    subtitle: "Insinyur Perangkat Lunak & Sistem Terdistribusi",
    quickActions: "Tindakan Cepat",
    allApps: "Semua Aplikasi & Portofolio",
    backToStart: "Kembali ke Mulai",
    closeApp: "Tutup",
    aboutMe: "Tentang Saya",
    experience: "Pengalaman",
    organizations: "Organisasi",
    education: "Pendidikan",
    skills: "Keahlian & Stack",
    projects: "Proyek Unggulan",
    publications: "Publikasi Ilmiah",
    contact: "Hubungi Saya",
    featuredProject: "Proyek Unggulan",
    viewDetails: "Buka Aplikasi",
    architectureOverview: "Arsitektur Sistem",
    techStack: "Teknologi Terpakai",
    oltpTitle: "Penyimpanan Transaksional (OLTP)",
    olapTitle: "Mesin Analitik Cepat (OLAP)",
    devopsSecurity: "Infrastruktur & Keamanan VPS",
    certificatesTitle: "Sertifikasi & Pelatihan",
    languageProficiency: "Kemahiran Bahasa",
    themeToggle: "Tema",
    langToggle: "Bahasa",
    statusLive: "Aktif",
    verifiedEnterprise: "Terverifikasi",
    confidentialNotice: "Proyek privat perusahaan; kode sumber dijaga kerahasiaannya.",
  },
  en: {
    subtitle: "Software Engineer & Distributed Systems",
    quickActions: "Quick Actions",
    allApps: "All Applications & Portfolio",
    backToStart: "Back to Start",
    closeApp: "Close",
    aboutMe: "About Me",
    experience: "Experience",
    organizations: "Organizations",
    education: "Education",
    skills: "Skills & Stack",
    projects: "Featured Projects",
    publications: "Publications",
    contact: "Contact Me",
    featuredProject: "Featured Project",
    viewDetails: "Open App",
    architectureOverview: "System Architecture",
    techStack: "Tech Stack",
    oltpTitle: "Transactional Storage (OLTP)",
    olapTitle: "High-Speed Analytical Engine (OLAP)",
    devopsSecurity: "Infrastructure & VPS Security",
    certificatesTitle: "Certifications & Training",
    languageProficiency: "Language Proficiency",
    themeToggle: "Theme",
    langToggle: "Language",
    statusLive: "Active",
    verifiedEnterprise: "Verified",
    confidentialNotice: "Private corporate repositories; source code strictly confidential.",
  },
};
