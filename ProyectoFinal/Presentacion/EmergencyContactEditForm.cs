using Negocio;
using Persistencia;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Linq;

namespace Presentacion
{
    public class EmergencyContactEditForm : Form
    {

        private Size maxSize = new Size(1300, 800);
        private int widthPercentage = 65;
        private int heightPercentage = 50;

        private EmergencyContactController controller = new EmergencyContactController();
        private TableLayoutPanel mainPanel, insertContactPanel;
        private FlowLayoutPanel contactsPanel;
        private Button addButton;
        private TextBox nameTextBox, phoneTextBox;
        private ComboBox relationCombo;
        private Size blockSize;

        private string[] fieldNames = { "Name", "Phone", "Relation" };
        private List<EmergencyContact> userContacts;
        private List<EmergencyContactBlock> emergencyContactBlocks = new List<EmergencyContactBlock>();
        private int idUser;

        public EmergencyContactEditForm(int idUser)
        {
            this.idUser = idUser;
            InitializeComponent();
            userContacts = controller.QueryEmergencyContactsByUser(idUser);
            CalculateSize();
            InitPanels();
            InitInsertContactPanelComponents();
            InitBlocks();
        }
        private void InitBlocks()
        {
            blockSize = new Size(contactsPanel.Width * 92 / 100, contactsPanel.Height * 50 /100);
            foreach (var contact in userContacts)
            {
                EmergencyContactBlock block = new EmergencyContactBlock(contact, contact.IdUser, blockSize);
                emergencyContactBlocks.Add(block);
                contactsPanel.Controls.Add(block);
            }
        }

        private void InitializeComponent()
        {
            this.SuspendLayout();
            // 
            // EmergencyContactEditForm
            // 
            this.ClientSize = new System.Drawing.Size(284, 261);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.Name = "EmergencyContactEditForm";
            this.Text = "Edit Emergency Contact";
            this.ShowIcon = false;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.EmergencyContactEditForm_FormClosing);
            this.ResumeLayout(false);

        }

        private void EmergencyContactEditForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            nameTextBox.Clear();
            phoneTextBox.Clear();
            relationCombo.SelectedIndex = 0;
            e.Cancel = true;
            this.Hide();
        }

        private void CalculateSize()
        {
            this.MaximumSize = maxSize;
            this.StartPosition = FormStartPosition.CenterScreen;
            Size screenSize = Screen.PrimaryScreen.WorkingArea.Size;
            if (screenSize.Width > maxSize.Width) { this.Width = maxSize.Width; }
            if (screenSize.Height > maxSize.Height) { this.Height = maxSize.Height; }
            else { this.Size = screenSize; }
            this.Width = (this.Width * widthPercentage) / 100;
            this.Height = (this.Height * heightPercentage) / 100;
        }

        public void InitPanels()
        {
            mainPanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Fill,
                ColumnCount = 2,
                RowCount = 1,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Single,
                BackColor = Style.LIGHT_GRAY
            };
            mainPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 50));
            mainPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 50));

            insertContactPanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Fill,
                RowCount = 4,
                ColumnCount = 2,
                AutoSize = true,
                BackColor = Style.WHITE,
            };
            insertContactPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30));
            insertContactPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70));
            insertContactPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            insertContactPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            insertContactPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            insertContactPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));

            contactsPanel = new FlowLayoutPanel()
            {
                Dock = DockStyle.Fill,
                AutoScroll = true,
                BackColor = Style.LIGHT_GRAY
            };
            mainPanel.Controls.Add(insertContactPanel, 1, 0);
            mainPanel.Controls.Add(contactsPanel, 0, 0);
            this.Controls.Add(mainPanel);
        }

        private void InitInsertContactPanelComponents()
        {
            int i = 0;
            foreach (string name in fieldNames)
            {
                Label l = new Label()
                {
                    Dock = DockStyle.Fill,
                    Text = name,
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 14, FontStyle.Bold),
                    Width = this.Width * 30 / 100,
                };
                insertContactPanel.Controls.Add(l, 0, i);
                i++;
            }

            nameTextBox = new TextBox()
            {
                Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                Width = this.Width * 70 / 100,
            };
            insertContactPanel.Controls.Add(nameTextBox, 1, 0);

            phoneTextBox = new TextBox()
            {
                Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                Width = this.Width * 70 / 100,
            };
            insertContactPanel.Controls.Add(phoneTextBox, 1, 1);

            relationCombo = new ComboBox()
            {
                Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                Width = this.Width * 70 / 100,
            };
            relationCombo.Items.Add(Relation.UNKNOWN.ToString());
            relationCombo.Items.Add(Relation.FAMILIAR.ToString());
            relationCombo.Items.Add(Relation.ACQUAINTANCE.ToString());
            relationCombo.Items.Add(Relation.FRIEND.ToString());
            relationCombo.SelectedIndex = 0;
            insertContactPanel.Controls.Add(relationCombo, 1, 2);

            addButton = new Button()
            {
                AutoSize = true,
                Text = " + ADD",
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 20, FontStyle.Bold),
                Anchor = AnchorStyles.None,
            };
            addButton.Click += new EventHandler((object sender, EventArgs e) =>
            {
                if (VerifyInputs())
                {
                    nameTextBox.ClearUndo();
                    phoneTextBox.ClearUndo();

                    EmergencyContact em = new EmergencyContact()
                    {
                        Name = nameTextBox.Text,
                        Phone = phoneTextBox.Text,
                        IdUser = idUser,
                        Relation = (Relation)relationCombo.SelectedIndex
                    };

                    controller.InsertEmergencyContact(em, idUser);

                    EmergencyContactBlock eBlock = new EmergencyContactBlock(em, idUser, blockSize);
                    emergencyContactBlocks.Add(eBlock);
                    contactsPanel.Controls.Add(eBlock);

                    MessageBox.Show("Emergency Contact Successfully Added");
                }
                else
                {
                    MessageBox.Show("[ERROR] Input fields not completed");
                }
            });
            insertContactPanel.Controls.Add(addButton, 1, 3);
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
