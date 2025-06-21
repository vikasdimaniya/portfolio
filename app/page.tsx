"use client"

import { useState } from "react"
import TopMenu from "@/components/TopMenu"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Links from "@/components/Links"

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>(["hero"])

  const handleMenuClick = (section: string) => {
    if (!openWindows.includes(section)) {
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
        <Hero />
      )}
      
      {openWindows.includes("about") && (
        <Hero />
      )}
      
      {openWindows.includes("experience") && (
        <Experience 
          defaultPosition={getWindowPosition(openWindows.indexOf("experience"))}
        />
      )}
      
      {openWindows.includes("education") && (
        <Education 
          defaultPosition={getWindowPosition(openWindows.indexOf("education"))}
        />
      )}
      
      {openWindows.includes("projects") && (
        <Projects 
          defaultPosition={getWindowPosition(openWindows.indexOf("projects"))}
        />
      )}
      
      {openWindows.includes("skills") && (
        <Skills defaultPosition={getWindowPosition(openWindows.indexOf("skills"))} />
      )}
      
      {openWindows.includes("links") && (
        <Links 
          defaultPosition={getWindowPosition(openWindows.indexOf("links"))}
        />
      )}
    </div>
  )
}
