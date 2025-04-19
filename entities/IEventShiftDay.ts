import { UserRole } from "./UserRole";

export interface IEventShiftDay 
{
    id: number;
    eventId: number;
    day: Date;
    maxUsers: number;
    role: UserRole;
}