using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistencia
{
    public class ConnectionDB
    {
        const string server = "localhost";
        const int port = 3306;
        const string database = "gestioneventos";
        const string user_id = "root";
        const string password = "JMcn92uJc7d2shfh2";

        MySqlConnection mySqlConnection = new
            MySqlConnection($"server={server};Port={port};database={database};uid={user_id};pwd={password};");

        public MySqlConnection OpenConnection()
        {
            if (mySqlConnection.State == ConnectionState.Closed)
                mySqlConnection.Open();
            return mySqlConnection;
        }

        public MySqlConnection CloseConnection()
        {
            if (mySqlConnection.State == ConnectionState.Open)
                mySqlConnection.Close();
            return mySqlConnection;
        }
    }
}
