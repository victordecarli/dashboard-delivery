import React from 'react';

const mensagensExemplo = [
  { nome: 'Ana', email: 'ana@example.com', mensagem: 'Olá, quero mais informações!' },
  { nome: 'João', email: 'joao@example.com', mensagem: 'Gostei do restaurante!' },
   { nome: 'Ana', email: 'ana@example.com', mensagem: 'Olá, quero mais informações!' },
  { nome: 'João', email: 'joao@example.com', mensagem: 'Gostei do restaurante!' },
   { nome: 'Ana', email: 'ana@example.com', mensagem: 'Olá, quero mais informações!' },
  { nome: 'João', email: 'joao@example.com', mensagem: 'Gostei do restaurante!' },
   { nome: 'Ana', email: 'ana@example.com', mensagem: 'Olá, quero mais informações!' },
  { nome: 'João', email: 'joao@example.com', mensagem: 'Gostei do restaurante!' },
   { nome: 'Ana', email: 'ana@example.com', mensagem: 'Olá, quero mais informações!' },
  { nome: 'João', email: 'joao@example.com', mensagem: 'Gostei do restaurante!' },
   { nome: 'Ana', email: 'ana@example.com', mensagem: 'Olá, quero mais informações!' },
  { nome: 'João', email: 'joao@example.com', mensagem: 'Gostei do restaurante!' },
   { nome: 'Ana', email: 'ana@example.com', mensagem: 'Olá, quero mais informações!' },
  { nome: 'João', email: 'joao@example.com', mensagem: 'Gostei do restaurante!' }

];

export default function PainelContato() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Painel de Mensagens</h1>

      {mensagensExemplo.length === 0 ? (
        <p>Nenhuma mensagem recebida.</p>
      ) : (
        <ul>
          {mensagensExemplo.map((msg, idx) => (
            <li key={idx} className="border p-4 mb-4 rounded bg-gray-50 shadow-sm">
              <p><strong>Nome:</strong> {msg.nome}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Mensagem:</strong> {msg.mensagem}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
