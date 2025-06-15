import React from "react";

const ChennaiSuperKings: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white min-h-screen">
      <div className="container-custom max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Chennai Super Kings</h1>

        <div className="mt-4 relative">
          {/* Video Cover Image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(/assets/chennai/744790214-6m-16m-hero-image.mp4)`,
              height: "200px",
            }}
          >
            <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-40 rounded-lg">
              <span className="text-white text-4xl">▶</span> {/* Play button */}
            </div>
          </div>

          {/* Video */}
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
      </div>
    </section>
  );
};

export default ChennaiSuperKings;
