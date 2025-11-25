import { useParams, useNavigate } from 'react-router-dom';

export default function PedidoDetalhe() {
  const { pid } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Pedido #{pid}</h2>
      <button onClick={() => navigate('editar')}>Editar</button>
    </div>
  );
}
