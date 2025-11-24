import { useState } from "react";
import { supabase } from '../Login/cliente';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    setMsg("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/reset-password",
    });

    if (error) {
      setMsg(error.message);
    } else {
      setMsg("E-mail enviado! Verifique sua caixa de entrada.");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl text-center">Esqueci a Senha</CardTitle>
        </CardHeader>

        <form onSubmit={handleForgot}>
          <CardContent className="space-y-4">
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {msg && <p className="text-center text-sm text-muted-foreground">{msg}</p>}
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button type="submit" className="w-full">
              Enviar link de redefinição
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
