"use client"

import { useLayout } from "../../store/LayoutProvider"

export default function Nav() {
  const { darkMode, toogleDarkMode, openSidebar, openCart } = useLayout()

  return (
    <nav className="h-16 flex justify-center items-center gap-12">
      <div onClick={openSidebar}>Sidebar</div>
      <div onClick={openCart}>Cart</div>
      <div onClick={toogleDarkMode}>
        <i className={`bx ${darkMode ? "bx-moon" : "bx-sun"} text-2xl cursor-pointer`} />
      </div>
    </nav>
  )
}
