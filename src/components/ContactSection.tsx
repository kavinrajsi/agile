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
    <section ref={sectionRef} id="contact" className="section bg-tertiary">
      <div className="container-custom">
        <h2 className="fade-in section-title text-center">
          <span className="text-primary">CONTACT US</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="fade-in text-xl text-center text-gray-300 mb-10">
            Let's talk sports, cinema, campaigns—or all three.
          </p>
          
          <div className="fade-in space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-400">
                Have a project in mind? Want to collaborate? Or just want to say hello? We'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400">contact@AgileMadarth.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-400">Alamelumangapuram, Mylapore, Chennai</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <p className="text-gray-400">
                @madarth.agency | @AgileMadarth (Coming Soon)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;