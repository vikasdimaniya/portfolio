"use client"

interface TopMenuProps {
  onMenuClick: (section: string) => void
}

export default function TopMenu({ onMenuClick }: TopMenuProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-black text-white p-2 flex justify-between items-center z-50 font-sans">
      <div className="flex items-center gap-8">
        <span className="text-lg font-bold">VIKAS.DEV</span>
        <nav className="flex gap-6">
          {["About", "Experience", "Education", "Projects", "Skills", "Links"].map((item) => (
            <button
              key={item}
              onClick={() => onMenuClick(item.toLowerCase())}
              className="hover:text-gray-300 transition-colors text-xs uppercase font-medium"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
      <div className="text-xs">
        {new Date().toLocaleString("en-US", {
          weekday: "short",
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })}
      </div>
    </div>
  )
}
