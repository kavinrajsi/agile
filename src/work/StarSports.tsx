import React, { useState, useEffect } from "react";

const StarSports: React.FC = () => {
  // State to track image loading
  const [isLoading, setIsLoading] = useState(true);

  // Preloading images using link tags
  useEffect(() => {
    const imageUrls = [
      "/assets/star-sports/746765017-star-sports-cover-image.mp4",
      "/assets/star-sports/746765040-tam-1.png",
      "/assets/star-sports/746765044-tam-2.png",
      "/assets/star-sports/746765045-tam-3.png",
      "/assets/star-sports/746765050-tam-4.png",
      "/assets/star-sports/746765052-tam-5.png",
      "/assets/star-sports/746765054-tam-6.png",
      "/assets/star-sports/746765059-tam-7.png",
      "/assets/star-sports/746765063-tam-8.png",
      "/assets/star-sports/746765065-tam-9.png",
      "/assets/star-sports/746765069-tam-10.png",
      "/assets/star-sports/746765292-ss1.png",
      "/assets/star-sports/746765296-ss2.png",
      "/assets/star-sports/746765299-ss3.png",
      "/assets/star-sports/746765306-ss4.png",
      "/assets/star-sports/746765308-ss5.png",
      "/assets/star-sports/746765313-ss6.png",
      "/assets/star-sports/746765321-ss8.png",
      "/assets/star-sports/746765326-ss9.png",
      "/assets/star-sports/746765332-ss10.png",
      "/assets/star-sports/746765225-kan-1.png",
      "/assets/star-sports/746765230-kan-2.png",
      "/assets/star-sports/746765236-kan-3.png",
      "/assets/star-sports/746765239-kan-4.png",
      "/assets/star-sports/746765241-kan-5.png",
      "/assets/star-sports/746765245-kan-6.png",
      "/assets/star-sports/746765246-kan-7.png",
      "/assets/star-sports/746765250-kan-8.png",
      "/assets/star-sports/746765171-tel-1.png",
      "/assets/star-sports/746765175-tel-2.png",
      "/assets/star-sports/746765178-tel-3.png",
      "/assets/star-sports/746765179-tel-4.png",
      "/assets/star-sports/746765185-tel-5.png",
      "/assets/star-sports/746765187-tel-6.png",
      "/assets/star-sports/746765188-tel-7.png",
      "/assets/star-sports/746765190-tel-8.png",
      "/assets/star-sports/746765191-tel-9.png",
      "/assets/star-sports/746765195-tel-10.png",
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
        <h1 className="text-3xl font-bold mb-6">Star Sports</h1>
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
              src="/assets/star-sports/746765017-star-sports-cover-image.mp4"
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
                src="/assets/star-sports/746765040-tam-1.png"
                alt="Star Sports Image 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765044-tam-2.png"
                alt="Star Sports Image 2"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765045-tam-3.png"
                alt="Star Sports Image 3"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765050-tam-4.png"
                alt="Star Sports Image 4"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765052-tam-5.png"
                alt="Star Sports Image 5"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765054-tam-6.png"
                alt="Star Sports Image 6"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765059-tam-7.png"
                alt="Star Sports Image 7"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765063-tam-8.png"
                alt="Star Sports Image 8"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765065-tam-9.png"
                alt="Star Sports Image 9"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765069-tam-10.png"
                alt="Star Sports Image 10"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765292-ss1.png"
                alt="Star Sports Image 11"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765296-ss2.png"
                alt="Star Sports Image 12"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765299-ss3.png"
                alt="Star Sports Image 13"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765306-ss4.png"
                alt="Star Sports Image 14"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765308-ss5.png"
                alt="Star Sports Image 15"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765313-ss6.png"
                alt="Star Sports Image 16"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765321-ss8.png"
                alt="Star Sports Image 17"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765326-ss9.png"
                alt="Star Sports Image 18"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765332-ss10.png"
                alt="Star Sports Image 19"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765225-kan-1.png"
                alt="Star Sports Image 20"
                className="rounded-lg w-full mt-4"
                loading="lazy"
              />
              <img
                src="/assets/star-sports/746765230-kan-2.png"
                alt="Star Sports Image 21"
                className="rounded-lg w-full mt-4"
                loading="lazy"
              />
              <img
                src="/assets/star-sports/746765236-kan-3.png"
                alt="Star Sports Image 22"
                className="rounded-lg w-full mt-4"
                loading="lazy"
              />
              <img
                src="/assets/star-sports/746765239-kan-4.png"
                alt="Star Sports Image 23"
                className="rounded-lg w-full mt-4"
                loading="lazy"
              />
              <img
                src="/assets/star-sports/746765241-kan-5.png"
                alt="Star Sports Image 24"
                className="rounded-lg w-full mt-4"
                loading="lazy"
              />
              <img
                src="/assets/star-sports/746765245-kan-6.png"
                alt="Star Sports Image 25"
                className="rounded-lg w-full mt-4"
                loading="lazy"
              />
              <img
                src="/assets/star-sports/746765246-kan-7.png"
                alt="Star Sports Image 26"
                className="rounded-lg w-full mt-4"
                loading="lazy"
              />
              <img
                src="/assets/star-sports/746765250-kan-8.png"
                alt="Star Sports Image 27"
                className="rounded-lg w-full mt-4"
                loading="lazy"
              />
              <img
                src="/assets/star-sports/746765171-tel-1.png"
                alt="Star Sports Image 1"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765175-tel-2.png"
                alt="Star Sports Image 2"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765178-tel-3.png"
                alt="Star Sports Image 3"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765179-tel-4.png"
                alt="Star Sports Image 4"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765185-tel-5.png"
                alt="Star Sports Image 5"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765187-tel-6.png"
                alt="Star Sports Image 6"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765188-tel-7.png"
                alt="Star Sports Image 7"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765190-tel-8.png"
                alt="Star Sports Image 8"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765191-tel-9.png"
                alt="Star Sports Image 9"
                className="rounded-lg w-full mt-4"
              />
              <img
                src="/assets/star-sports/746765195-tel-10.png"
                alt="Star Sports Image 10"
                className="rounded-lg w-full mt-4"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default StarSports;
