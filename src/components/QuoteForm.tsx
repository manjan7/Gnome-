import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ArrowLeft, Send, Sparkles, Phone, ShieldCheck, Mail, ClipboardList } from 'lucide-react';
import { QuoteRequest } from '../types';

interface QuoteFormProps {
  preselectedServiceId: string | null;
  onClearPreselectedService: () => void;
}

export default function QuoteForm({ preselectedServiceId, onClearPreselectedService }: QuoteFormProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    email: '',
    phone: '',
    address: '',
    selectedServices: [],
    frequency: 'bi-weekly',
    lotSize: 'suburban',
    timeline: 'This Month',
    notes: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  // Handle auto-selection when user clicks "Select for Quote" from the service grid
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData(prev => {
        const current = [...prev.selectedServices];
        if (!current.includes(preselectedServiceId)) {
          current.push(preselectedServiceId);
        }
        return { ...prev, selectedServices: current };
      });
      // Move directly to step 2 where services are selected
      setStep(2);
      onClearPreselectedService();
    }
  }, [preselectedServiceId, onClearPreselectedService]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormError('');
  };

  const handleCheckboxChange = (serviceId: string) => {
    setFormData(prev => {
      const current = [...prev.selectedServices];
      const index = current.indexOf(serviceId);
      if (index > -1) {
        current.splice(index, 1);
      } else {
        current.push(serviceId);
      }
      return { ...prev, selectedServices: current };
    });
  };

  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) {
      if (!formData.name.trim()) {
        setFormError('Please enter your full name.');
        return false;
      }
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        setFormError('Please enter a valid email address.');
        return false;
      }
      if (!formData.phone.trim()) {
        setFormError('Please enter your phone number.');
        return false;
      }
    } else if (currentStep === 2) {
      if (formData.selectedServices.length === 0) {
        setFormError('Please select at least one service.');
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.address.trim()) {
        setFormError('Please enter your Calgary property address.');
        return false;
      }
    }
    setFormError('');
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    setFormError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitted(true);
    }
  };

  // Human friendly labels for summary screen
  const getServiceLabel = (id: string) => {
    const map: Record<string, string> = {
      'lawn-care': 'Lawn Care',
      'fine-gardening': 'Fine Gardening',
      'yard-cleanup': 'Yard Cleanup',
      'snow-removal': 'Seasonal Snow Removal',
      'custom-landscaping': 'Custom Landscaping'
    };
    return map[id] || id;
  };

  return (
    <section id="quote-form" className="py-20 sm:py-28 bg-brand-cream relative overflow-hidden">
      {/* Decorative side badge */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-charcoal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-brand-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-xs font-bold text-brand-terracotta uppercase tracking-widest bg-brand-terracotta-light px-3.5 py-1.5 rounded-full">
            Fast Quote
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal tracking-tight mt-4">
            Request Your Free Online Estimate
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-charcoal/70 mt-3">
            Frictionless 3-step quote system. Zero obligation, entirely digital invoices, and replies within 24 hours.
          </p>
        </div>

        {/* Dynamic Interactive Card Frame */}
        <div className="bg-white rounded-3xl border border-brand-charcoal/10 shadow-xl overflow-hidden p-6 sm:p-10 md:p-12">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8" id="lead-form">
                
                 {/* Step Progress Indicators */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3 w-full">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="flex items-center flex-grow last:flex-grow-0">
                        {/* Step number button */}
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all ${
                            step >= num
                              ? 'bg-brand-terracotta text-white ring-4 ring-brand-terracotta-light'
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          {step > num ? <Check className="w-4 h-4" /> : num}
                        </div>
                        {/* Connecting line */}
                        {num < 3 && (
                          <div
                            className={`h-1 flex-grow mx-2 sm:mx-4 rounded-full transition-all ${
                              step > num ? 'bg-brand-terracotta' : 'bg-gray-100'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <span className="font-mono text-xs text-gray-400 shrink-0 pl-4 font-semibold">
                    Step {step} of 3
                  </span>
                </div>

                {/* Error Banner */}
                {formError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-brand-terracotta-light border-l-4 border-brand-terracotta text-brand-terracotta-dark text-sm rounded-r-lg font-medium"
                  >
                    {formError}
                  </motion.div>
                )}

                 {/* Step Content Wrapper with clean animation */}
                <div className="min-h-[260px]">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 animate-fade-in"
                    >
                      <div className="border-b border-gray-100 pb-3">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-brand-charcoal">Contact Information</h3>
                        <p className="font-sans text-xs sm:text-sm text-gray-500">Provide your basic contact so we can deliver the response within 24h.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider font-mono mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-terracotta focus:border-brand-terracotta outline-none transition-all text-sm"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider font-mono mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-terracotta focus:border-brand-terracotta outline-none transition-all text-sm"
                            required
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider font-mono mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(587) 555-0123"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-terracotta focus:border-brand-terracotta outline-none transition-all text-sm"
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-gray-100 pb-3">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-brand-charcoal">Services Requested</h3>
                        <p className="font-sans text-xs sm:text-sm text-gray-500">Select any yard services you are planning. You can select multiple.</p>
                      </div>

                      {/* Services Selection */}
                      <div>
                        <span className="block text-xs font-semibold text-gray-700 uppercase tracking-wider font-mono mb-3">
                          Select Services *
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {[
                            { id: 'lawn-care', label: 'Lawn Care (Mowing/Aerating)' },
                            { id: 'fine-gardening', label: 'Fine Gardening & Trimming' },
                            { id: 'yard-cleanup', label: 'Yard Cleanup (Spring/Autumn)' },
                            { id: 'snow-removal', label: 'Seasonal Snow Removal' },
                            { id: 'custom-landscaping', label: 'Custom Landscaping / Hardscape' }
                          ].map((serv) => (
                            <button
                              key={serv.id}
                              type="button"
                              onClick={() => handleCheckboxChange(serv.id)}
                              className={`flex items-center justify-between p-4 rounded-xl border text-left text-sm transition-all cursor-pointer ${
                                formData.selectedServices.includes(serv.id)
                                  ? 'bg-brand-terracotta-light border-brand-terracotta text-brand-charcoal font-semibold'
                                  : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700'
                              }`}
                            >
                              <span>{serv.label}</span>
                              <div
                                className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                                  formData.selectedServices.includes(serv.id)
                                    ? 'bg-brand-terracotta border-brand-terracotta text-white'
                                    : 'border-gray-300'
                                }`}
                              >
                                {formData.selectedServices.includes(serv.id) && (
                                  <Check className="w-3.5 h-3.5" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Frequency Selection */}
                      <div className="pt-4 border-t border-gray-100">
                        <label htmlFor="frequency" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider font-mono mb-2">
                          Preferred Frequency
                        </label>
                        <select
                          id="frequency"
                          name="frequency"
                          value={formData.frequency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-terracotta focus:border-brand-terracotta outline-none transition-all text-sm bg-white"
                        >
                          <option value="one-time">One-Time Project / Cleanup</option>
                          <option value="weekly">Weekly Routine Care</option>
                          <option value="bi-weekly">Bi-Weekly Routine Care (Recommended)</option>
                          <option value="monthly">Monthly Routine Care / Contracts</option>
                          <option value="seasonal">Seasonal Snow Removal Contract</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-gray-100 pb-3">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-brand-charcoal">Property Specifics</h3>
                        <p className="font-sans text-xs sm:text-sm text-gray-500">Provide property coordinates and special instructions to ensure exact evaluation.</p>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label htmlFor="address" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider font-mono mb-2">
                            Property Address in Calgary *
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="123 Orchard Way SE, Calgary, AB"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-terracotta focus:border-brand-terracotta outline-none transition-all text-sm"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="lotSize" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider font-mono mb-2">
                              Approximate Property Lot Size
                            </label>
                            <select
                              id="lotSize"
                              name="lotSize"
                              value={formData.lotSize}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-terracotta focus:border-brand-terracotta outline-none transition-all text-sm bg-white"
                            >
                              <option value="townhouse">Small City Lot / Townhouse Yard</option>
                              <option value="suburban">Standard Suburban Yard</option>
                              <option value="large">Large Estate Lot / Cul-de-sac</option>
                              <option value="acreage">Acreage / Multi-Family Lot</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="timeline" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider font-mono mb-2">
                              Target Project Timeline
                            </label>
                            <select
                              id="timeline"
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-terracotta focus:border-brand-terracotta outline-none transition-all text-sm bg-white"
                            >
                              <option value="Immediate">Immediate Service Required</option>
                              <option value="This Month">Within the Next 2 Weeks</option>
                              <option value="This Season">This Current Season</option>
                              <option value="Flexible">Planning Ahead / Flexible</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="notes" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider font-mono mb-2">
                            Special Instructions or Project Notes (Optional)
                          </label>
                          <textarea
                            id="notes"
                            name="notes"
                            rows={3}
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder="Tell us about pet gates, specific shrubs, weed problems, or any special requests..."
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-terracotta focus:border-brand-terracotta outline-none transition-all text-sm resize-none"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Form Navigation Controls */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`flex items-center gap-1.5 font-display font-semibold text-sm px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer ${
                      step === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-700'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-1.5 font-display font-semibold text-sm bg-brand-charcoal hover:bg-brand-charcoal/90 text-white px-6 py-3 rounded-xl shadow transition-all cursor-pointer"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 font-display font-semibold text-sm bg-brand-terracotta hover:bg-brand-terracotta-dark text-white px-7 py-3 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      Submit Estimate Request
                      <Send className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </form>
            ) : (
              // SUBMISSION SUCCESSFUL VIEW
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 px-4"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-emerald-600" />
                </div>
                
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
                  Estimate Requested Successfully!
                </h3>
                
                <p className="font-sans text-sm sm:text-base text-gray-500 mt-3 max-w-lg mx-auto">
                  Thank you, <strong>{formData.name}</strong>! We have logged your request. Our Calgary field team will review your property using satellite imaging and reach out with a detailed estimate.
                </p>

                {/* Summarized Quote Request Detail */}
                <div className="bg-brand-cream border border-brand-charcoal/10 rounded-2xl p-6 text-left max-w-md mx-auto my-8 space-y-4 shadow-sm">
                  <p className="text-xs font-mono uppercase font-bold text-gray-400 border-b pb-2 flex items-center gap-1.5 border-brand-charcoal/10">
                    <ClipboardList className="w-4 h-4 text-brand-terracotta" /> Request Overview
                  </p>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">Location Coordinates</p>
                    <p className="text-sm font-semibold text-brand-charcoal">{formData.address}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">Services Selected</p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {formData.selectedServices.map(id => (
                        <span key={id} className="bg-white border border-brand-charcoal/15 text-brand-charcoal text-[11px] font-sans px-2.5 py-1 rounded font-medium">
                          {getServiceLabel(id)}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-400 font-mono">Contract Cycle</p>
                      <p className="text-sm font-semibold capitalize text-brand-charcoal">{formData.frequency.replace('-', ' ')}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-mono">Timeline</p>
                      <p className="text-sm font-semibold text-brand-charcoal">{formData.timeline}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
                  <a
                    href="tel:5873255523"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto font-sans font-bold text-sm bg-white border border-gray-200 hover:bg-gray-50 text-brand-charcoal px-6 py-3 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-terracotta" />
                    (587) 325-5523
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        address: '',
                        selectedServices: [],
                        frequency: 'bi-weekly',
                        lotSize: 'suburban',
                        timeline: 'This Month',
                        notes: ''
                      });
                    }}
                    className="w-full sm:w-auto font-display font-semibold text-sm bg-brand-terracotta hover:bg-brand-terracotta-dark text-white px-6 py-3 rounded-xl shadow-md cursor-pointer"
                  >
                    Submit Another Estimate
                  </button>
                </div>

                {/* Instant Guarantee */}
                <p className="text-xs font-mono text-gray-400 mt-8 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-terracotta" /> $5M liability coverage on all scheduled jobs
                </p>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
