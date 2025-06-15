import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Assuming you are using react-router for navigation

// Define the properties (props) that WorkCard will receive
interface WorkCardProps {
  url: string; // The URL or identifier for the work item
  title: string; // The title of the work item
  description?: string; // Optional description of the work item
  stat?: string; // Optional statistics or data related to the work item
  imageUrl?: string; // Optional URL for an image associated with the work item
  videoUrl?: string; // Optional URL for the video associated with the work item
  videoCoverUrl?: string; // Optional URL for a cover image of the video (used as a poster)
}

// WorkCard component: Displays an individual work item with either an image or video
const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  stat,
  imageUrl,
  videoUrl,
  videoCoverUrl,
}) => {
  return (
    <div className="work-card aspect-video">
      {/* If videoUrl is provided, display a video */}
      {videoUrl ? (
        <video
          className="w-full h-full object-cover rounded-lg"
          src={videoUrl}
          poster={videoCoverUrl} // Show a poster image until the video is played
          muted
          loop
          playsInline
          autoPlay
        />
      ) : imageUrl ? (
        // If videoUrl is not provided, display the image
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        // If neither videoUrl nor imageUrl is provided, show a fallback message
        <div>No media available</div>
      )}

      {/* Display content below the media (video or image) */}
      <div className="work-card-content mt-4">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>

        {/* Optionally display stat if provided */}
        {stat && (
          <div className="text-primary text-lg md:text-xl font-bold mb-2">
            {stat}
          </div>
        )}

        {/* Optionally display description if provided */}
        {description && <p className="text-gray-300 mb-4">{description}</p>}
      </div>
    </div>
  );
};

// WorkSection component: Contains all the work items (cards) and is responsible for rendering them
const WorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // Ref to access the section DOM for IntersectionObserver

  // Setting up the IntersectionObserver to detect when elements come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear"); // Add "appear" class when element is visible
          }
        });
      },
      { threshold: 0.1 } // Trigger the observer when 10% of the element is visible
    );

    // Select elements with the "fade-in" class to observe
    const fadeElements = sectionRef.current?.querySelectorAll(".fade-in");
    fadeElements?.forEach((el) => observer.observe(el));

    // Cleanup observer when the component is unmounted or when dependencies change
    return () => {
      fadeElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Array of work items (data) to be displayed in the section
  const workItems = [
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

  return (
    <section ref={sectionRef} id="work" className="section bg-black">
      <div className="container-custom">
        {/* Use grid layout for displaying work items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-6">
          {/* Map over workItems and render each WorkCard */}
          {workItems.map((work, index) => (
            <div
              key={work.url}
              className={`col-span-1 ${index % 3 === 2 ? "lg:col-span-2" : ""}`}
            >
              {/* Link to individual work details page */}
              <Link
                to={`/work/${work.url}`}
                className="inline-block text-2xl font-semibold"
              >
                {/* Use the WorkCard component to render each work item */}
                <WorkCard
                  url={work.url}
                  title={work.title}
                  videoUrl={work.videoUrl}
                  videoCoverUrl={work.videoCoverUrl}
                  imageUrl={work.imageUrl}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Explore More button */}
        <div className="mt-12 text-center fade-in">
          <a href="/work" className="btn btn-primary group">
            Explore More
            <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
