import Image from "next/image"

type Props = {}

const NotFound = (props: Props) => {
  return <main className="h-[calc(100vh-260px)] md:h-[calc(100vh-320px)] w-full flex gap-5 justify-center items-center">
      <h1 className="font-jakarta font-semibold text-lg md:text-2xl">Oops ... page not found </h1>
      <div className="relative h-[30px] w-[30px]">
        <Image
          src='/notfound.svg'
          alt='notfound'
          fill
          sizes="100%"
          className="scale-[300%]"
        />
      </div>
    </main>
}

export default NotFound
