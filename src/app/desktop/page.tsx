'use client';
import { Icon } from '@/src/components/Icon';
import { TaskBar } from '@/src/components/TaskBar';
import { Window } from '@/src/components/Window';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Desktop() {
  return (
    <main className="w-screen h-screen bg-mountain bg-no-repeat bg-cover flex flex-col overflow-x-hidden overflow-y-hidden">
      <TaskBar />
      <div className="h-[100vh] flex items-start px-16 pt-16">
        <div className="flex h-full flex-col w-1/3 justify-start gap-y-8">
          <Icon
            icon={<FaGithub className="text-cblack-github w-[35px] h-[35px]" />}
            text="Github"
            href="https://github.com/ItaloCovas"
          />
          <Icon
            icon={
              <FaLinkedin className="text-cblue-linkedin w-[35px] h-[35px]" />
            }
            text="Linkedin"
            href="https://www.linkedin.com/in/italocovas"
          />
        </div>
        <div className="w-2/3 h-full">
          <Window />
        </div>
      </div>
      <div className="bg-[#fff6] backdrop-blur-md backdrop-filter w-[500px] h-[60px] mx-auto mb-6 flex items-center justify-center font-bold text-black text-2xl rounded-3xl">
        TODO: DOCK
      </div>
    </main>
  );
}
