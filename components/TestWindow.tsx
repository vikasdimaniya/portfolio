"use client"

import { useState } from "react"
import Window from "./Window"

export default function TestWindow() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Window
      title="Test Window"
      defaultPosition={{ x: 100, y: 100 }}
      className="w-80 bg-yellow-100"
      onClose={() => setIsVisible(false)}
    >
      <div className="space-y-4">
        <p className="font-bold text-lg">This is a test window. Try dragging it around!</p>
        <p className="text-sm">If you can see this, the window is rendering correctly.</p>
        <p className="text-sm">Check the debug info below to see if position updates when dragging.</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => alert("Window is interactive!")}
        >
          Click me!
        </button>
      </div>
    </Window>
  )
}
