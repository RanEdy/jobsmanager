using MySql.Data.MySqlClient;
using Persistance.DataModels.JobModel;
using System.Data;

namespace Persistance.Database
{
    public class JobSQL
    {
        ConnectionDB connection = new ConnectionDB();
        MySqlCommand command = new MySqlCommand();
        DataTable table = new DataTable();

        public DataTable GetJob(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ObtenerTrabajo";
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

        public DataTable GetJobSummary(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ResumenTrabajo";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_IDTrabajo", id);


            using (var reader = command.ExecuteReader())
            {
                table.Load(reader);
            }

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
            return table;
        }

        public DataTable QueryJobs()
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ConsultarTrabajos";
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

        public DataTable QueryJobsByUser(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ConsultarTrabajosPorUsuario";
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

        public DataTable CountUsersByJob(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ContarUsuariosPorTrabajo";
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

        public void InsertUserIntoJob(int idJob, int idUser)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "InsertarRelacionUsuarioTrabajo";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_idUsuario", idUser);
            command.Parameters.AddWithValue("@p_idTrabajo", idJob);

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

        public void InsertJob(Job j)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "InsertarTrabajo";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_nombreTrabajo", j.DisplayName);
            command.Parameters.AddWithValue("@p_nombreLugar", j.SiteName);
            command.Parameters.AddWithValue("@p_maxUsuarios", j.MaxUsers);
            command.Parameters.AddWithValue("@p_fecha", j.StartDate);
            command.Parameters.AddWithValue("@p_duracion", j.Duration);
            command.Parameters.AddWithValue("@p_calle", j.Address.Street);
            command.Parameters.AddWithValue("@p_ciudad", j.Address.City);
            command.Parameters.AddWithValue("@p_estado", j.Address.State);
            command.Parameters.AddWithValue("@p_postal", j.Address.PostalCode);
            command.Parameters.AddWithValue("@p_numero", j.Address.Number);

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

        public void EditJob(Job j)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "EditarTrabajo";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_id", j.Id);
            command.Parameters.AddWithValue("@p_nombreTrabajo", j.DisplayName);
            command.Parameters.AddWithValue("@p_nombreLugar", j.SiteName);
            command.Parameters.AddWithValue("@p_maxUsuarios", j.MaxUsers);
            command.Parameters.AddWithValue("@p_fecha", j.StartDate);
            command.Parameters.AddWithValue("@p_duracion", j.Duration);
            command.Parameters.AddWithValue("@p_calle", j.Address.Street);
            command.Parameters.AddWithValue("@p_ciudad", j.Address.City);
            command.Parameters.AddWithValue("@p_estado", j.Address.State);
            command.Parameters.AddWithValue("@p_postal", j.Address.PostalCode);
            command.Parameters.AddWithValue("@p_numero", j.Address.Number);

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

        public void DeleteJob(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "EliminarTrabajo";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_id", id);

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

        public void DeleteUserFromJob(int idJob, int idUser)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "EliminarRelacionUsuarioTrabajo";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_idUsuario", idUser);
            command.Parameters.AddWithValue("@p_idTrabajo", idJob);

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

    }
}
