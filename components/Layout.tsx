import React from "react"
import Head from "next/head"
import { LayoutContext } from "./common/providers/LayoutProvider"
import Sidebar from "./layout/Sidebar"
import Cart from "./layout/Cart"

export default function Layout({ children }: { children: React.ReactNode }) {
	const { darkMode, toogleDarkMode, BgCache, openSidebar, openCart } = React.useContext(LayoutContext)

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<BgCache />
			<Sidebar />
			<Cart />

			<header className="h-32 flex justify-center items-center">Header</header>
			<nav className="h-16 flex justify-center items-center gap-12">
				<div onClick={openSidebar}>Sidebar</div>
				<div onClick={openCart}>Cart</div>
				<div onClick={toogleDarkMode}>
					<i className={`bx ${darkMode ? "bx-moon" : "bx-sun"} text-2xl cursor-pointer`} />
				</div>
			</nav>
			<main>{children}</main>
			<footer className="h-64 flex justify-center items-center">Footer</footer>
		</>
	)
}
