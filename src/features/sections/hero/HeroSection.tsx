import Button from '@/components/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative h-[100vh] w-full">
      <div className="h-full w-full relative flex items-center justify-center">
        <Image
          priority
          fill
          src="/images/hero-image.jpg"
          alt="Flow Hero Image"
          objectFit="cover"
          objectPosition="bottom"
        />

        <div className="relative flex items-center justify-center flex-col space-y-6">
          <h1 className="font-semibold lg:text-6xl text-3xl text-center text-gray-800">
            Learning Herbs with Dr.Leo To Become
            <span className="block mt-4">Experts in Herb Extraction</span>
          </h1>
          <Button className=" uppercase">Our Membership</Button>
        </div>
      </div>
    </div>
  );
}
