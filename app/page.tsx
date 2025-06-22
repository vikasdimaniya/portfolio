"use client"

import { useState, useRef, useEffect } from "react"
import TopMenu from "@/components/TopMenu"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Links from "@/components/Links"
import Certifications from "@/components/Certifications"
import { WindowRef } from "@/components/Window"

// Widget Components
const GitHubWidget = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center">
        <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
        <span className="text-white font-medium text-sm">GitHub</span>
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-white/80 text-xs">Repositories</span>
        <span className="text-white font-semibold text-sm">42</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-white/80 text-xs">Stars</span>
        <span className="text-yellow-400 font-semibold text-sm">37</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-white/80 text-xs">Followers</span>
        <span className="text-green-400 font-semibold text-sm">6</span>
      </div>
    </div>
  </div>
)



const CalendarWidget = () => {
  const today = new Date()
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()
  const dayNumber = today.getDate()
  
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
      <div className="text-center">
        <div className="text-red-400 text-xs font-medium mb-1">{dayName}</div>
        <div className="text-white text-3xl font-light mb-2">{dayNumber}</div>
        <div className="text-white/70 text-xs">Active development</div>
      </div>
    </div>
  )
}





const TimeWidget = () => {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
      <div className="text-center">
        <div className="text-white/80 text-xs mb-1">Local Time</div>
        <div className="text-white text-lg font-mono">
          {time.toLocaleTimeString('en-US', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
        <div className="text-white/70 text-xs mt-1">EST</div>
      </div>
    </div>
  )
}

const ProjectsStatsWidget = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
    <div className="text-white text-sm font-medium mb-3">Projects</div>
    <div className="grid grid-cols-2 gap-3">
      <div className="text-center">
        <div className="text-white text-lg font-semibold">10</div>
        <div className="text-white/70 text-xs">Featured</div>
      </div>
      <div className="text-center">
        <div className="text-white text-lg font-semibold">5</div>
        <div className="text-white/70 text-xs">Categories</div>
      </div>
    </div>
  </div>
)

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>(["hero"])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const windowRefs = useRef<Record<string, WindowRef | null>>({})

  const handleMenuClick = (section: string) => {
    if (openWindows.includes(section)) {
      // Window is already open, bring it to front
      const windowRef = windowRefs.current[section]
      if (windowRef && windowRef.bringToFront) {
        windowRef.bringToFront()
      }
    } else {
      // Window is not open, open it
      setOpenWindows([...openWindows, section])
    }
  }

  const handleCloseWindow = (section: string) => {
    setOpenWindows(openWindows.filter(window => window !== section))
    // Clean up the ref
    if (windowRefs.current[section]) {
      windowRefs.current[section] = null
    }
  }

  const getWindowPosition = (index: number) => {
    const offset = index * 30
    return { x: 50 + offset, y: 80 + offset }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Animated background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-purple-300/10 rounded-full blur-lg"></div>
      <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-300/5 rounded-full blur-2xl"></div>
      
      {/* Widget Grid - Right Side Layout */}
      <div className="absolute top-16 right-4 w-72 pointer-events-none">
        <div className="grid grid-cols-2 gap-2">
          {/* Top row */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 shadow-lg">
            <div className="text-center">
              <div className="text-red-400 text-xs font-medium mb-1">SUNDAY</div>
              <div className="text-white text-xl font-light mb-1">22</div>
              <div className="text-white/70 text-xs">Active development</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 shadow-lg">
            <div className="text-center">
              <div className="text-white/80 text-xs mb-1">Local Time</div>
              <div className="text-white text-sm font-mono">
                {new Date().toLocaleTimeString('en-US', { 
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
              <div className="text-white/70 text-xs mt-1">EST</div>
            </div>
          </div>
          
          {/* Bottom row */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 shadow-lg">
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 text-white mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-white font-medium text-xs">GitHub</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-xs">Repos</span>
                <span className="text-white font-semibold text-xs">42</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-xs">Stars</span>
                <span className="text-yellow-400 font-semibold text-xs">37</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-xs">Followers</span>
                <span className="text-green-400 font-semibold text-xs">6</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 shadow-lg">
            <div className="text-white text-xs font-medium mb-2">Projects</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center">
                <div className="text-white text-sm font-semibold">10</div>
                <div className="text-white/70 text-xs">Featured</div>
              </div>
              <div className="text-center">
                <div className="text-white text-sm font-semibold">5</div>
                <div className="text-white/70 text-xs">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Centered hero content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="text-center">
          {/* Code icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 text-white text-4xl font-bold">
              <span className="transform -rotate-12">&lt;</span>
              <span className="mx-2">/</span>
              <span className="transform rotate-12">&gt;</span>
            </div>
          </div>
          
          {/* Main title */}
          <h1 className="text-6xl font-bold text-white mb-12 tracking-wider drop-shadow-lg">
            SOFTWARE<br/>ENGINEER
          </h1>
          
          {/* Skill badges */}
          <div className="flex gap-6 justify-center">
            <div className="glass-badge">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/60"></div>
                </div>
                <span className="text-white font-semibold">AI</span>
              </div>
            </div>
            
            <div className="glass-badge">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="flex gap-1">
                    <div className="w-1 h-6 bg-white/60 rounded-sm"></div>
                    <div className="w-1 h-4 bg-white/60 rounded-sm mt-2"></div>
                    <div className="w-1 h-5 bg-white/60 rounded-sm mt-1"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">
                  <div>Data</div>
                  <div className="text-sm opacity-80">Science</div>
                </div>
              </div>
            </div>
            
            <div className="glass-badge">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-white/60"></div>
                </div>
                <div className="text-white font-semibold">
                  <div>AI</div>
                  <div className="text-sm opacity-80">Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top Menu - Interactive Layer */}
      <div className="relative z-40">
        <TopMenu 
          onMenuClick={handleMenuClick} 
          onCategoryFilter={setSelectedCategory}
        />
      </div>
      
      {/* Dock - macOS Style */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl px-3 py-2">
          <div className="flex items-center gap-1">
            {/* Finder Icon */}
            <div className="w-12 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.06 9 9.93 5.16-.87 9-4.38 9-9.93V7l-10-5z"/>
              </svg>
            </div>

            {/* Separator */}
            <div className="w-px h-8 bg-white/20 mx-1"></div>

            {/* Open Windows */}
            {openWindows.map((window, index) => {
              const windowIcons = {
                hero: { icon: "👋", color: "from-purple-400 to-purple-600", label: "About" },
                about: { icon: "👋", color: "from-purple-400 to-purple-600", label: "About" },
                experience: { icon: "💼", color: "from-green-400 to-green-600", label: "Experience" },
                education: { icon: "🎓", color: "from-blue-400 to-blue-600", label: "Education" },
                projects: { icon: "🚀", color: "from-orange-400 to-orange-600", label: "Projects" },
                skills: { icon: "⚡", color: "from-yellow-400 to-yellow-600", label: "Skills" },
                links: { icon: "🔗", color: "from-cyan-400 to-cyan-600", label: "Links" },
                certifications: { icon: "🏆", color: "from-red-400 to-red-600", label: "Certifications" }
              }

              const windowData = windowIcons[window as keyof typeof windowIcons]
              if (!windowData) return null

              return (
                <div key={window} className="relative group">
                  <div 
                    className={`w-12 h-12 bg-gradient-to-b ${windowData.color} rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200 relative`}
                    onClick={() => handleMenuClick(window)}
                  >
                    <span className="text-xl">{windowData.icon}</span>
                    {/* Active indicator dot */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    {windowData.label}
                  </div>
                </div>
              )
            })}

            {/* Separator */}
            <div className="w-px h-8 bg-white/20 mx-1"></div>

            {/* Trash */}
            <div className="w-12 h-12 bg-gradient-to-b from-gray-400 to-gray-600 rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Windows - Interactive Layer */}
      <div className="relative z-30">
        {openWindows.includes("hero") && (
          <Hero 
            onClose={() => handleCloseWindow("hero")}
            ref={(ref) => { windowRefs.current["hero"] = ref }}
          />
        )}
        
        {openWindows.includes("about") && (
          <Hero 
            onClose={() => handleCloseWindow("about")}
            ref={(ref) => { windowRefs.current["about"] = ref }}
          />
        )}
        
        {openWindows.includes("experience") && (
          <Experience 
            defaultPosition={getWindowPosition(openWindows.indexOf("experience"))}
            onClose={() => handleCloseWindow("experience")}
            ref={(ref) => { windowRefs.current["experience"] = ref }}
          />
        )}
        
        {openWindows.includes("education") && (
          <Education 
            defaultPosition={getWindowPosition(openWindows.indexOf("education"))}
            onClose={() => handleCloseWindow("education")}
            ref={(ref) => { windowRefs.current["education"] = ref }}
          />
        )}
        
        {openWindows.includes("projects") && (
          <Projects 
            defaultPosition={getWindowPosition(openWindows.indexOf("projects"))}
            selectedCategory={selectedCategory}
            onClearFilter={() => setSelectedCategory(null)}
            onClose={() => handleCloseWindow("projects")}
            ref={(ref) => { windowRefs.current["projects"] = ref }}
          />
        )}
        
        {openWindows.includes("skills") && (
          <Skills 
            defaultPosition={getWindowPosition(openWindows.indexOf("skills"))}
            onClose={() => handleCloseWindow("skills")}
            ref={(ref) => { windowRefs.current["skills"] = ref }}
          />
        )}
        
        {openWindows.includes("links") && (
          <Links 
            defaultPosition={getWindowPosition(openWindows.indexOf("links"))}
            onClose={() => handleCloseWindow("links")}
            ref={(ref) => { windowRefs.current["links"] = ref }}
          />
        )}
        
        {openWindows.includes("certifications") && (
          <Certifications 
            defaultPosition={getWindowPosition(openWindows.indexOf("certifications"))}
            onClose={() => handleCloseWindow("certifications")}
            ref={(ref) => { windowRefs.current["certifications"] = ref }}
          />
        )}
      </div>
    </div>
  )
}
