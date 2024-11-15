using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
namespace Presentacion
{
    public class UIAdminUsersPage : Panel
    {
        public UIAdminUsersPage(Size size)
        {
            this.Size = size;
            this.BackColor = Style.ORANGE;
            this.Dock = DockStyle.Fill;
        }
    }
}
