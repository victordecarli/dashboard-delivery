import { Outlet, Navigate } from 'react-router';

export default function AuthLayout({ session }) {
  // Se já está logado, redireciona para a home
  if (session) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Dashboard Delivery
          </h1>
          <p className="text-gray-600">
            Gerencie seus pedidos e restaurantes
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
