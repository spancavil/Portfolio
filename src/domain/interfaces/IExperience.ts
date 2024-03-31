import { ExperienceType } from "../enums/experienceTypes.enum"

export interface Experience {
    title: string
    from: Date
    to: Date | 'date'
    description: string
    experienceType: ExperienceType
}