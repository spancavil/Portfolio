import React from 'react'
import { skills } from '@/data/skills'
import SkillSection from './skillSection/skillSection'
import { Techs } from '@/domain/enums/techs.enum'

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-10">
      <h2 className="md:p-5 font-jakarta font-semibold text-xl md:text-3xl underline">
        Skills
      </h2>
      <div
        id="skills"
        className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8"
      >
        {Object.keys(skills).map((skillGroup) => {
          //@ts-ignore
          const skillObject = { [skillGroup]: skills[skillGroup] as Set<Techs> }
          return <SkillSection skill={skillObject} key={skillGroup} />
        })}
      </div>
    </div>
  )
}

export default Skills
