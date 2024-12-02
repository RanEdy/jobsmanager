using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Persistencia;

namespace Negocio
{
    public class LoginController
    {
        ///<summary>
        ///Devuelve true si el usuario existe y se logro iniciar sesion <br></br>
        ///Devuelve false si el usuario no se encontro o si hubo algun problema
        ///</summary>
        public bool VerifyAndLogUser(string email, string password)
        {
            UserController userController = new UserController();
            User user = userController.GetUserLogin(email, password);
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
    }
}
