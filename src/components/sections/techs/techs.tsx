import { Project } from '@/interfaces/IProject'
import Image from 'next/image'
import React, { useState } from 'react'

export type TechsProps = Pick<Project, 'techs'>

const Techs = ({ techs }: TechsProps) => {
  const [tooltipVisible, setTooltipVisible] = useState({
    tech: '',
    visible: false
  })

  return (
    <div className="flex flex-row justify-center items-center p-2 gap-2 flex-wrap">
      {Array.from(techs).map((tech) => {
        return (
          <div
            key={tech}
            className="w-[40px] h-[40px] relative"
            onMouseEnter={() => setTooltipVisible({visible: true, tech})}
            onMouseLeave={() => setTooltipVisible({visible: false, tech: ''})}
          >
            <Image
              fill
              src={`/techs/${tech}.svg`}
              alt={`tech-${tech}`}
              sizes="100%"
            />
            {/* Tooltip */}
            <span
              className={`bg-light-gray absolute -bottom-10 left-0 h-10 ${tooltipVisible.tech === tech && tooltipVisible ? '' : 'hidden'} p-2 rounded-md font-jakarta z-10`}
            >
              {tech}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default Techs
