import AuthHeaderTitle from '@/components/auth/AuthHeaderTitle';

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <header className="curved-header flex-center bg-header">
        <AuthHeaderTitle />
      </header>
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default AuthLayout;
