import { useState, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CompanyBackground } from './pages/CompanyBackground';
import { VisiMisi } from './pages/VisiMisi';
import { ExperienceGallery } from './pages/ExperienceGallery';
import { ContactUs } from './pages/ContactUs';
import { SplashScreen } from './components/SplashScreen';

export function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <HashRouter>
        <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company-background" element={<CompanyBackground />} />
              <Route path="/visi-misi" element={<VisiMisi />} />
              <Route path="/experience-gallery" element={<ExperienceGallery />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}
