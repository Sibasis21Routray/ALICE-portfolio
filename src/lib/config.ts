import { Variants } from 'framer-motion';

export const designConfig = {
  // Colors
  colors: {
    primary: '#1d6bc0',     // brand blue
    primaryDark: '#1e4d7b',
    primaryLight: '#93c5fd',
    accent: '#f97316',      // orange accent
    accentDark: '#ea580c',
    text: {
      primary: '#171717',
      secondary: '#525252',
      muted: '#737373',
      inverse: '#ffffff',
    },
    background: {
      page: '#ffffff',
      surface: '#f5f5f5',
      dark: '#262626',
      footer: '#171717',
    },
    border: '#e5e5e5',
  },

  // Fonts
  font: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    heading: "'Inter', system-ui, sans-serif",
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // Spacing
  spacing: {
    section: {
      desktop: 'py-24',
      tablet: 'py-16',
      mobile: 'py-12',
    },
    container: 'max-w-7xl mx-auto px-6 lg:px-8',
  },

  // Animation
  animation: {
    stagger: 0.1,
    duration: {
      fast: 0.3,
      normal: 0.6,
      slow: 0.8,
    },
    easing: {
      smooth: [0.25, 0.1, 0.25, 1],
      bouncy: [0.68, -0.55, 0.265, 1.55],
      spring: [0.175, 0.885, 0.32, 1.275],
    },
  },

  // Shadows
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    card: '0 4px 24px rgba(0, 0, 0, 0.08)',
    cardHover: '0 8px 32px rgba(0, 0, 0, 0.12)',
  },

  // Border radius
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
};

export const siteConfig = {
  name: 'Alice Clara Augustine',
  tagline: 'Biotechnologist, Ontologist & Philanthropist',
  email: 'contact@aliceclaraaugustine.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
};

// Motion variants for framer-motion
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
