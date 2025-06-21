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
    <Window title={title} defaultPosition={defaultPosition} onClose={onClose} variant="dark">
      <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-4">{children}</div>
    </Window>
  )
}

export default function Projects({ defaultPosition }: { defaultPosition: { x: number; y: number } }) {
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
      <Window title="projects.exe" defaultPosition={defaultPosition} variant="dark">
        <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-4">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-24 top-0 bottom-0 border-l-2 border-dotted border-gray-400"></div>

            {/* Video Analysis Project */}
            <div className="relative flex gap-8">
              <div className="w-24 text-xs text-gray-400 pt-1">2024</div>
              <div className="flex-1 space-y-3">
                                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-red-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-lg">
                      📹
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">Video Analysis Platform</h3>
                      <p className="text-xs">Academic Project</p>
                    </div>
                  </div>
                <p className="text-xs text-gray-400">
                  Advanced video content analysis platform using AI for efficient metadata searching and querying.
                </p>
                <button
                  onClick={() => toggleDetails("video-analysis")}
                  className="text-xs text-blue-400 hover:underline"
                >
                  See more...
                </button>
              </div>
            </div>

            {/* Hotels Project */}
            <div className="relative flex gap-8 mt-12">
              <div className="w-24 text-xs text-gray-400 pt-1">2023</div>
              <div className="flex-1 space-y-3">
                                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-lg">
                      🏨
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">Hotels Suggestion System</h3>
                      <p className="text-xs">Academic Project</p>
                    </div>
                  </div>
                <p className="text-xs text-gray-400">
                  AI-powered hotel recommendation system with web scraping and efficient data structures.
                </p>
                <button onClick={() => toggleDetails("hotels")} className="text-xs text-blue-400 hover:underline">
                  See more...
                </button>
              </div>
            </div>

            {/* Automated Attendance System */}
            <div className="relative flex gap-8 mt-12">
              <div className="w-24 text-xs text-gray-400 pt-1">2020</div>
              <div className="flex-1 space-y-3">
                                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-green-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-lg">
                      👤
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">Automated Attendance System</h3>
                      <p className="text-xs">Final Year Project</p>
                    </div>
                  </div>
                <p className="text-xs text-gray-400">
                  Facial recognition-based attendance system for streamlined classroom management.
                </p>
                <button onClick={() => toggleDetails("attendance")} className="text-xs text-blue-400 hover:underline">
                  See more...
                </button>
              </div>
            </div>
          </div>
        </div>
      </Window>

      {/* Video Analysis Details */}
      {openDetails.includes("video-analysis") && (
        <DetailWindow
          title="video-analysis-details.txt"
          onClose={() => toggleDetails("video-analysis")}
          defaultPosition={detailPosition}
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold">Video Analysis Platform</h3>
              <a
                href="https://github.com/vikasdimaniya/VidMetaStream"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:underline"
              >
                GitHub Repository
              </a>
            </div>
            <div className="text-xs space-y-2">
              <h4 className="font-bold">Technical Stack:</h4>
              <p>Node.js, YOLOv5, FFmpeg, MongoDB</p>
            </div>
            <div className="text-xs space-y-2">
              <h4 className="font-bold">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>API-driven pipeline integrating YOLOv5 for video analysis</li>
                <li>Temporal & spatial querying engine for video metadata</li>
                <li>Efficient video segment handling without full transcode</li>
                <li>Real-time object detection and tracking</li>
                <li>Scalable architecture for large video datasets</li>
              </ul>
            </div>
          </div>
        </DetailWindow>
      )}

      {/* Hotels Details */}
      {openDetails.includes("hotels") && (
        <DetailWindow
          title="hotels-details.txt"
          onClose={() => toggleDetails("hotels")}
          defaultPosition={{
            x: detailPosition.x,
            y: detailPosition.y + 40,
          }}
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold">Hotels Suggestion System</h3>
              <a
                href="https://github.com/vikasdimaniya/find-hotels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:underline"
              >
                GitHub Repository
              </a>
            </div>
            <div className="text-xs space-y-2">
              <h4 className="font-bold">Technical Stack:</h4>
              <p>Java, Selenium, OpenAI API, AVL Trees</p>
            </div>
            <div className="text-xs space-y-2">
              <h4 className="font-bold">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Automated data scraping from Hotels.com using Selenium</li>
                <li>Custom AVL tree-based search engine for fast queries</li>
                <li>Natural language processing using OpenAI&apos;s API</li>
                <li>Advanced filtering and sorting capabilities</li>
                <li>Memory-efficient data storage and retrieval</li>
              </ul>
            </div>
          </div>
        </DetailWindow>
      )}

      {/* Attendance System Details */}
      {openDetails.includes("attendance") && (
        <DetailWindow
          title="attendance-details.txt"
          onClose={() => toggleDetails("attendance")}
          defaultPosition={{
            x: detailPosition.x,
            y: detailPosition.y + 80,
          }}
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold">Automated Attendance System</h3>
            </div>
            <div className="text-xs space-y-2">
              <h4 className="font-bold">Technical Stack:</h4>
              <p>Python, OpenCV, TensorFlow, SQLite</p>
            </div>
            <div className="text-xs space-y-2">
              <h4 className="font-bold">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Real-time facial recognition for student identification</li>
                <li>Automated attendance marking and report generation</li>
                <li>User-friendly interface for teachers and administrators</li>
                <li>Secure data storage and privacy protection measures</li>
                <li>Integration with existing school management systems</li>
              </ul>
            </div>
          </div>
        </DetailWindow>
      )}
    </>
  )
}
