using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistencia
{
    public class EmergencyContactSQL
    {
        ConnectionDB connection = new ConnectionDB();

        MySqlCommand command = new MySqlCommand();
        MySqlDataReader reader;
        DataTable table = new DataTable();

        public DataTable QueryEmergencyContactByUser(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ConsultarContactosEmergenciaPorUsuario";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_id", id);


            using (var reader = command.ExecuteReader())
            {
                table.Load(reader);
            }

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
            return table;
        }

        public DataTable QueryEmergencyContacts()
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ConsultarContactosEmergencia";
            command.CommandType = CommandType.StoredProcedure;
            
            using (var reader = command.ExecuteReader())
            {
                table.Load(reader);
            }

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
            return table;
        }

        public DataTable GetEmergencyContact(int idContact, int idUser)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ObtenerContactoEmergencia";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_idUsuario", idUser);
            command.Parameters.AddWithValue("@p_idContacto", idContact);

            using (var reader = command.ExecuteReader())
            {
                table.Load(reader);
            }

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
            return table;
        }

        public void EditEmergencyContact(EmergencyContact emergencyContact, int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "EditarContactoEmergencia";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_idUsuario", id);
            command.Parameters.AddWithValue("@p_idContacto", emergencyContact.Id);
            command.Parameters.AddWithValue("@p_nombre", emergencyContact.Name);
            command.Parameters.AddWithValue("@p_telefono", emergencyContact.Phone);
            command.Parameters.AddWithValue("@p_relacion", emergencyContact.Relation.ToString());

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

        public void InsertEmergencyContact(EmergencyContact emergencyContact, int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "InsertarContactoEmergencia";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_idUsuario", id);
            command.Parameters.AddWithValue("@p_nombre", emergencyContact.Name);
            command.Parameters.AddWithValue("@p_telefono", emergencyContact.Phone);
            command.Parameters.AddWithValue("@p_relacion", emergencyContact.Relation.ToString());

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

        public void DeleteEmergencyContact(EmergencyContact emergencyContact, int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "EliminarContactoEmergencia";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_idUsuario", id);
            command.Parameters.AddWithValue("@p_idContacto", emergencyContact.Id);

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }
    }
}
