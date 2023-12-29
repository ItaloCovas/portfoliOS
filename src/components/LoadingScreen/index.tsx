import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import logo from '@/public/img/logo.png';
import { Loading } from '../Loading';

export function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/desktop');
    }, 2500);
    return () => clearTimeout(timeout);
  });

  return (
    <main className="fixed top-0 left-0 w-full h-full bg-[#DEDEDE] px-8 text-black flex flex-col justify-center items-center z-[100]">
      <Image
        src={logo}
        alt="Logo PortfoliOS"
        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        priority
      />
      <Loading className="mt-24" />
    </main>
  );
}
