import { useState, useEffect } from 'react';

export function useCountdown(targetDate: Date) {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - Date.now();
    const timeLeft = Math.max(0, difference);

    return {
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
      isExpired: timeLeft === 0
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}