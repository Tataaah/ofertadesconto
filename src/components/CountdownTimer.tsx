import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialMinutes: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialMinutes }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="flex items-center gap-2 font-bold">
      <span className="bg-pink-600 text-white px-3 py-1 rounded">
        {minutes.toString().padStart(2, '0')}
      </span>
      <span className="text-pink-600">:</span>
      <span className="bg-pink-600 text-white px-3 py-1 rounded">
        {seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
};

export default CountdownTimer;