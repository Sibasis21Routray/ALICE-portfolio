import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { experience } from '../../lib/data';

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

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth, staggerChildren: 0.12 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeSmooth } },
};

const bulletVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeSmooth } },
};

export default function Experience() {
  return (
    <div className="bg-white text-gray-900 selection:bg-[#0c71c3]/30 overflow-x-hidden">

      {/* Section Header */}
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
              Experience
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
          My work at awesome companies
        </motion.p>
      </motion.div>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {experience.map((job: ExperienceItem, index: number) => (
            <motion.div
              key={job.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-[240px_1fr] gap-6">
                {/* Left Column - Company Info */}
                <motion.div variants={childVariants} className="lg:text-right">
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
                </motion.div>

                {/* Right Column - Description */}
                <div className="relative lg:pl-8 lg:border-l-2 lg:border-[#0c71c3]/20 overflow-visible">
                  {/* Dot drops in, then travels the full height of the card to and fro along the vertical line.
                      Animating `top` (not a y-transform) so the percentage resolves against the
                      containing block's actual height — which varies per card. */}
                  <motion.div
                    initial={{ top: '-15%', opacity: 0 }}
                    whileInView={{
                      top: ['-15%', '0%', '0%', '100%', '0%', '100%', '0%'],
                      opacity: [0, 1, 1, 1, 1, 1, 1],
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 4.5,
                      times: [0, 0.12, 0.2, 0.45, 0.7, 0.9, 1],
                      ease: easeSmooth,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                    className="absolute -left-[9px] w-4 h-4 rounded-full bg-[#0c71c3] border-4 border-white hidden lg:block shadow-md shadow-[#0c71c3]/30 z-10"
                    style={{ marginTop: '-8px' }}
                  />

                  <motion.div
                    variants={childVariants}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    <p className="text-gray-600 leading-relaxed text-sm mb-3">{job.description}</p>

                    {job.bullets && job.bullets.length > 0 && (
                      <motion.ul
                        variants={{
                          visible: { transition: { staggerChildren: 0.08 } },
                        }}
                        className="space-y-2"
                      >
                        {job.bullets.map((bullet: string, i: number) => (
                          <motion.li
                            key={i}
                            variants={bulletVariants}
                            className="flex items-start gap-2.5 text-sm text-gray-500"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#f57507] mt-1.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Divider */}
              {index < experience.length - 1 && (
                <div className="hidden lg:block absolute left-[240px] bottom-0 w-32 h-px bg-gradient-to-r from-[#0c71c3]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}