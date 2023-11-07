import Header from '@/features/header/Header';
import HeroSection from '@/features/sections/hero-section/HeroSection';
import SponsorSection from '@/features/sections/sponsors-section/SponsorSection';

export default function Home() {
  return (
    <main className="bg-yellow-50">
      <Header />
      <HeroSection />
      <SponsorSection />
    </main>
  );
}
