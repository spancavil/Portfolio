import React from 'react'
import './styles.css'

const HomePageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="w-full px-5 py-2 md:px-40 md:py-10 bg-black border-dashed border-[1px] border-light-gray border-opacity-80 relative">
      {/* RIGHT */}
      <div className="absolute borderImageRight right-[-20px] md:right-[-40px] lg:right-[-80px] top-[-1px] w-5 md:w-10 lg:w-20 h-[calc(100%+2px)]"></div>
      {/* black dashed */}
      <div className="absolute right-[-20px] md:right-[-40px] lg:right-[-80px] top-[-1px] w-5 md:w-10 lg:w-20 h-[calc(100%+2px)] border-dashed border-y-[1px] border-x-0 border-black z-20"></div>

      {/* LEFT */}
      <div className="absolute borderImageLeft left-[-20px] md:left-[-40px] lg:left-[-80px] top-[-1px] w-5 md:w-10 lg:w-20 h-[calc(100%+2px)]"></div>
      {/* black dashed */}
      <div className="absolute left-[-20px] md:left-[-40px] lg:left-[-80px] top-[-1px] w-5 md:w-10 lg:w-20 h-[calc(100%+2px)] border-dashed border-y-[1px] border-x-0 border-black z-20"></div>

      {/* TOP */}
      <div className="absolute borderImageTop top-[-20px] md:top-[-40px] lg:top-[-80px] left-[-1px] h-5 md:h-10 lg:h-20 w-[calc(100%+2px)]"></div>
      {/* black dashed */}
      <div className="absolute top-[-20px] md:top-[-40px] lg:top-[-80px] left-[-1px] h-5 md:h-10 lg:h-20 w-[calc(100%+2px)] border-dashed border-x-[1px] border-y-0 border-black z-20"></div>

      {/* DOWN */}
      <div className="absolute borderImageBottom bottom-[-20px] md:bottom-[-40px] lg:bottom-[-80px] left-[-1px] h-5 md:h-10 lg:h-20 w-[calc(100%+2px)]"></div>
      {/* black dashed */}
      <div className="absolute bottom-[-20px] md:bottom-[-40px] lg:bottom-[-80px] left-[-1px] h-5 md:h-10 lg:h-20 w-[calc(100%+2px)] border-dashed border-x-[1px] border-y-0 border-black z-20"></div>

      {children}
    </div>
  )
}

export default HomePageLayout
