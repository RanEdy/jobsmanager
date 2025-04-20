import { IShiftRequest } from "@/entities/IShiftRequest";
import { GenericDAO } from "./GenericDAO";

export class ShiftRequest extends GenericDAO<IShiftRequest, number>
{
    constructor()
    {
        super('shiftRequest');
    }
}