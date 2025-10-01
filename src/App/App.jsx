import {Cadastro} from '../components/Cadastro/Cadastro';
import Localizacao from '../components/localizacao/localizacao';
import { Login } from '../components/Login/Login';
import Pedidos from '../components/Pedidos/Pedidos';
import React, { useState } from "react";
import ContatoPesquisa from '../components/Contato/ContatoPesquisa';
import ContatoRespostas from '../components/Contato/ContatoResposta';

export function App() {

// Estado para armazenar as respostas recebidas do formulário de contato
  const [respostas, setRespostas] = useState([]);
  // Estado para controlar qual página de contato está ativa
  const [paginaContato, setPaginaContato] = useState("pesquisa");

  /**
   * Função chamada ao enviar uma nova resposta.
   * Adiciona a resposta ao estado e navega para a página de respostas.
   */
  const handleEnviar = (resposta) => {
    setRespostas([resposta, ...respostas]);
    setPaginaContato("respostas");
  };

  return (
    <div>
      <h3>Componente App</h3>
      <Login/>
      <Cadastro/>
      <Pedidos/>
      <Localizacao/>
    
     {/* Navegação entre as páginas de contato */}
      <nav style={{ display: "flex", gap: 16, justifyContent: "center", margin: 24 }}>
        <button onClick={() => setPaginaContato("pesquisa")}>Pesquisa de Contato</button>
        <button onClick={() => setPaginaContato("respostas")}>Respostas Recebidas</button>
      </nav>
      {/* Renderiza a página de pesquisa ou de respostas conforme o estado */}
      {paginaContato === "pesquisa" ? (
        <ContatoPesquisa onEnviar={handleEnviar} />
      ) : (
        <ContatoRespostas respostas={respostas} />
      )}
    </div>
  )
}

