import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import { slideInLeft } from "../../lib/config";

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

function CornerBubbles() {
  // Ambient floating bubbles clustered in the bottom-right corner of the image.
  const bubbles = [
    { size: 22, bottom: '6%',  right: '4%',  dur: 7,   delay: 0,   color: 'rgba(12,113,195,0.45)' },
    { size: 14, bottom: '16%', right: '12%', dur: 5.5, delay: 0.4, color: 'rgba(245,117,7,0.4)' },
    { size: 30, bottom: '-4%', right: '-6%', dur: 8.5, delay: 0.8, color: 'rgba(12,113,195,0.3)' },
    { size: 11, bottom: '24%', right: '2%',  dur: 6,   delay: 1.2, color: 'rgba(245,117,7,0.35)' },
    { size: 17, bottom: '2%',  right: '20%', dur: 6.8, delay: 0.6, color: 'rgba(56,189,248,0.4)' },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-6 -right-6 w-40 h-40 sm:w-48 sm:h-48 z-20 overflow-visible"
    >
      {bubbles.map((b, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full blur-[0.5px]"
          style={{
            width: b.size,
            height: b.size,
            bottom: b.bottom,
            right: b.right,
            background: b.color,
          }}
          animate={{
            y: [0, -16, 0],
            x: [0, i % 2 === 0 ? -6 : 6, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function CornerTiltImage({ src, alt }: { src: string; alt: string }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 18, mass: 0.4 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    const cornerStrength = Math.min(1, Math.hypot(relX, relY) / 0.7);
    rotateY.set(relX * 18 * cornerStrength);
    rotateX.set(-relY * 18 * cornerStrength);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1000 }}
      className="relative rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem]"
    >
      <CornerBubbles />

      <motion.div
        style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-300/50 bg-white p-2 sm:p-3 rotate-[-2deg] hover:rotate-0 transition-transform duration-500 ease-out"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-[1rem] sm:rounded-[1.5rem] lg:rounded-[2rem]"
        />
      </motion.div>
    </div>
  );
}

export default function AboutPreview() {
  // Local variants for the text column only — guarantees a "rise from slightly below"
  // entrance on scroll, independent of whatever lib/config's fadeInUp/staggerContainer contain.
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  return (
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

            <CornerTiltImage src="/home/ACA-1.png" alt="About Alice" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
              <MagneticButton
                as={Link}
                to="/about"
                glowColor="rgba(12,113,195,0.5)"
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn more about my journey
                <motion.span className="inline-block" whileHover={{ x: 5 }}>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}