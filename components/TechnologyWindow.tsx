import type React from "react"
import Window from "./Window"
import Image from "next/image"

interface TechnologyWindowProps {
  name: string
  imageSrc: string
  link: string
  defaultPosition: { x: number; y: number }
}

const TechnologyWindow: React.FC<TechnologyWindowProps> = ({ name, imageSrc, link, defaultPosition }) => {
  return (
    <Window title={`${name.toLowerCase()}.exe`} defaultPosition={defaultPosition} className="w-32 h-32">
      <div className="flex items-center justify-center h-full">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {imageSrc ? (
            <Image src={imageSrc} alt={name} width={64} height={64} />
          ) : (
            <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </a>
      </div>
    </Window>
  )
}

export default TechnologyWindow
