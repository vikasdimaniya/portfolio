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
      <div className="h-full overflow-y-auto pr-4 dark-scrollbar">{children}</div>
    </Window>
  )
}

interface ExperienceProps {
  defaultPosition: { x: number; y: number }
  onClose?: () => void
  onMinimize?: () => void
}

const Experience = forwardRef<WindowRef, ExperienceProps>(
  ({ defaultPosition, onClose, onMinimize }, ref) => {
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
        <Window 
          ref={ref} 
          title="experience.exe" 
          defaultPosition={defaultPosition} 
          variant="dark" 
          onClose={onClose} 
          onMinimize={onMinimize}
          maxWidth={1000}
          maxHeight={800}
          minWidth={600}
          minHeight={400}
        >
          <div className="h-full overflow-y-auto pr-4 dark-scrollbar">
            <div className="space-y-8">
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-24 top-0 bottom-0 border-l-2 border-dotted border-gray-400"></div>

                {/* Booked55 - Co-Founder */}
                <div className="relative flex gap-8">
                  <div className="w-24 text-xs text-gray-400 pt-1">Sep 2025 - Present</div>
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-4 items-start">
                      <img src="/booked55-logo.png" alt="Booked55" className="w-12 h-12 rounded-lg border-2 border-gray-200 object-cover" />
                      <div>
                        <h3 className="text-sm font-bold">Co-Founder</h3>
                        <p className="text-xs">
                          <a 
                            href="https://booked55.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            Booked55
                          </a> · Permanent Full-time
                        </p>
                        <p className="text-xs text-gray-400">11 mos</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">
                      You focus on people. Booked55 handles the rest. A smart CRM built just for founders like you.
                    </p>
                    <p className="text-xs text-gray-400">
                      CRM, SaaS, Product Development and +3 skills
                    </p>
                    <button onClick={() => toggleDetails("booked55")} className="text-xs text-blue-400 hover:underline">
                      See more...
                    </button>
                  </div>
                </div>

                {/* CPG Recruitment Inc. - AI Software Developer */}
                <div className="relative flex gap-8 mt-12">
                  <div className="w-24 text-xs text-gray-400 pt-1">Sept 2025 - Present</div>
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-4 items-start">
                      <img src="/cpg-logo.png" alt="CPG Recruitment" className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <h3 className="text-sm font-bold">AI Software Developer</h3>
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
                        <p className="text-xs text-gray-400">5 mos</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">
                      Transforming CPG into a Tech-first company. Enabling sales and recruitment AI business transformation.
                    </p>
                    <p className="text-xs text-gray-400">
                      AI Strategy, Technical Leadership, System Architecture and +5 skills
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
                      <img src="/aqlio-logo.png" alt="Aqlio" className="w-12 h-12 rounded-lg border-2 border-gray-200 object-contain bg-white p-1" />
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
                      <img src="/gumlet-logo.svg" alt="Gumlet" className="w-12 h-12 rounded-lg border-2 border-gray-200 object-contain bg-white p-1" />
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
                      <img src="/avo-logo.png" alt="Avo Automation" className="w-12 h-12 rounded-lg border-2 border-gray-200 object-contain bg-white p-1" />
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
                      <img src="/altimetrik-logo.svg" alt="Altimetrik" className="w-12 h-12 rounded-lg border-2 border-gray-200 object-contain bg-white p-1" />
                      <div>
                        <h3 className="text-sm font-bold">Trainee - Dimension labs</h3>
                        <p className="text-xs">
                          <a 
                            href="https://www.altimetrik.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            SLK (now Altimetrik)
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
        {openDetails.includes("booked55") && (
          <DetailWindow
            title="booked55-details.txt"
            onClose={() => toggleDetails("booked55")}
            defaultPosition={detailPosition}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold">Co-Founder</h3>
                <p className="text-xs text-gray-400">Booked55 · Permanent Full-time</p>
                <p className="text-xs text-gray-400">Sep 2025 - Present · 11 mos</p>
                <p className="text-xs italic text-gray-400">
                  Skills: CRM, SaaS, Product Development, Full-Stack Engineering, Leadership
                </p>
              </div>
              <p className="text-xs text-gray-400 italic">
                You focus on people. Booked55 handles the rest. A smart CRM built just for founders like you.
              </p>
              <ul className="list-disc pl-5 text-xs space-y-2 text-gray-200">
                <li>Co-founded Booked55, a smart CRM platform purpose-built for founders</li>
                <li>Leading technical architecture and product development from the ground up</li>
                <li>Designing and building scalable SaaS infrastructure for CRM workflows</li>
                <li>Driving product strategy and user experience decisions</li>
                <li>Building features that automate relationship management for busy founders</li>
              </ul>
            </div>
          </DetailWindow>
        )}

        {openDetails.includes("cpg") && (
          <DetailWindow
            title="cpg-details.txt"
            onClose={() => toggleDetails("cpg")}
            defaultPosition={detailPosition}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold">AI Software Developer</h3>
                <p className="text-xs text-gray-400">CPG Recruitment Inc. · Co-op</p>
                <p className="text-xs text-gray-400">Sept 2025 - Present · 5 mos</p>
                <p className="text-xs italic text-gray-400">
                  Skills: AI Strategy, Technical Leadership, System Architecture, Cloud Infrastructure, Team Management
                </p>
              </div>
              <p className="text-xs text-gray-400 italic">
                Transforming CPG into a Tech-first company. Enabling sales and recruitment AI business transformation.
              </p>
              <ul className="list-disc pl-5 text-xs space-y-2 text-gray-200">
                <li>Leading the technical vision and strategy to transform CPG into a technology-driven organization</li>
                <li>Enabling AI-driven business transformation across sales and recruitment operations</li>
                <li>Architecting and implementing scalable AI-powered systems for recruitment and talent acquisition</li>
                <li>Establishing technology roadmap and driving innovation initiatives across the organization</li>
                <li>Evaluating and integrating cutting-edge technologies including LLMs, machine learning, and automation tools</li>
                <li>Designing enterprise-grade system architecture with focus on security, scalability, and performance</li>
                <li>Managing cloud infrastructure and DevOps practices to ensure reliable and efficient operations</li>
                <li>Collaborating with executive leadership to align technology initiatives with business objectives</li>
                <li>Implementing data-driven decision-making processes and analytics frameworks</li>
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
