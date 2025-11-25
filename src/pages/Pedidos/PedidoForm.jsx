import { useParams, useNavigate } from 'react-router-dom';

export default function PedidoForm() {
  const { pid } = useParams(); // undefined se for "novo"
  const navigate = useNavigate();
  const isEdit = Boolean(pid);

  // carregar dados se isEdit...
  function handleSubmit(e) {
    e.preventDefault();
    // chamar API create/update
    // depois:
    navigate('..'); // volta para /pedidos (ou use navigate(`/pedidos/${novoId}`))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEdit ? `Editar pedido ${pid}` : 'Novo pedido'}</h2>
      {/* inputs */}
      <button type="submit">Salvar</button>
    </form>
  );
}
