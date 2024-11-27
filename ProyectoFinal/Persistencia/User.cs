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
        public static Dictionary<string, UserFieldEditable> fields_editables = new Dictionary<string, UserFieldEditable>()
        {
            { "Id"                  , UserFieldEditable.NOT_EDITABLE },
            { "Name"                , UserFieldEditable.WORKER_ADMIN_EDITABLE },
            { "Email"               , UserFieldEditable.WORKER_ADMIN_EDITABLE },
            { "Password"            , UserFieldEditable.WORKER_ADMIN_EDITABLE },
            { "Age"                 , UserFieldEditable.NOT_EDITABLE },
            { "Birthday"            , UserFieldEditable.WORKER_ADMIN_EDITABLE },
            { "Hire Date"           , UserFieldEditable.ADMIN_EDITABLE },
            { "Seniority"           , UserFieldEditable.NOT_EDITABLE },
            { "Address"             , UserFieldEditable.WORKER_ADMIN_EDITABLE },
            { "Phone"               , UserFieldEditable.WORKER_ADMIN_EDITABLE },
            { "User Type"           , UserFieldEditable.ADMIN_EDITABLE },
            { "Active"              , UserFieldEditable.ADMIN_EDITABLE },
            { "Guard Card"          , UserFieldEditable.ADMIN_EDITABLE },
            { "Profile Image"       , UserFieldEditable.WORKER_ADMIN_EDITABLE },
            { "Emergency Contacts"  , UserFieldEditable.WORKER_ADMIN_EDITABLE }

        };
        public int                    Id { get; set; }
        public string                 Name { get; set; }
        public string                 Email { get; set; }
        public string                 Password { get; set; }
        public int                    Age { get { return DateTime.Today.Year - Birthday.Year; } }
        public DateTime               Birthday { get; set; }
        public DateTime               HireDate { get; set; }
        public int                    Seniority { get { return DateTime.Today.Year - HireDate.Year; } }
        public Address                Address { get; set; }
        public string                 Phone { get; set; }
        public UserType               UserType { get; set; }
        public bool                   IsActivated { get; set; }
        public bool                   HasGuardCard { get; set; }
        public Image                  ProfileImage { get; set; }
        public List<EmergencyContact> EmergencyContacts { get; set; }
    }
}
