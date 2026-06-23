import { motion } from 'framer-motion';
import { Quote, Star, MessageSquareCode, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../lib/config';
import { testimonials } from '../lib/data';
import PageBanner from '../components/PageBanner';

export default function Testimonials() {
  return (
    <div className="bg-white text-gray-900 selection:bg-[#0c71c3]/30 overflow-hidden">
      
      {/* Premium Hero Header Section */}
     <PageBanner
  title="Words from Collaborators"
  description="Real feedback from industry pioneers, academic leads, and global partners driving technology forward."
  backgroundImage="https://t3.ftcdn.net/jpg/02/64/30/32/360_F_264303251_zEuPW8uTjTTY2wogztkQHxekcLRUdvXT.jpg"
/>

      {/* Testimonials Modern Grid */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 items-start"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`group relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-[#0c71c3]/10 transition-all duration-300 ${
                  i % 2 === 1 ? 'md:translate-y-12' : ''
                }`}
              >
                {/* Micro Border Edge Glow Accent */}
                <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0c71c3]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Placement */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-[#0c71c3] group-hover:bg-[#0c71c3]/10 transition-colors duration-300">
                  <Quote className="w-4 h-4 transform rotate-180" />
                </div>
                
                {/* Rating indicators */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-[#f57507] fill-[#f57507]/10 stroke-[1.5]" />
                  ))}
                </div>

                {/* Body Content */}
                <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg tracking-wide">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author Information Block */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200 ring-4 ring-white shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0c71c3] border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base tracking-wide transition-colors group-hover:text-[#0c71c3]">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs font-medium tracking-wide mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Link - Optional */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#0c71c3] hover:text-[#0a5fa3] font-semibold transition-colors group"
            >
              <span>Share your experience</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modern Light CTA Card Section */}
      <section className="py-28 relative bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0c71c3]/5 via-[#f57507]/5 to-white rounded-[2.5rem] p-12 md:p-16 border border-[#0c71c3]/10 shadow-xl shadow-[#0c71c3]/5 text-center">
            
            {/* Background design accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0c71c3]/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#f57507]/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 max-w-2xl mx-auto space-y-6"
            >
              <motion.h2 
                variants={fadeInUp} 
                className="text-3xl md:text-4xl font-black tracking-tight uppercase text-gray-900"
              >
                Want to expand <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] to-[#f57507]">
                  the vision?
                </span>
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp} 
                className="text-gray-600 font-light max-w-md mx-auto text-sm md:text-base leading-relaxed tracking-wide"
              >
                I am always open to discussing advanced research initiatives, creative technical architectural builds, or sustainable global ventures.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-bold text-sm rounded-full shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:rotate-45 transition-transform" />
                </Link>
                {/* <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-transparent hover:bg-[#0c71c3]/5 text-gray-700 font-semibold text-sm rounded-full border border-gray-200 hover:border-[#0c71c3]/30 transition-all duration-300"
                >
                  <span>View My Work</span>
                </Link> */}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}