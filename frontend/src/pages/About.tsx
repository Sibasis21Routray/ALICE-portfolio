import Experience from '../components/about/Experience';
import Education from '../components/about/Education';
import Awards from '../components/about/Awards';
import PatentAndPublications from '../components/about/PatentAndPublications';
import PageBanner from '../components/PageBanner';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/config';

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

export default function About() {
  return (
    <div className='overflow-x-hidden'>
      {/* Page Header */}
      <PageBanner
        title="About Me"
        description="Biotechnologist, Ontologist & Philanthropist"
        backgroundImage="/bg.jpg"
      />
      
      {/* Experience Section with ID */}
      <section id="experience">
        <Experience />
      </section>
      
      {/* Education Section with ID */}
      <section id="education">
        <Education />
      </section>
      
      {/* Awards Section with ID */}
      <section id="awards">
        <Awards />
      </section>
      
      {/* Patents Section with ID */}
      <section id="patents">
        <PatentAndPublications />
      </section>

      {/* CTA */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c71c3]/5 via-[#f57507]/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0c71c3]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Want to know more about{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-[#0c71c3] to-[#f57507] blur-3xl opacity-20 rounded-xl" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0c71c3] via-[#0c71c3] to-[#f57507]">
                  my work?
                </span>
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 mb-8 max-w-xl mx-auto text-sm">
              Check out my detailed projects or get in touch for collaboration opportunities.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              {/* <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-semibold rounded-full shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </Link> */}
              <MagneticButton
                as="a"
                href="/Alice-Clara-Augustine-v2.1.pdf"
                download
                glowColor="rgba(245,117,7,0.6)"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white font-semibold rounded-full shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Download My CV
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}