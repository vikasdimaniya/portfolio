"use client"

import { forwardRef } from "react"
import Window, { WindowRef } from "./Window"

interface SkillsProps {
  defaultPosition: { x: number; y: number }
  onClose?: () => void
}

const Skills = forwardRef<WindowRef, SkillsProps>(
  ({ defaultPosition, onClose }, ref) => {
    return (
      <Window ref={ref} title="skills.exe" defaultPosition={defaultPosition} variant="light" onClose={onClose}>
        <div className="space-y-6">
          <div className="grid gap-4">
            {/* Top Skills from LinkedIn */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold">🏆 Top Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Artificial Intelligence (AI)", "Python (Programming Language)", "PyTorch", "Node.js", "Amazon S3"].map((skill) => (
                  <span key={skill} className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs border border-yellow-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">🤖 AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "Scikit-learn", "Large Language Models (LLM)", "OpenCV", "Generative AI", "AI Agents", "Recurrent Neural Networks (RNN)", "Convolutional Neural Networks (CNN)", "Natural Language Processing (NLP)", "Machine Learning"].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 text-xs border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">💻 Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "JavaScript", "Java", "Node.js", "C++", "SQL"].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-2 py-1 text-xs border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">🌐 Web Frameworks & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Django", "FastAPI", "Express", "Fastify", "React.js", "MongoDB", "Socket.io", "Selenium", "JWT", "NPM"].map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-800 px-2 py-1 text-xs border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">🗄️ Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "PostgreSQL", "MySQL", "MS-SQL", "Redis", "SQLite"].map((skill) => (
                  <span key={skill} className="bg-orange-100 text-orange-800 px-2 py-1 text-xs border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">☁️ Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["Amazon S3", "Docker", "Kubernetes", "CI/CD", "GitHub", "JIRA", "Nginx"].map((skill) => (
                  <span key={skill} className="bg-red-100 text-red-800 px-2 py-1 text-xs border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">💼 Business & Leadership</h3>
              <div className="flex flex-wrap gap-2">
                {["Entrepreneurship", "Business Strategy", "Executive Leadership", "Strategic Communications", "Financial Analysis", "Business Analysis", "Software Project Management"].map((skill) => (
                  <span key={skill} className="bg-pink-100 text-pink-800 px-2 py-1 text-xs border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold">🔧 Other Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Computer Vision", "Surveillance", "Query Optimization", "Algorithms", "Software Documentation", "Data Scraping", "System Design"].map((skill) => (
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
