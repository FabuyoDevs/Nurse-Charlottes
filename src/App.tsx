import { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { StoryAndReputationSection } from './components/StoryAndReputationSection';
import { CommunitySourcingSection } from './components/CommunitySourcingSection';
import { HoursAndLocationSection } from './components/HoursAndLocationSection';
import { FooterSection } from './components/FooterSection';
import { DepartmentDrawerModal } from './components/DepartmentDrawerModal';
import { CommunityTradeModal } from './components/CommunityTradeModal';
import { DEPARTMENTS } from './data/shopData';
import { Phone, Navigation, PackagePlus } from 'lucide-react';
import { SHOP_FACTS } from './data/shopData';

export function App() {
  const [selectedDepartment, setSelectedDepartment] = useState<(typeof DEPARTMENTS)[number] | null>(
    null
  );
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
  const [tradePresetCategory, setTradePresetCategory] = useState<string>('Curated Fashion');

  const handleOpenTradeModal = (presetCategory?: string) => {
    if (presetCategory) {
      setTradePresetCategory(presetCategory);
    }
    setIsTradeModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#1C201D] pb-24 md:pb-16 lg:pb-0 w-full">
      {/* Sticky Top Header + Operational Status Banner */}
      <HeaderNav onOpenTradeModal={handleOpenTradeModal} />

      {/* Main Page Story */}
      <main className="flex-grow w-full">
        {/* 1. Hero Section */}
        <HeroSection onOpenTradeModal={handleOpenTradeModal} />

        {/* 2. The Four Cabinet Departments (Curated Fashion, Media, Hobby, Collectibles) */}
        <DepartmentsSection
          onSelectDepartment={(dept) => setSelectedDepartment(dept)}
          onOpenTradeModal={handleOpenTradeModal}
        />

        {/* 3. Behind The Tongue-In-Cheek Name & Directory Reputation (4.3/5) */}
        <StoryAndReputationSection />

        {/* 4. Community Circular Sourcing (How Worcester residents buy/sell/trade) */}
        <CommunitySourcingSection onOpenTradeModal={handleOpenTradeModal} />

        {/* 5. Broad Street Opening Hours Ledger & Interactive Map */}
        <HoursAndLocationSection />
      </main>

      {/* 6. Apothecary Heritage Footer */}
      <FooterSection onOpenTradeModal={handleOpenTradeModal} />

      {/* Mobile Sticky Quick Action Bar (for visitors walking in Worcester) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1B2A23] text-[#FBF8F3] border-t border-[#C58B39] px-3 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-2xl w-full">
        <a
          href="tel:01905617637"
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#A8422B] text-[#FBF8F3] font-mono text-xs font-bold py-2.5 rounded w-full"
        >
          <Phone className="w-3.5 h-3.5" />
          Call 01905 617637
        </a>
        <a
          href={SHOP_FACTS.address.googleMapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#C58B39] text-[#131E18] font-mono text-xs font-bold py-2.5 rounded w-full"
        >
          <Navigation className="w-3.5 h-3.5" />
          Broad St Map
        </a>
        <button
          type="button"
          onClick={() => handleOpenTradeModal()}
          className="inline-flex items-center justify-center gap-1 bg-[#F0EAD6]/20 border border-[#C58B39]/50 text-[#FBF8F3] font-mono text-xs px-3 py-2.5 rounded"
        >
          <PackagePlus className="w-3.5 h-3.5 text-[#C58B39]" />
          Sell
        </button>
      </div>

      {/* Department Inspection Drawer Modal */}
      <DepartmentDrawerModal
        dept={selectedDepartment}
        onClose={() => setSelectedDepartment(null)}
        onOpenTradeModal={handleOpenTradeModal}
      />

      {/* Community Sell/Trade & Stock Enquiry Modal */}
      <CommunityTradeModal
        isOpen={isTradeModalOpen}
        onClose={() => setIsTradeModalOpen(false)}
        presetCategory={tradePresetCategory}
      />
    </div>
  );
}

export default App;
