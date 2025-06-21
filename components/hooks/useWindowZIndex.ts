import { useState, useCallback } from "react"

export function useWindowZIndex(initialZIndex: number = 10) {
  const [zIndex, setZIndex] = useState(initialZIndex)

  const getHighestZIndex = useCallback(() => {
    const windows = Array.from(document.querySelectorAll(".window"))
    return Math.max(
      ...windows.map(el => {
        const zIndexValue = getComputedStyle(el).zIndex
        return zIndexValue === "auto" ? 0 : parseInt(zIndexValue, 10) || 0
      }),
      0
    )
  }, [])

  const bringToFront = useCallback(() => {
    const highestZ = getHighestZIndex()
    setZIndex(Math.max(highestZ + 1, zIndex + 1))
  }, [getHighestZIndex, zIndex])

  return {
    zIndex,
    bringToFront
  }
} 