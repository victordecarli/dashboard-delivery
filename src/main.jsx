import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter, Routes, Route } from 'react-router';
// import { Contact } from './pages/Contact/Contact';
import Restaurantes from './pages/restaurantes/Restaurantes';
import PedidosLayout from './pages/pedidos/PedidosLayout';
import AuthLayout from './pages/auth/AuthLayout';
import Pedidos from './pages/pedidos/Pedidos';
import Login from './pages/auth/Login/Login';
import Cadastro from './pages/auth/Cadastro/Cadastro';
import Dashboard from './pages/dashboard/Dashboard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/contato" element={<h2>Tela de contato</h2>} />
        <Route path="/restaurantes" element={<Restaurantes />} />

        <Route path="pedidos" element={<PedidosLayout />}>
          <Route index element={<Pedidos />} />
          <Route path="novo" element={<h2>PedidoForm</h2>} />
          <Route path=":pid" element={<h2>PedidoDetalhes</h2>} />
          <Route path=":pid/editar" element={<h2>Componente PedidoForm</h2>} />
        </Route>

        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Route>

        <Route path="#" element={<h2>Ooops! Nada por aqui</h2>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
