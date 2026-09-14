// src/components/Header.jsx
function Header() {
  return (
    <header className="bg-cinema-bg text-white px-8 py-5 flex items-center justify-between shadow-md">
      <h1 className="text-2xl font-bold">
        Cine<span className="text-cinema-gold">Vault</span>
      </h1>
      <span className="text-sm text-slate-300 hidden sm:block">
        Seu catálogo pessoal de filmes 🎬
      </span>
    </header>
  );
}

export default Header;
