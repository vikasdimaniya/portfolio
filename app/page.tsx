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
    <div className="min-h-screen bg-gray-100">
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
