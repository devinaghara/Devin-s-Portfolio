import avatar from "../assets/IMG_0271.jpg";

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Devin Aghara",
    title: "Full Stack Developer",
    tagline: "Building digital experiences that matter",
    bio: "I'm a passionate developer with 1 years of experience crafting beautiful, performant web applications. I specialize in React, Node.js,ASP.Net and modern technologies.",
    // avatar: "https://drive.google.com/uc?export=view&id=11nf5UR7lVHTUZd7INvA7cT07jJcvZE6j",
    avatar: avatar,
    resume: "https://drive.google.com/file/d/1XF2oP0ZfkDWhqrF0KViHcH6eBIcRMbal/view?usp=sharing",
    location: "Ahmedabad, Gujrat",
    email: "devinaghara4@gmail.com",
    phone: "+91 9328861509",
    availability: "Open to opportunities",
  },

  // Social Links
  social: {
    github: "https://github.com/devinaghara",
    linkedin: "https://www.linkedin.com/in/devin-aghara/",
    twitter: "https://twitter.com/devinaghara",
  },

  // Navigation Links
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],

  // Skills
  skills: [
    { name: "React", level: 95, category: "Frontend" },
    { name: "ASP.Net MVC", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 95, category: "Languages" },
    { name: "C#", level: 90, category: "Languages" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "MySQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "AWS", level: 55, category: "Cloud" },
    { name: "Figma", level: 70, category: "Design" },
    { name: "Three.js", level: 70, category: "Frontend" },
  ],

  // Projects
  projects: [
  {
    id: 1,
    title: "FitBuddy – AI-Powered Healthcare App",
    description:
      "A MERN-based healthcare application powered by Generative AI that provides personalized meal recommendations and secure medical record management. Designed to improve patient accessibility and healthcare efficiency.",
    image: "https://res.cloudinary.com/ddxe0b0kf/image/upload/v1767382804/Gemini_Generated_Image_2s3qq32s3qq32s3q_j8mdt4.png",
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
    id: 2,
    title: "RB Hardware – E-Commerce Platform",
    description:
      "A full-stack MERN e-commerce platform built for managing hardware inventory, customer orders, and interactions. Includes an AI-powered helpdesk and a responsive UI for a seamless shopping experience.",
    image: "https://res.cloudinary.com/ddxe0b0kf/image/upload/v1720876353/kctpqz4endnkue8lgsz6.jpg",
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
    id: 3,
    title: "Product Management System",
    description:
      "A robust product and invoice management system built using ASP.NET Core MVC. Features secure authentication, dynamic billing, and role-based access control for efficient business operations.",
    image: "https://res.cloudinary.com/ddxe0b0kf/image/upload/v1767383000/Gemini_Generated_Image_i05w8fi05w8fi05w_rq1gxx.png",
    technologies: [
      "ASP.NET Core MVC",
      "C#",
      "SQL Server",
      "JWT Authentication",
      "Google Authentication",
    ],
    liveUrl: "https://partyproduct.runasp.net/Account/Login",
    githubUrl: "https://github.com/devin-personal/ProductManagement",
    featured: true,
  },
],


  // Work Experience
  experience: [
    {
      id: 1,
      company: "Weybee Solutions",
      role: "Software Engineer Intern",
      duration: "Aug 2025 - Dec 2025",
      location: "Ahmedabad, Gujarat",
      description:
        "Worked on developing scalable web applications using ASP.NET Core and MVC architecture, focusing on clean backend design and performance.",
      highlights: [
        "Developed backend logic and controllers using ASP.NET Core MVC",
        "Implemented SQL database-driven features following industry best practices",
        "Gained hands-on experience with scalable application architecture",
      ],
    },
    {
      id: 2,
      company: "Undergraduate Student Fellowship (UGSF)",
      role: "Student Research Fellow",
      duration: "Sep 2024 - Apr 2025",
      location: "India",
      description:
        "Awarded a UGSF scholarship to work on an innovative project under faculty mentorship, focusing on practical problem-solving and research-driven development.",
      highlights: [
        "Worked under direct faculty mentorship on an innovative project",
        "Applied software engineering concepts to real-world problem statements",
        "Strengthened research, documentation, and presentation skills",
      ],
    },
    {
      id: 3,
      company: "Mayora Infotech",
      role: "Frontend Developer Intern",
      duration: "May 2024 - Jun 2024",
      location: "India",
      description:
        "Focused on building responsive and user-friendly interfaces using modern frontend technologies, collaborating closely with designers and backend teams.",
      highlights: [
        "Designed and implemented responsive UI using React.js",
        "Integrated APIs with frontend components for seamless data flow",
        "Improved development speed and feature delivery through collaboration",
      ],
    },
  ],


  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at StartupXYZ",
      avatar: "/testimonials/sarah.jpg",
      content:
        "Alex is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "Product Manager at TechCorp",
      avatar: "/testimonials/michael.jpg",
      content:
        "Working with Alex has been a pleasure. They understand both the technical and business aspects, making them invaluable to any team.",
    },
  ],
};

export default portfolioData;
