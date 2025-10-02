import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ContatoPesquisa({ onEnviar }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !mensagem) return;
    if (onEnviar) {
      onEnviar({ nome, email, mensagem, data: new Date().toLocaleString() });
    }
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-2xl bg-gray-100 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 tracking-tight">
          Pesquisa de Contato
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome:</Label>
            <Input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Digite seu nome completo"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem:</Label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              className="w-full min-h-[120px] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Digite sua mensagem"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="w-auto">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
