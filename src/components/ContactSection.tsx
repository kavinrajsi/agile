import { useEffect, useRef } from 'react';
import { MapPin, Mail } from 'lucide-react';

const ContactSection = () => {
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
    <section ref={sectionRef} id="contact" className="py-20 bg-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div className="order-2 md:order-1 flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-left">Let's Talk</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl text-left">
            Let’s talk sports, cinema, campaigns—or all three.
            </p>
            <div className="flex flex-col gap-6 mt-2">
              <div>
                <div className="text-sm text-gray-400 mb-1">Contact</div>
                <div className="text-lg md:text-xl font-semibold text-white border-b border-gray-700 pb-1 w-fit">contact@agile.madarth.com</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Address</div>
                <div className="text-lg md:text-xl text-gray-200">Alamelumangapuram, Mylapore, Chennai</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Social</div>
                <div className="text-lg md:text-xl text-gray-200">@madarth.agency | @agile.madarth <span className='text-gray-400'>(Coming Soon)</span></div>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            <img src="/assets/contact-us-hero.webp" alt="Contact" width={547} height={595} className="shadow-lg object-cover" style={{ width: '547px', height: '595px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;