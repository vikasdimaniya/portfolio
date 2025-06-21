"use client"

import type React from "react"
import { useState } from "react"
import { Briefcase, GraduationCap, Code, Wrench, User } from "lucide-react"
import Window from "./Window"

interface MenuItem {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

export default function Menu() {
  const [activeWindows, setActiveWindows] = useState<string[]>([])

  const menuItems: MenuItem[] = [
    {
      id: "about",
      title: "ABOUT ME",
      icon: <User className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <h2 className="text-lg">Software Engineer | AI Enthusiast</h2>
          <p>Available for 4 or 8 month internship starting in May 2025.</p>
        </div>
      ),
    },
    {
      id: "experience",
      title: "EXPERIENCE",
      icon: <Briefcase className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-bold">Software Engineer</h3>
            <p className="text-xs text-gray-600">Gumlet pte ltd (funded by sequoia)</p>
            <p className="text-xs text-gray-600">Feb 2022 - April 2024</p>
            <p className="text-xs italic">
              Tech Stack: Python, Node.js, Kubernetes, AWS, Clickhouse, Stripe, MongoDB, Fastify, FFMPEG
            </p>
            <ul className="list-disc pl-5 text-xs mt-2 space-y-1">
              <li>Designed the entire backend for Gumlet.tv a YouTube-like platform</li>
              <li>Created a scalable video migration pipeline</li>
              <li>Built multiple web-based video tools</li>
              <li>Worked on video analytics platform</li>
              <li>Deployed AI models for media accessibility</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold">Senior Product Engineer</h3>
            <p className="text-xs text-gray-600">Avo Automation</p>
            <p className="text-xs text-gray-600">Jan 2020 - Feb 2022</p>
            <p className="text-xs italic">Tech Stack: C++, Python, Selenium, Flask, Node.js, Sockets, Electron</p>
            <ul className="list-disc pl-5 text-xs mt-2 space-y-1">
              <li>Devised Auto Unlock Windows OS service</li>
              <li>Implemented infinite-scroll APIs</li>
              <li>Built Secret Management tool</li>
              <li>Optimized Python code for scalability</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "education",
      title: "EDUCATION",
      icon: <GraduationCap className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-sm">MASTER OF APPLIED COMPUTING</h3>
            <p className="text-xs text-gray-600">UNIVERSITY OF WINDSOR</p>
            <p className="text-xs">MAY 2024 - AUG 2025</p>
            <p className="text-xs text-blue-600">CGPA: 90</p>
          </div>
          <div>
            <h3 className="text-sm">BACHELOR OF ENGINEERING</h3>
            <p className="text-xs text-gray-600">CHANDIGARH UNIVERSITY</p>
            <p className="text-xs">SEPT 2016 - JUNE 2020</p>
          </div>
        </div>
      ),
    },
    {
      id: "projects",
      title: "PROJECTS",
      icon: <Code className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-bold">Video analysis and query platform</h3>
            <a href="https://github.com/vikasdimaniya/VidMetaStream" className="text-xs text-blue-600">
              GitHub Repository
            </a>
            <ul className="list-disc pl-5 text-xs mt-2 space-y-1">
              <li>Developed API-driven pipeline with YOLO11</li>
              <li>Created temporal & spatial querying engine</li>
              <li>Implemented seamless video segment handling</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold">Hotels Suggestion</h3>
            <a href="https://github.com/vikasdimaniya/find-hotels" className="text-xs text-blue-600">
              GitHub Repository
            </a>
            <ul className="list-disc pl-5 text-xs mt-2 space-y-1">
              <li>Scrapped data from Hotels.com using Selenium</li>
              <li>Developed in-memory search engine using AVL-tree</li>
              <li>Integrated OpenAI chatbot for natural language queries</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "skills",
      title: "SKILLS",
      icon: <Wrench className="w-4 h-4" />,
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold">Languages:</h3>
            <p className="text-xs">Javascript (Node.js, React, Next), Python, Java, C++, Go, HTML, CSS</p>
          </div>
          <div>
            <h3 className="text-sm font-bold">Frameworks:</h3>
            <p className="text-xs">Express, Fastify, JEST, Django, Flask</p>
          </div>
          <div>
            <h3 className="text-sm font-bold">Databases:</h3>
            <p className="text-xs">NoSQL (MongoDB, Redis), SQL (ClickHouse, MSSQL, SQLite)</p>
          </div>
          <div>
            <h3 className="text-sm font-bold">Tools:</h3>
            <p className="text-xs">NPM, AWS, Docker, Kubernetes, JIRA, Postman, Stripe, CDNs, Sentry, GIT</p>
          </div>
        </div>
      ),
    },
  ]

  const toggleWindow = (id: string) => {
    setActiveWindows((prev) => (prev.includes(id) ? prev.filter((windowId) => windowId !== id) : [...prev, id]))
  }

  return (
    <>
      <Window title="menu.exe" defaultPosition={{ x: 20, y: 20 }} className="w-48">
        <div className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleWindow(item.id)}
              className="flex items-center gap-2 text-gray-800 hover:bg-gray-100 p-2 rounded transition-colors"
            >
              {item.icon}
              <span className="text-xs">{item.title}</span>
            </button>
          ))}
        </div>
      </Window>

      {menuItems.map((item) =>
        activeWindows.includes(item.id) ? (
          <Window
            key={item.id}
            title={item.title.toLowerCase()}
            defaultPosition={{ x: 260, y: 40 }}
            className="w-[90vw] max-w-[600px]"
            onClose={() => toggleWindow(item.id)}
          >
            {item.content}
          </Window>
        ) : null,
      )}
    </>
  )
}
