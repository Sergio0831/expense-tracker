import SignupForm from '@/components/auth/SignupForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup',
  description: '...',
};

const SignupPage = () => {
  return <SignupForm />;
};

export default SignupPage;
