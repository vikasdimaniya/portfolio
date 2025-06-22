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
      
      {/* Windows - Interactive Layer */}
      <div className="relative z-30">
        {openWindows.includes("hero") && (
          <Hero 
            ref={(ref) => { windowRefs.current["hero"] = ref }}
          />
        )}
        
        {openWindows.includes("about") && (
          <Hero 
            ref={(ref) => { windowRefs.current["about"] = ref }}
          />
        )}
        
        {openWindows.includes("experience") && (
          <Experience 
            defaultPosition={getWindowPosition(openWindows.indexOf("experience"))}
            ref={(ref) => { windowRefs.current["experience"] = ref }}
          />
        )}
        
        {openWindows.includes("education") && (
          <Education 
            defaultPosition={getWindowPosition(openWindows.indexOf("education"))}
            ref={(ref) => { windowRefs.current["education"] = ref }}
          />
        )}
        
        {openWindows.includes("projects") && (
          <Projects 
            defaultPosition={getWindowPosition(openWindows.indexOf("projects"))}
            selectedCategory={selectedCategory}
            onClearFilter={() => setSelectedCategory(null)}
            ref={(ref) => { windowRefs.current["projects"] = ref }}
          />
        )}
        
        {openWindows.includes("skills") && (
          <Skills 
            defaultPosition={getWindowPosition(openWindows.indexOf("skills"))}
            ref={(ref) => { windowRefs.current["skills"] = ref }}
          />
        )}
        
        {openWindows.includes("links") && (
          <Links 
            defaultPosition={getWindowPosition(openWindows.indexOf("links"))}
            ref={(ref) => { windowRefs.current["links"] = ref }}
          />
        )}
        
        {openWindows.includes("certifications") && (
          <Certifications 
            defaultPosition={getWindowPosition(openWindows.indexOf("certifications"))}
            ref={(ref) => { windowRefs.current["certifications"] = ref }}
          />
        )}
      </div>
    </div>
  )
}
