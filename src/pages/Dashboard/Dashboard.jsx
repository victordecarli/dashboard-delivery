import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Package, Users, TrendingUp, Phone } from 'lucide-react';
import { Link } from 'react-router';
/* valorTotal: calcularValorTotalPedidos(pedidos),
    totalItens: calcularTamanhoPedidos(pedidos),
    numeroPedidos: calcularNumeroPedidos(pedidos),
    numeroRestaurantes: calcularTamanhoRestaurantes(restaurantes),
    ticketMedio: calcularTicketMedio(pedidos),
    estatisticasPorStatus: calcularEstatisticasPorStatus(pedidos),*/
import { API_FAKE } from '@/data/data.js';
import {
  calcularValorTotalPedidos,
  calcularNumeroPedidos,
  calcularTamanhoRestaurantes,
  calcularTicketMedio,
} from '@/utils/calculosPedido.js';

const { pedidos, restaurantes } = API_FAKE;
// Valor total dos pedidos
const valorTotal = calcularValorTotalPedidos(pedidos);

const ticketMedio = calcularTicketMedio(pedidos);

// Quantidade total de itens
const pedidosTotal = calcularNumeroPedidos(pedidos);

// Número de restaurantes
const numRestaurantes = calcularTamanhoRestaurantes(restaurantes);

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Visão geral do seu sistema de delivery</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">
              Total de Pedidos
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pedidosTotal}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">
              Restaurantes Ativos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{numRestaurantes}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {valorTotal}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket médio</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {ticketMedio.toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pedidos Recentes</CardTitle>
            <CardDescription>
              Lista dos últimos pedidos realizados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pedidos.slice(0, 3).map((pedido) => {
                return (
                  <div
                    key={pedido.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{pedido.nome}</span>
                      <span className="font-medium">{pedido.cliente}</span>
                      <span className="text-sm text-gray-500">
                        {pedido.produto}
                      </span>
                    </div>
                    <span className="text-green-600 font-medium">
                      R$ {pedido.preco}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>
              Acesse rapidamente as funcionalidades principais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link to="/pedidos">
                <Package className="mr-2 h-4 w-4" />
                Gerenciar Pedidos
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link to="/restaurantes">
                <Users className="mr-2 h-4 w-4" />
                Ver Restaurantes
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link to="/contato">
                <Phone className="mr-2 h-4 w-4" />
                Falar Conosco
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
