/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			md: "768px",
			lg: "1280px",
		},
	},
	darkMode: "class",
	plugins: [],
}
