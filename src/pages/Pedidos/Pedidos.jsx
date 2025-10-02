import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { API_FAKE } from '@/data/data';

const pedidos = API_FAKE.pedidos;

function calcularValorTotal() {
  const totalGeral = pedidos.reduce((acumulador, pedidoAtual) => {
    const valorDoPedidoAtual = pedidoAtual.quantidade * pedidoAtual.preco;
    return acumulador + valorDoPedidoAtual;
  }, 0);

  return totalGeral;
}

const valorTotal = calcularValorTotal();

export default function Pedidos() {
  return (
    <div className="p-6">
      <div className="w-full bg-gray-100 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 tracking-tight">
          Lista de Pedidos
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pedidos.map((pedido, idx) => (
              <TableRow
                key={pedido.id}
                className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <TableCell className="font-medium">{pedido.id}</TableCell>
                <TableCell>{pedido.cliente}</TableCell>
                <TableCell>{pedido.produto}</TableCell>
                <TableCell className="text-right">
                  {pedido.quantidade}
                </TableCell>
                <TableCell className="text-right">
                  R$ {pedido.preco.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={
                      pedido.status === 'Entregue'
                        ? 'px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold'
                        : pedido.status === 'Em preparo'
                        ? 'px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs font-semibold'
                        : 'px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-semibold'
                    }
                  >
                    {pedido.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} className="font-bold">
                Total
              </TableCell>
              <TableCell className="text-right font-bold" colSpan={2}>
                R$ {valorTotal.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
