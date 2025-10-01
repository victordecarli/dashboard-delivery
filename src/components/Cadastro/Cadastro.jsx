import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Cadastro = ({ setUserNew }) => {
  const handleCadastro = (e) => {
    e.preventDefault;
    setUserNew((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm flex m-auto">
        <CardHeader>
          <CardTitle>Crie a sua conta</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCadastro} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col ">
          <Button variant="link" className="w-full">
            Criar conta
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
