import { ReactNode } from 'react';

interface IconProps {
  icon: ReactNode;

  text: string;

  href: string;
}

export function Icon({ href, icon, text }: IconProps) {
  return (
    <a
      className="w-[60px] h-[75px] flex flex-col gap-y-2 justify-center items-center cursor-pointer rounded-lg hover:bg-white/20 hover:font-bold transition ease-in-out"
      href={href}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {icon}
      <span className="text-white text-xs">{text}</span>
    </a>
  );
}
