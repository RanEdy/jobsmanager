using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentacion
{
    public class UIProfilePage : Panel
    {
        public UIProfilePage(Size size)
        {
            this.Size = size;
            this.BackColor = Style.BLUE;
            this.Dock = DockStyle.Fill;
        }
    }
}
