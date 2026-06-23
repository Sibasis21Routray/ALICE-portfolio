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
const fadeInUp :Variants= {
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

const fadeInLeft:Variants = {
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

const fadeInRight :Variants= {
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

const staggerContainer:Variants = {
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
              src="https://aliceclaraaugustine.com/wp-content/uploads/2023/08/logi-pic.png"
              alt="Logistics Intelligence Platform Architecture"
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
                <span className="text-gray-500 text-sm">2019</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Amgen Inc
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Built a semantics driven data engine for logistics visibility and optimization
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-sm font-medium rounded-full">
                  <Truck className="w-4 h-4" />
                  Logistics
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f57507]/10 text-[#f57507] text-sm font-medium rounded-full">
                  <Database className="w-4 h-4" />
                  Supply Chain
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-sm font-medium rounded-full">
                  <Network className="w-4 h-4" />
                  Semantics
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
                  Provides on-demand data enabling the perfect order fulfillment
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  Allows near real-time access to KPI's for Logistics Network
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  Visibility of data allows optimization of shipper and Transport Service Provider selection
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  Groundwork done on the logistics knowledge graph/ontology/taxonomy enables AI and ML
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
                <Truck className="w-8 h-8 text-[#0c71c3]" />
                <span className="text-[#0c71c3] font-semibold text-sm uppercase tracking-wider">Platform Features</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Key Capabilities
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                A comprehensive logistics intelligence platform for supply chain optimization
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#0c71c3]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Contribution */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Award className="w-8 h-8 text-[#f57507]" />
                <span className="text-[#0c71c3] font-semibold text-sm uppercase tracking-wider">Role</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Key Contribution
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <p className="text-gray-700 leading-relaxed mb-4">
                Was responsible for delivery of the Platform, played a key role, defining requirements, 
                story writing, sprint planning, Semantic data modeling, data review and preparation, 
                front end design and testing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a core team member, I often interacted with VPs, EDs and Directors of Global Quality 
                Organization to gather requirement and do product demo.
              </p>
              <div className="mt-6 text-right">
                <button className="inline-flex items-center gap-2 text-[#0c71c3] hover:text-[#0a5fa3] font-medium transition-colors group">
                  Click for more information
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
}