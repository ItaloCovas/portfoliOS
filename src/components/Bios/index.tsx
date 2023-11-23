'use client';
import Typewriter from 'typewriter-effect';

export function Bios() {
  return (
    <section className="w-full h-full">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Hello World!')

            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(1000)
            .deleteAll()

            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
        options={{
          loop: true
        }}
      />
    </section>
  );
}
