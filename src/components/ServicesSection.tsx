import { useEffect, useRef } from 'react';
import { BarChart3, Film, Rocket, Share2, CalendarClock } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

import { ArrowRightCircle } from 'lucide-react';

const ServiceRow: React.FC<{
  title: string;
  description: string;
  floatingImage?: boolean;
}> = ({ title, description, floatingImage }) => (
  <div
    className={"group flex flex-col md:flex-row items-center md:items-stretch px-4 md:px-8 py-6 md:py-8 border-b last:border-0 relative transition-colors hover:bg-gray-100/60 cursor-pointer"}
    style={{ minHeight: '80px' }}
  >
    <div className="w-full md:w-1/4 flex-shrink-0 flex items-center justify-start text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-0">
      {title}
    </div>
    <div className="w-full md:w-3/4 text-gray-500 text-base flex items-center relative">
      {description}
      {floatingImage && (
        <img
          src={`/assets/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}.jpg`}
          alt={title}
          className="hidden md:block absolute -top-8 right-24 w-40 rounded-lg rotate-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ pointerEvents: 'none' }}
        />
      )}
      <span className="ml-2 text-2xl text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none">→</span>
    </div>
    {floatingImage && (
      <img
        src={`/assets/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}.jpg`}
        alt={title}
        className="block md:hidden absolute -top-16 right-2 w-32 rounded-lg rotate-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ pointerEvents: 'none' }}
      />
    )}
  </div>
);


const ServicesSection = () => {
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

  const services = [
    {
      title: "Strategic Planning",
      description: "Groundbreaking gameplans that turn ideas into high-impact moments. We play offense and defense with insight, instinct, and intent.",
      icon: <BarChart3 size={42} />
    },
    {
      title: "Creative Storytelling",
      description: "Reels, teasers, memes or tweets—we craft stories that move people. Fans don't just watch; they engage and rally behind what we create.",
      icon: <Film size={42} />
    },
    {
      title: "Brand Activations",
      description: "From stadium takeovers to Insta booms—we build experiences. Physical or digital, we make sure your moment happens.",
      icon: <Rocket size={42} />
    },
    {
      title: "Social Media Buzz",
      description: "We're scroll-stoppers. Trend-setters. We create for culture, not just calendars.",
      icon: <Share2 size={42} />
    },
    {
      title: "Experiential Events",
      description: "From trailer launches to watch parties. We make fandom work at every level.",
      icon: <CalendarClock size={42} />
    }
  ];


  return (
    <section ref={sectionRef} id="services" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Our Services
        </h2>
        <div>
          {services.map((service) => (
            <ServiceRow
              key={service.title}
              title={service.title}
              description={service.description}
              floatingImage={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;