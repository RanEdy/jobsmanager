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
        public bool AdminMode {  get; set; }

        private TableLayoutPanel tablePanel;
        private FlowLayoutPanel fieldsPanel;
        public UIProfilePage(Size size, User user)
        {
            this.Size = size;
            this.BackColor = Style.WHITE;
            this.Dock = DockStyle.Fill;
            InitPanels();
        }

        private void InitPanels()
        {
            tablePanel = new TableLayoutPanel()
            {
                ColumnCount = 2,
                RowCount = 1,
                BackColor = Style.LIGHT_GRAY,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Single,
                Dock = DockStyle.Fill,
                Margin = new Padding(15)
            };
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 35.0f));
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 65.0f));
            this.Controls.Add(tablePanel);
        }
    }
}
