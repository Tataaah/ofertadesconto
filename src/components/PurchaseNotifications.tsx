import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const PurchaseNotifications = () => {
  const [notifications, setNotifications] = useState<{ id: number; name: string; timestamp: number }[]>([]);
  const [counter, setCounter] = useState(0);

  const names = [
    'Ana Silva', 'Carlos Oliveira', 'Maria Santos', 'João Pereira', 
    'Julia Costa', 'Pedro Almeida', 'Fernanda Lima', 'Lucas Souza',
    'Beatriz Martins', 'Gabriel Ferreira', 'Larissa Rodrigues', 'Matheus Gomes',
    'Rafaela Carvalho', 'Bruno Mendes', 'Amanda Ribeiro', 'Felipe Lopes',
    'Isabella Santos', 'Thiago Lima', 'Camila Costa', 'Ricardo Oliveira',
    'Mariana Silva', 'Diego Ferreira', 'Patricia Alves', 'Gustavo Mendes',
    'Daniela Martins', 'Leonardo Souza', 'Carolina Pereira', 'Henrique Gomes'
  ];

  useEffect(() => {
    // Show first notification immediately
    const firstRandomName = names[Math.floor(Math.random() * names.length)];
    setNotifications([{
      id: counter,
      name: firstRandomName,
      timestamp: Date.now()
    }]);
    setCounter(prev => prev + 1);

    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const newNotification = {
        id: counter,
        name: randomName,
        timestamp: Date.now()
      };
      
      setNotifications(prev => [...prev, newNotification]);
      setCounter(prev => prev + 1);
      
      // Remove notification after 4 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 4000);
      
    }, 15000); // Show new notification every 15 seconds
    
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
      {notifications.map((notification, index) => (
        <div 
          key={notification.id}
          className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg shadow-xl p-4 mb-3 flex items-center transform transition-all duration-500 animate-slide-in hover:scale-105 backdrop-blur-sm border border-pink-300/50"
          style={{
            animationDelay: `${index * 200}ms`,
            transform: `translateY(${index * -10}px)`
          }}
        >
          <div className="relative">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm animate-pulse">
              <ShoppingCart className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Star className="w-3 h-3 text-pink-600" />
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold text-lg tracking-wide">{notification.name}</p>
            <p className="text-sm text-pink-100">acabou de comprar o plano Premium</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseNotifications;