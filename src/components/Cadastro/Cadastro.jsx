export const Cadastro = () => {
    return (
        <div>
            <h2>Tela de cadastro</h2>
        </div>
    )
}
export default function Cadastro() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold" htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Cadastrar
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Já tem conta? <a href="/login" className="text-green-500">Entrar</a>
        </p>
      </div>
    </div>
  );
}