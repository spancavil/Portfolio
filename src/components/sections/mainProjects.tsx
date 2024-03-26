import React from 'react'
import projects from '@/data/projects'
import ProjectCard from './projectCard/projectCard'

const MainProjects = () => {
  return (
    <div className="bg-teal-700 w-full md:p-5 flex flex-row justify-center items-center flex-wrap gap-4">
      {projects.map((project) => project.isMainProject && (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default MainProjects
