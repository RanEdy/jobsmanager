using System;
using System.Collections.Generic;
using System.Drawing;

namespace Persistance.DataModels.UserModel
{
    public class User
    {
        public static Dictionary<UserFieldType, (string name, EditableType editable)> fieldsMetaData = new Dictionary<UserFieldType, (string, EditableType)>()
        {
            { UserFieldType.ID,                 ("Id",                 EditableType.NOT_EDITABLE) },
            { UserFieldType.NAME,               ("Name" ,              EditableType.WORKER_ADMIN_EDITABLE) },
            { UserFieldType.EMAIL,              ("Email",              EditableType.WORKER_ADMIN_EDITABLE) },
            { UserFieldType.PASSWORD,           ("Password",           EditableType.WORKER_ADMIN_EDITABLE) },
            { UserFieldType.AGE,                ("Age",                EditableType.NOT_EDITABLE) },
            { UserFieldType.BIRTHDAY,           ("Birthday",           EditableType.WORKER_ADMIN_EDITABLE) },
            { UserFieldType.HIRE_DATE,          ("Hire Date",          EditableType.ADMIN_EDITABLE) },
            { UserFieldType.SENIORITY,          ("Seniority",          EditableType.NOT_EDITABLE) },
            { UserFieldType.ADDRESS,            ("Address",            EditableType.WORKER_ADMIN_EDITABLE) },
            { UserFieldType.PHONE,              ("Phone",              EditableType.WORKER_ADMIN_EDITABLE) },
            { UserFieldType.USER_TYPE,          ("User Type",          EditableType.ADMIN_EDITABLE) },
            { UserFieldType.ACTIVE,             ("Active",             EditableType.ADMIN_EDITABLE) },
            { UserFieldType.GUARD_CARD,         ("Guard Card",         EditableType.ADMIN_EDITABLE) },
            { UserFieldType.PROFILE_IMG,        ("Profile Image",      EditableType.WORKER_ADMIN_EDITABLE) },
            { UserFieldType.EMERGENCY_CONTACTS, ("Emergency Contacts", EditableType.WORKER_ADMIN_EDITABLE) }
        };

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Age { get { return DateTime.Today.Year - Birthday.Year; } }
        public DateTime Birthday { get; set; }
        public DateTime HireDate { get; set; }
        public int Seniority { get { return DateTime.Today.Year - HireDate.Year; } }
        public Address Address { get; set; }
        public string Phone { get; set; }
        public UserType UserType { get; set; }
        public bool IsActivated { get; set; }
        public bool HasGuardCard { get; set; }
        public Image ProfileImage { get; set; }

    }
}
