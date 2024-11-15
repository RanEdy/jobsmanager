using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Persistencia;

namespace Negocios
{
    public class LoginController
    {
        private UserController userController = new UserController();


        ///<summary>
        ///Devuelve true si el usuario existe y se logro iniciar sesion <br></br>
        ///Devuelve false si el usuario no se encontro o si hubo algun problema
        ///</summary>
        public bool VerifyAndLogUser(string email, string password)
        {
            User user = userController.QueryUser(email, password);
            if (user != null)
            {
                if (user.IsActivated)
                {
                    UserController.SetLoggedUser(user);
                    return true;
                }
            }
            //TODO::Cambiarlo a false cuando ya este implmentada la base de datos
            return true;
        }
    }
}
