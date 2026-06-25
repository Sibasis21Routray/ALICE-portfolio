import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';
import axios from 'axios';
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!turnstileToken) {
      setError('Please complete the CAPTCHA check.');
      return;
    }

    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/contact`, {
        ...formState,
        turnstileToken,
      });

      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTurnstileToken('');
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err: any) {
      setError(err.response?.data?.error || 'An error occurred while sending your message. Please try again.');
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
      setTurnstileToken('');
    } finally {
      setLoading(false);
    }
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
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Let's Connect
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Whether you have a question about my work, want to discuss a potential collaboration,
                  or just want to say hello, feel free to reach out.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0c71c3]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#0c71c3]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                    <a
                      // href={`mailto:${siteConfig.email}`}
                      className="text-[#0c71c3] hover:text-[#0a5fa3] transition-colors text-sm sm:text-base break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0c71c3]/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0c71c3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">LinkedIn</h4>
                    <a
                      // href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0c71c3] hover:text-[#0a5fa3] transition-colors text-sm sm:text-base"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0c71c3]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0c71c3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Location</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Global (Remote & On-site)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-[#0c71c3]/5 to-[#f57507]/5 rounded-xl border border-[#0c71c3]/10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#f57507]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#f57507]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Quick Response</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">I typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
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
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                          Name <span className="text-[#f57507]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-[#0c71c3]/20 outline-none transition-all text-gray-900 bg-white text-sm sm:text-base"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                          Email <span className="text-[#f57507]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-[#0c71c3]/20 outline-none transition-all text-gray-900 bg-white text-sm sm:text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Subject <span className="text-[#f57507]">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-[#0c71c3]/20 outline-none transition-all text-gray-900 bg-white text-sm sm:text-base"
                      >
                        <option value="">Select a topic</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="consulting">Consulting</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Message <span className="text-[#f57507]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-[#0c71c3] focus:ring-2 focus:ring-[#0c71c3]/20 outline-none transition-all text-gray-900 bg-white resize-none text-sm sm:text-base"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="flex justify-center my-4 overflow-hidden rounded-lg">
                      <Turnstile
                        siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || ''} 
                        onSuccess={(token) => setTurnstileToken(token)}
                        onError={() => setError('CAPTCHA verification failed. Please try again.')}
                        ref={turnstileRef}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:-translate-y-0"
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      {loading ? 'Sending...' : 'Send Message'}
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