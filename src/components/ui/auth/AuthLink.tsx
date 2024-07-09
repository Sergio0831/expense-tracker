'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

interface AuthLinkProps {
  text?: string;
  className?: string;
  linkHref: string;
  linkLabel: string;
  ariaLabel?: string;
}

const AuthLink = ({ text, linkLabel, linkHref, className, ariaLabel }: AuthLinkProps) => {
  return (
    <div className={cn('flex gap-2 justify-center', className)}>
      {text && <p>{text}</p>}
      <Link
        href={linkHref}
        aria-label={ariaLabel}
        className="text-dark-teal
hover:text-light-teal link-outline font-medium">
        {linkLabel}
      </Link>
    </div>
  );
};

export default AuthLink;
