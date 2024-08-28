/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/**/*.{html,js}"],
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