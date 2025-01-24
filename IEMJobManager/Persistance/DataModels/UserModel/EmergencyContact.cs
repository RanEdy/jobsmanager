namespace Persistance.DataModels.UserModel
{
    public class EmergencyContact
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public Relation Relation { get; set; }
    }
}
