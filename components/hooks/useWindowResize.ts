import { useState, useCallback } from "react"

interface Position {
  x: number
  y: number
}

interface Size {
  width: number
  height: number
}

interface ResizeState {
  isResizing: boolean
  direction: string | null
  startPos: Position
  startSize: Size
  startWindowPos: Position
}

const MIN_WIDTH = 200
const MIN_HEIGHT = 100

export function useWindowResize(initialSize: Size, initialPosition: Position) {
  const [size, setSize] = useState(initialSize)
  const [position, setPosition] = useState(initialPosition)
  const [resizeState, setResizeState] = useState<ResizeState>({
    isResizing: false,
    direction: null,
    startPos: { x: 0, y: 0 },
    startSize: { width: 0, height: 0 },
    startWindowPos: { x: 0, y: 0 }
  })

  const handleResizeMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, direction: string) => {
      e.preventDefault()
      e.stopPropagation()

      // Prevent text selection during resize
      document.body.style.userSelect = "none"
      document.body.style.webkitUserSelect = "none"

      setResizeState({
        isResizing: true,
        direction,
        startPos: { x: e.clientX, y: e.clientY },
        startSize: { ...size },
        startWindowPos: { ...position }
      })
    },
    [size, position]
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!resizeState.isResizing || !resizeState.direction) return

      e.preventDefault()

      const deltaX = e.clientX - resizeState.startPos.x
      const deltaY = e.clientY - resizeState.startPos.y

      let newWidth = resizeState.startSize.width
      let newHeight = resizeState.startSize.height
      let newX = resizeState.startWindowPos.x
      let newY = resizeState.startWindowPos.y

      // Handle horizontal resizing
      if (resizeState.direction.includes("right")) {
        newWidth = Math.max(resizeState.startSize.width + deltaX, MIN_WIDTH)
      }
      if (resizeState.direction.includes("left")) {
        const proposedWidth = resizeState.startSize.width - deltaX
        if (proposedWidth >= MIN_WIDTH) {
          newWidth = proposedWidth
          newX = resizeState.startWindowPos.x + deltaX
        } else {
          newWidth = MIN_WIDTH
          newX = resizeState.startWindowPos.x + (resizeState.startSize.width - MIN_WIDTH)
        }
      }

      // Handle vertical resizing
      if (resizeState.direction.includes("bottom")) {
        newHeight = Math.max(resizeState.startSize.height + deltaY, MIN_HEIGHT)
      }
      if (resizeState.direction.includes("top")) {
        const proposedHeight = resizeState.startSize.height - deltaY
        if (proposedHeight >= MIN_HEIGHT) {
          newHeight = proposedHeight
          newY = resizeState.startWindowPos.y + deltaY
        } else {
          newHeight = MIN_HEIGHT
          newY = resizeState.startWindowPos.y + (resizeState.startSize.height - MIN_HEIGHT)
        }
      }

      setSize({ width: newWidth, height: newHeight })
      setPosition({ x: newX, y: newY })
    },
    [resizeState]
  )

  const handleMouseUp = useCallback(() => {
    if (resizeState.isResizing) {
      setResizeState({
        isResizing: false,
        direction: null,
        startPos: { x: 0, y: 0 },
        startSize: { width: 0, height: 0 },
        startWindowPos: { x: 0, y: 0 }
      })

      // Restore text selection
      document.body.style.userSelect = ""
      document.body.style.webkitUserSelect = ""
    }
  }, [resizeState.isResizing])

  // Method to update position from external sources (like drag)
  const updatePosition = useCallback((newPosition: Position) => {
    if (!resizeState.isResizing) {
      setPosition(newPosition)
    }
  }, [resizeState.isResizing])

  return {
    size,
    setSize,
    position,
    setPosition: updatePosition,
    isResizing: resizeState.isResizing,
    resizeDirection: resizeState.direction,
    handleResizeMouseDown,
    handleMouseMove,
    handleMouseUp
  }
} 