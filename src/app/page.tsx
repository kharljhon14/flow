import Header from '@/features/header/Header';
import AboutUsSection from '@/features/sections/about-us/AboutUsSection.';
import HeroSection from '@/features/sections/hero/HeroSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutUsSection />
    </main>
  );
}
