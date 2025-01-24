using System;
using System.Data;
using System.IO;
using MySql.Data.MySqlClient;

namespace Persistance.Database
{
    public class ConnectionDB
    {
        MySqlConnection mySqlConnection;

        public ConnectionDB()
        {
            string fullPath = Properties.Resources.dbconfig;
            mySqlConnection = new MySqlConnection(fullPath);
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
