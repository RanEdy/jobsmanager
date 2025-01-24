using MySql.Data.MySqlClient;
using Persistance.DataModels.UserModel;
using System.Data;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

namespace Persistance.Database
{
    public class UserSQL
    {
        ConnectionDB connection = new ConnectionDB();
        MySqlCommand command = new MySqlCommand();
        DataTable table = new DataTable();

        public static byte[] ImageToBytes(Image image)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                image.Save(ms, ImageFormat.Png);
                return ms.ToArray();
            }
        }

        //Esta funcion deberia de regresar un DataTable con UNA SOLA fila
        //De lo contrario el usuario esta repetido en la base de datos
        public DataTable GetUserLogin(string email, string password)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ObtenerUsuarioLogin";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_email", email);
            command.Parameters.AddWithValue("@p_password", password);


            using (var reader = command.ExecuteReader())
            {
                table.Load(reader);
            }

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
            return table;
        }

        //Esta funcion deberia de regresar un DataTable con UNA SOLA fila
        //De lo contrario el usuario esta repetido en la base de datos
        public DataTable GetUser(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ObtenerUsuario";
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

        public DataTable GetUserSummary(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ResumenUsuario";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_IDUsuario", id);


            using (var reader = command.ExecuteReader())
            {
                table.Load(reader);
            }

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
            return table;
        }

        public DataTable QueryUsersNoPassword()
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ConsultarUsuariosNoPassword";
            command.CommandType = CommandType.StoredProcedure;

            using (var reader = command.ExecuteReader())
            {
                table.Load(reader);
            }

            connection.CloseConnection();
            return table;
        }

        public DataTable QueryUsers()
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ConsultarUsuarios";
            command.CommandType = CommandType.StoredProcedure;

            using (var reader = command.ExecuteReader())
            {
                table.Load(reader);
            }

            connection.CloseConnection();
            return table;
        }

        public DataTable QueryUsersByJob(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "ConsultarUsuariosPorTrabajo";
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

        public DataTable VerifyEmail(string email)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "VerificarCorreo";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_correo", email);

            using (var reader = command.ExecuteReader())
            {
                table.Load(reader);
            }

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
            return table;
        }

        public void InsertUser(User user)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "InsertarUsuario";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_nombre", user.Name);
            command.Parameters.AddWithValue("@p_correo", user.Email);
            command.Parameters.AddWithValue("@p_password", user.Password);
            command.Parameters.AddWithValue("@p_nacimiento", user.Birthday.ToString("yyyy-MM-dd"));
            command.Parameters.AddWithValue("@p_telefono", user.Phone);
            command.Parameters.AddWithValue("@p_contratacion", user.HireDate.ToString("yyyy-MM-dd"));
            command.Parameters.AddWithValue("@p_tarjeta", user.HasGuardCard);
            command.Parameters.AddWithValue("@p_imagen", ImageToBytes(user.ProfileImage));
            command.Parameters.AddWithValue("@p_tipo", user.UserType.ToString());
            command.Parameters.AddWithValue("@p_calle", user.Address.Street);
            command.Parameters.AddWithValue("@p_ciudad", user.Address.City);
            command.Parameters.AddWithValue("@p_estado", user.Address.State);
            command.Parameters.AddWithValue("@p_postal", user.Address.PostalCode);
            command.Parameters.AddWithValue("@p_numero", user.Address.Number);

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

        public void EditUser(User user)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "EditarUsuario";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_id", user.Id);
            command.Parameters.AddWithValue("@p_nombre", user.Name);
            command.Parameters.AddWithValue("@p_correo", user.Email);
            command.Parameters.AddWithValue("@p_password", user.Password);
            command.Parameters.AddWithValue("@p_nacimiento", user.Birthday.ToString("yyyy-MM-dd"));
            command.Parameters.AddWithValue("@p_telefono", user.Phone);
            command.Parameters.AddWithValue("@p_contratacion", user.HireDate.ToString("yyyy-MM-dd"));
            command.Parameters.AddWithValue("@p_tarjeta", user.HasGuardCard);
            command.Parameters.AddWithValue("@p_imagen", ImageToBytes(user.ProfileImage));
            command.Parameters.AddWithValue("@p_tipo", user.UserType.ToString());
            command.Parameters.AddWithValue("@p_calle", user.Address.Street);
            command.Parameters.AddWithValue("@p_ciudad", user.Address.City);
            command.Parameters.AddWithValue("@p_estado", user.Address.State);
            command.Parameters.AddWithValue("@p_postal", user.Address.PostalCode);
            command.Parameters.AddWithValue("@p_numero", user.Address.Number);

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }

        public void DeleteUser(int id)
        {
            command.Connection = connection.OpenConnection();
            command.CommandText = "EliminarUsuario";
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@p_id", id);

            command.ExecuteNonQuery();
            command.Parameters.Clear();
            connection.CloseConnection();
        }
    }
}
