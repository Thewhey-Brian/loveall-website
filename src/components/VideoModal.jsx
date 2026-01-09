import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  const [showControls, setShowControls] = useState(true);
  const hideTimeoutRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Auto-hide controls almost immediately (1 second)
  useEffect(() => {
    if (isOpen) {
      setShowControls(true);

      // Clear any existing timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      // Set new timeout
      hideTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 1000);

      return () => {
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
        }
      };
    } else {
      // Reset when modal closes
      setShowControls(true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    }
  }, [isOpen]);

  // Show controls on mouse movement
  const handleMouseMove = () => {
    setShowControls(true);

    // Clear existing timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    // Set new timeout to hide controls after 1 second of no movement
    hideTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Animated Background Blur */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          {/* Liquid Glass Effect Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Glass Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -80, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 50, 0],
                y: [0, -80, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 right-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
            />
          </div>

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-6xl z-10"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove}
          >
            {/* Liquid Glass Container */}
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Glass Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/10 pointer-events-none" />

              {/* Close Button - Always visible */}
              <motion.button
                initial={{ opacity: 1 }}
                animate={{ opacity: showControls ? 1 : 0.3 }}
                whileHover={{ scale: 1.1, rotate: 90, opacity: 1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-all border border-white/30 shadow-lg"
                aria-label="Close video"
              >
                <X size={24} strokeWidth={2.5} />
              </motion.button>

              {/* Video Header - Auto-hide */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{
                  opacity: showControls ? 1 : 0,
                  y: showControls ? 0 : -20
                }}
                transition={{ duration: 0.3 }}
                className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm p-8 z-10 border-b border-white/10 ${!showControls ? 'pointer-events-none' : ''}`}
              >
                <h3 className="text-white text-3xl font-serif mb-2">
                  LoveAll.ai - The Film
                </h3>
                <p className="text-white/80 text-sm tracking-wide">
                  Discover the future of tennis intelligence
                </p>
              </motion.div>

              {/* Video Player Container */}
              <div className="relative">
                {/* Glass Border Inside */}
                <div className="absolute inset-0 border-8 border-white/5 pointer-events-none z-10 rounded-2xl" />

                {/* Video */}
                <div className="relative w-full bg-black" style={{ paddingTop: '56.25%' }}>
                  <video
                    className="absolute inset-0 w-full h-full"
                    controls
                    autoPlay
                    src={videoSrc}
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Video Footer - Auto-hide */}
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{
                  opacity: showControls ? 1 : 0,
                  y: showControls ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
                className={`bg-gradient-to-t from-black/60 via-black/30 to-transparent backdrop-blur-sm p-6 border-t border-white/10 ${!showControls ? 'pointer-events-none' : ''}`}
              >
                <div className="flex items-center justify-between text-white/70 text-sm">
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span>Press ESC or click outside to close</span>
                  </span>
                  <span className="font-mono text-white/50">LoveAll.ai © 2024</span>
                </div>
              </motion.div>

              {/* Bottom Glass Reflection */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />
            </div>

            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20 blur-3xl -z-10 opacity-50" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
