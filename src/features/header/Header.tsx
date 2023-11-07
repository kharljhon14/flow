import Image from 'next/image';
import HeaderLinksContainer, { HeaderLink } from './HeaderLinksContainer';
import Button from '@/components/Button';
import { AiOutlineMenu } from 'react-icons/ai';

const LINKS: HeaderLink[] = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'Projects' },
  { href: '/', label: 'Services' },
  { href: '/', label: 'Contacts' },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between mx-12 py-6">
      <Image
        src="/logo-no-background.svg"
        alt="flow logo"
        width={90}
        height={50}
        style={{ width: '70px', height: '70px' }}
      />
      <HeaderLinksContainer headerLinks={LINKS} />
      <div className="hidden lg:block">
        <Button>Contact Us</Button>
      </div>
      <button className="lg:hidden">
        <AiOutlineMenu size={26} />
      </button>
    </header>
  );
}
