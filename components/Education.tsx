"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Window from "./Window"

interface DetailWindowProps {
  title: string
  onClose: () => void
  defaultPosition: { x: number; y: number }
  children: React.ReactNode
}

function DetailWindow({ title, onClose, defaultPosition, children }: DetailWindowProps) {
  return (
    <Window title={title} defaultPosition={defaultPosition} onClose={onClose}>
      <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-4">{children}</div>
    </Window>
  )
}

export default function Education({ defaultPosition }: { defaultPosition: { x: number; y: number } }) {
  const [openDetails, setOpenDetails] = useState<string[]>([])
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleDetails = (id: string) => {
    setOpenDetails((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const detailPosition = {
    x: windowWidth / 2 + 20,
    y: defaultPosition.y,
  }

  return (
    <>
      <Window title="education.exe" defaultPosition={defaultPosition}>
        <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-4">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-24 top-0 bottom-0 border-l-2 border-dotted border-gray-400"></div>

            {/* Masters */}
            <div className="relative flex gap-8">
              <div className="w-24 text-xs text-gray-600 pt-1">May 2024 - Aug 2025</div>
              <div className="flex-1 space-y-3">
                                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-lg">
                      UW
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">Master of Applied Computing</h3>
                      <p className="text-xs">University of Windsor</p>
                    </div>
                  </div>
                <p className="text-xs text-gray-600">
                  Advanced studies in computing with a focus on practical applications.
                </p>
                <button onClick={() => toggleDetails("masters")} className="text-xs text-blue-600 hover:underline">
                  See more...
                </button>
              </div>
            </div>

            {/* Bachelors */}
            <div className="relative flex gap-8 mt-12">
              <div className="w-24 text-xs text-gray-600 pt-1">Sept 2016 - June 2020</div>
              <div className="flex-1 space-y-3">
                                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-lg">
                      CU
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">Bachelor of Engineering in Computer Science</h3>
                      <p className="text-xs">Chandigarh University</p>
                    </div>
                  </div>
                <p className="text-xs text-gray-600">
                  Comprehensive study of computer science fundamentals and software engineering.
                </p>
                <button onClick={() => toggleDetails("bachelors")} className="text-xs text-blue-600 hover:underline">
                  See more...
                </button>
              </div>
            </div>
          </div>
        </div>
      </Window>

      {/* Masters Details */}
      {openDetails.includes("masters") && (
        <DetailWindow
          title="masters-details.txt"
          onClose={() => toggleDetails("masters")}
          defaultPosition={detailPosition}
        >
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-4">
            <div>
              <h3 className="text-sm font-bold">Master of Applied Computing</h3>
              <p className="text-xs text-gray-600">University of Windsor</p>
              <p className="text-xs text-gray-600">May 2024 - Aug 2025</p>
              <p className="text-xs text-blue-600">CGPA: 90</p>
            </div>
            <div className="text-xs space-y-2">
              <h4 className="font-bold">Key Courses:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Advanced Computing Concepts</li>
                <li>Advanced Software Engineering</li>
                <li>Cloud Computing</li>
                <li>Advanced Database Systems</li>
                <li>Advanced Algorithms</li>
                <li>Machine Learning and AI</li>
              </ul>
            </div>
            <div className="text-xs space-y-2">
              <h4 className="font-bold">Research Focus:</h4>
              <p>Exploring applications of AI and machine learning in video processing and analysis.</p>
            </div>
          </div>
        </DetailWindow>
      )}

      {/* Bachelors Details */}
      {openDetails.includes("bachelors") && (
        <DetailWindow
          title="bachelors-details.txt"
          onClose={() => toggleDetails("bachelors")}
          defaultPosition={{
            x: detailPosition.x,
            y: detailPosition.y + 40,
          }}
        >
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-4">
            <div>
              <h3 className="text-sm font-bold">Bachelor of Engineering in Computer Science</h3>
              <p className="text-xs text-gray-600">Chandigarh University</p>
              <p className="text-xs text-gray-600">Sept 2016 - June 2020</p>
              <p className="text-xs text-blue-600">CGPA: 8.2/10</p>
            </div>
            <div className="text-xs space-y-2">
              <h4 className="font-bold">Key Courses:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Data Structures and Algorithms</li>
                <li>Object-Oriented Programming</li>
                <li>Database Management Systems</li>
                <li>Computer Networks</li>
                <li>Operating Systems</li>
                <li>Software Engineering</li>
              </ul>
            </div>
            <div className="text-xs space-y-2">
              <h4 className="font-bold">Key Achievements:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Technical Lead of Programming Club</li>
                <li>Won University Hackathon 2019</li>
                <li>Published research paper on IoT applications in smart cities</li>
              </ul>
            </div>
          </div>
        </DetailWindow>
      )}
    </>
  )
}
