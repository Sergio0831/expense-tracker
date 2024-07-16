'use client';

import { usePathname } from 'next/navigation';

const AuthHeaderTitle = () => {
  const pathName = usePathname();
  let title;

  if (pathName === '/signin') {
    title = 'Welcome back!';
  }

  if (pathName === '/signup') {
    title = 'Create an account';
  }

  if (pathName === '/reset') {
    title = 'Forgot your password?';
  }

  if (pathName === '/new-password') {
    title = 'Create new password';
  }

  return <h1 className="heading-2 text-white z-10">{title}</h1>;
};

export default AuthHeaderTitle;
