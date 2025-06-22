"use client"

import { forwardRef } from "react"
import Window, { WindowRef } from "./Window"

interface CertificationsProps {
  defaultPosition: { x: number; y: number }
  onClose?: () => void
  onMinimize?: () => void
}

const Certifications = forwardRef<WindowRef, CertificationsProps>(
  ({ defaultPosition, onClose, onMinimize }, ref) => {
    return (
      <Window ref={ref} title="certifications.exe" defaultPosition={defaultPosition} variant="light" onClose={onClose} onMinimize={onMinimize}>
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">Professional Certifications</h2>
            <p className="text-xs text-gray-600">15+ certifications across AI, ML, programming, and leadership</p>
          </div>

          {/* LinkedIn Learning Certifications */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-blue-600 border-b border-blue-200 pb-2">📚 LinkedIn Learning</h3>
            
            {/* Agentic AI Certification */}
            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                  LI
                </div>
                <div>
                  <h4 className="text-xs font-bold">
                    <a 
                      href="https://www.linkedin.com/learning/certificates/581a5e697129546bebc2b77ca4b0456daff11ed3b584b18ae9d1d0453e180eb1?accountId=56973065&u=56973065&success=true&authUUID=%2FSKl614kTIiRIyP4ev5Ntw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Agentic AI for Developers: Concepts and Application for Enterprises
                    </a>
                  </h4>
                  <p className="text-xs text-gray-500">By: Kumaran Ponnambalam</p>
                  <p className="text-xs text-gray-500">Issued Jun 2025</p>
                  <p className="text-xs text-gray-600"><strong>Skills:</strong> Generative AI, AI Agents, AI Software Development</p>
                </div>
              </div>
            </div>

            {/* Executive Leadership Certification */}
            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                  LI
                </div>
                <div>
                  <h4 className="text-xs font-bold">
                    <a 
                      href="https://www.linkedin.com/learning/certificates/4efca013085bca44753a3e84873e4fc89d3c1d9fd14ea34e5025120075e80b11?u=56973065"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Executive Leadership
                    </a>
                  </h4>
                  <p className="text-xs text-gray-500">LinkedIn</p>
                  <p className="text-xs text-gray-500">Issued Jun 2025</p>
                  <p className="text-xs text-gray-600"><strong>Skills:</strong> Executive Leadership</p>
                </div>
              </div>
            </div>

            {/* Additional LinkedIn Learning Certifications */}
            {[
              {
                title: "Learning Bash Scripting",
                url: "https://www.linkedin.com/learning/certificates/ece11be54c68ce9e167e9492bd5584ad72ddf080814c8042ff0b918a46e2b7ca?u=56973065",
                date: "Nov 2024",
                skills: "Bash"
              },
              {
                title: "Learning Hadoop",
                url: "https://www.linkedin.com/learning/certificates/d006f57dfb7d49758f848c0c430699def3b8595059a8604fe28f3975539decf4?u=56973065",
                date: "Oct 2024",
                skills: "Hadoop"
              },
              {
                title: "Machine Learning Foundations: Linear Algebra",
                url: "https://www.linkedin.com/learning/certificates/7519e66956175d7a2aa506ab586832f7c6185a15a50d21b4ccabbf013faa0cb4?u=56973065",
                date: "Oct 2024",
                skills: "Linear Algebra"
              },
              {
                title: "PyTorch Essential Training: Deep Learning",
                url: "https://www.linkedin.com/learning/certificates/af4065e1fc33b5c48ccf35120c3927908f342057ebb072ed34849e8c51accf2a?u=56973065",
                date: "Oct 2024",
                skills: "PyTorch, Deep Learning"
              },
              {
                title: "Relational Databases Essential Training",
                url: "https://www.linkedin.com/learning/certificates/f782f099fcc38d1818f6775107e453b848650cdbb25f0971abb1d977391bea3f?u=56973065",
                date: "Oct 2024",
                skills: "Relational Databases"
              },
              {
                title: "Unix Essential Training",
                url: "https://www.linkedin.com/learning/certificates/180b34cec0610ac045edc7d7849910b6354fcf63ceae067dcacad4929c3d134b?u=56973065",
                date: "Sep 2024",
                skills: "Unix"
              },
              {
                title: "Selenium Essential Training",
                url: "https://www.linkedin.com/learning/certificates/e03251cce0473237843d0fcd5bfa2e9eba0a4749f1e8ab859228003c01d6085a?u=56973065",
                date: "Jun 2024",
                skills: "Test Automation, Selenium"
              }
            ].map((cert, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                    LI
                  </div>
                  <div>
                    <h4 className="text-xs font-bold">
                      <a 
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {cert.title}
                      </a>
                    </h4>
                    <p className="text-xs text-gray-500">LinkedIn</p>
                    <p className="text-xs text-gray-500">Issued {cert.date}</p>
                    <p className="text-xs text-gray-600"><strong>Skills:</strong> {cert.skills}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kaggle Certifications */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-orange-600 border-b border-orange-200 pb-2">🏆 Kaggle</h3>
            
            <div className="border-l-4 border-orange-500 pl-4 space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-xs">
                  K
                </div>
                <div>
                  <h4 className="text-xs font-bold">
                    <a 
                      href="https://www.kaggle.com/learn/certification/vikasdimaniya/intro-to-machine-learning"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Intro to Machine Learning
                    </a>
                  </h4>
                  <p className="text-xs text-gray-500">Kaggle</p>
                  <p className="text-xs text-gray-500">Issued Feb 2024</p>
                  <p className="text-xs text-gray-600"><strong>Skills:</strong> Machine Learning</p>
                </div>
              </div>
            </div>
          </div>

          {/* HackerRank Certifications */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-green-600 border-b border-green-200 pb-2">💻 HackerRank</h3>
            
            {[
              {
                title: "C++ (Basic)",
                url: "https://www.hackerrank.com/certificates/454f6df03a3f",
                date: "Sep 2020",
                id: "454f6df03a3f"
              },
              {
                title: "JAVA (Intermediate)",
                url: "https://www.hackerrank.com/certificates/242ca80c68f4",
                date: "Sep 2020",
                id: "242CA80C68F4"
              },
              {
                title: "JAVA BASIC",
                url: "https://www.hackerrank.com/certificates/4a8aeb476484",
                date: "Sep 2020",
                id: "4A8AEB476484"
              },
              {
                title: "Problem Solving (Basic)",
                url: "https://www.hackerrank.com/certificates/ab237e2ed410",
                date: "Sep 2020",
                id: "AB237E2ED410"
              }
            ].map((cert, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4 space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs">
                    HR
                  </div>
                  <div>
                    <h4 className="text-xs font-bold">
                      <a 
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        {cert.title}
                      </a>
                    </h4>
                    <p className="text-xs text-gray-500">HackerRank</p>
                    <p className="text-xs text-gray-500">Issued {cert.date}</p>
                    <p className="text-xs text-gray-600"><strong>Credential ID:</strong> {cert.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Certifications */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-purple-600 border-b border-purple-200 pb-2">🎯 Other Certifications</h3>
            
            <div className="border-l-4 border-purple-500 pl-4 space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white font-bold text-xs">
                  TC
                </div>
                <div>
                  <h4 className="text-xs font-bold">Networking Technology</h4>
                  <p className="text-xs text-gray-500">TCIL-IT Chandigarh</p>
                  <p className="text-xs text-gray-500">Issued Aug 2018</p>
                  <p className="text-xs text-gray-600"><strong>Credential ID:</strong> 17500</p>
                  <p className="text-xs text-gray-600"><strong>Skills:</strong> Windows Server</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Continuously expanding knowledge through professional development and industry certifications
            </p>
          </div>
        </div>
      </Window>
    )
  }
)

Certifications.displayName = "Certifications"

export default Certifications 