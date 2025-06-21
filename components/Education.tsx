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
              <div className="w-24 text-xs text-gray-500 pt-1">May 2024 - Aug 2025</div>
              <div className="flex-1 space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-xs">
                    UW
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Master of Applied Computing</h3>
                    <p className="text-xs text-gray-500">University of Windsor</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Advanced studies in computing with a focus on practical applications.
                </p>
                <button className="text-xs text-blue-500 hover:underline">
                  See more...
                </button>
              </div>
            </div>

            {/* Chandigarh University */}
            <div className="relative flex gap-8 mt-12">
              <div className="w-24 text-xs text-gray-500 pt-1">Sept 2016 - June 2020</div>
              <div className="flex-1 space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg border-2 border-gray-200 flex items-center justify-center text-white font-bold text-xs">
                    CU
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Bachelor of Engineering in Computer Science</h3>
                    <p className="text-xs text-gray-500">Chandigarh University</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Comprehensive study of computer science fundamentals and software engineering.
                </p>
                <button className="text-xs text-blue-500 hover:underline">
                  See more...
                </button>
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
