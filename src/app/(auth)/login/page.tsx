import LoginForm from '@/components/ui/auth/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: '...',
};

const LoginPage = () => {
  return (
    <div className="container">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
