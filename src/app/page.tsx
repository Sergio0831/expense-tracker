'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../components/ui/Button';

const HomePage = () => {
  const router = useRouter();

  return (
    <main>
      <div className="min-h-[60dvh] bg-mint-green polygon bg-hero-pattern bg-no-repeat bg-center relative"></div>
      <Image
        src="/illustration.png"
        alt="Illustration"
        width={400}
        height={700}
        priority={true}
        loading="eager"
        className="absolute inset-0 top-[10vh] mx-auto"
      />
      <div className="container py-10">
        <h1 className="heading-1 text-medium-teal text-center">
          spend smarter <br /> save more
        </h1>
        <Button
          onClick={() => router.push('sign-in')}
          type="button"
          variant={'gradient'}
          size={'large'}
          aria-label="Sign In"
          className="mx-auto mt-7 mb-5">
          Get Started
        </Button>
        <div className="flex gap-2 justify-center text-medium-grey">
          <p>Already have account?</p>
          <Link
            href="login"
            aria-label="Log In"
            className="link-outline text-dark-teal
hover:text-light-teal">
            Log In
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
