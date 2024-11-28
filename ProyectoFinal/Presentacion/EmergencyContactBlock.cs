using Persistencia;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentacion
{
    public class EmergencyContactBlock : Panel
    {
        private TableLayoutPanel mainPanel;
        private FlowLayoutPanel optionsPanel;
        private Button accept, edit, cancel;
        private EmergencyContact contactData;
        private TextBox nameTextBox, phoneTextBox;
        private ComboBox relationCombo;

        private int idUser;
        private string[] fieldNames = { "Name", "Phone", "Relation" };

        public EmergencyContactBlock(EmergencyContact emergencyContact, int idUser, Size size)
        {
            this.contactData = emergencyContact;
            this.idUser = idUser;
            this.Size = size;
            InitPanels();
            InitButtons();
            InitLabelFields();
            InitInputFields();

        }

        private void InitPanels()
        {
            mainPanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Top,
                RowCount = 3,
                ColumnCount = 2,
                AutoSize = true,
                BackColor = Style.LIGHT_GRAY,
                Width = this.Width
            };
            mainPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30));
            mainPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));

            optionsPanel = new FlowLayoutPanel()
            {
                Dock = DockStyle.Bottom,
                BackColor = Style.LIGHT_GRAY,
                AutoSize = true,
            };

            this.Controls.Add(mainPanel);
            this.Controls.Add(optionsPanel);
        }

        private void InitButtons()
        {
            accept = new Button()
            {
                AutoSize = true,
                Text = "ACCEPT",
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 22, FontStyle.Bold),
                Anchor = AnchorStyles.None,
                Visible = false
            };
            cancel = new Button()
            {
                AutoSize = true,
                Text = "CANCEL",
                BackColor = Style.LIGHT_RED,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 22, FontStyle.Bold),
                Anchor = AnchorStyles.None,
                Visible = false
            };

            edit = new Button()
            {
                AutoSize = true,
                Text = "EDIT",
                BackColor = Style.BLUE,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 22, FontStyle.Bold),
                Anchor = AnchorStyles.None
            };

            optionsPanel.Controls.Add(edit);
            optionsPanel.Controls.Add(accept);
            optionsPanel.Controls.Add(cancel);
        }

        private void InitLabelFields()
        {
            int i = 0;
            foreach (string name in fieldNames)
            {
                Label l = new Label()
                {
                    Dock = DockStyle.Fill,
                    Text = name,
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 14, FontStyle.Bold),
                    Width = this.Width * 30 /100,
                };
                mainPanel.Controls.Add(l, 0, i);
                i++;
            }
        }

        private void InitInputFields()
        {
            nameTextBox = new TextBox()
            {
                Text = contactData.Name,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                Width = this.Width * 70 / 100,
                Enabled = false
            };

            phoneTextBox = new TextBox()
            {
                Text = contactData.Phone,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                Width = this.Width * 70 / 100,
                Enabled = false
            };

            relationCombo = new ComboBox()
            {
                Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                Enabled = false,
                Width = this.Width * 70 / 100
            };
            relationCombo.Items.Add(Relation.UNKNOWN.ToString());
            relationCombo.Items.Add(Relation.FAMILIAR.ToString());
            relationCombo.Items.Add(Relation.ACQUAINTANCE.ToString());
            relationCombo.Items.Add(Relation.FRIEND.ToString());
            relationCombo.SelectedIndex = (int) contactData.Relation;
        }
    }
}
