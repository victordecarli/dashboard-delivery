import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Plus,
  Eye,
  Trash2,
  RefreshCw,
  ShoppingCart,
  AlertCircle,
} from 'lucide-react';
import { ordersService } from '@/services';
import OrderForm from '@/components/forms/OrderForm';

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    setLoading(true);
    const { data, error } = await ordersService.getAll();

    if (error) {
      setError('Erro ao carregar pedidos');
      console.error(error);
    } else {
      setPedidos(data || []);
    }

    setLoading(false);
  }

  function calcularValorTotal() {
    return pedidos.reduce((acumulador, pedido) => {
      const valorDoPedido = pedido.quantity * (pedido.products?.price || 0);
      return acumulador + valorDoPedido;
    }, 0);
  }

  const valorTotal = calcularValorTotal();

  if (loading) {
    return (
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-9 w-48" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }
  return (
    <div className="w-full p-6">
      <div className="max-w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-8 w-8 text-gray-700" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Pedidos
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Novo Pedido</span>
                <span className="sm:hidden">Novo</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Criar Novo Pedido</DialogTitle>
                <DialogDescription>
                  Preencha os dados abaixo para criar um novo pedido
                </DialogDescription>
              </DialogHeader>
              <OrderForm onSuccess={loadOrders} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-white border rounded-lg shadow-sm overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold w-24">ID</TableHead>
                <TableHead className="font-semibold min-w-[180px]">
                  Cliente
                </TableHead>
                <TableHead className="font-semibold min-w-[200px]">
                  Produto
                </TableHead>
                <TableHead className="text-right font-semibold w-28">
                  Qtd.
                </TableHead>
                <TableHead className="text-right font-semibold w-32">
                  Preço Unit.
                </TableHead>
                <TableHead className="text-right font-semibold w-32">
                  Total
                </TableHead>
                <TableHead className="text-center font-semibold w-48">
                  Ações
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pedidos.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-32 text-center">
                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                      <p className="text-sm">Nenhum pedido encontrado</p>
                      <p className="text-xs mt-1">
                        Crie um novo pedido para começar
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                pedidos.map((pedido) => (
                  <TableRow
                    key={pedido.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="font-mono text-xs text-gray-500">
                      {pedido.id.slice(0, 8)}...
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {pedido.users?.name || 'N/A'}
                        </span>
                        <span className="text-xs text-gray-500">
                          {pedido.users?.email}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {pedido.products?.name || 'N/A'}
                        </span>
                        {pedido.products?.description && (
                          <span className="text-xs text-gray-500 line-clamp-1">
                            {pedido.products.description}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="secondary">{pedido.quantity}x</Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      R$ {(pedido.products?.price || 0).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right font-semibold text-green-700">
                      R${' '}
                      {(
                        pedido.quantity * (pedido.products?.price || 0)
                      ).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={async () => {
                            if (
                              confirm(
                                'Tem certeza que deseja excluir este pedido?',
                              )
                            ) {
                              const { error } = await ordersService.delete(
                                pedido.id,
                              );
                              if (error) {
                                alert('Erro ao excluir pedido');
                              } else {
                                loadOrders();
                              }
                            }
                          }}
                        >
                          <Trash2 className="h-3 w-3" />
                          Excluir
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
            <TableFooter>
              <TableRow className="bg-gray-50">
                <TableCell colSpan={5} className="font-semibold text-base">
                  Valor Total
                </TableCell>
                <TableCell
                  className="text-right font-bold text-base text-green-700"
                  colSpan={2}
                >
                  R$ {valorTotal.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        {pedidos.length > 0 && (
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>{pedidos.length} pedido(s) encontrado(s)</span>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={loadOrders}
            >
              <RefreshCw className="h-3 w-3" />
              Atualizar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
