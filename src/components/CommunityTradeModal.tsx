import React, { useState } from 'react';
import { X, PhoneCall, PackagePlus, Sparkles, Copy, MapPin } from 'lucide-react';
import { SHOP_FACTS } from '../data/shopData';

export interface CommunityTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetCategory?: string;
}

export const CommunityTradeModal: React.FC<CommunityTradeModalProps> = ({
  isOpen,
  onClose,
  presetCategory = 'Curated Fashion',
}) => {
  const [mode, setMode] = useState<'sell' | 'stock-check'>('sell');
  const [category, setCategory] = useState(presetCategory);
  const [itemDescription, setItemDescription] = useState('');
  const [visitorName, setVisitorName] = useState('');
  const [preferredDay, setPreferredDay] = useState('Saturday morning');
  const [submittedTicket, setSubmittedTicket] = useState<{
    code: string;
    mode: 'sell' | 'stock-check';
    category: string;
    item: string;
    name: string;
    day: string;
  } | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemDescription.trim()) return;
    const ticketCode = `WR1-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedTicket({
      code: ticketCode,
      mode,
      category,
      item: itemDescription.trim(),
      name: visitorName.trim() || 'Worcester Resident',
      day: preferredDay,
    });
  };

  const handleCopyTicket = () => {
    if (!submittedTicket) return;
    const text = `Nurse Charlotte's Broad St Counter Ticket #${submittedTicket.code}\nType: ${
      submittedTicket.mode === 'sell' ? 'Sell / Trade Enquiry' : 'Stock Availability Check'
    }\nCategory: ${submittedTicket.category}\nItem: ${submittedTicket.item}\nVisitor: ${
      submittedTicket.name
    }\nPhone Shop: 01905 617637 (36 Broad St, Worcester WR1 3NH)`;
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131E18]/80 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="trade-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FBF8F3] border-2 border-[#C58B39] apothecary-corner shadow-2xl rounded-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1B2A23] text-[#FBF8F3] px-6 py-4 flex items-center justify-between border-b border-[#C58B39]/50">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#C58B39]">
              COMMUNITY CIRCULAR EXCHANGE // WORCESTER
            </span>
            <h3 id="trade-modal-title" className="font-serif text-xl text-[#FBF8F3]">
              Counter Enquiry &amp; Sell/Trade Desk
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded text-[#FBF8F3]/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-[#C58B39]/30 bg-[#F0EAD6]">
          <button
            type="button"
            onClick={() => {
              setMode('sell');
              setSubmittedTicket(null);
            }}
            className={`flex-1 py-3 text-xs font-mono uppercase tracking-wider transition-colors border-r border-[#C58B39]/30 ${
              mode === 'sell'
                ? 'bg-[#FBF8F3] text-[#A8422B] font-bold border-b-2 border-[#A8422B]'
                : 'text-[#4A524D] hover:text-[#1B2A23]'
            }`}
          >
            Bring Pre-Loved Items to Sell/Trade
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('stock-check');
              setSubmittedTicket(null);
            }}
            className={`flex-1 py-3 text-xs font-mono uppercase tracking-wider transition-colors ${
              mode === 'stock-check'
                ? 'bg-[#FBF8F3] text-[#A8422B] font-bold border-b-2 border-[#A8422B]'
                : 'text-[#4A524D] hover:text-[#1B2A23]'
            }`}
          >
            Ask If An Item Is In Stock
          </button>
        </div>

        {!submittedTicket ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="p-3.5 bg-[#F0EAD6]/80 border border-[#C58B39]/40 rounded text-xs text-[#4A524D] leading-relaxed">
              {mode === 'sell' ? (
                <>
                  <strong className="text-[#1B2A23]">We buy directly from local residents:</strong>{' '}
                  Have true vintage clothing, vinyl records, musical instruments, or quirky bric-a-brac? Fill out this quick slip so you can reference it when calling{' '}
                  <span className="font-mono font-semibold text-[#A8422B]">01905 617637</span> or popping into 36 Broad Street.
                </>
              ) : (
                <>
                  <strong className="text-[#1B2A23]">Aladdin&apos;s Cave changes daily:</strong> Tell us what treasure you are hunting for. Create your reference slip and ring the counter at{' '}
                  <span className="font-mono font-semibold text-[#A8422B]">01905 617637</span> so we can check our shelves while you’re on the phone.
                </>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#1B2A23] mb-1.5">
                  Department / Cabinet
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white border border-[#C58B39]/50 rounded px-3 py-2 text-sm text-[#1C201D] focus:outline-none focus:border-[#A8422B]"
                >
                  <option value="Curated Fashion">Curated Fashion (Vintage & Retro Apparel)</option>
                  <option value="Leisure & Media">Leisure & Media (Vinyl, Books, Instruments)</option>
                  <option value="Hobby Gear">Hobby Gear (Sporting & Creative Hobby Items)</option>
                  <option value="Collectibles & Bric-a-Brac">Collectibles & Novelties (Bric-a-Brac)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#1B2A23] mb-1.5">
                  Planned Visit Day
                </label>
                <select
                  value={preferredDay}
                  onChange={(e) => setPreferredDay(e.target.value)}
                  className="w-full bg-white border border-[#C58B39]/50 rounded px-3 py-2 text-sm text-[#1C201D] focus:outline-none focus:border-[#A8422B]"
                >
                  <option value="Monday to Friday (9am–5pm)">Monday to Friday (9:00 AM – 5:00 PM)</option>
                  <option value="Saturday (9am–5pm)">Saturday (9:00 AM – 5:00 PM)</option>
                  <option value="Sunday (Call first to check seasonal hours)">Sunday (Call 01905 617637 first)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#1B2A23] mb-1.5">
                {mode === 'sell'
                  ? 'What item(s) are you bringing to sell or trade?'
                  : 'What vintage item, vinyl LP, or curiosity are you looking for?'}
              </label>
              <textarea
                rows={3}
                required
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
                placeholder={
                  mode === 'sell'
                    ? 'e.g., 1980s Harris Tweed blazer (size 42) + 12 classic folk vinyl records in original sleeves'
                    : 'e.g., Acoustic guitar, Worcestershire local history hardback book, or vintage brass scales'
                }
                className="w-full bg-white border border-[#C58B39]/50 rounded p-3 text-sm text-[#1C201D] focus:outline-none focus:border-[#A8422B]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#1B2A23] mb-1.5">
                Your Name (Optional reference)
              </label>
              <input
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="e.g., Charlotte / David (Worcester local)"
                className="w-full bg-white border border-[#C58B39]/50 rounded px-3 py-2 text-sm text-[#1C201D] focus:outline-none focus:border-[#A8422B]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#4A524D] font-mono">
                No automated bot queues — speak to a human on Broad St.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A8422B] hover:bg-[#8D3521] text-[#FBF8F3] font-mono text-xs uppercase tracking-wider px-6 py-3 rounded font-semibold transition-colors shadow-sm"
              >
                <PackagePlus className="w-4 h-4" />
                Generate Counter Reference Slip
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 space-y-5">
            {/* Perforated Tag Ticket */}
            <div className="bg-[#F0EAD6] border-2 border-dashed border-[#C58B39] p-5 rounded relative">
              <div className="flex items-center justify-between border-b border-[#C58B39]/30 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#A8422B]" />
                  <span className="font-mono text-xs font-bold text-[#1B2A23] uppercase">
                    COUNTER REFERENCE SLIP
                  </span>
                </div>
                <span className="bg-[#1B2A23] text-[#C58B39] font-mono text-xs font-bold px-2.5 py-1 rounded">
                  REF #{submittedTicket.code}
                </span>
              </div>

              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-[#4A524D] font-mono text-xs">Request Type:</dt>
                  <dd className="font-semibold text-[#1B2A23]">
                    {submittedTicket.mode === 'sell'
                      ? 'Pre-Loved Sell / Trade Offer'
                      : 'Shelf Availability Check'}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#4A524D] font-mono text-xs">Department:</dt>
                  <dd className="font-medium text-[#1B2A23]">{submittedTicket.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#4A524D] font-mono text-xs">Preferred Visit:</dt>
                  <dd className="font-medium text-[#1B2A23]">{submittedTicket.day}</dd>
                </div>
                <div className="pt-2 border-t border-[#C58B39]/30">
                  <dt className="text-[#4A524D] font-mono text-xs mb-1">Item Description:</dt>
                  <dd className="bg-white/80 p-2.5 rounded border border-[#C58B39]/30 text-[#1C201D] text-sm">
                    &ldquo;{submittedTicket.item}&rdquo;
                  </dd>
                </div>
              </dl>
            </div>

            {/* Direct Call or Copy Actions */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:01905617637"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#A8422B] hover:bg-[#8D3521] text-[#FBF8F3] font-mono text-xs uppercase tracking-wider px-5 py-3 rounded font-bold transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call 01905 617637 Now
                </a>
                <button
                  type="button"
                  onClick={handleCopyTicket}
                  className="inline-flex items-center justify-center gap-2 bg-[#1B2A23] hover:bg-[#2B4B39] text-[#FBF8F3] font-mono text-xs uppercase tracking-wider px-4 py-3 rounded transition-colors"
                >
                  <Copy className="w-3.5 h-3.5 text-[#C58B39]" />
                  {copiedCode ? 'Slip Copied!' : 'Copy Reference Slip'}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[#4A524D] bg-[#F0EAD6]/60 p-3 rounded border border-[#C58B39]/30">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#A8422B]" />
                  36 Broad St, Worcester WR1 3NH
                </span>
                <a
                  href={SHOP_FACTS.address.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#A8422B] underline"
                >
                  Open Google Maps →
                </a>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setSubmittedTicket(null)}
                className="text-xs font-mono text-[#4A524D] underline hover:text-[#1B2A23]"
              >
                ← Create another slip
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
