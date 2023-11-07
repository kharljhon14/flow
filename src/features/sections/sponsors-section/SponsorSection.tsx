import Image from 'next/image';

export default function SponsorSection() {
  return (
    <div className="w-full bg-gray-900 p-6 lg:flex lg:justify-evenly grid grid-cols-5 gap-2">
      <Image
        src="/sponsors/amazon.svg"
        alt="amazon"
        width={90}
        height={90}
        style={{ width: 'auto', height: '90px' }}
      />
      <Image
        src="/sponsors/paypal.svg"
        alt="amazon"
        width={90}
        height={90}
        style={{ width: 'auto', height: '90px' }}
      />
      <Image
        src="/sponsors/stripe.svg"
        alt="amazon"
        width={90}
        height={90}
        style={{ width: 'auto', height: '90px' }}
      />
      <Image
        src="/sponsors/skrill.svg"
        alt="amazon"
        width={90}
        height={90}
        style={{ width: 'auto', height: '90px' }}
      />
      <Image
        src="/sponsors/alipay.svg"
        alt="amazon"
        width={90}
        height={90}
        style={{ width: 'auto', height: '90px' }}
      />
    </div>
  );
}
