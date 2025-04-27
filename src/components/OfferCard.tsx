import React from 'react';
import { ShieldCheck, Zap, LockKeyhole } from 'lucide-react';

const OfferCard: React.FC = () => {
  return (
    <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-[0_10px_40px_rgba(249,168,212,0.5)] bg-white border-2 border-gold">
      <div className="p-8 md:p-10">
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-extrabold text-pink-600 animate-pulse">
            Meus PARABÉNS!
          </h2>
          <p className="text-xl font-semibold text-pink-500 mt-2">
            Você ganhou um desconto em nosso PLANO PREMIUM
          </p>
        </div>

        <div className="flex flex-col items-center mb-8">
          <p className="text-lg line-through text-gray-500">DE R$19,99</p>
          <p className="text-xl font-bold text-pink-600 mt-1">POR APENAS</p>
          <p className="text-5xl font-extrabold text-pink-600 mt-2 animate-bounce bg-gradient-to-r from-pink-600 to-amber-500 bg-clip-text text-transparent border-b-4 border-amber-400 pb-1">
            R$13,99
          </p>
        </div>

        <div className="mb-8">
          <p className="text-center font-bold text-pink-800 text-lg mb-3">
            ADQUIRA TODOS OS NOSSOS CONTEÚDOS DO NOSSO PLANO PREMIUM
          </p>
          <p className="text-gray-700 text-center italic">
            Eu não devia estar te proporcionando este acesso aos conteúdos MAIS SECRETOS
            dos confeiteiros MAIS RENOMADOS do nosso país… Mas eu sei o quanto isso
            irá te proporcionar bons conhecimentos culinários!
          </p>
        </div>

        <div className="mb-8">
          <a 
            href="https://pay.kirvano.com/76e1e8fe-bc3e-4f47-bb52-0ce04e10c162" 
            className="block w-full text-center bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-pulse"
          >
            SIM! QUERO MEU DESCONTO ESPECIAL
          </a>
        </div>

        <div className="text-center">
          <a 
            href="https://pay.kirvano.com/7b35b62b-f8b7-433f-9278-1aa162058f65" 
            className="text-gray-600 underline hover:text-pink-600 transition-colors"
          >
            Não quero. Obrigado(a)!
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-gray-600">
          <div className="flex flex-col items-center">
            <ShieldCheck className="h-8 w-8 text-amber-500" />
            <span className="text-xs mt-1">Garantia</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="h-8 w-8 text-amber-500" />
            <span className="text-xs mt-1">Acesso Imediato</span>
          </div>
          <div className="flex flex-col items-center">
            <LockKeyhole className="h-8 w-8 text-amber-500" />
            <span className="text-xs mt-1">Pagamento Seguro</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;