"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import { useWindowDrag } from "./hooks/useWindowDrag"
import { useWindowResize } from "./hooks/useWindowResize"
import { useWindowZIndex } from "./hooks/useWindowZIndex"
import WindowHeader from "./WindowHeader"
import ResizeHandles from "./ResizeHandles"

interface WindowProps {
  title: string
  children: React.ReactNode
  className?: string
  defaultPosition?: { x: number; y: number }
  onClose?: () => void
  variant?: "light" | "dark"
  autoSize?: boolean
  maxWidth?: number
  maxHeight?: number
  minWidth?: number
  minHeight?: number
}

const TITLE_BAR_HEIGHT = 32
const DEFAULT_PADDING = 32 // 16px padding on each side
const DEFAULT_MAX_WIDTH = 800
const DEFAULT_MAX_HEIGHT = 600
const DEFAULT_MIN_WIDTH = 300
const DEFAULT_MIN_HEIGHT = 200

export default function Window({
  title,
  children,
  className = "",
  defaultPosition = { x: 0, y: 0 },
  onClose,
  variant = "light",
  autoSize = true,
  maxWidth = DEFAULT_MAX_WIDTH,
  maxHeight = DEFAULT_MAX_HEIGHT,
  minWidth = DEFAULT_MIN_WIDTH,
  minHeight = DEFAULT_MIN_HEIGHT,
}: WindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [originalSize, setOriginalSize] = useState({ width: 400, height: 300 })
  const [hasAutoSized, setHasAutoSized] = useState(false)
  const nodeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const lastDragPositionRef = useRef(defaultPosition)

  const { zIndex, bringToFront } = useWindowZIndex()
  const drag = useWindowDrag(defaultPosition, bringToFront)
  const resize = useWindowResize({ width: 400, height: 300 }, defaultPosition)

  // Auto-size the window to fit content
  const autoSizeWindow = useCallback(() => {
    if (!autoSize || !contentRef.current || hasAutoSized || isMinimized) return

    // Create a temporary element to measure content
    const tempDiv = document.createElement('div')
    tempDiv.style.position = 'absolute'
    tempDiv.style.visibility = 'hidden'
    tempDiv.style.pointerEvents = 'none'
    tempDiv.style.width = 'auto'
    tempDiv.style.height = 'auto'
    tempDiv.style.padding = '16px' // Match the content padding
    tempDiv.style.fontFamily = getComputedStyle(contentRef.current).fontFamily
    tempDiv.style.fontSize = getComputedStyle(contentRef.current).fontSize
    tempDiv.style.lineHeight = getComputedStyle(contentRef.current).lineHeight
    
    // Clone the content
    tempDiv.innerHTML = contentRef.current.innerHTML
    document.body.appendChild(tempDiv)

    // Get the natural dimensions
    const contentWidth = tempDiv.scrollWidth
    const contentHeight = tempDiv.scrollHeight

    // Clean up
    document.body.removeChild(tempDiv)

    // Calculate window dimensions
    const windowWidth = Math.min(Math.max(contentWidth, minWidth), maxWidth)
    const windowHeight = Math.min(Math.max(contentHeight + TITLE_BAR_HEIGHT, minHeight), maxHeight)

    // Update size
    resize.setSize({ width: windowWidth, height: windowHeight })
    setOriginalSize({ width: windowWidth, height: windowHeight })
    setHasAutoSized(true)
  }, [autoSize, hasAutoSized, isMinimized, maxWidth, maxHeight, minWidth, minHeight, resize])

  // Auto-size when content changes or component mounts
  useEffect(() => {
    if (autoSize && !hasAutoSized && !isMinimized) {
      // Use a small delay to ensure content is rendered
      const timer = setTimeout(autoSizeWindow, 100)
      return () => clearTimeout(timer)
    }
  }, [autoSizeWindow, autoSize, hasAutoSized, isMinimized])

  // Handle minimize/restore
  const handleMinimize = useCallback(() => {
    if (isMinimized) {
      // Restore window
      resize.setSize(originalSize)
      setIsMinimized(false)
    } else {
      // Minimize window - store current size and collapse to title bar
      setOriginalSize(resize.size)
      resize.setSize({ width: resize.size.width, height: TITLE_BAR_HEIGHT })
      setIsMinimized(true)
    }
  }, [isMinimized, resize.size, originalSize, resize])

  // Update resize position when drag position changes (but only when not resizing)
  useEffect(() => {
    if (!resize.isResizing && 
        (drag.position.x !== lastDragPositionRef.current.x || 
         drag.position.y !== lastDragPositionRef.current.y)) {
      resize.setPosition(drag.position)
      lastDragPositionRef.current = drag.position
    }
  }, [drag.position, resize.isResizing, resize])

  // Update original size when resizing (for proper restore)
  useEffect(() => {
    if (resize.isResizing && !isMinimized) {
      setOriginalSize(resize.size)
    }
  }, [resize.size, resize.isResizing, isMinimized])

  // Global mouse event handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      drag.handleMouseMove(e)
      resize.handleMouseMove(e)
    }

    const handleMouseUp = () => {
      drag.handleMouseUp()
      resize.handleMouseUp()
    }

    if (drag.isDragging || resize.isResizing) {
      document.addEventListener("mousemove", handleMouseMove, { passive: false })
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [drag.isDragging, resize.isResizing, drag.handleMouseMove, drag.handleMouseUp, resize.handleMouseMove, resize.handleMouseUp])

  // Use drag position when dragging, resize position when resizing
  const currentPosition = resize.isResizing ? resize.position : drag.position
  const currentSize = resize.size

  return (
    <div
      ref={nodeRef}
      className={cn(
        "window font-sans border border-black transition-all duration-200 ease-out select-none",
        variant === "dark" ? "bg-black text-white" : "bg-white text-black",
        className,
      )}
      style={{
        position: "fixed",
        zIndex,
        left: `${currentPosition.x}px`,
        top: `${currentPosition.y}px`,
        width: `${currentSize.width}px`,
        height: `${currentSize.height}px`,
        cursor: drag.isDragging ? "grabbing" : "default",
        imageRendering: "pixelated",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      }}
      onMouseDown={drag.handleMouseDown}
      onClick={bringToFront}
    >
      <WindowHeader
        title={title}
        isMinimized={isMinimized}
        onMinimize={handleMinimize}
        onClose={onClose}
      />
      
      {/* Content area - only show when not minimized */}
      {!isMinimized && (
        <div
          ref={contentRef}
          className={cn(
            "p-4 select-text",
            variant === "dark" ? "bg-black text-white" : "bg-white text-black",
          )}
          style={{ 
            height: `calc(100% - ${TITLE_BAR_HEIGHT}px)`, 
            overflow: autoSize && !hasAutoSized ? "visible" : "auto",
            minHeight: autoSize ? "auto" : undefined
          }}
        >
          {children}
        </div>
      )}
      
      {/* Resize handles - only show when not minimized */}
      {!isMinimized && (
        <ResizeHandles onResizeMouseDown={resize.handleResizeMouseDown} />
      )}
    </div>
  )
}
