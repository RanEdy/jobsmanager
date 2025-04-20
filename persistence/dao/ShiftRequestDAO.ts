import { IShiftRequest } from "@/entities/IShiftRequest";
import { GenericDAO } from "./GenericDAO";

export class ShiftRequestDAO extends GenericDAO<IShiftRequest, number>
{
    constructor()
    {
        super('shiftRequest');
    }
}