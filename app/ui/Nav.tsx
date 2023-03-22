"use client"

import { useLayout } from "../../store/LayoutProvider"
import { BiMoon, BiSun } from "react-icons/bi"

export default function Nav() {
  const { darkMode, toogleDarkMode, openSidebar, openCart } = useLayout()

  return (
    <nav className="h-16 flex justify-center items-center gap-12">
      <div onClick={openSidebar}>Sidebar</div>
      <div onClick={openCart}>Cart</div>
      <div className="cursor-pointer" onClick={toogleDarkMode}>
        {darkMode ? <BiMoon className="w-6 h-6" /> : <BiSun className="w-6 h-6" />}
      </div>
    </nav>
  )
}
