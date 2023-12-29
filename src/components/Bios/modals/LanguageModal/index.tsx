'use client';
import { Dispatch, SetStateAction } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { VT323 } from 'next/font/google';
import { cn } from '@/src/utils/cn';

interface LanguageModalProps {
  isModalOpen: boolean;

  setIsModalOpen: Dispatch<SetStateAction<boolean>>;

  setIsFullscreenModalOpen: Dispatch<SetStateAction<boolean>>;
}
const vt323 = VT323({ weight: ['400'], subsets: ['latin'] });

export function LanguageModal({
  isModalOpen,
  setIsModalOpen,
  setIsFullscreenModalOpen
}: LanguageModalProps) {
  return (
    <Dialog.Root open={isModalOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 bg-black/30 z-50',
            'data-[state=open]:animate-overlay-show'
          )}
        />
        <Dialog.Content
          className={cn(
            'fixed top-[50%] left-[50%] h-[200px] z-[51] w-[350px] translate-x-[-50%] translate-y-[-50%] rounded-none border-white border-2 border-double text-3xl bg-[#0001AA] text-white p-2 focus:outline-none',
            'data-[state=open]:animate-content-show',
            vt323.className
          )}
        >
          <div className="flex flex-col items-center justify-evenly h-full w-full">
            <Dialog.Description className="text-center !mb-4 !text-3xl">
              Choose your LANGUAGE
            </Dialog.Description>

            <footer className="flex gap-3 justify-center w-full ">
              <Dialog.Close
                className="cursor-pointer  text-3xl rounded-none outline-none bg-[#FFFFFF] text-black px-4"
                onClick={() => {
                  //TODO: i18n
                  setIsModalOpen(false);
                  setIsFullscreenModalOpen(true);
                }}
              >
                PT-BR
              </Dialog.Close>
              <Dialog.Close
                className="cursor-pointertext-3xl rounded-none outline-none px-4 bg-[#FFFFFF] text-black"
                onClick={() => {
                  //TODO: i18n
                  setIsModalOpen(false);
                  setIsFullscreenModalOpen(true);
                }}
              >
                EN-US
              </Dialog.Close>
            </footer>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
