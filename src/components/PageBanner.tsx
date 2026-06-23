import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/config";

interface PageBannerProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function PageBanner({
  title,
  description,
  backgroundImage,
}: PageBannerProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#0c71c3]/70" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-xl text-white/80 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}