using Negocio;
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
        private Button accept, edit, cancel, delete;
        private EmergencyContact contactData;
        private TextBox nameTextBox, phoneTextBox;
        private ComboBox relationCombo;

        private int idUser;
        private string[] fieldNames = { "Name", "Phone", "Relation" };
        private EmergencyContactController controller = new EmergencyContactController();

        public EmergencyContactBlock(EmergencyContact emergencyContact, int idUser, Size size)
        {
            this.BackColor = Style.WHITE;
            this.BorderStyle = BorderStyle.FixedSingle;
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
                BackColor = Style.WHITE,
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
                BackColor = Style.WHITE,
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
                Font = new Font(Style.FONT_BAHNSCHRTFT, 20, FontStyle.Bold),
                Anchor = AnchorStyles.None,
                Visible = false
            };

            accept.Click += new EventHandler((object sender, EventArgs e) =>
            {
                if (VerifyInputs())
                {
                    nameTextBox.ClearUndo();
                    phoneTextBox.ClearUndo();

                    contactData.Name = nameTextBox.Text;
                    contactData.Phone = phoneTextBox.Text;
                    contactData.Relation = (Relation)relationCombo.SelectedIndex;
                    controller.EditEmergencyContact(contactData, idUser);
                    MessageBox.Show("Emergency Contact Successfully Edited");
                }
                else
                {
                    MessageBox.Show("ERROR while trying to edit data");
                }
                nameTextBox.Enabled = false;
                phoneTextBox.Enabled = false;
                relationCombo.Enabled = false;
                cancel.Visible = false;
                accept.Visible = false;
                edit.Visible = true;
                delete.Visible = true;
            });
            cancel = new Button()
            {
                AutoSize = true,
                Text = "CANCEL",
                BackColor = Style.LIGHT_RED,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 20, FontStyle.Bold),
                Anchor = AnchorStyles.None,
                Visible = false
            };
            cancel.Click += new EventHandler((object sender, EventArgs e) =>
            {
                nameTextBox.Undo();
                nameTextBox.ClearUndo();
                phoneTextBox.Undo();
                phoneTextBox.ClearUndo();
                relationCombo.SelectedIndex = (int) contactData.Relation;

                nameTextBox.Enabled = false;
                phoneTextBox.Enabled = false;
                relationCombo.Enabled = false;

                cancel.Visible = false;
                accept.Visible = false;
                edit.Visible = true;
                delete.Visible = true;
            });

            edit = new Button()
            {
                AutoSize = true,
                Text = "EDIT",
                BackColor = Style.BLUE,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 20, FontStyle.Bold),
                Anchor = AnchorStyles.None
            };
            edit.Click += new EventHandler((object sender, EventArgs e) =>
            {
                nameTextBox.Enabled = true;
                phoneTextBox.Enabled = true;
                relationCombo.Enabled = true;

                cancel.Visible = true;
                accept.Visible = true;
                edit.Visible = false;
                delete.Visible = false;
            });
            delete = new Button()
            {
                AutoSize = true,
                Text = "DELETE",
                BackColor = Style.RED,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 20, FontStyle.Bold),
                Anchor = AnchorStyles.None
            };
            delete.Click += new EventHandler((object sender, EventArgs e) =>
            {
                controller.DeleteEmergencyContact(contactData.Id, idUser);
                this.Visible = false;
                MessageBox.Show("Successfully deleted");
            });

            
            optionsPanel.Controls.Add(edit);
            optionsPanel.Controls.Add(delete);
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
                    Width = this.Width * 50 /100,
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
            mainPanel.Controls.Add(nameTextBox, 1, 0);

            phoneTextBox = new TextBox()
            {
                Text = contactData.Phone,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                Width = this.Width * 70 / 100,
                Enabled = false
            };
            mainPanel.Controls.Add(phoneTextBox, 1, 1);

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
            mainPanel.Controls.Add(relationCombo, 1, 2);
        }

        private bool VerifyInputs()
        {
            if (nameTextBox.Text.Trim().Length == 0) return false;
            if (phoneTextBox.Text.Trim().Length == 0) return false;
            if (relationCombo.SelectedIndex < 0 || relationCombo.SelectedIndex > 3) return false;

            return true;
        }
    }
}
