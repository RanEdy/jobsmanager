using Negocio;
using Persistencia;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentacion
{
    public class EmergencyContactEditForm : Form
    {
        private EmergencyContactController controller = new EmergencyContactController();

        private FlowLayoutPanel optionsPanel;
        private ComboBox relationComboBox;

        private List<EmergencyContact> userContacts;

        public EmergencyContactEditForm(int idUser)
        {
            userContacts = controller.QueryEmergencyContactsByUser(idUser);
        }
    }
}
