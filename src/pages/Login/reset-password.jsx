import { useState } from "react";
import { useNavigate } from "react-router-dom";  
import { supabase } from '../Login/cliente';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate(); 

  const handleReset = async (e) => {
    e.preventDefault();
    setMsg("");

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMsg(error.message);
    } else {
      setMsg("Senha atualizada com sucesso! Indo para página de login");

      
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl text-center">Redefinir Senha</CardTitle>
        </CardHeader>

        <form onSubmit={handleReset}>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Nova senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {msg && <p className="text-center text-sm text-muted-foreground">{msg}</p>}
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button type="submit" className="w-full">
              Salvar nova senha
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
