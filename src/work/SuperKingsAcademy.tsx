import React, { useState, useEffect } from "react";

const SuperKingsAcademy: React.FC = () => {
  // State to track image loading
  const [isLoading, setIsLoading] = useState(true);

  // Preloading images using link tags
  useEffect(() => {
    const imageUrls = [
      "/assets/academy/744791472-collage-1.mp4",
      "/assets/academy/744791476-collage-2.mp4",
      "/assets/academy/744791481-ext-board.png",
      "/assets/academy/744791492-gym-close-1.png",
      "/assets/academy/744791502-gym-close-2.png",
      "/assets/academy/744791511-gym-wide.png",
      "/assets/academy/744791519-hero-img.png",
      "/assets/academy/744791522-jersey.png",
      "/assets/academy/744791527-reception-thingy.png",
      "/assets/academy/744791534-social-posts.png",
      "/assets/academy/744791540-train-like-a-super-king.png",
      "/assets/academy/744791546-turf-wide.png",
      "/assets/academy/744791552-website-map.mp4",
      "/assets/academy/744791558-website-pc.mp4",
      "/assets/academy/744791562-website-phone.mp4",
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
        <h1 className="text-3xl font-bold mb-6">Super Kings Academy</h1>
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
              src="/assets/academy/744791472-collage-1.mp4"
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
                  src="/assets/academy/744791476-collage-2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <img
                src="/assets/academy/744791481-ext-board.png"
                alt="Academy External Board"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/academy/744791492-gym-close-1.png"
                alt="Academy Gym Close 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/academy/744791502-gym-close-2.png"
                alt="Academy Gym Close 2"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/academy/744791511-gym-wide.png"
                alt="Academy Gym Wide"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/academy/744791519-hero-img.png"
                alt="Academy Hero Image"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/academy/744791522-jersey.png"
                alt="Academy Jersey"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/academy/744791527-reception-thingy.png"
                alt="Academy Reception"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/academy/744791534-social-posts.png"
                alt="Academy Social Posts"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/academy/744791540-train-like-a-super-king.png"
                alt="Academy Train Like a Super King"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/academy/744791546-turf-wide.png"
                alt="Academy Turf"
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
                  src="/assets/academy/744791552-website-map.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
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
                  src="/assets/academy/744791558-website-pc.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
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
                  src="/assets/academy/744791562-website-phone.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SuperKingsAcademy;
