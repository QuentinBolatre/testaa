/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charte Didask - couleurs principales
        'didask': {
          'primary': '#6366f1',      // Violet/Indigo principal
          'secondary': '#8b5cf6',    // Violet secondaire
          'accent': '#06b6d4',       // Cyan accent
          'dark': '#1e1b4b',         // Bleu très foncé
          'light': '#f8fafc',        // Gris très clair
          'text': '#334155',         // Gris texte
          'muted': '#64748b',        // Gris secondaire
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
