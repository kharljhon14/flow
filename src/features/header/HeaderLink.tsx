import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props {
  href: string;
  children?: ReactNode;
}

export default function HeaderLink({ children, href }: Props) {
  return (
    <Link
      className="text-lg px-4 py-3 border border-transparent hover:border-black rounded-2xl"
      href={href}
    >
      {children}
    </Link>
  );
}
