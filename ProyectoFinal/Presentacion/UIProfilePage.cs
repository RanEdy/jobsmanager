using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Persistencia;

namespace Presentacion
{
    public class UIProfilePage : Panel
    {
        public UIProfilePage(Size size, User user)
        {
            this.Size = size;
            this.BackColor = Style.BLUE;
            this.Dock = DockStyle.Fill;
        }
    }
}
