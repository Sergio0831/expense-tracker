import LoginForm from '@/components/auth/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: '...',
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
