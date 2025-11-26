import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login({ setUserLogin }) {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // pega os valores do formulário
    const email = e.target.email.value;
    const password = e.target.password.value;

    // opcional: log para debug
    console.log('Tentando logar:', email, password);

    // autenticação real no Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('Erro: ' + error.message);
    } else {
      setUserLogin(true); // marca usuário como logado
      navigate('/'); // redireciona para dashboard
    }
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Senha</Label>
              <a
                onClick={() => navigate('/auth/esqueciSenha')}
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline cursor-pointer"
              >
                Esqueceu sua senha?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="text-sm text-center text-gray-600">
          Não tem uma conta?{' '}
          <Link to="/auth/cadastro" className="text-blue-600 hover:underline font-medium">
            Criar conta
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
