import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Restaurantes from '../pages/Restaurantes/Restaurantes.jsx';
import PedidosLayout from '../pages/Pedidos/PedidosLayout';
import AuthLayout from '../pages/auth/AuthLayout';
import Pedidos from '../pages/Pedidos/Pedidos.jsx';
import Login from '../pages/auth/Login/Login.jsx';
import Cadastro from '../pages/auth/Cadastro/Cadastro.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import Contato from '../pages/contato/Contato.jsx';
import Layout from '../layout/layout';
import '../global.css';
import { supabase } from '../lib/supabase.js';

// Componente para proteger rotas que requerem autenticação
function ProtectedRoute({ children, session }) {
  if (!session) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}

export function App() {
  const [session, setSession] = useState(null);

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession();
    setSession(currentSession.data);
  };

  useEffect(() => {
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // const logout = async () => {
  //   await supabase.auth.signOut();
  // };

  return (
    <Layout userLogin={session}>
      <Routes>
        <Route
          index
          element={
            <ProtectedRoute session={session}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contato"
          element={
            <ProtectedRoute session={session}>
              <Contato />
            </ProtectedRoute>
          }
        />
        <Route
          path="/restaurantes"
          element={
            <ProtectedRoute session={session}>
              <Restaurantes />
            </ProtectedRoute>
          }
        />

        <Route
          path="pedidos"
          element={
            <ProtectedRoute session={session}>
              <PedidosLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Pedidos />} />
          {/* <Route path="novo" element={<OrderForm />} /> */}
          {/* <Route path=":pid" element={<PedidoDetalhes />} /> */}
          {/* <Route path=":pid/editar" element={<OrderForm />} /> */}
        </Route>

        <Route path="auth" element={<AuthLayout session={session} />}>
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Route>

        <Route
          path="*"
          element={<h2 className="p-6">Página não encontrada</h2>}
        />
      </Routes>
    </Layout>
  );
}
