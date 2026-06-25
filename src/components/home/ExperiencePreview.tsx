import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { experience } from "../../lib/data";

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

function MagneticButton({
  as: Component,
  className,
  glowColor = "rgba(12,113,195,0.5)",
  children,
  ...rest
}: {
  as: any;
  className?: string;
  glowColor?: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.3 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowOpacity = useMotionValue(0);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set((px / rect.width - 0.5) * 10);
    y.set((py / rect.height - 0.5) * 10);
    glowX.set((px / rect.width) * 100);
    glowY.set((py / rect.height) * 100);
  };

  const handleEnter = () => glowOpacity.set(1);
  const handleLeave = () => {
    x.set(0);
    y.set(0);
    glowOpacity.set(0);
  };

  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]: number[]) => `radial-gradient(circle at ${gx}% ${gy}%, ${glowColor}, transparent 70%)`
  );

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      {...rest}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, position: "relative" }}
      className={className}
    >
      <motion.span
        aria-hidden="true"
        style={{ background: glowBackground, opacity: glowOpacity }}
        className="pointer-events-none absolute -inset-2 rounded-full blur-lg transition-opacity"
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </MotionComponent>
  );
}

export default function ExperiencePreview() {
  return (
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
          <div className="relative inline-block min-w-[280px] sm:min-w-[360px] px-6 z-0">
            <HeadingBubbles tone="blue" />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 inline-block text-[#0c71c3] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 bg-[#0c71c3]/10 px-3 sm:px-4 py-1 rounded-full border border-[#0c71c3]/20"
            >
              Career Highlights
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-2 leading-tight"
            >
              A Legacy of{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#0c71c3] to-[#f57507] blur-3xl opacity-20 rounded-xl" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507]">
                  Innovation
                </span>
              </span>
            </motion.h2>
          </div>

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
            {experience.slice(0, 5).map((job: any, index: number) => (
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
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="pt-5 flex justify-center lg:justify-start"
            >
              <MagneticButton
                as={Link}
                to="/about#experience"
                glowColor="rgba(12,113,195,0.5)"
                className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3 sm:py-3.5 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-semibold text-sm sm:text-base rounded-full shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View Full Timeline</span>
                <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-300">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}