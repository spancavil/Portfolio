import { Techs as techEnum } from '@/domain/enums/techs.enum'
import React from 'react'
import Techs from '../techs/techs'

type SkillSectionProps = {
  skill: {
    [key: string]: Set<techEnum>
  }
}

const SkillSection = ({ skill }: SkillSectionProps) => {
  return (
    <div className="w-full md:w-1/3 flex flex-col items-center gap-4 md:gap-8 bg-dark-gray rounded-lg border-[1px] border-light-gray p-3">
      <h2 className='font-ubuntu text-lg md:text-xl '>{Object.keys(skill)[0]}</h2>
      <Techs techs={Object.values(skill)[0]} isSkillSection={true}/>
    </div>
  )
}

export default SkillSection
