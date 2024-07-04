import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva('w-full max-w-[25rem] shadow-custom-lg py-8 px-5 rounded-medium bg-white');

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = ({ children, className }: CardProps) => {
  return <div className={cn(cardVariants({ className }))}>{children}</div>;
};

export default Card;
