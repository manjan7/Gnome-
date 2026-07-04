import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroBg from '../assets/images/calgary_estate_lawn_1783135758878.jpg';

interface HeroProps {
  onScrollToQuoteForm: () => void;
}

export default function Hero({ onScrollToQuoteForm }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-brand-charcoal overflow-hidden pt-20"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Professionally manicured Calgary estate garden"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Modern multi-layer gradient overlay for outstanding legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/75 to-brand-charcoal/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-start text-left w-full">
        {/* Mini Trust Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-charcoal/80 border border-brand-terracotta/30 text-brand-terracotta font-mono text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-terracotta" />
          Calgary's Premier Contractor
        </motion.div>

        {/* H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-cream tracking-tight leading-[1.1] max-w-4xl"
          id="hero-headline"
        >
          Creating & Maintaining Yards <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cream via-orange-100 to-amber-100">
            You’ll Love to Live In
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 font-sans text-lg sm:text-xl text-brand-cream/85 max-w-2xl font-light leading-relaxed"
        >
          Premium Lawn Care, Gardening, and Seasonal Landscaping Serving Calgary, Alberta. Expert service tailored to custom residential estates, property managers, and discerning landlords.
        </motion.p>

        {/* Call to Actions & Friction Elimination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
            <button
              onClick={onScrollToQuoteForm}
              className="group flex items-center justify-center gap-2 w-full sm:w-auto font-display font-bold text-base bg-brand-terracotta hover:bg-brand-terracotta-dark text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              id="hero-cta-btn"
            >
              Get a Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-brand-cream/60 font-mono text-xs tracking-wide sm:pl-1">
              ★ Response within 24 hours
            </span>
          </div>

          <button
            onClick={() => {
              const element = document.getElementById('services');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center justify-center w-full sm:w-auto font-sans font-medium text-sm text-brand-cream/90 hover:text-white border border-brand-cream/20 hover:border-brand-cream/40 px-6 py-4 rounded-xl transition-colors bg-white/5 backdrop-blur-sm cursor-pointer"
          >
            Explore Services
          </button>
        </motion.div>

        {/* Quick Local Authority stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 border-t border-brand-cream/10 pt-8 w-full max-w-4xl"
        >
          <div>
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-white">Since 2018</p>
            <p className="font-sans text-xs text-brand-cream/60 mt-1 uppercase tracking-wider font-semibold">Calgary Roots</p>
          </div>
          <div>
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-white">500+</p>
            <p className="font-sans text-xs text-brand-cream/60 mt-1 uppercase tracking-wider font-semibold">Yards Transformed</p>
          </div>
          <div>
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-white">100%</p>
            <p className="font-sans text-xs text-brand-cream/60 mt-1 uppercase tracking-wider font-semibold">Licensed & Insured</p>
          </div>
          <div>
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-white">4.9 ★</p>
            <p className="font-sans text-xs text-brand-cream/60 mt-1 uppercase tracking-wider font-semibold">Customer Rated</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
