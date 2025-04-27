import React from 'react';
import { Shield, Zap, Lock } from 'lucide-react';

const OfferCard: React.FC = () => {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
      <div className="relative overflow-hidden p-8">
        {/* Gold corner accents */}
        <div className="absolute top-0 left-0 h-16 w-16 bg-gradient-to-br from-yellow-300 to-yellow-600 opacity-80 rounded-br-3xl" />
        <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-yellow-300 to-yellow-600 opacity-80 rounded-bl-3xl" />
        
        <div className="relative z-10">
          <h2 className="text-center text-3xl font-extrabold text-pink-600 animate-pulse md:text-4xl">
            Meus PARABÉNS!
          </h2>
          <p className="mt-2 text-center text-xl font-bold text-pink-600 md:text-2xl">
            Você ganhou um desconto em nosso PLANO PREMIUM
          </p>

          <div className="mt-6 text-center">
            <p className="text-gray-500 line-through text-lg">DE R$19,99</p>
            <p className="text-lg font-bold">POR APENAS</p>
            <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-500 md:text-5xl animate-bounce">
              R$13,99
            </p>
          </div>

          <div className="mt-6">
            <p className="font-bold text-center text-gray-800 uppercase">
              ADQUIRA TODOS OS NOSSOS CONTEÚDOS DO NOSSO PLANO PREMIUM
            </p>
            <p className="mt-4 text-center text-gray-600 italic">
              Eu não devia estar te proporcionando este acesso aos conteúdos MAIS SECRETOS dos confeiteiros MAIS RENOMADOS do nosso país… Mas eu sei o quanto isso irá te proporcionar bons conhecimentos culinários!
            </p>
          </div>

          <div className="mt-8">
            <a
              href="https://pay.kirvano.com/76e1e8fe-bc3e-4f47-bb52-0ce04e10c162"
              className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-center py-4 rounded-lg font-bold text-white uppercase tracking-wide shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              SIM! QUERO MEU DESCONTO ESPECIAL
            </a>
            
            <div className="mt-4 text-center">
              <a 
                href="https://pay.kirvano.com/76e1e8fe-bc3e-4f47-bb52-0ce04e10c162" 
                className="text-gray-600 hover:text-pink-600 underline transition-colors"
              >
                Não quero. Obrigado(a)!
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-yellow-500" />
              <p className="mt-1 text-center text-sm font-medium text-gray-600">Garantia</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-8 w-8 text-yellow-500" />
              <p className="mt-1 text-center text-sm font-medium text-gray-600">Acesso Imediato</p>
            </div>
            <div className="flex flex-col items-center">
              <Lock className="h-8 w-8 text-yellow-500" />
              <p className="mt-1 text-center text-sm font-medium text-gray-600">Pagamento Seguro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;