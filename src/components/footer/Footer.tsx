import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="flex justify-between items-center text-[gray] w-full h-[80px] absolute -bottom-[80px] left-0 p-4 md:p-16">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/sebastianancavil/"
        rel="noopener noreferrer"
      >
        <div className="font-bold relative h-8 w-8 md:h-10 md:w-10">
          <Image
            fill
            className="object-contain"
            src={'/linkedin.svg'}
            alt="linkedin"
          />
        </div>
      </a>
      <div className='flex flex-row justify-center items-center gap-1'>
        <h3 className='font-jakarta text-base md:text-lg'>Made with</h3>
        <div className="font-bold relative h-3 w-3 md:h-5 md:w-5">
          <Image fill className="object-contain" src={'/love.svg'} alt="love" />
        </div>
        <h3 className='font-jakarta text-base md:text-lg'>& NextJS</h3>
      </div>
      <div className="text-base md:text-xl">
        <a
          target="_blank"
          href="https://github.com/spancavil"
          rel="noopener noreferrer"
        >
          @spancavil
        </a>
      </div>
    </div>
  )
}

export default Footer
