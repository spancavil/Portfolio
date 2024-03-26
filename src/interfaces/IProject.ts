import { Techs } from './techs.enum'

export interface Project {
  id: number
  title: string
  description: string
  extendedDescription?: string
  role: string
  techs: Set<Techs>
  isMainProject: boolean
  cover: string
  images?: string[] | null
}
