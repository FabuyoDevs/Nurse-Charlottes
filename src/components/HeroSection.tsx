import React from 'react';
import { Phone, MapPin, Star, Sparkles, Compass, PackagePlus, ArrowDownRight } from 'lucide-react';

export interface HeroSectionProps {
  onOpenTradeModal: (presetCategory?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTradeModal }) => {
  return (
    <section id="hero" className="relative overflow-hidden paper-grain border-b-2 border-[#C58B39]/50 py-12 sm:py-16 lg:py-20 2xl:py-28 w-full">
      {/* Decorative brass corner grid hairlines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 2xl:gap-16 items-center w-full">
          {/* Left Column (60% ~ 7 cols) - Mobile-First Responsive */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 w-full animate-fade-up">
            {/* Authenticity Ledger Tag */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 bg-[#F0EAD6] border border-[#C58B39] px-3 sm:px-3.5 py-1 sm:py-1.5 lg:px-4 lg:py-2 rounded text-xs lg:text-sm font-mono text-[#1B2A23] shadow-xs hover:shadow-sm transition-shadow duration-300 max-w-full animate-soft-pulse">
              <span className="w-2 h-2 rounded-full bg-[#A8422B] shrink-0" />
              <span className="font-bold uppercase tracking-widest leading-tight">
                HISTORIC BROAD STREET // WORCESTER WR1 3NH
              </span>
              <span className="text-[#C58B39] shrink-0">|</span>
              <span className="text-[#4A524D]">INDEPENDENT VINTAGE EMPORIUM</span>
            </div>

            {/* Display Hero Heading - Mobile-First Typography */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-[#1B2A23] leading-[1.08] tracking-tight">
              Worcester&apos;s Aladdin&apos;s Cave of{' '}
              <span className="italic font-normal text-[#A8422B] underline decoration-[#C58B39] decoration-2 lg:decoration-3 underline-offset-4 lg:underline-offset-8">
                All Kinds of Everything.
              </span>
            </h1>

            {/* Authentic editorial intro - Mobile-First Typography */}
            <p className="text-base sm:text-lg lg:text-xl text-[#1C201D] leading-relaxed lg:leading-8 max-w-full lg:max-w-3xl">
              Rare 1970s retro apparel hanging right beside vintage vinyl records, acoustic guitars, brass scales, and quirky household novelties. Sourced directly from local Worcester residents—making every single visit a fresh treasure hunt.
            </p>

            {/* Compact Trust Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 bg-[#F0EAD6]/85 border border-[#C58B39]/50 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3.5 rounded apothecary-corner hover:bg-[#F0EAD6] hover:shadow-md transition-all duration-300 max-w-full">
              <div className="flex items-center gap-1 text-[#C58B39]">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 fill-[#C58B39] text-[#C58B39]" />
                ))}
                <Star className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 fill-[#C58B39]/40 text-[#C58B39]" />
              </div>
              <span className="font-mono text-xs sm:text-sm lg:text-base font-bold text-[#1B2A23]">
                4.3 / 5.0 Local Directory Rating
              </span>
              <span className="hidden sm:inline text-[#C58B39]">•</span>
              <span className="text-xs lg:text-sm text-[#4A524D]">
                Independent High-Street Secondhand Emporium
              </span>
            </div>

            {/* Primary & Secondary Action CTAs - Mobile-First Stacking */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-4 pt-2 lg:pt-4 w-full">
              <a
                href="tel:01905617637"
                className="btn-primary-hover inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-[#A8422B] hover:bg-[#8D3521] text-[#FBF8F3] font-mono text-xs sm:text-sm lg:text-base uppercase tracking-wider px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded font-bold transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39] group flex-1 sm:flex-none"
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300 shrink-0" />
                <span>Call Counter: 01905 617637</span>
              </a>

              <a
                href="#departments"
                className="btn-secondary-hover inline-flex items-center justify-center gap-2 bg-[#1B2A23] hover:bg-[#2A4839] text-[#FBF8F3] font-mono text-xs sm:text-sm lg:text-base uppercase tracking-wider px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded font-semibold transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39] flex-1 sm:flex-none"
              >
                <span>Browse the 4 Cabinets</span>
                <ArrowDownRight className="w-4 h-4 lg:w-5 lg:h-5 text-[#C58B39]" />
              </a>

              <button
                type="button"
                onClick={() => onOpenTradeModal()}
                className="btn-secondary-hover inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4 border-2 border-[#C58B39] text-[#1B2A23] hover:bg-[#F0EAD6] hover:border-[#A8422B] font-mono text-xs lg:text-sm uppercase tracking-wider rounded transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39] flex-1 sm:flex-none"
              >
                <PackagePlus className="w-4 h-4 lg:w-5 lg:h-5 text-[#A8422B]" />
                Sell / Trade Items
              </button>
            </div>

            {/* Quick Fact Micro-Pills - Mobile Stacking */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 pt-3 lg:pt-6 border-t border-[#C58B39]/30 w-full">
              <div className="flex items-center gap-2 text-xs lg:text-sm font-mono text-[#4A524D]">
                <Compass className="w-4 lg:w-5 h-4 lg:h-5 text-[#C58B39] shrink-0" />
                <span className="leading-tight">36 Broad St, Worcester WR1 3NH</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm font-mono text-[#4A524D]">
                <Sparkles className="w-4 lg:w-5 h-4 lg:h-5 text-[#A8422B] shrink-0" />
                <span className="leading-tight">Mon–Sat 9:00 AM – 5:00 PM</span>
              </div>
              <div className="col-span-1 sm:col-span-3 lg:col-span-1 flex items-center gap-2 text-xs lg:text-sm font-mono text-[#4A524D]">
                <MapPin className="w-4 lg:w-5 h-4 lg:h-5 text-[#3A6B4C] shrink-0" />
                <span className="leading-tight">Circular Eco Community Stock</span>
              </div>
            </div>
          </div>

          {/* Right Column (40% ~ 5 cols) - Hidden on Mobile, Shown on Desktop */}
          <div className="hidden lg:block lg:col-span-5 relative w-full">
            <div className="frame-glow-desktop relative bg-[#1B2A23] p-3 sm:p-4 lg:p-5 2xl:p-6 rounded-sm border-2 lg:border-3 border-[#C58B39] apothecary-corner shadow-xl">
              {/* Top window stamp */}
              <div className="flex items-center justify-between text-[#FBF8F3] pb-2.5 lg:pb-3.5 mb-2.5 lg:mb-3.5 border-b border-[#C58B39]/40 font-mono text-[11px] lg:text-xs uppercase tracking-widest">
                <span>EST. WORCESTER HIGH ST</span>
                <span className="text-[#C58B39]">SHELF ARCHIVE // 2026</span>
              </div>

              {/* Main Image */}
              <div className="image-zoom-hover relative aspect-4/5 rounded overflow-hidden border border-[#C58B39]/40">
                <img
                  src="/images/shopfront-hero.jpg"
                  alt="Nurse Charlotte's All Kinds of Everything shopfront on Broad Street Worcester"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                />

                {/* Hanging Vintage Price / Location Tag */}
                <div className="absolute top-4 right-4 animate-float-tag bg-[#FBF8F3] border-2 border-[#C58B39] text-[#1B2A23] p-3 lg:p-4 rounded shadow-md max-w-44 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-[#C58B39] mx-auto mb-1 bg-[#F0EAD6]" />
                  <p className="font-mono text-[10px] lg:text-xs uppercase text-[#A8422B] tracking-wider font-bold">
                    ONE-OF-A-KIND
                  </p>
                  <p className="font-serif text-sm lg:text-base font-bold leading-tight mt-0.5">
                    Every Visit Different
                  </p>
                  <p className="font-mono text-[10px] lg:text-xs text-[#4A524D] mt-1 border-t border-[#C58B39]/30 pt-1">
                    WR1 3NH • WORCESTER
                  </p>
                </div>
              </div>

              {/* Bottom Interactive Desk Card */}
              <div className="mt-3 lg:mt-4 bg-[#F0EAD6] p-3.5 lg:p-4 rounded border border-[#C58B39]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-[#F0EAD6]/95 hover:shadow-md transition-all duration-300">
                <div className="flex-1">
                  <p className="font-mono text-xs lg:text-sm font-bold uppercase text-[#1B2A23] leading-tight">
                    Got pre-loved clothes or vinyl to sell?
                  </p>
                  <p className="text-xs lg:text-sm text-[#4A524D] mt-1">
                    We buy directly from Worcester residents.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenTradeModal('Curated Fashion')}
                  className="btn-secondary-hover shrink-0 bg-[#1B2A23] hover:bg-[#2A4839] text-[#FBF8F3] font-mono text-xs lg:text-sm px-4 lg:px-5 py-2.5 lg:py-3 rounded transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39]"
                >
                  Create Slip →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
