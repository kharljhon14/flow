import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const buttonVarinats = cva(
  'inline-flex items-center jutify-center whitesoace-nowrap rounded-lg p-3 transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-emerald-700 text-white hover:bg-emerald-800',
        secondary: 'bg-yellow-400 border border-black hover:bg-yellow-400/70',
        outline: 'border border-2 border-black hover:bg-black hover:text-white ',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVarinats> {
  children?: ReactNode;
  className?: string;
}

export default function Button({ children, className, variant, ...props }: Props) {
  return (
    <button
      className={cn(buttonVarinats({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
