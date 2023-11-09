import Image from 'next/image';
import HeaderLinksContainer, { HeaderLink } from './HeaderLinksContainer';

import { AiOutlineMenu } from 'react-icons/ai';
import { LuShoppingCart } from 'react-icons/lu';
import Link from 'next/link';

const LINKS: HeaderLink[] = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'About' },
  { href: '/', label: 'Courses' },
  { href: '/', label: 'Blog' },
  { href: '/', label: 'Membership' },
  { href: '/', label: 'Contact Us' },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 py-3 shadow-md z-10 bg-white">
      <div className="flex items-center justify-between lg:mx-16 mx-6">
        <Image
          src="/logo-no-background.png"
          alt="flow logo"
          width={70}
          height={50}
          style={{ width: '65px', height: '40px' }}
        />
        <HeaderLinksContainer headerLinks={LINKS} />
        <div className="hidden lg:block">
          <Link
            href="/"
            className="text-md flex items-center justify-center space-x-3 border-b-2 border-b-transparent hover:border-b-emerald-600 px-4 py-3"
          >
            <LuShoppingCart size={18} />
            <span>Sign in</span>
          </Link>
        </div>
        <button className="lg:hidden">
          <AiOutlineMenu size={26} />
        </button>
      </div>
    </header>
  );
}
