import { IIncident } from "@/entities/IIncident";
import { GenericDAO } from "./GenericDAO";

export class IncidentDAO extends GenericDAO<IIncident, number>
{
    constructor()
    {
        super('incident');
    }
}