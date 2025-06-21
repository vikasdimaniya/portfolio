"use client"

import { useState, useRef } from "react"
import TopMenu from "@/components/TopMenu"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Links from "@/components/Links"
import { WindowRef } from "@/components/Window"

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>(["hero"])
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
    <div className="min-h-screen bg-blue-400 relative">
      {/* Simple desktop pattern */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
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
          <h1 className="text-6xl font-bold text-white mb-12 tracking-wider">
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
      
      <TopMenu onMenuClick={handleMenuClick} />
      
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
    </div>
  )
}
