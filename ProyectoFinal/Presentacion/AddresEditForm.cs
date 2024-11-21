using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentacion
{
    public partial class AddresEditForm : Form
    {
        private Size maxSize = new Size(1000, 1500);
        private int widthPercentage = 50;
        private int heightPercentage = 70;

        private TableLayoutPanel fieldsPanel;
        private FlowLayoutPanel optionsPanel;
        public AddresEditForm()
        {
            InitializeComponent();
            this.MaximumSize = maxSize;
            this.StartPosition = FormStartPosition.Manual;
            Size screenSize = Screen.PrimaryScreen.WorkingArea.Size;
            if (screenSize.Width > maxSize.Width) { this.Width = maxSize.Width; }
            if (screenSize.Height > maxSize.Height) { this.Height = maxSize.Height; }
            else { this.Size = screenSize; }
            this.Width = (this.Width * widthPercentage) / 100;
            this.Height = (this.Height * heightPercentage) / 100;
            this.Location = Screen.PrimaryScreen.WorkingArea.Location;
        }

        private void InitPanels()
        {
            fieldsPanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Top,
                BackColor = Style.LIGHT_GREEN,
                Size = new Size(this.Width, this.Height * 80 / 100),
                ColumnCount = 2,
                RowCount = 1,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Single
            };

            this.Controls.Add(fieldsPanel);

            optionsPanel = new FlowLayoutPanel()
            {
                Dock = DockStyle.Bottom,
                BackColor = Style.LIGHT_RED,
                Size = new Size(this.Width, this.Height - fieldsPanel.Height)
            };
            this.Controls.Add(optionsPanel);
        }
    }
}
