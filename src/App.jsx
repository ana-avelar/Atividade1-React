import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieCard from "./components/MovieCard";
import MovieForm from "./components/MovieForm";

const FILMES_INICIAIS = [
  {
    id: 1,
    titulo: "Além do Vazio",
    genero: "Ficção",
    nota: 8.7,
    emoji: "🚀",
    assistido: false,
  },
  {
    id: 2,
    titulo: "A Casa do Fim",
    genero: "Terror",
    nota: 7.2,
    emoji: "🏚️",
    assistido: false,
  },
  {
    id: 3,
    titulo: "Risada Garantida",
    genero: "Comédia",
    nota: 6.9,
    emoji: "🤣",
    assistido: false,
  },
  {
    id: 4,
    titulo: "Chuva de Outono",
    genero: "Drama",
    nota: 9.1,
    emoji: "🍂",
    assistido: false,
  },
  {
    id: 5,
    titulo: "Mundo dos Pixels",
    genero: "Animação",
    nota: 8.3,
    emoji: "🎨",
    assistido: false,
  },
];

const FILTROS = [
  {
    valor: "todos",
    rotulo: "Todos",
  },
  {
    valor: "naoAssistidos",
    rotulo: "Não assistidos",
  },
  {
    valor: "assistidos",
    rotulo: "Assistidos",
  },
];

function App() {
  const [filmes, setFilmes] = useState(() => {
    const filmesSalvos = localStorage.getItem("cinevault-filmes");

    if (filmesSalvos) {
      return JSON.parse(filmesSalvos);
    }

    return FILMES_INICIAIS;
  });

  const [filtro, setFiltro] = useState("todos");
  const [anuncio, setAnuncio] = useState("");

  useEffect(() => {
    localStorage.setItem("cinevault-filmes", JSON.stringify(filmes));
  }, [filmes]);

  function adicionarFilme(novoFilme) {
    setFilmes((atual) => [
      ...atual,
      {
        ...novoFilme,
        id: Date.now(),
        assistido: false,
      },
    ]);

    setAnuncio(`Filme ${novoFilme.titulo} adicionado com sucesso.`);
  }

  function alternarAssistido(id) {
    const filme = filmes.find((item) => item.id === id);

    if (!filme) return;

    const novoStatus = !filme.assistido;

    setFilmes((atual) =>
      atual.map((item) =>
        item.id === id
          ? { ...item, assistido: novoStatus }
          : item
      )
    );

    setAnuncio(
      novoStatus
        ? `Filme ${filme.titulo} marcado como assistido.`
        : `Filme ${filme.titulo} marcado como não assistido.`
    );
  }

  function removerFilme(id) {
    const filme = filmes.find((item) => item.id === id);

    setFilmes((atual) => atual.filter((filme) => filme.id !== id));

    if (filme) {
      setAnuncio(`Filme ${filme.titulo} removido.`);
    }
  }

  const filmesFiltrados = filmes.filter((filme) => {
    if (filtro === "naoAssistidos") {
      return !filme.assistido;
    }

    if (filtro === "assistidos") {
      return filme.assistido;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-cinema-bg text-white px-4 py-2 rounded-lg z-50"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <div
        aria-live="polite"
        role="status"
        className="sr-only"
      >
        {anuncio}
      </div>

      <main
        id="conteudo"
        className="flex-1 px-8 py-8"
      >
        <MovieForm onAdicionar={adicionarFilme} />

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-cinema-bg">
            Meus filmes ({filmes.length})
          </h2>
        </div>

        <div
          role="group"
          aria-label="Filtrar filmes"
          className="flex gap-2 mb-6"
        >
          {FILTROS.map((opcao) => (
            <button
              key={opcao.valor}
              onClick={() => setFiltro(opcao.valor)}
              aria-pressed={filtro === opcao.valor}
              className={`px-3 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-cinema-bg focus:ring-offset-2 ${
                filtro === opcao.valor
                  ? "bg-cinema-bg text-white"
                  : "bg-white text-slate-700 hover:bg-slate-200"
              }`}
            >
              {opcao.rotulo}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filmesFiltrados.map((filme) => (
            <MovieCard
              key={filme.id}
              titulo={filme.titulo}
              genero={filme.genero}
              nota={filme.nota}
              emoji={filme.emoji}
              assistido={filme.assistido}
              onToggle={() => alternarAssistido(filme.id)}
              onRemover={() => removerFilme(filme.id)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;