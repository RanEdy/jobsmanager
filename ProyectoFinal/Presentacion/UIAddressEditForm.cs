using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Persistencia;

namespace Presentacion
{
    public partial class UIAddressEditForm : Form
    {
        
        private User userData;
        private Address modifiedAddress;
        private Size maxSize = new Size(1000, 1000);
        private int widthPercentage = 50;
        private int heightPercentage = 40;

        private TableLayoutPanel fieldsPanel;
        private FlowLayoutPanel optionsPanel;
        private Button acceptButton, cancelButton, resetButton;
        private readonly string[] addressFieldNames = { "Street", "City", "State", "Postal Code", "Number" };
        private List<TextBox> inputFields = new List<TextBox>();
        public UIAddressEditForm(User user, Address modifiedAddress)
        {
            this.modifiedAddress = modifiedAddress;
            userData = user;
            InitializeComponent();
            CalculateSize();
            InitPanels();
            InitFields();
            InitButtons();
        }

        private void CalculateSize()
        {
            this.MaximumSize = maxSize;
            this.StartPosition = FormStartPosition.Manual;
            Size screenSize = Screen.PrimaryScreen.WorkingArea.Size;
            if (screenSize.Width > maxSize.Width) { this.Width = maxSize.Width; }
            if (screenSize.Height > maxSize.Height) { this.Height = maxSize.Height; }
            else { this.Size = screenSize; }
            this.Width = (this.Width * widthPercentage) / 100;
            this.Height = (this.Height * heightPercentage) / 100;
        }

        private void InitPanels()
        {
            fieldsPanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Top,
                BackColor = Style.LIGHT_GRAY,
                AutoSize = true,
                Width = this.Width,
                ColumnCount = 2,
                RowCount = 1,
            };
            fieldsPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30));
            fieldsPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70));

            this.Controls.Add(fieldsPanel);

            optionsPanel = new FlowLayoutPanel()
            {
                Dock = DockStyle.Bottom,
                BackColor = Style.LIGHT_GRAY,
                AutoSize = true,
                Padding = new Padding(this.Width * 25 / 100, 0 ,0 ,0)
            };
            this.Controls.Add(optionsPanel);
        }

        private void InitFields()
        {
            foreach (string fieldName in addressFieldNames)
            {
                Label label_name = new Label()
                {
                    AutoSize = true,
                    Text = fieldName,
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold),
                    Dock = DockStyle.Fill,
                    Anchor = AnchorStyles.Left,
                    Name = "l" + fieldName,
                };
                fieldsPanel.Controls.Add(label_name);

                TextBox textBox_field = new TextBox()
                {
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 16),
                    Width = fieldsPanel.Width * 70 / 100,
                    Name = "t" + fieldName
                };
                inputFields.Add(textBox_field);
                fieldsPanel.Controls.Add(textBox_field);
            }
            inputFields[0].Text = userData.Address.Street;
            inputFields[1].Text = userData.Address.City;
            inputFields[2].Text = userData.Address.State;
            inputFields[3].Text = userData.Address.PostalCode;
            inputFields[4].Text = userData.Address.Number;

            modifiedAddress.Street = userData.Address.Street;
            modifiedAddress.City = userData.Address.City;
            modifiedAddress.State = userData.Address.State;
            modifiedAddress.PostalCode = userData.Address.PostalCode;
            modifiedAddress.Number = userData.Address.Number;
        }

        private void InitButtons()
        {
            acceptButton = new Button()
            {
                AutoSize = true,
                Text = "ACCEPT",
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 22, FontStyle.Bold),
                Anchor = AnchorStyles.None
            };
            acceptButton.Click += new EventHandler((object sender, EventArgs e) =>
            {
                if (VerifyFields())
                {
                    modifiedAddress.Street = inputFields[0].Text;
                    modifiedAddress.City = inputFields[1].Text;
                    modifiedAddress.State = inputFields[2].Text;
                    modifiedAddress.PostalCode = inputFields[3].Text;
                    modifiedAddress.Number = inputFields[4].Text;
                    this.Hide();
                }
                else
                {
                    MessageBox.Show("Incomplete fields");
                }
            });
            optionsPanel.Controls.Add(acceptButton);

            cancelButton = new Button()
            {
                AutoSize = true,
                Text = "CANCEL",
                BackColor = Style.LIGHT_RED,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 22, FontStyle.Bold),
                Anchor = AnchorStyles.None
            };
            cancelButton.Click += new EventHandler((object sender, EventArgs e) =>
            {

                this.Hide();
                inputFields[0].Text = modifiedAddress.Street;
                inputFields[1].Text = modifiedAddress.City;
                inputFields[2].Text = modifiedAddress.State;
                inputFields[3].Text = modifiedAddress.PostalCode;
                inputFields[4].Text = modifiedAddress.Number;
            });
            optionsPanel.Controls.Add(cancelButton);

            resetButton = new Button()
            {
                AutoSize = true,
                Text = "RESET",
                BackColor = Style.BLUE,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 22, FontStyle.Bold),
                Anchor = AnchorStyles.None
            };
            resetButton.Click += new EventHandler((object sender, EventArgs e) =>
            {
                inputFields[0].Text = userData.Address.Street;
                inputFields[1].Text = userData.Address.City;
                inputFields[2].Text = userData.Address.State;
                inputFields[3].Text = userData.Address.PostalCode;
                inputFields[4].Text = userData.Address.Number;

                modifiedAddress.Street = userData.Address.Street;
                modifiedAddress.City = userData.Address.City;
                modifiedAddress.State = userData.Address.State;
                modifiedAddress.PostalCode = userData.Address.PostalCode;
                modifiedAddress.Number = userData.Address.Number;
            });
            optionsPanel.Controls.Add(resetButton);
        }

        private bool VerifyFields()
        {
            foreach (TextBox t in inputFields)
            {
                if (t.Text.Trim().Length == 0) return false;
            }
            return true;    
        }
    }
}
