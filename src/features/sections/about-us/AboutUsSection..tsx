import AboutUsBackground from './AboutUsBackground';
import AboutUsContent from './AboutUsContent';

export default function AboutUsSection() {
  return (
    <div className="flex items-center justify-between h-[65vh] py-8">
      <AboutUsContent />
      <AboutUsBackground />
    </div>
  );
}
