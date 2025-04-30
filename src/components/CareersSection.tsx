import { useEffect, useRef } from 'react';

interface JobCardProps {
  title: string;
}

const JobCard: React.FC<JobCardProps> = ({ title }) => {
  return (
    <div className="service-card group cursor-pointer">
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Full-time</span>
        <span className="text-primary">Apply Now</span>
      </div>
    </div>
  );
};

const CareersSection = () => {
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

  const jobs = [
    "Social Media Strategist",
    "Video Editor (Reel Raja)",
    "Copywriter",
    "Campaign Manager"
  ];

  return (
    <section ref={sectionRef} id="careers" className="section bg-black">
      <div className="container-custom">
        <h2 className="fade-in section-title text-center">
          <span className="text-primary">CAREERS</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="fade-in text-xl text-center text-gray-300 mb-10">
            If you think in meme references like Adhik, speak in rhymes like TR, crack puns like Crazy Mohan — let's get cooking.
          </p>
          
          <h3 className="fade-in text-2xl font-bold mb-6">Open Roles:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <div key={index} className="fade-in" style={{ transitionDelay: `${150 * index}ms` }}>
                <JobCard title={job} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;