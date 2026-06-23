import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Target, 
  BarChart, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Utensils,
  Globe,
  Lightbulb,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../PageBanner';
import { Variants } from 'framer-motion';

// Animation variants
const fadeInUp:Variants = {
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

const fadeInRight:Variants = {
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
  'Product concept',
  'Ideation',
  'Market analysis',
  'Opportunity in India',
  'Product creation',
  'Recipe creation',
  'Manufacturing process',
  'Machine selection',
  'Logo design',
  'Product testing with consumers',
  'Taste testing experiment design',
  'Feedback analytics',
  'Feeding study and analytics',
  'Prioritization',
  'Fund-raising',
  'Website design requirements'
];

export default function HappyBar() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Page Banner */}
      <PageBanner
        title="Happy Bar Non-Profit & Product Development"
        description="Promoting health for the mind, body and spirit through nutritional snacks and awareness"
        backgroundImage="https://t3.ftcdn.net/jpg/02/64/30/32/360_F_264303251_zEuPW8uTjTTY2wogztkQHxekcLRUdvXT.jpg"
      />

      {/* Section 1: Mission - Image Left, Text Right */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants ={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-[#0c71c3]/5 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-[#0c71c3]/10 to-[#f57507]/10 rounded-2xl p-8 border border-gray-200">
                  <div className="w-16 h-16 rounded-full bg-[#0c71c3]/10 flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-[#0c71c3]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Happy Bar Nutrition promotes health for the mind, body and spirit. 
                    Short term we provide nutritional snacks to needy populations especially 
                    children, the sick, and the aged. Long term we promote nutritional 
                    awareness and solutions to self-sustainability of food.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <img
                src="https://thehappyfoodcompany.com/images/cashew-raisin.png"
                alt="Happy Bar Mission"
                className="rounded-2xl  w-full h-[250px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Vision - Image Right, Text Left */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="https://thehappyfoodcompany.com/images/date-almond-cranberry.png"
                alt="Happy Bar Vision"
                className="rounded-2xl  w-full h-[350px] object-cover"
              />
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-[#f57507]/5 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-[#f57507]/10 to-[#0c71c3]/10 rounded-2xl p-8 border border-gray-200">
                  <div className="w-16 h-16 rounded-full bg-[#f57507]/10 flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-[#f57507]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nutrition for All – A world of communities with no undernourished people. 
                    We produce tasty, healthy snack bars for impoverished children.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Management Principles - Full Width */}
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
                <Lightbulb className="w-8 h-8 text-[#f57507]" />
                <span className="text-[#0c71c3] font-semibold text-sm uppercase tracking-wider">Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Product Management Principles Used
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                A comprehensive approach from concept to launch
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {productPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#0c71c3]/30 hover:shadow-md transition-all duration-300"
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