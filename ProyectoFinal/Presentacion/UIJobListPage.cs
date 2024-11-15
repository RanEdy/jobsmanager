using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentacion
{
    public class UIJobListPage : Panel
    {
        public UIJobListPage(Size size)
        {
            this.Size = size;
            this.BackColor = Style.RED;
            this.Dock = DockStyle.Fill;
        }
    }
}
