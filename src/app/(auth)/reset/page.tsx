import ResetForm from '@/components/auth/ResetForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password',
  description: '...',
};

const ResetPage = () => {
  return <ResetForm />;
};

export default ResetPage;
