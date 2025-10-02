export function calcularValorTotalPedidos(pedidos) {
  if (!Array.isArray(pedidos) || pedidos.length === 0) {
    return 0;
  }

  return pedidos.reduce((total, pedido) => {
    const valorPedido = (pedido.quantidade || 0) * (pedido.preco || 0);
    return total + valorPedido;
  }, 0);
}

export function calcularTamanhoPedidos(pedidos) {
  if (!Array.isArray(pedidos) || pedidos.length === 0) {
    return 0;
  }

  return pedidos.reduce((total, pedido) => {
    return total + (pedido.quantidade || 0);
  }, 0);
}

export function calcularNumeroPedidos(pedidos) {
  if (!Array.isArray(pedidos)) {
    return 0;
  }
  return pedidos.length;
}

export function calcularTamanhoRestaurantes(restaurantes) {
  if (!Array.isArray(restaurantes)) {
    return 0;
  }
  return restaurantes.length;
}

export function calcularEstatisticasPorStatus(pedidos) {
  if (!Array.isArray(pedidos) || pedidos.length === 0) {
    return {};
  }

  return pedidos.reduce((stats, pedido) => {
    const status = pedido.status || 'Sem status';

    if (!stats[status]) {
      stats[status] = {
        quantidade: 0,
        valorTotal: 0,
        totalItens: 0,
      };
    }

    const valorPedido = (pedido.quantidade || 0) * (pedido.preco || 0);

    stats[status].quantidade += 1;
    stats[status].valorTotal += valorPedido;
    stats[status].totalItens += pedido.quantidade || 0;

    return stats;
  }, {});
}

export function calcularTicketMedio(pedidos) {
  if (!Array.isArray(pedidos) || pedidos.length === 0) {
    return 0;
  }

  const valorTotal = calcularValorTotalPedidos(pedidos);
  return valorTotal / pedidos.length;
}

export function filtrarPedidosPorStatus(pedidos, status) {
  if (!Array.isArray(pedidos)) {
    return [];
  }

  return pedidos.filter((pedido) => pedido.status === status);
}

export function calcularResumoGeral(pedidos, restaurantes) {
  return {
    valorTotal: calcularValorTotalPedidos(pedidos),
    totalItens: calcularTamanhoPedidos(pedidos),
    numeroPedidos: calcularNumeroPedidos(pedidos),
    numeroRestaurantes: calcularTamanhoRestaurantes(restaurantes),
    ticketMedio: calcularTicketMedio(pedidos),
    estatisticasPorStatus: calcularEstatisticasPorStatus(pedidos),
  };
}
