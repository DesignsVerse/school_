import GalleryGrid from "@/components/Gallery/GalleryGrid";
import VideoSection from "@/components/Gallery/VideoSection";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 pt-20 pb-12">
      <h1 className="text-4xl font-bold text-center mb-8">School Gallery</h1>

      {/* Extracurricular Section */}
      <GalleryGrid 
        title="Extracurricular Activities" 
        category="activities"
        className="scroll-mt-20"
      />
      
      {/* Dance Section */}
      <GalleryGrid 
        title="Dance & Arts" 
        category="dance"
        className="scroll-mt-20"
      />
      
      {/* Video Section */}
      <VideoSection />
    </div>
  );
}