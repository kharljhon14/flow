import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props {
  href: string;
  children?: ReactNode;
}

export default function HeaderLink({ children, href }: Props) {
  return (
    <Link
      className="text-md px-4 py-3 border-b-2 border-b-transparent hover:border-b-lime-700 "
      href={href}
    >
      {children}
    </Link>
  );
}
