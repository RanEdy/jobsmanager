import { USAState } from "./USAState";

export interface IEvent 
{
    id: number;
    name: string;
    city: string;
    state: USAState;
    zipCode: string;
    address: string;

    startDate: Date;
    endDate: Date;
    public: boolean
    done: boolean
}