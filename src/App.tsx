import React from 'react';
import OfferCard from './components/OfferCard';
import CountdownTimer from './components/CountdownTimer';
import Header from './components/Header';
import { ShieldCheck, Zap, CreditCard } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 via-pink-200 to-white">
      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-56 -right-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Sticky Countdown */}
      <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-pink-600 to-pink-500 shadow-lg backdrop-blur-sm bg-opacity-90">
        <CountdownTimer initialMinutes={30} initialSeconds={0} />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <Header />
        
        <main className="mt-8 mb-16">
          <OfferCard />
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12 text-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 mb-3">
                <ShieldCheck className="w-8 h-8 text-pink-600" />
              </div>
              <span className="font-medium">Garantia de 7 dias</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 mb-3">
                <Zap className="w-8 h-8 text-pink-600" />
              </div>
              <span className="font-medium">Acesso imediato</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 mb-3">
                <CreditCard className="w-8 h-8 text-pink-600" />
              </div>
              <span className="font-medium">Pagamento seguro</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;