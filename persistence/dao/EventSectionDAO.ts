import { IEventSection } from "@/entities/IEventSection";
import { GenericDAO } from "./GenericDAO";

export class EventSectionDAO extends GenericDAO<IEventSection, number>
{
    constructor()
    {
        super('eventSection');
    }
}