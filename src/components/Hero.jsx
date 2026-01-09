import { useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoModal from './VideoModal';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
    <section id="manifesto" className="min-h-screen flex items-center justify-center relative px-6 pt-20 scroll-mt-32">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-3 py-1 border border-black/20 rounded-full text-xs uppercase tracking-widest font-semibold bg-white/30 backdrop-blur-sm text-blue-900"
          >
            The Art of Tennis Intelligence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-serif leading-[0.9] text-black mix-blend-overlay opacity-90"
          >
            Every Shot <br />
            <span className="italic font-light ml-4 text-blue-900">is a Brushstroke.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl font-light text-gray-800 max-w-md leading-relaxed"
          >
            We don't just track statistics. We interpret the masterpiece of your game through the lens of advanced computer vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoOpen(true)}
              className="px-8 py-4 bg-black text-white rounded-none hover:bg-blue-900 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Play size={18} />
              <span>Watch the Film</span>
            </motion.button>
            <motion.a
              href="https://lio.loveall.com.cn/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-black text-black hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all inline-flex items-center justify-center"
            >
              Try LIO Platform
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Abstract Tennis Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[400px] md:h-[600px] w-full"
        >
           <motion.div
             whileHover={{ rotate: 0 }}
             className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm border border-white/20 p-4 transform rotate-2 transition-all duration-700 ease-out shadow-2xl"
           >
             <div className="w-full h-full relative overflow-hidden bg-white/50">
               {/* Mock AI Analysis Overlay in painting style */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-blue-400/60 rounded-full animate-pulse absolute top-1/4 left-1/4 filter blur-[2px]"></div>
                  <div className="w-full h-px bg-blue-400 absolute top-1/2 transform -rotate-12"></div>
                  <div className="absolute bottom-10 right-10 text-right">
                    <div className="text-8xl font-bold opacity-15 text-blue-900 tracking-wider">LIO</div>
                  </div>
               </div>
               <img
                 src="/loveall-hero.png"
                 alt="LoveAll Tennis AI Platform"
                 className="w-full h-full object-cover mix-blend-multiply opacity-80"
                 style={{ filter: 'url(#oil-paint-effect)' }}
               />
             </div>
           </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/demo-video.mp4"
      />
    </section>
    </>
  );
};

export default Hero;
