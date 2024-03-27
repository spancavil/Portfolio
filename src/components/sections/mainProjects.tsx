import React from 'react'
import projects from '@/data/projects'
import ProjectCard from './projectCard/projectCard'

const MainProjects = () => {
  return (
    <div className='w-full flex flex-col text-center md:text-left gap-5 md:gap-10'>
      <h2 className='md:p-5 font-jakarta font-semibold text-xl md:text-3xl underline'>Projects</h2>
      <div className="w-full md:p-5 flex flex-row justify-center items-center flex-wrap gap-4">
        {projects.map(
          (project) =>
            project.isMainProject && (
              <ProjectCard key={project.id} project={project} />
            )
        )}
      </div>
    </div>
  )
}

export default MainProjects
