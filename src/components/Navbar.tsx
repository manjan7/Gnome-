import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-charcoal/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <button
            onClick={() => onScrollToSection('hero')}
            className="flex items-center space-x-2 text-left focus:outline-none cursor-pointer"
            id="nav-logo"
          >
            <div className="relative flex items-center justify-center">
              {/* Custom refined minimal gnome hat SVG */}
              <svg
                viewBox="0 0 100 100"
                className="w-10 h-10 text-brand-terracotta transform -rotate-12 transition-transform hover:rotate-0 duration-300"
                fill="currentColor"
              >
                {/* Refined clean organic shape of gnome hat */}
                <path d="M50,15 C45,15 35,40 32,55 C28,70 15,75 25,82 C35,88 65,88 75,82 C85,75 72,70 68,55 C65,40 55,15 50,15 Z" />
                {/* Hat details */}
                <ellipse cx="50" cy="81" rx="23" ry="5" fill="currentColor" opacity="0.1" />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-brand-charcoal">
                Garden Gnomes
              </span>
              <span className="ml-1 px-1.5 py-0.5 bg-brand-charcoal text-brand-cream font-mono text-[10px] font-semibold rounded tracking-wider">
                YYC
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onScrollToSection('services')}
              className="font-sans font-medium text-sm text-brand-charcoal/80 hover:text-brand-terracotta transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => onScrollToSection('before-after')}
              className="font-sans font-medium text-sm text-brand-charcoal/80 hover:text-brand-terracotta transition-colors cursor-pointer"
            >
              Before & After
            </button>
            <button
              onClick={() => onScrollToSection('about')}
              className="font-sans font-medium text-sm text-brand-charcoal/80 hover:text-brand-terracotta transition-colors cursor-pointer"
            >
              About
            </button>
            <a
              href="tel:5873255523"
              className="flex items-center text-sm font-semibold text-brand-charcoal hover:text-brand-terracotta transition-colors gap-1.5"
            >
              <Phone className="w-4 h-4 text-brand-terracotta" />
              (587) 325-5523
            </a>
            <button
              onClick={() => onScrollToSection('quote-form')}
              className="font-display font-semibold text-sm bg-brand-terracotta hover:bg-brand-terracotta-dark text-white px-5 py-2.5 rounded-lg shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
            >
              Get a Free Estimate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href="tel:5873255523"
              className="p-2 text-brand-charcoal hover:text-brand-terracotta transition-colors"
              aria-label="Call Us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-charcoal hover:text-brand-terracotta focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-charcoal/10 shadow-lg absolute top-full left-0 right-0 py-6 px-4 space-y-4 animate-in fade-in slide-in-from-top duration-200">
          <button
            onClick={() => {
              onScrollToSection('services');
              setIsOpen(false);
            }}
            className="block w-full text-left font-sans font-medium text-base text-brand-charcoal/95 hover:text-brand-terracotta py-2 border-b border-gray-100 cursor-pointer"
          >
            Our Services
          </button>
          <button
            onClick={() => {
              onScrollToSection('before-after');
              setIsOpen(false);
            }}
            className="block w-full text-left font-sans font-medium text-base text-brand-charcoal/95 hover:text-brand-terracotta py-2 border-b border-gray-100 cursor-pointer"
          >
            Before & After Showcase
          </button>
          <button
            onClick={() => {
              onScrollToSection('about');
              setIsOpen(false);
            }}
            className="block w-full text-left font-sans font-medium text-base text-brand-charcoal/95 hover:text-brand-terracotta py-2 border-b border-gray-100 cursor-pointer"
          >
            About Garden Gnomes
          </button>
          <div className="py-2">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-mono mb-2">Speak to Our Team</p>
            <a
              href="tel:5873255523"
              className="flex items-center text-lg font-bold text-brand-charcoal hover:text-brand-terracotta gap-2"
            >
              <Phone className="w-5 h-5 text-brand-terracotta" />
              (587) 325-5523
            </a>
          </div>
          <button
            onClick={() => {
              onScrollToSection('quote-form');
              setIsOpen(false);
            }}
            className="block w-full text-center font-display font-semibold bg-brand-terracotta hover:bg-brand-terracotta-dark text-white py-3 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            Get a Free Estimate
          </button>
        </div>
      )}
    </nav>
  );
}
