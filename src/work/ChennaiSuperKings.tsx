import React, { useState, useEffect } from "react";

const ChennaiSuperKings: React.FC = () => {
  // State to track image loading
  const [isLoading, setIsLoading] = useState(true);

  // Preloading images using link tags
  useEffect(() => {
    const imageUrls = [
      "/assets/chennai/744790224-bus1.webp",
      "/assets/chennai/744790227-bus2.webp",
      "/assets/chennai/744790246-den-coming.webp",
      "/assets/chennai/744790252-environmental-branding-1.webp",
      "/assets/chennai/744790259-environmental-branding-2.webp",
      "/assets/chennai/744790263-jersey-back.webp",
      "/assets/chennai/744790269-jersey-close-up.webp",
      "/assets/chennai/744790275-jersey-front.webp",
      "/assets/chennai/744790280-matchday-posts-2023.webp",
      "/assets/chennai/744790291-special-creatives.webp",
      "/assets/chennai/744790300-wc-matchday-posters.webp",
      "/assets/chennai/744790307-whistle-parakkattum-1.webp",
      "/assets/chennai/744790315-whistle-parakkattum-2.webp",
      "/assets/chennai/744790322-whistle-podu-express-1.webp",
      "/assets/chennai/744790326-whistle-podu-express-2.webp"
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
        <h1 className="text-3xl font-bold mb-6">Chennai Super Kings</h1>
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
              src="/assets/chennai/744790214-6m-16m-hero-image.mp4"
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
                src="/assets/chennai/744790224-bus1.webp"
                alt="Chennai Super Kings Bus 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790227-bus2.webp"
                alt="Chennai Super Kings Bus 2"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790246-den-coming.webp"
                alt="Chennai Super Kings Den Coming"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790252-environmental-branding-1.webp"
                alt="Chennai Super Kings Environmental Branding 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790259-environmental-branding-2.webp"
                alt="Chennai Super Kings Environmental Branding 2"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790263-jersey-back.webp"
                alt="Chennai Super Kings Jersey Back"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790269-jersey-close-up.webp"
                alt="Chennai Super Kings Jersey Close Up"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790275-jersey-front.webp"
                alt="Chennai Super Kings Jersey Front"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790280-matchday-posts-2023.webp"
                alt="Chennai Super Kings Matchday Posts 2023"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790291-special-creatives.webp"
                alt="Chennai Super Kings Special Creatives"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790300-wc-matchday-posters.webp"
                alt="Chennai Super Kings WC Matchday Posters"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790307-whistle-parakkattum-1.webp"
                alt="Chennai Super Kings Whistle Parakkattum 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790315-whistle-parakkattum-2.webp"
                alt="Chennai Super Kings Whistle Parakkattum 2"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790322-whistle-podu-express-1.webp"
                alt="Chennai Super Kings Whistle Podu Express 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/chennai/744790326-whistle-podu-express-2.webp"
                alt="Chennai Super Kings Whistle Podu Express 2"
                className="rounded-lg w-full mt-4"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChennaiSuperKings;
