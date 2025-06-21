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
      <div className="h-full overflow-y-auto pr-4">{children}</div>
    </Window>
  )
}

export default function Experience({ defaultPosition }: { defaultPosition: { x: number; y: number } }) {
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
      <Window title="experience.exe" defaultPosition={defaultPosition} variant="dark">
        <div className="h-full overflow-y-auto pr-4">
          <div className="space-y-8">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-24 top-0 bottom-0 border-l-2 border-dotted border-gray-400"></div>

              {/* Gumlet */}
              <div className="relative flex gap-8">
                <div className="w-24 text-xs text-gray-400 pt-1">Feb 2022 - April 2024</div>
                <div className="flex-1 space-y-3">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-lg">
                      G
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">Software Engineer</h3>
                      <p className="text-xs">Gumlet pte ltd (funded by sequoia)</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">
                    Developed and maintained video infrastructure and streaming solutions.
                  </p>
                  <button onClick={() => toggleDetails("gumlet")} className="text-xs text-blue-400 hover:underline">
                    See more...
                  </button>
                </div>
              </div>

              {/* Avo Automation */}
              <div className="relative flex gap-8 mt-12">
                <div className="w-24 text-xs text-gray-400 pt-1">Jan 2020 - Feb 2022</div>
                <div className="flex-1 space-y-3">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-green-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-lg">
                      A
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">Senior Product Engineer</h3>
                      <p className="text-xs">Avo Automation (SLK Software)</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">Led development of quality assurance automation solutions.</p>
                  <button onClick={() => toggleDetails("avo")} className="text-xs text-blue-400 hover:underline">
                    See more...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>

      {/* Detail Windows */}
      {openDetails.includes("gumlet") && (
        <DetailWindow
          title="gumlet-details.txt"
          onClose={() => toggleDetails("gumlet")}
          defaultPosition={detailPosition}
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold">Software Engineer</h3>
              <p className="text-xs text-gray-400">Gumlet pte ltd (funded by sequoia)</p>
              <p className="text-xs text-gray-400">Feb 2022 - April 2024</p>
              <p className="text-xs italic text-gray-400">
                Tech Stack: Python, Node.js, Kubernetes, AWS, Clickhouse, Stripe, MongoDB, Fastify, FFMPEG
              </p>
            </div>
            <ul className="list-disc pl-5 text-xs space-y-2 text-gray-200">
              <li>
                Designed and implemented the entire backend for Gumlet.tv, a YouTube-like platform, including a custom
                OAuth2.0 standard.
              </li>
              <li>
                Created a scalable video migration pipeline capable of ingesting Terabytes of data from various sources
                like Vimeo, S3, YouTube, and Zoom.
              </li>
              <li>
                Developed multiple web-based video tools to play HLS, Dash streams, Widevine, and Fairplay-supported
                videos.
              </li>
              <li>Built a video analytics platform using ClickHouse to track and extract insights from video data.</li>
              <li>
                Integrated open-source AI models to improve media accessibility, including OpenAI&apos;s Whisper for audio
                transcription.
              </li>
              <li>
                Implemented user-level API keys with Role-Based Access Control (RBAC) to enhance data security across
                various endpoints.
              </li>
            </ul>
          </div>
        </DetailWindow>
      )}

      {openDetails.includes("avo") && (
        <DetailWindow
          title="avo-details.txt"
          onClose={() => toggleDetails("avo")}
          defaultPosition={{
            x: detailPosition.x,
            y: detailPosition.y + 40,
          }}
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold">Senior Product Engineer</h3>
              <p className="text-xs text-gray-400">Avo Automation (SLK Software)</p>
              <p className="text-xs text-gray-400">Jan 2020 - Feb 2022</p>
              <p className="text-xs italic text-gray-400">
                Tech Stack: C++, Python, Selenium, Flask, Node.js, Sockets, Electron, Tesseract, MongoDB, Redis, SQLite
              </p>
            </div>
            <ul className="list-disc pl-5 text-xs space-y-2 text-gray-200">
              <li>Led cross-functional teams in developing advanced automation solutions for quality assurance.</li>
              <li>
                Developed an Auto Unlock Windows OS service for seamless remote execution of tasks on locked systems.
              </li>
              <li>
                Implemented infinite-scroll APIs for various list-based data including reports, process logs, and
                images.
              </li>
              <li>
                Created new schedule-based triggers for job execution using Redis bull queues, including prioritization,
                delayed, and event-based triggers.
              </li>
              <li>
                Designed and built a Secret Management tool for encrypting automation process secrets and ensuring
                secure utilization.
              </li>
              <li>
                Optimized existing Python code, improving scalability from a maximum of 3000 steps to virtually
                unlimited steps.
              </li>
            </ul>
          </div>
        </DetailWindow>
      )}
    </>
  )
}
