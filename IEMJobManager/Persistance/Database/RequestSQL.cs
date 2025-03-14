﻿using MySql.Data.MySqlClient;
using Persistance.DataModels.RequestModel;
using System.Data;

namespace Persistance.Database
{
    public class RequestSQL
    {
        ConnectionDB connection = new ConnectionDB();
        MySqlCommand command = new MySqlCommand();
        DataTable table = new DataTable();

        public DataTable QueryRequests()
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ConsultarSolicitudes";
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

        public DataTable QueryRequestsByJob(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ConsultarSolicitudesPorTrabajo";
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

        public DataTable QueryRequestsByUser(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ConsultarSolicitudesPorUsuario";
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

        public void InsertRequest(Request r)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "InsertarSolicitud";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_idUsuario", r.UserId);
            command.Parameters.AddWithValue("@p_idTrabajo", r.JobId);
            command.Parameters.AddWithValue("@p_estado", r.State.ToString());

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

        public void EditRequest(Request r)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "EditarSolicitud";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_id_usuario", r.UserId);
            command.Parameters.AddWithValue("@p_id_trabajo", r.JobId);
            command.Parameters.AddWithValue("@p_estado", r.State.ToString());

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

        public void DeleteRequest(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "EliminarSolicitud";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_id", id);

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

        public void DeleteRequestByRelation(int idUser, int idJob)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "EliminarSolicitudPorRelacion";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_idUsuario", idUser);
            command.Parameters.AddWithValue("@p_idTrabajo", idJob);

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }
    }
}
