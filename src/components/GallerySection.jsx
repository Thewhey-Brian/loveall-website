import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const [shuffledItems, setShuffledItems] = useState([]);

  // All gallery items
  const galleryItems = [
    { src: '/gallery/g01.png', type: 'image' },
    { src: '/gallery/g02.png', type: 'image' },
    { src: '/gallery/g03.png', type: 'image' },
    { src: '/gallery/g04.png', type: 'image' },
    { src: '/gallery/g05.png', type: 'image' },
    { src: '/gallery/g06.png', type: 'image' },
    { src: '/gallery/g07.png', type: 'image' },
    { src: '/gallery/g08.GIF', type: 'gif' },
    { src: '/gallery/g09.GIF', type: 'gif' },
    { src: '/gallery/g10.GIF', type: 'gif' },
    { src: '/gallery/g11.GIF', type: 'gif' },
    { src: '/gallery/g12.GIF', type: 'gif' },
  ];

  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    // Shuffle items on mount
    setShuffledItems(shuffleArray(galleryItems));
  }, []);

  // Split into 2 rows
  const itemsPerRow = Math.ceil(shuffledItems.length / 2);
  const row1 = shuffledItems.slice(0, itemsPerRow);
  const row2 = shuffledItems.slice(itemsPerRow);

  // Duplicate items for infinite scroll effect
  const duplicateForScroll = (items) => [...items, ...items, ...items];

  return (
    <section id="gallery" className="py-24 bg-blue-50/50 relative overflow-hidden scroll-mt-32">
      <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-white/0 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-center text-4xl md:text-6xl font-serif mb-4 text-blue-950">The Exhibition</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Witness the power of LIO's AI-driven tennis analysis through real matches and training sessions
        </p>
      </div>

      {/* Scrolling Gallery Rows */}
      <div className="space-y-8">
        {/* Row 1 - Scroll Right */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicateForScroll(row1).map((item, idx) => (
              <GalleryItem key={`row1-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Scroll Left */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [-1920, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {duplicateForScroll(row2).map((item, idx) => (
              <GalleryItem key={`row2-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

// Individual gallery item component
const GalleryItem = ({ item }) => {
  const [aspectRatio, setAspectRatio] = useState('auto');

  const handleImageLoad = (e) => {
    const img = e.target;
    const ratio = img.naturalWidth / img.naturalHeight;

    // Determine size based on aspect ratio
    if (ratio > 1.5) {
      setAspectRatio('landscape'); // Wide
    } else if (ratio < 0.75) {
      setAspectRatio('portrait'); // Tall
    } else {
      setAspectRatio('square'); // Square-ish
    }
  };

  // Size classes based on aspect ratio
  const sizeClasses = {
    landscape: 'w-[500px] h-[300px]',
    portrait: 'w-[300px] h-[450px]',
    square: 'w-[400px] h-[400px]',
    auto: 'w-[400px] h-[400px]', // Default until loaded
  };

  return (
    <motion.div
      className={`relative flex-shrink-0 rounded-lg overflow-hidden shadow-xl group cursor-pointer ${sizeClasses[aspectRatio]}`}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={item.src}
        alt="LIO Tennis Analysis"
        className="w-full h-full object-cover"
        onLoad={handleImageLoad}
        style={{ filter: item.type === 'gif' ? 'none' : 'url(#oil-paint-effect) contrast(1.05)' }}
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <div className="text-xs uppercase tracking-widest mb-2">
            {item.type === 'gif' ? '🎬 Live Analysis' : '📸 Match Insight'}
          </div>
          <p className="font-serif text-lg">LIO in Action</p>
        </div>
      </div>

      {/* GIF indicator badge */}
      {item.type === 'gif' && (
        <div className="absolute top-4 right-4 bg-blue-600/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-blue-300/50">
          GIF
        </div>
      )}
    </motion.div>
  );
};

export default GallerySection;
