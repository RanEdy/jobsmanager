using Persistencia;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class JobController
    {
        private JobSQL jobSQL  = new JobSQL();

        public Job ConstructFromRow(DataRow row)
        {
            Job j = new Job()
            {
                Id = (int)row["IDTrabajo"],
                DisplayName = row["NombreTrabajo"].ToString(),
                SiteName = row["NombreLugar"].ToString(),
                StartDate = DateTime.Parse(row["Fecha"].ToString()),
                Duration = (int) row["Duracion"],
                MaxUsers = (int)row["MaxUsuarios"],
                Address = new Address()
                {
                    Street = row["Calle"].ToString(),
                    City = row["Ciudad"].ToString(),
                    State = row["Estado"].ToString(),
                    PostalCode = row["CodigoPostal"].ToString(),
                    Number = row["Numero"].ToString()
                }
            };

            return j;
        }

        public Job ConstructFromTable(DataTable table)
        {
            if (table.Rows.Count == 0) return null;
            return ConstructFromRow(table.Rows[0]);
        }

        public List<Job> ConstructListFromTable(DataTable table)
        {
            if (table.Rows.Count == 0) return null;
            List<Job> list = new List<Job>();
            foreach (DataRow row in table.Rows)
            {
                list.Add(ConstructFromRow(row));
            }
            return list;
        }

        public Job GetJob(int id)
        {
            return ConstructFromTable(jobSQL.GetJob(id));
        }

        public DataTable GetJobSummary(int id)
        {
            return jobSQL.GetJobSummary(id);
        }

        public List<Job> QueryJobs()
        {
            return ConstructListFromTable(jobSQL.QueryJobs());
        }

        public List<Job> QueryJobsByUser(int id)
        {
            return ConstructListFromTable(jobSQL.QueryJobsByUser(id));
        }

        public int CountUsersByJob(int id)
        {
            return Convert.ToInt32(jobSQL.CountUsersByJob(id).Rows[0][0]);
        }

        public void InsertUserIntoJob(int idJob, int idUser)
        {
            jobSQL.InsertUserIntoJob(idJob, idUser);
        }

        public void InsertJob(Job j)
        {
            jobSQL.InsertJob(j);
        }

        public void EditJob(Job j)
        {
            jobSQL.EditJob(j);
        }

        public void DeleteJob(int id)
        {
            jobSQL.DeleteJob(id);
        }

        public void DeleteUserFromJob(int idJob, int idUser)
        {
            jobSQL.DeleteUserFromJob(idJob, idUser);
        }

        public Job GetLastJob()
        {
            return QueryJobs().Last();
        }
    }
}
