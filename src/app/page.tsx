import { Bios } from '@/components/Bios';

export default function Home() {
  return (
    <main className="bg-black text-white flex h-screen w-full flex-col items-center justify-between px-10">
      <Bios />
    </main>
  );
}
