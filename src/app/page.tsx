'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import AuthLink from '@/components/auth/AuthLink';

const HomePage = () => {
  const router = useRouter();

  return (
    <main>
      <div className="min-h-[60dvh] bg-mint-green polygon bg-hero-pattern bg-no-repeat bg-center relative"></div>
      <Image
        src="/illustration.png"
        alt="Illustration"
        width={300}
        height={500}
        priority={true}
        loading="eager"
        className="absolute inset-0 top-[10vh] mx-auto w-auto"
      />
      <div className="container py-10">
        <h1 className="heading-1 text-medium-teal text-center">
          spend smarter <br /> save more
        </h1>
        <Button
          onClick={() => {
            router.push('/signup');
            console.log('hello');
          }}
          type="button"
          variant={'gradient'}
          size={'large'}
          aria-label="Sign In"
          className="mx-auto mt-7 mb-5 max-w-[22.5rem] w-full">
          Get Started
        </Button>
        <AuthLink text="Already have an account?" linkHref="/signin" linkLabel="Sign in here" />
      </div>
    </main>
  );
};

export default HomePage;
