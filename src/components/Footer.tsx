import { Link, useLocation } from 'react-router-dom';
import { Leaf, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '../lib/config';

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

export default function Footer() {
  const location = useLocation();

  // Smooth scroll to section when clicking anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If we're not on the about page, navigate to it first
    if (location.pathname !== '/about') {
      const targetId = href.split('#')[1];
      // Navigate to about page with the hash
      window.location.href = href;
      return;
    }

    // If we're already on the about page, scroll to the section
    const targetId = href.split('#')[1];
    const element = document.getElementById(targetId);
    if (element) {
      // Add a small delay to ensure the page is fully rendered
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      handleAnchorClick(e, href);
    }
  };

  return (
    <footer className="bg-[#030712] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
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
              <a
                href={siteConfig?.social?.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#0c71c3] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href={`mailto:${siteConfig?.email || ''}`}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#0c71c3] flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
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
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group cursor-pointer"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#0c71c3]" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#0c71c3]" />
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
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#0c71c3]" />
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
                    <a
                      href={link.href}
                      download
                      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#0c71c3]" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#0c71c3]" />
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