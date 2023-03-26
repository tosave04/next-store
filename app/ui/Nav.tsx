"use client"

import Link from "next/link"
import { useLayout } from "../../store/LayoutProvider"
import { BiMoon, BiSun, BiMenu, BiCart, BiHome, BiUser } from "react-icons/bi"
import { GrTest } from "react-icons/gr"
import Logo from "./Logo"

export default function Nav() {
  const { darkMode, toogleDarkMode, openSidebar, openCart } = useLayout()

  return (
    <nav>
      <div>
        <div>
          <div onClick={openSidebar}>
            <BiMenu />
          </div>

          <Link className="group" href={"/"}>
            <BiHome className="group-hover:scale-110" />
            <span>Accueil</span>
          </Link>

          <Link className="group" href={"/typo"}>
            <GrTest className="w-6 h-6 group-hover:scale-110" />
            <span>Typo</span>
          </Link>
        </div>

        <Logo />

        <div>
          <div className="group" onClick={openCart}>
            <BiCart className="group-hover:scale-110" />
            <span>Panier</span>
          </div>

          <Link className="group" href={"/compte"}>
            <BiUser className="group-hover:scale-110" />
            <span>Compte</span>
          </Link>

          <div className="cursor-pointer" onClick={toogleDarkMode}>
            {darkMode ? <BiMoon /> : <BiSun />}
          </div>
        </div>
      </div>
    </nav>
  )
}
