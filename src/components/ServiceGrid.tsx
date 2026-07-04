import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, Clock, ShieldAlert, ArrowRight, X } from 'lucide-react';
import { Service } from '../types';

interface ServiceGridProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

const SERVICES: Service[] = [
  {
    id: 'lawn-care',
    title: 'Lawn Care',
    tagline: 'Immaculate mowing, aeration, & edge detailing.',
    shortDescription: 'Professional upkeep scheduled for thick, vibrant, weed-free Calgary turf.',
    scope: [
      'Regular weekly or bi-weekly mowing',
      'Mechanical core aeration & power raking',
      'Professional turf fertilization & weed management',
      'Crisp mechanical blade edging on driveways & garden beds',
      'Thorough clippings leaf-blowing and cleanup'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&q=80&w=800',
    pricingInfo: 'Starting at $45 / visit',
    season: 'Spring/Summer'
  },
  {
    id: 'fine-gardening',
    title: 'Fine Gardening',
    tagline: 'Horticultural care, planting, & trimming.',
    shortDescription: 'Lush, thriving, insect-free flower beds curated for Calgary’s short growing season.',
    scope: [
      'Thorough hand weeding & organic pest management',
      'Soil cultivation, fertilization, & premium mulch top-dress',
      'Perennial splitting, deadheading, & dividing',
      'Professional hedge trimming & ornamental shrub shaping',
      'Seasonal flower planting & container design'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800',
    pricingInfo: 'Starting at $75 / hour',
    season: 'Spring/Summer'
  },
  {
    id: 'yard-cleanup',
    title: 'Yard Cleanup',
    tagline: 'Comprehensive Spring & Autumn revivals.',
    shortDescription: 'Complete debris, leaf, and deadfall clearing to prime your property’s health.',
    scope: [
      'Debris, pine needle, & leaf vacuuming/bagging',
      'Perennial cutbacks & composting preparation',
      'Power-raking of heavy winter thatch buildup',
      'Core lawn aeration & organic topdressing prep',
      'Gutter clearing and downspout flush (upon request)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=800',
    pricingInfo: 'Packages starting at $249',
    season: 'Year-Round'
  },
  {
    id: 'snow-removal',
    title: 'Seasonal Snow Removal',
    tagline: 'Relentless 24-hour winter protection.',
    shortDescription: 'Immediate, reliable snow clearing on walks and drives, adhering to Calgary’s strict bylaws.',
    scope: [
      'Clearing within 24 hours of snowfall (often same-day)',
      'Pet-safe, eco-friendly ice melt applications',
      'Shoveling and sanding of critical steps, ramps & slopes',
      'Unlimited winter visits under flat monthly contracts',
      'Detailed tracking logs with timestamp proof'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547989453-11e67ffb3885?auto=format&fit=crop&q=80&w=800',
    pricingInfo: 'Contracts starting at $199 / month',
    season: 'Winter'
  },
  {
    id: 'custom-landscaping',
    title: 'Custom Landscaping',
    tagline: 'Stunning hardscapes, sod, & timber work.',
    shortDescription: 'Bespoke paving patios, garden beds, and sod installations designed to add home equity.',
    scope: [
      'Premium Kentucky Bluegrass sod installation & soil grading',
      'Custom timber & dry-stack stone retaining walls',
      'Paving stone patios, steps, & flagstone walkways',
      'Laying decorative mulch, soil, and river rock',
      'In-ground garden bed creation & shrub installation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800',
    pricingInfo: 'By custom quote estimation',
    season: 'Spring/Summer'
  }
];

export default function ServiceGrid({ onSelectServiceForQuote }: ServiceGridProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
  };

  const handleAddToEstimate = (serviceId: string) => {
    setSelectedService(null);
    onSelectServiceForQuote(serviceId);
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="font-mono text-xs font-bold text-brand-terracotta uppercase tracking-widest bg-brand-terracotta-light px-3.5 py-1.5 rounded-full">
            Our Offerings
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-tight mt-4 leading-tight">
            Premium Landscaping & Property Maintenance
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-charcoal/80 mt-4 leading-relaxed">
            We replace generic shortcuts with premium horticultural practices, meticulous edging, and reliable winter schedules.
          </p>
        </div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-brand-charcoal/10 shadow-sm hover:shadow-xl hover:border-brand-terracotta/20 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} outcomes in Calgary`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-charcoal/90 backdrop-blur-sm text-brand-cream text-xs font-mono px-3 py-1.5 rounded-full font-semibold">
                  {service.season}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-charcoal group-hover:text-brand-terracotta transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans font-medium text-xs text-brand-terracotta mt-1 italic">
                    {service.tagline}
                  </p>
                  <p className="font-sans text-sm text-brand-charcoal/80 mt-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Scope Reveal on Hover & CTAs */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs font-bold text-brand-charcoal">
                      {service.pricingInfo}
                    </span>
                    <button
                      onClick={() => handleServiceSelect(service)}
                      className="inline-flex items-center gap-1.5 font-display font-semibold text-xs text-brand-terracotta hover:text-brand-terracotta-dark group/btn cursor-pointer"
                    >
                      Specifications
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Specs Overlay / Drawer Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-charcoal/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-brand-charcoal/10 z-10"
              id="service-specs-modal"
            >
              {/* Header Image */}
              <div className="relative h-48 sm:h-56">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-brand-charcoal/60 hover:bg-brand-terracotta text-white p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-brand-terracotta text-white font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                    {selectedService.season}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Specifications details */}
              <div className="p-6 sm:p-8">
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-charcoal/50 mb-3 font-mono">
                  Standard Scope of Service
                </h4>
                <ul className="space-y-3 mb-6">
                  {selectedService.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-brand-charcoal">
                      <Check className="w-4 h-4 text-brand-terracotta shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-brand-cream border border-brand-charcoal/5 rounded-xl p-4 mb-6 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500 font-mono">Pricing Standard</p>
                    <p className="font-display font-bold text-base text-brand-charcoal">{selectedService.pricingInfo}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-mono">Calgary Coverage</p>
                    <p className="text-sm font-semibold text-brand-terracotta">WCB & Insured</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 py-3 px-4 border border-brand-charcoal/20 rounded-xl text-sm font-medium text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors cursor-pointer"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={() => handleAddToEstimate(selectedService.id)}
                    className="flex-1 py-3 px-4 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-display font-semibold rounded-xl text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    Select for Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
