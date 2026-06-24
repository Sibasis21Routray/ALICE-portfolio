import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  BarChart, 
  Search, 
  Database, 
  Network, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Rocket,
  MapPin,
  Clock,
  FileText,
  Users,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Variants } from 'framer-motion';
import PageBanner from '../PageBanner';

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
  'Semantics driven data engine for logistics visibility and optimization',
  'On-demand data enabling perfect order fulfillment',
  'Near real-time access to KPI\'s for Logistics Network',
  'NLP driven information extraction from structured & unstructured sources',
  'Logistics knowledge graph/ontology/taxonomy for AI and ML',
  'Visualization of logistics routes for faster insights',
  'Joined/integrated data for Predictive / Prescriptive analytics'
];

export default function Logistics() {
  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
      {/* Page Banner */}
      <PageBanner
        title="Logistics Intelligence Platform"
        description="On-Demand Supply Chain Data & Analytics"
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
              className="overflow-hidden rounded-2xl "
            >
              <motion.img
                src="/projects/logi-intel.png"
                alt="Logistics Intelligence Platform Architecture"
                className="rounded-2xl w-full h-auto border border-gray-200"
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
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  Project
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500 text-xs sm:text-sm">2019</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Amgen Inc
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Built a semantics driven data engine for logistics visibility
                and optimization
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-xs sm:text-sm font-medium rounded-full"
                >
                  <Truck className="w-3 h-3 sm:w-4 sm:h-4" />
                  Logistics
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f57507]/10 text-[#f57507] text-xs sm:text-sm font-medium rounded-full"
                >
                  <Database className="w-3 h-3 sm:w-4 sm:h-4" />
                  Supply Chain
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-xs sm:text-sm font-medium rounded-full"
                >
                  <Network className="w-3 h-3 sm:w-4 sm:h-4" />
                  Semantics
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
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                Platform Overview
              </h3>
              <ul className="space-y-2">
                {[
                  'Provides on-demand data enabling the perfect order fulfillment',
                  "Allows near real-time access to KPI's for Logistics Network",
                  'Visibility of data allows optimization of shipper and Transport Service Provider selection',
                  'Groundwork done on the logistics knowledge graph/ontology/taxonomy enables AI and ML'
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

          {/* Second Image - Full Width */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 md:mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-2xl "
            >
              <motion.img
                src="/projects/logi-pic.png"
                alt="Logistics Intelligence Platform Architecture"
                className="rounded-2xl w-full h-auto "
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
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
                  <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-[#0c71c3]" />
                </motion.div>
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  Platform Features
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Key Capabilities
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                A comprehensive logistics intelligence platform for supply chain optimization
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(12,113,195,0.15)"
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Contribution */}
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
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-6 sm:mb-8">
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
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#f57507]" />
                </motion.div>
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  Role
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Key Contribution
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200"
            >
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Was responsible for delivery of the Platform, played a key role,
                defining requirements, story writing, sprint planning, Semantic
                data modeling, data review and preparation, front end design and
                testing.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                As a core team member, I often interacted with VPs, EDs and
                Directors of Global Quality Organization to gather requirement
                and do product demo.
              </p>
              <motion.div 
                className="mt-6 text-right"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() =>
                    window.open("/projects/mlw19-amgen-semantic-technology-assisted-data-harmonizing.pdf", "_blank")
                  }
                  className="inline-flex items-center gap-2 text-[#0c71c3] hover:text-[#0a5fa3] font-medium transition-colors group"
                >
                  Click for more information
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}