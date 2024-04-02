import { Techs } from '@/domain/enums/techs.enum'
import { Skills } from '@/domain/interfaces/ISkills'

export const skills: Skills = {
  Backend: new Set([
    Techs.TYPESCRIPT,
    Techs.NODEJS,
    Techs.EXPRESS,
    Techs.NESTJS,
    Techs.JEST,
    Techs.APIREST,
    Techs.JAVA,
    Techs.SPRINGBOOT,
    Techs.MOCHA,
    Techs.CHAI,
    Techs.JEST,
    Techs.GOLANG,
    Techs.PYTHON,
    Techs.DJANGO,
    Techs.FLASK,
    Techs.GIT,
  ]),
  Frontend: new Set([
    Techs.JAVASCRIPT,
    Techs.NEXTJS,
    Techs.REACTJS,
    Techs.TAILWINDCSS,
    Techs.MATERIALUI,
    Techs.CSSMODULES,
    Techs.APIREST,
    Techs.GIT,
  ]),
  Databases: new Set([
    Techs.MONGODB,
    Techs.MYSQL,
    Techs.POSTGRESQL,
  ])
}
