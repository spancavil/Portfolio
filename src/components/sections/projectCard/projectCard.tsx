'use client'
import Image from 'next/image'
import React from 'react'

import { Project } from '@/domain/interfaces/IProject'
import Techs from '../techs/techs'
import { useRouter } from 'next/navigation'
import { removeBlankSpacesAndToLowerCase } from '@/utils/string.utils'

export type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter()
  const isLogo = project.cover.toLowerCase().includes('logo')

  const handleNavigate = () => {
    const title = removeBlankSpacesAndToLowerCase(project.title)
    router.push(`/projects/${title}`, {scroll: true})
  }

  return (
    <div
      className="transition ease-out duration-300 md:hover:-translate-y-2 hover:border-dark-white hover:bg-black flex flex-col g-3 w-full md:h-[500px] md:w-[400px] bg-dark-gray rounded-lg border-[1px] border-light-gray cursor-pointer"
      onClick={handleNavigate}
    >
      <div
        className={`w-full ${isLogo ? 'h-20' : 'h-48'} bg-black flex justify-center items-center rounded-lg`}
      >
        <div
          className={`${isLogo ? 'w-4/5 h-5/6' : 'w-full h-full'} relative overflow-hidden`}
        >
          <Image
            src={project.cover}
            fill
            sizes="100%"
            alt={project.title}
            className={`bg-black rounded-lg ${!isLogo && 'object-cover'}`}
          />
        </div>
      </div>
      <div
        className={`w-full ${isLogo ? 'h-4/5' : 'h-3/5'} p-5 flex flex-col justify-start items-center md:items-start gap-3 text-center md:text-start`}
      >
        <Techs techs={project.techs} />
        <h2 className="text-xl md:text-3xl font-jakarta font-bold">{project.title}</h2>
        <h4 className="text-base md:text-xl font-buda font-normal">
          {project.description}
        </h4>
        <h4 className="text-base md:text-xl font-buda font-semibold pt-4 md:pt-8">
          Role: {project.role}
        </h4>
      </div>
    </div>
  )
}

export default ProjectCard
