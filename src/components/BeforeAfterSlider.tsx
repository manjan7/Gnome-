import { useState, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MapPin, Sliders, CheckCircle } from 'lucide-react';
import { BeforeAfterProject } from '../types';

const PROJECTS: BeforeAfterProject[] = [
  {
    id: 'marda-loop',
    title: 'Marda Loop Backyard Oasis',
    location: 'Marda Loop, Calgary',
    description: 'Complete overhaul of an overgrown property. We cleared heavy weeds, leveled the soil grading, and installed premium Kentucky Bluegrass sod alongside custom rundle stone edging and stepping pathways.',
    beforeImage: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1000',
    afterImage: 'https://images.unsplash.com/photo-1558904541-efa8c3a30fc9?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'mount-royal',
    title: 'Mount Royal Perennial Borders',
    location: 'Mount Royal, Calgary',
    description: 'Horticultural makeover of historic estate gardens. We removed invasive root networks, pruned oversized legacy juniper shrubs, applied slow-release nutrients, and laid rich organic black pine mulch.',
    beforeImage: 'https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?auto=format&fit=crop&q=80&w=1000',
    afterImage: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'altadore-snow',
    title: 'Altadore Blizzard Response',
    location: 'Altadore, Calgary',
    description: 'Rapid 4-hour response following a heavy 25cm overnight Calgary snowfall. We cleared the entire double-driveway and walking pathways down to clean concrete, applying eco-friendly, pet-safe ice-melting agents.',
    beforeImage: 'https://images.unsplash.com/photo-1518242008880-ca5e7f9f5453?auto=format&fit=crop&q=80&w=1000',
    afterImage: 'https://images.unsplash.com/photo-1612177344075-802c67f08b3e?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function BeforeAfterSlider() {
  const [activeProject, setActiveProject] = useState<BeforeAfterProject>(PROJECTS[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const selectProject = (project: BeforeAfterProject) => {
    setActiveProject(project);
    setSliderPosition(50); // Reset position
  };

  return (
    <section id="before-after" className="py-20 sm:py-28 bg-brand-charcoal text-brand-cream relative overflow-hidden">
      {/* Subtle organic background lines */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-terracotta/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-cream uppercase tracking-widest bg-brand-terracotta px-3.5 py-1.5 rounded-full">
            The Evidence
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-4 leading-tight">
            Our Transformations speak for Themselves
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-cream/80 mt-4 leading-relaxed">
            Drag the slider handle across the images below to see real, un-retouched property improvements completed by our Calgary team.
          </p>
        </div>

        {/* Project Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => selectProject(project)}
              className={`px-5 py-3 rounded-xl font-display font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                activeProject.id === project.id
                  ? 'bg-brand-terracotta text-white shadow-md scale-105'
                  : 'bg-white/5 text-brand-cream/70 hover:text-white hover:bg-white/10 border border-brand-cream/10'
              }`}
            >
              {project.title.split(' ')[0] + ' ' + project.title.split(' ')[1]} {/* Short Title */}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Slider Frame */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[16:11] rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-charcoal select-none bg-brand-charcoal"
              onMouseEnter={() => setIsDragging(true)}
              onMouseLeave={() => setIsDragging(false)}
            >
              {/* "AFTER" image (Background) */}
              <img
                src={activeProject.afterImage}
                alt={`${activeProject.title} After`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-4 right-4 bg-brand-terracotta text-white text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded shadow z-20">
                AFTER
              </span>

              {/* "BEFORE" image (Overlay with dynamic width clipping) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none z-10"
                style={{ width: `${sliderPosition}%` }}
              >
                {/* Maintain full image size despite parent element width clipping */}
                <div className="absolute inset-0 w-[100cqi] h-full" style={{ width: '100%', minWidth: '100cqi' }}>
                  <img
                    src={activeProject.beforeImage}
                    alt={`${activeProject.title} Before`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{ width: '100%', maxWidth: 'none' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="absolute bottom-4 left-4 bg-gray-900/80 text-white text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded shadow z-20">
                  BEFORE
                </span>
              </div>

              {/* Sliding Vertical Divider Line */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none w-1 bg-white"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Circular handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-terracotta text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <Sliders className="w-4 h-4 rotate-90" />
                </div>
              </div>

              {/* The Actual Range Input (Invisible overlay for controls) */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                aria-label="Drag to compare before and after property view"
              />
            </div>
            
            <p className="mt-4 font-mono text-xs text-brand-cream/60 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-brand-terracotta" /> Drag or tap anywhere on the image to compare
            </p>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-1.5 text-brand-terracotta font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-4 h-4" />
              {activeProject.location}
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              {activeProject.title}
            </h3>
            
            <p className="font-sans text-sm sm:text-base text-brand-cream/80 mt-4 leading-relaxed">
              {activeProject.description}
            </p>

            <div className="mt-8 pt-6 border-t border-brand-cream/10 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-terracotta shrink-0" />
                <span className="font-sans text-sm text-brand-cream/95">
                  Professional grading and soil prep
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-terracotta shrink-0" />
                <span className="font-sans text-sm text-brand-cream/95">
                  Custom material sourcing from trusted Alberta yards
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-terracotta shrink-0" />
                <span className="font-sans text-sm text-brand-cream/95">
                  100% cleanup of mud, stones, and clippings
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
