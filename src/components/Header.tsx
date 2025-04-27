import React from 'react';
import { Cake } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center">
      <div className="flex items-center gap-2 mb-6">
        <Cake className="w-12 h-12 text-pink-600" />
        <h1 className="text-4xl sm:text-5xl font-black text-white">
          Confeitaria Premium
        </h1>
      </div>
      <p className="max-w-2xl mx-auto text-lg text-white leading-relaxed">
        Aprenda técnicas exclusivas com os maiores especialistas em confeitaria do Brasil. 
        Uma oportunidade única para elevar suas habilidades culinárias ao próximo nível.
      </p>
    </header>
  );
};

export default Header;