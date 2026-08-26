import React from 'react';
import { Phone, MapPin, Star, ArrowUpRight, Compass } from 'lucide-react';
import { SHOP_FACTS } from '../data/shopData';

export interface FooterSectionProps {
  onOpenTradeModal: (presetCategory?: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenTradeModal }) => {
  return (
    <footer className="bg-[#1B2A23] text-[#FBF8F3] border-t-2 border-[#C58B39] w-full">
      {/* Bottom Conversion & Trust Banner (re-purposed 3rd review display as per instructions) */}
      <div className="border-b border-[#C58B39]/40 bg-[#131E18] py-6 sm:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 w-full">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left w-full sm:w-auto">
            <div className="w-12 h-12 rounded-full border-2 border-[#C58B39] flex items-center justify-center font-serif text-lg lg:text-xl font-bold text-[#C58B39] shrink-0">
              4.3
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#C58B39]">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-[#C58B39]" />
                ))}
                <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-[#C58B39]/40" />
                <span className="font-mono text-[10px] lg:text-xs text-[#FBF8F3] ml-1.5">
                  OUT OF 5 STARS
                </span>
              </div>
              <p className="font-serif text-base sm:text-lg text-[#FBF8F3] mt-1">
                Rated 4.3 / 5 on Local Business Directories
              </p>
              <p className="text-[11px] sm:text-xs text-[#FBF8F3]/75">
                Local shoppers praise the eclectic Aladdin&apos;s cave atmosphere and packed shelves.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href="tel:01905617637"
              className="inline-flex items-center justify-center gap-2 bg-[#A8422B] hover:bg-[#8D3521] text-[#FBF8F3] font-mono text-xs lg:text-sm uppercase tracking-wider px-4 sm:px-5 py-2.5 lg:py-3 rounded font-bold transition-colors"
            >
              <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              <span className="hidden sm:inline">Call Shop: 01905 617637</span>
              <span className="sm:hidden">Call: 01905 617637</span>
            </a>
            <a
              href={SHOP_FACTS.address.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 border border-[#C58B39] hover:bg-[#C58B39] hover:text-[#131E18] text-[#FBF8F3] font-mono text-xs lg:text-sm uppercase tracking-wider px-3 sm:px-4 py-2.5 lg:py-3 rounded transition-colors"
            >
              <span className="hidden sm:inline">View Broad St on Google</span>
              <span className="sm:hidden">Google Maps</span>
              <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 2xl:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 w-full">
        {/* Col 1: Shop Emblem & Summary */}
        <div className="space-y-4 w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#C58B39] text-[#131E18] font-serif font-bold flex items-center justify-center text-sm lg:text-lg shrink-0">
              NC
            </div>
            <div>
              <p className="font-serif text-base lg:text-lg font-bold leading-tight">
                Nurse Charlotte&apos;s
              </p>
              <p className="font-mono text-[10px] text-[#C58B39] uppercase tracking-widest">
                ALL KINDS OF EVERYTHING
              </p>
            </div>
          </div>
          <p className="text-xs text-[#FBF8F3]/80 leading-relaxed">
            Independent secondhand &amp; vintage emporium at 36 Broad Street in historic Worcester city centre. Sourcing unique pre-loved goods directly from local residents.
          </p>
          <div className="inline-flex items-center gap-2 font-mono text-[10px] lg:text-[11px] text-[#C58B39] bg-[#131E18] px-2.5 sm:px-3 py-1.5 rounded border border-[#C58B39]/40">
            <span>D&amp;B REGISTERED: USED MERCHANDISE RETAIL</span>
          </div>
        </div>

        {/* Col 2: The 4 Cabinets */}
        <div className="w-full">
          <h4 className="font-mono text-xs lg:text-sm uppercase tracking-widest text-[#C58B39] mb-3 lg:mb-4">
            Aladdin&apos;s Cave Shelves
          </h4>
          <ul className="space-y-2 lg:space-y-2.5 text-xs text-[#FBF8F3]/85 font-mono">
            <li>
              <a href="#departments" className="hover:text-[#C58B39] transition-colors">
                I. Curated Fashion &amp; Retro Apparel
              </a>
            </li>
            <li>
              <a href="#departments" className="hover:text-[#C58B39] transition-colors">
                II. Vinyl Records, Books &amp; Instruments
              </a>
            </li>
            <li>
              <a href="#departments" className="hover:text-[#C58B39] transition-colors">
                III. Sporting Goods &amp; Hobby Gear
              </a>
            </li>
            <li>
              <a href="#departments" className="hover:text-[#C58B39] transition-colors">
                IV. Collectibles &amp; Bric-a-Brac
              </a>
            </li>
            <li className="pt-2 border-t border-[#C58B39]/30">
              <button
                type="button"
                onClick={() => onOpenTradeModal()}
                className="text-[#A8422B] hover:text-[#C58B39] underline font-bold"
              >
                + Bring Items to Sell or Trade →
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Hours Summary */}
        <div className="w-full">
          <h4 className="font-mono text-xs lg:text-sm uppercase tracking-widest text-[#C58B39] mb-3 lg:mb-4">
            Opening Hours
          </h4>
          <dl className="space-y-2 text-xs font-mono">
            <div className="flex justify-between">
              <dt className="text-[#FBF8F3]/70">Mon – Sat</dt>
              <dd className="font-semibold text-white">9:00 AM – 5:00 PM</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[#FBF8F3]/70">Sundays</dt>
              <dd className="text-[#C58B39]">Seasonal afternoon hrs</dd>
            </div>
            <div className="pt-2 text-[11px] text-[#FBF8F3]/70 leading-relaxed border-t border-[#C58B39]/30">
              Bank holidays occasionally closed. Ring{' '}
              <a href="tel:01905617637" className="text-[#C58B39] underline">
                01905 617637
              </a>{' '}
              before making a holiday trip.
            </div>
          </dl>
        </div>

        {/* Col 4: Location & Counter Phone */}
        <div className="w-full">
          <h4 className="font-mono text-xs lg:text-sm uppercase tracking-widest text-[#C58B39] mb-3 lg:mb-4">
            Direct Shop Counter
          </h4>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 lg:w-4 h-3.5 lg:h-4 text-[#C58B39] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">36 Broad St</p>
                <p className="text-[#FBF8F3]/80">Worcester, WR1 3NH, United Kingdom</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#A8422B] shrink-0 mt-0.5" />
              <div>
                <a
                  href="tel:01905617637"
                  className="font-mono font-bold text-base text-[#C58B39] hover:underline block"
                >
                  01905 617637
                </a>
                <p className="text-[11px] text-[#FBF8F3]/70">
                  Stock checks &amp; community trade enquiries
                </p>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={SHOP_FACTS.address.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C58B39] underline hover:text-white"
              >
                <Compass className="w-3.5 h-3.5" />
                Open GPS Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Strip */}
      <div className="border-t border-[#C58B39]/30 bg-[#131E18] py-4 px-4 sm:py-5 sm:px-6 lg:px-8 text-center text-[10px] sm:text-xs font-mono text-[#FBF8F3]/60 w-full">
        <p className="leading-relaxed">
          © {new Date().getFullYear()} Nurse Charlotte&apos;s All Kinds of Everything • 36 Broad St, Worcester WR1 3NH • Tel: 01905 617637
        </p>
      </div>
    </footer>
  );
};
