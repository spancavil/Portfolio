'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  item: {
    path: string
    title: string
  }
}

const NavLink = ({ item }: Props) => {
  const pathName = usePathname()
  const active = pathName === item.path
  const styleActive = 'bg-gray text-white hover:bg-light-gray'
  return (
    <Link
      href={item.path}
      key={item.title}
      className={`transition ease-in-out duration-500 w-24 p-[4px] rounded-lg font-jakarta font-bold text-center border-[1px] border-light-gray hover:bg-dark-gray   ${active && styleActive}`}
    >
      {item.title}
    </Link>
  )
}

export default NavLink
