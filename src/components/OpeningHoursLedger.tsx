import React, { useState, useEffect } from 'react';
import { Clock, Phone, AlertCircle } from 'lucide-react';
import { SHOP_WEEKLY_HOURS, getLiveShopStatus, LiveShopStatus } from '../utils/shopHours';

export const OpeningHoursLedger: React.FC = () => {
  const [liveStatus, setLiveStatus] = useState<LiveShopStatus>(() => getLiveShopStatus());
  const [selectedDayPreview, setSelectedDayPreview] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveStatus(getLiveShopStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F0EAD6] border-2 border-[#C58B39]/50 apothecary-corner rounded-sm p-6 sm:p-8 relative shadow-xs">
      {/* Top Ledger Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#C58B39]/40 pb-5 mb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#A8422B] flex items-center gap-1.5 mb-1">
            <Clock className="w-3.5 h-3.5" />
            OPERATIONAL HOURS // WORCESTER HIGH STREET
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1B2A23]">
            When to Explore the Shelves
          </h3>
        </div>

        {/* Real-time Open/Closed Badge */}
        <div
          className={`px-4 py-2.5 rounded border flex items-center gap-2.5 ${
            liveStatus.isOpenNow
              ? 'bg-[#1B2A23] text-[#FBF8F3] border-[#3A6B4C]'
              : 'bg-[#FBF8F3] text-[#1B2A23] border-[#C58B39]'
          }`}
        >
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              liveStatus.isOpenNow ? 'bg-[#4ade80] animate-pulse' : 'bg-[#C58B39]'
            }`}
          />
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider">
              {liveStatus.statusBadge}
            </p>
            <p className="text-[11px] opacity-80 font-mono">
              Live UK Time • {liveStatus.ukTimeFormatted}
            </p>
          </div>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="space-y-2">
        {SHOP_WEEKLY_HOURS.map((row) => {
          const isToday = row.day === liveStatus.dayName;
          const isSunday = row.day === 'Sunday';
          const isPreviewed = selectedDayPreview === row.day;

          return (
            <div
              key={row.day}
              onClick={() => setSelectedDayPreview(isPreviewed ? null : row.day)}
              className={`cursor-pointer rounded px-4 py-3 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                isToday
                  ? 'bg-[#1B2A23] text-[#FBF8F3] border-[#C58B39] shadow-xs'
                  : isSunday
                  ? 'bg-[#FBF8F3]/90 text-[#1C201D] border-[#C58B39]/50'
                  : 'bg-[#FBF8F3]/60 hover:bg-[#FBF8F3] text-[#1C201D] border-[#C58B39]/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider w-24">
                  {row.day}
                </span>
                {isToday && (
                  <span className="text-[10px] font-mono uppercase bg-[#C58B39] text-[#131E18] px-2 py-0.5 rounded font-bold">
                    TODAY
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 justify-between sm:justify-end">
                <span
                  className={`font-mono text-xs sm:text-sm font-semibold ${
                    isToday ? 'text-[#FBF8F3]' : isSunday ? 'text-[#A8422B]' : 'text-[#1B2A23]'
                  }`}
                >
                  {row.hours}
                </span>
                <span
                  className={`text-xs ${
                    isToday ? 'text-[#FBF8F3]/80' : 'text-[#4A524D]'
                  }`}
                >
                  {row.statusText}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Seasonal & Bank Holiday Advisory Notice (strictly from operational profile) */}
      <div className="mt-6 p-4 rounded bg-[#FBF8F3] border border-[#C58B39] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#A8422B] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#1C201D]">
            <p className="font-semibold text-[#1B2A23]">
              Travelling for a Bank Holiday or Sunday browse?
            </p>
            <p className="text-[#4A524D] mt-0.5">
              High-street vintage shops occasionally close on bank holidays and Sunday hours vary seasonally. Give Nurse Charlotte&apos;s a quick ring on{' '}
              <span className="font-mono font-semibold text-[#A8422B]">01905 617637</span> before you travel.
            </p>
          </div>
        </div>
        <a
          href="tel:01905617637"
          className="shrink-0 inline-flex items-center gap-2 bg-[#A8422B] hover:bg-[#8B3521] text-[#FBF8F3] font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded transition-colors font-semibold"
        >
          <Phone className="w-3.5 h-3.5" />
          Ring 01905 617637
        </a>
      </div>
    </div>
  );
};
