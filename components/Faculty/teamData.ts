// data/teamData.ts
export type TeamMember = {
    name: string;
    about: string;
    phone: string;
    imageSrc: string;
    role: string;
    socialLinks?: { platform: string; icon: string }[];
    description?: string;
    highlights?: string[];
  };
  
  export const teamMembers: TeamMember[] = [
    {
      name: "Mr. Stanley Johnson",
      about: "Mr. Stanley Johnson, the visionary Director of Bethel Secondary School, is dedicated to nurturing academic excellence and character development.",
      phone: "+91 9983055878",
      imageSrc: "/images/school/sir.jpg",
      role: "Director",
      socialLinks: [
        { platform: "facebook", icon: "f" },
        { platform: "linkedin", icon: "in" },
        { platform: "twitter", icon: "🐦" },
        { platform: "pinterest", icon: "📌" },
      ],
      description:"",
      highlights: [
        "Visionary leadership rooted in values.",
        "Empowering students through purpose-driven education.",
        "Building future leaders with global insight.",
        "Champion of academic and moral excellence.",
        "Fostering innovation with discipline and heart."
      ],      
    },
    {
      name: "Mrs. Sheeja Stanley",
      about: "Mrs. Sheeja Stanley, Principal of Bethel Secondary School, leads with compassion and a commitment to holistic student growth.",
      phone: "+91 ",
      imageSrc: "/images/school/ma'am.jpg",
      role: "Principal",
      description: "",
      highlights: [
        "Dedicated to nurturing every child's potential.",
        "Academic excellence with a caring touch.",
        "Inspiring holistic growth through values.",
        "Champion of disciplined and inclusive learning.",
        "Leading with empathy, shaping future minds."
      ]
      ,
    },
    {
      name: "Jahid Hasan",
      about: "Dedicated to student success and innovation.",
      phone: "+0987654321",
      imageSrc: "/images.jpg",
      role: "Teacher",
      description: "Jahid focuses on innovative teaching methods...",
      highlights: ["Highlight A", "Highlight B", "Highlight C"],
    },
    {
      name: "Moumita Rahi",
      about: "Passionate about education and technology.",
      phone: "+1122334455",
      imageSrc: "/images.jpg",
      role: "Teacher",
      description: "Moumita integrates tech into her teaching...",
      highlights: ["Highlight X", "Highlight Y", "Highlight Z"],
    },
    {
      name: "Mahi soni",
      about: "Committed to fostering a love for learning.",
      phone: "+2233445566",
      imageSrc: "/images.jpg",
      role: "Teacher",
      description: "Mahi creates engaging learning environments...",
      highlights: ["Highlight 1", "Highlight 2", "Highlight 3"],
    },
    {
      name: "Istiak ",
      about: "Expert in curriculum development.",
      phone: "+3344556677",
      imageSrc: "/images.jpg",
      role: "Teacher",
      description: "Istiak designs impactful curricula...",
      highlights: ["Highlight A", "Highlight B", "Highlight C"],
    },
    {
      name: "Shakil ",
      about: "Focuses on student-centered learning.",
      phone: "+4455667788",
      imageSrc: "/images.jpg",
      role: "Teacher",
      description: "Shakil prioritizes student engagement...",
      highlights: ["Highlight X", "Highlight Y", "Highlight Z"],
    },
  ];