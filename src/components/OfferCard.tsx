import React from 'react';
import AnimatedButton from './AnimatedButton';
import TrustBadges from './TrustBadges';

const OfferCard: React.FC = () => {
  return (
    <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-pink-200/50 border border-pink-100 mx-auto">
      <div className="relative">
        {/* Gold crown accent on top corners */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-500/20 rounded-br-full"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/20 rounded-bl-full"></div>
        
        {/* Header with gold border bottom */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-400 py-5 px-6 border-b-4 border-yellow-400">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md animate-pulse">
            Meus PARABÉNS!
          </h2>
          <p className="text-center text-xl sm:text-2xl font-bold text-white/90 mt-1">
            Você ganhou um desconto
          </p>
        </div>
        
        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-pink-700">
              em nosso PLANO PREMIUM
            </h3>
            
            <div className="mt-5 mb-3">
              <p className="text-lg line-through text-gray-500">DE R$19,99</p>
              <p className="text-xl text-pink-700 font-bold">POR APENAS</p>
              <div className="relative inline-block">
                <span className="absolute inset-0 bg-yellow-300/30 blur-sm rounded-full"></span>
                <p className="relative text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-600 my-2 transform hover:scale-105 transition-transform duration-300">
                  R$13,99
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-pink-50/80 rounded-xl p-4 mb-6 border border-pink-100">
            <p className="text-center font-bold text-pink-800 mb-2">
              ADQUIRA TODOS OS NOSSOS CONTEÚDOS DO NOSSO PLANO PREMIUM
            </p>
            <p className="text-center text-gray-700 text-sm">
              Eu não devia estar te proporcionando este acesso aos conteúdos MAIS SECRETOS dos confeiteiros MAIS RENOMADOS do nosso país… Mas eu sei o quanto isso irá te proporcionar bons conhecimentos culinários!
            </p>
          </div>
          
          <div className="flex flex-col items-center mb-6">
            <div className="w-full sm:w-auto">
              <AnimatedButton 
                text="SIM! QUERO MEU DESCONTO ESPECIAL" 
                url="https://pay.kirvano.com/9d9296aa-4d85-45b0-a3d4-09f42b71be06" 
              />
            </div>
            
            <div className="text-center mt-4 mb-6">
              <a 
                href="https://pay.kirvano.com/7b35b62b-f8b7-433f-9278-1aa162058f65"
                className="text-gray-500 text-sm underline hover:text-gray-700 transition-colors"
              >
                Não quero. Obrigado(a)!
              </a>
            </div>
            
            <TrustBadges />
          </div>
          
          {/* Gold accent on bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300"></div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;