import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/config';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
        {centered && <div className="flex-1 h-px bg-surface-200" />}
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
            light ? 'text-white' : 'text-brand-700'
          }`}
        >
          {title}
        </h2>
        {centered && <div className="flex-1 h-px bg-surface-200" />}
      </motion.div>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`text-lg max-w-2xl mx-auto ${
            light ? 'text-surface-300' : 'text-text-secondary'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
