import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Database, 
  Network, 
  TrendingUp, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Rocket,
  BarChart,
  FileText,
  GitBranch,
  Code,
  Cloud,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../PageBanner';
import { Variants } from 'framer-motion';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const productPrinciples = [
  'Product concept, Vision, Mission',
  'Ideation',
  'Competition Analysis',
  'Process / workflow maps',
  'Data needs assessment',
  'Skills need assessment/Hiring',
  'Product Requirements',
  'Prototyping',
  'Product testing with consumers',
  'Feedback analytics',
  'Prioritization',
  'Resource acquisition and management',
  'Roles and Responsibilities',
  'Alignment Cross-Functional',
  'Agile processes (Jira, Confluence, Shiproom)',
  'Product Plan/Roadmap',
  'Meetings with stakeholders',
  'UAT plan',
  'OKR\'s, EPICS, Metrics'
];

const architectureLayers = [
  { 
    title: 'Consumption Layer', 
    description: 'User interfaces and applications that consume semantic data',
    icon: Layers,
    color: '#0c71c3'
  },
  { 
    title: 'Semantic Layer', 
    description: 'Knowledge graphs, ontologies, and semantic reasoning',
    icon: Network,
    color: '#f57507'
  },
  { 
    title: 'Data Layer', 
    description: 'Structured and unstructured data sources',
    icon: Database,
    color: '#0c71c3'
  },
  { 
    title: 'Data Generators', 
    description: 'Systems and processes that generate raw data',
    icon: Cpu,
    color: '#0c71c3'
  }
];

const businessProcesses = [
  'Discovery',
  'Hit to Lead, Lead Optimization',
  'Product Development',
  'Clinical Study',
  'Regulatory/Patent',
  'Commercial'
];

function HeadingBubbles({ tone = 'blue' }: { tone?: 'blue' | 'orange' }) {
  // Ambient floating bubbles for section headings. Two tones so different
  // section headings can read as related without looking identical.
  const palette =
    tone === 'blue'
      ? ['rgba(12,113,195,0.32)', 'rgba(56,189,248,0.26)', 'rgba(12,113,195,0.16)']
      : ['rgba(245,117,7,0.32)', 'rgba(12,113,195,0.2)', 'rgba(245,117,7,0.16)'];

  const bubbles = [
    { size: 26, top: '8%',  left: '4%',  dur: 7.5, delay: 0 },
    { size: 19, top: '70%', left: '0%',  dur: 6,   delay: 0.5 },
    { size: 32, top: '55%', left: '10%', dur: 9,   delay: 1.1 },
    { size: 21, top: '15%', left: '88%', dur: 6.5, delay: 0.3 },
    { size: 28, top: '68%', left: '93%', dur: 8,   delay: 0.8 },
    { size: 18, top: '40%', left: '97%', dur: 5.5, delay: 1.4 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-visible">
      {bubbles.map((b, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: palette[i % palette.length],
          }}
          animate={{
            y: [0, -14, 0],
            x: [0, i % 2 === 0 ? 5 : -5, 0],
            opacity: [0.35, 0.85, 0.35],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function SemanticLayer() {
  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
      {/* Page Banner */}
      <PageBanner
        title="Semantic Layer"
        description="Driving Digital Transformation using Semantics and Knowledge Graphs"
        backgroundImage="/bg.jpg"
      />

      {/* Overview Section with Large Image */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            transition: { 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="absolute top-20 right-0 w-72 h-72 bg-[#0c71c3]/5 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            transition: { 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="absolute bottom-20 left-0 w-56 h-56 bg-[#f57507]/5 rounded-full blur-3xl pointer-events-none"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Large Image - Full Width */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden r "
            >
              <motion.img
                src="/projects/sem-pic.png"
                alt="Semantic Layer Architecture"
                className="rounded-2xl w-full h-auto "
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content Below Image */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">Project</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500 text-xs sm:text-sm">2020 – 2023</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                GLAXOSMITHKLINE
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Driving Digital Transformation using Semantics and Knowledge Graphs.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-xs sm:text-sm font-medium rounded-full"
                >
                  <Network className="w-3 h-3 sm:w-4 sm:h-4" />
                  Knowledge Graphs
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f57507]/10 text-[#f57507] text-xs sm:text-sm font-medium rounded-full"
                >
                  <Database className="w-3 h-3 sm:w-4 sm:h-4" />
                  Semantics
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-xs sm:text-sm font-medium rounded-full"
                >
                  <Cloud className="w-3 h-3 sm:w-4 sm:h-4" />
                  Digital Transformation
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-200"
            >
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Platform Overview</h3>
              <ul className="space-y-2">
                {[
                  'Semantic layer for harmonization of data',
                  'Visualization dashboard for insights',
                  'Google-like search capabilities',
                  'Knowledge graphs and ontologies'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            transition: { 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0c71c3]/5 rounded-full blur-3xl pointer-events-none"
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    transition: { 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }
                  }}
                >
                  <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-[#0c71c3]" />
                </motion.div>
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">Architecture</span>
              </div>
              <h2 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                <HeadingBubbles tone="blue" />
                <span className="relative z-10">Semantic Layer Architecture</span>
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                A layered approach to knowledge management and data integration
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(12,113,195,0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200"
                >
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0c71c3]/10 flex items-center justify-center mb-3 sm:mb-4"
                  >
                    <layer.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0c71c3]" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{layer.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{layer.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Processes */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        <motion.div 
          animate={{ 
            x: [-20, 20, -20],
            transition: { 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="absolute top-1/2 right-0 w-64 h-64 bg-[#f57507]/5 rounded-full blur-3xl pointer-events-none"
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    transition: { 
                      duration: 3.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }
                  }}
                >
                  <GitBranch className="w-6 h-6 sm:w-8 sm:h-8 text-[#f57507]" />
                </motion.div>
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">Process</span>
              </div>
              <h2 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                <HeadingBubbles tone="orange" />
                <span className="relative z-10">Business Process</span>
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                End-to-end workflows enabled by semantic technology
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {businessProcesses.map((process, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(12,113,195,0.12)"
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0c71c3]/30 transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0c71c3]/10 flex items-center justify-center mx-auto mb-2 sm:mb-3"
                  >
                    <span className="text-[#0c71c3] font-bold text-base sm:text-lg">{index + 1}</span>
                  </motion.div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700">{process}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Management Principles */}
      <section className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            transition: { 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="absolute top-1/4 left-0 w-80 h-80 bg-[#0c71c3]/5 rounded-full blur-3xl pointer-events-none"
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    transition: { 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }
                  }}
                >
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-[#f57507]" />
                </motion.div>
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">Methodology</span>
              </div>
              <h2 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                <HeadingBubbles tone="blue" />
                <span className="relative z-10">Product Management Principles Used</span>
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                A comprehensive approach to product development and delivery
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {productPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{ 
                    y: -3, 
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(12,113,195,0.1)"
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-xl border border-gray-200 hover:border-[#0c71c3]/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0c71c3] flex-shrink-0" />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}