import { Techs } from "../enums/techs.enum";

export interface Skills {
    Backend: Set<Techs>,
    Frontend: Set<Techs>,
    Databases: Set<Techs>,
    Devops?: Set<Techs>
}