import Image from "next/image";
import { galleryImages } from "./galleryData";

interface GalleryGridProps {
  title: string;
  category: keyof typeof galleryImages;
  className?: string;
}

const GalleryGrid = ({ title, category, className }: GalleryGridProps) => {
  return (
    <section className={`mb-16 group ${className}`} id={category}>
      <h2 className="text-3xl font-bold mb-6 relative inline-block pb-2">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-current transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {galleryImages[category].map((img, index) => (
          <div 
            key={index} 
            className="relative aspect-square rounded-lg overflow-hidden group transition-transform duration-300 hover:z-10 hover:scale-105"
          >
            <Image
              src={img}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;