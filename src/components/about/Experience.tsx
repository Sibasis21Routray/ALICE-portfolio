import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ArrowRight, Briefcase, Award, Users, BookOpen } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft } from '../../lib/config';
import { experience } from '../../lib/data';
import SectionHeader from '../SectionHeader';
import { Link } from 'react-router-dom';

// Type definitions
interface ExperienceItem {
  id: string | number;
  company: string;
  title: string;
  period: string;
  location?: string;
  description: string;
  bullets?: string[];
  type?: string;
  tags?: string[];
}

interface StatItem {
  icon: React.ElementType;
  value: string | number;
  label: string;
}

interface ExperiencePageProps {
  // Add any props if needed
}

export default function Experience({}: ExperiencePageProps) {
  // Calculate stats with proper typing
  const totalYears: number = experience.length > 0 ? 
    Math.max(...experience.map((j: ExperienceItem) => parseInt(j.period.split('-')[0] || '0'))) - 
    Math.min(...experience.map((j: ExperienceItem) => parseInt(j.period.split('-')[1]?.split(' ')[0] || '2024'))) + 1 : 0;

  const stats: StatItem[] = [
    { icon: Briefcase, value: experience.length, label: 'Positions Held' },
    { icon: Award, value: '50+', label: 'Patents & Pubs' },
    { icon: Users, value: '25+', label: 'Years Experience' },
    { icon: BookOpen, value: '6', label: 'Major Projects' },
  ];

  return (
    <div className="bg-white text-gray-900 selection:bg-[#0c71c3]/30 overflow-hidden">
      
{/* Section Header - Compact */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mt-10 "
    >
      
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 leading-tight"
      >
        <span className="relative inline-block">
          <span className="absolute -inset-2 bg-gradient-to-r from-[#0c71c3] to-[#f57507] blur-3xl opacity-20 rounded-xl" />
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507]">
            Experience
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
        My work at awesome companies
      </motion.p>
    </motion.div>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-8"
          >
            {experience.map((job: ExperienceItem, index: number) => (
              <motion.div
                key={job.id}
                variants={fadeInUp}
                className="relative"
              >
                <div className="grid lg:grid-cols-[240px_1fr] gap-6">
                  {/* Left Column - Company Info */}
                  <div className="lg:text-right">
                    <div className="flex items-center lg:justify-end gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-[#0c71c3]" />
                      <h3 className="text-[#0c71c3] font-bold text-base">{job.company}</h3>
                    </div>
                    <p className="text-[#f57507] font-semibold text-sm">{job.title}</p>
                    <div className="flex items-center lg:justify-end gap-2 mt-1 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      {job.period}
                    </div>
                    {job.location && (
                      <div className="flex items-center lg:justify-end gap-1 text-gray-400 text-xs mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </div>
                    )}
                  </div>

                  {/* Right Column - Description */}
                  <div className="relative lg:pl-8 lg:border-l-2 lg:border-[#0c71c3]/20">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0c71c3] border-4 border-white hidden lg:block shadow-md shadow-[#0c71c3]/30" />
                    
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                      <p className="text-gray-600 leading-relaxed text-sm mb-3">{job.description}</p>
                      
                      {job.bullets && job.bullets.length > 0 && (
                        <ul className="space-y-2">
                          {job.bullets.map((bullet: string, i: number) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#f57507] mt-1.5 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < experience.length - 1 && (
                  <div className="hidden lg:block absolute left-[240px] bottom-0 w-32 h-px bg-gradient-to-r from-[#0c71c3]/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}