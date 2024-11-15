using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing.Imaging;
using System.Drawing;

namespace Persistencia
{
    public class User
    {
        public int                    Id { get; set; }
        public string                 Name { get; set; }
        public string                 Email { get; set; }
        public string                 Password { get; set; }
        public int                    Age { get; }
        public DateTime               Birthday { get; set; }
        public DateTime               HireDate { get; set; }
        public int                    Seniority { get; }
        public Address                Address { get; set; }
        public string                 Phone { get; set; }
        public UserType               UserType { get; set; }
        public bool                   IsActivated { get; set; }
        public bool                   HasGuardCard { get; set; }
        public Image                  ProfileImage { get; set; }
        public List<EmergencyContact> EmergencyContacts { get; set; }
        //Falta la Lista de las solicitudes
        //Falta la lista de los trabajos registrados
    }
}
