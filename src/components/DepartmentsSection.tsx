import React, { useState } from 'react';
import { DEPARTMENTS } from '../data/shopData';
import { Sparkles, Phone, Eye, PackagePlus } from 'lucide-react';

export interface DepartmentsSectionProps {
  onSelectDepartment: (dept: (typeof DEPARTMENTS)[number]) => void;
  onOpenTradeModal: (presetCategory?: string) => void;
}

export const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({
  onSelectDepartment,
  onOpenTradeModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredDepts =
    activeFilter === 'all'
      ? DEPARTMENTS
      : DEPARTMENTS.filter((d) => d.id === activeFilter);

  return (
    <section id="departments" className="py-16 sm:py-20 lg:py-28 2xl:py-32 bg-[#FBF8F3] relative border-b border-[#C58B39]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced for Desktop */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-10 mb-12 lg:mb-16">
          <div className="flex-1">
            <span className="font-mono text-xs lg:text-sm uppercase tracking-widest text-[#A8422B] flex items-center gap-1.5 mb-2 lg:mb-3">
              <Sparkles className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
              THE FOUR BROAD STREET CABINETS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-[#1B2A23] leading-tight">
              What You&apos;ll Find Inside
            </h2>
            <p className="text-base lg:text-lg text-[#4A524D] max-w-2xl lg:max-w-3xl mt-2 lg:mt-3 leading-relaxed">
              Packed shelves built for high-street treasure hunters. Every piece is unique, hand-checked, and sourced from Worcester residents.
            </p>
          </div>

          {/* Department Filter Buttons - Enhanced for Desktop */}
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {[
              { id: 'all', label: 'All 4 Cabinets' },
              { id: 'fashion', label: 'Curated Fashion' },
              { id: 'media', label: 'Leisure & Media' },
              { id: 'hobby', label: 'Hobby Gear' },
              { id: 'collectibles', label: 'Collectibles & Novelties' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 lg:px-4 lg:py-2 rounded text-xs lg:text-sm font-mono uppercase tracking-wider transition-all border duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39] ${
                  activeFilter === tab.id
                    ? 'bg-[#1B2A23] text-[#FBF8F3] border-[#1B2A23] shadow-md hover:shadow-lg'
                    : 'bg-[#F0EAD6] text-[#1C201D] border-[#C58B39]/50 hover:bg-[#E5DFC9] hover:shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cabinet Cards Grid - Enhanced Desktop Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
          {filteredDepts.map((dept) => (
            <article
              key={dept.id}
              onClick={() => onSelectDepartment(dept)}
              className="card-lift-hover group cursor-pointer bg-[#F0EAD6] border border-[#C58B39]/60 apothecary-corner rounded-sm flex flex-col justify-between overflow-hidden shadow-sm lg:hover:shadow-2xl transition-all duration-300"
            >
              {/* Top stamp */}
              <div className="bg-[#1B2A23] text-[#FBF8F3] px-4 lg:px-5 py-2.5 lg:py-3 flex items-center justify-between border-b border-[#C58B39]/50">
                <span className="font-mono text-[11px] lg:text-xs uppercase tracking-wider text-[#C58B39] font-bold shrink-0">
                  {dept.code}
                </span>
                <span className="text-[10px] lg:text-xs font-mono text-[#FBF8F3]/75 shrink-0">WORCESTER</span>
              </div>

              {/* Photo - Enhanced Zoom Effect */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#1B2A23] w-full">
                <img
                  src={dept.photo}
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-110 lg:group-hover:scale-115 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131E18]/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-3 lg:right-4 flex items-center justify-between gap-2 lg:gap-3">
                  <span className="bg-[#FBF8F3] text-[#1B2A23] border border-[#C58B39] font-mono text-[11px] lg:text-xs font-bold px-2.5 py-0.5 lg:px-3 lg:py-1 rounded">
                    1 OF 1 ROTATING STOCK
                  </span>
                  <span className="text-white text-xs lg:text-sm font-mono flex items-center gap-1 bg-[#1B2A23]/80 px-2 lg:px-3 py-0.5 lg:py-1 rounded group-hover:bg-[#1B2A23] transition-colors">
                    <Eye className="w-3.5 lg:w-4 h-3.5 lg:h-4 text-[#C58B39]" /> Open Cabinet
                  </span>
                </div>
              </div>

              {/* Content - Enhanced Typography */}
              <div className="p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl lg:text-2xl text-[#1B2A23] group-hover:text-[#A8422B] transition-colors duration-300">
                    {dept.name}
                  </h3>
                  <p className="text-xs lg:text-sm text-[#4A524D] mt-1 font-medium leading-relaxed">{dept.subtitle}</p>

                  <ul className="mt-3.5 lg:mt-4 space-y-1.5 border-t border-[#C58B39]/30 pt-3 lg:pt-4">
                    {dept.sampleFinds.slice(0, 3).map((find, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs lg:text-sm text-[#1C201D]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A8422B] shrink-0" />
                        <span className="truncate">{find}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom action row - Enhanced Button Styling */}
                <div className="pt-3 lg:pt-4 border-t border-[#C58B39]/30 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectDepartment(dept);
                    }}
                    className="link-underline text-xs lg:text-sm font-mono text-[#A8422B] font-bold hover:text-[#1B2A23] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39]"
                  >
                    Inspect Cabinet →
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenTradeModal(dept.name);
                    }}
                    className="btn-secondary-hover inline-flex items-center gap-1 text-[11px] lg:text-xs font-mono bg-[#1B2A23] text-[#FBF8F3] px-3 lg:px-3.5 py-2 lg:py-2.5 rounded hover:bg-[#2B4B39] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39]"
                  >
                    <PackagePlus className="w-3 lg:w-4 h-3 lg:h-4 text-[#C58B39]" />
                    Sell Here
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call shop counter bar below grid - Enhanced for Desktop */}
        <div className="mt-12 lg:mt-16 bg-[#1B2A23] text-[#FBF8F3] p-6 lg:p-8 2xl:p-10 rounded border border-[#C58B39] flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex-1">
            <p className="font-mono text-xs lg:text-sm uppercase tracking-widest text-[#C58B39] font-bold mb-2">
              HUNTING A RARE LP, RETRO COAT, OR BRASS ANTIQUE?
            </p>
            <p className="font-serif text-lg lg:text-2xl text-[#FBF8F3] mt-1">
              Call Nurse Charlotte&apos;s direct counter line at 01905 617637
            </p>
            <p className="text-xs lg:text-sm text-[#FBF8F3]/80 mt-1">
              Ask us to check the Broad Street shelf while you are on the phone.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:01905617637"
              className="btn-primary-hover inline-flex items-center gap-2 bg-[#A8422B] hover:bg-[#8D3521] text-[#FBF8F3] font-mono text-xs lg:text-sm uppercase tracking-wider px-6 lg:px-8 py-3 lg:py-4 rounded font-bold transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C58B39] group"
            >
              <Phone className="w-4 lg:w-5 h-4 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
              Call 01905 617637
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
