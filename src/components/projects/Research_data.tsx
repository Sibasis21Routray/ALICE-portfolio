import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database,
  Network,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Rocket,
  BarChart,
  FileText,
  GitBranch,
  Shield,
  Cloud,
  BookOpen,
  Award,
  Search,
  Eye,
  TrendingUp,
  Sparkles
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

const keyFeatures = [
  'Outlined the long-term strategy for use of semantic technologies for Agricultural Innovation',
  'Developed the plan for the Ag-Intelligence platform by driving consensus through R&D, Global Supply Chain, Corporate Reputation, Global Security',
  'Laying out the vision and Launching the Ontology platform - Semaphore for ontology management and utilization',
  'Building the infrastructure for Monsanto',
  'Planning the foundation to enable innovation in data integration and "smart data mining"',
  'Making available an ontology management infrastructure that enables a rich linguistic grounding'
];

const capabilities = [
  'Qualitative object annotation',
  'Text mining',
  'Linked data',
  'Improved navigation',
  'Filtering and visualization of data'
];

export default function ResearchData() {
  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
      {/* Page Banner */}
      <PageBanner
        title="Research Data Integration Platform"
        description="Ag-Intelligence Platform for Agricultural Innovation"
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
              className="overflow-hidden rounded-2xl"
            >
              <motion.img
                src="/projects/research-tech.png"
                alt="Research Data Integration Platform"
                className="rounded-2xl w-full h-auto "
                whileHover={{ scale: 1.02 }}
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
                <span className="text-gray-500 text-xs sm:text-sm">Monsanto Co.</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ag-Intelligence Platform
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Outlined the long-term strategy for use of semantic technologies for Agricultural Innovation.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-xs sm:text-sm font-medium rounded-full"
                >
                  <Database className="w-3 h-3 sm:w-4 sm:h-4" />
                  Data Integration
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f57507]/10 text-[#f57507] text-xs sm:text-sm font-medium rounded-full"
                >
                  <Network className="w-3 h-3 sm:w-4 sm:h-4" />
                  Semantic Technology
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-xs sm:text-sm font-medium rounded-full"
                >
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  Agricultural Innovation
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
                  'Ontology platform - Semaphore for ontology management',
                  'Smart data mining and data integration',
                  'Rich linguistic grounding for data'
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

      {/* Key Features */}
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
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#0c71c3]" />
                </motion.div>
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">Features</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Key Features & Strategy
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                Driving Agricultural Innovation through Semantic Technologies
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{ 
                    y: -3, 
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(12,113,195,0.1)"
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#0c71c3]/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
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
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-[#f57507]" />
                </motion.div>
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Platform Capabilities
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                Enabling rich linguistic grounding and advanced data capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {capabilities.map((capability, index) => (
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
                  <p className="text-xs sm:text-sm font-medium text-gray-700">{capability}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}