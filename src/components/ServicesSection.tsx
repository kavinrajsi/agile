import { useEffect, useRef } from 'react';
import { BarChart3, Film, Rocket, Share2, CalendarClock } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="mb-6 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

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
    <section ref={sectionRef} id="services" className="section bg-tertiary">
      <div className="container-custom">
        <h2 className="fade-in section-title text-center">
          <span className="text-primary">SERVICES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="fade-in" style={{ transitionDelay: `${150 * index}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-in">
          <a href="#work" className="btn btn-primary">
            Here's how we do it!
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;