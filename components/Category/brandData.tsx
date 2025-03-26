import { Category } from "@/types/category"; // Adjust the path if needed

// Define the category data with the Category type
const categoryData: Category[] = [
  {
    id: 1,
    title: "Book Exclusive",
    description: "We can provide you with a handyan in London.",
    icon: "/images/categories/book-icon.svg", // Replace with your icon
    bgColor: "bg-blue-500",
    hoverImage: "/images.jpg", // Replace with your hover image
  },
  {
    id: 2,
    title: "Exclusive Party",
    description: "We can provide you with a handyan in London.",
    icon: "/images/categories/party-icon.svg",
    bgColor: "bg-orange-500",
    hoverImage: "/images.jpg",
  },
  {
    id: 3,
    title: "Exclusive Context",
    description: "We can provide you with a handyan in London.",
    icon: "/images/categories/context-icon.svg",
    bgColor: "bg-red-500",
    hoverImage: "/images.jpg",
  },
  {
    id: 4,
    title: "Private Lesson",
    description: "We can provide you with a handyan in London.",
    icon: "/images/categories/lesson-icon.svg",
    bgColor: "bg-green-500",
    hoverImage: "/images.jpg",
  },
  {
    id: 5,
    title: "Music Conference",
    description: "We can provide you with a handyan in London.",
    icon: "/images/categories/music-icon.svg",
    bgColor: "bg-purple-500",
    hoverImage: "/images.jpg",
  },
  {
    id: 6,
    title: "School Study",
    description: "We can provide you with a handyan in London.",
    icon: "/images/categories/study-icon.svg",
    bgColor: "bg-teal-500",
    hoverImage: "/images.jpg",
  },
];

export default categoryData;