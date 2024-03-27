import { Project } from '@/domain/interfaces/IProject'
import { Techs } from '@/domain/enums/techs.enum'

const projects: Project[] = [
  {
    id: 1,
    title: 'Grandest Live',
    description:
      'Platform for uploading and selling videos made by content creators. Creators could also schedule calls with consumers',
    cover: '/projects/grandestLogo.svg',
    extendedDescription: `Grandest is an application for selling digital content using both money and virtual money (gems). There are basically 2 user roles: content creators and consumers.
    It is structured with nodejs and typescript using the stack: controller => application services => repository.
    A non-relational database was used as a database, in this case MongoDB. It has cron jobs (timed jobs at a certain time) for several purposes, including seeing if a consumer user's cart has spent a certain amount of time without updating, then sending an email notifying that user.
    Shopify was initially used as the marketplace for managing digital products and payment gateways and then switched to Xsolla. Finally, end-to-end functional tests were carried out using mocha and chai, and also unit tests implementing sinon with fakerjs.
    Because it is an enterprise project, neither the repository nor the deploy are available.`,
    isMainProject: true,
    role: 'Backend.',
    techs: new Set([
      Techs.NODEJS,
      Techs.EXPRESS,
      Techs.MONGODB,
      Techs.TYPESCRIPT,
      Techs.GIT,
    ]),
  },
  {
    id: 2,
    title: `Grandest Live - Coordinator Panel`,
    description: 'Dashboard for administrators of Grandest Live application.',
    cover: '/projects/grandestLogo.svg',
    extendedDescription: `Dashboard for administrators of the Grandest application. I worked as a full stack in both Frontend and Backend.
    From this dashboard you could perform various tasks related to the application: registration, modification and cancellation of users. Uploading and modifying digital content. Modification of the Home carousels and modification of app functionalities through lists.
    In the Frontend, ReactJS and MaterialUI were used as the CSS framework. At the same time, Redux Toolkit was used to manage the global state, JWT for authentication and Axios for API calls.
    Because it is an enterprise project, neither the repository nor the deploy are available.`,
    isMainProject: true,
    role: 'Fullstack dev.',
    techs: new Set([
      Techs.TYPESCRIPT,
      Techs.REACTJS,
      Techs.MATERIALUI,
      Techs.GIT,
    ]),
    images: [
      '/projects/grandest-cpanel/grandest-cpanel-1.png',
      '/projects/grandest-cpanel/grandest-cpanel-2.png',
      '/projects/grandest-cpanel/grandest-cpanel-3.png',
      '/projects/grandest-cpanel/grandest-cpanel-4.png',
      '/projects/grandest-cpanel/grandest-cpanel-5.png',
    ],
  },
  {
    id: 3,
    title: 'Battlepalooza',
    description:
      "Battlepalooza game web platform. Promotions, user auth and marketplace with purchase and sale of NFT's from the game.",
    extendedDescription: `Battlepalooza is a web platform corresponding to the homonymous game for the purchase and sale of NFTs.
    The app was created with ReactJS, the styles with modular CSS and SASS and the global state management with Context. API calls were made through Axios. Authentication was carried out through the JWT API. At the same time, for the purchase and sale of NFTs, transactions were executed in order according to API requirements.
    Currently the API is no longer active, but the code is available and only the landing page is visible in the deploy.`,
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
    deployLink: 'https://battlepalooza.netlify.app/',
    githubLink: 'https://github.com/spancavil/battepalooza',
  },
  {
    id: 4,
    title: 'SkydropX',
    description:
      'Web platform to be used on Oxxo store terminals, in tablet resolution. Handling of packages with shipments.',
    extendedDescription: `Skydropx is a web platform to be used on Oxxo store self-service terminals, in tablet resolution. Handling of packages with shipments.
    The app was created with ReactJS, the styles with modular CSS and SASS and the global state management with Context. API calls were made through Axios, and authentication was performed through the API's JWT. Once the receipt is generated, the API returns a PDF that was also displayed on the screen for printing. The data validation of the form was carried out with the Joi library.
    Currently the API is no longer active, but the code is available and only the landing page is visible in the deploy.`,
    cover: '/projects/skydropx.png',
    isMainProject: true,
    role: 'Frontend developer',
    techs: new Set([
      Techs.REACTJS,
      Techs.CSSMODULES,
      Techs.GIT,
      Techs.JAVASCRIPT,
    ]),
    githubLink: 'https://github.com/spancavil/skydropX',
    deployLink: 'https://skydrop-x.vercel.app/'
  },
]

export default projects
