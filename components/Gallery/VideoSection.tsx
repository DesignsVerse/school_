import { videos } from "./galleryData";

const VideoSection = () => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6 relative inline-block pb-2">
        Video Highlights
        <span className="absolute bottom-0 left-0 w-full h-1 bg-current transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {videos.map((video, index) => (
          <div 
            key={index} 
            className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <video 
              controls 
              className="w-full h-full object-cover"
              preload="metadata"
              poster={video.poster}
            >
              {video.sources.map((source, sourceIndex) => (
                <source
                  key={sourceIndex}
                  src={source.src}
                  type={source.type}
                />
              ))}
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;