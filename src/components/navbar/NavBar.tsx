import Link from 'next/link'
import Links from './links/Links'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="min-h-[100px] w-full flex items-center justify-between top-0 fixed z-10 backdrop-blur-md px-3">
      <div className="text-3xl hover:text-neutral-300 font-jakarta">
        <Link href={'/'}>Sebastián Ancavil portfolio</Link>
      </div>
      <Links />
    </div>
  )
}

export default NavBar
