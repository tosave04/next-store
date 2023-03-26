"use client"

import { useLayout } from "../../store/LayoutProvider"

export default function BgCache() {
  const { bgCacheVisible, closeBgCache } = useLayout()

  return (
    <div
      className={`fixed inset-0 bg-neutral-500/30 ${bgCacheVisible ? "scale-100" : "scale-0"} z-50`}
      onClick={closeBgCache}
    />
  )
}
