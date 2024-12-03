using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistencia
{
    public class ConnectionDB
    {
        MySqlConnection mySqlConnection;

        public ConnectionDB()
        {
            string basePath = AppDomain.CurrentDomain.BaseDirectory;

            // Combinar la ruta base con una ruta relativa
            string relativePath = "connection.txt";
            string fullPath = Path.Combine(basePath, relativePath);

            string sqlConnection = "";
            foreach (string line in File.ReadLines(fullPath))
            {
                sqlConnection += line + ";"; 
            }
            mySqlConnection = new MySqlConnection(sqlConnection);
        }

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
