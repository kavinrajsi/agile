import React, { useState, useEffect } from "react";

const Aha: React.FC = () => {
  // State to track image/video loading
  const [isLoading, setIsLoading] = useState(true);

  // Preloading assets (images and videos)
  useEffect(() => {
    const mediaUrls = [
      "/assets/aha/744792621-2.mp4", 
      "/assets/aha/744792627-3.mp4", 
      "/assets/aha/744792633-5.mp4", 
      "/assets/aha/744792647-6.mp4", 
      "/assets/aha/744792658-8.mp4", 
      "/assets/aha/744792661-9.mp4", 
      "/assets/aha/744792670-aha-thumbnail-v2.mp4", 
      "/assets/aha/744792681-artboard-1.png", 
      "/assets/aha/744792686-bus-shelter-final-mockup.webp", 
      "/assets/aha/744792693-newspaper.webp"
    ];

    // Preload all assets (images and videos)
    mediaUrls.forEach((url) => {
      const media = url.endsWith(".mp4") ? document.createElement("video") : new Image();
      media.src = url;
      media.onload = () => {
        setIsLoading(false);
      };
    });
  }, []);

  return (
    <section className="py-20 bg-black text-white min-h-screen">
      <div className="container-custom max-w-5xl mx-auto py-16">
        <h1 className="text-3xl font-bold mb-6">Aha</h1>
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
              src="/assets/aha/744792670-aha-thumbnail-v2.mp4"
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
              {/* Video for MP4 */}
              <div className="mt-4">
                <video
                  width="100%"
                  controls
                  className="rounded-lg"
                  preload="auto"
                >
                  <source
                    src="/assets/aha/744792621-2.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-4">
                <video
                  width="100%"
                  controls
                  className="rounded-lg"
                  preload="auto"
                >
                  <source
                    src="/assets/aha/744792627-3.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-4">
                <video
                  width="100%"
                  controls
                  className="rounded-lg"
                  preload="auto"
                >
                  <source
                    src="/assets/aha/744792633-5.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-4">
                <video
                  width="100%"
                  controls
                  className="rounded-lg"
                  preload="auto"
                >
                  <source
                    src="/assets/aha/744792647-6.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-4">
                <video
                  width="100%"
                  controls
                  className="rounded-lg"
                  preload="auto"
                >
                  <source
                    src="/assets/aha/744792658-8.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mt-4">
                <video
                  width="100%"
                  controls
                  className="rounded-lg"
                  preload="auto"
                >
                  <source
                    src="/assets/aha/744792661-9.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Image for PNG and WebP */}
              <img
                src="/assets/aha/744792681-artboard-1.png"
                alt="Aha Artboard"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/aha/744792686-bus-shelter-final-mockup.webp"
                alt="Aha Bus Shelter Mockup"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/aha/744792693-newspaper.webp"
                alt="Aha Newspaper"
                className="rounded-lg w-full mt-4"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Aha;
