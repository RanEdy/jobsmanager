using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistencia
{
    public class Request
    {
        public int Id { get; set; }
        public int JobId { get; set; }
        public int UserId { get; set; }
        public RequestState State { get; set; }
    }
}
