'use client';

import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'w-full max-w-[30rem] shadow-custom-lg py-8 px-6 rounded-medium bg-white',
        className,
      )}
      {...props}
    />
  );
};

export default Card;
