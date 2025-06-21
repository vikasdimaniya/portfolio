import { Minus, X } from "lucide-react"

interface WindowHeaderProps {
  title: string
  isMinimized: boolean
  onMinimize: () => void
  onClose?: () => void
}

export default function WindowHeader({ title, isMinimized, onMinimize, onClose }: WindowHeaderProps) {
  return (
    <div className="window-header h-8 flex items-center justify-between px-2 border-b border-black bg-gray-100 text-black select-none">
      <span className="text-xs font-sans truncate pointer-events-none">/{title}</span>
      <div className="flex gap-2">
        <button 
          onClick={onMinimize} 
          className="hover:bg-gray-200 p-1 transition-colors"
          title={isMinimized ? "Restore" : "Minimize"}
        >
          <Minus className="h-3 w-3" />
        </button>
        {onClose && (
          <button onClick={onClose} className="hover:bg-gray-200 p-1 transition-colors">
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    </div>
  )
} 