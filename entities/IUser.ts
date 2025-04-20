import { USAState } from "./USAState";
import { UserLevel } from "./UserLevel";

export interface IUser
{
    id: number;
    level: UserLevel;
    name: string;
    email: string;
    password: string;

    address: string;
    city: string;
    state: string;
    zipCode: string;

    birthday: Date;
    hireDate: Date;
    phone: string;
    active: boolean;
    guardCard: boolean;

    supervisorCount: number;
    managerCount: number;
    logisticCount: number;
    driverCount: number;
    dispatchCount: number;
    assistantManagerCount: number;

    contactName1: string;
    contactPhone1: string;
    contactName2: string;
    contactPhone2: string;

}