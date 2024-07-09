'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import Social from '@/components/Social';
import AuthLink from '@/components/ui/auth/AuthLink';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  linkLabel: string;
  linkHref: string;
  linkText?: string;
  showSocial?: boolean;
}

const Card = ({ children, className, linkLabel, linkHref, linkText, showSocial }: CardProps) => {
  return (
    <div
      className={cn(
        'w-full max-w-[30rem] shadow-custom-lg py-8 px-6 rounded-medium bg-white',
        className,
      )}>
      {children}
      {showSocial && <Social />}
      <AuthLink className="mt-8" text={linkText} linkHref={linkHref} linkLabel={linkLabel} />
    </div>
  );
};

export default Card;
