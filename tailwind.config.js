/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontSize: {
        'tiny': '0.75rem',
        'huge': '5rem',
      },
      fontFamily: {
        sans: ['Karla','Verdana', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        'lx': '405px',
        'xs': '480px', // Ajoute un breakpoint personnalisé pour 480px
        'sm': '640px', // Breakpoint par défaut pour sm
        'md': '768px', // Breakpoint par défaut pour md
        'lg': '1024px', // Breakpoint par défaut pour lg
        'xl': '1280px', // Breakpoint par défaut pour xl
      },
    },
  },
  plugins: [],
}
