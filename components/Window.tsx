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

export default function Window({
  title,
  children,
  className = "",
  defaultPosition = { x: 0, y: 0 },
  onClose,
  variant = "light",
}: WindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [zIndex, setZIndex] = useState(10)
  const [position, setPosition] = useState(defaultPosition)
  const [size, setSize] = useState({ width: 400, height: 300 })
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [resizeDirection, setResizeDirection] = useState<string | null>(null)
  const nodeRef = useRef<HTMLDivElement>(null)
  const startPosRef = useRef({ x: 0, y: 0 })
  const startSizeRef = useRef({ width: 0, height: 0 })
  const [debugInfo, setDebugInfo] = useState<string>("")

  const bringToFront = useCallback(() => {
    setZIndex((prevZIndex) => Math.max(prevZIndex, getHighestZIndex() + 1))
  }, [])

  const getHighestZIndex = () => {
    return Math.max(
      ...Array.from(document.querySelectorAll(".window")).map(
        (el) => Number.parseInt(getComputedStyle(el).zIndex, 10) || 0,
      ),
    )
  }

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target instanceof HTMLElement && e.target.closest(".window-header")) {
        setIsDragging(true)
        bringToFront()
        startPosRef.current = { x: e.clientX - position.x, y: e.clientY - position.y }
      }
    },
    [position.x, position.y, bringToFront],
  )

  const handleResizeMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, direction: string) => {
      e.stopPropagation()
      setIsResizing(true)
      setResizeDirection(direction)
      startPosRef.current = { x: e.clientX, y: e.clientY }
      startSizeRef.current = { width: size.width, height: size.height }
    },
    [size.width, size.height],
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - startPosRef.current.x
        const newY = e.clientY - startPosRef.current.y
        setPosition({ x: newX, y: newY })
        setDebugInfo(`Dragging - X: ${newX}, Y: ${newY}`)
      } else if (isResizing) {
        const deltaX = e.clientX - startPosRef.current.x
        const deltaY = e.clientY - startPosRef.current.y

        let newWidth = startSizeRef.current.width
        let newHeight = startSizeRef.current.height
        let newX = position.x
        let newY = position.y

        if (resizeDirection?.includes("right")) {
          newWidth += deltaX
        }
        if (resizeDirection?.includes("bottom")) {
          newHeight += deltaY
        }
        if (resizeDirection?.includes("left")) {
          newWidth -= deltaX
          newX += deltaX
        }
        if (resizeDirection?.includes("top")) {
          newHeight -= deltaY
          newY += deltaY
        }

        // Ensure minimum size
        newWidth = Math.max(newWidth, 200)
        newHeight = Math.max(newHeight, 100)

        setSize({ width: newWidth, height: newHeight })
        setPosition({ x: newX, y: newY })
        setDebugInfo(
          `Resizing - Direction: ${resizeDirection}, Width: ${newWidth}, Height: ${newHeight}, X: ${newX}, Y: ${newY}`,
        )
      }
    },
    [isDragging, isResizing, resizeDirection, position.x, position.y],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setIsResizing(false)
    setResizeDirection(null)
  }, [])

  useEffect(() => {
    if (isDragging || isResizing) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, isResizing, handleMouseMove, handleMouseUp])

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
      onMouseDown={handleMouseDown}
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
        className="absolute top-0 left-0 w-2 h-full cursor-ew-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, "left")}
      />
      <div
        className="absolute top-0 right-0 w-2 h-full cursor-ew-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, "right")}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-2 cursor-ns-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, "bottom")}
      />
      <div
        className="absolute top-0 left-0 w-full h-2 cursor-ns-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, "top")}
      />
      <div
        className="absolute top-0 left-0 w-2 h-2 cursor-nwse-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, "top-left")}
      />
      <div
        className="absolute top-0 right-0 w-2 h-2 cursor-nesw-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, "top-right")}
      />
      <div
        className="absolute bottom-0 left-0 w-2 h-2 cursor-nesw-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, "bottom-left")}
      />
      <div
        className="absolute bottom-0 right-0 w-2 h-2 cursor-nwse-resize"
        onMouseDown={(e) => handleResizeMouseDown(e, "bottom-right")}
      />
      {/* Debug information */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">{debugInfo}</div>
    </div>
  )
}
