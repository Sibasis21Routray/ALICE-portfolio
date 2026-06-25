import { motion, Variants, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// Animated count-up number. Stays at 0 until `start` becomes true, then counts up once.
function Counter({ value, suffix = "+", start }: { value: number; suffix?: string; start: boolean }) {
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, value]);

  return (
    <p className="text-xl sm:text-2xl md:text-3xl font-black text-white tabular-nums">
      {display}{suffix}
    </p>
  );
}

// Magnetic + glow CTA wrapper. Renders as whatever element/component is passed via `as`
// (Link or `a`), preserving the original className/props untouched for layout/responsiveness.
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

export default function HeroSection() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const [statsRevealed, setStatsRevealed] = useState(false);

  return (
    <section
      className="relative min-h-[100svh] w-full flex items-center pt-32 pb-20 bg-[#030712] text-white overflow-hidden selection:bg-[#0c71c3]/30"
    >

      {/* Background Image with responsive positioning */}
      <div className="absolute inset-0 z-0">
        <img
          src="/home/ACA-hero-jpg.webp"
          alt="Background"
          className="w-full h-full object-cover object-center md:object-[70%_center] lg:object-[60%_center] xl:object-[55%_center]"
        />
      </div>

      {/* High-End Modern SaaS Ambient Overlay Stack */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {/* Layered Abstract Ambient Blobs reacting over the canvas background */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 45, 0],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#0c71c3]/20 via-[#0c71c3]/10 to-transparent rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 60, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-15%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-tr from-[#f57507]/15 via-[#0c71c3]/5 to-transparent rounded-full blur-[120px]"
        />

        {/* Fine Tech-Dot Overlay Matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] mix-blend-screen" />

        {/* Bottom edge vignetting transition */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />

        {/* Left edge vignette for better text contrast */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#030712] to-transparent md:w-1/4" />
      </div>

      {/* Main Structural Flex Grid Layout */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">

          {/* LEFT EMPTY ZONE: Expands to push content right */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7 pointer-events-none" />

          {/* RIGHT CONTENT ZONE: Text positioned on the right side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="col-span-1 lg:col-span-6 xl:col-span-5 space-y-6 sm:space-y-8 flex flex-col items-start"
          >
            {/* Glassmorphic Badge Component */}
            <motion.div variants={fadeInUp} className="inline-flex items-center w-full sm:w-auto">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/[0.03] backdrop-blur-xl text-white    text-[10px] sm:text-xs font-semibold tracking-widest uppercase rounded-full border border-white/[0.08] shadow-2xl shadow-black/40">
                <span className="hidden xs:inline">Biotechnologist & Philanthropist</span>
                <span className="xs:hidden">Bio & Philanthropy</span>
              </span>
            </motion.div>

            {/* Typography Layout */}
            <div className="space-y-3 sm:space-y-4 w-full">
              <motion.h1
                variants={fadeInUp}
                className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white tracking-tight leading-[1.05]"
              >
                ALICE CLARA
                <br />
                <span className="relative inline-block mt-0.5 sm:mt-1">
                  <span className="absolute -inset-2 bg-gradient-to-r from-[#0c71c3] to-[#f57507] blur-3xl opacity-30 rounded-xl" />
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507] drop-shadow-[0_2px_20px_rgba(12,113,195,0.15)]">
                    AUGUSTINE
                  </span>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-sm xs:text-base sm:text-lg text-white max-w-lg lg:max-w-md xl:max-w-lg leading-relaxed font-light tracking-wide"
              >
                Transforming Lives through Science, Technology & Philanthropy. Over two decades of sustainable biotechnology innovation and global welfare initiatives.
              </motion.p>
            </div>

            {/* Premium CTA Row */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full">
              <MagneticButton
                as={Link}
                to="/about"
                glowColor="rgba(12,113,195,0.55)"
                className="group relative inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-3.5 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-bold text-xs sm:text-sm rounded-full shadow-[0_4px_25px_rgba(12,113,195,0.3)] hover:shadow-[0_4px_35px_rgba(12,113,195,0.5)] transition-all hover:-translate-y-0.5"
              >
                <span>Know More About Me</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="Alice-Clara-Augustine-v2.1.pdf"
                download="Alice-Clara-Augustine-CV.pdf"
                glowColor="rgba(245,117,7,0.45)"
                className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-3.5 bg-transparent hover:bg-white/[0.04] text-white font-semibold text-xs sm:text-sm rounded-full border border-white/10 hover:border-[#0c71c3]/50 transition-all hover:-translate-y-0.5 backdrop-blur-sm shadow-xl"
              >
                Download CV
              </MagneticButton>
            </motion.div>

            {/* Floating Glassmorphic Stats Section with count-up animation */}
            <motion.div
              variants={fadeInUp}
              onAnimationComplete={() => setStatsRevealed(true)}
              className="flex items-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 mt-2 sm:mt-4 border-t border-white/10 w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
              <div>
                <Counter value={25} start={statsRevealed} />
                <p className="text-[8px] sm:text-[10px] font-bold text-[#0c71c3] uppercase tracking-widest mt-0.5 sm:mt-1">Years</p>
              </div>
              <div className="w-px h-6 sm:h-8 bg-white/10" />
              <div>
                <Counter value={50} start={statsRevealed} />
                <p className="text-[8px] sm:text-[10px] font-bold text-[#0c71c3] uppercase tracking-widest mt-0.5 sm:mt-1">Patents</p>
              </div>
              <div className="w-px h-6 sm:h-8 bg-white/10" />
              <div>
                <Counter value={250} start={statsRevealed} />
                <p className="text-[8px] sm:text-[10px] font-bold text-[#0c71c3] uppercase tracking-widest mt-0.5 sm:mt-1">Partners</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 bg-white/[0.02] backdrop-blur-md"
        >
          <motion.div
            animate={{ height: ["20%", "50%", "20%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 bg-[#0c71c3] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}