import { TbDeviceDesktopHeart } from 'react-icons/tb';

export default function ServiceCard() {
  return (
    <div className="bg-sky-300 rounded-2xl p-4 max-w-sm shadow-lg">
      <div className="w-24 h-24 rounded-full bg-white p-4 flex items-center justify-center border border-black">
        <TbDeviceDesktopHeart size={36} />
      </div>

      <div className="mt-4 flex justify-start flex-col">
        <h2 className="font-semibold text-3xl">Web Design</h2>
        <p className="mt-8 text-md">
          Our expert design team creates captivating and user-friendly web interfaces tailored to
          your brand.
        </p>
      </div>
    </div>
  );
}
