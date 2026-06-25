import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '../lib/config';
import { useEffect } from 'react';

const footerLinks = {
  navigation: [
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/about#experience' },
    { label: 'Education & Skills', href: '/about#education' },
    { label: 'Awards', href: '/about#awards' },
    { label: 'Patents & Publications', href: '/about#patents' },
    { label: 'Testimonials', href: '/testimonials' },
  ],
  projects: [
    { label: 'Happy Bar Non-Profit & Product Development', href: '/projects/happy-bar' },
    { label: 'Semantic Layer', href: '/projects/semantic-layer' },
    { label: 'Logistics Intelligence Platform', href: '/projects/logistics' },
    { label: 'Knowledge Sharing Platform', href: '/projects/knowledge-sharing' },
    { label: 'Advanced Device Technology', href: '/projects/device-tech' },
    { label: 'Research Data Integration Platform', href: '/projects/research-data' },
  ],
  etc: [
    { label: "Download My CV", href: "/Alice-Clara-Augustine-v2.1.pdf", download: true },
    { label: 'Contact Me', href: '/contact' },
  ],
};

// Shared arrow that slides in from the left and nudges further right on hover,
// instead of just fading in place.
function AnimatedArrow() {
  return (
    <span className="relative inline-flex items-center w-3 h-3 overflow-visible">
      <ArrowUpRight
        className="w-3 h-3 text-[#0c71c3] opacity-0 -translate-x-2 -translate-y-0.5
                   group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
                   transition-all duration-300 ease-out
                   group-hover:[animation:footer-arrow-pop_0.5s_ease-out]"
      />
    </span>
  );
}

function FooterLinkLabel({ label }: { label: string }) {
  return (
    <span className="relative inline-flex items-center gap-1.5">
      <span
        className="text-gray-400 group-hover:text-white text-sm transition-colors duration-300
                   translate-x-0 group-hover:translate-x-0.5"
      >
        {label}
      </span>
      <AnimatedArrow />
    </span>
  );
}

// Faint corner dot-grid decoration. `corner` controls placement + which way
// the grid "grows" (so it always sits flush against its corner).
function CornerDotGrid({
  corner,
  color,
}: {
  corner: 'top-left' | 'bottom-right';
  color: string;
}) {
  const cols = [4, 16, 28];
  const rows = [4, 16, 28];
  // top-left grid grows down/right, bottom-right grid grows up/left
  const points =
    corner === 'top-left'
      ? [
          [cols[0], rows[0]], [cols[1], rows[0]], [cols[2], rows[0]],
          [cols[0], rows[1]], [cols[1], rows[1]],
          [cols[0], rows[2]],
        ]
      : [
          [70 - cols[0], 70 - rows[0]], [70 - cols[1], 70 - rows[0]], [70 - cols[2], 70 - rows[0]],
          [70 - cols[0], 70 - rows[1]], [70 - cols[1], 70 - rows[1]],
          [70 - cols[0], 70 - rows[2]],
        ];

  const positionClass =
    corner === 'top-left' ? 'top-0 left-0' : 'bottom-0 right-0';

  return (
    <svg
      width="70"
      height="70"
      aria-hidden="true"
      className={`pointer-events-none absolute ${positionClass} opacity-40`}
    >
      {points.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.6" fill={color} />
      ))}
    </svg>
  );
}

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle hash navigation after page loads
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]);

  // Handle navigation for anchor links
  const handleAnchorNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      // If we're already on the about page, just scroll to the section
      if (location.pathname === '/about') {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      
      // Navigate to the about page with the hash
      navigate(`/about#${hash}`);
    }
  };

  return (
    <footer className="bg-[#030712] text-white relative overflow-hidden">
      {/* Keyframes for the little arrow "pop" on hover */}
      <style>{`
        @keyframes footer-arrow-pop {
          0% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(3px, -3px) scale(1.15); }
          100% { transform: translate(1px, -1px) scale(1); }
        }
      `}</style>

      {/* Corner dot-grid decoration */}
      <CornerDotGrid corner="top-left" color="#378ADD" />
      <CornerDotGrid corner="bottom-right" color="#EF9F27" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="relative">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">ALICE CLARA</span>
                <span className="text-xl font-bold text-[#0c71c3] tracking-tight">AUGUSTINE</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Biotechnologist, Ontologist & Philanthropist transforming lives through science and technology.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                // href={siteConfig?.social?.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#0c71c3] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                // href={`mailto:${siteConfig?.email || ''}`}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#0c71c3] flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#f57507] font-bold text-sm uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  {link.href.includes('#') ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchorNavigation(e, link.href)}
                      className="group inline-flex cursor-pointer"
                    >
                      <FooterLinkLabel label={link.label} />
                    </a>
                  ) : (
                    <Link to={link.href} className="group inline-flex">
                      <FooterLinkLabel label={link.label} />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-[#f57507] font-bold text-sm uppercase tracking-wider mb-6">
              Projects
            </h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="group inline-flex">
                    <FooterLinkLabel label={link.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ETC */}
          <div>
            <h4 className="text-[#f57507] font-bold text-sm uppercase tracking-wider mb-6">
              ETC
            </h4>
            <ul className="space-y-3">
              {footerLinks.etc.map((link) => (
                <li key={link.label}>
                  {link.download ? (
                    <a href={link.href} download className="group inline-flex">
                      <FooterLinkLabel label={link.label} />
                    </a>
                  ) : (
                    <Link to={link.href} className="group inline-flex">
                      <FooterLinkLabel label={link.label} />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Alice Clara Augustine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}