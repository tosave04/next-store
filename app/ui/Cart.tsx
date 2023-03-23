"use client"

import { useLayout } from "../../store/LayoutProvider"

export default function Cart() {
  const { cart, closeBgCache } = useLayout()

  const expanded = "w-72 right-0"
  const hidden = "w-0 -right-72"

  return (
    <>
      <div className={`fixed inset-0 ${!cart && "hidden"}`} onClick={closeBgCache} />
      <aside className={`fixed h-full bg-neutral-500/30 transition-all ${cart ? expanded : hidden}`}>
        <div className="flex flex-col gap-2 h-1/2 p-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700 shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white m-0">Panier</h2>
          <hr className="my-4 border-gray-200 dark:border-gray-600" />
        </div>
      </aside>
    </>
  )
}
