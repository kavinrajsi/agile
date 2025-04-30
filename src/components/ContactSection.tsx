import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Mail } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="contact-input resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-full flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
            
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
                    <p className="text-gray-400">contact@agile.madarth.com</p>
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
                  @madarth.agency | @agile.madarth (Coming Soon)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;