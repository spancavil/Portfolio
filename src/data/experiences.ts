import { ExperienceType } from '@/domain/enums/experienceTypes.enum'
import { Experience } from '@/domain/interfaces/IExperience'

const experiences: Experience[] = [
  {
    from: new Date(2021, 8, 1),
    to: 'date',
    title: `Wodeva Company - Fullstack Dev - ReactJS & NodeJS & AWS`,
    description: `Backend dev for Grandest live project: Express - Typescript - MongoDB. Also in Frontend: ReactJS & Redux Toolkit.
    Fullstack Web development for NFT marketplace: React JS and Node with Express`,
    experienceType: ExperienceType.WORK,
  },
  {
    from: new Date(2022, 1, 1),
    to: 'date',
    title: `React JS - React Native Professor - Coderhouse`,
    description: `Teaching React and React Native Basics - Components, Props, Component Lifecycle. Routing and Global state libraries (context and redux). Git &
    Github. Complementary styling libraries, like Tailwind CSS and Material UI.`,
    experienceType: ExperienceType.TEACHING
  },
  {
    from: new Date(2023, 1, 1),
    to: 'date',
    title: `Java - Spring Boot Professor - Coderhouse`,
    description: `Java fundamentals, data types: primitives and non-primitives, loops. Interfaces, abstract classes and Object Oriented Programming. Spring Boot, API Rest, layer modelling.`,
    experienceType: ExperienceType.TEACHING,
  },
  {
    from: new Date(2021, 6, 1),
    to: new Date(2021, 11, 1),
    title: `Programming III - Professor - Universidad de San Andrés`,
    description: `Teaching React and React Native Basics - Components, Props, Component Lifecycle and Firebase`,
    experienceType: ExperienceType.TEACHING
  },
  {
    from: new Date(2022, 0, 1),
    to: 'date',
    title: `Freelance developer`,
    description: `Get involved in several freelance projects. The main projects were: SkydropX for Oxxo and "El Gatito azul" a page for cat scratchers (see projects)`,
    experienceType: ExperienceType.FREELANCE
  }
]

export default experiences
