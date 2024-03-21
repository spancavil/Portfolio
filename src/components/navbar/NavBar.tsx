import Link from 'next/link'
import Links from './links/Links'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="min-h-[80px] w-full flex items-center justify-between top-0 fixed z-10 backdrop-blur-md px-3 border-b-[1px] border-b-light-gray">
      <div className="text-3xl transition ease-in-out duration-500 hover:text-neutral-300 font-jakarta">
        <Link href={'/'}>Portfolio</Link>
      </div>
      <Links />
    </div>
  )
}

export default NavBar
