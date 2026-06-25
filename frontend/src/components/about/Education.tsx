import { motion, Variants } from 'framer-motion';
import { educationData } from "../../lib/data";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

function HeadingBubbles({ tone = 'blue' }: { tone?: 'blue' | 'orange' }) {
  // Ambient floating bubbles for section headings. Two tones so different
  // section headings can read as related without looking identical.
  const palette =
    tone === 'blue'
      ? ['rgba(12,113,195,0.32)', 'rgba(56,189,248,0.26)', 'rgba(12,113,195,0.16)']
      : ['rgba(245,117,7,0.32)', 'rgba(12,113,195,0.2)', 'rgba(245,117,7,0.16)'];

  const bubbles = [
    { size: 26, top: '8%',  left: '4%',  dur: 7.5, delay: 0 },
    { size: 19, top: '70%', left: '0%',  dur: 6,   delay: 0.5 },
    { size: 32, top: '55%', left: '10%', dur: 9,   delay: 1.1 },
    { size: 21, top: '15%', left: '88%', dur: 6.5, delay: 0.3 },
    { size: 28, top: '68%', left: '93%', dur: 8,   delay: 0.8 },
    { size: 18, top: '40%', left: '97%', dur: 5.5, delay: 1.4 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-visible">
      {bubbles.map((b, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: palette[i % palette.length],
          }}
          animate={{
            y: [0, -14, 0],
            x: [0, i % 2 === 0 ? 5 : -5, 0],
            opacity: [0.35, 0.85, 0.35],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth, staggerChildren: 0.12 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeSmooth } },
};

const bulletVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeSmooth } },
};

export default function Education() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans antialiased overflow-x-hidden">

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: easeSmooth }}
        className="relative text-center mt-10"
      >
        <div className="relative inline-block min-w-[280px] sm:min-w-[360px] px-6 z-0">
          <HeadingBubbles tone="blue" />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6, ease: easeSmooth }}
            className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 leading-tight"
          >
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507]">
              Education
            </span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6, ease: easeSmooth }}
          className="relative z-10 text-gray-500 max-w-2xl mx-auto mt-2 text-sm sm:text-base"
        >
          My Education & Skills journey
        </motion.p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-16">
        {educationData.map((edu: EducationItem, index: number) => (
          <motion.div
            key={edu.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group"
          >
            {/* Main Split Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

              {/* Left Branding & Identifiers Column */}
              <motion.div variants={childVariants} className="md:col-span-5 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-32 sm:w-40 md:w-[11.5rem] h-20 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center p-2 flex-shrink-0">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>

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
              </motion.div>

              {/* Right Paragraphs Content Column */}
              <motion.div
                variants={childVariants}
                className="md:col-span-7 space-y-5 text-gray-800 text-sm md:text-[15px] leading-relaxed font-normal pt-1"
              >
                {edu.description.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}

                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="pt-2">
                    <p className="font-semibold text-gray-900 mb-2">
                      Skills I gained from this course:
                    </p>
                    <motion.ul
                      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                      className="space-y-1.5 pl-4 list-disc marker:text-gray-400"
                    >
                      {edu.highlights.map((highlight, hIdx) => (
                        <motion.li
                          key={hIdx}
                          variants={bulletVariants}
                          className="text-gray-700"
                        >
                          {highlight}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Section Divider */}
            {index < educationData.length - 1 && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: easeSmooth, delay: 0.2 }}
                className="mt-16 border-t-[1px] border-[#f57507] w-full origin-left"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}