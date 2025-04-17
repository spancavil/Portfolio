'use client'
import NavLink from './navLink/NavLink'
import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Links = () => {
  const [openNavMobile, setOpenNavMobile] = useState(false)
  const pathName = usePathname()
  const isHome = pathName === '/'
  const links = isHome
    ? [
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/skills' },
        { title: 'Experience', path: 'experience' },
        { title: 'Skills', path: '/contact' },
      ]
    : []

  return (
    <div className="flex items-center">
      <div className="hidden md:flex md:items-center md:gap-3">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      {isHome && (
        <button
          onClick={() => setOpenNavMobile((value) => !value)}
          className="flex md:hidden"
        >
          <div className="min-h-[20px] min-w-[20px] relative">
            <Image
              src={'/close.svg'}
              alt="close"
              width={20}
              height={20}
              className={`absolute top-0 ${openNavMobile ? 'opacity-100 animate-fadeIn' : 'opacity-0 animate-fadeOut'}`}
            />
            <Image
              src={'/menu.png'}
              alt="burger"
              width={20}
              height={20}
              className={`absolute top-0 ${!openNavMobile ? 'opacity-100 animate-fadeIn' : 'opacity-0 animate-fadeOut'}`}
            />
          </div>
        </button>
      )}
      {openNavMobile && (
        <div className="animate-fadeIn absolute top-[80px] right-0 w-[100vw] h-[calc(100vh-80px)] bg-black bg-opacity-90 z-10 flex flex-col items-center justify-center gap-3 md:hidden">
          {links.map((link) => (
            <NavLink item={link} key={link.title} setOpenNavMobile = {setOpenNavMobile}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default Links
