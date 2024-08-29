/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				'Candara': ['"Candara"'],
				'Inter': ['Inter'],
				'Kudry': ['Kudry'],
				'Cera-Pro': ["'Cera Pro'"],
			},
			colors: {
				'gray': '#D2CCBD',
				'charcoal': '#3D3D3D',
				'deep-ocean': '#093d76',
			},
			backgroundImage: {
				'gradient-gray': 'linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%)',
			},
			
		},
	},
	plugins: [],
}