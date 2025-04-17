import SkeletonGrid from '@/components/skeletonGrid/skeletonGrid'

const Loader = () => {
  return (
    <div className="w-full p-10 flex justify-center items-start flex-col gap-3">
      <SkeletonGrid />
    </div>
  )
}

export default Loader
