import React from 'react'
import ExperienceSection from './experienceSection/experienceSection'
import experiences from '@/data/experiences'

const Experience = () => {
  return (
    <section className="flex flex-col gap-10 md:gap-16 w-full" id="experience">
      <h2 className="w-full md:p-5 font-jakarta font-semibold text-xl md:text-3xl text-center md:text-left underline">
        Experience
      </h2>
      {experiences.map((experience) => {
        return (
          <ExperienceSection experience={experience} key={experience.title} />
        )
      })}
    </section>
  )
}

export default Experience
