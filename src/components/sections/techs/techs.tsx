import { Project } from '@/domain/interfaces/IProject'
import Image from 'next/image'
import React, { useState } from 'react'

export type TechsProps = Pick<Project, 'techs'> & {
  isSkillSection?: boolean
}

const Techs = ({ techs, isSkillSection = false }: TechsProps) => {
  const [tooltipVisible, setTooltipVisible] = useState({
    tech: '',
    visible: false
  })

  return (
    <div className={`flex flex-row justify-center items-center ${isSkillSection ? 'p-4 gap-4' : 'p-2 gap-2'} flex-wrap`}>
      {Array.from(techs).map((tech) => {
        return (
          <div
            key={tech}
            className={`${isSkillSection ? 'w-[60px] h-[60px]' : 'w-[40px] h-[40px]'} relative`}
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
