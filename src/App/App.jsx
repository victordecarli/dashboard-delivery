import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { Cadastro } from '../pages/Cadastro/Cadastro';
import { Login } from '../pages/Login/Login';
import Pedidos from '../pages/Pedidos/Pedidos';
import Localizacao from '../pages/localizacao/localizacao';
import ContatoPesquisa from '../pages/Contato/ContatoPesquisa';
import EsqueciSenha from "../pages/Login/esqueciSenha.jsx";
import ResetPassword from "../pages/Login/reset-password.jsx";
import Dashboard from '../pages/Dashboard/Dashboard';
import Layout from '../layout/layout';
import '../global.css';

export function App() {
  const [userLogin, setUserLogin] = useState(false);
  const location = useLocation();

  const publicRoutes = ["/login", "/cadastro", "/esqueciSenha", "/reset-password"];

  const isPublicRoute = publicRoutes.includes(location.pathname);

  if (!userLogin && !isPublicRoute) {
  return <Login setUserLogin={setUserLogin} />;
}


  return (
    <Layout userLogin={userLogin}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/restaurantes" element={<Localizacao />} />
        <Route path="/contato" element={<ContatoPesquisa />} />

        <Route path="/login" element={<Login setUserLogin={setUserLogin} />} />
        <Route path="/cadastro" element={<Cadastro />} />
       <Route path="/esqueciSenha" element={<EsqueciSenha />} />
       <Route path="/reset-password" element={<ResetPassword />} />

      </Routes>
    </Layout>
  );
}
