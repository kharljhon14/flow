import Image from 'next/image';

interface Props {
  image: string;
}

export default function MembershipBackground({ image }: Props) {
  return (
    <div className="relative h-full lg:w-1/2 hidden">
      <Image
        fill
        src={image}
        alt="Membership image"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
