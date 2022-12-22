/* eslint-disable @next/next/no-img-element */
import React from "react"
import { LayoutContext } from "../../common/providers/LayoutProvider"

export default function Sidebar() {
	const { sidebar } = React.useContext(LayoutContext)

	const expanded = "w-96 left-0"
	const hidden = "w-0 -left-96"

	return (
		<aside
			className={`fixed flex flex-col gap-2 h-screen p-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700 shadow-lg transition-all ${
				sidebar ? expanded : hidden
			}`}
		>
			<h2 className="text-3xl font-semibold text-gray-800 dark:text-white m-0">Brand</h2>

			<div className="relative mt-6">
				<span className="absolute inset-y-0 left-0 flex items-center pl-3">
					<i className="bx bx-search"></i>
				</span>

				<input
					type="text"
					className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
					placeholder="Search"
				/>
			</div>

			<div className="flex flex-col justify-between flex-1 mt-4">
				<ul>
					<Element title={"Accueil"} icon={"bx-home"} href={"#"} />
					<Element title={"Compte"} icon={"bx-user"} href={"#"} />
					<Element title={"Panier"} icon={"bx-shopping-bag"} href={"#"} />

					<hr className="my-4 border-gray-200 dark:border-gray-600" />

					<Element title={"Accueil"} icon={"bx-home"} href={"#"} />
					<Element title={"Compte"} icon={"bx-user"} href={"#"} />
					<Element title={"Panier"} icon={"bx-shopping-bag"} href={"#"} />
				</ul>

				<Compte href="#" className="flex items-center px-4 -mx-2" />
			</div>
		</aside>
	)
}

const Element = ({ title, icon, href }: { title: string; icon: string; href: string }) => {
	return (
		<li>
			<a
				href={href}
				className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
			>
				<span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
					<i className={`bx ${icon}`} />
				</span>
				<span className="text-sm font-medium">{title}</span>
			</a>
		</li>
	)
}

const Compte = (props: React.ComponentPropsWithoutRef<"a">) => (
	<a {...props}>
		<img
			className="object-cover mx-2 rounded-full h-9 w-9"
			src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
			alt="avatar"
		/>
		<span className="mx-2 font-medium text-gray-800 dark:text-gray-200">John Doe</span>
	</a>
)
