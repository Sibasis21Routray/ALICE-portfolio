
import { motion, Variants } from 'framer-motion';
import {educationData} from "../../lib/data"
// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.06
    }
  }
};

// Types
interface EducationItem {
  id: string | number;
  institution: string;
  logo?: string;
  subtitle?: string;
  program: string;
  period: string;
  location?: string;
  description: string[];
  skills?: string[];
  highlights?: string[];
}



export default function Education() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans antialiased">

      {/* Page Header - Simple */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-10"
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
              Education
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
          My Education & Skills journey
        </motion.p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {educationData.map((edu, index) => (
            <motion.div key={edu.id} variants={fadeInUp} className="group">
              
              {/* Main Split Row */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Branding & Identifiers Column */}
                <div className="md:col-span-5 space-y-4">
                  {/* Logo Image */}
                  <div className="flex items-center gap-4">
                    <div className="w-46 h-20 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center p-2 flex-shrink-0">
                      <img 
                        src={edu.logo} 
                        alt={edu.institution} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    {/* <div>
                      <div className="text-2xl font-black tracking-tight text-gray-900 select-none">
                        <span className="text-[#0066CC]">{edu.institution.split(' ')[0]}</span>
                        <span className="text-gray-800"> {edu.institution.split(' ').slice(1).join(' ')}</span>
                      </div>
                    </div> */}
                  </div>

                  {/* Program Meta Details Block */}
                  <div className="pt-2">
                    <h2 className="text-sm font-bold text-[#0066CC] uppercase tracking-wider leading-tight">
                      {edu.institution}
                    </h2>
                    {edu.subtitle && (
                      <p className="text-xs font-extrabold text-[#0066CC] uppercase tracking-wider mt-0.5">
                        {edu.subtitle}
                      </p>
                    )}
                    <p className="text-gray-600 text-[13px] mt-3 font-medium">
                      {edu.program}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {edu.period}
                    </p>
                  </div>
                </div>

                {/* Right Paragraphs Content Column */}
                <div className="md:col-span-7 space-y-5 text-gray-800 text-sm md:text-[15px] leading-relaxed font-normal pt-1">
                  {edu.description.map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {paragraph}
                    </p>
                  ))}

                  {/* Bulleted Content Highlights (e.g. for MIT) */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="pt-2">
                      <p className="font-semibold text-gray-900 mb-2">
                        Skills I gained from this course:
                      </p>
                      <ul className="space-y-1.5 pl-4 list-disc marker:text-gray-400">
                        {edu.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="text-gray-700">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </div>

              {/* Exact Figma Vibrant Thick Orange Section Rule */}
              {index < educationData.length - 1 && (
                <div className="mt-16 border-t-[1px] border-[#f57507] w-full opacity-100" />
              )}

            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}