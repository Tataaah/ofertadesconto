import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -inset-[10%] bg-gradient-to-b from-pink-500 via-pink-300 to-white opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[15%] w-[30vw] h-[30vw] rounded-full bg-pink-400/30 blur-[80px] animate-pulse"></div>
        <div className="absolute top-[40%] right-[15%] w-[25vw] h-[25vw] rounded-full bg-pink-500/40 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[10%] left-[25%] w-[20vw] h-[20vw] rounded-full bg-yellow-300/30 blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default BackgroundEffect;