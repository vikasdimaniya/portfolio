"use client"

import { forwardRef } from "react"
import Window, { WindowRef } from "./Window"

const Skills = forwardRef<WindowRef, { defaultPosition: { x: number; y: number } }>(
  ({ defaultPosition }, ref) => {
    return (
      <Window ref={ref} title="skills.exe" defaultPosition={defaultPosition} variant="light">
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-bold">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "JavaScript", "TypeScript", "C++", "Java", "Go"].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "Express", "FastAPI", "HTML/CSS"].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-2 py-1 text-xs border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "PostgreSQL", "Redis", "ClickHouse", "SQLite"].map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-800 px-2 py-1 text-xs border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "Kubernetes", "CI/CD", "Linux", "Git"].map((skill) => (
                  <span key={skill} className="bg-orange-100 text-orange-800 px-2 py-1 text-xs border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {["OpenAI API", "TensorFlow", "Computer Vision", "NLP", "YOLO", "Whisper"].map((skill) => (
                  <span key={skill} className="bg-red-100 text-red-800 px-2 py-1 text-xs border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">Tools & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["Selenium", "FFmpeg", "Electron", "Stripe", "OAuth2.0", "REST APIs"].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-2 py-1 text-xs border">
                    {skill}
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

Skills.displayName = "Skills"

export default Skills
