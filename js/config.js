/**
 * ========================================================
 * PORTFOLIO CONFIGURATION - SAMIRA HUSSIEN
 * ========================================================
 * تم تحديث كافة البيانات بناءً على الـ CV الخاص بكِ!
 */

const portfolioConfig = {
  // 1. المعلومات الشخصية الأساسية
  personal: {
    name: "Samira Hussien",
    brandName: "Samira.dev",
    title: "Front-End Developer | React Developer",
    location: "Cairo, Egypt",
    phone: "01064658759",
    email: "samirahussien349@gmail.com",
    cvLink: "#", // يمكنك وضع ملف الـ PDF هنا أو رابط درايف
    availability: "Available for Roles & Projects",
  },

  // 2. الكلمات التي تظهر بتأثير الكتابة التلقائية
  typingTitles: [
    "React.js Web Applications",
    "Responsive Modern Interfaces",
    "Vite & Tailwind CSS Solutions",
    "Clean & Scalable Code"
  ],

  // 3. النبذة التعريفية
  bio: {
    hero: "Front-End Developer specializing in React.js, JavaScript, and responsive modern web interfaces. Experienced in REST API integration, Agile teamwork, and leading frontend development.",
    aboutShort: "Specialized in React.js, Vite, Tailwind CSS, and REST API integrations with a strong eye for UI/UX principles and clean architecture.",
    aboutDetailed: "I am a dedicated Front-End Developer with hands-on experience in building user-focused web interfaces using React.js, modern JavaScript, and Tailwind CSS. I have served as Front-End Team Lead on key projects, collaborating closely in Agile environments using Jira and Git/GitHub, and deploying scalable applications to Vercel."
  },

  // 4. روابط التواصل الاجتماعي
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "fa-brands fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "fa-brands fa-linkedin-in",
    },
    {
      name: "WhatsApp / Phone",
      url: "https://wa.me/201064658759",
      icon: "fa-brands fa-whatsapp",
    },
    {
      name: "Email",
      url: "mailto:samirahussien349@gmail.com",
      icon: "fa-solid fa-envelope",
    }
  ],

  // 5. المهارات والتقنيات (Technical Arsenal)
  skills: [
    { name: "React.js", icon: "fa-brands fa-react", color: "#61dafb", category: "frameworks" },
    { name: "JavaScript (ES6+)", icon: "fa-brands fa-js", color: "#f7df1e", category: "core" },
    { name: "Vite", icon: "fa-solid fa-bolt", color: "#bd34fe", category: "tools" },
    { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "#38bdf8", category: "frameworks" },
    { name: "HTML5", icon: "fa-brands fa-html5", color: "#e34f26", category: "core" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572b6", category: "core" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#7952b3", category: "frameworks" },
    { name: "REST APIs", icon: "fa-solid fa-network-wired", color: "#10b981", category: "core" },
    { name: "Git & GitHub", icon: "fa-brands fa-git-alt", color: "#f05032", category: "tools" },
    { name: "Vercel Deployment", icon: "fa-solid fa-cloud-arrow-up", color: "#ffffff", category: "tools" },
    { name: "Figma & Wireframing", icon: "fa-brands fa-figma", color: "#a259ff", category: "tools" },
    { name: "Agile & Jira", icon: "fa-solid fa-diagram-project", color: "#0052cc", category: "tools" }
  ],

  // المهارات الشخصية (Soft Skills)
  softSkills: [
    "Team Leadership",
    "Problem Solving",
    "Effective Communication",
    "Agile Collaboration",
    "Time Management",
    "User-Centered Design"
  ],

  // 6. المشاريع الحقيقية من السيرة الذاتية (Projects)
  projects: [
    {
      title: "PureBite",
      badge: "Team Lead",
      category: "react",
      description: "Led the Front-End team to build a responsive web interface using React.js & Vite, integrated REST APIs, and managed deployment on Vercel.",
      tags: ["React.js", "Vite", "Tailwind CSS", "REST APIs", "Team Lead"],
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
      liveDemo: "#",
      github: "https://github.com",
      featured: true
    },
    {
      title: "Career Tech Platform",
      badge: "Graduation Project",
      category: "react",
      description: "Graduation project in Digital Pioneers Initiative (MCIT). Developed Course Details, Ranking, Soft Skills, and Instructor Dashboard modules.",
      tags: ["React.js", "JavaScript", "Bootstrap", "REST APIs", "Agile"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      liveDemo: "#",
      github: "https://github.com",
      featured: true
    },
    {
      title: "AI Doctor",
      badge: "Interactive App",
      category: "javascript",
      description: "Interactive front-end medical assistance concept project built with clean modern HTML, CSS, and dynamic JavaScript.",
      tags: ["JavaScript", "HTML5", "CSS3", "Interactive UI"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      liveDemo: "#",
      github: "https://github.com",
      featured: true
    },
    {
      title: "Auto Drive Project",
      badge: "Car Rental",
      category: "javascript",
      description: "Responsive car-rental platform featuring interactive vehicle catalog, booking interface, and responsive layout.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
      liveDemo: "#",
      github: "https://github.com",
      featured: true
    }
  ],

  // 7. الخبرات العملية والتعليم والشهادات (Experience & Timeline)
  timeline: [
    {
      period: "Jul 2026 – Present",
      role: "Front-End Developer Trainee & Team Lead",
      company: "Space Tech",
      description: "Served as Front-End Team Lead for the PureBite project. Built responsive React.js interfaces using Vite and Tailwind CSS, integrated REST APIs, managed GitHub repositories, and deployed to Vercel."
    },
    {
      period: "Feb 2026 – Jun 2026",
      role: "Front-End Developer Trainee",
      company: "Digital Pioneers Initiative (MCIT & Egyptian Military Academy)",
      description: "Developed the Career Tech graduation platform with React.js. Built Course Details, Ranking, Soft Skills, and Instructor Dashboard modules while adhering to UI/UX principles, Agile, Jira, and Git."
    },
    {
      period: "2026",
      role: "Meta Front-End Developer Professional Certificate",
      company: "Meta & Coursera",
      description: "Comprehensive professional program covering React, modern JavaScript, version control, responsive web design, and industry standard development workflows."
    },
    {
      period: "2026",
      role: "Digital Pioneers Initiative Certificate",
      company: "MCIT & Egyptian Military Academy",
      description: "Specialized practical training in modern Front-End engineering, team collaboration, and real-world project delivery."
    },
    {
      period: "Graduated 2018",
      role: "Bachelor of Commerce",
      company: "Beni Suef University",
      description: "Foundational academic education in business, organization, and analytical problem solving."
    }
  ],

  // 8. اللغات
  languages: [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Very Good" }
  ]
};
