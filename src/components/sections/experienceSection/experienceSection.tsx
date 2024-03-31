import { Experience } from '@/domain/interfaces/IExperience'
import Image from 'next/image'
import React from 'react'

type ExperienceProps = {
  experience: Experience
}

const ExperienceSection = ({ experience }: ExperienceProps) => {
  return (
    <div className="flex flex-col items-start justify-center">
      {/* from - to */}
      <h5 className="font-jakarta text-lg font-light">
        from {experience.from.toLocaleDateString()} to{' '}
        {experience.to.toLocaleString()}
      </h5>
      {/* title */}
      <div className="flex flex-row justify-center items-start pt-4 gap-2">
        <div className="relative h-[30px] w-[30px]">
          <Image
            alt={`${experience.experienceType}`}
            src={`/${experience.experienceType}.svg`}
            fill
            sizes="100%"
          />
        </div>
        <h3 className="font-philosopher text-3xl font-medium">{experience.title}</h3>
      </div>
      {/* description */}
      <p className="font-philosopher text-xl pt-7">{experience.description}</p>
    </div>
  )
}

export default ExperienceSection
