import React from 'react';
import { motion } from 'framer-motion';
import { 
  Share2,
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
  Award
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
  'Standard taxonomy was built to ensure data quality',
  'Context based systematic data collection',
  'Visualization of QMS information for visibility to QMS processes and documentation'
];

const challenges = [
  'Lack of visibility of QMS processes and documentation'
];

export default function KnowledgeSharing() {
  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
      {/* Page Banner */}
      <PageBanner
        title="Quality Management System (QMS)"
        description="Knowledge Sharing Platform"
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
                src="/projects/knowledge-sharing.png"
                alt="QMS Knowledge Sharing Platform"
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
                <span className="text-gray-500 text-xs sm:text-sm">2018 – Ongoing</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Amgen Inc
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Quality Management System (QMS) Knowledge Sharing Platform
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-xs sm:text-sm font-medium rounded-full"
                >
                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  Knowledge Sharing
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f57507]/10 text-[#f57507] text-xs sm:text-sm font-medium rounded-full"
                >
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  QMS
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-xs sm:text-sm font-medium rounded-full"
                >
                  <Database className="w-3 h-3 sm:w-4 sm:h-4" />
                  Reference Data
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
                  'Standard taxonomy built to ensure data quality',
                  'Context based systematic data collection',
                  'Visualization of QMS information for visibility'
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

      {/* Key Contribution */}
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
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#f57507]" />
                </motion.div>
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">Role</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Key Contribution
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                Driving the delivery of the Quality Management System Reference Data platform
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm"
            >
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Currently responsible for delivery of the newly created Quality Management System Reference Data; 
                played a key role in vendor selection, defining requirements, Semantic data modeling, 
                data review and preparation, front end design and testing.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                As a core team member, I often interacted with VPs, EDs and Directors of Global Quality 
                organization to gather requirements and do product demos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
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
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-[#0c71c3]" />
                </motion.div>
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">Challenge</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Challenge & Solution
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                Addressing the lack of visibility in QMS processes and documentation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                variants={fadeInScale}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-200"
              >
                <div className="flex items-center gap-3 mb-4">
                 
                  <h3 className="text-lg sm:text-xl font-bold text-red-700">Challenge</h3>
                </div>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                    >
                      <span className="text-red-500 font-bold text-lg">•</span>
                      <span>{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInScale}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  
                  <h3 className="text-lg sm:text-xl font-bold text-green-700">Solution</h3>
                </div>
                <ul className="space-y-3">
                  {keyFeatures.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}