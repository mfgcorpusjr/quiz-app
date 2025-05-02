import { useState, useRef } from "react";

export default function useTimer(maxTime: number) {
  const [time, setTime] = useState(maxTime);
  const interval = useRef<NodeJS.Timeout>(undefined);

  const startTimer = () => {
    setTime(maxTime);

    interval.current = setInterval(() => {
      setTime((v) => v - 1);
    }, 1000);
  };

  const clearTimer = () => {
    clearInterval(interval.current);
  };

  return {
    time,
    startTimer,
    clearTimer,
  };
}
