import React from 'react'
import { Skeleton } from '@mui/material'

type SkeletonGridProps = {
  page?: 'home' | 'projects' | 'project'
}

/* Default breakpoint: 
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px 
Useful link: https://theme-ui.com/sx-prop
*/

const SkeletonGrid = ({ page = 'home' }: SkeletonGridProps) => {
  if (page === 'home') {
    return (
      <div className="flex flex-col w-full h-full justify-start items-center gap-8 px-5 md:px-10">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-5">
          <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px]">
            <Skeleton
              sx={{ bgcolor: '#2B2B2B' }}
              variant="circular"
              animation={'wave'}
              width={'100%'}
              height={'100%'}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 w-full md:w-[calc(100%-200px)]">
            <div className="w-full h-[40px]">
              <Skeleton
                sx={{ bgcolor: '#2B2B2B' }}
                variant="rectangular"
                width={'100%'}
                height={'100%'}
                animation={'wave'}
              />
            </div>
            <div className="w-full h-[40px]">
              <Skeleton
                sx={{ bgcolor: '#2B2B2B' }}
                variant="rectangular"
                width={'100%'}
                height={'100%'}
                animation={'wave'}
              />
            </div>
            <div className="w-full h-[40px]">
              <Skeleton
                sx={{ bgcolor: '#2B2B2B' }}
                variant="rectangular"
                width={'100%'}
                height={'100%'}
                animation={'wave'}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-full h-[200px]">
          <Skeleton
            sx={{ bgcolor: '#2B2B2B' }}
            variant="rectangular"
            width={'100%'}
            height={'100%'}
            animation={'wave'}
          />
        </div>
      </div>
    )
  }

  if (page === 'project') {
    return (
      <main className={`flex flex-col items-start justify-start gap-4 w-full`}>
        <div className="w-full">
          <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-center gap-4">
            <div className="md:w-[450px] w-full md:h-[350px] h-[200px]">
              <Skeleton
                sx={{ bgcolor: '#2B2B2B' }}
                variant="rounded"
                width={'100%'}
                height={'100%'}
                animation={'wave'}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 w-full md:w-[calc(100%-450px)] h-full">
              <div className="w-full h-[40px]">
                <Skeleton
                  sx={{ bgcolor: '#2B2B2B' }}
                  variant="rectangular"
                  width={'100%'}
                  height={'100%'}
                  animation={'wave'}
                />
              </div>
              <div className="w-full h-[250px] md:h-[350px]">
                <Skeleton
                  sx={{ bgcolor: '#2B2B2B' }}
                  variant="rectangular"
                  width={'100%'}
                  height={'100%'}
                  animation={'wave'}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (page === 'projects') {
    return (
      <div className="w-full flex flex-col text-center md:text-left md:-mt-12">
        <div className="w-full flex flex-row justify-center items-center md:items-start flex-wrap gap-5 md:gap-10 md:py-10">
          <div className="w-full md:w-[400px] h-[250px] md:h-[400px]">
            <Skeleton
              sx={{ bgcolor: '#2B2B2B' }}
              variant="rounded"
              width={'100%'}
              height={'100%'}
              animation={'wave'}
            />
          </div>
          <div className="w-full md:w-[400px] h-[250px] md:h-[400px]">
            <Skeleton
              sx={{ bgcolor: '#2B2B2B' }}
              variant="rounded"
              width={'100%'}
              height={'100%'}
              animation={'wave'}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SkeletonGrid
