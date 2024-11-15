using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistencia
{
    public class Job
    {
        public int Id { get; set; }
        public string DisplayName { get; set; }
        public string SiteName { get; set; }
        public DateTime StartDate { get; set; }
        public int Duration { get; set; }
        public int MaxUsers { get; set; }
        public List<User> RegisteredUsers { get; set; }
        public List<Request> Requests { get; set; }
    }
}
