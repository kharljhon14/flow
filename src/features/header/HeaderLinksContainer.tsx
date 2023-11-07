import HeaderLink from './HeaderLink';

export interface HeaderLink {
  href: string;
  label: string;
}

interface Props {
  headerLinks: HeaderLink[];
}

export default function HeaderLinksContainer({ headerLinks }: Props) {
  return (
    <div className="space-x-6 hidden lg:block">
      {headerLinks.map(({ href, label }) => (
        <HeaderLink
          key={href}
          href={href}
        >
          {label}
        </HeaderLink>
      ))}
    </div>
  );
}
