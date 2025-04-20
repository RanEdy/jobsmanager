import { GenericDAO } from "./GenericDAO";
import { IUser }  from "@/entities/IUser"

export class UserDAO extends GenericDAO<IUser, number>
{
    constructor()
    {
        super('user');
    }
}