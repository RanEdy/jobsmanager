using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentacion
{
    public class UIRequestPage : Panel
    {
        public UIRequestPage(Size size)
        {
            this.Size = size;
            this.BackColor = Style.GREEN;
            this.Dock = DockStyle.Fill;
        }
    }
}
