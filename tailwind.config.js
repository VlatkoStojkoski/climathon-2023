/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./(dist|src)/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans'],
      },
      colors: {
          primary: '#59B73A' ,
          secondary: {
            light: '#223324',
            dark: '#101618'
          },
      },
    },
  },
  plugins: [],
}
