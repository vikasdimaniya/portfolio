"use client"

import { useState, useEffect } from "react"

interface TopMenuProps {
  onMenuClick: (section: string) => void
}

export default function TopMenu({ onMenuClick }: TopMenuProps) {
  const [currentTime, setCurrentTime] = useState("")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleString("en-US", {
          weekday: "short",
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      )
    }

    // Set initial time
    updateTime()

    // Update time every second
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 bg-black text-white p-2 flex justify-between items-center z-50 font-sans">
      <div className="flex items-center gap-8">
        <span className="text-lg font-bold">VIKAS</span>
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
      <div className="text-xs" suppressHydrationWarning={true}>
        {isMounted ? currentTime : ""}
      </div>
    </div>
  )
}
