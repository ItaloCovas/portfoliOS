'use client';
import { useEffect, useState } from 'react';

export function Clock() {
  const [currentTime, setCurrentTime] = useState<string>('...');

  const updatedTime = () => {
    // TODO: undefined => Locale
    const newTime = new Date().toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });
    setCurrentTime(newTime);
  };

  useEffect(() => {
    const intervalId = setInterval(updatedTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{currentTime}</div>;
}
