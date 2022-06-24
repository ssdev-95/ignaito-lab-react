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
        'banner': "url('/src/assets/background.png')",
				"grad": "linear-gradient(90deg, #fff 65%, rgba(0,0,0,0) 100%)"
      },
			inset: {
				out: '-100vw'
			},
			transitionTimingFunction: {
				smooth: 'cubic-bezier(0.7,0.7,0.7,0.7)'
			},
			screens: {
				'mb': { 'max': '869px' }
			},
			animation: {
				spin: 'spinner 2s infinite cubic-bezier(0.7,0.7,0.7,0.7)'
			},
			keyframes: {
				spinner: {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(90deg)'
					},
					'50%': {
						transform: 'rotate(180deg)'
					},
					'75%': {
						transform: 'rotate(270deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				}
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
