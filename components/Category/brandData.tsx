import { Category } from "@/types/category"; // Adjust the path if needed

// Define the category data with the Category type
const categoryData: Category[] = [
  {
    id: 1,
    title: "Standard Curriculum Delivery",
    description: "Comprehensive academic programs aligned with educational boards, delivered by expert faculty using innovative methods.",
    icon: "/images.jpg", // Replace with your icon
    bgColor: "bg-blue-500",
    hoverImage: "/images.jpg", // Replace with your hover image
  },
  {
    id: 2,
    title: "Future-Ready Learning",
    description: "Empowering students with STEM, coding, AI, and digital skills to thrive in a tech-driven global future.",
    icon: "/images.jpg",
    bgColor: "bg-orange-500",
    hoverImage: "/images.jpg",
  },
  {
    id: 3,
    title: "Student Development Programs",
    description: "Shaping confident, compassionate leaders through personality development, moral education, and life skill training.",
    icon: "/images.jpg",
    bgColor: "bg-red-500",
    hoverImage: "/images.jpg",
  },
  {
    id: 4,
    title: "Co-curricular & Extracurricular",
    description: "Nurturing creativity and talent through sports, arts, music, drama, clubs, and cultural events.",
    icon: "/images.jpg",
    bgColor: "bg-green-500",
    hoverImage: "/images.jpg",
  },
  {
    id: 5,
    title: "Student Support Services",
    description: "Holistic care with mental health support, health checkups, transport, and active parent-teacher engagement.",
    icon: "/images.jpg",
    bgColor: "bg-purple-500",
    hoverImage: "/images.jpg",
  },
];


export default categoryData;