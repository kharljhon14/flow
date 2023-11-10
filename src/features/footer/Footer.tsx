import { ImPhone } from 'react-icons/im';
import { MdOutlineMailOutline, MdFacebook } from 'react-icons/md';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t py-8 bg-gray-50 px-24 flex items-center justify-between text-gray-500">
      <div className="w-full">
        <span className="text-sm ">
          We&apos;re dedicated to providing reliable and accurate <br /> information on herbal
          remedies, empowering you to make <br /> informed decisions about your health
        </span>
      </div>

      <div className="w-full">
        <div className="my-6">
          <span className="font-semibold text-black">Sitemap</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Courses</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Membership</Link>
          <Link href="/">Contact Us</Link>
        </div>
      </div>

      <div className="w-full">
        <div className="my-6">
          <span className="font-semibold text-black">Contacts</span>
        </div>
        <div className="grid grid-cols-1 gap-4 text-sm">
          <div className="flex space-x-2 items-center">
            <ImPhone size={22} />
            <span>+1546728292</span>
          </div>

          <div className="flex space-x-2 items-center">
            <MdOutlineMailOutline size={22} />
            <span>flow@gmail.com</span>
          </div>

          <div className="flex space-x-2 items-center">
            <MdFacebook size={22} />
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
