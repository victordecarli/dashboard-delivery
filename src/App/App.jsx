import {Cadastro} from '../components/Cadastro/Cadastro';
import Localizacao from '../components/localizacao/localizacao';
import { Login } from '../components/Login/Login';
import Pedidos from '../components/Pedidos/Pedidos';

export function App() {

  return (
    <div>
      <h3>Componente App</h3>
      <Login/>
      <Cadastro/>
      <Pedidos/>
      <Localizacao/>
    </div>
  )
}

