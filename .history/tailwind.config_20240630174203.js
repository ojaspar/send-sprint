/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				slideIn: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				fadeIn: 'fadeIn 0.5s ease-in-out',
				slideIn: 'slideIn 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
};
