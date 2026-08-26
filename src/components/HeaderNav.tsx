import React, { useState } from 'react';
import { Phone, MapPin, Star, PackagePlus } from 'lucide-react';
import { getLiveShopStatus } from '../utils/shopHours';
import { SHOP_FACTS } from '../data/shopData';

export interface HeaderNavProps {
  onOpenTradeModal: (presetCategory?: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenTradeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const liveStatus = getLiveShopStatus();

  return (
    <header className="sticky top-0 z-40 bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#C58B39]/40 shadow-xs w-full animate-fade-up">
      {/* Main Navigation Bar - Mobile-First Responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 lg:py-4 flex items-center justify-between w-full">
        {/* Brand identity */}
        <a href="#hero" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 lg:w-11 lg:h-11 rounded bg-[#1B2A23] border border-[#C58B39] flex items-center justify-center text-[#C58B39] font-serif font-bold text-lg lg:text-xl group-hover:bg-[#2B4B39] transition-colors duration-300">
            NC
          </div>
          <div className="hidden sm:block">
            <span className="block font-serif text-lg sm:text-xl lg:text-2xl font-bold text-[#1B2A23] leading-none group-hover:text-[#A8422B] transition-colors">
              Nurse Charlotte&apos;s
            </span>
            <span className="block font-mono text-[11px] lg:text-xs uppercase tracking-widest text-[#4A524D] mt-0.5">
              ALL KINDS OF EVERYTHING • WORCESTER
            </span>
          </div>
        </a>

        {/* Desktop links - Hidden on Mobile */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#1C201D]">
          <a
            href="#departments"
            className="link-underline font-mono text-xs uppercase tracking-wider transition-colors duration-300"
          >
            The 4 Cabinets
          </a>
          <a
            href="#story"
            className="link-underline font-mono text-xs uppercase tracking-wider transition-colors duration-300"
          >
            Behind the Name
          </a>
          <a
            href="#community-sourcing"
            className="link-underline font-mono text-xs uppercase tracking-wider transition-colors duration-300"
          >
            Sell &amp; Trade
          </a>
          <a
            href="#hours-location"
            className="link-underline font-mono text-xs uppercase tracking-wider transition-colors duration-300"
          >
            Hours &amp; Location
          </a>
        </nav>

        {/* Action buttons - Mobile-First Responsive */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenTradeModal('Curated Fashion')}
            className="btn-secondary-hover inline-flex items-center gap-1.5 px-4 lg:px-5 py-2.5 lg:py-3 text-xs font-mono uppercase tracking-wider border-2 border-[#1B2A23] text-[#1B2A23] rounded hover:bg-[#1B2A23] hover:text-[#FBF8F3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39]"
          >
            <PackagePlus className="w-4 h-4 text-[#A8422B]" />
            <span className="hidden lg:inline">Sell Pre-Loved</span>
            <span className="lg:hidden">Sell</span>
          </button>
          <a
            href="tel:01905617637"
            className="btn-primary-hover inline-flex items-center gap-2 bg-[#A8422B] hover:bg-[#8D3521] text-[#FBF8F3] font-mono text-xs uppercase tracking-wider px-5 lg:px-6 py-3 lg:py-3.5 rounded font-semibold transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39]"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">Check Stock</span>
            <span className="lg:hidden">Call</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          className="mobile-menu-button lg:hidden p-2 rounded text-[#1B2A23] border border-[#C58B39]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39]"
        >
          <span className="sr-only">Toggle menu</span>
          <span className="mobile-menu-button__lines">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F0EAD6] border-b border-[#C58B39] px-4 py-5 space-y-3">
          <nav className="flex flex-col space-y-2">
            <a
              href="#departments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded text-sm font-mono uppercase tracking-wider text-[#1B2A23] hover:bg-[#FBF8F3]"
            >
              The 4 Cabinets (Inventory)
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded text-sm font-mono uppercase tracking-wider text-[#1B2A23] hover:bg-[#FBF8F3]"
            >
              Behind the Tongue-In-Cheek Name
            </a>
            <a
              href="#community-sourcing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded text-sm font-mono uppercase tracking-wider text-[#1B2A23] hover:bg-[#FBF8F3]"
            >
              Sell / Trade Pre-Loved Goods
            </a>
            <a
              href="#hours-location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded text-sm font-mono uppercase tracking-wider text-[#1B2A23] hover:bg-[#FBF8F3]"
            >
              36 Broad St Map &amp; Opening Hours
            </a>
          </nav>
          <div className="pt-3 border-t border-[#C58B39]/40 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTradeModal();
              }}
              className="w-full text-center py-2.5 font-mono text-xs uppercase tracking-wider border border-[#1B2A23] text-[#1B2A23] rounded font-semibold"
            >
              Sell / Trade Pre-Loved Items
            </button>
            <a
              href="tel:01905617637"
              className="w-full text-center py-2.5 font-mono text-xs uppercase tracking-wider bg-[#A8422B] text-[#FBF8F3] rounded font-semibold"
            >
              Call Counter: 01905 617637
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
