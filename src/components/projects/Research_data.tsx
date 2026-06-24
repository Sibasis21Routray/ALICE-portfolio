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
              src="/projects/research-tech.png"
              alt="Research Data Integration Platform"
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
                <span className="text-gray-500 text-sm">Monsanto Co.</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ag-Intelligence Platform
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Outlined the long-term strategy for use of semantic technologies for Agricultural Innovation.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-sm font-medium rounded-full">
                  <Database className="w-4 h-4" />
                  Data Integration
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f57507]/10 text-[#f57507] text-sm font-medium rounded-full">
                  <Network className="w-4 h-4" />
                  Semantic Technology
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-sm font-medium rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  Agricultural Innovation
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
                  Ontology platform - Semaphore for ontology management
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  Smart data mining and data integration
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  Rich linguistic grounding for data
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
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
                <Sparkles className="w-8 h-8 text-[#0c71c3]" />
                <span className="text-[#0c71c3] font-semibold text-sm uppercase tracking-wider">Features</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Key Features & Strategy
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                Driving Agricultural Innovation through Semantic Technologies
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#0c71c3]/30 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
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
                <Shield className="w-8 h-8 text-[#f57507]" />
                <span className="text-[#0c71c3] font-semibold text-sm uppercase tracking-wider">Capabilities</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Platform Capabilities
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                Enabling rich linguistic grounding and advanced data capabilities
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0c71c3]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0c71c3]/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#0c71c3] font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{capability}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
}