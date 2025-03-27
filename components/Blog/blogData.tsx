// blogData.ts
import { Blog } from "@/types/blog";

const BlogData: Blog[] = [
  {
    _id: 1,
    title: "Learn with these award-winning blog collage courses",
    slug: "learn-collage-courses",
    description: "A brief intro to our award-winning courses.",
    image: "/images.jpg",
    category: "UI/UX",
    link: "/blog/1", // Matches /blog/[slug] where slug is _id
    author: {
      name: "John Doe",
      image: "/images.jpg",
      bio: "UI/UX enthusiast and educator",
      _id: 1,
    },
    tags: ["education", "design"],
    publishedAt: "March 25, 2025",
    body: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem.
    `,
    mainImage: "/images.jpg",
  },
  {
    _id: 2,
    title: "Mastering Modern Web Design Techniques",
    slug: "web-design-techniques",
    description: "Explore the latest trends in web design.",
    image: "/images/blog-02.png",
    category: "Web Design",
    link: "/blog/2", // Matches /blog/[slug] where slug is _id
    author: {
      name: "Jane Smith",
      image: "/images.jpg",
      bio: "Web design expert with 10+ years of experience",
      _id: 2,
    },
    tags: ["web", "design", "trends"],
    publishedAt: "March 26, 2025",
    body: `
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
    `,
    mainImage: "/images.jpg",
  },
  {
    _id: 2,
    title: "Mastering Modern Web Design Techniques",
    slug: "web-design-techniques",
    description: "Explore the latest trends in web design.",
    image: "/images.jpg",
    category: "Web Design",
    link: "/blog/2", // Matches /blog/[slug] where slug is _id
    author: {
      name: "Jane Smith",
      image: "/images/author-02.png",
      bio: "Web design expert with 10+ years of experience",
      _id: 2,
    },
    tags: ["web", "design", "trends"],
    publishedAt: "March 26, 2025",
    body: `
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
    `,
    mainImage: "/images.jpg",
  },
];

export default BlogData;