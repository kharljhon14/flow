import Button from '@/components/Button';
import Image from 'next/image';
import { IoIosArrowDropright } from 'react-icons/io';

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:mr-12 lg:ml-24 mx-12 h-screen">
      <div className="flex justify-center lg:w-1/2 flex-col lg:items-start">
        <div className="space-y-4 lg:text-left">
          <h1 className="lg:text-8xl md:text-6xl text-5xl font-bold">
            Grow Your <span className="block">Business With Us</span>
          </h1>
          <p className="md:text-md text-sm lg:text-left">
            Welcome to our platform! We specialize in building robust and responsive web
            applications tailored to meet your business needs.
          </p>
        </div>
        <div className="mt-8">
          <Button
            variant="secondary"
            className=" w-44"
          >
            <div className="flex items-center justify-evenly w-full ">
              <span className="font-semibold">Get Started</span>
              <IoIosArrowDropright size={24} />
            </div>
          </Button>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-8/12">
        <Image
          width={800}
          height={800}
          src="/art/hero-art.svg"
          alt="Hero header art"
        />
      </div>
    </div>
  );
}
