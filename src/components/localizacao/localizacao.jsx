import React, { useState } from "react";
import "../../global.css"; // Importa o CSS global do projeto

// Lista mockada de restaurantes próximos, agora com imagens
const restaurantes = [
  {
    id: 1,
    nome: "Restaurante Sabor Caseiro",
    endereco: "Rua das Flores, 123",
    distancia: "500m",
    imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    nome: "Pizzaria Bella Massa",
    endereco: "Av. Central, 456",
    distancia: "800m",
    imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    nome: "Lanchonete Bom Gosto",
    endereco: "Praça da Alegria, 789",
    distancia: "1,2km",
    imagem: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Componente principal com menu sanfona (accordion)
export default function Localizacao() {
  // Estado para controlar qual restaurante está aberto
  const [aberto, setAberto] = useState(null);

  // Função para alternar o menu sanfona
  const toggleAberto = (id) => {
    setAberto(aberto === id ? null : id);
  };

  return (
    <div className="localizacao-container">
      {/* Título da seção */}
      <h1 className="localizacao-titulo">Restaurantes Próximos</h1>
      {/* Lista de restaurantes com menu sanfona */}
      <ul className="localizacao-lista">
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id} className="localizacao-item">
            {/* Cabeçalho do sanfona */}
            <button
              className="localizacao-accordion-btn"
              onClick={() => toggleAberto(restaurante.id)}
              aria-expanded={aberto === restaurante.id}
            >
              <img
                src={restaurante.imagem}
                alt={restaurante.nome}
                className="localizacao-imagem"
              />
              <span className="localizacao-nome">{restaurante.nome}</span>
              <span className="localizacao-seta">
                {aberto === restaurante.id ? "▲" : "▼"}
              </span>
            </button>
            {/* Conteúdo do sanfona */}
            {aberto === restaurante.id && (
              <div className="localizacao-conteudo">
                <p className="localizacao-endereco">{restaurante.endereco}</p>
                <span className="localizacao-distancia">
                  Distância: {restaurante.distancia}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
      {/* Estilos específicos para o componente */}
      <style>
        {`
          .localizacao-container {
            max-width: 480px;
            margin: 40px auto;
            padding: 24px;
            background: var(--localizacao-bg, #fff);
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          }
          .localizacao-titulo {
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 16px;
            color: #213547;
          }
          .localizacao-lista {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .localizacao-item {
            margin-bottom: 16px;
            border: 1px solid #eee;
            border-radius: 8px;
            background: #fafafa;
            transition: background 0.2s;
            overflow: hidden;
          }
          .localizacao-accordion-btn {
            display: flex;
            align-items: center;
            width: 100%;
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            outline: none;
            text-align: left;
            gap: 12px;
            padding: 16px;
          }
          .localizacao-imagem {
            width: 56px;
            height: 56px;
            object-fit: cover;
            border-radius: 8px;
            margin-right: 8px;
            border: 1px solid #ddd;
          }
          .localizacao-nome {
            font-size: 1.2em;
            font-weight: 600;
            color: #e67e22; /* Cor alterada para destaque */
            flex: 1;
          }
          .localizacao-seta {
            font-size: 1.2em;
            color: #888;
            margin-left: 8px;
          }
          .localizacao-conteudo {
            padding: 0 16px 16px 84px;
            animation: fadeIn 0.3s;
          }
          .localizacao-endereco {
            color: #666;
            margin: 0 0 4px 0;
          }
          .localizacao-distancia {
            font-size: 0.95em;
            color: #888;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-8px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
    );
}