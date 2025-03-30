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
  metadata?: string;
  body?: string;
  mainImage?: string;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  description: string;
  image: string;
  category: string;
  link: string;
};