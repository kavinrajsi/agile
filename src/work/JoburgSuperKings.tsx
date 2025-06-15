import React, { useState, useEffect } from "react";

const JoburgSuperKings: React.FC = () => {
  // State to track image loading
  const [isLoading, setIsLoading] = useState(true);

  // Preloading images using link tags
  useEffect(() => {
    const imageUrls = [
      "/assets/joburg/744790469-tifo-1.png",
      "/assets/joburg/744790473-tifo-2.png",
      "/assets/joburg/744790477-branding-1.png",
      "/assets/joburg/744790480-bus-1.png",
      "/assets/joburg/744790483-bus-2.png",
      "/assets/joburg/744790486-carnival.png",
      "/assets/joburg/744790490-ig-creatives.png",
      "/assets/joburg/744790492-jersey-1.png",
      "/assets/joburg/744790496-jersey-2.png",
      "/assets/joburg/744790498-jsk-hero-image.mp4",
      "/assets/joburg/744790501-reels.mp4",
      "/assets/joburg/744790507-stadium-branding-1",
      "/assets/joburg/744790515-stadium-branding-2",
      "/assets/joburg/744790519-stat-posts.png",
      "/assets/joburg/744790520-trophy.png",
    ];

    // Preload images by creating new Image objects
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setIsLoading(false);
      };
    });
  }, []);

  return (
    <section className="py-20 bg-black text-white min-h-screen">
      <div className="container-custom max-w-5xl mx-auto py-16">
        <h1 className="text-3xl font-bold mb-6">Joburg Super Kings</h1>
        <div className="mt-4 relative">
          <video
            width="100%"
            autoPlay
            muted
            loop
            className="rounded-lg mt-4"
            controls={false}
            disablePictureInPicture
            preload="auto"
          >
            <source
              src="/assets/joburg/744790498-jsk-hero-image.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-8">
          {isLoading ? (
            <div className="skeleton-loader">
              {/* Skeleton loader styles */}
              <div className="animate-pulse space-y-4">
                <div className="bg-gray-700 h-64 rounded-lg"></div>
                <div className="bg-gray-700 h-64 rounded-lg"></div>
                <div className="bg-gray-700 h-64 rounded-lg"></div>
                {/* Add more skeletons as needed */}
              </div>
            </div>
          ) : (
            <>
              <img
                src="/assets/joburg/744790469-tifo-1.png"
                alt="Joburg Super Kings Tifo 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/joburg/744790473-tifo-2.png"
                alt="Joburg Super Kings Tifo 2"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/joburg/744790477-branding-1.png"
                alt="Joburg Super Kings Branding 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/joburg/744790480-bus-1.png"
                alt="Joburg Super Kings Bus 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/joburg/744790483-bus-2.png"
                alt="Joburg Super Kings Bus 2"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/joburg/744790486-carnival.png"
                alt="Joburg Super Kings Carnival"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/joburg/744790490-ig-creatives.png"
                alt="Joburg Super Kings IG Creatives"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/joburg/744790492-jersey-1.png"
                alt="Joburg Super Kings Jersey 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/joburg/744790496-jersey-2.png"
                alt="Joburg Super Kings Jersey 2"
                className="rounded-lg w-full mt-4"
              />
              <video
                width="100%"
                autoPlay
                muted
                loop
                className="rounded-lg mt-4"
                controls={false}
                disablePictureInPicture
                preload="auto"
              >
                <source
                  src="/assets/joburg/744790501-reels.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <img
                src="/assets/joburg/744790507-stadium-branding-1.png"
                alt="Joburg Super Kings Branding 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/joburg/744790515-stadium-branding-2.png"
                alt="Joburg Super Kings Branding 2"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/joburg/744790519-stat-posts.png"
                alt="Joburg Super Kings Stat Posts"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/joburg/744790520-trophy.png"
                alt="Joburg Super Kings Trophy"
                className="rounded-lg w-full mt-4"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JoburgSuperKings;
