'use client'
import ButtonDeployGit from '@/components/buttonDeployGit/buttonDeployGit'
import CarouselImage from '@/components/carouselImage/carouselImage'
import projects from '@/data/projects'
import { removeBlankSpacesAndToLowerCase } from '@/utils/string.utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'
import { Carousel } from 'react-responsive-3d-carousel'
import 'react-responsive-3d-carousel/dist/styles.css'
import { redirect } from 'next/navigation'
type Props = {
  params: Promise<{ slug: string }>
}

const ProjectDetail = ({ params }: Props) => {
  const { slug: title } = use(params)
  const project = projects.find(
    (project) => removeBlankSpacesAndToLowerCase(project.title) === title
  )

  if(!project) {
    redirect('/projects')
  }

  const paragraphsExtendedDescription = (project?.extendedDescription || '')
    .split('\n')
    .filter((paragraph) => paragraph !== '')

  return (
    <div
      className={`flex flex-col items-start justify-start gap-4 w-full md:-mt-12`}
    >
      <div className="w-full">
        <h3 className="text-xl font-jakarta text-white text-center md:text-left">
          <Link href={'/'} className="text-blue-500">
            Home
          </Link>{' '}
          /
          <Link href={'/projects'} className="text-blue-300">
            projects
          </Link>
          / {project?.title}
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center gap-4">
        <div
          className={`w-full flex flex-col justify-center gap-5 md:gap-10 ${project?.images ? 'lg:w-[70%]' : 'lg:w-2/5 md:pt-24'}`}
        >
          {project?.images ? (
            <Carousel
              items={project.images.map((image) => (
                <CarouselImage src={image} key={image} />
              ))}
              width="450px"
              height="350px"
              containerWidth="100%"
              containerHeight="350px"
              autoPlay={false}
              showStatus={false}
            />
          ) : (
            <div className="w-full relative h-[30vh] max-h-fit">
              <Image
                alt={project?.title || ''}
                src={project?.cover || ''}
                fill
                sizes="100%"
                className="object-contain md:object-top"
              />
            </div>
          )}
          {project?.deployLink || project?.githubLink ? (
            <ButtonDeployGit
              deployLink={project.deployLink}
              githubLink={project.githubLink}
            />
          ) : null}
        </div>
        <div
          className={`w-4/5 ${project?.images ? 'lg:w-[30%]' : 'lg:w-3/5'} flex flex-col justify-center gap-3 pt-4 md:pt-7`}
        >
          <h1 className="font-ubuntu font-bold text-xl md:text-3xl pb-5 text-center md:text-left">
            {project?.title}
          </h1>
          {paragraphsExtendedDescription.map((paragraph, index) => {
            return (
              <p key={index} className="font-philosopher text-base md:text-xl">
                {paragraph}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
