import React from 'react'
import projects from '@/data/projects'
import ProjectCard from './projectCard/projectCard'
import Button from '../button/button'
import Image from 'next/image'
import Link from 'next/link'

const MainProjects = () => {
  return (
    <div className='w-full flex flex-col text-center md:text-left gap-5 md:gap-10' id='projects'>
      <h2 className='md:p-5 font-jakarta font-semibold text-xl md:text-3xl underline'>Projects</h2>
      <div className="w-full md:p-5 flex flex-row justify-center items-center flex-wrap gap-4">
        {projects.map(
          (project) =>
            project.isMainProject && (
              <ProjectCard key={project.id} project={project} />
            )
        )}
      </div>
      <div className='w-full flex justify-center items-center'>
        <Link href={'/projects'} scroll={true}>
          <Button>
            <div className='w-full flex justify-center items-center gap-2 p-3'>
              <h5 className='font-oswald '>More</h5>
              <div className='h-[20px] w-[20px] relative'>
                <Image
                  src={'/right-arrow.svg'}
                  alt='right-arrow'
                  fill
                  sizes='100%'
                />
              </div>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default MainProjects
