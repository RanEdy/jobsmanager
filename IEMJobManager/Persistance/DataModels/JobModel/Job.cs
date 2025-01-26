using System;
using System.Collections.Generic;

namespace Persistance.DataModels.JobModel
{
    public class Job
    {
        public static readonly Dictionary<JobFieldType, string> fieldMetaData = new Dictionary<JobFieldType, string>
        {
            {JobFieldType.ID, "id" },
            {JobFieldType.DISPLAY_NAME, "Job Name" },
            {JobFieldType.SITE_NAME, "Site Name" },
            {JobFieldType.DURATION, "Duration" },
            {JobFieldType.MAX_USERS, "Maximum Users" },
            {JobFieldType.STATE, "State" },
            {JobFieldType.CITY, "City" },
            {JobFieldType.STREET, "Street" },
            {JobFieldType.POSTAL_CODE, "Postal Code" },
            {JobFieldType.NUMBER, "Street Number" },
            {JobFieldType.START_DATE, "Start Date" }
        };

        public int Id { get; set; }
        public string DisplayName { get; set; }
        public string SiteName { get; set; }
        public DateTime StartDate { get; set; }
        public int Duration { get; set; }
        public int MaxUsers { get; set; }
        public Address Address { get; set; }

    }
}
