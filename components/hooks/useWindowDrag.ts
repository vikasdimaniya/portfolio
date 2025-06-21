import { useState, useCallback } from "react"

export function useWindowDrag(
  initialPosition: { x: number; y: number },
  onBringToFront: () => void
) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    // Only handle left mouse button and avoid dragging on buttons/inputs
    if (e.button !== 0) return
    
    const target = e.target as HTMLElement
    if (target.tagName === 'BUTTON' || target.tagName === 'INPUT') return
    
    // Calculate offset from mouse to window position
    const rect = e.currentTarget.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top
    
    setDragOffset({ x: offsetX, y: offsetY })
    setIsDragging(true)
    onBringToFront()
    
    // Prevent text selection during drag
    e.preventDefault()
  }, [onBringToFront])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return
    
    e.preventDefault()
    
    const newX = e.clientX - dragOffset.x
    const newY = e.clientY - dragOffset.y
    
    // Keep window within viewport bounds
    const maxX = window.innerWidth - 200 // Minimum 200px visible
    const maxY = window.innerHeight - 32 // At least title bar visible
    
    const boundedX = Math.max(0, Math.min(newX, maxX))
    const boundedY = Math.max(0, Math.min(newY, maxY))
    
    setPosition({ x: boundedX, y: boundedY })
  }, [isDragging, dragOffset.x, dragOffset.y])

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false)
    }
  }, [isDragging])

  return {
    position,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  }
} 