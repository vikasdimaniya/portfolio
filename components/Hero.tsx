"use client"

import { forwardRef } from "react"
import Window, { WindowRef } from "./Window"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

const Hero = forwardRef<WindowRef>((props, ref) => {
  return (
    <Window 
      ref={ref}
      title="vikas.exe" 
      defaultPosition={{ x: 50, y: 50 }} 
      autoSize={true}
      maxWidth={500}
      minWidth={300}
    >
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">VIKAS KUMAR</h1>
        <p className="text-sm text-gray-600">SOFTWARE ENGINEER | AI ENTHUSIAST</p>
        <div className="grid gap-4">
          <a href="mailto:kumar3s@uwindsor.ca" className="pixel-button flex items-center gap-2">
            <FaEnvelope /> EMAIL ME
          </a>
          <a
            href="https://linkedin.com/in/vikasdimaniya"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button flex items-center gap-2"
          >
            <FaLinkedin /> LINKEDIN
          </a>
          <a
            href="https://github.com/vikasdimaniya"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button flex items-center gap-2"
          >
            <FaGithub /> GITHUB
          </a>
        </div>
      </div>
    </Window>
  )
})

Hero.displayName = "Hero"

export default Hero
