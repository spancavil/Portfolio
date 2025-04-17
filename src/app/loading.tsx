import SkeletonGrid from '@/components/skeletonGrid/skeletonGrid'

const Loading = (props: any) => {  
  return (
    <div className="w-full p-10 flex justify-center items-start flex-col gap-3">
      <SkeletonGrid page='home' />
    </div>
  )
}

export default Loading
