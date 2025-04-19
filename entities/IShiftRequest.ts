import { GenericRequestStatus } from "./GenericRequestStatus";

export interface IShiftRequest
{
    id: number;
    shiftDayId: number;
    userId: number;
    status: GenericRequestStatus;
}