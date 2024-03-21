'use client'
import FakestoreData from '@/components/fakestoreData/fakestoreData'
import { Suspense } from 'react'
import Loading from './loading'
import HomePageLayout from '@/components/homePageLayout/homePageLayout'
import Presentation from '@/components/sections/presentation'

export default function Home() {
  return (
    <HomePageLayout>
      <Presentation/>
      <h2 className="text-2xl text-white p-5 md:p-20 font-buda font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic
        reprehenderit reiciendis quidem consequuntur voluptatem sit vitae esse
        animi, ipsa quas cupiditate amet maxime architecto rerum aut at totam
        tempora.
      </h2>
      <h2 className="text-2xl text-white p-5 md:p-20 font-oswald">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic
        reprehenderit reiciendis quidem consequuntur voluptatem sit vitae esse
        animi, ipsa quas cupiditate amet maxime architecto rerum aut at totam
        tempora.
      </h2>
      <h2 className="text-2xl text-white p-5 md:p-20 font-philosopher">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic
        reprehenderit reiciendis quidem consequuntur voluptatem sit vitae esse
        animi, ipsa quas cupiditate amet maxime architecto rerum aut at totam
        tempora.
      </h2>
      <h2 className="text-2xl text-white p-5 md:p-20 font-jakarta">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic
        reprehenderit reiciendis quidem consequuntur voluptatem sit vitae esse
        animi, ipsa quas cupiditate amet maxime architecto rerum aut at totam
        tempora.
      </h2>
      <h2 className="text-2xl text-white p-5 md:p-20 font-ubuntu">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic
        reprehenderit reiciendis quidem consequuntur voluptatem sit vitae esse
        animi, ipsa quas cupiditate amet maxime architecto rerum aut at totam
        tempora.
      </h2>
      <Suspense fallback={<Loading />}>
        <FakestoreData />
      </Suspense>
    </HomePageLayout>
  )
}
