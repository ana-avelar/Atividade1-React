import { useState } from "react";
import Relogio from "./Relogio";

function Header() {
  const [mostrarRelogio, setMostrarRelogio] = useState(true);

  return (
    <header className="bg-cinema-bg text-white px-8 py-5 flex items-center justify-between shadow-md">
      <div>
        <h1 className="text-2xl font-bold">
          Cine<span className="text-cinema-gold">Vault</span>
        </h1>

        <span className="text-sm text-slate-300 hidden sm:block">
          Seu catálogo pessoal de filmes 🎬
        </span>
      </div>

      <div className="flex items-center gap-3">
        {mostrarRelogio && (
          <span aria-hidden="true">
            <Relogio />
          </span>
        )}

        <button
          onClick={() => setMostrarRelogio(!mostrarRelogio)}
          aria-pressed={mostrarRelogio}
          className="bg-white/10 text-white px-3 py-2 rounded-lg text-sm hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cinema-bg"
        >
          {mostrarRelogio ? "Esconder relógio" : "Mostrar relógio"}
        </button>
      </div>
    </header>
  );
}

export default Header;