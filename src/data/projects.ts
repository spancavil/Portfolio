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
      Techs.MOCHA,
      Techs.CHAI,
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
  {
    id: 5,
    title: 'Tasks timer',
    cover: '/projects/tasks-timer/tasks-timer1.png',
    description: 'A task timer that would also work as an interval trainer',
    extendedDescription: `A task timer that would also work as an interval trainer.`,
    isMainProject: false,
    role: 'Frontend developer',
    techs: new Set([
      Techs.JAVASCRIPT,
      Techs.GIT,
    ]),
    githubLink: 'https://github.com/spancavil/CoderHouse-ProyectoFinal',
    deployLink: 'https://spancavil.github.io/CoderHouse-ProyectoFinal',
    images: [
      '/projects/tasks-timer/tasks-timer1.png',
      '/projects/tasks-timer/tasks-timer2.png',
      '/projects/tasks-timer/tasks-timer3.png',
      '/projects/tasks-timer/tasks-timer4.png',
    ]
  },
  {
    id: 6,
    title: 'Battlepalooza admin tool',
    cover: '/projects/bp-admin-tool/bp-admin-tool-1.png',
    description: 'Battlepalooza administrator tool for uploading different drops with images',
    extendedDescription: 'Skeleton for the Battlepalooza dashboard using React as the main library and MaterialUI as the CSS framework. The model was finished, but it was not implemented',
    techs: new Set([Techs.REACTJS, Techs.MATERIALUI, Techs.CSSMODULES]),
    isMainProject: true,
    role: 'Frontend',
    deployLink: 'https://bp-admin.netlify.app/',
    githubLink: 'https://github.com/spancavil/bp-admin-tool',
    images: [
      '/projects/bp-admin-tool/bp-admin-tool-1.png',
      '/projects/bp-admin-tool/bp-admin-tool-2.png',
      '/projects/bp-admin-tool/bp-admin-tool-3.png',
      '/projects/bp-admin-tool/bp-admin-tool-4.png',
    ]
  },
  {
    id: 7,
    title: 'Billing System CRUD',
    description: 'A billing API using Spring Boot and SQL',
    extendedDescription: `This API is designed following Spring Boot principles and using JPA Hibernate.
    It consists of a billing system that has 4 interrelated entities: customer, product, invoice, and invoice_detail.
    This is a billing system given in the Coderhouse Academy Commission for Beginning Java and it's deployed in on render, also using Docker for this purpose.`,
    cover: '/projects/javacrudbillingsystem.jpeg',
    isMainProject: true,
    role: 'Backend',
    techs: new Set([Techs.JAVA, Techs.SPRINGBOOT, Techs.MYSQL]),
    deployLink: 'https://deploy-jar-example.onrender.com',
    githubLink: 'https://github.com/spancavil/DeployJavaJar',
  },
  {
    id: 8,
    title: 'NextJS Blog',
    description: 'A blog with authentication using NextJS and MongoDB as database',
    extendedDescription: `App made with NextJS and server-side actions to connect with MongoDB.
    It has an authentication system with both email and Github credentials, using next-auth, with implementation of protected views and routes.
    Additional libraries are also used: react-hook-form for handling forms and errors and sonner for sending simple alerts`,
    cover: '/projects/nextjs-blog/nextjs-blog1.png',
    isMainProject: true,
    role: 'Fullstack dev',
    techs: new Set([Techs.NEXTJS, Techs.TAILWINDCSS, Techs.TYPESCRIPT, Techs.GIT, Techs.MONGODB]),
    deployLink: 'https://nextjs-blog-pi-azure-36.vercel.app/',
    githubLink: 'https://github.com/spancavil/nextjs-blog',
    images: [
      '/projects/nextjs-blog/nextjs-blog1.png',
      '/projects/nextjs-blog/nextjs-blog2.png',
      '/projects/nextjs-blog/nextjs-blog3.png',
      '/projects/nextjs-blog/nextjs-blog4.png',
    ]
  },
  {
    id: 9,
    title: 'Django Blog',
    description: 'A blog using django with authentication',
    extendedDescription: `A blog using Django with several features like authentication, chat, view post and post detail. Also has the possibility for edit and remove posts.
    This app follows the model view template pattern and also it has a dashboard app where different users can be authorized.`,
    isMainProject: true,
    cover: '/projects/djangoblog.png',
    role: 'Fullstack dev',
    techs: new Set([Techs.DJANGO, Techs.PYTHON, Techs.MYSQL, Techs.CSSMODULES]),
    githubLink: 'https://github.com/spancavil/blog-django',
  },
  {
    id: 10,
    title: 'Form products with chat and websocket',
    cover: '/projects/form-products/form-products1.png',
    description: 'Getting started with express and node js plus websocket',
    extendedDescription: 'Getting started with express and node js, along with the websocket application for a chat',
    isMainProject: false,
    role: 'Backend',
    techs: new Set([Techs.NODEJS, Techs.EXPRESS]),
    githubLink: 'https://github.com/spancavil/glitch_nodeServerChatAndProducts',
    deployLink: 'https://sebas-ancavil-websocketii.glitch.me/',
    images: [
      '/projects/form-products/form-products1.png',
      '/projects/form-products/form-products2.png',
    ]
  },
  {
    id: 11,
    title: 'Street standarizer',
    cover: '/projects/street-normalizer/street-normalizer1.png',
    description: 'Using the GeoRef API for street normalization and bootstrap',
    extendedDescription: 'Using the GeoRef API for street normalization and bootstrap',
    isMainProject: false,
    role: 'Frontend',
    techs: new Set([Techs.JAVASCRIPT, Techs.CSSMODULES]),
    githubLink: 'https://github.com/spancavil/Async-con-GeoRef',
    deployLink: 'https://spancavil.github.io/Async-con-GeoRef/',
    images: [
      '/projects/street-normalizer/street-normalizer1.png',
      '/projects/street-normalizer/street-normalizer2.png',
      '/projects/street-normalizer/street-normalizer3.png',
      '/projects/street-normalizer/street-normalizer4.png',
    ]
  },
  {
    id: 12,
    title: 'API ecommerce',
    description: 'It is the API of an ecommerce corresponding to the final project of the Coderhouse Backend course',
    extendedDescription: 'Final project of the backend course (6 months long) using NodeJS, Express, EJS as a template engine for rendering, Passport for authentication, and Mongo Atlas was used as a non-SQL database.',
    cover: '/ecommerce.jpeg',
    isMainProject: false,
    role: 'Backend',
    techs: new Set([Techs.APIREST, Techs.EXPRESS, Techs.NODEJS, Techs.MONGODB, Techs.GIT]),
    githubLink: 'https://github.com/spancavil/Backend-3era-preentrega',
  },
  {
    id: 13,
    title: 'El Gatito Azul',
    description: 'Ecommerce for cat scratchers using React',
    extendedDescription: `For this freelance project, in addition to React, the following technologies were used:
    Material-UI: For adding modals and forms.
    emailjs-com: To send emails to the company notifying a new order.
    Firebase: Use of firebase to manage the product database and generated orders.`,
    cover: '/projects/elgatitoazul.png',
    isMainProject: false,
    role: 'Frontend',
    techs: new Set([Techs.FIREBASE, Techs.REACTJS, Techs.MATERIALUI, Techs.GIT])
  },
  {
    id: 14,
    title: 'Flask chain',
    description: 'Fundamentals of blockchain ⛓ running on a Flask 🐍 microserver',
    extendedDescription: 'Fundamentals of blockchain ⛓ running on a Flask 🐍 microserver',
    cover: '/flaskchain.jpeg',
    isMainProject: false,
    role: 'Backend',
    techs: new Set([Techs.FLASK, Techs.PYTHON, Techs.GIT])
  },
  {
    id: 15,
    title: 'Gin books',
    description: 'A basic books CRUD (create read update and delete) with Golang - Gin framework.',
    extendedDescription: 'A basic books CRUD (create read update and delete) with Golang - Gin framework.',
    cover: '/ginbooks.jpeg',
    isMainProject: false,
    role: 'Backend',
    techs: new Set([Techs.APIREST, Techs.GOLANG]),
    githubLink: 'https://github.com/spancavil/golang-gin-books',
  }
]

export default projects
