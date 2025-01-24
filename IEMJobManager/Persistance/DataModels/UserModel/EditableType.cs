namespace Persistance.DataModels.UserModel
{
    public enum EditableType
    {
        NOT_EDITABLE = 0, //Atributo no editable por ninguno
        WORKER_EDITABLE = 1, //Atributo solo editable por el empleado
        ADMIN_EDITABLE = 2, //Atributo solo editable por el administrador
        WORKER_ADMIN_EDITABLE = 3 //Atributo editable por el empleado y administrador
    }
}
