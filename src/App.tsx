import React from 'react';
import Header from './components/Header';
import OfferCard from './components/OfferCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 to-white">
      <Header />
      
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 h-24 w-24 bg-pink-200 rounded-full blur-2xl opacity-70" />
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-pink-200 rounded-full blur-2xl opacity-70" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-yellow-100 rounded-full blur-3xl opacity-30" />
              
              {/* Card with backdrop blur */}
              <div className="relative backdrop-blur-sm p-1 rounded-2xl">
                <OfferCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;