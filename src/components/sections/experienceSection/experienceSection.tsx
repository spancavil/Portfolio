import { Experience } from '@/domain/interfaces/IExperience'
import Image from 'next/image'
import React from 'react'

type ExperienceProps = {
  experience: Experience
}

const ExperienceSection = ({ experience }: ExperienceProps) => {
  const from = experience.from.toLocaleDateString()
  const to = experience.to instanceof Date ? experience.to.toLocaleDateString() : 'date'
  return (
    <div className="flex flex-col items-start justify-center">
      {/* from - to */}
      <h5
        className="font-jakarta text-sm md:text-lg font-light"
        suppressHydrationWarning
      >
        from {from} to {to}
      </h5>
      {/* title */}
      <div className="flex flex-row justify-center items-start pt-4 gap-2">
        <div className="relative w-[30px] h-[30px] md:h-[30px] md:w-[30px]">
          <Image
            alt={`${experience.experienceType}`}
            src={`/${experience.experienceType}.svg`}
            fill
            sizes="100%"
          />
        </div>
        <h3 className="font-philosopher text-xl md:text-3xl font-medium">
          {experience.title}
        </h3>
      </div>
      {/* description */}
      <p className="font-philosopher text-base md:text-xl pt-7">
        {experience.description}
      </p>
    </div>
  )
}

export default ExperienceSection
