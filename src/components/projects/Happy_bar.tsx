import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Heart, 
  Target, 
  BarChart, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Utensils,
  Globe,
  Lightbulb,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../PageBanner';
import { Variants } from 'framer-motion';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
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
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const productPrinciples = [
  'Product concept',
  'Ideation',
  'Market analysis',
  'Opportunity in India',
  'Product creation',
  'Recipe creation',
  'Manufacturing process',
  'Machine selection',
  'Logo design',
  'Product testing with consumers',
  'Taste testing experiment design',
  'Feedback analytics',
  'Feeding study and analytics',
  'Prioritization',
  'Fund-raising',
  'Website design requirements'
];

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

export default function HappyBar() {
  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
      {/* Page Banner */}
      <PageBanner
        title="Happy Bar Non-Profit & Product Development"
        description="Promoting health for the mind, body and spirit through nutritional snacks and awareness"
        backgroundImage="/bg.jpg"
      />

      {/* Section 1: Mission - Image Left, Text Right */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            transition: { 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-[#0c71c3]/5 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            transition: { 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="absolute bottom-20 left-10 w-48 h-48 bg-[#f57507]/5 rounded-full blur-3xl pointer-events-none"
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="order-2 md:order-1"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    transition: { 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }
                  }}
                  className="absolute -inset-4 bg-[#0c71c3]/5 rounded-3xl blur-2xl" 
                />
                <div className="relative bg-gradient-to-br from-[#0c71c3]/10 to-[#f57507]/10 rounded-2xl p-6 sm:p-8 border border-gray-200">
                  <motion.div 
                    whileHover={{ rotate: 20, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0c71c3]/10 flex items-center justify-center mb-3 sm:mb-4"
                  >
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#0c71c3]" />
                  </motion.div>
                  <motion.h3 
                    whileHover={{ x: 5 }}
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                  >
                    Our Mission
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Happy Bar Nutrition promotes health for the mind, body and
                    spirit. Short term we provide nutritional snacks to needy
                    populations especially children, the sick, and the aged.
                    Long term we promote nutritional awareness and solutions to
                    self-sustainability of food.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="order-1 md:order-2"
            >
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl "
              >
                <motion.img
                  src="/projects/cashew-raisin.png"
                  alt="Happy Bar Mission"
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Vision - Image Right, Text Left */}
      <section className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
        <motion.div 
          animate={{ 
            x: [-30, 0, -30],
            transition: { 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="absolute top-1/2 right-10 w-56 h-56 bg-[#0c71c3]/5 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            transition: { 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="absolute bottom-10 left-20 w-40 h-40 bg-[#f57507]/5 rounded-full blur-3xl pointer-events-none"
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="order-2 md:order-1"
            >
              <motion.div
                whileHover={{ scale: 1.03, rotate: -1 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl "
              >
                <motion.img
                  src="/projects/date-almond-cranberry.png"
                  alt="Happy Bar Vision"
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="order-1 md:order-2"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    transition: { 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }
                  }}
                  className="absolute -inset-4 bg-[#f57507]/5 rounded-3xl blur-2xl" 
                />
                <div className="relative bg-gradient-to-br from-[#f57507]/10 to-[#0c71c3]/10 rounded-2xl p-6 sm:p-8 border border-gray-200">
                  <motion.div 
                    whileHover={{ rotate: -20, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#f57507]/10 flex items-center justify-center mb-3 sm:mb-4"
                  >
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#f57507]" />
                  </motion.div>
                  <motion.h3 
                    whileHover={{ x: -5 }}
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                  >
                    Our Vision
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Nutrition for All – A world of communities with no
                    undernourished people. We produce tasty, healthy snack bars
                    for impoverished children.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Management Principles - Full Width */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            transition: { 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0c71c3]/5 rounded-full blur-3xl pointer-events-none"
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-12">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center gap-3 mb-3"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    transition: { 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }
                  }}
                >
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-[#f57507]" />
                </motion.div>
                <span className="text-[#0c71c3] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  Process
                </span>
              </motion.div>
              <motion.h2 
                variants={fadeInUp}
                className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
              >
                <HeadingBubbles tone="blue" />
                <span className="relative z-10">Product Management Principles Used</span>
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base"
              >
                A comprehensive approach from concept to launch
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {productPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(12,113,195,0.15)"
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#0c71c3]/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0c71c3] flex-shrink-0" />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {principle}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              variants={fadeInUp}
              className='flex justify-center mt-8 sm:mt-10'
            >
              <MagneticButton
                as={Link}
                to="/projects/happybar"
                glowColor="rgba(12,113,195,0.5)"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#0c71c3] hover:bg-[#0a5fa3] text-white text-sm sm:text-base rounded-full font-semibold hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#0c71c3]/30 hover:shadow-[#0c71c3]/50"
              >
                Click for more information
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}