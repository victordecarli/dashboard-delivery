import { Outlet, Link } from 'react-router';

export default function PedidosLayout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/pedidos">Lista de pedidos</Link>
        </li>
        <li>
          <Link to="novo">Criar novo pedido</Link>
        </li>
      </ul>
      <main>
        <h1>Pedidos</h1>
        <Outlet />
      </main>
    </div>
  );
}
