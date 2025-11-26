import { useState } from 'react';
import ContatoPesquisa from './ContatoPesquisa';
import ContatoRespostas from './ContatoResposta';
import PainelContato from './PainelContato';
import { Button } from '@/components/ui/button';

export default function Contato() {
  const [respostas, setRespostas] = useState([]);
  const [view, setView] = useState('form'); // 'form', 'respostas', 'painel'

  const handleEnviar = (dados) => {
    setRespostas([...respostas, dados]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 py-4">
            <Button
              variant={view === 'form' ? 'default' : 'outline'}
              onClick={() => setView('form')}
            >
              Formulário de Contato
            </Button>
            <Button
              variant={view === 'respostas' ? 'default' : 'outline'}
              onClick={() => setView('respostas')}
            >
              Respostas Recebidas ({respostas.length})
            </Button>
            <Button
              variant={view === 'painel' ? 'default' : 'outline'}
              onClick={() => setView('painel')}
            >
              Painel de Mensagens
            </Button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto">
        {view === 'form' && <ContatoPesquisa onEnviar={handleEnviar} />}
        {view === 'respostas' && <ContatoRespostas respostas={respostas} />}
        {view === 'painel' && <PainelContato />}
      </div>
    </div>
  );
}
