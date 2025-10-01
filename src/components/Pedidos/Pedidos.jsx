import "./Pedidos.css";

function Pedidos() {
  const pedidos = [
    { id: 1, cliente: "João", produto: "Pizza Calabresa", quantidade: 2, preco: 40, status: "Entregue" },
    { id: 2, cliente: "Maria", produto: "Hambúrguer Artesanal", quantidade: 1, preco: 25, status: "Em preparo" },
    { id: 3, cliente: "Carlos", produto: "Refrigerante 2L", quantidade: 1, preco: 10, status: "Saiu para entrega" },
  ];

  return (
    <div className="pedidos-container">
      <h2 className="titulo">Pedidos dos Usuários</h2>
      <table className="tabela-pedidos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço (R$)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.cliente}</td>
              <td>{p.produto}</td>
              <td>{p.quantidade}</td>
              <td>{p.preco}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pedidos;
