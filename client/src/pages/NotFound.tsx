import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-9xl font-bold  mb-8">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
      <p className="text-lg  mb-8">
        A página que você está procurando não foi encontrada.
      </p>
      <Link to="/" className="btn btn-neutral btn-lg px-8 py-3 ">
        Voltar para a página inicial
      </Link>
    </div>
  );
};
