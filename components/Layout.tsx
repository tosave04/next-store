// Core
import React from "react"
import Head from "next/head"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="h-32 bg-neutral-300"></header>
			<nav className="h-16 bg-neutral-700"></nav>
			<main>{children}</main>
			<footer className="h-64 bg-neutral-700"></footer>
		</>
	)
}
