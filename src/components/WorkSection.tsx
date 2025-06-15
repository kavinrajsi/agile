import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

interface WorkCardProps {
  url: string;
  title: string;
  description?: string;
  stat?: string;
  imageUrl?: string;
  videoUrl: string;
  videoCoverUrl: string;
}

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
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <video
          className="w-full h-full object-cover rounded-lg"
          src={videoCoverUrl}
          poster={videoCoverUrl} // Show a poster image until video is played
          muted
          loop
          playsInline
          autoPlay
        />
      )}
      <div className="work-card-content mt-4">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        {stat && <div className="text-primary text-lg md:text-xl font-bold mb-2">{stat}</div>}
        {description && <p className="text-gray-300 mb-4">{description}</p>}
      </div>
    </div>
  );
};

const WorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in');
    fadeElements?.forEach((el) => observer.observe(el));

    return () => {
      fadeElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const workItems = [
    {
      url: 'chennai-super-kings',
      title: 'Chennai Super Kings',
      videoUrl: '/assets/chennai/744790214-6m-16m-hero-image.mp4',
      videoCoverUrl: '/assets/chennai/744790214-6m-16m-hero-image.mp4',
    },
    {
      url: 'joburg-super-kings',
      title: 'Joburg Super Kings',
      videoUrl: '/assets/joburg/744790498-jsk-hero-image.mp4',
      videoCoverUrl: '/assets/joburg/744790498-jsk-hero-image.mp4',
    },
    {
      url: 'texas-super-kings',
      title: 'Texas Super Kings',
      videoUrl: '/assets/texas/744791096-tsk-cover-image.mp4',
      videoCoverUrl: '/assets/texas/744791096-tsk-cover-image.mp4',
    },
    {
      url: 'super-kings-academy',
      title: 'Super Kings Academy',
      imageUrl: '/assets/academy/744791519-hero-img.png',
      videoUrl: '',
      videoCoverUrl: '',
    },
    {
      url: 'aha',
      title: 'AHA',
      videoUrl: '/assets/aha/744792670-aha-thumbnail-v2.mp4',
      videoCoverUrl: '/assets/aha/744792670-aha-thumbnail-v2.mp4',
    },
  ];

  return (
    <section ref={sectionRef} id="work" className="section bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-6">
          {workItems.map((work, index) => (
            <div
              key={work.url}
              className={`col-span-1 ${index % 3 === 2 ? 'lg:col-span-2' : ''}`}
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
