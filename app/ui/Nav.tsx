"use client"

import { useLayout } from "../../store/LayoutProvider"
import { BiMoon, BiSun, BiCart, BiMenu } from "react-icons/bi"

export default function Nav() {
  const { darkMode, toogleDarkMode, openSidebar, openCart } = useLayout()

  return (
    <nav className="h-16 flex justify-center items-center gap-12">
      <div onClick={openSidebar}>
        <BiMenu className="w-8 h-8 cursor-pointer" />
      </div>
      <div onClick={openCart}>
        <BiCart className="w-8 h-8 cursor-pointer" />
      </div>
      <div className="cursor-pointer" onClick={toogleDarkMode}>
        {darkMode ? <BiMoon className="w-8 h-8" /> : <BiSun className="w-8 h-8" />}
      </div>
    </nav>
  )
}
