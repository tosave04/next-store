"use client"

import { createContext, useContext, useState } from "react"
import useDarkMode from "../app/ui/useDarkMode"
import type { DarkModeType } from "../app/ui/useDarkMode"

export const LayoutContext = createContext<LayoutType>({} as LayoutType)

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  // Dark Mode
  const { darkMode, toogleDarkMode } = useDarkMode()

  // Background Cache
  const [bgCacheVisible, setBgCacheVisible] = useState<boolean>(false)
  const closeBgCache = () => {
    setBgCacheVisible(false)
    setSidebar(false)
    setCart(false)
  }

  // Sidebar
  const [sidebar, setSidebar] = useState(false)
  const openSidebar = () => {
    setBgCacheVisible(true)
    setSidebar(true)
  }

  // Cart
  const [cart, setCart] = useState(false)
  const openCart = () => {
    setCart(true)
  }

  return (
    <LayoutContext.Provider
      value={{ darkMode, toogleDarkMode, sidebar, bgCacheVisible, closeBgCache, openSidebar, cart, openCart }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

type LayoutType = {
  darkMode: DarkModeType["darkMode"]
  toogleDarkMode: DarkModeType["toogleDarkMode"]
  sidebar: boolean
  bgCacheVisible: boolean
  closeBgCache: () => void
  openSidebar: () => void
  cart: boolean
  openCart: () => void
}

export const useLayout = () => useContext(LayoutContext)
