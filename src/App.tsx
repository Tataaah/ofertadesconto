import React from 'react';
import Header from './components/Header';
import OfferCard from './components/OfferCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 to-white">
      <Header />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl text-center mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
              Desperte o Confeiteiro que Existe em Você!
            </h1>
            <p className="text-xl text-pink-100">
              Aprenda com os melhores mestres confeiteiros do país e transforme sua paixão em arte.
            </p>
          </div>
          
          <div className="w-full max-w-4xl flex flex-col items-center">
            <OfferCard />
            
            <div className="mt-12 text-center text-pink-800">
              <p className="text-lg font-semibold">
                Não perca tempo! Esta oferta especial é por tempo limitado.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-pink-900 text-pink-100 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2025 Confeitaria Premium. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;