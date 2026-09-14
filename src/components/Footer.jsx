// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-cinema-bg text-slate-300 text-center text-sm px-8 py-4 mt-10">
      <p>
        © {new Date().getFullYear()} CineVault — Catálogo criado para a
        atividade de Programação Front-end (SA03).
      </p>
    </footer>
  );
}

export default Footer;
