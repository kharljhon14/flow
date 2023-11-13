import AboutUsBackground from './AboutUsBackground';
import AboutUsContent from './AboutUsContent';

export default function AboutUsSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[65vh] py-8 h-auto">
      <AboutUsContent />
      <AboutUsBackground />
    </div>
  );
}
