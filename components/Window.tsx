"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { Minus, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface WindowProps {
  title: string
  children: React.ReactNode
  className?: string
  defaultPosition?: { x: number; y: number }
  onClose?: () => void
  variant?: "light" | "dark"
}

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

// Custom hook for window z-index management
function useWindowZIndex() {
  const [zIndex, setZIndex] = useState(10)

  const getHighestZIndex = useCallback(() => {
    return Math.max(
      ...Array.from(document.querySelectorAll(".window")).map(
        (el) => Number.parseInt(getComputedStyle(el).zIndex, 10) || 0,
      ),
    )
  }, [])

  const bringToFront = useCallback(() => {
    setZIndex((prevZIndex) => Math.max(prevZIndex, getHighestZIndex() + 1))
  }, [getHighestZIndex])

  return { zIndex, bringToFront }
}

export default function Window({
  title,
  children,
  className = "",
  defaultPosition = { x: 0, y: 0 },
  onClose,
  variant = "light",
}: WindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState(defaultPosition)
  const [size, setSize] = useState({ width: 400, height: 300 })
  const [isDragging, setIsDragging] = useState(false)
  const [resizeState, setResizeState] = useState<ResizeState>({
    isResizing: false,
    direction: null,
    startPos: { x: 0, y: 0 },
    startSize: { width: 0, height: 0 },
    startWindowPos: { x: 0, y: 0 },
  })
  const [debugInfo, setDebugInfo] = useState<string>("")
  
  const nodeRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef({ x: 0, y: 0 })

  const { zIndex, bringToFront } = useWindowZIndex()

  // Drag handlers
  const handleDragMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target instanceof HTMLElement && e.target.closest(".window-header")) {
        setIsDragging(true)
        bringToFront()
        dragStartRef.current = { 
          x: e.clientX - position.x, 
          y: e.clientY - position.y 
        }
      }
    },
    [position.x, position.y, bringToFront],
  )

  // Resize handlers
  const handleResizeMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, direction: string) => {
      e.stopPropagation()
      setResizeState({
        isResizing: true,
        direction,
        startPos: { x: e.clientX, y: e.clientY },
        startSize: { width: size.width, height: size.height },
        startWindowPos: { x: position.x, y: position.y },
      })
      bringToFront()
    },
    [size.width, size.height, position.x, position.y, bringToFront],
  )

  // Mouse move handler
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragStartRef.current.x
        const newY = e.clientY - dragStartRef.current.y
        setPosition({ x: newX, y: newY })
        setDebugInfo(`Dragging - X: ${newX}, Y: ${newY}`)
      } else if (resizeState.isResizing && resizeState.direction) {
        const deltaX = e.clientX - resizeState.startPos.x
        const deltaY = e.clientY - resizeState.startPos.y

        let newWidth = resizeState.startSize.width
        let newHeight = resizeState.startSize.height
        let newX = resizeState.startWindowPos.x
        let newY = resizeState.startWindowPos.y

        // Handle horizontal resizing
        if (resizeState.direction.includes("right")) {
          newWidth = Math.max(resizeState.startSize.width + deltaX, 200)
        }
        if (resizeState.direction.includes("left")) {
          const proposedWidth = resizeState.startSize.width - deltaX
          if (proposedWidth >= 200) {
            newWidth = proposedWidth
            newX = resizeState.startWindowPos.x + deltaX
          } else {
            newWidth = 200
            newX = resizeState.startWindowPos.x + (resizeState.startSize.width - 200)
          }
        }

        // Handle vertical resizing
        if (resizeState.direction.includes("bottom")) {
          newHeight = Math.max(resizeState.startSize.height + deltaY, 100)
        }
        if (resizeState.direction.includes("top")) {
          const proposedHeight = resizeState.startSize.height - deltaY
          if (proposedHeight >= 100) {
            newHeight = proposedHeight
            newY = resizeState.startWindowPos.y + deltaY
          } else {
            newHeight = 100
            newY = resizeState.startWindowPos.y + (resizeState.startSize.height - 100)
          }
        }

        setSize({ width: newWidth, height: newHeight })
        setPosition({ x: newX, y: newY })
        setDebugInfo(
          `Resizing - Direction: ${resizeState.direction}, Width: ${newWidth}, Height: ${newHeight}, X: ${newX}, Y: ${newY}`,
        )
      }
    },
    [isDragging, resizeState],
  )

  // Mouse up handler
  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false)
      setDebugInfo("")
    }
    if (resizeState.isResizing) {
      setResizeState({
        isResizing: false,
        direction: null,
        startPos: { x: 0, y: 0 },
        startSize: { width: 0, height: 0 },
        startWindowPos: { x: 0, y: 0 },
      })
      setDebugInfo("")
    }
  }, [isDragging, resizeState.isResizing])

  // Global mouse event handlers
  useEffect(() => {
    if (isDragging || resizeState.isResizing) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, resizeState.isResizing, handleMouseMove, handleMouseUp])

  return (
    <div
      ref={nodeRef}
      className={cn(
        "window font-sans border border-black",
        variant === "dark" ? "bg-black text-white" : "bg-white text-black",
        className,
      )}
      style={{
        position: "fixed",
        zIndex,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        cursor: isDragging ? "grabbing" : "default",
        imageRendering: "pixelated",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      }}
      onMouseDown={handleDragMouseDown}
      onClick={bringToFront}
    >
      <div className="window-header h-8 flex items-center justify-between px-2 border-b border-black bg-gray-100 text-black">
        <span className="text-xs font-sans truncate">/{title}</span>
        <div className="flex gap-2">
          <button onClick={() => setIsMinimized(!isMinimized)} className="hover:bg-gray-200 p-1 transition-colors">
            <Minus className="h-3 w-3" />
          </button>
          {onClose && (
            <button onClick={onClose} className="hover:bg-gray-200 p-1 transition-colors">
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
      <div
        className={cn(
          "p-4",
          variant === "dark" ? "bg-black text-white" : "bg-white text-black",
          isMinimized ? "hidden" : "",
        )}
        style={{ height: "calc(100% - 2rem)", overflow: "auto" }}
      >
        {children}
      </div>
      
      {/* Resize handles */}
      <div
        className="absolute top-0 left-0 w-2 h-full cursor-ew-resize hover:bg-blue-200 hover:bg-opacity-30 transition-colors"
        onMouseDown={(e) => handleResizeMouseDown(e, "left")}
      />
      <div
        className="absolute top-0 right-0 w-2 h-full cursor-ew-resize hover:bg-blue-200 hover:bg-opacity-30 transition-colors"
        onMouseDown={(e) => handleResizeMouseDown(e, "right")}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-2 cursor-ns-resize hover:bg-blue-200 hover:bg-opacity-30 transition-colors"
        onMouseDown={(e) => handleResizeMouseDown(e, "bottom")}
      />
      <div
        className="absolute top-0 left-0 w-full h-2 cursor-ns-resize hover:bg-blue-200 hover:bg-opacity-30 transition-colors"
        onMouseDown={(e) => handleResizeMouseDown(e, "top")}
      />
      <div
        className="absolute top-0 left-0 w-2 h-2 cursor-nwse-resize hover:bg-blue-200 hover:bg-opacity-50 transition-colors"
        onMouseDown={(e) => handleResizeMouseDown(e, "top-left")}
      />
      <div
        className="absolute top-0 right-0 w-2 h-2 cursor-nesw-resize hover:bg-blue-200 hover:bg-opacity-50 transition-colors"
        onMouseDown={(e) => handleResizeMouseDown(e, "top-right")}
      />
      <div
        className="absolute bottom-0 left-0 w-2 h-2 cursor-nesw-resize hover:bg-blue-200 hover:bg-opacity-50 transition-colors"
        onMouseDown={(e) => handleResizeMouseDown(e, "bottom-left")}
      />
      <div
        className="absolute bottom-0 right-0 w-2 h-2 cursor-nwse-resize hover:bg-blue-200 hover:bg-opacity-50 transition-colors"
        onMouseDown={(e) => handleResizeMouseDown(e, "bottom-right")}
      />
      
      {/* Debug information */}
      {debugInfo && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-xs p-1 z-50">
          {debugInfo}
        </div>
      )}
    </div>
  )
}
