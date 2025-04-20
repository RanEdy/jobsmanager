import { prisma } from "../lib/prisma";

export class GenericDAO<T, K> {
    constructor(protected modelName: keyof typeof prisma) { }

    async findById(id: K): Promise<T | null> {
        // @ts-ignore
        return prisma[this.modelName].findUnique({ where: { id } });
    }

    async create(data: Omit<T, 'id'>): Promise<T> {
        // @ts-ignore
        return prisma[this.modelName].create({ data });
    }
}