import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface WorkCardProps {
  title: string;
  description: string;
  stat: string;
  imageUrl: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, stat, imageUrl }) => {
  return (
    <div className="work-card aspect-video">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="work-card-content">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <div className="text-primary text-lg md:text-xl font-bold mb-2">{stat}</div>
        <p className="text-gray-300 mb-4">{description}</p>
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
      title: "Chennai Super Kings",
      stat: "6M → 16M Instagram growth",
      description: "From fandom to frenzy across seasons with an omni-channel approach",
      imageUrl: "https://images.pexels.com/photos/3952072/pexels-photo-3952072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Joburg Super Kings",
      stat: "Global fandom, local love",
      description: "Taking the Super Kings brand of cricket to South Africa",
      imageUrl: "https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Texas Super Kings",
      stat: "Global fandom, local love",
      description: "Introduced the Super Kings' way of Cricket to the cowboys in Texas!",
      imageUrl: "https://images.pexels.com/photos/2433467/pexels-photo-2433467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Tamil Nadu Premier League",
      stat: "1 Billion+ Reach",
      description: "Took the Namma Ooru Gethu to a whole new level for the local league!",
      imageUrl: "https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "AHA Tamil OTT",
      stat: "New platform launch",
      description: "Launched the Tamil App with the campaign \"Thattuna Thamizh Mattume!\"",
      imageUrl: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Star Sports Regional",
      stat: "Multi-language strategy",
      description: "Curated and crafted south Indian sport stories across Tamil, Telugu & Kannada",
      imageUrl: "https://images.pexels.com/photos/3945832/pexels-photo-3945832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section ref={sectionRef} id="work" className="section bg-black">
      <div className="container-custom">
        <h2 className="fade-in section-title text-center">
          <span className="text-primary">WORK</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((work, index) => (
            <div key={index} className="fade-in" style={{ transitionDelay: `${150 * index}ms` }}>
              <WorkCard {...work} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-in">
          <a href="#about" className="btn btn-primary group">
            Explore More
            <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;