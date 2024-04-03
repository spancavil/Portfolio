import type { Metadata } from 'next'
import NavBar from '@/components/navbar/NavBar'
import './globals.css'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
  title: 'Sebastian Ancavil - Portfolio',
  description: 'Sebastian Ancavil - Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white w-full p-5 md:p-10 lg:p-20 flex items-center flex-col justify-between mt-[80px] relative">
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
