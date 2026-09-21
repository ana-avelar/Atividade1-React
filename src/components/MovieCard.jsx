// src/components/MovieCard.jsx

const coresPorGenero = {
  Ficção: "bg-purple-100 text-purple-700",
  Terror: "bg-red-100 text-red-700",
  Comédia: "bg-yellow-100 text-yellow-800",
  Drama: "bg-blue-100 text-blue-700",
  Animação: "bg-green-100 text-green-700",
};

function MovieCard({
  titulo,
  genero,
  nota,
  emoji,
  assistido,
  onToggle,
  onRemover,
}) {
  const corBadge =
    coresPorGenero[genero] || "bg-slate-100 text-slate-700";

  return (
    <article
      className={`rounded-xl p-5 shadow-lg hover:scale-[1.02] transition-transform border ${
        assistido
          ? "bg-slate-50 border-slate-200"
          : "bg-cinema-card border-slate-100"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${corBadge}`}
        >
          {genero}
        </span>

        <span className="text-cinema-gold font-bold">
          ⭐ {nota}
        </span>
      </div>

      <div className="text-4xl mb-2">{emoji}</div>

      <h2
        className={`text-lg font-bold mb-4 ${
          assistido ? "text-slate-500 line-through" : "text-white"
        }`}
      >
        {titulo}
      </h2>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            checked={assistido}
            onChange={onToggle}
            className="w-4 h-4 accent-cinema-bg focus:outline-none focus:ring-2 focus:ring-cinema-bg focus:ring-offset-1"
          />
          Assistido
        </label>

        <button
          onClick={onRemover}
          aria-label={`Remover filme: ${titulo}`}
          className="text-xs text-red-600 hover:text-red-800 font-semibold focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-1"
        >
          Remover
        </button>
      </div>
    </article>
  );
}

export default MovieCard;