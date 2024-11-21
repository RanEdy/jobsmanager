using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Persistencia;
using System.Data;
using System.Drawing;

namespace Negocios
{
    public class UserController
    {
        private UserSql userSql = new UserSql();
        private static User LoggedUser;

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

        public User QueryUser(string email, string password)
        {
            return ConstructFromDataTable(userSql.QueryUser(email, password));
        }


        public User QueryUser(int id)
        {
            return ConstructFromDataTable(userSql.QueryUser(id));
        }

        //Esta funcion se va a utilizar para crear un objeto User desde las tablas del usuario consultado
        private User ConstructFromDataTable(DataTable dt)
        {
            return null;
        }
    }
}
