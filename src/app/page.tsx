'use client'
import HomePageLayout from '@/components/homePageLayout/homePageLayout'
import Presentation from '@/components/sections/presentation'
import MainProjects from '@/components/sections/mainProjects'
import Separator from '@/components/separator/separator'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'

export default function Home() {
  return (
    <HomePageLayout>
      <Presentation />
      <Separator />
      <MainProjects />
      <Separator />
      <Experience />
      <Separator />
      <Skills />
    </HomePageLayout>
  )
}
