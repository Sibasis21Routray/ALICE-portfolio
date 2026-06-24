import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  BookOpen,
  Users,
  ChevronRight,
  Quote,
  ArrowUpRight,
  Calendar,
  MapPin,
} from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft } from "../lib/config";
import { experience, testimonials } from "../lib/data";
import AnimatedCounter from "../components/AnimatedCounter";
import HeroSection from "../components/home/hero";

const stats = [
  { icon: Briefcase, value: 25, suffix: "+", label: "Years Experience" },
  { icon: Award, value: 50, suffix: "+", label: "Patents & Pubs" },
  { icon: BookOpen, value: 6, suffix: "", label: "Major Projects" },
  { icon: Users, value: 500, suffix: "+", label: "People Impacted" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="bg-white overflow-hidden font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview - White Background */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c71c3]/5 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f57507]/5 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative badge */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20 bg-[#0c71c3] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-[#0c71c3]/30">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                  25+ Years
                </span>
              </div>

              <div className="relative rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-300/50 bg-white p-2 sm:p-3 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 ease-out">
                <img
                  src="/home/ACA-1.png"
                  alt="About Alice"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2rem]"
                />
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-block text-[#0c71c3] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 sm:mb-3 bg-[#0c71c3]/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#0c71c3]/20">
                  About Me
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-2 sm:mt-3 leading-tight">
                  BIOTECHNOLOGIST
                  <br />
                  <span className="relative inline-block">
                    <span className="absolute -inset-2 bg-gradient-to-r from-[#0c71c3] to-[#f57507] blur-3xl opacity-20 rounded-xl" />
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507] text-base sm:text-lg md:text-xl lg:text-2xl">
                      ONTOLOGIST & PHILANTHROPIST
                    </span>
                  </span>
                </h2>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed"
              >
                <p>
                  With over 25 years of experience spanning biotechnology,
                  semantic technology, and data science, I have dedicated my
                  career to bridging the gap between cutting-edge research and
                  real-world applications.
                </p>
                <p>
                  My work has touched lives across the globe, from developing
                  drought-tolerant crops to building semantic data platforms for
                  pharmaceutical giants.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Learn more about my journey
                  <motion.span className="inline-block" whileHover={{ x: 5 }}>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Preview - Compact & Fresh Design */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-[#0c71c3] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 bg-[#0c71c3]/10 px-3 sm:px-4 py-1 rounded-full border border-[#0c71c3]/20"
            >
              Career Highlights
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-2 leading-tight"
            >
              A Legacy of{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#0c71c3] to-[#f57507] blur-3xl opacity-20 rounded-xl" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507]">
                  Innovation
                </span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-500 max-w-2xl mx-auto mt-2 text-sm sm:text-base"
            >
              Core milestones driving sustainable advancements and architectural
              breakthroughs.
            </motion.p>
          </motion.div>

          {/* Experience Cards - Compact Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left: Stats Sidebar - Compact */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="lg:sticky lg:top-24 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-md"
                >
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] to-[#f57507]">
                    {experience.length}+
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium">
                    Years of Impact
                  </div>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-[#0c71c3] to-[#f57507] mt-2 rounded-full" />
                </motion.div>
              </div>
            </div>

            {/* Right: Experience Cards - Compact */}
            <div className="lg:col-span-9 space-y-4">
              {experience.slice(0, 4).map((job: any, index: number) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative bg-white p-4 sm:p-5 lg:p-6 rounded-xl border border-gray-200 hover:border-[#0c71c3]/30 shadow-md hover:shadow-[0_4px_25px_rgba(12,113,195,0.1)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0c71c3]/0 via-[#0c71c3]/0 to-[#f57507]/0 group-hover:from-[#0c71c3]/5 group-hover:via-[#0c71c3]/5 group-hover:to-[#f57507]/5 transition-all duration-300" />

                  {/* Left accent bar */}
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-[#0c71c3]/0 via-[#0c71c3]/40 to-[#f57507]/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="space-y-1.5 flex-1 min-w-0">
                        {/* Period and Type badges - Compact */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono tracking-[0.1em] text-[#0c71c3] bg-[#0c71c3]/10 px-2.5 py-0.5 rounded-full border border-[#0c71c3]/20">
                            {job.period}
                          </span>
                          {job.type && (
                            <span className="text-[9px] font-semibold tracking-wider text-gray-400 uppercase bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                              {job.type}
                            </span>
                          )}
                        </div>

                        {/* Title and Company - Compact */}
                        <div className="flex flex-wrap items-baseline gap-2">
                          <h3 className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-gray-900 group-hover:text-[#0c71c3] transition-colors duration-300">
                            {job.title}
                          </h3>
                          <span className="text-gray-400 text-sm font-medium">
                            •
                          </span>
                          <span className="text-sm text-gray-600 font-medium">
                            {job.company}
                          </span>
                          {job.location && (
                            <>
                              <span className="text-gray-300 text-xs">•</span>
                              <span className="text-xs text-gray-400">
                                {job.location}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Index badge */}
                      <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-gray-300 group-hover:text-[#0c71c3] transition-colors">
                        <span className="font-mono">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Description - Compact */}
                    <p className="text-gray-500 text-sm leading-relaxed mt-2 max-w-3xl">
                      {job.description}
                    </p>

                    {/* Tags - Compact */}
                    {job.tags && job.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2.5">
                        {job.tags.slice(0, 4).map((tag: string, i: number) => (
                          <span
                            key={i}
                            className="text-[9px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                        {job.tags.length > 4 && (
                          <span className="text-[9px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                            +{job.tags.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* View All Button - Compact */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-3 flex justify-center lg:justify-start"
              >
                <Link
                  to="/about#experience"
                  className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-medium text-xs sm:text-sm rounded-full shadow-md shadow-[#0c71c3]/25 hover:shadow-[#0c71c3]/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>View Full Timeline</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview - White Background */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c71c3]/5 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f57507]/5 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-[#0c71c3]/10 to-[#f57507]/10 mb-4 sm:mb-5 md:mb-6">
                <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#0c71c3]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
                What People{" "}
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-[#0c71c3] to-[#f57507] blur-3xl opacity-20 rounded-xl" />
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507]">
                    Say
                  </span>
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto px-4">
                Hear from industry leaders and colleagues about our
                collaborations and successes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {testimonials.slice(0, 2).map((t) => (
                <motion.div
                  key={t.id}
                  variants={fadeInUp}
                  className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 relative group hover:shadow-[#0c71c3]/10 transition-all duration-500"
                >
                  <Quote className="absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gray-50 transition-colors duration-500 group-hover:text-[#0c71c3]/10" />
                  <div className="relative z-10">
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed italic mb-6 sm:mb-8 md:mb-10 line-clamp-4">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                      <div className="relative flex-shrink-0">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md"
                        />
                        <div className="absolute inset-0 rounded-full ring-2 ring-[#0c71c3] ring-offset-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-base sm:text-lg font-bold text-gray-900 truncate">
                          {t.name}
                        </p>
                        <p className="text-sm sm:text-base text-[#0c71c3] font-medium truncate">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12 sm:mt-14 md:mt-16">
              <Link
                to="/testimonials"
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Read All Testimonials
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Gradient Background */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-[#0c71c3] to-[#0a5fa3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
              Ready to{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-[#f57507] blur-3xl opacity-30 rounded-xl" />
                <span className="relative text-[#f57507]">Collaborate?</span>
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4">
              Let's work together to create meaningful impact through
              biotechnology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#0c71c3] font-bold text-sm sm:text-base rounded-full shadow-lg shadow-black/20 hover:shadow-black/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}