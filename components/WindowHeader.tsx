import { Minus, X } from "lucide-react"

interface WindowHeaderProps {
  title: string
  isMinimized: boolean
  onMinimize: () => void
  onClose?: () => void
}

export default function WindowHeader({ title, isMinimized, onMinimize, onClose }: WindowHeaderProps) {
  return (
    <div 
      className="window-header h-8 flex items-center justify-between px-3 select-none"
      style={{
        background: 'transparent',
      }}
    >
      <div className="flex items-center gap-2">
        {/* macOS Traffic Light Buttons */}
        <div className="flex gap-2">
          {onClose && (
            <button 
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 transition-colors group relative"
              title="Close"
            >
              <X className="h-2 w-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
            </button>
          )}
          <button 
            onClick={onMinimize}
            className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80 transition-colors group relative"
            title={isMinimized ? "Restore" : "Minimize"}
          >
            <Minus className="h-2 w-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#995700] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
          </button>
          <button 
            className="w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/80 transition-colors"
            title="Maximize"
          >
          </button>
        </div>
        <span className="text-xs font-sans truncate pointer-events-none text-white/90 font-medium ml-2">/{title}</span>
      </div>
    </div>
  )
} 