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
  'Regulatory/Patent'
];

export default function SemanticLayer() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Page Banner */}
      <PageBanner
        title="Semantic Layer"
        description="Driving Digital Transformation using Semantics and Knowledge Graphs"
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
              src="https://aliceclaraaugustine.com/wp-content/uploads/2023/08/sem-pic.png"
              alt="Semantic Layer Architecture"
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
                <span className="text-gray-500 text-sm">2020 – 2023</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                GLAXOSMITHKLINE
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Driving Digital Transformation using Semantics and Knowledge Graphs.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-sm font-medium rounded-full">
                  <Network className="w-4 h-4" />
                  Knowledge Graphs
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f57507]/10 text-[#f57507] text-sm font-medium rounded-full">
                  <Database className="w-4 h-4" />
                  Semantics
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0c71c3]/10 text-[#0c71c3] text-sm font-medium rounded-full">
                  <Cloud className="w-4 h-4" />
                  Digital Transformation
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
                  Semantic layer for harmonization of data
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  Visualization dashboard for insights
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  Google-like search capabilities
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#0c71c3] flex-shrink-0 mt-0.5" />
                  Knowledge graphs and ontologies
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Layers */}
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
                <Layers className="w-8 h-8 text-[#0c71c3]" />
                <span className="text-[#0c71c3] font-semibold text-sm uppercase tracking-wider">Architecture</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Semantic Layer Architecture
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                A layered approach to knowledge management and data integration
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0c71c3]/10 flex items-center justify-center mb-4">
                    <layer.icon className="w-6 h-6 text-[#0c71c3]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{layer.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{layer.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Processes */}
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
                <GitBranch className="w-8 h-8 text-[#f57507]" />
                <span className="text-[#0c71c3] font-semibold text-sm uppercase tracking-wider">Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Business Process
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                End-to-end workflows enabled by semantic technology
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {businessProcesses.map((process, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0c71c3]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0c71c3]/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#0c71c3] font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{process}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Management Principles */}
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
                <Lightbulb className="w-8 h-8 text-[#f57507]" />
                <span className="text-[#0c71c3] font-semibold text-sm uppercase tracking-wider">Methodology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Product Management Principles Used
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                A comprehensive approach to product development and delivery
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#0c71c3]/30 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-[#0c71c3] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
}