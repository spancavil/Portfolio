'use client'
import NavLink from './navLink/NavLink'
import { useState } from 'react'
import Image from 'next/image'

type Props = {}

const Links = (props: Props) => {
  // const session = useSession()
  const [openNavMobile, setOpenNavMobile] = useState(false)
  // const isAdmin = true
  const links = [
    { title: 'Home', path: '/about' },
    { title: 'Skills', path: '/skills' },
    { title: 'Contact', path: '/contact' },
  ]

  return (
    <div className="flex items-center">
      <div className="hidden md:flex md:items-center md:gap-3">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
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
      {openNavMobile && (
        <div className="animate-fadeIn absolute top-[100px] right-0 w-[100vw] h-[calc(100vh-100px)] bg-black bg-opacity-90 z-10 flex flex-col items-center justify-center gap-3 md:hidden">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Links
