import Image from 'next/image';

export default function AboutUsBackground() {
  return (
    <div className="relative h-full w-full">
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
