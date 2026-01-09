import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ currentView, setView, scrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleNavClick = (action) => {
    if (typeof action === 'function') {
      action();
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-500 backdrop-blur-sm ${currentView === 'lab' ? 'text-white bg-stone-900/80 border-b border-white/10' : 'bg-cream/80 border-b border-black/10'}`}>
        <div className="flex items-center space-x-6 md:space-x-12">
          <div
            className="cursor-pointer flex items-center transition-all duration-300 hover:scale-105"
            onClick={() => { setView('home'); setMobileMenuOpen(false); }}
          >
            {currentView === 'lab' ? (
              <img
                src="/lio-logo.png"
                alt="LIO Logo"
                className="h-16 md:h-20 w-auto object-contain drop-shadow-lg"
              />
            ) : (
              <img
                src="/loveall-logo.png"
                alt="LoveAll Logo"
                className="h-16 md:h-20 w-auto object-contain drop-shadow-md opacity-95 hover:opacity-100 transition-opacity"
                style={{ mixBlendMode: 'multiply' }}
              />
            )}
          </div>

          {/* View Switcher - Desktop & Mobile */}
          <div className="flex bg-white/10 rounded-full p-1 backdrop-blur-sm border border-white/20">
            <button
              onClick={() => setView('home')}
              className={`px-3 md:px-4 py-1 rounded-full text-xs uppercase tracking-widest transition-all ${currentView === 'home' ? 'bg-white text-black font-bold shadow-lg' : 'hover:bg-white/10'}`}
            >
              LoveAll
            </button>
            <button
              onClick={() => setView('lab')}
              className={`px-3 md:px-4 py-1 rounded-full text-xs uppercase tracking-widest transition-all ${currentView === 'lab' ? 'bg-orange-600 text-white font-bold shadow-lg' : 'hover:bg-white/10'}`}
            >
              LIO
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-light">
          {currentView === 'home' && (
            ['Manifesto', 'Features', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`transition-colors duration-300 ${currentView === 'lab' ? 'hover:text-orange-500' : 'hover:text-blue-600 text-black'}`}
              >
                {item}
              </button>
            ))
          )}
        </div>

        {/* CTA Button - Desktop */}
        <a
          href="https://lio.loveall.com.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:block px-6 py-2 border rounded-full transition-all duration-300 font-serif italic ${currentView === 'lab' ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white' : 'border-black text-black hover:bg-blue-600 hover:border-blue-600 hover:text-white'}`}
        >
          {currentView === 'lab' ? 'Try LIO Platform' : 'Try LIO Platform'}
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden ${currentView === 'lab' ? 'text-white' : 'text-black'}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-[112px] left-0 right-0 z-40 overflow-hidden ${currentView === 'lab' ? 'bg-stone-900/95 text-white' : 'bg-cream/95 text-black'} backdrop-blur-lg border-b ${currentView === 'lab' ? 'border-white/10' : 'border-black/10'}`}
          >
            <div className="px-6 py-8 space-y-6">
              {/* Navigation Links */}
              <div className="space-y-4">
                {currentView === 'home' && (
                  ['Manifesto', 'Features', 'Gallery', 'Contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavClick(() => scrollTo(item.toLowerCase()))}
                      className="block w-full text-left text-lg uppercase tracking-widest hover:text-blue-600 transition-colors py-2"
                    >
                      {item}
                    </button>
                  ))
                )}
              </div>

              {/* CTA Button - Mobile */}
              <a
                href="https://lio.loveall.com.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center px-6 py-3 border rounded-full transition-all duration-300 font-serif italic ${currentView === 'lab' ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white' : 'border-black text-black hover:bg-blue-600 hover:border-blue-600 hover:text-white'}`}
              >
                {currentView === 'lab' ? 'Try LIO Platform' : 'Try LIO Platform'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
