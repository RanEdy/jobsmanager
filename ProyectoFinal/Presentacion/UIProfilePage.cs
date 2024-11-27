using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Linq;
using Negocios;
using Persistencia;

namespace Presentacion
{
    public class UIProfilePage : Panel
    {
        public bool AdminMode {  get; set; }

        private AddresEditForm addresEditForm;
        private TableLayoutPanel tablePanel;
        private FlowLayoutPanel fieldsPanel;
        private FlowLayoutPanel savePanel;
        private Button saveButton;

        private User userData;
        private Address modifiedAddress = new Address();
        private User loggedUser = UserController.GetLoggedUser();
        private UserController userController = new UserController();

        public UIProfilePage(Size size, User user)
        {
            userData = user;
            addresEditForm = new AddresEditForm(userData, modifiedAddress);
            addresEditForm.Hide();

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
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30.0f));
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70.0f));

            fieldsPanel = new FlowLayoutPanel()
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.LIGHT_GRAY,
                Padding = new Padding(10)
            };

            savePanel = new FlowLayoutPanel()
            {
                AutoSize = true,
                Dock = DockStyle.Bottom,
                BackColor = Style.LIGHT_GRAY,
            };

            Button saveButton = new Button()
            {
                AutoSize = true,
                Text = "SAVE",
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 26, FontStyle.Bold),
                Anchor = AnchorStyles.None,
                Margin = new Padding(this.Width * 42/ 100, 0, 0, 0),
                Width = this.Width * 25 / 100,
            };
            saveButton.Click += new EventHandler((object sender, EventArgs e) =>
            {
                userController.EditUser(userData);
            });

            savePanel.Controls.Add(saveButton);

            tablePanel.Controls.Add(fieldsPanel, 1, 0);
            this.Controls.Add(tablePanel);
            this.Controls.Add(savePanel);
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
                    CellBorderStyle = TableLayoutPanelCellBorderStyle.Single,
                    BackColor = Color.LightGray,
                };

                FlowLayoutPanel buttonsPanel = new FlowLayoutPanel()
                {
                    AutoScroll = false,
                    Dock = DockStyle.Fill,
                };

                p.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 80.0f));
                p.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 20.0f));
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

                TextBox t = new TextBox()
                {
                    Dock = DockStyle.Fill,
                    Anchor = AnchorStyles.Left,
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                    Width = p.Width * 70 / 100,
                    Enabled = false,
                    Name = "t" + name
                };

                Button editButton = new Button()
                {
                    AutoSize = true,
                    Text = "EDIT",
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold),
                    Anchor = AnchorStyles.None,
                    ForeColor = Style.BLUE,
                    Name = "edit" + name
                };

                Button cancelButton = new Button()
                {
                    AutoSize = true,
                    Text = "CANCEL",
                    BackColor = Style.LIGHT_RED,
                    ForeColor = Style.WHITE,
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 14, FontStyle.Bold),
                    Anchor = AnchorStyles.None,
                    Name = "cancel" + name,
                    Visible = false
                };

                buttonsPanel.Controls.Add(editButton);
                buttonsPanel.Controls.Add(cancelButton);

                if ( ( editable == UserFieldEditable.ADMIN_EDITABLE 
                    || editable == UserFieldEditable.WORKER_ADMIN_EDITABLE) 
                    && UserController.IsLoggedUserAdmin())
                {
                    p.Controls.Add(buttonsPanel, 1, 1);
                }

                if ( ( editable == UserFieldEditable.WORKER_ADMIN_EDITABLE
                    || editable == UserFieldEditable.WORKER_EDITABLE)
                    && !UserController.IsLoggedUserAdmin() )
                {
                    p.Controls.Add(buttonsPanel, 1, 1);
                }

                switch (name)
                {
                    case "Id":
                        t.Text = "" + loggedUser.Id;
                        p.Controls.Add(t, 0, 1);
                        
                        break;
                    case "Name":
                        t.Text = loggedUser.Name;
                        p.Controls.Add(t, 0, 1);
                        editButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            t.Enabled = true;
                            editButton.Hide();
                            cancelButton.Show();
                        });
                        cancelButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            t.Enabled = false;
                            t.Undo();
                            t.ClearUndo();
                            editButton.Show();
                            cancelButton.Hide();
                        });
                        break;
                    case "Email":
                        t.Text = loggedUser.Email;
                        p.Controls.Add(t, 0, 1);
                        editButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            t.Enabled = true;
                            editButton.Hide();
                            cancelButton.Show();
                        });
                        cancelButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            t.Enabled = false;
                            t.Undo();
                            t.ClearUndo();
                            editButton.Show();
                            cancelButton.Hide();
                        });
                        break;
                    case "Password":
                        t.Text = loggedUser.Password;
                        t.UseSystemPasswordChar = true;
                        p.Controls.Add(t, 0, 1);
                        editButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            t.Enabled = true;
                            editButton.Hide();
                            cancelButton.Show();
                        });
                        cancelButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            t.Enabled = false;
                            t.Undo();
                            t.ClearUndo();
                            editButton.Show();
                            cancelButton.Hide();
                        });
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
                        editButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            t.Enabled = true;
                            editButton.Hide();
                            cancelButton.Show();
                        });
                        cancelButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            t.Enabled = false;
                            t.Undo();
                            t.ClearUndo();
                            editButton.Show();
                            cancelButton.Hide();
                        });
                        break;
                    case "Active":
                        CheckBox c1 = new CheckBox()
                        {
                            Text = "Is Active",
                            Name = "c" + name,
                            Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                            Width = p.Width * 70 / 100,
                            CheckAlign = ContentAlignment.MiddleLeft,
                            Checked = loggedUser.IsActivated
                        };
                        p.Controls.Add(c1, 0, 1);
                        editButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            c1.Enabled = true;
                            editButton.Hide();
                            cancelButton.Show();
                        });
                        cancelButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            c1.Enabled = false;
                            c1.Checked = loggedUser.IsActivated;
                            editButton.Show();
                            cancelButton.Hide();
                        });
                        break;
                    case "Guard Card":
                        CheckBox c2 = new CheckBox()
                        {
                            Text = "Has Guard Card",
                            Name = "c" + name,
                            Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                            Width = p.Width * 70 / 100,
                            CheckAlign = ContentAlignment.MiddleLeft,
                            Checked = loggedUser.HasGuardCard
                        };
                        p.Controls.Add(c2, 0, 1);
                        editButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            c2.Enabled = true;
                            editButton.Hide();
                            cancelButton.Show();
                        });
                        cancelButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            c2.Enabled = false;
                            c2.Checked = loggedUser.HasGuardCard;
                            editButton.Show();
                            cancelButton.Hide();
                        });
                        break;
                    case "Address":
                        Address ua = userData.Address;
                        Label labelAddress = new Label()
                        {
                            Text = $"{ua.Street}, {ua.City}, {ua.State}   ZIP:   {ua.PostalCode}   Number: {ua.Number}",
                            Font = new Font(Style.FONT_BAHNSCHRTFT, 10),
                            ForeColor = Style.GRAY,
                            Width = p.Width * 70 / 100
                        };
                        p.Controls.Add(labelAddress, 0, 1);
                        addresEditForm.externLabel = labelAddress;
                        editButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            addresEditForm.Show();
                        });
                        break;
                    case "Birthday":
                        DateTimePicker dt1 = new DateTimePicker()
                        {
                            Name = "dt" + name,
                            Value = loggedUser.Birthday,
                            Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                            Width = p.Width,
                            Enabled = false,
                        };
                        p.Controls.Add(dt1, 0, 1);
                        editButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            dt1.Enabled = true;
                            editButton.Hide();
                            cancelButton.Show();
                        });
                        cancelButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            dt1.Enabled = false;
                            dt1.Value = loggedUser.Birthday;
                            editButton.Show();
                            cancelButton.Hide();
                        });
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
                        editButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            dt2.Enabled = true;
                            editButton.Hide();
                            cancelButton.Show();
                        });
                        cancelButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            dt2.Enabled = false;
                            dt2.Value = loggedUser.HireDate;
                            editButton.Show();
                            cancelButton.Hide();
                        });
                        break;
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
                        editButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            cb.Enabled = true;
                            editButton.Hide();
                            cancelButton.Show();
                        });
                        cancelButton.Click += new EventHandler((object sender, EventArgs e) =>
                        {
                            cb.Enabled = false;
                            cb.SelectedIndex = ((int)loggedUser.UserType);
                            editButton.Show();
                            cancelButton.Hide();
                        });
                        break;
                    case "Emergency Contacts":
                        break;
                }
                fieldsPanel.Controls.Add(p);
            }
        }
    }
}
