import React from "react";  
import "../../global.css"; // Importa o CSS global do projeto

// Lista mockada de restaurantes próximos
const restaurantes = [
  {
    id: 1,
    nome: "Restaurante Sabor Caseiro",
    endereco: "Rua das Flores, 123",
    distancia: "500m",
  },
  {
    id: 2,
    nome: "Pizzaria Bella Massa",
    endereco: "Av. Central, 456",
    distancia: "800m",
  },
  {
    id: 3,
    nome: "Lanchonete Bom Gosto",
    endereco: "Praça da Alegria, 789",
    distancia: "1,2km",
  },
];

// Componente principal que exibe a lista de restaurantes próximos
export default function Localizacao() {
  return (
    // Container principal da página de localização
    <div className="localizacao-container">
      {/* Título da seção */}
      <h1 className="localizacao-titulo">Restaurantes Próximos</h1>
      {/* Lista de restaurantes */}
      <ul className="localizacao-lista">
        {restaurantes.map((restaurante) => (
          // Cada restaurante é exibido como um item da lista
          <li key={restaurante.id} className="localizacao-item">
            {/* Nome do restaurante */}
            <h2 className="localizacao-nome">{restaurante.nome}</h2>
            {/* Endereço do restaurante */}
            <p className="localizacao-endereco">{restaurante.endereco}</p>
            {/* Distância até o restaurante */}
            <span className="localizacao-distancia">
              Distância: {restaurante.distancia}
            </span>
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
            padding: 16px;
            border: 1px solid #eee;
            border-radius: 8px;
            background: #fafafa;
            transition: background 0.2s;
          }
          .localizacao-item:hover {
            background: #f0f0f0;
          }
          .localizacao-nome {
            font-size: 1.2em;
            font-weight: 600;
            margin: 0 0 4px 0;
          }
          .localizacao-endereco {
            color: #666;
            margin: 0 0 4px 0;
          }
          .localizacao-distancia {
            font-size: 0.95em;
            color: #888;
          }
        `}
      </style>
    </div>
    );
}