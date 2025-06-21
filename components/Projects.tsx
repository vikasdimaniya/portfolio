"use client"

import { forwardRef } from "react"
import Window, { WindowRef } from "./Window"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Projects = forwardRef<WindowRef, { defaultPosition: { x: number; y: number } }>(
  ({ defaultPosition }, ref) => {
    return (
      <Window ref={ref} title="projects.exe" defaultPosition={defaultPosition} variant="light">
        <div className="space-y-6">
          <div className="grid gap-6">
            {/* Portfolio Project */}
            <div className="border border-gray-300 p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold">Interactive Portfolio</h3>
                  <p className="text-xs text-gray-600">Personal Portfolio Website</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/vikasdimaniya/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black text-xs"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://vikasdimaniya.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black text-xs"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-700">
                A desktop-inspired portfolio built with Next.js, featuring draggable windows, auto-sizing content, and a retro UI design.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Next.js", "TypeScript", "Tailwind CSS", "React"].map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Gumlet.tv */}
            <div className="border border-gray-300 p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold">Gumlet.tv Platform</h3>
                  <p className="text-xs text-gray-600">Video Streaming Platform</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://gumlet.tv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black text-xs"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-700">
                YouTube-like video platform with custom OAuth2.0, video analytics, and AI-powered transcription using OpenAI&apos;s Whisper.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Python", "Node.js", "MongoDB", "AWS", "ClickHouse", "FFMPEG"].map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Video Migration Pipeline */}
            <div className="border border-gray-300 p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold">Video Migration Pipeline</h3>
                  <p className="text-xs text-gray-600">Scalable Data Processing</p>
                </div>
              </div>
              <p className="text-xs text-gray-700">
                Terabyte-scale video migration system supporting multiple sources including Vimeo, S3, YouTube, and Zoom with automated processing.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Python", "Kubernetes", "AWS", "Redis", "Docker"].map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Automation Framework */}
            <div className="border border-gray-300 p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold">QA Automation Framework</h3>
                  <p className="text-xs text-gray-600">Enterprise Testing Solution</p>
                </div>
              </div>
              <p className="text-xs text-gray-700">
                Comprehensive automation framework with secret management, schedule-based triggers, and scalable execution supporting unlimited test steps.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Python", "C++", "Selenium", "Redis", "MongoDB", "Electron"].map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Window>
    )
  }
)

Projects.displayName = "Projects"

export default Projects
