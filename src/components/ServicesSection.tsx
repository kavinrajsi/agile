import React, { useEffect, useRef, useState } from 'react';

interface ServiceRowProps {
  title: string;
  description: string;
  floatingImage?: boolean;
  expanded: boolean;
  onClick: () => void;
}

const ServiceRow: React.FC<ServiceRowProps> = ({ title, description, floatingImage, expanded, onClick }) => (
  <div
    className={`group flex flex-col md:flex-row items-center md:items-stretch px-4 md:px-8 py-6 md:py-8 border-b border-gray-200 last:border-0 relative transition-colors cursor-pointer ${expanded ? 'bg-gray-800/60' : 'hover:bg-gray-100/60'}`}
    style={{ minHeight: '80px' }}
    onClick={onClick}
    tabIndex={0}
    role="button"
    aria-expanded={expanded}
  >
    <div className="w-full md:w-1/4 flex-shrink-0 flex items-center justify-start text-lg md:text-xl font-semibold text-white mb-2 md:mb-0">
      {title}
    </div>
    <div className="w-full md:w-3/4 text-white text-base flex items-center relative">
      {description}
      {floatingImage && (
        <img
          src={`/assets/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}.jpg`}
          alt={title}
          className="hidden md:block absolute -top-8 right-24 w-40 rounded-lg rotate-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ pointerEvents: 'none' }}
        />
      )}
    </div>
    {expanded && (
      <div className="w-full mt-4 text-gray-300 md:col-span-2">
        {/* Placeholder for more detail, for now just reusing description */}
        <span className="font-bold">{title}</span>
        <p>{description}</p>
      </div>
    )}
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
  const [selected, setSelected] = useState<string | null>(null);

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
      description: "Groundbreaking gameplans that turn ideas into high-impact moments. We play offense and defense with insight, instinct, and intent."
    },
    {
      title: "Creative Storytelling",
      description: "Reels, teasers, memes or tweets—we craft stories that move people. Fans don't just watch; they engage and rally behind what we create."
    },
    {
      title: "Brand Activations",
      description: "From stadium takeovers to Insta booms—we build experiences. Physical or digital, we make sure your moment happens."
    },
    {
      title: "Social Media Buzz",
      description: "We're scroll-stoppers. Trend-setters. We create for culture, not just calendars."
    },
    {
      title: "Experiential Events",
      description: "From trailer launches to watch parties. We make fandom work at every level."
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-16 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 text-left">Our Services</h2>
          <p className="text-lg md:text-xl text-white text-left max-w-xl">Let’s talk sports, cinema, campaigns—or all three.</p>
        </div>
        <div>
          {services.map((service) => (
            <ServiceRow
              key={service.title}
              title={service.title}
              description={service.description}
              floatingImage={true}
              expanded={selected === service.title}
              onClick={() => setSelected(selected === service.title ? null : service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;