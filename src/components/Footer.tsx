import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              Agile.<span className="text-primary">Madarth</span>
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Agile.Madarth. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;