import { motion } from 'framer-motion';
import { Quote, Star, MessageSquareCode, ArrowUpRight, X, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '../lib/config';
import { testimonials } from '../lib/data';
import PageBanner from '../components/PageBanner';

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (testimonial: typeof testimonials[0]) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
    document.body.style.overflow = 'unset';
  };

  // Truncate text to ~150 characters
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="bg-white text-gray-900 selection:bg-[#0c71c3]/30 overflow-hidden">
      
      {/* Premium Hero Header Section */}
      <PageBanner
        title="Words from Collaborators"
        description="Real feedback from industry pioneers, academic leads, and global partners driving technology forward."
        backgroundImage="/bg.jpg"
      />

      {/* Testimonials Modern Grid */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`group relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-[#0c71c3]/10 transition-all duration-300 flex flex-col h-full ${
                  i % 2 === 1 ? 'md:translate-y-12' : ''
                }`}
              >
                {/* Micro Border Edge Glow Accent */}
                <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0c71c3]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Placement */}
                <div className="absolute top-4 right-2 w-10 h-10 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-[#0c71c3] group-hover:bg-[#0c71c3]/10 transition-colors duration-300">
                  <Quote className="w-4 h-4 transform rotate-180" />
                </div>

                {/* Body Content - Flex grow to fill space */}
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg tracking-wide">
                    &ldquo;{truncateText(testimonial.text)}&rdquo;
                  </p>
                  
                  {/* Read More Button */}
                  {testimonial.text.length > 150 && (
                    <button
                      onClick={() => openModal(testimonial)}
                      className="inline-flex items-center gap-1.5 mt-3 text-[#0c71c3] hover:text-[#0a5fa3] font-medium text-sm transition-colors group/read"
                    >
                      <span>Read More</span>
                      <Maximize2 className="w-3.5 h-3.5 group-hover/read:scale-110 transition-transform" />
                    </button>
                  )}
                </div>

                {/* Author Information Block - Fixed at bottom */}
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100 flex-shrink-0">
                  <div className="relative flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200 ring-4 ring-white shadow-sm"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-gray-900 text-sm md:text-base tracking-wide transition-colors group-hover:text-[#0c71c3] truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs font-medium tracking-wide mt-0.5 truncate">
                      {testimonial.role}
                    </p>
                    {testimonial.company && (
                      <p className="text-gray-400 text-xs font-medium tracking-wide mt-0.5 truncate">
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal/Popup */}
      {isModalOpen && selectedTestimonial && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-900"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#0c71c3]/10 flex items-center justify-center mb-6">
                <Quote className="w-7 h-7 text-[#0c71c3] transform rotate-180" />
              </div>

              {/* Full Testimonial Text */}
              <p className="text-gray-700 leading-relaxed text-base md:text-lg font-light">
                &ldquo;{selectedTestimonial.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-8" />

              {/* Author Info - Full width in modal */}
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <img
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#0c71c3]/30 shadow-md"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base md:text-lg">
                    {selectedTestimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm font-medium">
                    {selectedTestimonial.role}
                  </p>
                  {selectedTestimonial.company && (
                    <p className="text-gray-400 text-sm font-medium">
                      {selectedTestimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

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
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}