import React from "react";
import "../../global.css"; // Importa o CSS global

/**
 * Componente que exibe a lista de respostas recebidas do formulário de contato.
 * Recebe um array de respostas via props.
 */
export default function ContatoRespostas({ respostas }) {
  return (
    // Container da lista de respostas
    <div className="respostas-container">
      <h1 className="respostas-titulo">Respostas Recebidas</h1>
      {/* Mensagem caso não haja respostas */}
      {respostas.length === 0 && <p>Nenhuma resposta recebida ainda.</p>}
      {/* Lista de respostas */}
      <ul className="respostas-lista">
        {respostas.map((r, idx) => (
          <li key={idx} className="resposta-item">
            <strong style={{ color: "#000" }}>{r.nome}</strong> ({r.email})<br />
            <span style={{ color: "#000" }}>{r.mensagem}</span>
            <div className="resposta-data">{r.data}</div>
          </li>
        ))}
      </ul>
      {/* Estilos específicos para o componente, usando classes para facilitar customização no global.css */}
      <style>
        {`
          .respostas-container {
            max-width: 600px;
            margin: 40px auto;
            padding: 24px;
            background: var(--localizacao-bg, #fff);
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          }
          .respostas-titulo {
            color: #000;
          }
          .respostas-lista {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .resposta-item {
            margin-bottom: 18px;
            padding: 12px;
            border: 1px solid #eee;
            border-radius: 8px;
            background: #fafafa;
          }
          .resposta-data {
            font-size: 0.85em;
            color: #888;
            margin-top: 4px;
          }
        `}
      </style>
    </div>
  );
}
export { ContatoRespostas };