import React from 'react'
import ExperienceSection from './experienceSection/experienceSection'
import experiences from '@/data/experiences'

const Experience = () => {
  return (
    <section className="flex flex-col gap-2 w-full" id="experience">
      {experiences.map((experience) => {
        return (
          <ExperienceSection experience={experience} key={experience.title} />
        )
      })}
    </section>
  )
}

export default Experience
