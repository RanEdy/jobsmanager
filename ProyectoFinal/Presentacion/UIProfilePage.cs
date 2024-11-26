using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Negocios;
using Persistencia;

namespace Presentacion
{
    public class UIProfilePage : Panel
    {
        public bool AdminMode {  get; set; }

        private TableLayoutPanel tablePanel;
        private FlowLayoutPanel fieldsPanel;
        private User userData;
        private User loggedUser = UserController.GetLoggedUser();
        public UIProfilePage(Size size, User user)
        {
            userData = user;
            this.Size = size;
            this.BackColor = Style.WHITE;
            this.Dock = DockStyle.Fill;
            InitPanels();
            InitFields();
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
            };
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 40.0f));
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 60.0f));

            fieldsPanel = new FlowLayoutPanel()
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.LIGHT_GRAY,
                Padding = new Padding(10)
            };

            tablePanel.Controls.Add(fieldsPanel, 1, 0);
            this.Controls.Add(tablePanel);
        }

        private void InitFields()
        {
            foreach (string name in User.fields_editables.Keys.ToArray())
            {
                UserFieldEditable editable = User.fields_editables[name];

                if (name == "Profile Image") continue;

                TableLayoutPanel p = new TableLayoutPanel()
                {
                    Size = new Size(fieldsPanel.Width-25, fieldsPanel.Height * 15 / 100),
                    ColumnCount = 2,
                    RowCount = 2,
                    //CellBorderStyle = TableLayoutPanelCellBorderStyle.Single,
                    //BackColor = Color.LightGray,
                };

                p.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70.0f));
                p.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30.0f));
                p.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0f));
                p.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0f));

                Label l_name = new Label()
                {
                    AutoSize = true,
                    Text = name,
                    Dock = DockStyle.Fill,
                    Anchor = AnchorStyles.Left,
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold),
                    Name = "l" + name
                };
                p.Controls.Add(l_name, 0, 0);

                Button b = new Button()
                {
                    AutoSize = true,
                    Text = "EDIT",
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold),
                    Anchor = AnchorStyles.None,
                    ForeColor = Style.BLUE,
                    Name = "b" + name
                };

                if ( ( editable == UserFieldEditable.ADMIN_EDITABLE 
                    || editable == UserFieldEditable.WORKER_ADMIN_EDITABLE) 
                    && UserController.IsLoggedUserAdmin())
                {
                    p.Controls.Add(b, 1, 1);
                }

                if ( ( editable == UserFieldEditable.WORKER_ADMIN_EDITABLE
                    || editable == UserFieldEditable.WORKER_EDITABLE)
                    && !UserController.IsLoggedUserAdmin() )
                {
                    p.Controls.Add(b, 1, 1);
                }

                TextBox t = new TextBox()
                {
                    Dock = DockStyle.Fill,
                    Anchor = AnchorStyles.Left,
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                    Width = p.Width * 70 / 100,
                    Enabled = false,
                    Name = "t" + name
                };
                switch (name)
                {
                    case "Id":
                        t.Text = "" + loggedUser.Id;
                        p.Controls.Add(t, 0, 1);
                        break;
                    case "Name":
                        t.Text = loggedUser.Name;
                        p.Controls.Add(t, 0, 1);
                        break;
                    case "Email":
                        t.Text = loggedUser.Email;
                        p.Controls.Add(t, 0, 1);
                        break;
                    case "Password":
                        t.Text = loggedUser.Password;
                        t.UseSystemPasswordChar = true;
                        p.Controls.Add(t, 0, 1);
                        break;
                    case "Age":
                        t.Text = "" + loggedUser.Age;
                        p.Controls.Add(t, 0, 1);
                        break;
                    case "Seniority":
                        t.Text = "" + loggedUser.Seniority;
                        p.Controls.Add(t, 0, 1);
                        break;
                    case "Phone":
                        t.Text = loggedUser.Phone;
                        p.Controls.Add(t, 0, 1);
                        break;
                    //Checkboxes
                    case "Active":
                        CheckBox c1 = new CheckBox()
                        {
                            Text = "Is Active",
                            Name = "c" + name,
                            Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                            Width = p.Width * 70 / 100,
                            CheckAlign = ContentAlignment.MiddleLeft,
                            Enabled = false
                        };
                        p.Controls.Add(c1, 0, 1);
                        break;
                    case "Guard Card":
                        CheckBox c2 = new CheckBox()
                        {
                            Text = "Has Guard Card",
                            Name = "c" + name,
                            Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                            Width = p.Width * 70 / 100,
                            CheckAlign = ContentAlignment.MiddleLeft,
                            Enabled = false
                        };
                        p.Controls.Add(c2, 0, 1);
                        break;
                    case "Address":
                        Address ua = userData.Address;
                        Label labelAddress = new Label()
                        {
                            Text = $"{ua.Street}, {ua.City}, {ua.State}   ZIP:   {ua.PostalCode}   number: {ua.Number}",
                            Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                            ForeColor = Style.GRAY,
                            Width = p.Width * 70 / 100
                        };
                        p.Controls.Add(labelAddress, 0, 1);
                        p.Controls["b" + name].Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            AddresEditForm edit  = new AddresEditForm(userData);
                            edit.Show();
                        });
                        
                        break;

                    //Date picker
                    case "Birthday":
                        DateTimePicker dt1 = new DateTimePicker()
                        {
                            Name = "dt" + name,
                            Value = loggedUser.Birthday,
                            Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                            Width = p.Width,
                            Enabled = false
                        };
                        p.Controls.Add(dt1, 0, 1);
                        break;
                    case "Hire Date":
                        DateTimePicker dt2 = new DateTimePicker()
                        {
                            Name = "dt" + name,
                            Value = loggedUser.HireDate,
                            Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                            Width = p.Width,
                            Enabled = false
                        };
                        p.Controls.Add(dt2, 0, 1);
                        break;
                    //ComboBox
                    case "User Type":
                        ComboBox cb = new ComboBox()
                        {
                            Name = "cb" + name,
                            Width = p.Width * 50 / 100,
                            Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                            Enabled = false,
                        };
                        cb.Items.Add(UserType.ADMIN.ToString());
                        cb.Items.Add(UserType.SUPERIVSOR.ToString());
                        cb.Items.Add(UserType.WORKER.ToString());
                        cb.SelectedIndex = ((int)loggedUser.UserType);
                        p.Controls.Add(cb, 0, 1);
                        break;
                    //Nueva ventana
                    case "Emergency Contacts":
                        break;
                }
                fieldsPanel.Controls.Add(p);
            }
        }

        private string GetUserTypeNameByValue(UserType ut)
        {
            return ut.ToString();
        }
    }
}
