import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

function MagneticButton({
  as: Component,
  className,
  glowColor = "rgba(245,117,7,0.5)",
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

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-[#0c71c3] to-[#0a5fa3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-5 md:mb-6 leading-tight"
        >
          Ready to{" "}
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-[#f57507] blur-3xl opacity-30 rounded-xl" />
            <span className="relative text-[#f57507]">Collaborate?</span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4"
        >
          Let's work together to create meaningful impact through
          biotechnology and innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <MagneticButton
            as={Link}
            to="/contact"
            glowColor="rgba(245,117,7,0.6)"
            className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#0c71c3] font-bold text-sm sm:text-base rounded-full shadow-lg shadow-black/20 hover:shadow-black/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}