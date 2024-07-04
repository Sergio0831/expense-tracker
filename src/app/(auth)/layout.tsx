import AuthHeaderTitle from '@/components/ui/auth/AuthHeaderTitle';

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
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
