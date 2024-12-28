import CaseSelector from '../components/CaseSelector';
import SizeSelector from '../components/SizeSelector';
import BandCarousel from '../components/BandCarousel';
import CollectionSwitcher from '../components/CollectionSwitcher';
import PriceDisplay from '../components/PriceDisplay';

export default function Customization() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white shadow">
        <h1 className="text-2xl font-semibold text-gray-800">Customize Your Watch</h1>
      </header>
      <main className="p-6">
        <CollectionSwitcher />
        <CaseSelector />
        <SizeSelector />
        <BandCarousel />
        <PriceDisplay />
      </main>
    </div>
  );
}
