import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const pedidos = [
  {
    id: 1,
    cliente: 'João',
    produto: 'Pizza Calabresa',
    quantidade: 2,
    preco: 40,
    status: 'Entregue',
  },
  {
    id: 2,
    cliente: 'Maria',
    produto: 'Hambúrguer Artesanal',
    quantidade: 1,
    preco: 25,
    status: 'Em preparo',
  },
  {
    id: 3,
    cliente: 'Carlos',
    produto: 'Refrigerante 2L',
    quantidade: 1,
    preco: 10,
    status: 'Saiu para entrega',
  },
  {
    id: 4,
    cliente: 'Ana',
    produto: 'Pizza Portuguesa',
    quantidade: 1,
    preco: 45,
    status: 'Entregue',
  },
  {
    id: 5,
    cliente: 'Lucas',
    produto: 'Batata Frita',
    quantidade: 3,
    preco: 18,
    status: 'Em preparo',
  },
  {
    id: 6,
    cliente: 'Fernanda',
    produto: 'Suco Natural',
    quantidade: 2,
    preco: 16,
    status: 'Saiu para entrega',
  },
  {
    id: 7,
    cliente: 'Paulo',
    produto: 'Pizza Marguerita',
    quantidade: 1,
    preco: 38,
    status: 'Entregue',
  },
  {
    id: 8,
    cliente: 'Juliana',
    produto: 'Cerveja Long Neck',
    quantidade: 4,
    preco: 32,
    status: 'Entregue',
  },
  {
    id: 9,
    cliente: 'Bruno',
    produto: 'Hambúrguer Vegano',
    quantidade: 2,
    preco: 50,
    status: 'Em preparo',
  },
  {
    id: 10,
    cliente: 'Patrícia',
    produto: 'Pizza Quatro Queijos',
    quantidade: 1,
    preco: 42,
    status: 'Saiu para entrega',
  },
  {
    id: 11,
    cliente: 'Rafael',
    produto: 'Refrigerante Lata',
    quantidade: 3,
    preco: 15,
    status: 'Entregue',
  },
  {
    id: 12,
    cliente: 'Camila',
    produto: 'Pizza Frango Catupiry',
    quantidade: 2,
    preco: 48,
    status: 'Em preparo',
  },
  {
    id: 13,
    cliente: 'Eduardo',
    produto: 'Água Mineral',
    quantidade: 2,
    preco: 8,
    status: 'Saiu para entrega',
  },
  {
    id: 14,
    cliente: 'Larissa',
    produto: 'Pizza Pepperoni',
    quantidade: 1,
    preco: 44,
    status: 'Entregue',
  },
  {
    id: 15,
    cliente: 'Gabriel',
    produto: 'Hambúrguer Duplo',
    quantidade: 1,
    preco: 30,
    status: 'Em preparo',
  },
];

const total = pedidos.reduce((sum, pedido) => sum + pedido.preco, 0);

export default function Pedidos() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center tracking-tight">
          Lista de Pedidos
        </h1>
        <Table className="w-screen">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-center">Status</TableHead>
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
                <TableCell className="text-center">
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
                R$ {total.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
