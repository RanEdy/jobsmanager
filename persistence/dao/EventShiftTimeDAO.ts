import { IEventShiftTime } from "@/entities/IEventShiftTime";
import { GenericDAO } from "./GenericDAO";

export class EventShiftTimeDAO extends GenericDAO<IEventShiftTime, number>
{
    constructor()
    {
        super('eventShiftTime');
    }
}