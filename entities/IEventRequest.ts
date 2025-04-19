import { GenericRequestStatus } from "./GenericRequestStatus";

export interface IEventRequest
{
    id: number;
    eventId: number;
    userId: number;
    status: GenericRequestStatus;
    isInvitation: boolean;
}