import avatar from "../assets/IMG_0271.jpg";

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Devin Aghara",
    title: "Software Engineer | Full Stack Developer",
    tagline: "Building scalable digital experiences and backend systems",
    bio: "Full Stack Developer passionate about building scalable web applications, backend systems, and modern digital experiences. Experienced with MERN Stack, ASP.NET Core MVC, Microservices Architecture, and CI/CD workflows through internships at Motorola Solutions and other industry projects.",
    avatar: avatar,
    resume:
      "https://drive.google.com/file/d/1y2Y_aFc4qCxdA6dolNrSItYXTPZBnyRt/view?usp=sharing",
    location: "Bengaluru, Karnataka",
    email: "devinaghara4@gmail.com",
    phone: "+91 9328861509",
    availability: "Open to opportunities",
  },

  // Social Links
  social: {
    github: "https://github.com/devinaghara",
    linkedin: "https://www.linkedin.com/in/devin-aghara/",
    // portfolio: "",
    leetcode: "https://leetcode.com/u/devinaghara/",
  },

  // Navigation Links
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ],

  // Focus Areas
  focusAreas: [
    "Backend Engineering",
    "Gen AI Application",
    "AI Automation",
    "Microservices Architecture",
    "CI/CD Automation",
    "Scalable System Design",
  ],

  // Skills
  skills: [
    // Frontend
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Shadcn UI", level: 80, category: "Frontend" },
    { name: "Three.js", level: 70, category: "Frontend" },

    // Backend
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Express.js", level: 90, category: "Backend" },
    { name: "ASP.NET Core MVC", level: 90, category: "Backend" },
    { name: "REST APIs", level: 90, category: "Backend" },

    // Gen AI
    { name: "Vertex AI", level: 80, category: "Gen AI" },
    { name: "Prompt Engineering", level: 85, category: "Gen AI" },
    { name: "LLM Integration", level: 80, category: "Gen AI" },
    { name: "AI Workflow Automation", level: 75, category: "Gen AI" },
    
    // DevOps & Architecture
    { name: "Docker", level: 75, category: "DevOps" },
    { name: "GitHub Actions", level: 70, category: "DevOps" },
    { name: "Microservices", level: 80, category: "Architecture" },
    
    // Database
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "MySQL", level: 80, category: "Database" },
    { name: "SQL Server", level: 80, category: "Database" },
    
    // Cloud
    { name: "AWS S3", level: 65, category: "Cloud" },

    // Languages
    { name: "JavaScript", level: 95, category: "Languages" },
    { name: "C#", level: 90, category: "Languages" },
    { name: "Python", level: 75, category: "Languages" },
    { name: "SQL", level: 80, category: "Languages" },


    // Tools
    { name: "Git", level: 90, category: "Tools" },
    { name: "GitHub", level: 90, category: "Tools" },
    { name: "Postman", level: 85, category: "Tools" },
    { name: "Socket.IO", level: 70, category: "Tools" },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "AI-Powered Root Cause Analysis (RCA)",
      description:
        "Intelligent RCA automation solution integrated into the existing automation execution pipeline at Motorola Solutions to eliminate manual failure investigation. Automated extraction of failure reasons, timestamps, screenshots, artifacts, and logs from automation test executions. Integrated Generative AI to analyze failure logs and generate contextual root cause summaries, enabling faster troubleshooting and decision-making.",
      image:"https://res.cloudinary.com/ddxe0b0kf/image/upload/v1780427761/Gemini_Generated_Image_mua6jomua6jomua6_yez0xm.png",
      technologies: [
        "Generative AI",
        "Python",
        "Automation",
        "CI/CD",
        "Log Analysis",
        "RCA Reports",
      ],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      company: "Motorola Solutions",
    },

    {
      id: 2,
      title: "FitBuddy – AI-Powered Healthcare App",
      description:
        "AI-powered healthcare platform built with MERN Stack that delivers personalized meal recommendations using Generative AI. Implemented secure medical record management with AWS S3 and QR-based patient history access for improved healthcare accessibility.",
      image:
        "https://res.cloudinary.com/ddxe0b0kf/image/upload/v1767382804/Gemini_Generated_Image_2s3qq32s3qq32s3q_j8mdt4.png",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "AWS S3",
        "Generative AI",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/devinaghara/FitBuddy-Frontend",
      featured: true,
    },

    {
      id: 3,
      title: "RB Hardware – E-Commerce Platform",
      description:
        "Full-stack MERN e-commerce platform for hardware inventory and order management. Built responsive customer experience with AI-powered support system, authentication, and scalable backend APIs.",
      image:
        "https://res.cloudinary.com/ddxe0b0kf/image/upload/v1720876353/kctpqz4endnkue8lgsz6.jpg",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "AI Chatbot",
      ],
      liveUrl: "https://rbhardware.in",
      githubUrl: "https://github.com/devinaghara/rbHardware",
      featured: true,
    },

    {
      id: 4,
      title: "Product Management System",
      description:
        "Enterprise-style product and invoice management system built using ASP.NET Core MVC with JWT and Google Authentication. Includes customer management, billing workflows, and role-based secure access.",
      image:
        "https://res.cloudinary.com/ddxe0b0kf/image/upload/v1767383000/Gemini_Generated_Image_i05w8fi05w8fi05w_rq1gxx.png",
      technologies: [
        "ASP.NET Core MVC",
        "C#",
        "SQL Server",
        "JWT Authentication",
        "Google Authentication",
      ],
      liveUrl: "https://partyproduct.runasp.net/Account/Login",
      githubUrl: "https://github.com/devin-personal/ProductManagement",
      featured: false,
    },
  ],

  // Work Experience
  experience: [
    {
      id: 1,
      company: "Motorola Solutions",
      role: "Trainee Intern",
      duration: "Feb 2026 - Present",
      location: "Bengaluru, Karnataka",
      description:
        "Working with the Unified Communications (UC) team on automation and development initiatives to improve system monitoring, integrations, and operational efficiency within enterprise communication platforms.",
      highlights: [
        "Developing automation tools to reduce manual operational workflows",
        "Working on monitoring and integration solutions within Unified Communications systems",
        "Collaborating with enterprise teams to improve reliability and operational efficiency",
        "Learning CI/CD workflows and scalable enterprise architecture practices",
      ],
    },

    {
      id: 2,
      company: "Weybee Solutions",
      role: "Software Engineer Intern",
      duration: "Aug 2025 - Dec 2025",
      location: "Ahmedabad, Gujarat",
      description:
        "Worked on developing scalable web applications using ASP.NET Core MVC architecture, focusing on backend engineering and database-driven systems.",
      highlights: [
        "Developed backend logic and controllers using ASP.NET Core MVC",
        "Implemented SQL database-driven features following industry best practices",
        "Worked on scalable backend architecture and clean code practices",
      ],
    },

    {
      id: 3,
      company: "Undergraduate Student Fellowship (UGSF)",
      role: "Student Research Fellow",
      duration: "Sep 2024 - Apr 2025",
      location: "India",
      description:
        "Worked under faculty mentorship on innovative research-driven software solutions focused on solving real-world problems.",
      highlights: [
        "Applied software engineering concepts to practical problem statements",
        "Worked on research-driven project development",
        "Strengthened technical documentation and presentation skills",
      ],
    },

    {
      id: 4,
      company: "Mayora Infotech",
      role: "Frontend Developer Intern",
      duration: "May 2024 - Jun 2024",
      location: "India",
      description:
        "Focused on building responsive and user-friendly frontend interfaces using React.js and modern frontend technologies.",
      highlights: [
        "Designed responsive UI components using React.js",
        "Integrated frontend with backend APIs",
        "Improved feature delivery through collaborative development",
      ],
    },
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "Charotar University of Science and Technology (CHARUSAT)",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2022 - 2026",
      location: "Changa, Gujarat",
      description:
        "Pursuing Computer Science Engineering with focus on software engineering, scalable systems, backend development, and modern web technologies.",
      grade: "CGPA: 8.72/10",
    },

    {
      id: 2,
      institution: "Modi School",
      degree: "Higher Secondary (12th Grade) - Science",
      duration: "2022",
      location: "Rajkot, Gujarat",
      description:
        "Completed higher secondary education with Physics, Chemistry, and Mathematics.",
      grade: "Percentage: 70%",
    },
  ],

  // Certifications
  certifications: [
    {
      id: 1,
      title: "Foundations of Project Management",
      issuer: "Coursera (Google)",
      date: "Mar 2026",
      credentialUrl: "",
      skills: ["Project Management", "Agile", "Planning"],
    },

    {
      id: 2,
      title: "Introduction to Prompt Engineering for Generative AI",
      issuer: "LinkedIn Learning",
      date: "Feb 2026",
      credentialUrl: "",
      skills: ["Prompt Engineering", "Generative AI", "LLMs"],
    },

    {
      id: 3,
      title: "Introduction to Artificial Intelligence",
      issuer: "LinkedIn Learning",
      date: "Feb 2026",
      credentialUrl: "",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "AI Fundamentals",
      ],
    },

    {
      id: 4,
      title: "AWS Academy Graduate - AWS Academy Cloud Developing",
      issuer: "Amazon Web Services (AWS)",
      date: "Feb 2025",
      credentialUrl: "",
      skills: ["AWS", "Cloud Development", "Cloud Architecture"],
    },
  ],

  // Leadership & Activities
  leadership: [
    {
      id: 1,
      title: "Training & Placement Coordinator",
      organization: "CHARUSAT",
      description:
        "Coordinated placement activities and communication between students and recruiters.",
    },

    {
      id: 2,
      title: "Event Coordinator",
      organization: "University Events",
      description:
        "Managed and coordinated university technical and cultural events including Cognizance and Spoural.",
    },
  ],
};

export default portfolioData;
