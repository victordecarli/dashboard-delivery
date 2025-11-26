import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ordersService, usersService, productsService } from '@/services';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { User, Package, Hash, CheckCircle, AlertCircle } from 'lucide-react';

export default function OrderForm({ orderId = null, onSuccess }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    user_id: '',
    product_id: '',
    quantity: 1,
  });

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    if (orderId) {
      loadOrder();
    }
  }, [orderId]);

  async function loadInitialData() {
    setInitialLoading(true);
    const [usersResponse, productsResponse] = await Promise.all([
      usersService.getAll(),
      productsService.getActive(),
    ]);

    if (usersResponse.data) setUsers(usersResponse.data);
    if (productsResponse.data) setProducts(productsResponse.data);
    setInitialLoading(false);
  }

  async function loadOrder() {
    const { data, error } = await ordersService.getById(orderId);

    if (error) {
      console.error('Erro ao carregar pedido:', error);
      return;
    }

    if (data) {
      setFormData({
        user_id: data.user_id,
        product_id: data.product_id,
        quantity: data.quantity,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error: submitError } = orderId
      ? await ordersService.update(orderId, formData)
      : await ordersService.create(formData);

    setLoading(false);

    if (submitError) {
      setError(`Erro ao ${orderId ? 'atualizar' : 'criar'} pedido`);
      console.error(submitError);
      return;
    }

    setSuccess(true);

    if (onSuccess) {
      onSuccess();
      setTimeout(() => {
        setFormData({ user_id: '', product_id: '', quantity: 1 });
        setSuccess(false);
      }, 2000);
    } else {
      setTimeout(() => {
        navigate('/pedidos');
      }, 1500);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) : value,
    }));
  }

  if (initialLoading) {
    return (
      <div className="space-y-4 p-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-32" />
      </div>
    );
  }

  const selectedProduct = products.find((p) => p.id === formData.product_id);
  const totalPrice = selectedProduct
    ? selectedProduct.price * formData.quantity
    : 0;

  return (
    <div className="space-y-6 p-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Pedido {orderId ? 'atualizado' : 'criado'} com sucesso!
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="user_id" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Cliente *
          </Label>
          <Select
            value={formData.user_id}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, user_id: value }))
            }
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione um cliente" />
            </SelectTrigger>
            <SelectContent>
              {users.map((user) => (
                <SelectItem key={user.id} value={user.id}>
                  <div className="flex flex-col">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="product_id" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Produto *
          </Label>
          <Select
            value={formData.product_id}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, product_id: value }))
            }
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione um produto" />
            </SelectTrigger>
            <SelectContent>
              {products.map((product) => (
                <SelectItem key={product.id} value={product.id}>
                  <div className="flex items-center justify-between w-full">
                    <span>{product.name}</span>
                    <span className="text-green-600 font-medium ml-4">
                      R$ {product.price.toFixed(2)}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedProduct && (
            <p className="text-xs text-gray-500">
              {selectedProduct.description}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="quantity" className="flex items-center gap-2">
            <Hash className="h-4 w-4" />
            Quantidade *
          </Label>
          <Input
            id="quantity"
            name="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        {selectedProduct && (
          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Valor Total:</span>
              <span className="text-lg font-bold text-green-700">
                R$ {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        )}

        <div className="flex gap-3 pt-4">
          {!onSuccess && (
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => navigate('/pedidos')}
            >
              Cancelar
            </Button>
          )}
          <Button type="submit" className="flex-1" disabled={loading || success}>
            {loading ? 'Salvando...' : orderId ? 'Atualizar Pedido' : 'Criar Pedido'}
          </Button>
        </div>
      </form>
    </div>
  );
}
