import { ISectionFile } from "@/entities/ISectionFile";
import { GenericDAO } from "./GenericDAO";

export class SectionFileDAO extends GenericDAO<ISectionFile, number>
{
    constructor()
    {
        super('sectionFile');
    }
}