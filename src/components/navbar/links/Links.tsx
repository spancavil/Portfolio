'use client'
import NavLink from './navLink/NavLink'
import Button from './button/Button'
import { useState } from 'react'
// import { signOut, useSession } from 'next-auth/react'
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
        <div className="min-h-[20px] min-w-[20px]">
          <Image src={'/menu.png'} alt="burger" width={20} height={20} />
        </div>
      </button>
      {openNavMobile && (
        <div className="absolute top-[100px] right-0 w-[100vw] h-[calc(100vh-100px)] bg-black bg-opacity-90 z-10 flex flex-col items-center justify-center gap-3 md:hidden">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Links
