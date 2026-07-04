import { Mail, Phone, MapPin, Clock, Star, Sparkles } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-brand-charcoal text-brand-cream pt-16 pb-8 border-t border-brand-cream/10 relative overflow-hidden">
      {/* Decorative ambient footer background */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-brand-cream/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-brand-cream/10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg viewBox="0 0 100 100" className="w-8 h-8 text-brand-terracotta" fill="currentColor">
                <path d="M50,15 C45,15 35,40 32,55 C28,70 15,75 25,82 C35,88 65,88 75,82 C85,75 72,70 68,55 C65,40 55,15 50,15 Z" />
              </svg>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Garden Gnomes <span className="text-xs bg-brand-cream/10 text-white px-1.5 py-0.5 rounded ml-1 font-mono uppercase tracking-wider">YYC</span>
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-brand-cream/70 leading-relaxed">
              Calgary's highly-trusted contractor specializing in premium lawn care, fine gardening, meticulous cleanups, and prompt, reliable winter snow removal.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="flex text-brand-terracotta">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </span>
              <span className="font-sans text-xs font-semibold text-white">
                4.9/5 Rating
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-bold text-brand-terracotta uppercase tracking-widest mb-4">
              Explore Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-cream/70">
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-brand-terracotta transition-colors cursor-pointer text-left"
                >
                  Lawn Care & Aeration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-brand-terracotta transition-colors cursor-pointer text-left"
                >
                  Fine Gardening & Planting
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-brand-terracotta transition-colors cursor-pointer text-left"
                >
                  Spring & Autumn Cleanup
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-brand-terracotta transition-colors cursor-pointer text-left"
                >
                  Seasonal Snow Removal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('services')}
                  className="hover:text-brand-terracotta transition-colors cursor-pointer text-left"
                >
                  Custom Estate Landscaping
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-mono text-xs font-bold text-brand-terracotta uppercase tracking-widest mb-4">
              Connect With Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-brand-cream/85">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-brand-cream/50 font-mono">Quotes & Inquiries</p>
                  <a href="mailto:estimates@gnomesyyc.ca" className="font-semibold hover:text-brand-terracotta transition-colors">
                    estimates@gnomesyyc.ca
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-brand-cream/50 font-mono">Direct Support Line</p>
                  <a href="tel:5873255523" className="font-bold hover:text-brand-terracotta transition-colors">
                    (587) 325-5523
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-brand-cream/50 font-mono">Operating Hours</p>
                  <p className="text-xs">Mon – Fri: 7:00 AM – 7:00 PM</p>
                  <p className="text-xs">Saturday: 8:00 AM – 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Service Locations */}
          <div>
            <h4 className="font-mono text-xs font-bold text-brand-terracotta uppercase tracking-widest mb-4">
              Calgary Regions Served
            </h4>
            <div className="flex gap-2.5 items-start text-xs text-brand-cream/80">
              <MapPin className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
              <div className="space-y-2 leading-relaxed">
                <p>
                  <strong>Full Coverage:</strong> Southeast (SE), Southwest (SW), Northwest (NW), and Northeast (NE) Calgary.
                </p>
                <p className="text-[11px] text-brand-cream/50">
                  Including Marda Loop, Mount Royal, Altadore, Aspen Woods, Springbank Hill, and surrounding Calgary estate communities.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-brand-cream/50 text-center sm:text-left">
            &copy; {currentYear} Garden Gnomes YYC. All rights reserved. Calgary, Alberta, Canada.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-xs text-brand-cream/50">
            <p className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-terracotta" /> WCB Alberta Compliant
            </p>
            <p className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-terracotta" /> $5,000,000 Liability Insured
            </p>
            <p>Licensed Yard Contractor</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
