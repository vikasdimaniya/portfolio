"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from "react"
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
  onMinimize?: () => void
  variant?: "light" | "dark"
  autoSize?: boolean
  maxWidth?: number
  maxHeight?: number
  minWidth?: number
  minHeight?: number
}

export interface WindowRef {
  bringToFront: () => void
}

const TITLE_BAR_HEIGHT = 32
const DEFAULT_PADDING = 32 // 16px padding on each side
const DEFAULT_MAX_WIDTH = 800
const DEFAULT_MAX_HEIGHT = 600
const DEFAULT_MIN_WIDTH = 300
const DEFAULT_MIN_HEIGHT = 200

const Window = forwardRef<WindowRef, WindowProps>(({
  title,
  children,
  className = "",
  defaultPosition = { x: 0, y: 0 },
  onClose,
  onMinimize,
  variant = "light",
  autoSize = true,
  maxWidth = DEFAULT_MAX_WIDTH,
  maxHeight = DEFAULT_MAX_HEIGHT,
  minWidth = DEFAULT_MIN_WIDTH,
  minHeight = DEFAULT_MIN_HEIGHT,
}, ref) => {
  const [isMinimized, setIsMinimized] = useState(false)
  const [originalSize, setOriginalSize] = useState({ width: 400, height: 300 })
  const [hasAutoSized, setHasAutoSized] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const nodeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const lastDragPositionRef = useRef(defaultPosition)
  const initializationTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const { zIndex, bringToFront } = useWindowZIndex(10)
  const drag = useWindowDrag(defaultPosition, bringToFront)
  const resize = useWindowResize({ width: 400, height: 300 }, defaultPosition)

  // Expose bringToFront method through ref
  useImperativeHandle(ref, () => ({
    bringToFront
  }), [bringToFront])

  // Auto-size the window to fit content
  const autoSizeWindow = useCallback(() => {
    if (!autoSize || !contentRef.current || hasAutoSized || isMinimized) return

    try {
      // Get viewport dimensions for constraints
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      
      // Temporarily set content to auto sizing to measure
      const originalOverflow = contentRef.current.style.overflow
      contentRef.current.style.overflow = 'visible'
      
      // Measure the actual content
      const scrollWidth = contentRef.current.scrollWidth
      const scrollHeight = contentRef.current.scrollHeight
      
      // Calculate required dimensions with padding
      const requiredWidth = Math.max(scrollWidth + DEFAULT_PADDING, minWidth)
      const requiredHeight = Math.max(scrollHeight + TITLE_BAR_HEIGHT + 16, minHeight) // 16px extra for padding
      
      // Apply constraints
      const finalWidth = Math.min(requiredWidth, Math.min(maxWidth, viewportWidth - 40))
      const finalHeight = Math.min(requiredHeight, Math.min(maxHeight, viewportHeight - 40))
      
      // Restore original overflow
      contentRef.current.style.overflow = originalOverflow
      
      // Update size
      resize.setSize({ width: finalWidth, height: finalHeight })
      setOriginalSize({ width: finalWidth, height: finalHeight })
      setHasAutoSized(true)
      
    } catch (error) {
      console.warn('Auto-sizing failed:', error)
      // Fallback to default size
      resize.setSize({ width: minWidth, height: minHeight })
      setOriginalSize({ width: minWidth, height: minHeight })
      setHasAutoSized(true)
    }
  }, [autoSize, hasAutoSized, isMinimized, maxWidth, maxHeight, minWidth, minHeight, resize])

  // Handle minimize/restore
  const handleMinimize = useCallback(() => {
    if (onMinimize) {
      // Use external minimize handler for proper dock integration
      onMinimize()
    } else {
      // Fallback to internal minimize behavior
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
    }
  }, [isMinimized, originalSize, resize, onMinimize])

  // Initialize window after mount (client-side only)
  useEffect(() => {
    if (isInitialized) return

    // Clear any existing timeout
    if (initializationTimeoutRef.current) {
      clearTimeout(initializationTimeoutRef.current)
    }

    // Initialize after a small delay to ensure DOM is ready
    initializationTimeoutRef.current = setTimeout(() => {
      // Bring to front
      bringToFront()
      
      // Auto-size if enabled
      if (autoSize && !hasAutoSized) {
        autoSizeWindow()
      }
      
      // Mark as initialized
      setIsInitialized(true)
    }, 100)

    return () => {
      if (initializationTimeoutRef.current) {
        clearTimeout(initializationTimeoutRef.current)
      }
    }
  }, [isInitialized, autoSize, hasAutoSized, autoSizeWindow, bringToFront])

  // Update resize position when drag position changes (but only when not resizing)
  useEffect(() => {
    if (!resize.isResizing && 
        (drag.position.x !== lastDragPositionRef.current.x || 
         drag.position.y !== lastDragPositionRef.current.y)) {
      resize.setPosition(drag.position)
      lastDragPositionRef.current = drag.position
      }
  }, [drag.position.x, drag.position.y, resize.isResizing, resize.setPosition])

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
  }, [
    drag.isDragging, 
    resize.isResizing, 
    drag.handleMouseMove, 
    drag.handleMouseUp, 
    resize.handleMouseMove, 
    resize.handleMouseUp
  ])

  // Use drag position when dragging, resize position when resizing
  const currentPosition = resize.isResizing ? resize.position : drag.position
  const currentSize = resize.size

  return (
    <div
      ref={nodeRef}
      className={cn(
        "window font-sans select-none rounded-xl overflow-hidden",
        !isInitialized ? "opacity-0" : "opacity-100 transition-opacity duration-200",
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
        background: variant === "dark" 
          ? 'linear-gradient(to bottom, rgba(30, 30, 30, 0.6), rgba(20, 20, 20, 0.55))'
          : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(245, 245, 245, 0.55))',
        backdropFilter: 'blur(60px) saturate(200%)',
        WebkitBackdropFilter: 'blur(60px) saturate(200%)',
        border: variant === "dark" 
          ? '1px solid rgba(255, 255, 255, 0.15)' 
          : '1px solid rgba(0, 0, 0, 0.15)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset',
      }}
      onMouseDown={drag.handleMouseDown}
      onClick={bringToFront}
      suppressHydrationWarning={true}
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
            "p-4 select-text mx-2 mb-2 rounded-lg",
          variant === "dark" ? "text-white dark-scrollbar" : "text-black light-scrollbar",
        )}
          style={{ 
            height: `calc(100% - ${TITLE_BAR_HEIGHT}px - 8px)`, 
            overflow: "auto",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            hyphens: "auto",
            background: variant === "dark"
              ? 'rgba(40, 40, 40, 0.92)'
              : 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
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
})

Window.displayName = "Window"

export default Window
