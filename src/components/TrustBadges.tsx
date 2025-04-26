import React from 'react';
import { Shield, Clock, CreditCard } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-6 text-gray-700">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-yellow-600" />
        <span className="text-sm">Garantia de Satisfação</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-yellow-600" />
        <span className="text-sm">Acesso Imediato</span>
      </div>
      <div className="flex items-center gap-2">
        <CreditCard className="h-5 w-5 text-yellow-600" />
        <span className="text-sm">Pagamento Seguro</span>
      </div>
    </div>
  );
};

export default TrustBadges;