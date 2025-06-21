import { useState, useRef, useCallback } from "react"

interface Position {
  x: number
  y: number
}

interface DragState {
  isDragging: boolean
  startPos: Position
  offset: Position
}

export function useWindowDrag(initialPosition: Position, onBringToFront: () => void) {
  const [position, setPosition] = useState(initialPosition)
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    startPos: { x: 0, y: 0 },
    offset: { x: 0, y: 0 }
  })

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Only start drag if clicking on the window header
      if (!(e.target instanceof HTMLElement) || !e.target.closest(".window-header")) {
        return
      }

      // Prevent text selection during drag
      e.preventDefault()
      document.body.style.userSelect = "none"
      document.body.style.webkitUserSelect = "none"

      onBringToFront()

      const rect = e.currentTarget.getBoundingClientRect()
      const offset = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }

      setDragState({
        isDragging: true,
        startPos: { x: e.clientX, y: e.clientY },
        offset
      })
    },
    [onBringToFront]
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragState.isDragging) return

      // Prevent default to avoid text selection
      e.preventDefault()

      const newPosition = {
        x: e.clientX - dragState.offset.x,
        y: e.clientY - dragState.offset.y
      }

      setPosition(newPosition)
    },
    [dragState]
  )

  const handleMouseUp = useCallback(() => {
    if (dragState.isDragging) {
      setDragState({
        isDragging: false,
        startPos: { x: 0, y: 0 },
        offset: { x: 0, y: 0 }
      })

      // Restore text selection
      document.body.style.userSelect = ""
      document.body.style.webkitUserSelect = ""
    }
  }, [dragState.isDragging])

  return {
    position,
    setPosition,
    isDragging: dragState.isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp
  }
} 