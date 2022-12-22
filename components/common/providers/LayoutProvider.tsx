import React from "react"
import useDarkMode from "../hooks/useDarkMode"
import type { DarkModeType } from "../hooks/useDarkMode"

export const LayoutContext = React.createContext<LayoutType>({} as LayoutType)

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
	// Dark Mode
	const { darkMode, toogleDarkMode } = useDarkMode()

	return <LayoutContext.Provider value={{ darkMode, toogleDarkMode }}>{children}</LayoutContext.Provider>
}

type LayoutType = {
	darkMode: DarkModeType["darkMode"]
	toogleDarkMode: DarkModeType["toogleDarkMode"]
}
