import React, { useState } from 'react';
import { MapPin, Navigation, PhoneCall, Compass, CheckCircle2 } from 'lucide-react';
import { SHOP_FACTS } from '../data/shopData';

export const WorcesterMapCard: React.FC = () => {
  const [viewMode, setViewMode] = useState<'map' | 'landmarks'>('map');

  return (
    <div className="bg-[#F0EAD6] border border-[#C58B39]/40 apothecary-corner overflow-hidden shadow-sm">
      {/* Header bar */}
      <div className="bg-[#1B2A23] text-[#FBF8F3] px-5 py-3.5 flex flex-wrap items-center justify-between gap-2 border-b border-[#C58B39]/40">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C58B39] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#FBF8F3]/90">
            WORCESTER CITY CENTRE • WR1 3NH
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setViewMode('map')}
            className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
              viewMode === 'map'
                ? 'bg-[#C58B39] text-[#131E18] font-semibold'
                : 'text-[#FBF8F3]/75 hover:text-white'
            }`}
          >
            INTERACTIVE MAP
          </button>
          <button
            type="button"
            onClick={() => setViewMode('landmarks')}
            className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
              viewMode === 'landmarks'
                ? 'bg-[#C58B39] text-[#131E18] font-semibold'
                : 'text-[#FBF8F3]/75 hover:text-white'
            }`}
          >
            WALKING GUIDE
          </button>
        </div>
      </div>

      {viewMode === 'map' ? (
        <div className="relative h-72 sm:h-80 w-full bg-[#E5DFC9] overflow-hidden group">
          {/* Authentic OpenStreetMap iframe centered on 36 Broad St Worcester */}
          <iframe
            title="Nurse Charlotte's All Kinds of Everything - 36 Broad St Worcester WR1 3NH"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-2.2272%2C52.1914%2C-2.2173%2C52.1952&amp;layer=mapnik&amp;marker=52.19325%2C-2.22228"
            className="w-full h-full border-0 contrast-[1.03] sepia-[0.18]"
            loading="lazy"
          />

          {/* Floating Brass Pin Overlay Badge */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#1B2A23]/95 backdrop-blur-sm text-[#FBF8F3] px-4 py-3 border border-[#C58B39] rounded shadow-lg max-w-sm flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#C58B39]">
                HEART OF BROAD STREET
              </p>
              <p className="text-sm font-semibold">36 Broad St, Worcester WR1 3NH</p>
              <p className="text-xs text-[#FBF8F3]/75">Directly opposite historic pedestrian high street</p>
            </div>
            <a
              href={SHOP_FACTS.address.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 bg-[#C58B39] text-[#131E18] font-mono text-xs font-semibold px-3 py-2 rounded hover:bg-[#d59844] transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              Open GPS
            </a>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-[#FBF8F3] space-y-4">
          <h4 className="font-serif text-lg text-[#1B2A23]">How to find our Broad Street shopfront</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#F0EAD6]/70 border border-[#C58B39]/30 rounded">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A8422B] uppercase tracking-wider mb-1.5">
                <Compass className="w-3.5 h-3.5" />
                By Train (Foregate Street)
              </div>
              <p className="text-sm text-[#4A524D]">
                Exit Worcester Foregate Street railway station, walk 4 minutes south toward The Cross, and turn right into Broad Street. Look out for number 36 on the sunny high street side.
              </p>
            </div>
            <div className="p-4 bg-[#F0EAD6]/70 border border-[#C58B39]/30 rounded">
              <div className="flex items-center gap-2 font-mono text-xs text-[#1B2A23] uppercase tracking-wider mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C58B39]" />
                Parking & Bus Station
              </div>
              <p className="text-sm text-[#4A524D]">
                2 minutes walk from Crowngate Shopping Centre multi-storey car park and Worcester Bus Station (Angel Place).
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#C58B39]/20 text-xs text-[#4A524D]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#3A6B4C]" />
              Ground floor high-street entrance on Broad Street
            </span>
            <a
              href={SHOP_FACTS.address.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8422B] font-semibold underline underline-offset-4 hover:text-[#1B2A23]"
            >
              Get Google Directions →
            </a>
          </div>
        </div>
      )}

      {/* Footer Contact Strip */}
      <div className="px-5 py-3.5 bg-[#FBF8F3] border-t border-[#C58B39]/30 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-mono uppercase text-[#4A524D]">Planning a visit or bringing items?</p>
          <p className="text-sm font-medium text-[#1B2A23]">
            Call ahead at <span className="font-mono font-semibold text-[#A8422B]">01905 617637</span>
          </p>
        </div>
        <a
          href="tel:01905617637"
          className="inline-flex items-center gap-2 bg-[#1B2A23] text-[#FBF8F3] font-mono text-xs uppercase px-4 py-2.5 rounded hover:bg-[#2B5B40] transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#C58B39]" />
          Ring the Shop Counter
        </a>
      </div>
    </div>
  );
};
