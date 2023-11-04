/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./(dist|src)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: '#FF0000',
        background: {
          primary: '#1E1E1E',
          secondary: '#331F1F',
        },
        foreground: {
          primary: '#ffffff',
          secondary: '#e8e8e8',
          card: '#BEBEBE',
          gradiant1: '#FF1313',
          gradiant2: '#2C0E0E',
        },
      },
    },
  },
  plugins: [],
}
