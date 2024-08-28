/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				'Candara': ['"Candara"'],
				'Inter': ['Inter'],
				'Kudry': ['Kudry']
			},
			colors: {
				'gray': '#D2CCBD',
			}
		},
	},
	plugins: [],
}