import React from 'react';

interface AnimatedButtonProps {
  text: string;
  url: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, url }) => {
  return (
    <a 
      href={url}
      className="group relative inline-block w-full sm:w-auto"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></span>
      <button 
        className="relative w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full transform transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl"
      >
        <span className="inline-block animate-pulse">
          {text}
        </span>
      </button>
    </a>
  );
};

export default AnimatedButton;