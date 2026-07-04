import { motion } from 'motion/react';
import { Leaf, Heart, ClipboardCheck } from 'lucide-react';
import gnomesBrand from '../assets/images/editorial_gnomes_brand_1783135777745.jpg';

export default function AboutNarrative() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-brand-cream border-t border-brand-charcoal/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Premium Gnomes Character Brand Illustration */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Outer decorative organic border */}
              <div className="absolute inset-4 border border-brand-charcoal/10 rounded-2xl -z-10 pointer-events-none translate-x-4 translate-y-4" />
              <div className="bg-brand-charcoal/5 p-2 rounded-2xl shadow-md overflow-hidden aspect-square">
                <img
                  src={gnomesBrand}
                  alt="Garden Gnomes YYC signature brand illustration"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-charcoal text-brand-cream p-4 rounded-xl shadow-lg border border-brand-terracotta/30 max-w-xs hidden sm:block">
                <p className="font-sans text-xs text-brand-terracotta font-bold uppercase tracking-wider font-mono">
                  Why Gnomes?
                </p>
                <p className="font-sans text-xs text-brand-cream/80 mt-1 leading-relaxed">
                  "Although we are not tiny old men with pointy red hats, we watch over your garden, keeping it looking its absolute best."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-mono text-xs font-bold text-brand-terracotta uppercase tracking-widest bg-brand-terracotta-light px-3.5 py-1.5 rounded-full w-fit">
              Our Story
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal tracking-tight mt-4 leading-tight">
              Friendly Character. <br />
              Premium Contractor Standards.
            </h2>
            
            <div className="mt-6 font-sans text-sm sm:text-base text-brand-charcoal/80 space-y-4 leading-relaxed">
              <p>
                Since 2018, <strong>Garden Gnomes YYC</strong> has been helping premium residential homeowners, discerning landlords, and property managers design, build, and maintain thriving properties in Calgary, Alberta.
              </p>
              <p>
                We started with a simple belief: garden services shouldn't feel transactional, nor should they feel amateurish. By balancing the warm, reliable, friendly character of the traditional "Garden Gnome" with the rigorous quality standards of a licensed, fully-insured $5M commercial contractor, we provide an unparalleled customer experience.
              </p>
              <p>
                Whether trimming ornamental trees in Mount Royal, mowing pristine turf in Marda Loop, or clearing heavy winter snowfall within hours of a storm, we treat every property as if it were our own.
              </p>
            </div>

            {/* Values Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-brand-charcoal/10">
              
              <div className="flex flex-col items-start">
                <div className="p-2.5 bg-brand-terracotta-light rounded-lg mb-3">
                  <Leaf className="w-5 h-5 text-brand-terracotta" />
                </div>
                <h4 className="font-display font-bold text-sm text-brand-charcoal">Calgary Local</h4>
                <p className="font-sans text-xs text-brand-charcoal/70 mt-1 leading-relaxed">
                  Deeply familiar with zone-specific soil, drafts, and chinook climate cycles.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="p-2.5 bg-brand-terracotta-light rounded-lg mb-3">
                  <ClipboardCheck className="w-5 h-5 text-brand-terracotta" />
                </div>
                <h4 className="font-display font-bold text-sm text-brand-charcoal">Meticulous Execution</h4>
                <p className="font-sans text-xs text-brand-charcoal/70 mt-1 leading-relaxed">
                  We don’t cut corners. We inspect gate latches, clean clippings, and lock up.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="p-2.5 bg-brand-terracotta-light rounded-lg mb-3">
                  <Heart className="w-5 h-5 text-brand-terracotta" />
                </div>
                <h4 className="font-display font-bold text-sm text-brand-charcoal">Frictionless Care</h4>
                <p className="font-sans text-xs text-brand-charcoal/70 mt-1 leading-relaxed">
                  Fast 24-hour replies, digitized client invoices, and friendly service.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
