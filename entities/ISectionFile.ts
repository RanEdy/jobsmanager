//TODO: cambiar en dataBytes por el tipo de datos para buffer de bytes

export interface ISectionFile 
{
    id: number;
    sectionId: number;
    name: string;
    dataBytes: Buffer;
}