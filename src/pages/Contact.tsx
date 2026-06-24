import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../lib/config';
import { siteConfig } from '../lib/config';
import SectionHeader from '../components/SectionHeader';
import PageBanner from '../components/PageBanner';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className='overflow-hidden'>
      {/* Page Header */}
       <PageBanner
        title="Contact Me"
        description="Have a question or want to collaborate? I&apos;d love to hear from you."
        backgroundImage="/bg.jpg"
      />

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Let&apos;s Connect
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Whether you have a question about my work, want to discuss a potential collaboration,
                  or just want to say hello, feel free to reach out.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[#0c71c3]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0c71c3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a
                      // href={`mailto:${siteConfig.email}`}
                      className="text-[#0c71c3] hover:text-[#0a5fa3] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[#0c71c3]/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-[#0c71c3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a
                      // href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0c71c3] hover:text-[#0a5fa3] transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[#0c71c3]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#0c71c3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Global (Remote & On-site)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#0c71c3]/5 to-[#f57507]/5 rounded-xl border border-[#0c71c3]/10">
                  <div className="w-12 h-12 rounded-lg bg-[#f57507]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#f57507]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Response</h4>
                    <p className="text-gray-600 text-sm">I typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0c71c3]" />
                    Available for consulting
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f57507]" />
                    Open to collaborations
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name <span className="text-[#f57507]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-[#0c71c3]/20 outline-none transition-all text-gray-900 bg-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-[#f57507]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-[#0c71c3]/20 outline-none transition-all text-gray-900 bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject <span className="text-[#f57507]">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-[#0c71c3]/20 outline-none transition-all text-gray-900 bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="consulting">Consulting</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-[#f57507]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-[#0c71c3]/20 outline-none transition-all text-gray-900 bg-white resize-none"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50 hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      I'll respond within 24 hours. Your information is kept confidential.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}