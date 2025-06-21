import { useState, useCallback, useEffect, useRef } from "react"

export function useWindowZIndex(initialZIndex: number = 10) {
  const [zIndex, setZIndex] = useState(initialZIndex)
  const hasInitialized = useRef(false)

  const getHighestZIndex = useCallback(() => {
    if (typeof window === 'undefined') return initialZIndex
    
    const windows = Array.from(document.querySelectorAll(".window"))
    return Math.max(
      ...windows.map(el => {
        const zIndexValue = getComputedStyle(el).zIndex
        return zIndexValue === "auto" ? 0 : parseInt(zIndexValue, 10) || 0
      }),
      0
    )
  }, [initialZIndex])

  const bringToFront = useCallback(() => {
    const highestZ = getHighestZIndex()
    setZIndex(Math.max(highestZ + 1, zIndex + 1))
  }, [getHighestZIndex, zIndex])

  // Set initial z-index based on existing windows (client-side only)
  useEffect(() => {
    if (hasInitialized.current) return
    
    const highestZ = getHighestZIndex()
    if (highestZ >= zIndex) {
      setZIndex(highestZ + 1)
    }
    hasInitialized.current = true
  }, [getHighestZIndex, zIndex])

  return {
    zIndex,
    bringToFront
  }
} 