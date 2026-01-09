import { Aperture, Activity, Brush } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="features" className="py-24 px-6 relative scroll-mt-32" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end border-b border-black/10 pb-8"
        >
          <div>
            <span className="block text-blue-700 font-serif italic mb-2">The Technique</span>
            <h2 className="text-4xl md:text-5xl font-light">Computational <br/><span className="font-serif font-bold">Impressionism</span></h2>
          </div>
          <p className="max-w-md mt-6 md:mt-0 text-gray-600 text-sm leading-relaxed">
            Our AI engine decomposes the game into millions of data points, then reconstructs them into actionable insights, much like a painter layering colors to create depth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={Aperture}
            title="Vision Synthesis"
            desc="Computer vision that sees beyond the lines. Tracking spin rate, ball trajectory, and player biomechanics with artistic precision."
            delay={0}
          />
          <FeatureCard
            icon={Activity}
            title="Rhythm & Flow"
            desc="Analyze the cadence of your rallies. We visualize momentum shifts as fluid dynamics, helping you control the tempo."
            delay={0.2}
          />
          <FeatureCard
            icon={Brush}
            title="Style Transfer"
            desc="Compare your technique to the masters. Our neural networks overlay pro biometrics onto your footage for direct comparison."
            delay={0.4}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
