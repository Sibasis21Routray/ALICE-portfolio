import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu,
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
  Share2
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const keyFeatures = [
  'Provides a knowledge sharing platform for Advanced Device Technology workers',
  'Provides search and visualization capability to enable knowledge sharing',
  'Standard taxonomy was built to ensure data quality',
  'Context based systematic data collection',
  'Visualization of device information for visibility to data and to gain insights and ideas for device designing'
];

const challenges = [
  'All Device Data was in large PDF\'s not accessible to knowledge workers',
  'Data not available for analytics'
];

export default function DeviceTech() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Page Banner */}
      <PageBanner
        title="Advanced Device Technology"
        description="Knowledge Sharing Platform for Device Technology Workers"
        backgroundImage="https://t3.ftcdn.net/jpg/02/64/30/32/360_F_264303251_zEuPW8uTjTTY2wogztkQHxekcLRUdvXT.jpg"
      />

      {/* Overview Section with Large Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Large Image - Full Width */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <img
              src="https://aliceclaraaugustine.com/wp-content/uploads/2023/08/advanced-devices.png"
              alt="Advanced Device Technology Platform"
              className="rounded-2xl shadow-xl w-full h-auto border border-gray-200"
            />
          </motion.div>

          {/* Text Content Below Image */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#0c71c3] font-semibold text-sm uppercase tracking-wider">Project</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500 text-sm">2017</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Amgen Inc
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Provides a knowledge sharing platform for Advanced Device Technology workers.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-sm font-medium rounded-full">
                  <Cpu className="w-4 h-4" />
                  Device Technology
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f57507]/10 text-[#f57507] text-sm font-medium rounded-full">
                  <Share2 className="w-4 h-4" />
                  Knowledge Sharing
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-sm font-medium rounded-full">
                  <Search className="w-4 h-4" />
                  Search & Visualization
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">Platform Overview</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  Knowledge sharing platform for device technology workers
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  Search and visualization capability
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  Standard taxonomy for data quality
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Contribution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Award className="w-8 h-8 text-[#f57507]" />
                <span className="text-[#0c71c3] font-semibold text-sm uppercase tracking-wider">Role</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Key Contribution
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                Delivering the Advanced Device Technology Reference Data platform
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <p className="text-gray-700 leading-relaxed mb-4">
                Delivered the newly created Device Reference Data, played a key role in vendor selection, 
                defining requirements, Semantic data modeling, data review and preparation, 
                front end design and testing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a core team member, I often interacted with VPs, EDs and Directors of Global 
                development organization to gather requirements and do product demos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Lightbulb className="w-8 h-8 text-[#0c71c3]" />
                <span className="text-[#0c71c3] font-semibold text-sm uppercase tracking-wider">Challenge</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Challenge & Solution
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                Transforming inaccessible PDF data into a searchable, analyzable platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                className="bg-red-50 rounded-2xl p-8 border border-red-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 text-xl font-bold">!</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-700">Challenge</h3>
                </div>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-red-500 font-bold text-lg">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-green-50 rounded-2xl p-8 border border-green-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700">Solution</h3>
                </div>
                <ul className="space-y-3">
                  {keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
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