import React from 'react'
import Button from '../button/button'
import Image from 'next/image'

type ButtonDeployGitProps = {
  githubLink?: string
  deployLink?: string
}

const ButtonDeployGit = ({ githubLink, deployLink }: ButtonDeployGitProps) => {    
  return (
    <div className="flex flex-row justify-center gap-3 md:gap-5">
      {deployLink && (
        <a target="_blank" href={deployLink} rel="noopener noreferrer">
          <Button width={150} height={60}>

            <div className="w-full h-full flex items-center justify-center gap-3">
              <span className="font-ubuntu text-lg md:text-xl">Deploy</span>
              <div className="h-[20px] w-[20px] md:h-[30px] md:w-[30px] relative">
                <Image src={'/deploy.svg'} fill alt="deploy" sizes="100%" />
              </div>
            </div>
          </Button>
        </a>
      )}
      {githubLink && (
        <a target="_blank" href={githubLink} rel="noopener noreferrer">
          <Button width={150} height={60}>
            <div className="w-full h-full flex items-center justify-center gap-3">
              <span className="font-ubuntu text-lg md:text-xl">Github</span>
              <div className="h-[20px] w-[20px] md:h-[30px] md:w-[30px] relative">
                <Image src={'/github.svg'} fill alt="deploy" sizes="100%" />
              </div>
            </div>
          </Button>
        </a>
      )}
    </div>
  )
}

export default ButtonDeployGit
