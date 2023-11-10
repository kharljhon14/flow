import { PropsWithChildren } from 'react';

export interface BlogProps extends PropsWithChildren<Record<never, never>> {}

export default function Blog({ children }: BlogProps) {
  return (
    <div className="border shadow-lg w-[400px] h-[500px] rounded-lg overflow-hidden relative">
      {children}
    </div>
  );
}
