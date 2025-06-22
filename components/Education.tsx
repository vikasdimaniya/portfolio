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
          </div>
        </div>
      </Window>
    )
  }
)

Education.displayName = "Education"

export default Education
