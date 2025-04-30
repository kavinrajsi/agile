import { Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
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


  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '80px', fontFamily: "'Anek Tamil', sans-serif" }}
    >
      <picture>
        <source srcSet="/assets/hero-banner.webp" type="image/webp" />
        <source srcSet="/assets/hero-banner.jpg" type="image/jpeg" />
        <img
          src="/assets/hero-banner.png"
          alt="Hero background"
          className="hero-background"
        />
      </picture>

      <div 
        className="hero-overlay" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0,0,0,0.2)', 
          zIndex: 1 
        }} 
      />

      <div className="overlay"></div>

      <div className="container-custom relative z-10 py-20 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">Sports & Entertainment Marketing</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>

          <h1 className="fade-in text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Where Creativity <br />
            <span className="text-primary">Meets</span> Agility
          </h1>
          
          <p className="fade-in delay-300 text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            We move at the speed of today's culture. 
            We create with the energy of fandom.
            We bring sports and entertainment brands the hype they deserve.
          </p>

          <div className="flex flex-col items-center gap-8">
            <a 
              href="#services" 
              className="fade-in delay-500 btn btn-primary text-lg px-8"
            >
              Dive right in!
            </a>

            <p className="text-sm text-gray-400">
              ⭐ Trusted by leading sports & entertainment brands
            </p>
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;