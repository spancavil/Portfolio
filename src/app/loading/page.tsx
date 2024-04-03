import SkeletonGrid from '@/components/skeletonGrid/skeletonGrid'
import React from 'react'

const Loading = () => {
  return (
    <div className="w-full ph-10 flex justify-center items-start gap-3 h-[calc(100vh-260px)] md:h-[calc(100vh-320px)]">
      <SkeletonGrid page='projects' />
    </div>
  )
}

export default Loading
