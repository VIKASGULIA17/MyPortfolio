// Mock data for Vikas Gulia's Portfolio
export const portfolioData = {
  personal: {
    name: "Vikas Gulia",
    title: "Data Scientist",
    tagline: "Turning data into stories and code into experiences.",
    email: "vikas.gulia@example.com",
    phone: "+91 9876543210",
    location: "Delhi, India",
    github: "https://github.com/VIKASGULIA17",
    linkedin: "https://www.linkedin.com/in/vikas-gulia-b28255298",
    instagram: "https://www.instagram.com/orewa__vikas",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    resume: "/resume.pdf"
  },

  about: {
    description: "I'm a passionate Data Scientist and Web Developer with expertise in turning complex data into actionable insights and building seamless digital experiences. Currently pursuing B.C.A. and constantly exploring the intersection of data science and web technologies.",
    highlights: [
      "3+ years of experience in data science and web development",
      "Built 5+ production-ready applications",
      "Expertise in ML model deployment and web integration",
      "Strong background in full-stack development"
    ],
    stats: [
      { label: "Projects Completed", value: "15+" },
      { label: "Technologies Mastered", value: "20+" },
      { label: "Lines of Code", value: "50K+" },
      { label: "Coffee Cups", value: "∞" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Ani-GPT",
      description: "Conversational AI website leveraging the Gemini API for intelligent chat interactions with modern UI/UX design.",
      tech: ["React", "Gemini API", "JavaScript", "CSS3"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      github: "https://github.com/VIKASGULIA17/ani-gpt",
      live: "https://ani-gpt.vercel.app",
      category: "AI/ML",
      featured: true
    },
    {
      id: 2,
      title: "NexVerse",
      description: "Official website for IITM-Janakpuri's tech society with event management and member portal.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
      github: "https://github.com/VIKASGULIA17/nexverse",
      live: "https://nexverse.tech",
      category: "Web Development",
      featured: true
    },
    {
      id: 3,
      title: "Personal Development Tracker",
      description: "Comprehensive platform for tracking holistic growth across skills, health, and finance with data visualization.",
      tech: ["React", "Supabase", "Chart.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com/VIKASGULIA17/dev-tracker",
      live: "https://dev-tracker.vercel.app",
      category: "Full Stack",
      featured: true
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description: "Content-based movie recommendation system with interactive Streamlit dashboard and advanced filtering.",
      tech: ["Python", "Streamlit", "pandas", "scikit-learn"],
      image: "https://images.unsplash.com/photo-1489599511770-4bd69c7ea2a7?w=600&h=400&fit=crop",
      github: "https://github.com/VIKASGULIA17/movie-recommender",
      live: "https://movie-rec-vg.streamlit.app",
      category: "Data Science",
      featured: false
    },
    {
      id: 5,
      title: "Student Marks Performance Prediction",
      description: "ML model with Streamlit dashboard to predict student performance based on various factors.",
      tech: ["Python", "scikit-learn", "Streamlit", "pandas"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      github: "https://github.com/VIKASGULIA17/student-prediction",
      live: "https://student-pred-vg.streamlit.app",
      category: "Data Science",
      featured: false
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "C++", level: 80, icon: "⚡" },
      { name: "HTML", level: 95, icon: "🌐" },
      { name: "CSS/Sass", level: 90, icon: "🎨" }
    ],
    frameworks: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "Tailwind CSS", level: 90, icon: "💨" },
      { name: "Streamlit", level: 85, icon: "🎯" }
    ],
    dataScience: [
      { name: "pandas", level: 90, icon: "🐼" },
      { name: "scikit-learn", level: 85, icon: "🤖" },
      { name: "TensorFlow", level: 80, icon: "🧠" },
      { name: "Keras", level: 80, icon: "🔥" }
    ],
    tools: [
      { name: "Git/GitHub", level: 95, icon: "🔧" },
      { name: "Supabase", level: 85, icon: "⚡" },
      { name: "Power BI", level: 80, icon: "📊" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Linux", level: 85, icon: "🐧" }
    ]
  },

  education: {
    degree: "Bachelor of Computer Applications",
    institution: "IITM Janakpuri",
    year: "2022 - 2025",
    status: "3rd Year (Currently Pursuing)",
    gpa: "8.5/10",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Machine Learning",
      "Web Development",
      "Software Engineering",
      "Computer Networks"
    ],
    achievements: [
      "Tech Society Core Member",
      "Best Project Award 2023",
      "Hackathon Winner",
      "Academic Excellence Award"
    ]
  },

  blogs: [
    {
      id: 1,
      title: "Building Scalable React Applications with Modern Patterns",
      excerpt: "Exploring advanced React patterns and state management techniques for large-scale applications.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      slug: "scalable-react-patterns"
    },
    {
      id: 2,
      title: "Machine Learning Pipeline Optimization for Production",
      excerpt: "Best practices for deploying and maintaining ML models in production environments.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      slug: "ml-pipeline-optimization"
    },
    {
      id: 3,
      title: "Data Visualization Techniques for Better Insights",
      excerpt: "Creating compelling data stories through effective visualization strategies and tools.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      slug: "data-visualization-insights"
    }
  ]
};