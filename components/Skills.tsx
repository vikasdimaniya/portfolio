"use client"

import Window from "./Window"

interface SkillsProps {
  defaultPosition?: { x: number; y: number }
}

export default function Skills({ defaultPosition = { x: 100, y: 100 } }: SkillsProps) {
  return (
    <Window 
      title="skills.exe" 
      defaultPosition={defaultPosition} 
      variant="dark"
      autoSize={true}
      maxWidth={600}
      minWidth={400}
    >
      <div className="space-y-6">
        <h2 className="text-lg font-bold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 gap-4 text-xs">
          <div>
            <h3 className="font-semibold text-blue-400">Languages:</h3>
            <p className="text-gray-300">Javascript (Node.js, React, Next), Python, Java, C++, Go, HTML, CSS</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-400">Frameworks:</h3>
            <p className="text-gray-300">Express, Fastify, JEST, Django, Flask</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-400">Databases:</h3>
            <p className="text-gray-300">NoSQL (MongoDB, Redis), SQL (ClickHouse, MSSQL, SQLite)</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-400">Developer Tools:</h3>
            <p className="text-gray-300">NPM, AWS, Docker, Kubernetes, JIRA, Postman, Stripe, CDNs, Sentry, GIT, Linux, vs-code</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-400">Libraries:</h3>
            <p className="text-gray-300">passport.js, socket.io, FFMPG, shaka player, hls player, Selenium, pytorch</p>
          </div>
        </div>
      </div>
    </Window>
  )
}
