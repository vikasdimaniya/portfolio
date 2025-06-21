interface ResizeHandlesProps {
  onResizeMouseDown: (e: React.MouseEvent<HTMLDivElement>, direction: string) => void
}

export default function ResizeHandles({ onResizeMouseDown }: ResizeHandlesProps) {
  const handleStyle = "absolute hover:bg-blue-200 hover:bg-opacity-30 transition-colors"
  
  return (
    <>
      {/* Edge handles */}
      <div
        className={`${handleStyle} top-0 left-0 w-2 h-full cursor-ew-resize`}
        onMouseDown={(e) => onResizeMouseDown(e, "left")}
      />
      <div
        className={`${handleStyle} top-0 right-0 w-2 h-full cursor-ew-resize`}
        onMouseDown={(e) => onResizeMouseDown(e, "right")}
      />
      <div
        className={`${handleStyle} bottom-0 left-0 w-full h-2 cursor-ns-resize`}
        onMouseDown={(e) => onResizeMouseDown(e, "bottom")}
      />
      <div
        className={`${handleStyle} top-0 left-0 w-full h-2 cursor-ns-resize`}
        onMouseDown={(e) => onResizeMouseDown(e, "top")}
      />
      
      {/* Corner handles */}
      <div
        className={`${handleStyle} top-0 left-0 w-2 h-2 cursor-nwse-resize hover:bg-opacity-50`}
        onMouseDown={(e) => onResizeMouseDown(e, "top-left")}
      />
      <div
        className={`${handleStyle} top-0 right-0 w-2 h-2 cursor-nesw-resize hover:bg-opacity-50`}
        onMouseDown={(e) => onResizeMouseDown(e, "top-right")}
      />
      <div
        className={`${handleStyle} bottom-0 left-0 w-2 h-2 cursor-nesw-resize hover:bg-opacity-50`}
        onMouseDown={(e) => onResizeMouseDown(e, "bottom-left")}
      />
      <div
        className={`${handleStyle} bottom-0 right-0 w-2 h-2 cursor-nwse-resize hover:bg-opacity-50`}
        onMouseDown={(e) => onResizeMouseDown(e, "bottom-right")}
      />
    </>
  )
} 