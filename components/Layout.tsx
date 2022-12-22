import React from "react"
import Head from "next/head"
import { LayoutContext } from "./common/providers/LayoutProvider"

export default function Layout({ children }: { children: React.ReactNode }) {
	const { darkMode, toogleDarkMode } = React.useContext(LayoutContext)

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="h-32 flex justify-center items-center">Header</header>
			<nav className="h-16 flex justify-center items-center">
				Nav <div onClick={toogleDarkMode}>{darkMode ? "Dark" : "Light"} Mode</div>
			</nav>
			<main>{children}</main>
			<footer className="h-64 flex justify-center items-center">Footer</footer>
		</>
	)
}
