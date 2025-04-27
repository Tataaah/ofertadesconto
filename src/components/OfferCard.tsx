import React from 'react';
import { Sparkles } from 'lucide-react';

const OfferCard = () => {
  return (
    <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/90 rounded-2xl shadow-xl p-6 sm:p-8 border border-pink-200 relative overflow-hidden">
      {/* Gold corner decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-70 -translate-x-10 -translate-y-10 rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-300 to-yellow-500 opacity-70 translate-x-10 translate-y-10 rotate-45"></div>
      
      <div className="relative">
        {/* Title section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-600 animate-pulse">
            <Sparkles className="inline-block w-8 h-8 mr-2 text-yellow-500" />
            Meus PARABÉNS!
            <Sparkles className="inline-block w-8 h-8 ml-2 text-yellow-500" />
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-pink-500 mt-2">
            Você ganhou um desconto em nosso PLANO PREMIUM
          </p>
        </div>

        {/* Price section */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-500 line-through">DE ~R$19,99~</p>
          <p className="text-xl text-pink-700 font-medium">POR APENAS</p>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-500 blur-xl opacity-30 animate-pulse"></div>
            <p className="relative text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-500 to-pink-600 my-2">
              R$13,99
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-center text-lg sm:text-xl font-bold text-pink-700 mb-4">
            ADQUIRA TODOS OS NOSSOS CONTEÚDOS DO NOSSO PLANO PREMIUM
          </p>
          <p className="text-gray-600 italic text-center max-w-2xl mx-auto">
            Eu não devia estar te proporcionando este acesso aos conteúdos MAIS SECRETOS dos confeiteiros MAIS RENOMADOS do nosso país… 
            Mas eu sei o quanto isso irá te proporcionar bons conhecimentos culinários!
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-6">
          <a 
            href="https://pay.kirvano.com/9d9296aa-4d85-45b0-a3d4-09f42b71be06" 
            className="w-full sm:w-auto text-center py-4 px-8 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg sm:text-xl border-2 border-yellow-400 animate-bounce-slow"
          >
            SIM! QUERO MEU DESCONTO ESPECIAL
          </a>
          
          <a 
            href="https://pay.kirvano.com/76e1e8fe-bc3e-4f47-bb52-0ce04e10c162" 
            className="text-pink-600 text-sm sm:text-base hover:text-pink-800 underline decoration-1 decoration-dotted"
          >
            Não quero. Obrigado(a)!
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;