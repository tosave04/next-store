"use client"

import { useLayout } from "../../store/LayoutProvider"

export default function Cart() {
  const { cart } = useLayout()

  const expanded = "w-72 right-0"
  const hidden = "w-0 -right-72"

  return (
    <aside
      className={`fixed flex flex-col gap-2 h-1/2 p-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700 shadow-lg transition-all ${
        cart ? expanded : hidden
      }`}
    >
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white m-0">Panier</h2>
      <hr className="my-4 border-gray-200 dark:border-gray-600" />
    </aside>
  )
}
