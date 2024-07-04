'use client';

import Card from '@/components/ui/Card';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginSchemaType } from 'schemas';

const LoginForm = () => {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Card className="mx-auto -mt-10 relative">
      <form>
        <div>
          <label htmlFor="">Email Address</label>
          <input type="text" placeholder="Enter email address" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Enter password" />
        </div>
        <Button variant="gradient" size="medium" type="submit" aria-label="Submit Form">
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
