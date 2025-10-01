import { useState } from 'react';
import '../../global.css';
export default function ContatoPesquisa({ onEnviar }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !mensagem) return;
    onEnviar({ nome, email, mensagem, data: new Date().toLocaleString() });
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <div className="contato-container">
      <h1 className="contato-titulo">Pesquisa de Contato</h1>
      <form onSubmit={handleSubmit} className="contato-form">
        <label>
          Nome:
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="contato-input"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="contato-input"
          />
        </label>
        <label>
          Mensagem:
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
            className="contato-textarea"
          />
        </label>
        <button type="submit" className="contato-botao">
          Enviar
        </button>
      </form>
      <style>
        {`
          .contato-container {
            max-width: 400px;
            margin: 40px auto;
            padding: 24px;
            background: var(--localizacao-bg, #fff);
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          }
          .contato-titulo {
            color: #000;
          }
          .contato-form {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .contato-form label {
            display: flex;
            flex-direction: column;
            font-weight: 500;
            color: #213547;
          }
          .contato-input,
          .contato-textarea {
            margin-top: 4px;
            padding: 8px;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 1em;
            font-family: inherit;
          }
          .contato-textarea {
            resize: vertical;
            min-height: 60px;
          }
          .contato-botao {
            margin-top: 8px;
            background: #e67e22;
            color: #fff;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 6px;
            padding: 10px 0;
            font-size: 1em;
            font-family: inherit;
            transition: background 0.2s;
          }
          .contato-botao:hover {
            background: #cf711f;
          }
        `}
      </style>
    </div>
  );
}
export { ContatoPesquisa };
