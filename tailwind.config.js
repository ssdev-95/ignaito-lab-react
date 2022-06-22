/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
		extend: {
			colors: {
				yellow: {
					400: "#fba94c"
				},
				red: {
					400: "#f75a68"
				},
				blue: {
					400: "#81d8f7"
				},
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
			},
			fontFamily: {
				sans: 'Roboto, sans-serif'
			},
			backgroundImage: {
        'banner': "url('/src/assets/background.png')"
      },
			inset: {
				out: '-100vw'
			},
			transitionTimingFunction: {
				smooth: 'cubic-bezier(0.7,0.7,0.7,0.7)'
			}
		}
	},
	screens: {
		'xs': '375px',
		'sm': '411px',
		'md': '869px',
		'lg': '1024px',
		'xl': '1248px',
		'2xl': '1536px'
	},
  plugins: [],
}
