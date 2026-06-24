import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, 
  Home, User, FolderOpen, 
  MessageSquare, Phone,
  Heart, Layers, Truck, 
  Share2, Cpu, Database
} from 'lucide-react';

interface SubMenuItem {
  href: string;
  label: string;
  description?: string;
  icon: React.ElementType;
}

interface NavLink {
  href: string;
  label: string;
  icon?: React.ElementType;
  submenu?: SubMenuItem[];
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { 
    href: '/projects', 
    label: 'Projects',
    icon: FolderOpen,
    submenu: [
      { 
        href: '/projects/happy-bar', 
        label: 'Happy Bar Non-Profit', 
        description: 'Product Development',
        icon: Heart
      },
      { 
        href: '/projects/semantic-layer', 
        label: 'Semantic Layer', 
        description: 'Knowledge Graphs',
        icon: Layers
      },
      { 
        href: '/projects/logistics', 
        label: 'Logistics Intelligence', 
        description: 'Supply Chain Analytics',
        icon: Truck
      },
      { 
        href: '/projects/knowledge-sharing', 
        label: 'Knowledge Sharing Platform', 
        description: 'QMS',
        icon: Share2
      },
      { 
        href: '/projects/device-tech', 
        label: 'Advanced Device Technology', 
        description: 'Device Reference Data',
        icon: Cpu
      },
      { 
        href: '/projects/research-data', 
        label: 'Research Data Integration', 
        description: 'Ag-Intelligence',
        icon: Database
      },
    ]
  },
  { href: '/testimonials', label: 'Testimonials', icon: MessageSquare },
  { href: '/contact', label: 'Contact', icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if a project submenu item is active
  const isProjectActive = () => {
    return location.pathname.startsWith('/projects/');
  };

  // Handle navigation for mobile menu items
  const handleMobileNav = (href: string) => {
    setIsOpen(false);
    navigate(href);
  };

  // Handle project link click - prevent navigation
  const handleProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Toggle submenu on mobile
    if (window.innerWidth < 1024) {
      setOpenSubmenu(openSubmenu === 'projects' ? null : 'projects');
    }
  };

  // Toggle submenu on desktop hover
  const handleMouseEnter = (label: string) => {
    if (window.innerWidth >= 1024) {
      setOpenSubmenu(label);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpenSubmenu(null);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Happy Food Logo"
                className="w-36 sm:w-44 h-auto rounded-lg object-cover py-3"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || 
                (link.href === '/projects' && isProjectActive());
              
              // Check if this is the Projects link
              const isProjectsLink = link.href === '/projects';
              
              return (
                <div 
                  key={link.href} 
                  className="relative group"
                  onMouseEnter={() => link.submenu && handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={isProjectsLink ? '#' : link.href}
                    onClick={isProjectsLink ? handleProjectClick : undefined}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#0c71c3] text-white shadow-md shadow-[#0c71c3]/25'
                        : 'text-gray-700 hover:bg-[#0c71c3]/10 hover:text-[#0c71c3]'
                    }`}
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openSubmenu === link.label ? 'rotate-180' : ''
                      } ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    )}
                  </Link>
                  
                  {/* Submenu */}
                  {link.submenu && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[280px] z-50 transition-all duration-200 ${
                      openSubmenu === link.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}>
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="p-1.5">
                          {link.submenu.map((subItem) => {
                            const IconComponent = subItem.icon;
                            return (
                              <Link
                                key={subItem.href}
                                to={subItem.href}
                                className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                                  location.pathname === subItem.href
                                    ? 'bg-[#0c71c3]/10 text-[#0c71c3]'
                                    : 'hover:bg-[#f57507]/5 hover:text-[#f57507]'
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                    location.pathname === subItem.href 
                                      ? ' text-[#0c71c3]' 
                                      : ' text-gray-500'
                                  }`}>
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-gray-900">
                                      {subItem.label}
                                    </div>
                                    {subItem.description && (
                                      <div className="text-xs text-gray-500 mt-0.5">
                                        {subItem.description}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-[#0c71c3]/10 hover:text-[#0c71c3] transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-x-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href || 
                  (link.href === '/projects' && isProjectActive());
                const isProjectsLink = link.href === '/projects';
                const isSubmenuOpen = openSubmenu === link.label;
                
                // For non-project links, navigate directly
                if (!isProjectsLink) {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        onClick={() => handleMobileNav(link.href)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-[#0c71c3] text-white shadow-md shadow-[#0c71c3]/25'
                            : 'text-gray-700 hover:bg-[#0c71c3]/10 hover:text-[#0c71c3]'
                        }`}
                      >
                        {link.label}
                      </button>
                    </motion.div>
                  );
                }

                // Projects link with submenu
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="space-y-0.5"
                  >
                    <button
                      onClick={() => setOpenSubmenu(isSubmenuOpen ? null : link.label)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive || isProjectActive()
                          ? 'bg-[#0c71c3] text-white shadow-md shadow-[#0c71c3]/25'
                          : 'text-gray-700 hover:bg-[#0c71c3]/10 hover:text-[#0c71c3]'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 ml-auto transition-transform duration-200 flex-shrink-0 ${
                        isSubmenuOpen ? 'rotate-180' : ''
                      } ${isActive || isProjectActive() ? 'text-white' : 'text-gray-400'}`} />
                    </button>
                    
                    {/* Mobile Submenu */}
                    {link.submenu && isSubmenuOpen && (
                      <div className="pl-4 sm:pl-6 space-y-0.5">
                        {link.submenu.map(subItem => {
                          const IconComponent = subItem.icon;
                          return (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className={`flex items-start gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                                location.pathname === subItem.href
                                  ? 'bg-[#0c71c3]/10 text-[#0c71c3]'
                                  : 'text-gray-600 hover:bg-[#f57507]/5 hover:text-[#f57507]'
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                location.pathname === subItem.href 
                                  ? ' text-[#0c71c3]' 
                                  : ' text-gray-500'
                              }`}>
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="font-medium break-words">{subItem.label}</div>
                                {subItem.description && (
                                  <div className="text-xs text-gray-400 break-words">{subItem.description}</div>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}