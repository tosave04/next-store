import React from "react"
import useDarkMode from "../hooks/useDarkMode"
import type { DarkModeType } from "../hooks/useDarkMode"

export const LayoutContext = React.createContext<LayoutType>({} as LayoutType)

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
	// Dark Mode
	const { darkMode, toogleDarkMode } = useDarkMode()

	// Background Cache
	const [bgCacheVisible, setBgCacheVisible] = React.useState<boolean>(false)
	const BgCache = () => (
		<div
			className={`fixed inset-0 bg-neutral-500/30 ${bgCacheVisible ? "scale-100" : "scale-0"}`}
			onClick={() => {
				setBgCacheVisible(false)
				setSidebar(false)
				setCart(false)
			}}
		/>
	)

	// Sidebar
	const [sidebar, setSidebar] = React.useState(false)
	const openSidebar = () => {
		setBgCacheVisible(true)
		setSidebar(true)
	}

	// Cart
	const [cart, setCart] = React.useState(false)
	const openCart = () => {
		setBgCacheVisible(true)
		setCart(true)
	}

	return (
		<LayoutContext.Provider value={{ darkMode, toogleDarkMode, sidebar, openSidebar, cart, openCart, BgCache }}>
			{children}
		</LayoutContext.Provider>
	)
}

type LayoutType = {
	darkMode: DarkModeType["darkMode"]
	toogleDarkMode: DarkModeType["toogleDarkMode"]
	sidebar: boolean
	openSidebar: () => void
	cart: boolean
	openCart: () => void
	BgCache: () => JSX.Element
}
