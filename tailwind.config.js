/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
		extend: {
			colors: {
				warning: "#fba94c",
				error: "#f75a68",
				blueish: "#81d8f7",
				green: {
					400: "#00b37e",
					500: "#00875f",
					600: "#015f43"
				},
				gray: {
					100: "#ffffff",
					200: "#e1e1e6",
					300: "#c4c4c4",
					400: "#8d8d99",
					500: "#323238",
					600: "#121214",
					700: "#09090a"
				}
			}
		}
	},
  plugins: [],
}
