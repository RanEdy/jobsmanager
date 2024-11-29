using Persistencia;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class RequestController
    {
        private RequestSQL sql = new RequestSQL();

        public List<Request> QueryRequests()
        {
            return ConstructListFromTable(sql.QueryRequests());
        }

        public List<Request> QueryRequestsByJob(int id)
        {
            return ConstructListFromTable(sql.QueryRequestsByJob(id));
        }

        public List<Request> QueryRequestsByUser(int id)
        {
            return ConstructListFromTable(sql.QueryRequestsByUser(id));
        }

        public void InsertRequest(Request r)
        {
            sql.InsertRequest(r);
        }

        public void EditRequest(Request r)
        {
            sql.EditRequest(r);
        }

        public void DeleteRequest(int id)
        {
            sql.DeleteRequest(id);
        }

        public void DeleteRequestByRelation(int idUser, int idJob)
        {
            sql.DeleteRequestByRelation(idUser, idJob);
        }

        public List<Request> ConstructListFromTable(DataTable dt)
        {
            if (dt.Rows.Count == 0) return null;
            List<Request> list = new List<Request>();
            foreach (DataRow dr in dt.Rows)
            {
                Request r = new Request()
                {
                    Id = (int)dr["IDSolicitud"],
                    JobId = (int) dr["IDTrabajo"],
                    UserId = (int)dr["IDUsuario"],
                    State = (RequestState) Enum.Parse(typeof(RequestState), dr["Estado"].ToString())
                };
                list.Add(r);
            }
            return list;
        }
    }
}
