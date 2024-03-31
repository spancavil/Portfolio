import { ExperienceType } from '@/domain/enums/experienceTypes.enum'
import { Experience } from '@/domain/interfaces/IExperience'

const experiences: Experience[] = [
  {
    from: new Date(2020, 9, 1),
    to: 'date',
    title: `Wodeva Company - Fullstack Dev - ReactJS & NodeJS & AWS`,
    description: `Backend dev for Grandest live project: Express - Typescript - MongoDB. Also in Frontend: ReactJS & Redux Toolkit.
    Fullstack Web development for NFT marketplace: React JS and Node with Express`,
    experienceType: ExperienceType.WORK,
  },
]

export default experiences
