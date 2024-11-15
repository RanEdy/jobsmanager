using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistencia
{
    public class UserSql
    {

        //Esta funcion deberia de regresar un DataTable con UNA SOLA fila
        //De lo contrario el usuario esta repetido en la base de datos
        public DataTable QueryUser(string email, string password)
        {
            return null;
        }

        //Esta funcion deberia de regresar un DataTable con UNA SOLA fila
        //De lo contrario el usuario esta repetido en la base de datos
        public DataTable QueryUser(int id)
        {
            return null;
        }

    }
}
