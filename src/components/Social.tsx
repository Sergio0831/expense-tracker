import { Button } from '@/components/ui/Button';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Social = () => {
  return (
    <div>
      <span className="flex gap-4 flex-auto text-muted items-center my-8 after:bg-muted after:opacity-25 after:flex-1 after:h-[1px] after:mt-[1px] before:bg-muted before:flex-1 before:mt-[1px] before:h-[1px] before:opacity-25">
        or sign in with
      </span>
      <div className="flex items-center w-full gap-x-2 ">
        <Button className="w-full" variant="transparent" size="medium" onClick={() => {}}>
          <FcGoogle className="h-5 w-5" />
        </Button>
        <Button className="w-full" variant="transparent" size="medium" onClick={() => {}}>
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Social;
