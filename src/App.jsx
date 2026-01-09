import { useState } from 'react';
import OilPaintingFilter from './components/OilPaintingFilter';
import LivingBackground from './components/LivingBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import ResearchShowcase from './components/ResearchShowcase';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';

const App = () => {
  const [view, setView] = useState('home'); // 'home' or 'lab'

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ErrorBoundary>
      <SEO
        title={view === 'lab' ? 'LIO - Research Division | LoveAll.ai' : 'LoveAll.ai - The Art of Tennis Intelligence'}
        description={view === 'lab' ? 'LIO Research Division: Advancing tennis biomechanics through experimental AI research and computer vision.' : 'Every shot is a brushstroke. We interpret the masterpiece of your game through advanced computer vision and AI analytics.'}
        keywords="tennis, AI, computer vision, sports analytics, biomechanics, machine learning, tennis coaching, performance analysis"
      />
      <div className={`min-h-screen font-sans transition-colors duration-700 overflow-x-hidden ${view === 'lab' ? 'bg-[#1c1917] selection:bg-orange-500 selection:text-white' : 'bg-[#f3f0e6] selection:bg-blue-200 selection:text-blue-900'}`}>
        <OilPaintingFilter />
        <LivingBackground mode={view} />
        <Navigation currentView={view} setView={setView} scrollTo={scrollTo} />

        {/* Content Switcher */}
        <main className="relative z-10 transition-opacity duration-500">
          {view === 'home' ? (
            <div className="animate-in fade-in duration-700">
              <Hero />
              <Features />
              <GallerySection />
              <Footer />
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <ResearchShowcase />
            </div>
          )}
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;
