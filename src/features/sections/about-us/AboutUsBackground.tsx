import Image from 'next/image';

export default function AboutUsBackground() {
  return (
    <div className="relative h-full lg:w-1/2 hidden">
      <Image
        fill
        src="/images/about-us.jpg"
        alt="Lavender"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
