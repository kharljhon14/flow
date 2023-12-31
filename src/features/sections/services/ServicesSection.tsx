import Image from 'next/image';
import Service from './Service';
import ServicesContainer from './ServicesContainer';

export default function ServicesSection() {
  return (
    <div className="relative lg:h-[60vh] w-full">
      <div className="h-full w-full relative flex items-center justify-center">
        <Image
          priority
          fill
          src="/images/guide.jpg"
          alt="Service wall Image"
          objectFit="cover"
          objectPosition="bottom"
        />

        <div className="relative flex items-center justify-center flex-col space-y-6 w-full p-12 lg:p-0">
          <div className="space-y-4 text-center">
            <span className="text-lime-700 text-lg">Herbal Remedies For Optimal Health</span>
            <h1 className="font-light lg:text-5xl text-4xl text-center text-gray-800 uppercase">
              Maximize your values
            </h1>
          </div>

          <ServicesContainer />
        </div>
      </div>
    </div>
  );
}
