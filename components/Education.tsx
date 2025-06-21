"use client"

import { forwardRef } from "react"
import Window, { WindowRef } from "./Window"

const Education = forwardRef<WindowRef, { defaultPosition: { x: number; y: number } }>(
  ({ defaultPosition }, ref) => {
    return (
      <Window ref={ref} title="education.exe" defaultPosition={defaultPosition} variant="light">
        <div className="space-y-8">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-24 top-0 bottom-0 border-l-2 border-dotted border-gray-400"></div>

            {/* University of Windsor */}
            <div className="relative flex gap-8">
              <div className="w-24 text-xs text-gray-500 pt-1">May 2024 - Present</div>
              <div className="flex-1 space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-xs">
                    UW
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Master of applied computing - AI, Computer Science</h3>
                    <p className="text-xs text-gray-500">University of Windsor</p>
                    <p className="text-xs text-gray-500">May 2024</p>
                  </div>
                </div>
                <div className="text-xs text-gray-600 space-y-2">
                  <p><strong>Grade:</strong> 9.46/10</p>
                  <p>I am focusing on Artificial intelligence.</p>
                  <p>Neural Networks...</p>
                  <p><strong>Skills:</strong> Recurrent Neural Networks (RNN), Convolutional Neural Networks (CNN) and +3 skills</p>
                </div>
              </div>
            </div>

            {/* Chandigarh University */}
            <div className="relative flex gap-8 mt-12">
              <div className="w-24 text-xs text-gray-500 pt-1">2016 - 2020</div>
              <div className="flex-1 space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-red-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-xs">
                    CU
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Bachelor of Engineering, Computer Science</h3>
                    <p className="text-xs text-gray-500">CHANDIGARH UNIVERSITY</p>
                    <p className="text-xs text-gray-500">2016 - 2020</p>
                  </div>
                </div>
                <div className="text-xs text-gray-600 space-y-2">
                  <p><strong>Activities and societies:</strong> Google Developer Group</p>
                  <p>I focused my studies on the broader field of computer science.</p>
                  <p>Microprocessors...</p>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="relative flex gap-8 mt-16">
              <div className="w-24 text-xs text-gray-500 pt-1">Certifications</div>
              <div className="flex-1 space-y-4">
                <h3 className="text-sm font-bold text-gray-700">Licenses & Certifications</h3>
                
                {/* LinkedIn Learning Certifications */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-blue-600">LinkedIn Learning</h4>
                  
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
                <div className="space-y-3 mt-6">
                  <h4 className="text-xs font-semibold text-orange-600">Kaggle</h4>
                  
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
                <div className="space-y-3 mt-6">
                  <h4 className="text-xs font-semibold text-green-600">HackerRank</h4>
                  
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
                <div className="space-y-3 mt-6">
                  <h4 className="text-xs font-semibold text-purple-600">Other Certifications</h4>
                  
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

                <div className="text-xs text-blue-500 hover:underline cursor-pointer mt-4">
                  Show all 15 licenses & certifications →
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>
    )
  }
)

Education.displayName = "Education"

export default Education
