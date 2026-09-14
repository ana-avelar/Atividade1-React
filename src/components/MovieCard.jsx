// src/components/MovieCard.jsx

// Desafio extra: a cor do selo muda de acordo com o gênero do filme,
// do mesmo jeito que fizemos com "prioridade" no exemplo do DevLife Dashboard.
const coresPorGenero = {
  Ficção: "bg-purple-100 text-purple-700",
  Terror: "bg-red-100 text-red-700",
  Comédia: "bg-yellow-100 text-yellow-700",
  Drama: "bg-blue-100 text-blue-700",
  Animação: "bg-green-100 text-green-700",
};

function MovieCard({ titulo, genero, nota, emoji }) {
  // Se o gênero não estiver no mapa, cai num cinza neutro
  const corBadge = coresPorGenero[genero] || "bg-slate-100 text-slate-700";

  return (
    <article className="bg-cinema-card text-white rounded-xl p-5 shadow-lg hover:scale-[1.02] transition-transform">
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${corBadge}`}>
          {genero}
        </span>
        <span className="text-cinema-gold font-bold">⭐ {nota}</span>
      </div>

      <div className="text-4xl mb-2">{emoji}</div>

      <h2 className="text-lg font-bold">{titulo}</h2>
    </article>
  );
}

export default MovieCard;
