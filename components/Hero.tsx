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
        <p className="text-sm text-gray-600">AGENTIC AI | MACHINE LEARNING | DATA SCIENCE</p>
        <div className="text-xs text-gray-500 space-y-1">
          <p>Windsor, Ontario, Canada</p>
          <p>479 connections</p>
        </div>
        <div className="text-xs text-gray-700 leading-relaxed">
          <p>I am skilled in Python, Node.js, MongoDB, JS, Java, System design, cloud, and figuring out technology.</p>
          <br />
          <p><strong>AI/ML:</strong> PyTorch, Scikit-learn, LLMs, OpenCV</p>
          <p><strong>Frameworks:</strong> Python (DJANGO, FASTAPI), Node.js (Express, Fastify)</p>
          <p><strong>Databases:</strong> MongoDB, PostgreSQL, MYSQL, MS-SQL</p>
          <p><strong>Dev Tools:</strong> GitHub, Docker, Kubernetes, CI/CD, JIRA</p>
        </div>
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
