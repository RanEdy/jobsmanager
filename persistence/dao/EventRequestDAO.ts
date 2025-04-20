import { IEventRequest } from "@/entities/IEventRequest";
import { GenericDAO } from "./GenericDAO";

export class EventRequestDAO extends GenericDAO<IEventRequest, number>
{
    constructor()
    {
        super('eventRequest');
    }
}