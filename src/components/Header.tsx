import React from 'react';
import CountdownTimer from './CountdownTimer';

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-600 to-pink-800 backdrop-blur-md py-3 px-4 shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-white font-bold mr-3 text-lg uppercase tracking-wider">A OFERTA ACABA EM:</p>
        <CountdownTimer initialMinutes={30} />
      </div>
    </div>
  );
};

export default Header;