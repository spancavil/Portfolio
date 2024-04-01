import ProjectCard from '@/components/sections/projectCard/projectCard'
import projects from '@/data/projects'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className="w-full flex flex-col text-center md:text-left md:-mt-12">
      <div className="w-full">
        <h3 className="text-xl font-jakarta text-white text-center md:text-left pb-5">
          <Link href={'/'} className="text-blue-500">
            Home
          </Link>{' '}
          / projects
        </h3>
      </div>
      <div className="w-full md:p-5 flex flex-row justify-center items-center flex-wrap gap-5 md:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
