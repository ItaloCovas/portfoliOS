import { cn } from '@/src/utils/cn';

interface LoadingProps {
  className: string;
}

export function Loading({ className }: LoadingProps) {
  return (
    <div className={cn('relative inline-flex', className)}>
      <div className="w-8 h-8 bg-[#364152] rounded-full"></div>
      <div className="w-8 h-8 bg-[#364152] rounded-full absolute top-0 left-0 animate-ping"></div>
      <div className="w-8 h-8 bg-[#364152] rounded-full absolute top-0 left-0 animate-pulse"></div>
    </div>
  );
}
