  import { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import { Button } from '@/components/ui/button';
  import { supabase } from './cliente';
  import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';

  export const Login = ({ setUserLogin }) => {
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
        setUserLogin(true);       // marca usuário como logado
        navigate('/');            // redireciona para dashboard
      }
    };

    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-sm flex m-auto">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                  <a
                    onClick={() => navigate('/esqueciSenha')}
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
          <CardFooter className="flex flex-col">
            <Button variant="link" className="w-full" asChild>
              <Link to="/cadastro">Criar conta</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };
