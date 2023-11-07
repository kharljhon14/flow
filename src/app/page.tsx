import Header from '@/features/header/Header';
import HeroSection from '@/features/sections/hero-section/HeroSection';
import ServicesSection from '@/features/sections/services-section/ServicesSection';
import SponsorSection from '@/features/sections/sponsors-section/SponsorSection';

export default function Home() {
  return (
    <main className="bg-yellow-50">
      <Header />
      <HeroSection />
      <SponsorSection />
      <ServicesSection />
    </main>
  );
}
