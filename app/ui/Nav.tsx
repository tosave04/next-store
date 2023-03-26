"use client"

import Link from "next/link"
import { useLayout } from "../../store/LayoutProvider"
import { BiMoon, BiSun, BiMenu, BiCart, BiHome } from "react-icons/bi"
import { GrTest } from "react-icons/gr"

export default function Nav() {
  const { darkMode, toogleDarkMode, openSidebar, openCart } = useLayout()

  return (
    <nav className="h-16 flex justify-center items-center gap-12">
      <div onClick={openSidebar}>
        <BiMenu className="w-8 h-8 cursor-pointer" />
      </div>

      <Link href={"/"}>
        <BiHome className="w-8 h-8 cursor-pointer" />
      </Link>

      <Link href={"/typo"}>
        <GrTest className="w-7 h-7 cursor-pointer" />
      </Link>

      <div onClick={openCart}>
        <BiCart className="w-8 h-8 cursor-pointer" />
      </div>

      <div className="cursor-pointer" onClick={toogleDarkMode}>
        {darkMode ? <BiMoon className="w-8 h-8" /> : <BiSun className="w-8 h-8" />}
      </div>
    </nav>
  )
}
