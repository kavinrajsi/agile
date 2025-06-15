
import React, { useState, useEffect } from "react";

const TexasSuperKings: React.FC = () => {
  // State to track image loading
  const [isLoading, setIsLoading] = useState(true);

  // Preloading images using link tags
  useEffect(() => {
    const imageUrls = [
      "/assets/texas/744791096-tsk-cover-image.mp4",
      "/assets/texas/744791106-tsk-jersey-1-1.png",
      "/assets/texas/744791111-tsk-jersey-1.png",
      "/assets/texas/744791116-1_tsk-merch.png",
      "/assets/texas/744791120-2_tsk-merch.png",
      "/assets/texas/744791131-3_tsk-merch.png",
      "/assets/texas/744791136-4_tsk-merch.png",
      "/assets/texas/744791142-carnival_tsk.png",
      "/assets/texas/744791150-ig-creatives_tsk.png",
      "/assets/texas/744791157-tsk-reels.mp4",
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
        <h1 className="text-3xl font-bold mb-6">Texas Super Kings</h1>
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
              src="/assets/texas/744791096-tsk-cover-image.mp4"
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
                src="/assets/texas/744791106-tsk-jersey-1-1.png"
                alt="Texas Super Kings Jersey 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/texas/744791111-tsk-jersey-1.png"
                alt="Texas Super Kings Jersey 2"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/texas/744791116-1_tsk-merch.png"
                alt="Texas Super Kings Merch 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/texas/744791120-2_tsk-merch.png"
                alt="Texas Super Kings Merch 2"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/texas/744791131-3_tsk-merch.png"
                alt="Texas Super Kings Merch 3"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/texas/744791136-4_tsk-merch.png"
                alt="Texas Super Kings Merch 4"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/texas/744791142-carnival_tsk.png"
                alt="Texas Super Kings Carnival"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/texas/744791150-ig-creatives_tsk.png"
                alt="Texas Super Kings IG Creatives"
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
                  src="/assets/texas/744791157-tsk-reels.mp4"
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

export default TexasSuperKings;
