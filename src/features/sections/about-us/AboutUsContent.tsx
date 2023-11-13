import Button from '@/components/Button';

export default function AboutUsContent() {
  return (
    <div className="flex justify-center flex-col lg:p-32 lg:w-1/2  w-full p-6">
      <span className="text-lime-700 mb-4 text-lg">About Us</span>
      <div className="space-y-6">
        <h1 className=" font-light text-4xl uppercase text-gray-800">
          Our Story: Rooted in nature, <br /> commited to your health
        </h1>
        <p className=" leading-7">
          We&apos;re dedicated to providing reliable and accurate information on herbal remedies,
          empowering you to make informed decisions about your health. We believe that the key to
          good health is understanding the healing properties of nature&apos;s gifts. Our team of
          experts is passionate about exploring the world of herbs and their potential to contribute
          to a healthier lifestyle.
        </p>
      </div>

      <div className="mt-6">
        <Button className="uppercase">About Us</Button>
      </div>
    </div>
  );
}
