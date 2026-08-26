import React from 'react';
import { OpeningHoursLedger } from './OpeningHoursLedger';
import { WorcesterMapCard } from './WorcesterMapCard';

export const HoursAndLocationSection: React.FC = () => {
  return (
    <section id="hours-location" className="py-16 sm:py-24 lg:py-28 2xl:py-32 bg-[#F0EAD6] border-b border-[#C58B39]/50 paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-12 lg:mb-16 2xl:mb-20">
          <span className="font-mono text-xs lg:text-sm uppercase tracking-widest text-[#A8422B] inline-flex items-center gap-1.5 justify-center mb-3 lg:mb-4">
            VISIT WORCESTER CITY CENTRE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-[#1B2A23] mt-2 leading-tight">
            36 Broad Street, Worcester WR1 3NH
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#4A524D] mt-3 lg:mt-4 leading-relaxed">
            Directly on Broad Street in the heart of Worcester city centre. Call 01905 617637 to check specific stock or verify operational hours before visiting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 6 cols: Opening Hours Ledger */}
          <div className="lg:col-span-6 h-full">
            <OpeningHoursLedger />
          </div>

          {/* Right 6 cols: Interactive Broad Street Map */}
          <div className="lg:col-span-6 h-full">
            <WorcesterMapCard />
          </div>
        </div>
      </div>
    </section>
  );
};
