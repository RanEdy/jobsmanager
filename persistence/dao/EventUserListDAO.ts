import { IEventUserList } from "@/entities/IEventUserList";
import { GenericDAO } from "./GenericDAO";

export class EventUserListDAO extends GenericDAO<IEventUserList, number>
{
    constructor()
    {
        super('eventUserList');
    }
}