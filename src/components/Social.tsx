'use client';

import { Button } from '@/components/ui/Button';
import { DEFAULT_LOGIN_REDIRECT } from '@/lib/routes';
import { signIn } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Social = () => {
  const handleSignin = (provider: 'github' | 'google') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div>
      <span className="flex gap-4 flex-auto text-muted items-center my-8 after:bg-muted after:opacity-25 after:flex-1 after:h-[1px] after:mt-[1px] before:bg-muted before:flex-1 before:mt-[1px] before:h-[1px] before:opacity-25">
        or sign in with
      </span>
      <div className="flex items-center w-full gap-x-2 ">
        <Button
          className="w-full"
          variant="transparent"
          size="medium"
          onClick={() => handleSignin('google')}>
          <FcGoogle className="h-5 w-5" />
        </Button>
        <Button
          className="w-full"
          variant="transparent"
          size="medium"
          onClick={() => handleSignin('github')}>
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Social;
