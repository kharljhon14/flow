import Button from '@/components/Button';
import Header from '@/features/header/Header';
import HeroSection from '@/features/sections/hero-section/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-yellow-100 min-h-screen">
      <Header />
      <HeroSection />
    </main>
  );
}
