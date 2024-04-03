import SkeletonGrid from '@/components/skeletonGrid/skeletonGrid'

const Loading = () => {  
  return (
    <div className="w-full p-10 flex justify-center items-start flex-col gap-3">
      <SkeletonGrid page='projects' />
    </div>
  )
}

export default Loading
