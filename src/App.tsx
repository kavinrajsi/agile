import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  useEffect(() => {
    document.title = "Agile.Madarth | Sports & Entertainment Marketing";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <AboutSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;