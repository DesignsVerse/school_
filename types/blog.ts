export type Author = {
  _id: number;
  name: string;
  image?: string;
  bio?: string;
};

export type Blog = {
  _id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  link: string;
  author: {
    name: string;
    image: string;
    bio: string;
    _id: number;
  };
  tags: string[];
  publishedAt: string;
  content: { heading: string; description: string }[];
  mainImage: string;
}