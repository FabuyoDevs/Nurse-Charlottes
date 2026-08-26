import React from 'react';
import { COMMUNITY_TRADE_GUIDE } from '../data/shopData';
import { PackagePlus, Recycle, ArrowRight, ShieldCheck } from 'lucide-react';

export interface CommunitySourcingSectionProps {
  onOpenTradeModal: (presetCategory?: string) => void;
}

export const CommunitySourcingSection: React.FC<CommunitySourcingSectionProps> = ({
  onOpenTradeModal,
}) => {
  return (
    <section id="community-sourcing" className="py-16 sm:py-20 lg:py-28 2xl:py-32 bg-[#FBF8F3] border-b border-[#C58B39]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-10 mb-12 lg:mb-16 2xl:mb-20">
          <div className="flex-1">
            <span className="font-mono text-xs lg:text-sm uppercase tracking-widest text-[#A8422B] flex items-center gap-1.5 mb-2 lg:mb-3">
              <Recycle className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
              WORCESTER CIRCULAR EXCHANGE // COMMUNITY SOURCING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-[#1B2A23] leading-tight">
              Have Pre-Loved Treasures to Sell or Trade?
            </h2>
            <p className="text-base lg:text-lg text-[#4A524D] max-w-2xl lg:max-w-3xl mt-2 lg:mt-3 leading-relaxed">
              Nurse Charlotte&apos;s relies entirely on the Worcester community for its stock. We buy and trade unique vintage and pre-loved goods directly from residents.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenTradeModal()}
            className="btn-primary-hover inline-flex items-center gap-2 bg-[#A8422B] hover:bg-[#8D3521] text-[#FBF8F3] font-mono text-xs lg:text-sm uppercase tracking-wider px-6 lg:px-8 py-4 lg:py-5 rounded font-bold transition-all shadow-sm shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39] group"
          >
            <PackagePlus className="w-4 lg:w-5 h-4 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
            Create Sell/Trade Slip
          </button>
        </div>

        {/* 3 Buying Categories Grid - Enhanced Desktop Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COMMUNITY_TRADE_GUIDE.map((cat, idx) => (
            <div
              key={idx}
              className="card-lift-hover bg-[#F0EAD6] border border-[#C58B39]/50 p-6 lg:p-8 rounded-sm apothecary-corner flex flex-col justify-between space-y-4 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs lg:text-sm text-[#A8422B] uppercase tracking-wider mb-2 lg:mb-3 font-semibold">
                  <span>COUNTER INTAKE 0{idx + 1}</span>
                  <ShieldCheck className="w-4 lg:w-5 h-4 lg:h-5 text-[#3A6B4C]" />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl text-[#1B2A23]">{cat.title}</h3>
                <p className="text-sm lg:text-base text-[#1C201D] mt-2 lg:mt-3 leading-relaxed">
                  {cat.whatWeAccept}
                </p>
              </div>

              <div className="pt-3 lg:pt-4 border-t border-[#C58B39]/30">
                <p className="text-xs lg:text-sm font-mono text-[#4A524D] italic">
                  Tip: {cat.tip}
                </p>
                <button
                  type="button"
                  onClick={() => onOpenTradeModal(cat.title)}
                  className="link-underline mt-3 lg:mt-4 inline-flex items-center gap-1.5 font-mono text-xs lg:text-sm text-[#A8422B] font-bold hover:text-[#1B2A23] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39]"
                >
                  Bring {cat.title.split(' ')[0]} to Sell
                  <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Simple 3-Step Process banner - Enhanced for Desktop */}
        <div className="mt-12 lg:mt-16 2xl:mt-20 bg-[#1B2A23] text-[#FBF8F3] p-6 sm:p-8 lg:p-10 2xl:p-12 rounded border border-[#C58B39] grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="flex items-start gap-3 lg:gap-4">
            <span className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-[#C58B39] text-[#131E18] font-mono text-xs lg:text-sm font-bold flex items-center justify-center shrink-0">
              1
            </span>
            <div>
              <p className="font-serif text-base lg:text-lg font-semibold text-[#FBF8F3]">Call or Fill a Slip</p>
              <p className="text-xs lg:text-sm text-[#FBF8F3]/85 mt-1">
                Ring 01905 617637 or generate a quick Counter Reference Slip with your items.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 lg:gap-4">
            <span className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-[#C58B39] text-[#131E18] font-mono text-xs lg:text-sm font-bold flex items-center justify-center shrink-0">
              2
            </span>
            <div>
              <p className="font-serif text-base lg:text-lg font-semibold text-[#FBF8F3]">Pop into 36 Broad Street</p>
              <p className="text-xs lg:text-sm text-[#FBF8F3]/85 mt-1">
                Bring your clean items to the counter in Worcester city centre during opening hours.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 lg:gap-4">
            <span className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-[#C58B39] text-[#131E18] font-mono text-xs lg:text-sm font-bold flex items-center justify-center shrink-0">
              3
            </span>
            <div>
              <p className="font-serif text-base font-semibold">Fair Local Valuation</p>
              <p className="text-xs text-[#FBF8F3]/80 mt-1">
                Trade for another treasure on the shelves or agree on a direct community sale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
