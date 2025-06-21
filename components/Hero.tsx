"use client"

import Window from "./Window"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Hero() {
  return (
    <Window title="vikas.exe" defaultPosition={{ x: 20, y: 20 }} className="w-[90vw] max-w-[500px]">
      <div className="space-y-6">
        <h1 className="text-2xl">VIKAS KUMAR</h1>
        <p className="text-sm">SOFTWARE ENGINEER | AI ENTHUSIAST</p>
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
}
