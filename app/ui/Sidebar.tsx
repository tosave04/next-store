"use client"

import Link from "next/link"
import Image from "next/image"
import { useLayout } from "../../store/LayoutProvider"
import { BiHome, BiSearch, BiShoppingBag, BiUser } from "react-icons/bi"
import type { IconType } from "react-icons"

export default function Sidebar() {
  const { sidebar } = useLayout()

  const expanded = "w-96 left-0"
  const hidden = "w-0 -left-96"

  return (
    <aside
      className={`fixed flex flex-col gap-2 h-screen p-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700 shadow-lg transition-all ${
        sidebar ? expanded : hidden
      } z-50`}
    >
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white m-0">Brand</h2>

      <div className="relative mt-6">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <BiSearch />
        </span>

        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          placeholder="Search"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <ul>
          <Element title={"Accueil"} Icon={BiHome} href={"/"} />
          <Element title={"Compte"} Icon={BiUser} href={"#"} />
          <Element title={"Panier"} Icon={BiShoppingBag} href={"#"} />

          <hr className="my-4 border-gray-200 dark:border-gray-600" />

          <Element title={"Accueil"} Icon={BiHome} href={"#"} />
          <Element title={"Compte"} Icon={BiUser} href={"#"} />
          <Element title={"Panier"} Icon={BiShoppingBag} href={"#"} />
        </ul>

        <Compte href="#!" className="flex items-center px-4 -mx-2" />
      </div>
    </aside>
  )
}

const Element = ({ title, Icon, href }: { title: string; Icon: IconType; href: string }) => {
  return (
    <li>
      <Link
        href={href}
        className="flex flex-row items-center gap-4 h-8 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
      >
        <Icon className="h-6 w-6 text-gray-400" />
        <span className="text-sm font-medium">{title}</span>
      </Link>
    </li>
  )
}

const Compte = (props: any) => (
  <Link {...props}>
    <Image
      className="object-cover mx-2 rounded-full h-9 w-9"
      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      alt="avatar"
    />
    <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">John Doe</span>
  </Link>
)
