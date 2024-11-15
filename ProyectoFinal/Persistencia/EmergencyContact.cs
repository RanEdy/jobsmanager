using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistencia
{
    public class EmergencyContact
    {
        public string Name { get; set; }
        public string Phone {  get; set; }
        public Relation Relation { get; set; }
    }
}
