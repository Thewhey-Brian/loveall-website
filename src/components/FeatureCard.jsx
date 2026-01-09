import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, desc, delay = 0 }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative p-8 bg-white/40 backdrop-blur-md border border-white/20 hover:bg-white/60 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-0 bg-blue-600 group-hover:h-full transition-all duration-500 ease-out"></div>
      <Icon className="w-10 h-10 mb-6 text-blue-800 opacity-80 group-hover:scale-110 group-hover:text-white transition-all duration-500 relative z-10" />
      <h3 className="text-2xl font-serif font-bold mb-3 relative z-10 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-gray-700 font-light leading-relaxed relative z-10 group-hover:text-blue-50 transition-colors">{desc}</p>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-100/50 to-transparent transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>
    </motion.div>
  );
};

export default FeatureCard;
