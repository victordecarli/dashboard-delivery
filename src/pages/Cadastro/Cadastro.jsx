import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../Login/cliente';

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
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    // 👉 Verifica se as senhas são iguais antes de cadastrar
    if (senha !== confirmSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
    });

    if (error) {
      alert(error.message);
    } else {
      alert('Cadastro realizado! Verifique seu email e confirme sua conta.');
      setUserNew(true);
      navigate('/login');
    }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmSenha}
                onChange={(e) => setConfirmSenha(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button variant="link" className="w-full" onClick={() => navigate('/login')}>
            Já tenho conta
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
