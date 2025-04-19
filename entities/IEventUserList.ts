import { UserRole } from "./UserRole";

export interface IEventUserList 
{
    userId: number;
    eventId: number;
    role: UserRole;
}