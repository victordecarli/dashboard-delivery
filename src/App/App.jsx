import { Cadastro } from '../components/Cadastro/Cadastro';
import Localizacao from '../components/localizacao/localizacao';
import { Login } from '../components/Login/Login';
import Pedidos from '../components/Pedidos/Pedidos';
import { useState } from 'react';
import ContatoPesquisa from '../components/Contato/ContatoPesquisa';
import ContatoRespostas from '../components/Contato/ContatoResposta';
import '../global.css';
export function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [userNew, setUserNew] = useState(true);
  const [respostas, setRespostas] = useState([]);
  const [paginaContato, setPaginaContato] = useState('pesquisa');

  const handleEnviar = (resposta) => {
    setRespostas((prev) => [resposta, ...prev]);
    setPaginaContato('respostas');
  };

  if (!userLogin) {
    return <Login setUserLogin={setUserLogin} />;
  }

  if (!userNew) {
    return <Cadastro setUserNew={setUserNew} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <Pedidos />
      <Localizacao />

      <nav
        style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          margin: 24,
        }}
      >
        <button onClick={() => setPaginaContato('pesquisa')}>
          Pesquisa de Contato
        </button>
        <button onClick={() => setPaginaContato('respostas')}>
          Respostas Recebidas
        </button>
      </nav>
      {paginaContato === 'pesquisa' ? (
        <ContatoPesquisa onEnviar={handleEnviar} />
      ) : (
        <ContatoRespostas respostas={respostas} />
      )}
    </div>
  );
}
