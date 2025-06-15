import React from "react";
import { Link } from "react-router-dom";

interface WorkItem {
  url: string;
  title: string;
  imageUrl?: string;
  videoUrl: string;
  videoCoverUrl: string;
}

const workItems: WorkItem[] = [
  {
    url: "chennai-super-kings",
    title: "Chennai Super Kings",
    videoUrl: "/assets/chennai/744790214-6m-16m-hero-image.mp4",
    videoCoverUrl: "/assets/chennai/744790214-6m-16m-hero-image.mp4",
  },
  {
    url: "joburg-super-kings",
    title: "Joburg Super Kings",
    videoUrl: "/assets/joburg/744790498-jsk-hero-image.mp4",
    videoCoverUrl: "/assets/joburg/744790498-jsk-hero-image.mp4",
  },
  {
    url: "texas-super-kings",
    title: "Texas Super Kings",
    videoUrl: "/assets/texas/744791096-tsk-cover-image.mp4",
    videoCoverUrl: "/assets/texas/744791096-tsk-cover-image.mp4",
  },
  {
    url: "super-kings-academy",
    title: "Super Kings Academy",
    imageUrl: "/assets/academy/744791519-hero-img.png",
    videoUrl: "",
    videoCoverUrl: "",
  },
  {
    url: "aha",
    title: "AHA",
    videoUrl: "/assets/aha/744792670-aha-thumbnail-v2.mp4",
    videoCoverUrl: "/assets/aha/744792670-aha-thumbnail-v2.mp4",
  },
  {
    url: "star-sports",
    title: "Star Sports",
    videoUrl: "/assets/star-sports/746765017-star-sports-cover-image.mp4",
    videoCoverUrl: "/assets/star-sports/746765017-star-sports-cover-image.mp4",
  },
];

// const WorkIndex = () => {
const WorkIndex: React.FC = () => (
  <section className="py-20 bg-black text-white min-h-screen">
    <div className="container-custom max-w-5xl mx-auto py-16">
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 text-left">
          Our Work
        </h2>
        <p className="text-lg md:text-xl text-white text-left max-w-xl">
          Let’s talk sports, cinema, campaigns—or all three.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {workItems.map((work, index) => (
          <div
            key={work.url}
            className={`col-span-1 ${index % 3 === 2 ? "lg:col-span-2" : ""}`}
          >
            <Link
              to={`/work/${work.url}`}
              className="inline-block text-2xl font-semibold"
            >
              {work.videoUrl ? (
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
                    poster={work.videoCoverUrl ? work.videoCoverUrl : undefined}
                  >
                    <source src={work.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : work.imageUrl ? (
                <div className="mt-4">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="mt-4">
                  <p>No video or image available.</p>
                </div>
              )}
             <h2 className="text-2xl font-semibold mt-4"> {work.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkIndex;
