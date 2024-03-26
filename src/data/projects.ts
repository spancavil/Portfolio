import { Project } from '@/interfaces/IProject'
import { Techs } from '@/interfaces/techs.enum'

const projects: Project[] = [
  {
    id: 1,
    title: 'Grandest Live',
    description:
      'Platform for uploading and selling videos made by content creators. Creators could also schedule calls with consumers',
    cover: '/projects/grandestLogo.svg',
    isMainProject: true,
    role: 'Fullstack developer. Main backend.',
    techs: new Set([
      Techs.NODEJS,
      Techs.EXPRESS,
      Techs.MONGODB,
      Techs.TYPESCRIPT,
      Techs.REACTJS,
      Techs.MATERIALUI,
      Techs.GIT,
    ]),
  },
  {
    id: 2,
    title: 'Battlepalooza',
    description:
      "Battlepalooza game web platform. Promotions, user auth and marketplace with purchase and sale of NFT's from the game.",
    cover: '/projects/battlepalooza.png',
    isMainProject: true,
    role: 'Fullstack developer. Main Frontend',
    techs: new Set([
      Techs.REACTJS,
      Techs.CSSMODULES,
      Techs.NODEJS,
      Techs.EXPRESS,
      Techs.GIT,
    ]),
  },
  {
    id: 3,
    title: "SkydropX",
    description: "Web platform to be used on Oxxo store terminals, in tablet resolution. Handling of packages with shipments.",
    cover: "/projects/skydropx.png",
    isMainProject: true,
    role: "Frontend developer",
    techs: new Set([Techs.REACTJS, Techs.CSSMODULES, Techs.GIT, Techs.JAVASCRIPT])
  },
  {
    id: 1,
    title: 'Grandest Live',
    description:
      'Platform for uploading and selling videos made by content creators. Creators could also schedule calls with consumers',
    cover: '/projects/grandestLogo.svg',
    isMainProject: true,
    role: 'Fullstack developer. Main backend.',
    techs: new Set([
      Techs.NODEJS,
      Techs.EXPRESS,
      Techs.MONGODB,
      Techs.TYPESCRIPT,
      Techs.REACTJS,
      Techs.MATERIALUI,
      Techs.GIT,
    ]),
  },
  {
    id: 1,
    title: 'Grandest Live',
    description:
      'Platform for uploading and selling videos made by content creators. Creators could also schedule calls with consumers',
    cover: '/projects/grandestLogo.svg',
    isMainProject: true,
    role: 'Fullstack developer. Main backend.',
    techs: new Set([
      Techs.NODEJS,
      Techs.EXPRESS,
      Techs.MONGODB,
      Techs.TYPESCRIPT,
      Techs.REACTJS,
      Techs.MATERIALUI,
      Techs.GIT,
    ]),
  },
  {
    id: 1,
    title: 'Grandest Live',
    description:
      'Platform for uploading and selling videos made by content creators. Creators could also schedule calls with consumers',
    cover: '/projects/grandestLogo.svg',
    isMainProject: true,
    role: 'Fullstack developer. Main backend.',
    techs: new Set([
      Techs.NODEJS,
      Techs.EXPRESS,
      Techs.MONGODB,
      Techs.TYPESCRIPT,
      Techs.REACTJS,
      Techs.MATERIALUI,
      Techs.GIT,
    ]),
  },
]

export default projects
