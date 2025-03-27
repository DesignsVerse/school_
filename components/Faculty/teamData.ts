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
      name: "Md Rubel Islam",
      about:
        "Phis are bound to ensue; and equal blame belongs to those who through weakness of the will, the same.",
      phone: "+582005415241",
      imageSrc: "/images.jpg",
      role: "Teacher",
      socialLinks: [
        { platform: "facebook", icon: "f" },
        { platform: "linkedin", icon: "in" },
        { platform: "twitter", icon: "🐦" },
        { platform: "pinterest", icon: "📌" },
      ],
      description:
        "There are many variations of passages of Lorem Ipsum Fastby. There are many variations of passages of Lorem Ipsum Fastby we are the fast to mane injected humour, or randomised coved ceilings, are bound to ensue; and equal blame belongs can to be erwtwg mont be fao go not be hie best to those who through weakness. There are many variations of passages of Lorem Ipsum Fastby. There are many variations of passages of Lorem Ipsum Fastby we are the fast to mane injected humour, or randomised coved ceilings, are bound to ensue; and equal blame belongs can to be erwtwg mont.",
      highlights: [
        "Business school’s Institut constructivism.",
        "Media in this school solution.",
        "We give management school best.",
        "Business school’s Institut constructivism.",
        "Media in this school solution.",
      ],
    },
    {
      name: "Narata Barat",
      about: "Experienced educator with a passion for teaching.",
      phone: "+1234567890",
      imageSrc: "/images.jpg",
      role: "Teacher",
      description: "Narata has been teaching for over 10 years...",
      highlights: ["Highlight 1", "Highlight 2", "Highlight 3"],
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
      name: "Mahi Islam",
      about: "Committed to fostering a love for learning.",
      phone: "+2233445566",
      imageSrc: "/images.jpg",
      role: "Teacher",
      description: "Mahi creates engaging learning environments...",
      highlights: ["Highlight 1", "Highlight 2", "Highlight 3"],
    },
    {
      name: "Istiak Ahmed",
      about: "Expert in curriculum development.",
      phone: "+3344556677",
      imageSrc: "/images.jpg",
      role: "Teacher",
      description: "Istiak designs impactful curricula...",
      highlights: ["Highlight A", "Highlight B", "Highlight C"],
    },
    {
      name: "Shakil Ahmed",
      about: "Focuses on student-centered learning.",
      phone: "+4455667788",
      imageSrc: "/images.jpg",
      role: "Teacher",
      description: "Shakil prioritizes student engagement...",
      highlights: ["Highlight X", "Highlight Y", "Highlight Z"],
    },
  ];