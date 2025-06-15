import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
// import WorkPage from './pages/WorkPage';
import WorkIndex from './pages/WorkIndex';
import ChennaiSuperKings from "./work/ChennaiSuperKings";
import JoburgSuperKings from "./work/JoburgSuperKings";
import TexasSuperKings from "./work/TexasSuperKings";
import SuperKingsAcademy from "./work/SuperKingsAcademy";
import Aha from "./work/Aha";
import StarSports from "./work/StarSports";
import ServicesPage from './pages/ServiePage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiesPolicy from './pages/CookiesPolicy';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import './styles/globals.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = "AgileMadarth | Sports & Entertainment Marketing";
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <WorkSection />
                <ServicesSection />
                <AboutSection />
                <ContactSection />
              </>
            } />
            {/* <Route path="/work" element={<WorkPage />} /> */}
            <Route path="/work" element={<WorkIndex />} />
            <Route path="/work/chennai-super-kings" element={<ChennaiSuperKings />} />
            <Route path="/work/joburg-super-kings" element={<JoburgSuperKings />} />
            <Route path="/work/texas-super-kings" element={<TexasSuperKings />} />
            <Route path="/work/super-kings-academy" element={<SuperKingsAcademy />} />
            <Route path="/work/aha" element={<Aha />} />
            <Route path="/work/star-sports" element={<StarSports />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;