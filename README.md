# CineVault — Catálogo de Filmes 🎬

Atividade prática da SA03 — Programação Front-end.
Projeto criado com **Vite + React** e estilizado com **Tailwind CSS**.

## Como rodar o projeto

Extraia a pasta, abra o terminal dentro dela e rode:

```bash
npm install
npm run dev
```

Depois acesse o endereço que aparecer no terminal (algo como `http://localhost:5173/`).

> Observação: este pacote já vem com todos os arquivos de configuração prontos
> (equivalente a já ter rodado `npm create vite@latest`, `npm install -D tailwindcss postcss autoprefixer`
> e `npx tailwindcss init -p`). Você só precisa instalar as dependências com `npm install`.

## Estrutura do projeto

```
cinevault-catalogo/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Footer.jsx
        └── MovieCard.jsx
```

## Checklist da atividade

- [x] Projeto Vite + React com nome próprio (CineVault), rodando com `npm run dev`
- [x] Tailwind CSS instalado e configurado (`tailwind.config.js` com `content` correto + diretivas em `index.css`)
- [x] `Header.jsx` em `src/components`, estilizado com Tailwind, com o nome do sistema
- [x] `MovieCard.jsx` reutilizável com 4 props (`titulo`, `genero`, `nota`, `emoji`)
- [x] `App.jsx` com array de 5 filmes renderizado com `.map()` e `key`, em grid responsivo
- [x] Desafio: cor do selo de gênero muda conforme o valor (`coresPorGenero`)
- [x] Desafio: `Footer.jsx` reutilizável
- [x] Desafio: grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`

## Ideias para você continuar

- Trocar o tema (ex.: playlist de músicas, receitas, vitrine de produtos)
- Adicionar mais filmes ao array
- Criar um componente `Botao.jsx` reutilizável
- Na próxima aula: transformar o array em estado com `useState`
