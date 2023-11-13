import Button from '@/components/Button';
import { cn } from '@/utils';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren<Record<never, never>> {
  classname?: string;
}

export default function MembershipContent({ children, classname }: Props) {
  return (
    <div
      className={cn(['flex justify-center flex-col lg:p-32 p-6 lg:w-1/2 w-full h-full', classname])}
    >
      {children}
    </div>
  );
}
