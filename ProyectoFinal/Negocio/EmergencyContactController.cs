using Persistencia;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class EmergencyContactController
    {
        EmergencyContactSQL emergencyContactSQL = new EmergencyContactSQL();
        private EmergencyContact ConstructFromDataTable(DataTable dt)
        {
            if (dt.Rows.Count == 0) return null;

            return ConstructFromRow(dt.Rows[0]);
        }

        private EmergencyContact ConstructFromRow(DataRow dr)
        {
            EmergencyContact ec = new EmergencyContact()
            {
                Id = (int)dr["IDContacto"],
                IdUser = (int)dr["IDUsuario"],
                Name = dr["Nombre"].ToString(),
                Phone = dr["Phone"].ToString(),
                Relation = (Relation)Enum.Parse(typeof(Relation), dr["Relacion"].ToString())
            };

            return ec;
        }

        private List<EmergencyContact> ConstructListFromDataTable(DataTable dt)
        {
            List<EmergencyContact> list = new List<EmergencyContact>();
            foreach (DataRow r in dt.Rows)
            {
                EmergencyContact c = ConstructFromRow(r);
                list.Add(c);
            }
            return list;
        }

        public List<EmergencyContact> QueryEmergencyContactsByUser(int id)
        {
            return ConstructListFromDataTable(emergencyContactSQL.QueryEmergencyContactsByUser(id));
        }

        public List<EmergencyContact> QueryEmergencyContacts()
        {
            return ConstructListFromDataTable(emergencyContactSQL.QueryEmergencyContacts());
        }

        public EmergencyContact GetEmergencyContact(int idContact, int idUser)
        {
            return ConstructFromDataTable(emergencyContactSQL.GetEmergencyContact(idContact, idUser));
        }

        public void EditEmergencyContact(EmergencyContact emergencyContact, int id)
        {
            emergencyContactSQL.EditEmergencyContact(emergencyContact, id);
        }

        public void InsertEmergencyContact(EmergencyContact emergencyContact, int id)
        {
            emergencyContactSQL.InsertEmergencyContact(emergencyContact, id);
        }

        public void DeleteEmergencyContact(int idContact, int idUser)
        {
            emergencyContactSQL.DeleteEmergencyContact(idContact, idUser);
        }
    }
}
