import React, { useEffect } from 'react';
import OfferCard from './components/OfferCard';
import BackgroundEffect from './components/BackgroundEffect';
import { Cake } from 'lucide-react';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Oferta Especial - Plano Premium";
  }, []);

  return (
    <>
      <BackgroundEffect />
      
      <div className="min-h-screen relative flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <header className="w-full max-w-5xl text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-pink-700 mb-2">
            <Cake className="h-6 w-6" />
            <span className="font-semibold">Confeitaria Premium</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-600 to-yellow-600">
            Oferta Exclusiva e Limitada
          </h1>
        </header>

        <main className="w-full flex justify-center items-center">
          <OfferCard />
        </main>

        <footer className="mt-8 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Confeitaria Premium. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}

export default App;