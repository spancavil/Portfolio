import { Techs } from '../enums/techs.enum'

export interface Project {
  id: number
  title: string
  description: string
  extendedDescription?: string
  role: string
  techs: Set<Techs>
  isMainProject: boolean
  cover: string
  githubLink?: string,
  deployLink?: string,
  images?: string[] | null
}
