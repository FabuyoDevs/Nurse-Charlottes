import React from 'react';
import { SHOP_FACTS } from '../data/shopData';
import { Star, Recycle, Building2, CheckCircle2 } from 'lucide-react';

export const StoryAndReputationSection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 lg:py-28 2xl:py-32 bg-[#F0EAD6] border-b border-[#C58B39]/50 paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 2xl:gap-16 items-center">
          {/* Left Column: Authentic Brand Narrative */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs lg:text-sm uppercase tracking-widest text-[#A8422B]">
              <Building2 className="w-4 lg:w-5 h-4 lg:h-5" />
              BEHIND THE SCENES // 36 BROAD STREET, WORCESTER
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-[#1B2A23] leading-tight">
              Why &ldquo;All Kinds of Everything&rdquo; Is No Exaggeration.
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#1C201D] leading-relaxed lg:leading-8">
              Officially registered as <strong className="text-[#1B2A23]">Nurse Charlotte&apos;s All Kinds of Everything</strong>, our tongue-in-cheek shop name is a literal description of what you encounter when you walk through the Broad Street door.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-2">
              {SHOP_FACTS.behindTheScenes.map((item) => (
                <div
                  key={item.code}
                  className="bg-[#FBF8F3] border border-[#C58B39]/50 p-5 lg:p-6 rounded apothecary-corner shadow-sm hover:shadow-md hover:border-[#C58B39] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] lg:text-xs uppercase text-[#C58B39] font-bold tracking-wide">
                      {item.code}
                    </span>
                    <h3 className="font-serif text-lg lg:text-xl text-[#1B2A23] mt-2">
                      {item.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-[#4A524D] mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Circular economy pledge box */}
            <div className="bg-[#1B2A23] text-[#FBF8F3] p-6 lg:p-8 rounded border border-[#C58B39] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-3.5 flex-1">
                <Recycle className="w-6 lg:w-7 h-6 lg:h-7 text-[#C58B39] shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif text-lg lg:text-xl text-[#FBF8F3]">
                    The Worcester High Street Circular Economy
                  </p>
                  <p className="text-xs lg:text-sm text-[#FBF8F3]/85 mt-1">
                    We buy, trade, and rescue pre-loved vintage items directly from residents—providing a sustainable antidote to fast fashion.
                  </p>
                </div>
              </div>
              <a
                href="#community-sourcing"
                className="btn-secondary-hover shrink-0 font-mono text-xs lg:text-sm uppercase bg-[#C58B39] text-[#131E18] font-bold px-5 lg:px-6 py-3 lg:py-3.5 rounded hover:bg-[#d49946] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF8F3]"
              >
                How to Sell to Us →
              </a>
            </div>
          </div>

          {/* Right Column: Distinct Brass Directory Reputation Seal Card */}
          <div id="directory-rating" className="lg:col-span-5">
            <div className="card-lift-hover bg-[#FBF8F3] border-2 lg:border-3 border-[#C58B39] apothecary-corner p-7 sm:p-8 lg:p-10 rounded-sm shadow-md hover:shadow-2xl transition-all duration-300 space-y-6 relative">
              {/* Embossed Wax Seal Badge */}
              <div className="flex items-center justify-between border-b border-[#C58B39]/40 pb-4 lg:pb-6">
                <span className="font-mono text-xs lg:text-sm uppercase tracking-widest text-[#4A524D] font-semibold">
                  LOCAL DIRECTORY REPUTATION
                </span>
                <span className="bg-[#1B2A23] text-[#C58B39] font-mono text-xs lg:text-sm font-bold px-3 lg:px-4 py-1.5 lg:py-2 rounded">
                  VERIFIED DIRECTORY SCORE
                </span>
              </div>

              {/* Big Brass Score Display */}
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2 lg:gap-3">
                    <span className="font-serif text-6xl lg:text-7xl 2xl:text-8xl font-bold text-[#1B2A23] leading-none">
                      4.3
                    </span>
                    <span className="font-mono text-xl lg:text-2xl text-[#4A524D]">/ 5.0</span>
                  </div>
                  <div className="flex items-center gap-1.5 lg:gap-2 mt-3 lg:mt-4">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-5 lg:w-6 h-5 lg:h-6 fill-[#C58B39] text-[#C58B39]" />
                    ))}
                    <Star className="w-5 lg:w-6 h-5 lg:h-6 fill-[#C58B39]/35 text-[#C58B39]" />
                    <span className="font-mono text-xs lg:text-sm font-bold text-[#1B2A23] ml-2">
                      LOCAL SHOPPERS RATING
                    </span>
                  </div>
                </div>

                {/* Rotary Stamp illustration */}
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#A8422B] flex flex-col items-center justify-center text-center p-1 bg-[#F0EAD6]/60">
                  <span className="font-mono text-[9px] uppercase text-[#A8422B] font-bold">
                    WORCESTER
                  </span>
                  <span className="font-serif text-xs font-bold text-[#1B2A23]">
                    ALADDIN&apos;S CAVE
                  </span>
                  <span className="font-mono text-[8px] text-[#4A524D]">WR1 3NH</span>
                </div>
              </div>

              <blockquote className="bg-[#F0EAD6]/70 border-l-4 border-[#A8422B] p-4 text-sm text-[#1C201D] italic leading-relaxed">
                &ldquo;Local shoppers rate the experience highly, giving it a 4.3 out of 5 stars on local business directories. Expect packed shelves perfect for treasure hunting.&rdquo;
              </blockquote>

              {/* Verified Atmosphere Checklist (strictly factual) */}
              <ul className="space-y-2.5 text-xs text-[#1C201D] border-t border-[#C58B39]/30 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3A6B4C]" />
                  <span>Ground floor entrance at 36 Broad St, Worcester WR1 3NH</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3A6B4C]" />
                  <span>Friendly independent counter — phone 01905 617637 anytime</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3A6B4C]" />
                  <span>Fresh unique stock arrives from local residents every week</span>
                </li>
              </ul>

              {/* External directory CTA without fabricating fake URLs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={SHOP_FACTS.address.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#1B2A23] hover:bg-[#2B4B39] text-[#FBF8F3] font-mono text-xs uppercase tracking-wider py-3 rounded font-semibold transition-colors"
                >
                  View on Google Maps →
                </a>
                <a
                  href="tel:01905617637"
                  className="flex-1 text-center border border-[#C58B39] text-[#1B2A23] hover:bg-[#F0EAD6] font-mono text-xs uppercase tracking-wider py-3 rounded font-semibold transition-colors"
                >
                  Call Shop Counter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
