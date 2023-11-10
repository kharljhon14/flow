import Footer from '@/features/footer/Footer';
import Header from '@/features/header/Header';
import AboutUsSection from '@/features/sections/about-us/AboutUsSection.';
import BlogsSection from '@/features/sections/blogs/BlogsSections';
import HeroSection from '@/features/sections/hero/HeroSection';
import MembershipSection from '@/features/sections/membership/MembershipSection';
import ServicesSection from '@/features/sections/services/ServicesSection';
import Video from '@/features/sections/video/Video';
import VideoSection from '@/features/sections/video/VideoSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <MembershipSection />
      <VideoSection />
      <BlogsSection />
      <Footer />
    </main>
  );
}
