import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieCard from "./components/MovieCard";

// Array com os itens (mesma lógica do array "tarefas" da aula).
// Na próxima aula esse array vira ESTADO (useState).
const filmes = [
  { id: 1, titulo: "Além do Vazio", genero: "Ficção", nota: 8.7, emoji: "🚀" },
  { id: 2, titulo: "A Casa do Fim", genero: "Terror", nota: 7.2, emoji: "🏚️" },
  { id: 3, titulo: "Risada Garantida", genero: "Comédia", nota: 6.9, emoji: "🤣" },
  { id: 4, titulo: "Chuva de Outono", genero: "Drama", nota: 9.1, emoji: "🍂" },
  { id: 5, titulo: "Mundo dos Pixels", genero: "Animação", nota: 8.3, emoji: "🎨" },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header />

      <main className="flex-1 px-8 py-8">
        <h2 className="text-xl font-bold text-cinema-bg mb-6">
          Meus filmes ({filmes.length})
        </h2>

        {/* Grid responsivo: 1 coluna no celular, 2 no tablet, 3 no desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filmes.map((filme) => (
            <MovieCard
              key={filme.id}
              titulo={filme.titulo}
              genero={filme.genero}
              nota={filme.nota}
              emoji={filme.emoji}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
