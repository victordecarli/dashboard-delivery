import { Outlet, Link } from 'react-router';

export default function AuthLayout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="cadastro">Cadastro</Link>
        </li>
      </ul>
      <main>
        <h1>Auth</h1>
        <Outlet />
      </main>
    </div>
  );
}
