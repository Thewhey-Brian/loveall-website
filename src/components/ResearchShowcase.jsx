import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, Github, ChevronDown, ChevronUp, Play, Sparkles, Zap } from 'lucide-react';

const ResearchShowcase = () => {
  const [expandedId, setExpandedId] = useState(null);

  const researchWorks = [
    {
      id: 'tracknet-v5',
      title: 'TrackNet V5',
      subtitle: 'Advanced Ball Tracking for Tennis',
      year: '2025',
      venue: 'arXiv',
      authors: 'LIO Research Team',
      abstract: 'TrackNet V5 represents the latest advancement in real-time tennis ball tracking using deep learning. Our improved architecture achieves state-of-the-art performance in challenging conditions including motion blur, occlusion, and varying lighting.',
      keyFeatures: [
        'Real-time tracking at 60+ FPS',
        'Robust to occlusion and blur',
        'Multi-scale feature fusion',
        'Temporal consistency modeling'
      ],
      metrics: [
        { label: 'Accuracy', value: '98.7%' },
        { label: 'FPS', value: '62' },
        { label: 'Latency', value: '16ms' }
      ],
      links: {
        paper: 'https://arxiv.org/pdf/2512.02789',
      },
      video: '/research/tracknetv5/tracknetv5-demo.mp4',
      color: 'orange'
    },
    {
      id: 'sgnlite',
      title: 'SGNLite',
      subtitle: 'Lightweight Skeleton-Based Swing Detection',
      year: '2024',
      venue: 'LIO Research',
      authors: 'LIO Research Team',
      abstract: 'SGNLite is a lightweight transformer model for skeleton-based action recognition, specifically designed for tennis swing detection. It processes 2D pose sequences to detect and classify different types of tennis strokes in real-time with minimal computational overhead.',
      keyFeatures: [
        'Graph-free transformer design',
        '2D input only - no depth sensors',
        'Real-time inference at 4,000+ FPS',
        'Detects 6 tennis stroke types'
      ],
      metrics: [
        { label: 'Accuracy', value: '81.2%' },
        { label: 'FPS', value: '4,262' },
        { label: 'Parameters', value: '3.2M' }
      ],
      links: {
        github: 'https://github.com/Thewhey-Brian/SGNLite_Tennis',
      },
      images: {
        architecture: '/research/sgnlite/SGNLite_Arch.png',
        pipeline: '/research/sgnlite/SGNLite_pipeline.png'
      },
      video: '/research/sgnlite/sgnlite_demo.mp4',
      color: 'orange'
    },
    {
      id: 'mamba-tracknet',
      title: 'Mamba-TrackNet',
      subtitle: 'Streaming Ball Tracking with State Space Models',
      year: '2026',
      venue: 'LIO Research',
      authors: 'LIO Research Team',
      abstract: 'Mamba-TrackNet introduces state space models to tennis ball tracking, enabling stateful temporal processing across video frames. The streaming architecture maintains hidden states between triplets for improved temporal consistency and reduced latency.',
      keyFeatures: [
        'Streaming MIMO architecture',
        'Stateful temporal processing',
        'Motion-aware input channels',
        'Bidirectional Mamba blocks'
      ],
      metrics: [
        { label: 'Accuracy', value: '91.7%' },
        { label: 'FPS', value: '85' },
        { label: 'Parameters', value: '4.3M' }
      ],
      links: {
        github: 'https://github.com/LIO-Research/Mamba-TrackNet',
      },
      images: {
        architecture: '/research/mamba-tracknet/mamba-tracknet.png'
      },
      video: '/research/mamba-tracknet/mamba-tracknet-demo.mp4',
      color: 'orange'
    },
    {
      id: 'mamba-tal',
      title: 'Mamba-TAL',
      subtitle: 'Temporal Action Localization for Tennis',
      year: '2026',
      venue: 'LIO Research',
      authors: 'LIO Research Team',
      abstract: 'Mamba-TAL applies state space models to temporal action localization in tennis. Using bidirectional Mamba blocks, the model processes pose sequences to detect and classify tennis strokes with precise temporal boundaries.',
      keyFeatures: [
        'Bidirectional state space processing',
        'Frame-level classification + regression',
        'Pose-based input (17 keypoints)',
        'DIoU loss for temporal boundaries'
      ],
      metrics: [
        { label: 'Frame Accuracy', value: '94.2%' },
        { label: 'Detection F1', value: '89.3%' },
        { label: 'Parameters', value: '4.6M' }
      ],
      links: {
        github: 'https://github.com/LIO-Research/Mamba-TAL',
      },
      images: {
        architecture: '/research/mamba-tal/mamba-tal.png'
      },
      video: '/research/mamba-tal/mamba-tal-demo.mp4',
      color: 'orange'
    }
  ];

  return (
    <section className="min-h-screen pt-32 px-6 text-stone-300 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-stone-700/50 pb-12 mb-16 relative"
          style={{ zIndex: 100 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <div className="text-sm font-mono text-orange-500 mb-4 tracking-widest font-bold uppercase">RESEARCH DIVISION</div>
              <h1 className="text-6xl md:text-8xl font-sans font-bold text-white tracking-tighter mb-6">LIO</h1>
              <p className="text-lg text-stone-300 max-w-2xl leading-relaxed">
                Advancing tennis biomechanics through experimental AI research and computer vision.
                Open-source, peer-reviewed, and built for the future of tennis.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="font-mono text-xs text-stone-500 leading-relaxed text-right">
                EST. 2024 // EXPERIMENTAL BRANCH <br/>
                FOCUS: CV + ML RESEARCH <br/>
                STATUS: ACTIVE
              </p>
            </div>
          </div>
        </motion.div>

        {/* LIO Studio Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <a
            href="https://liostudio.loveall.com.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative border border-orange-500/50 bg-gradient-to-r from-orange-900/20 via-stone-900/50 to-orange-900/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 group">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="text-orange-400 animate-pulse" size={24} />
                      <span className="text-xs font-mono text-orange-500 tracking-widest font-bold uppercase">Featured Tool</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                      LIO Studio
                    </h2>

                    <p className="text-lg text-stone-300 mb-6 max-w-2xl">
                      Fast video effect processing tool powered by LIO's research. Upload your tennis videos and get instant AI-powered analysis, tracking, and swing detection.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-1 bg-stone-950/50 border border-stone-700 text-stone-300 text-xs md:text-sm font-mono">
                        <Zap size={14} className="text-orange-400" />
                        <span>Real-time Processing</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-stone-950/50 border border-stone-700 text-stone-300 text-xs md:text-sm font-mono">
                        <Play size={14} className="text-orange-400" />
                        <span>Ball Tracking</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-stone-950/50 border border-stone-700 text-stone-300 text-xs md:text-sm font-mono">
                        <Sparkles size={14} className="text-orange-400" />
                        <span>Swing Detection</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
                    <div className="px-6 py-3 bg-orange-600 text-white font-mono font-semibold text-sm md:text-base flex items-center gap-2 group-hover:bg-orange-500 transition-colors w-full md:w-auto justify-center">
                      <span>Launch Studio</span>
                      <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            </div>
          </a>
        </motion.div>

        {/* Research Papers Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent"></div>
            <h2 className="text-lg md:text-2xl font-mono font-bold text-orange-400 uppercase tracking-wider whitespace-nowrap">Research Publications</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent"></div>
          </div>
        </motion.div>

        {/* Research Cards */}
        <div className="space-y-8">
          {researchWorks.map((work, idx) => (
            <ResearchCard
              key={work.id}
              work={work}
              isExpanded={expandedId === work.id}
              onToggle={() => setExpandedId(expandedId === work.id ? null : work.id)}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Coming Soon Teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center pb-24"
        >
          <div className="inline-block px-6 py-3 border border-dashed border-stone-700 bg-stone-900/50">
            <p className="text-stone-500 font-mono text-sm">
              More groundbreaking research coming soon...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Individual Research Card Component
const ResearchCard = ({ work, isExpanded, onToggle, delay }) => {
  const colorClasses = {
    orange: {
      border: 'border-stone-700/50 hover:border-orange-500/50',
      bg: 'bg-stone-900/50',
      accent: 'bg-orange-600',
      text: 'text-white',
      accentText: 'text-orange-400',
      buttonHover: 'hover:bg-orange-600'
    }
  };

  const colors = colorClasses[work.color] || colorClasses.orange;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`border ${colors.border} ${colors.bg} backdrop-blur-sm overflow-hidden transition-all duration-300`}
    >
      {/* Card Header */}
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h2 className={`text-3xl md:text-4xl font-sans font-bold ${colors.text}`}>
                {work.title}
              </h2>
              <span className={`${colors.accent} text-white text-xs font-bold px-3 py-1`}>
                {work.year}
              </span>
            </div>
            <p className="text-lg text-stone-300 mb-2">{work.subtitle}</p>
            <p className="text-sm font-mono text-stone-500">{work.venue} · {work.authors}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            {work.video && (
              <button
                onClick={() => !isExpanded && onToggle()}
                className={`flex items-center gap-2 px-4 py-2 bg-stone-800/50 border border-stone-700 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all text-stone-300`}
              >
                <Play size={18} />
                <span className="text-sm font-mono font-semibold">Demo</span>
              </button>
            )}
            {work.links.paper && (
              <a
                href={work.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 bg-stone-800/50 border border-stone-700 ${colors.buttonHover} hover:text-white transition-all text-stone-300`}
              >
                <FileText size={18} />
                <span className="text-sm font-mono font-semibold">Paper</span>
              </a>
            )}
            {work.links.github && (
              <a
                href={work.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 bg-stone-800/50 border border-stone-700 ${colors.buttonHover} hover:text-white transition-all text-stone-300`}
              >
                <Github size={18} />
                <span className="text-sm font-mono font-semibold">Code</span>
              </a>
            )}
            <button
              onClick={onToggle}
              className={`flex items-center gap-2 px-4 py-2 ${colors.accent} text-white hover:opacity-90 transition-all`}
            >
              <span className="text-sm font-mono font-semibold">
                {isExpanded ? 'Less' : 'More'}
              </span>
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {work.metrics.map((metric, idx) => (
            <div key={idx} className="text-center p-4 bg-stone-950/50 border border-stone-800">
              <div className={`text-3xl font-bold ${colors.accentText}`}>{metric.value}</div>
              <div className="text-sm font-mono text-stone-500 mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Abstract Preview */}
        <p className="text-stone-400 leading-relaxed">
          {work.abstract}
        </p>
      </div>

      {/* Expandable Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 border-t border-stone-800">
              {/* Key Features */}
              <div className="mb-8">
                <h3 className={`text-xl font-mono font-bold ${colors.accentText} mb-4 uppercase tracking-wider`}>
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {work.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 ${colors.accent} mt-2 flex-shrink-0`}></div>
                      <p className="text-stone-400">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Images */}
              {work.images && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {work.images.architecture && (
                    <div className="bg-stone-950 p-4 border border-stone-800">
                      <img
                        src={work.images.architecture}
                        alt={`${work.title} Architecture`}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm font-mono text-stone-500 mt-3">
                        Model Architecture
                      </p>
                    </div>
                  )}
                  {work.images.pipeline && (
                    <div className="bg-stone-950 p-4 border border-stone-800">
                      <img
                        src={work.images.pipeline}
                        alt={`${work.title} Pipeline`}
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm font-mono text-stone-500 mt-3">
                        Pipeline Overview
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Demo Video - Bottom Position */}
              {work.video && (
                <div>
                  <h3 className={`text-xl font-mono font-bold ${colors.accentText} mb-4 uppercase tracking-wider`}>
                    Demo Video
                  </h3>
                  <div className="bg-stone-950 border border-stone-800 overflow-hidden">
                    <video
                      className="w-full h-auto"
                      controls
                      preload="metadata"
                      playsInline
                      controlsList="nodownload"
                    >
                      <source src={work.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ResearchShowcase;
