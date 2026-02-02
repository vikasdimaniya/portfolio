"use client"

import { useState, useEffect, useRef } from "react"

interface TopMenuProps {
  onMenuClick: (section: string) => void
  onCategoryFilter?: (category: string | null) => void
}

interface MenuItem {
  label: string
  action: string
  items?: { label: string; action: string; separator?: boolean; shortcut?: string }[]
}

export default function TopMenu({ onMenuClick, onCategoryFilter }: TopMenuProps) {
  const [currentTime, setCurrentTime] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const menuItems: MenuItem[] = [
    {
      label: "About",
      action: "hero",
      items: [
        { label: "Profile", action: "hero" },
        { label: "Contact & Links", action: "links" }
      ]
    },
    {
      label: "Professional",
      action: "experience",
      items: [
        { label: "Work Experience", action: "experience" },
        { label: "Education", action: "education" },
        { label: "Certifications", action: "certifications" },
        { separator: true, label: "", action: "" },
        { label: "Technical Skills", action: "skills" }
      ]
    },
    {
      label: "Projects",
      action: "projects",
      items: [
        { label: "All Projects", action: "category-all" },
        { separator: true, label: "", action: "" },
        { label: "🤖 AI & Machine Learning", action: "category-ai" },
        { label: "👁️ Computer Vision & Deep Learning", action: "category-cv" },
        { label: "🌐 Web Development & Full-Stack", action: "category-web" },
        { label: "📊 Business Analysis & Case Studies", action: "category-business" },
        { label: "🎮 Gaming & Simulation", action: "category-gaming" }
      ]
    }
  ]

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

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleMenuHover = (menuLabel: string, event: React.MouseEvent) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    const rect = event.currentTarget.getBoundingClientRect()
    setMenuPosition({ x: rect.left, y: rect.bottom })
    setActiveMenu(menuLabel)
  }

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 100)
  }

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleDropdownLeave = () => {
    setActiveMenu(null)
  }

  const handleMenuItemClick = (action: string) => {
    setActiveMenu(null)
    
    // Handle category filtering
    if (action.startsWith('category-')) {
      if (action === 'category-all') {
        onCategoryFilter?.(null)
      } else {
        const categoryMap: { [key: string]: string } = {
          'category-ai': '🤖 AI & Machine Learning',
          'category-cv': '👁️ Computer Vision & Deep Learning',
          'category-web': '🌐 Web Development & Full-Stack',
          'category-business': '📊 Business Analysis & Case Studies',
          'category-gaming': '🎮 Gaming & Simulation'
        }
        onCategoryFilter?.(categoryMap[action])
      }
      // Always open projects when filtering categories
      onMenuClick('projects')
    } else if (action === 'projects') {
      // Clear category filter when clicking "All Projects"
      onCategoryFilter?.(null)
      onMenuClick(action)
    } else {
      onMenuClick(action)
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 text-white px-4 py-1.5 flex justify-between items-center z-50 font-sans border-b border-white/10 shadow-sm" style={{
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(60px) saturate(200%)',
        WebkitBackdropFilter: 'blur(60px) saturate(200%)',
      }}>
        <div className="flex items-center gap-6">
          <span className="text-base font-semibold tracking-wide">VIKAS</span>
          <nav className="flex gap-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onMouseEnter={(e) => handleMenuHover(item.label, e)}
                onMouseLeave={handleMenuLeave}
                onClick={() => onMenuClick(item.action)}
                className="px-2 py-1 hover:bg-gray-600/40 active:bg-gray-500/50 transition-all duration-150 text-sm font-normal rounded-sm select-none"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="text-xs font-mono tabular-nums text-gray-200" suppressHydrationWarning={true}>
          {isMounted ? currentTime : ""}
        </div>
      </div>

      {/* Dropdown Menu */}
      {activeMenu && (
        <div
          ref={menuRef}
          className="fixed z-[60] transition-all duration-200 ease-out transform opacity-100 scale-100"
          style={{
            left: menuPosition.x,
            top: menuPosition.y + 2,
          }}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="bg-gray-200/95 backdrop-blur-md border border-gray-300/60 rounded-lg shadow-2xl py-2 min-w-[240px] text-gray-800 overflow-hidden">
            {menuItems
              .find(item => item.label === activeMenu)
              ?.items?.map((subItem, index) => (
                subItem.separator ? (
                  <div key={index} className="h-px bg-gray-300 my-2 mx-0" />
                ) : (
                  <button
                    key={index}
                    onClick={() => handleMenuItemClick(subItem.action)}
                    className="w-full text-left px-5 py-2 text-sm hover:bg-blue-500 hover:text-white transition-all duration-100 flex items-center justify-between group font-normal"
                  >
                    <span className="truncate text-gray-800 group-hover:text-white">{subItem.label}</span>
                    {subItem.shortcut && (
                      <span className="text-xs text-gray-500 group-hover:text-gray-200 ml-4 flex-shrink-0 font-mono">
                        {subItem.shortcut}
                      </span>
                    )}
                  </button>
                )
              ))}
          </div>
        </div>
      )}
    </>
  )
}
