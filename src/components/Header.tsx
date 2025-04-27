import React from 'react';
import CountdownTimer from './CountdownTimer';

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-r from-pink-500/80 to-pink-300/80 shadow-md">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-white font-bold mr-3 text-lg">A OFERTA ACABA EM:</span>
            <CountdownTimer initialMinutes={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;