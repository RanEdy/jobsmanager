import { IEvent } from "@/entities/IEvent";
import { GenericDAO } from "./GenericDAO";

export class EventDAO extends GenericDAO<IEvent, number>
{
    constructor()
    {
        super('event');
    }
}