import { Star, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export default function TrustBanner() {
  return (
    <div
      id="trust-anchor"
      className="bg-brand-charcoal text-brand-cream py-6 sm:py-8 border-y border-brand-cream/10 shadow-inner relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center justify-between text-center md:text-left">
          
          {/* Trust Metric 1: Star Rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 px-4">
            <div className="flex text-brand-terracotta gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div>
              <p className="font-sans font-semibold text-sm sm:text-base text-white">
                Top-Rated Yard Care Team in Calgary
              </p>
              <p className="font-sans text-xs text-brand-cream/75">
                4.9/5 stars based on 140+ homeowner reviews
              </p>
            </div>
          </div>

          {/* Trust Metric 2: Compliance Badge */}
          <div className="flex items-center justify-center gap-3 border-y md:border-y-0 md:border-x border-brand-cream/10 py-4 md:py-0 px-4">
            <ShieldCheck className="w-8 h-8 text-brand-terracotta" />
            <div className="text-left">
              <p className="font-sans font-semibold text-sm sm:text-base text-white">
                Fully Licensed & Insured
              </p>
              <p className="font-sans text-xs text-brand-cream/75">
                $5M general liability & active WCB compliance
              </p>
            </div>
          </div>

          {/* Trust Metric 3: Gnomes Standard */}
          <div className="flex items-center justify-center md:justify-end gap-3 px-4">
            <Award className="w-8 h-8 text-brand-terracotta" />
            <div className="text-left md:text-right">
              <p className="font-sans font-semibold text-sm sm:text-base text-white">
                Premium Contractor Standards
              </p>
              <p className="font-sans text-xs text-brand-cream/75 md:text-right">
                Friendly service & immaculate site cleanups
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
