'use client'
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

  const handleNavigate = (elementId: string) => {    
    const element = document.getElementById(elementId)    
    const elementY = element?.offsetTop || 0
    window.scrollTo({top: elementY, behavior: 'smooth'})
  }

  return (
    <button
      // href={item.path}
      onClick={() => handleNavigate(item.title.toLowerCase())}
      key={item.title}
      className={`transition ease-in-out duration-500 w-24 p-[4px] rounded-lg font-jakarta font-bold text-center border-[1px] border-light-gray hover:bg-dark-gray   ${active && styleActive}`}
    >
      {item.title}
    </button>
  )
}

export default NavLink
