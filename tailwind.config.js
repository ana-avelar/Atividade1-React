/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta própria do CineVault (tema "cinema à noite")
        cinema: {
          bg: "#0f0a1e",
          card: "#1b1330",
          gold: "#f5c518", // amarelo estilo IMDb
        },
      },
    },
  },
  plugins: [],
}
