/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./(dist|src)/**/*.{html,js}"],
  theme: {
    extend: {
			colors: {
				accent: '#59b73a',
				background: {
					primary: '#101618',
					secondary: '#223324',
				},
				foreground: {
					primary: '#ffffff',
					secondary: '#e8e8e8',
				},
			},
		},
  },
  plugins: [],
}
