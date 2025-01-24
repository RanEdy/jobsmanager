using Persistance.Database;
using Persistance.DataModels.UserModel;
using Persistance.DataModels;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Drawing;

namespace Logic.UserLogic
{
    public class UserController
    {
        private UserSQL userSql = new UserSQL();
        private static User LoggedUser;

        public static Image BytesToImage(byte[] byteArray)
        {
            using (MemoryStream ms = new MemoryStream(byteArray))
            {
                return Image.FromStream(ms);
            }
        }

        public static void SetLoggedUser(User user)
        {
            LoggedUser = user;
        }

        public static User GetLoggedUser()
        {
            return LoggedUser;
        }

        public static bool IsLoggedUserAdmin()
        {
            return LoggedUser.UserType == UserType.ADMIN;
        }

        public bool LogUser(string email, string password)
        {
            User user = GetUserLogin(email, password);
            if (user != null)
            {
                if (user.IsActivated)
                {
                    UserController.SetLoggedUser(user);
                    return true;
                }
            }
            return false;
        }

        public bool VerifyEmail(string email)
        {
            return userSql.VerifyEmail(email).Rows.Count == 0;
        }

        public User GetUserLogin(string email, string password)
        {
            return ConstructFromDataTable(userSql.GetUserLogin(email, password));
        }

        public User GetUser(int id)
        {
            return ConstructFromDataTable(userSql.GetUser(id));
        }

        public DataTable GetUserSummary(int id)
        {
            return userSql.GetUserSummary(id);
        }

        public User GetLastUser()
        {
            return QueryUsers().Last();
        }

        public void EditUser(User user)
        {
            userSql.EditUser(user);
        }

        public List<User> QueryUsers()
        {
            return ConstructListFromDataTable(userSql.QueryUsers());
        }

        public List<User> QueryUsersByJob(int id)
        {
            return ConstructListFromDataTable(userSql.QueryUsersByJob(id));
        }
        public void InsertUser(User user)
        {
            userSql.InsertUser(user);
        }

        public void DeleteUser(int id)
        {
            userSql.DeleteUser(id);
        }

        private User ConstructFromDataTable(DataTable dt)
        {
            if (dt.Rows.Count == 0) return null;
            DataRow row = dt.Rows[0];
            return ConstructFromRow(row);
        }

        private User ConstructFromRow(DataRow row)
        {
            User user = new User()
            {
                Id = (int)row["IDUsuario"],
                Name = row["Nombre"].ToString(),
                Password = row["Contraseña"].ToString(),
                Email = row["Correo"].ToString(),
                Birthday = DateTime.Parse(row["FechaNacimiento"].ToString()),
                HireDate = DateTime.Parse(row["FechaContratacion"].ToString()),
                Address = new Address()
                {
                    City = row["Ciudad"].ToString(),
                    State = row["Estado"].ToString(),
                    Street = row["Calle"].ToString(),
                    PostalCode = row["CodigoPostal"].ToString(),
                    Number = row["Numero"].ToString()
                },
                Phone = row["Telefono"].ToString(),
                UserType = (UserType)Enum.Parse(typeof(UserType), row["TipoUsuario"].ToString()),
                IsActivated = (bool)row["Activo"],
                HasGuardCard = (bool)row["TarjetaSeguridadActiva"],

            };
            if (row["ImagenPerfil"] == DBNull.Value) user.ProfileImage = null;
            else user.ProfileImage = BytesToImage((byte[])row["ImagenPerfil"]);
            return user;
        }

        private List<User> ConstructListFromDataTable(DataTable dt)
        {
            List<User> list = new List<User>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                DataRow row = dt.Rows[i];
                User user = ConstructFromRow(row);
                list.Add(user);
            }
            return list;
        }
    }
}
