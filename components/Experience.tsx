 "use client"

import type React from "react"
import { useState, useEffect, forwardRef } from "react"
import Window, { WindowRef } from "./Window"

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

const Experience = forwardRef<WindowRef, { defaultPosition: { x: number; y: number } }>(
  ({ defaultPosition }, ref) => {
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
        <Window ref={ref} title="experience.exe" defaultPosition={defaultPosition} variant="dark">
          <div className="h-full overflow-y-auto pr-4">
            <div className="space-y-8">
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-24 top-0 bottom-0 border-l-2 border-dotted border-gray-400"></div>

                {/* CPG Recruitment Inc. - Data Scientist */}
                <div className="relative flex gap-8">
                  <div className="w-24 text-xs text-gray-400 pt-1">May 2025 - Present</div>
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-blue-700 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-sm">
                        CPG
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">Data Scientist</h3>
                        <p className="text-xs">
                          <a 
                            href="https://www.cpgincorporated.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            CPG Recruitment Inc.
                          </a> · Co-op
                        </p>
                        <p className="text-xs text-gray-400">2 mos</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">
                      Machine Learning, Large Language Models (LLM) and +3 skills
                    </p>
                    <button onClick={() => toggleDetails("cpg")} className="text-xs text-blue-400 hover:underline">
                      See more...
                    </button>
                  </div>
                </div>

                {/* Aqlio - Founder & AI Engineer */}
                <div className="relative flex gap-8 mt-12">
                  <div className="w-24 text-xs text-gray-400 pt-1">May 2023 - Present</div>
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-lg">
                        A
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">Founder & AI Engineer</h3>
                        <p className="text-xs">
                          <a 
                            href="https://www.aqlio.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            Aqlio
                          </a> · Self-employed
                        </p>
                        <p className="text-xs text-gray-400">2 yrs 2 mos</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">
                      Founded Aqlio, a software development company focused on building modern AI-powered web applications and digital tools. Currently developing internal projects and seeking early-stage clients to collaborate.
                    </p>
                    <p className="text-xs text-gray-400">
                      Entrepreneurship, Business Strategy and +3 skills
                    </p>
                    <button onClick={() => toggleDetails("aqlio")} className="text-xs text-blue-400 hover:underline">
                      See more...
                    </button>
                  </div>
                </div>

                {/* Gumlet */}
                <div className="relative flex gap-8 mt-12">
                  <div className="w-24 text-xs text-gray-400 pt-1">Feb 2022 - Apr 2025</div>
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-green-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-lg">
                        G
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">Software Engineer</h3>
                        <p className="text-xs">
                          <a 
                            href="https://www.gumlet.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            Gumlet
                          </a> · Full-time
                        </p>
                        <p className="text-xs text-gray-400">3 yrs 3 mos</p>
                        <p className="text-xs text-gray-400">Bengaluru, Karnataka, India · Remote</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">
                      Host, secure, and stream videos in minutes. Grow your audience with videos optimized for peak performance.
                    </p>
                    <p className="text-xs text-gray-400">
                      Node.js, MongoDB and +6 skills
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
                      <div className="w-12 h-12 bg-orange-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-lg">
                        AVO
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">Senior Software Engineer</h3>
                        <p className="text-xs">
                          <a 
                            href="https://avoautomation.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            Avo Automation
                          </a> · Full-time
                        </p>
                        <p className="text-xs text-gray-400">1 yr 7 mos</p>
                        <p className="text-xs text-gray-400">Bengaluru, Karnataka, India</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">
                      Product AVO-ASSIST (previously called RAID): - Robotic Process Automation.
                    </p>
                    <p className="text-xs text-gray-400">
                      SQL, Nginx and +12 skills
                    </p>
                    <button onClick={() => toggleDetails("avo")} className="text-xs text-blue-400 hover:underline">
                      See more...
                    </button>
                  </div>
                </div>

                {/* SLK Internship */}
                <div className="relative flex gap-8 mt-12">
                  <div className="w-24 text-xs text-gray-400 pt-1">Jan 2020 - Jun 2020</div>
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-red-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-sm">
                        SLK
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">Trainee - Dimension labs</h3>
                        <p className="text-xs">
                          <a 
                            href="https://slksoftware.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            SLK
                          </a> · Internship
                        </p>
                        <p className="text-xs text-gray-400">6 mos</p>
                        <p className="text-xs text-gray-400">Bengaluru Area, India</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">
                      Worked with AVO-ASSIST Team, a RPA tool to design and execute process.
                      - Started with understanding the product architecture, technologies and bug fixes,
                      - Worked on understanding and implementing the automation architecture for different platforms.
                    </p>
                    <p className="text-xs text-gray-400">
                      Socket.io, Node.js and +2 skills
                    </p>
                    <button onClick={() => toggleDetails("slk")} className="text-xs text-blue-400 hover:underline">
                      See more...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Window>

        {/* Detail Windows */}
        {openDetails.includes("cpg") && (
          <DetailWindow
            title="cpg-details.txt"
            onClose={() => toggleDetails("cpg")}
            defaultPosition={detailPosition}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold">Data Scientist</h3>
                <p className="text-xs text-gray-400">CPG Recruitment Inc. · Co-op</p>
                <p className="text-xs text-gray-400">May 2025 - Present · 2 mos</p>
                <p className="text-xs italic text-gray-400">
                  Skills: Machine Learning, Large Language Models (LLM)
                </p>
              </div>
              <ul className="list-disc pl-5 text-xs space-y-2 text-gray-200">
                <li>Working on advanced machine learning projects and LLM implementations</li>
                <li>Developing AI-powered solutions for recruitment and talent acquisition</li>
                <li>Applying data science techniques to improve hiring processes</li>
              </ul>
            </div>
          </DetailWindow>
        )}

        {openDetails.includes("aqlio") && (
          <DetailWindow
            title="aqlio-details.txt"
            onClose={() => toggleDetails("aqlio")}
            defaultPosition={{
              x: detailPosition.x,
              y: detailPosition.y + 20,
            }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold">Founder & AI Engineer</h3>
                <p className="text-xs text-gray-400">Aqlio · Self-employed</p>
                <p className="text-xs text-gray-400">May 2023 - Present · 2 yrs 2 mos</p>
                <p className="text-xs italic text-gray-400">
                  Skills: Entrepreneurship, Business Strategy
                </p>
              </div>
              <ul className="list-disc pl-5 text-xs space-y-2 text-gray-200">
                <li>
                  Founded Aqlio, a software development company focused on building modern AI-powered web applications and digital tools
                </li>
                <li>Currently developing internal projects and seeking early-stage clients to collaborate</li>
                <li>Leading business strategy and technical development initiatives</li>
                <li>Building AI-powered solutions for various industry verticals</li>
              </ul>
            </div>
          </DetailWindow>
        )}

        {openDetails.includes("gumlet") && (
          <DetailWindow
            title="gumlet-details.txt"
            onClose={() => toggleDetails("gumlet")}
            defaultPosition={{
              x: detailPosition.x,
              y: detailPosition.y + 40,
            }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold">Software Engineer</h3>
                <p className="text-xs text-gray-400">Gumlet · Full-time</p>
                <p className="text-xs text-gray-400">Feb 2022 - Apr 2025 · 3 yrs 3 mos</p>
                <p className="text-xs text-gray-400">Bengaluru, Karnataka, India · Remote</p>
                <p className="text-xs italic text-gray-400">
                  Skills: Node.js, MongoDB
                </p>
              </div>
              <ul className="list-disc pl-5 text-xs space-y-2 text-gray-200">
                <li>Host, secure, and stream videos in minutes</li>
                <li>Grow your audience with videos optimized for peak performance</li>
                <li>Developed scalable video streaming infrastructure</li>
                <li>Implemented video analytics and optimization features</li>
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
              y: detailPosition.y + 60,
            }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold">Software Engineer</h3>
                <p className="text-xs text-gray-400">Avo Automation · Full-time</p>
                <p className="text-xs text-gray-400">Jan 2020 - Feb 2022 · 1 yr 7 mos</p>
                <p className="text-xs text-gray-400">Bengaluru, Karnataka, India</p>
                <p className="text-xs italic text-gray-400">
                  Skills: SQL, Nginx and +12 skills
                </p>
              </div>
              <ul className="list-disc pl-5 text-xs space-y-2 text-gray-200">
                <li>Product AVO-ASSIST (previously called RAID): - Robotic Process Automation</li>
                <li>Developed automation solutions for enterprise clients</li>
                <li>Worked on process optimization and workflow automation</li>
                <li>Implemented scalable RPA solutions using modern technologies</li>
              </ul>
            </div>
          </DetailWindow>
        )}

        {openDetails.includes("slk") && (
          <DetailWindow
            title="slk-details.txt"
            onClose={() => toggleDetails("slk")}
            defaultPosition={{
              x: detailPosition.x,
              y: detailPosition.y + 80,
            }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold">Trainee - Dimension labs</h3>
                <p className="text-xs text-gray-400">SLK · Internship</p>
                <p className="text-xs text-gray-400">Jan 2020 - Jun 2020 · 6 mos</p>
                <p className="text-xs text-gray-400">Bengaluru Area, India</p>
                <p className="text-xs italic text-gray-400">
                  Skills: Socket.io, Node.js
                </p>
              </div>
              <ul className="list-disc pl-5 text-xs space-y-2 text-gray-200">
                <li>Worked with AVO-ASSIST Team, a RPA tool to design and execute process</li>
                <li>Started with understanding the product architecture, technologies and bug fixes</li>
                <li>Worked on understanding and implementing the automation architecture for different platforms</li>
                <li>Gained hands-on experience with enterprise automation tools</li>
              </ul>
            </div>
          </DetailWindow>
        )}
      </>
    )
  }
)

Experience.displayName = "Experience"

export default Experience
