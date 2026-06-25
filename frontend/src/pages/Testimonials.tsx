import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Quote, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { staggerContainer, fadeInUp } from '../lib/config';
import { testimonials } from '../lib/data';
import PageBanner from '../components/PageBanner';

function HeadingBubbles({ tone = 'blue' }: { tone?: 'blue' | 'orange' }) {
  const palette =
    tone === 'blue'
      ? ['rgba(12,113,195,0.32)', 'rgba(56,189,248,0.26)', 'rgba(12,113,195,0.16)']
      : ['rgba(245,117,7,0.32)', 'rgba(12,113,195,0.2)', 'rgba(245,117,7,0.16)'];

  const bubbles = [
    { size: 26, top: '8%',  left: '4%',  dur: 7.5, delay: 0 },
    { size: 19,  top: '70%', left: '0%',  dur: 6,   delay: 0.5 },
    { size: 32, top: '55%', left: '10%', dur: 9,   delay: 1.1 },
    { size: 21, top: '15%', left: '88%', dur: 6.5, delay: 0.3 },
    { size: 28, top: '68%', left: '93%', dur: 8,   delay: 0.8 },
    { size: 18,  top: '40%', left: '97%', dur: 5.5, delay: 1.4 },
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
  glowColor = 'rgba(245,117,7,0.5)',
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
    ([gx, gy]: number[]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, ${glowColor}, transparent 70%)`
  );

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      {...rest}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, position: 'relative' }}
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

// All visible cards are the same size - all active
const CARD_WIDTH = 360;
const GAP = 24;
const TRACK_H = 520;
const STEP = CARD_WIDTH + GAP;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;

  const mod = (n: number, m: number) => ((n % m) + m) % m;

  // Triple the list for infinite scrolling
  const virtualItems = [...testimonials, ...testimonials, ...testimonials];
  const offset = total;

  const goTo = (i: number) => setActiveIndex(mod(i, total));
  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  // Calculate center position to show exactly 3 cards
  const containerWidth = window.innerWidth;
  const centerOffset = containerWidth / 2 - CARD_WIDTH / 2;
  
  // Position the middle card at center
  const translateX = `calc(${centerOffset}px - ${(offset + activeIndex) * STEP}px)`;

  // Helper to check if a card is currently visible (one of the 3 active cards)
  const isCardVisible = (vi: number) => {
    const currentVirtualIndex = offset + activeIndex;
    return vi >= currentVirtualIndex - 1 && vi <= currentVirtualIndex + 1;
  };

  return (
    <div className="bg-white text-gray-900 selection:bg-[#0c71c3]/30">

      <style>{`
        @keyframes spin-border {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(
            270deg,
            #0c71c3, #f57507, #0c71c3, #38bdf8, #0c71c3
          );
          background-size: 300% 300%;
          animation: spin-border 3s ease infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          z-index: 0;
          pointer-events: none;
        }
      `}</style>

      <PageBanner
        title="Words from Collaborators"
        description="Real feedback from industry pioneers, academic leads, and global partners driving technology forward."
        backgroundImage="/bg.jpg"
      />

      <section className="py-16 sm:py-20 md:py-28 bg-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0c71c3]/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#f57507]/6 rounded-full blur-3xl" />
        </div>

        {/* Section heading */}
        <div className="relative max-w-3xl mx-auto px-4 text-center mb-12 md:mb-16">
          <HeadingBubbles tone="blue" />
          <span className="relative z-10 inline-block text-[#0c71c3] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Trusted Voices
          </span>
          <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase text-gray-900">
            What People Are <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] to-[#f57507]">
              Saying
            </span>
          </h2>
        </div>

        {/* ── Carousel with 3 active cards ── */}
        <div className="relative z-10">

          {/* Left + right fade masks */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-48 z-20"
            style={{ background: 'linear-gradient(to right, rgb(249,250,251), transparent)' }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-48 z-20"
            style={{ background: 'linear-gradient(to left, rgb(249,250,251), transparent)' }}
          />

          {/* The sliding track */}
          <div
            className="overflow-hidden"
            style={{ height: TRACK_H }}
          >
            <motion.div
              className="flex"
              animate={{ x: translateX }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              style={{ gap: GAP, alignItems: 'center', height: '100%' }}
            >
              {virtualItems.map((t, vi) => {
                const realIndex = vi % total;
                const isCenter = realIndex === activeIndex && vi === offset + activeIndex;
                const isVisible = isCardVisible(vi);

                return (
                  <div
                    key={`${vi}-${t.id}`}
                    onClick={() => {
                      const delta = vi - (offset + activeIndex);
                      if (delta !== 0) goTo(activeIndex + delta);
                    }}
                    className={`flex-shrink-0 flex flex-col rounded-2xl transition-all duration-500 cursor-pointer relative
                      ${isCenter && isVisible ? 'animated-border' : ''}`}
                    style={{
                      width: CARD_WIDTH,
                      height: TRACK_H - 40,
                      opacity: isVisible ? 1 : 0.3,
                      pointerEvents: isVisible ? 'auto' : 'none',
                      background: '#ffffff',
                      boxShadow: isCenter && isVisible
                        ? '0 24px 64px -12px rgba(12,113,195,0.25)'
                        : isVisible
                        ? '0 8px 24px -4px rgba(156,163,175,0.15)'
                        : '0 4px 12px -4px rgba(156,163,175,0.05)',
                      border: isCenter && isVisible ? 'none' : '1px solid rgb(243,244,246)',
                      borderRadius: 20,
                      transform: isCenter && isVisible ? 'scale(1)' : isVisible ? 'scale(0.96)' : 'scale(0.92)',
                    }}
                  >
                    <div className="relative z-10 p-6 md:p-8 flex flex-col h-full rounded-2xl overflow-hidden bg-white">

                      {/* Quote icon */}
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 flex-shrink-0 ${
                        isCenter && isVisible ? 'bg-[#0c71c3]/10' : 'bg-gray-100'
                      }`}>
                        <Quote className={`w-4 h-4 rotate-180 ${
                          isCenter && isVisible ? 'text-[#0c71c3]' : 'text-gray-300'
                        }`} />
                      </div>

                      {/* Scrollable text */}
                      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                        <p className={`leading-relaxed font-light tracking-wide ${
                          isCenter && isVisible 
                            ? 'text-gray-700 text-[0.95rem]' 
                            : isVisible 
                            ? 'text-gray-600 text-sm' 
                            : 'text-gray-300 text-sm'
                        }`}>
                          &ldquo;{t.text}&rdquo;
                        </p>
                      </div>

                      {/* Author */}
                      <div className={`flex items-center gap-3 mt-5 pt-4 border-t flex-shrink-0 ${
                        isCenter && isVisible ? 'border-[#0c71c3]/10' : 'border-gray-100'
                      }`}>
                        <img
                          src={t.image}
                          alt={t.name}
                          className={`rounded-full object-cover border-2 flex-shrink-0 transition-all duration-500 ${
                            isCenter && isVisible 
                              ? 'w-11 h-11 border-[#0c71c3]/30 ring-4 ring-white shadow-md' 
                              : isVisible 
                              ? 'w-10 h-10 border-gray-200' 
                              : 'w-10 h-10 border-gray-100 opacity-30'
                          }`}
                        />
                        <div className="min-w-0">
                          <p className={`font-bold tracking-wide truncate transition-colors duration-300 ${
                            isCenter && isVisible 
                              ? 'text-gray-900 text-sm' 
                              : isVisible 
                              ? 'text-gray-700 text-sm' 
                              : 'text-gray-300 text-sm'
                          }`}>
                            {t.name}
                          </p>
                          <p className={`font-medium truncate mt-0.5 ${
                            isCenter && isVisible 
                              ? 'text-gray-500 text-xs' 
                              : isVisible 
                              ? 'text-gray-500 text-xs' 
                              : 'text-gray-300 text-xs'
                          }`}>
                            {t.role}
                          </p>
                          {t.company && (
                            <p className={`font-medium truncate ${
                              isCenter && isVisible 
                                ? 'text-gray-400 text-xs' 
                                : isVisible 
                                ? 'text-gray-400 text-xs' 
                                : 'text-gray-300 text-xs'
                            }`}>
                              {t.company}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Prev / Next arrow buttons */}
          <div className="flex items-center justify-center gap-4 mt-8 relative z-30">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm hover:border-[#0c71c3]/40 hover:shadow-md flex items-center justify-center text-gray-500 hover:text-[#0c71c3] transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_: typeof testimonials[0], i: number) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-7 h-2 bg-[#0c71c3]' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm hover:border-[#0c71c3]/40 hover:shadow-md flex items-center justify-center text-gray-500 hover:text-[#0c71c3] transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-center text-gray-400 text-xs mt-3 tabular-nums">
            {activeIndex + 1} / {total}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative bg-white overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], transition: { duration: 15, repeat: Infinity, ease: 'easeInOut' } }}
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0c71c3]/5 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-[#0c71c3]/5 via-[#f57507]/5 to-white rounded-xl sm:rounded-2xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-16 border border-[#0c71c3]/10 shadow-xl shadow-[#0c71c3]/5 text-center"
          >
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0c71c3]/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="hidden md:block absolute top-0 right-0 w-60 h-60 bg-[#f57507]/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 max-w-2xl mx-auto space-y-3 sm:space-y-4 md:space-y-6"
            >
              <motion.h2
                variants={fadeInUp}
                className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase text-gray-900"
              >
                <HeadingBubbles tone="orange" />
                <span className="relative z-10">
                  Want to expand <br className="sm:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] to-[#f57507]">
                    the vision?
                  </span>
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-gray-600 font-light max-w-md mx-auto text-xs sm:text-sm md:text-base leading-relaxed tracking-wide"
              >
                I am always open to discussing advanced research initiatives, creative technical architectural builds, or sustainable global ventures.
              </motion.p>

              <motion.div variants={fadeInUp} className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <MagneticButton
                  as={Link}
                  to="/contact"
                  glowColor="rgba(245,117,7,0.6)"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get In Touch
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 stroke-[2.5]" />
                </MagneticButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}