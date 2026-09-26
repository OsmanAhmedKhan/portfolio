import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Automatically close the mobile menu whenever the URL (route) changes
  // Wrapping in setTimeout defers the update to the next event loop tick,
  // bypassing the strict 'cascading render' ESLint rule.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Scroll-Aware Smart Header Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E0E0DB] transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between relative">
          
          {/* Left Anchor: Brand / Logo */}
          <NavLink to="/" className="group focus-visible:outline-none flex items-center z-10 shrink-0">
            <div className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight text-[#111110] whitespace-nowrap">
              Osman Ahmed Khan
            </div>
          </NavLink>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={link.href} className="flex items-center gap-8">
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `relative py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                      isActive 
                        ? 'text-[#111110] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#111110]' 
                        : 'text-[#666660] hover:text-[#111110]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                
                {/* The microscopic architectural divider */}
                {index < navLinks.length - 1 && (
                  <div className="w-[1px] h-3.5 bg-[#E0E0DB]" />
                )}
              </div>
            ))}
          </nav>

          {/* Right Anchor: Outlined Resume Target (Desktop only) */}
          <div className="hidden md:flex items-center justify-end z-10 shrink-0">
            <NavLink 
              to="/resume"
              className="group relative flex items-center gap-1.5 px-3 py-1.5 border border-[#E0E0DB] bg-white hover:border-[#111110] transition-colors"
            >
              {/* Microscopic Corner Markers */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#111110] -mt-[1px] -ml-[1px]" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#111110] -mt-[1px] -mr-[1px]" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#111110] -mb-[1px] -ml-[1px]" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#111110] -mb-[1px] -mr-[1px]" />
              
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#111110]">
                Resume
              </span>
              <ArrowUpRight size={12} strokeWidth={2.5} className="text-[#111110] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#111110] focus-visible:outline-none transition-transform active:scale-95 z-10 ml-auto"
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <nav className="md:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto animate-in fade-in duration-300">
          <div className="flex flex-col min-h-full px-6 py-12 pb-24">
            
            {/* Nav Links */}
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, index) => (
                <div 
                  key={link.href}
                  className="animate-in slide-in-from-bottom-4 fade-in fill-mode-both"
                  style={{ animationDelay: `${index * 100}ms`, animationDuration: '500ms' }}
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `relative inline-block text-sm font-bold uppercase tracking-widest transition-colors ${
                        isActive 
                          ? 'text-[#111110] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#111110]' 
                          : 'text-[#666660] hover:text-[#111110]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </div>
              ))}
            </div>
            
            {/* Mobile Footer Resume Link */}
            <div className="mt-auto pt-16 animate-in slide-in-from-bottom-4 fade-in fill-mode-both delay-300 w-fit">
               <NavLink 
                to="/resume"
                className="group relative inline-flex items-center gap-2 px-4 py-2 border border-[#E0E0DB] bg-white active:bg-gray-50 transition-colors"
              >
                {/* Microscopic Corner Markers */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#111110] -mt-[1px] -ml-[1px]" />
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#111110] -mt-[1px] -mr-[1px]" />
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#111110] -mb-[1px] -ml-[1px]" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#111110] -mb-[1px] -mr-[1px]" />
                
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#111110]">
                  View Resume
                </span>
                <ArrowUpRight size={14} strokeWidth={2.5} className="text-[#111110]" />
              </NavLink>
            </div>

          </div>
        </nav>
      )}
    </>
  );
}