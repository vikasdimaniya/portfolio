"use client"

import { forwardRef } from "react"
import Window, { WindowRef } from "./Window"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

interface LinksProps {
  defaultPosition: { x: number; y: number }
  onClose?: () => void
}

const Links = forwardRef<WindowRef, LinksProps>(
  ({ defaultPosition, onClose }, ref) => {
  return (
      <Window ref={ref} title="links.exe" defaultPosition={defaultPosition} variant="dark" autoSize={true} maxWidth={300} minWidth={200} onClose={onClose}>
      <div className="space-y-4">
        <h2 className="text-lg font-bold mb-4">My Links</h2>
        <div className="space-y-2">
          <a
            href="https://github.com/vikasdimaniya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/vikasdimaniya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:kumar3s@uwindsor.ca"
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
      </div>
    </Window>
  )
}
)

Links.displayName = "Links"

export default Links
