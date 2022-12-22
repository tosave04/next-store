import React from "react"

/**
 * @name useDarkMode
 * @description A hook to manage dark mode in your app to add class "dark" to the html element
 * @description TailwindCSS: add darkMode: "class" to options in tailwind.config.js
 * @description darkMode: boolean - true if dark mode is enabled
 * @description setDarkMode: (value: boolean) => void - set dark mode to true or false
 * @description toogleDarkMode: () => void - toogle dark mode
 * @description keepOsTheme: () => void - remove the theme from localStorage, so the OS preference will be used
 * @returns {darkMode: boolean, setDarkMode: (value: boolean) => void, toogleDarkMode: () => void, keepOsTheme: () => void}
 * @example const { darkMode, setDarkMode, toogleDarkMode, keepOsTheme } = useDarkMode()
 */

export default function useDarkMode() {
	// State to hold the preferred mode
	const [darkMode, setDarkMode] = React.useState<boolean | null>(null)

	// If user has set a browser or OS preference, let's use it
	React.useEffect(() => {
		setDarkMode(
			localStorage.theme === "dark" ||
				(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		)
	}, [])

	// When darkMode changes, update the html class
	React.useEffect(() => {
		if (darkMode === null) return
		const html = document.querySelector("html")
		if (darkMode) {
			html?.classList.add("dark")
			localStorage.theme = "dark"
		} else {
			html?.classList.remove("dark")
			localStorage.theme = "light"
		}
	}, [darkMode])

	// Toogle between dark and light mode
	const toogleDarkMode = () => setDarkMode(!darkMode)

	// Whenever the user explicitly chooses to respect the OS preference
	const keepOsTheme = () => localStorage.removeItem("theme")

	return { darkMode, setDarkMode, toogleDarkMode, keepOsTheme }
}

export type DarkModeType = ReturnType<typeof useDarkMode>
