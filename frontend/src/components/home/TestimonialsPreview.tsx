import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { testimonials } from "../../lib/data";

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

const viewportSettings = { once: true, amount: 0.2 };

export default function TestimonialsPreview() {
  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c71c3]/5 to-transparent rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f57507]/5 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="relative inline-block min-w-[280px] sm:min-w-[360px] px-6 z-0">
            <HeadingBubbles tone="blue" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              transition={{ duration: 0.5 }}
              className="relative z-10 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-[#0c71c3]/10 to-[#f57507]/10 mb-4 sm:mb-5 md:mb-6"
            >
              <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#0c71c3]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight"
            >
              What People{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#0c71c3] to-[#f57507] blur-3xl opacity-20 rounded-xl" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507]">
                  Say
                </span>
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto px-4"
          >
            Hear from industry leaders and colleagues about our
            collaborations and successes.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.slice(0, 2).map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12 sm:mt-14 md:mt-16"
        >
          <MagneticButton
            as={Link}
            to="/testimonials"
            glowColor="rgba(12,113,195,0.5)"
            className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            Read All Testimonials
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}