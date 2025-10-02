import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { Cadastro } from '../pages/Cadastro/Cadastro';
import { Login } from '../pages/Login/Login';
import Pedidos from '../pages/Pedidos/Pedidos';
import Localizacao from '../pages/localizacao/localizacao';
import ContatoPesquisa from '../pages/Contato/ContatoPesquisa';
import Dashboard from '../pages/Dashboard/Dashboard';
import Layout from '../layout/layout';
import '../global.css';

export function App() {
  const [userLogin, setUserLogin] = useState(true); // Temporariamente true para testar navegação
  const [userNew, setUserNew] = useState(true);

  if (!userLogin) {
    return <Login setUserLogin={setUserLogin} />;
  }

  if (!userNew) {
    return <Cadastro setUserNew={setUserNew} />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/restaurantes" element={<Localizacao />} />
        <Route path="/contato" element={<ContatoPesquisa />} />
      </Routes>
    </Layout>
  );
}
