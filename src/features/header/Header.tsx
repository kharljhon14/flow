import Image from 'next/image';
import HeaderLinksContainer, { HeaderLink } from './HeaderLinksContainer';
import Button from '@/components/Button';

const LINKS: HeaderLink[] = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'Projects' },
  { href: '/', label: 'Services' },
  { href: '/', label: 'Contacts' },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between mx-8">
      <Image
        src="/logo-black.svg"
        alt="flow logo"
        width={90}
        height={50}
        style={{ width: '90px', height: '90px' }}
      />
      <HeaderLinksContainer headerLinks={LINKS} />
      <div>
        <Button>Contact Us</Button>
      </div>
    </header>
  );
}
