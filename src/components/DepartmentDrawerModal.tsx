import React, { useState } from 'react';
import { X, Phone, Sparkles, Check, Copy, Tag, ArrowRight } from 'lucide-react';

export interface DepartmentModalProps {
  dept: {
    id: 'fashion' | 'media' | 'hobby' | 'collectibles';
    code: string;
    name: string;
    subtitle: string;
    description: string;
    photo: string;
    sampleFinds: string[];
  } | null;
  onClose: () => void;
  onOpenTradeModal: (presetCategory?: string) => void;
}

export const DepartmentDrawerModal: React.FC<DepartmentModalProps> = ({
  dept,
  onClose,
  onOpenTradeModal,
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!dept) return null;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('01905 617637');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131E18]/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-department-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FBF8F3] border-2 border-[#C58B39] apothecary-corner shadow-2xl rounded-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Brass Header Badge Strip */}
        <div className="bg-[#1B2A23] text-[#FBF8F3] px-6 py-3.5 flex items-center justify-between border-b border-[#C58B39]/50">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#C58B39] text-[#131E18] font-mono text-[11px] font-bold">
              {dept.code}
            </span>
            <span className="font-mono text-xs text-[#FBF8F3]/80 uppercase tracking-widest">
              BROAD ST SHELF DIRECTORY
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close department cabinet drawer"
            className="p-1.5 rounded text-[#FBF8F3]/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Photo & Vintage Tag */}
          <div className="md:col-span-5 relative">
            <div className="relative aspect-4/5 rounded overflow-hidden border border-[#C58B39]/40 shadow-sm">
              <img
                src={dept.photo}
                alt={dept.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#FBF8F3]/95 border border-[#C58B39] px-2.5 py-1 rounded text-[11px] font-mono text-[#1B2A23] shadow-sm">
                ONE-OF-A-KIND STOCK
              </div>
            </div>
            <p className="mt-2.5 text-[11px] font-mono text-[#4A524D] text-center">
              Stock rotates daily as local Worcester residents bring new items.
            </p>
          </div>

          {/* Details & Interactive Stock Check */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#A8422B] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Aladdin&apos;s Cave Department
              </div>
              <h3 id="modal-department-title" className="font-serif text-2xl sm:text-3xl text-[#1B2A23]">
                {dept.name}
              </h3>
              <p className="text-sm text-[#4A524D] mt-1 italic">{dept.subtitle}</p>

              <p className="text-sm text-[#1C201D] leading-relaxed mt-4">
                {dept.description}
              </p>

              <div className="mt-5">
                <p className="font-mono text-xs uppercase tracking-wider text-[#1B2A23] mb-2.5 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#C58B39]" />
                  Typical shelf discoveries in this section:
                </p>
                <ul className="space-y-2">
                  {dept.sampleFinds.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-[#1C201D] bg-[#F0EAD6]/70 px-3 py-2 rounded border border-[#C58B39]/25"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A8422B] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Stock / Sell action card */}
            <div className="bg-[#F0EAD6] border border-[#C58B39]/40 p-4 rounded space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#1B2A23] font-semibold">
                  Hunting for a specific piece?
                </span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[#1B2A23] hover:text-[#A8422B] underline"
                >
                  <Copy className="w-3 h-3" />
                  {copiedPhone ? 'Copied 01905 617637' : 'Copy phone'}
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="tel:01905617637"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#A8422B] hover:bg-[#8D3521] text-[#FBF8F3] font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded transition-colors font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call 01905 617637
                </a>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenTradeModal(dept.name);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#1B2A23] hover:bg-[#2A4839] text-[#FBF8F3] font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded transition-colors"
                >
                  Sell / Trade {dept.name.split(' ')[0]}
                  <ArrowRight className="w-3.5 h-3.5 text-[#C58B39]" />
                </button>
              </div>
              {copiedPhone && (
                <p className="text-xs font-mono text-[#3A6B4C] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Number copied to clipboard!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
