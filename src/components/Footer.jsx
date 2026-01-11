import { useState } from 'react';
import { Move, MousePointer } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer id="contact" className="bg-blue-950 text-blue-50 py-20 px-6 border-t border-white/10 relative overflow-hidden scroll-mt-32">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ filter: 'url(#canvas-texture)' }}></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-2">
          <div className="text-3xl font-serif font-bold mb-6">LoveAll<span className="text-blue-400">.ai</span></div>
          <p className="max-w-sm font-light text-blue-200/60 leading-relaxed">
            Reimagining tennis analytics through the intersection of advanced machine learning and classical aesthetics. Your game is art. Treat it that way.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-blue-400 mb-6">Studio</h4>
          <ul className="space-y-4 font-light text-blue-100/70">
            <li className="hover:text-white cursor-pointer transition-colors">Manifesto</li>
            <li className="hover:text-white cursor-pointer transition-colors">Technology</li>
            <li className="hover:text-white cursor-pointer transition-colors">Partnerships</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-blue-400 mb-6">Connect</h4>
          <div className="flex space-x-4 mb-6">
             <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-blue-950 transition-all cursor-pointer">
               <Move size={16} />
             </div>
             <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-blue-950 transition-all cursor-pointer">
               <MousePointer size={16} />
             </div>
          </div>
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              placeholder="Join the waitlist"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              disabled={submitted}
            />
            <button
              type="submit"
              className="absolute right-0 top-2 text-xs uppercase tracking-widest hover:text-blue-500 transition-colors"
              disabled={submitted}
            >
              {submitted ? 'Submitted!' : 'Submit'}
            </button>
          </form>
          {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
          {submitted && <p className="text-green-400 text-xs mt-2">Thanks for joining!</p>}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200/40 space-y-4 md:space-y-0">
        <div>© 2026 LoveAll AI Inc. • v1.0.1</div>
        <div className="font-serif italic">Designed with passion in California.</div>
      </div>
    </footer>
  );
};

export default Footer;
