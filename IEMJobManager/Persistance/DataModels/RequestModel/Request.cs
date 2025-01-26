using System.Text.Json;

namespace Persistance.DataModels.RequestModel
{
    public class Request
    {
        public int Id { get; set; }
        public int JobId { get; set; }
        public int UserId { get; set; }
        public RequestState State { get; set; }

    }
}
