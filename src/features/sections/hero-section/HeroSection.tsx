import Button from '@/components/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center mx-12">
      <div className="space-y-4">
        <h1 className=" text-8xl">
          Grow Your <span className="block">Business With Us</span>
        </h1>
        <p className=" text-md">
          Welcome to our platform! We specialize in building robust and responsive web applications
          tailored to meet your business needs.
        </p>
        <Button variant="secondary">Get Started</Button>
      </div>
      <Image
        width={700}
        height={700}
        src="/art/hero-art.svg"
        alt="Hero header art"
      />
    </div>
  );
}
