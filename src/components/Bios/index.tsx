'use client';
import { useState } from 'react';
import { VT323 } from 'next/font/google';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

import { cn } from '@/src/utils/cn';

import energy from '@/public/img/energy.png';
import { BiosModal } from '../BiosModal';

const vt323 = VT323({ weight: ['400'], subsets: ['latin'] });

export function Bios() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <section
      className={cn(
        'w-full h-full text-3xl flex flex-col items-start justify-end',
        vt323.className
      )}
    >
      <BiosModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Image
        src={energy}
        alt="Energy Star Logo"
        className="w-72 mb-10"
        priority
      />
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('XTXLX BIOS (C) 2023 Motherboard, Inc<br />')
            .start();
          typewriter
            .typeString('BIOS Date 23/11/2023 17:09:12 Ver: 2.02.3<br />')
            .start();
          typewriter.typeString('CPU: Hire(ME) 330 @ 40 MHz<br />').start();
          typewriter.typeString('Speed: 40MHz<br />').start();
          typewriter.typeString('<br />').start();
          typewriter
            .typeString('Initializing USB Controllers...')
            .start()
            .typeString(' DONE!<br />');
          typewriter
            .typeString('12287MB OK (Installed Memory Size: 12277MB)<br />')
            .start();
          typewriter
            .typeString('USB Device(s): 1 Keyboard, 1 Mouse<br />')
            .start();
          typewriter
            .typeString('Auto-Detecting SATA3G_1...IDE Hard Disk<br />')
            .start();
          typewriter
            .typeString('Auto-Detecting SATA3G_2...IDE Hard Disk<br />')
            .start();
          typewriter.typeString('Booting from Hard Disk...<br />').start();
          typewriter.typeString('<br />').start();
          typewriter.typeString('<br />').start();
          typewriter
            .typeString('C:> ÍTALO COVAS<br />')
            .start()
            .callFunction(() => {
              setIsModalOpen(true);
            });
        }}
        options={{
          delay: 0.01
        }}
      />
    </section>
  );
}
