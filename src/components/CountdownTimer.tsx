import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes: number;
  initialSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialMinutes, initialSeconds }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div className="flex items-center justify-center py-2 text-white">
      <div className="flex items-center">
        <Clock className="w-5 h-5 mr-2 animate-pulse" />
        <span className="text-lg font-bold uppercase tracking-wider mr-3">A OFERTA ACABA EM:</span>
        <div className="flex items-center">
          <div className="bg-pink-800 bg-opacity-40 backdrop-blur-sm rounded-md px-3 py-1 text-xl font-mono">
            {minutes.toString().padStart(2, '0')}
          </div>
          <span className="mx-1 text-xl font-bold">:</span>
          <div className="bg-pink-800 bg-opacity-40 backdrop-blur-sm rounded-md px-3 py-1 text-xl font-mono">
            {seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;