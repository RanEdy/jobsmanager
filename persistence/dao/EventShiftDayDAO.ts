import { IEventShiftDay } from "@/entities/IEventShiftDay";
import { GenericDAO } from "./GenericDAO";

export class EventShiftDayDAO extends GenericDAO<IEventShiftDay, number>
{
    constructor()
    {
        super('eventShiftDay');
    }
}