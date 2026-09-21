import { useState } from "react";

function MovieForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("Ficção");
  const [nota, setNota] = useState("");
  const [emoji, setEmoji] = useState("🎬");

  function aoEnviar(evento) {
    evento.preventDefault();

    if (titulo.trim() === "") return;

    onAdicionar({
      titulo,
      genero,
      nota: Number(nota) || 0,
      emoji,
    });

    setTitulo("");
    setGenero("Ficção");
    setNota("");
    setEmoji("🎬");
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="bg-white rounded-xl shadow-md p-5 mb-8 flex flex-wrap gap-3 items-end"
    >
      <div className="flex-1 min-w-[200px]">
        <label
          htmlFor="campo-titulo"
          className="block text-sm font-semibold text-slate-600 mb-1"
        >
          Filme
        </label>

        <input
          id="campo-titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Nome do filme"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cinema-bg"
        />
      </div>

      <div>
        <label
          htmlFor="campo-genero"
          className="block text-sm font-semibold text-slate-600 mb-1"
        >
          Gênero
        </label>

        <select
          id="campo-genero"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cinema-bg"
        >
          <option>Ficção</option>
          <option>Terror</option>
          <option>Comédia</option>
          <option>Drama</option>
          <option>Animação</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="campo-nota"
          className="block text-sm font-semibold text-slate-600 mb-1"
        >
          Nota
        </label>

        <input
          id="campo-nota"
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          placeholder="0 a 10"
          className="w-24 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cinema-bg"
        />
      </div>

      <div>
        <label
          htmlFor="campo-emoji"
          className="block text-sm font-semibold text-slate-600 mb-1"
        >
          Emoji
        </label>

        <input
          id="campo-emoji"
          type="text"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          className="w-20 border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cinema-bg"
        />
      </div>

      <button
        type="submit"
        className="bg-cinema-bg text-white px-4 py-2 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cinema-bg focus:ring-offset-2"
      >
        + Adicionar filme
      </button>
    </form>
  );
}

export default MovieForm;