import Image from 'next/image';

import logo from '@/public/img/logo.png';
import { Loading } from '../Loading';

export function LoadingScreen() {
  return (
    <main className="fixed top-0 left-0 w-full h-full bg-[#DEDEDE] text-black flex flex-col justify-center items-center z-[100]">
      <Image src={logo} alt="Logo PortfoliOS" className="w-[500px] h-[500px]" />
      <Loading className="mt-24" />
    </main>
  );
}
