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
    public class UIProfilePage : Panel
    {
        public UIAdminUsersPage usersPage;

        private UIAddressEditForm addressEditForm;
        private UIEmergencyContactEditForm emergencyContactEditForm;
        private TableLayoutPanel tablePanel;
        private FlowLayoutPanel fieldsPanel;
        private FlowLayoutPanel savePanel;
        private TableLayoutPanel imagePanel;
        public Button saveButton;
        private TextBox emailTextBox;

        public User userData;
        private Address modifiedAddress;
        private Image modifiedImage;
        private UserController userController;
        public bool insertMode;
        private UIMainForm mainForm;

        //Modo Edicion (predeterminado)
        //Modo Insercion
        public UIProfilePage(Size size, User user, bool insertMode=false, UIMainForm mainForm=null)
        {
            this.mainForm = mainForm;
            this.insertMode = insertMode;
            userData = user;
            modifiedImage = user.ProfileImage;
            modifiedAddress = user.Address;
            addressEditForm = new UIAddressEditForm(userData, modifiedAddress);
            emergencyContactEditForm = new UIEmergencyContactEditForm(userData.Id);
            userController = new UserController();

            InitializeUI(size);
        }

        private void InitializeUI(Size size)
        {
            this.Size = size;
            this.BackColor = Style.WHITE;
            this.Dock = DockStyle.Fill;

            InitPanels();
            InitFields();
            InitProfileImage();
        }

        private void InitPanels()
        {
            //Tabla que se divide en 2 para la imagen y lo otros campos
            tablePanel = new TableLayoutPanel
            {
                ColumnCount = 2,
                RowCount = 1,
                BackColor = Style.LIGHT_GRAY,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Single,
                Dock = DockStyle.Fill,
            };
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30.0f));
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70.0f));

            //Panel de todos los campos
            fieldsPanel = new FlowLayoutPanel
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.LIGHT_GRAY,
                Padding = new Padding(10)
            };

            imagePanel = new TableLayoutPanel
            {
                ColumnCount = 1,
                RowCount = 2,
                BackColor = Style.LIGHT_GRAY,
                AutoSize = true,
                Padding = new Padding(this.Width * 5 / 100, 0, 0, 0)
            };
            tablePanel.Controls.Add(imagePanel, 0, 0);

            savePanel = new FlowLayoutPanel
            {
                AutoSize = true,
                Dock = DockStyle.Bottom,
                BackColor = Style.LIGHT_GRAY,
            };

            saveButton = new Button
            {
                AutoSize = true,
                Text = insertMode ? "ACCEPT" : "SAVE",
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 24, FontStyle.Bold),
                Width = this.Width * 25 / 100,
            };

            saveButton.Click += (sender, e) =>
            {
                
                if (VerifyFields())
                {
                    if (!userController.VerifyEmail(emailTextBox.Text) && insertMode)
                    {
                        MessageBox.Show("UNABLE TO SAVE DATA [EMAIL ALREADY REGISTERED]");
                        return;
                    }

                    UpdateUserData();

                    if (!insertMode)
                    {
                        userController.EditUser(userData);
                        this.Dispose();

                        mainForm.optionsDictionary["Profile"] = new UIProfilePage(mainForm.contentDisplayPanel.Size, userData, insertMode, mainForm);
                        mainForm.Refresh();
                        mainForm.Update();
                        mainForm.Validate();
                        mainForm.optionsDictionary["Profile"].Update();
                    }
                    else
                    {
                        //Crear un nuevo bloque y actualizar la lista
                        userController.InsertUser(userData);
                        UserController uc = new UserController();
                        userData = uc.GetLastUser();
                        UIUserBlock ub = new UIUserBlock(userData, usersPage.blockSize);
                        ub.uIAdminUsersPage = usersPage;
                        usersPage.userBlocksPanel.Controls.Add(ub);

                    }
                    MessageBox.Show("Data saved successfully.", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    
                }
                else
                {
                    MessageBox.Show("Please fill in all required fields.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            };

            savePanel.Controls.Add(saveButton);
            tablePanel.Controls.Add(fieldsPanel, 1, 0);
            this.Controls.Add(tablePanel);
            this.Controls.Add(savePanel);
        }

        private void InitFields()
        {
            foreach (var field in User.fields_editables)
            {
                string name = field.Key;
                UserFieldEditable editable = field.Value;

                if (name == "Profile Image") continue;

                if (name == "Address")
                {
                    AddAddressField();
                }
                else if (name == "Emergency Contacts" && !insertMode)
                {
                    AddEmergencyContactsField();
                }
                else
                {
                    AddEditableField(name, editable);
                }
            }
        }

        private bool IsFieldEditable(UserFieldEditable editable)
        {
            if (editable == UserFieldEditable.NOT_EDITABLE)
            {
                return false;
            }
            else if (editable == UserFieldEditable.ADMIN_EDITABLE)
            {
                return UserController.IsLoggedUserAdmin(); // Solo editable si es administrador
            }
            else if (editable == UserFieldEditable.WORKER_EDITABLE)
            {
                return !UserController.IsLoggedUserAdmin(); // Solo editable si es empleado
            }
            else if (editable == UserFieldEditable.WORKER_ADMIN_EDITABLE)
            {
                return true; // Editable por ambos
            }
            return false;
        }

        private void AddEditableField(string name, UserFieldEditable editable)
        {
            var panel = new TableLayoutPanel
            {
                Size = new Size(fieldsPanel.Width - 25, fieldsPanel.Height * 10 / 100),
                ColumnCount = 2,
                RowCount = 1,
                Name = "t",
            };
            panel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30.0f));
            panel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70.0f));
            panel.RowStyles.Add(new RowStyle(SizeType.AutoSize));

            var label = new Label
            {
                AutoSize = true,
                Text = (name=="Id" || name == "Age" || name=="Seniority" || name == "Emergency Contacts") && insertMode ? "" : name,
                Dock = DockStyle.Fill,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold),
            };
            panel.Controls.Add(label, 0, 0);

            Control inputControl = CreateInputControl(name);
            panel.Controls.Add(inputControl, 1, 0);

            inputControl.Enabled = IsFieldEditable(editable);

            fieldsPanel.Controls.Add(panel);
        }

        private void AddAddressField()
        {
            var panel = new TableLayoutPanel
            {
                Size = new Size(fieldsPanel.Width - 25, fieldsPanel.Height * 10 / 100),
                ColumnCount = 2,
                RowCount = 1,
                Name = "t",
            };
            panel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30.0f));
            panel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70.0f));

            var label = new Label
            {
                Text = "Address",
                AutoSize = true,
                Dock = DockStyle.Fill,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold)
            };
            panel.Controls.Add(label, 0, 0);

            var editButton = new Button
            {
                AutoSize = true,
                Text = "EDIT",
                Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold),
                Anchor = AnchorStyles.Left,
                ForeColor = Style.BLUE,
                Name = "edit"
            };
            editButton.Click += (s, e) => addressEditForm.Show();
            panel.Controls.Add(editButton, 1, 0);
            fieldsPanel.Controls.Add(panel);
        }

        private void AddEmergencyContactsField()
        {
            var panel = new TableLayoutPanel
            {
                Size = new Size(fieldsPanel.Width - 25, fieldsPanel.Height * 10 / 100),
                ColumnCount = 2,
                RowCount = 1,
                Name = "t",
            };
            panel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30.0f));
            panel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70.0f));

            var label = new Label
            {
                Text = insertMode ? "" : "Emergency Contacts",
                AutoSize = true,
                Dock = DockStyle.Fill,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold)
            };
            panel.Controls.Add(label, 0, 0);
            var editButton = new Button
            {
                AutoSize = true,
                Text = "EDIT",
                Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold),
                Anchor = AnchorStyles.Left,
                ForeColor = Style.BLUE,
                Name = "edit"
            };
            editButton.Click += (s, e) => emergencyContactEditForm.Show();
            panel.Controls.Add(editButton, 1, 0);
            fieldsPanel.Controls.Add(panel);
        }

        private Control CreateInputControl(string name)
        {
            if (name == "Email" || name == "Name" || name == "Phone" || name == "Password")
            {
                TextBox tb = new TextBox
                {
                    Name = name,
                    Text = GetUserDataValue(name), 
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 16),
                    Width = this.Width * 40 /100
                };

                if (name == "Email") emailTextBox = tb;
                return tb;
            }
            else if (name == "Active" || name == "Guard Card")
            {
                return new CheckBox
                {
                    Name = name,
                    Text = name,
                    Checked = GetUserBooleanValue(name),
                    CheckAlign = ContentAlignment.MiddleLeft,
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 14),
                    Width = this.Width * 40 / 100
                };
            }
            else if (name == "Birthday" || name == "Hire Date")
            {
                return new DateTimePicker {
                    Name = name,
                    Value = GetUserDateValue(name), 
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 16),
                    Width = this.Width * 40 / 100
                };
            }
            else if (name == "User Type")
            {
                var comboBox = new ComboBox
                {
                    Name = name,
                    Items = { "ADMIN", "SUPERVISOR", "WORKER" },
                    SelectedIndex = (int)userData.UserType,
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 16)
                };
                return comboBox;
            }
            else if (name == "Id" && !insertMode)
            {
                return new Label 
                {
                    Name = name,
                    Text = $"{userData.Id}", 
                    AutoSize = true, 
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 16)
                };
            }
            else if (name == "Age" && !insertMode)
            {
                return new Label
                {
                    Name = name,
                    Text = $"{userData.Age} years", 
                    AutoSize = true, 
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 16)
                };
            }
            else if (name == "Seniority" && !insertMode)
            {
                return new Label {

                    Name = name,
                    Text = $"{userData.Seniority} years", 
                    AutoSize = true, 
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 16)
                };
            }
            else
            {
                return new Label { Text = "" };
            }
        }

        private bool VerifyFields()
        {
            foreach (Control c in fieldsPanel.Controls)
            {
                foreach (var control in c.Controls)
                    if (control is TextBox textBox && string.IsNullOrWhiteSpace(textBox.Text))
                        return false;
            }
            if (modifiedAddress == null) return false;
            if (string.IsNullOrEmpty(modifiedAddress.State) ||
                string.IsNullOrEmpty(modifiedAddress.City) ||
                string.IsNullOrEmpty(modifiedAddress.Street) ||
                string.IsNullOrEmpty(modifiedAddress.PostalCode) ||
                string.IsNullOrEmpty(modifiedAddress.Number)
                ) return false;

            return true;
        }

        private void UpdateUserData()
        {
            foreach (Control t in fieldsPanel.Controls)
            {
                if (t.Name == "t")
                {
                    foreach (var control in t.Controls)
                    {
                        if (control is TextBox textBox)
                            UpdateUserField(textBox.Name, textBox.Text);
                        else if (control is CheckBox checkBox)
                            UpdateUserField(checkBox.Name, checkBox.Checked.ToString());
                        else if (control is DateTimePicker datePicker)
                            UpdateUserField(datePicker.Name, datePicker.Value.ToString("yyyy-MM-dd"));
                        
                    }
                    foreach (var control in t.Controls)
                    {
                        if (control is Label label)
                        {
                            if (label.Name == "Age") label.Text = $"{userData.Age} years";
                            if (label.Name == "Seniority") label.Text = $"{userData.Seniority} years";
                        }
                    }
                }
            }
            userData.Address = modifiedAddress;
            userData.ProfileImage = modifiedImage;
            if (userData.ProfileImage == null) userData.ProfileImage = Properties.Resources.UserIcon;
        }

        private string GetUserDataValue(string name)
        {
            if (name == "Email")
            {
                return userData.Email;
            }
            else if (name == "Name")
            {
                return userData.Name;
            }
            else if (name == "Phone")
            {
                return userData.Phone;
            }
            else if (name == "Password")
            {
                return userData.Password;
            }
            else
            {
                return string.Empty;
            }
        }

        private bool GetUserBooleanValue(string name)
        {
            if (name == "Active")
            {
                return userData.IsActivated;
            }
            else if (name == "Guard Card")
            {
                return userData.HasGuardCard;
            }
            else
            {
                return false;
            }
        }

        private DateTime GetUserDateValue(string name)
        {
            if (name == "Birthday")
            {
                return userData.Birthday;
            }
            else if (name == "Hire Date")
            {
                return userData.HireDate;
            }
            else
            {
                return DateTime.Now;
            }
        }

        private void UpdateUserField(string name, string value)
        {
            switch (name)
            {
                case "Name": userData.Name = value; break;
                case "Email": userData.Email = value; break;
                case "Phone": userData.Phone = value; break;
                case "Password": userData.Password = value; break;
                case "Active": userData.IsActivated = bool.Parse(value); break;
                case "Guard Card": userData.HasGuardCard = bool.Parse(value); break;
                case "Birthday": userData.Birthday = DateTime.Parse(value); break;
                case "Hire Date": userData.HireDate = DateTime.Parse(value); break;
            }
        }

        private void InitProfileImage()
        {
            PictureBox picbox = new PictureBox()
            {
                SizeMode = PictureBoxSizeMode.StretchImage,
                Width = this.Height * 30 / 100,
                Height = this.Height * 30 / 100,
                Anchor = AnchorStyles.None,
            };
            if (userData.ProfileImage != null) picbox.Image = userData.ProfileImage;
            else picbox.Image = new Bitmap(Properties.Resources.UserIcon);
            imagePanel.Controls.Add(picbox);

            Button addImg = new Button()
            {
                AutoSize = true,
                Text = "SET IMAGE",
                Font = new Font(Style.FONT_BAHNSCHRTFT, 22, FontStyle.Bold),
                ForeColor = Style.GRAY,
                Anchor = AnchorStyles.None,
            };
            addImg.Click += (sender, e) =>
            {
                using (OpenFileDialog openFileDialog = new OpenFileDialog())
                {
                    openFileDialog.Filter = "Image Files (*.png)|*.png";
                    openFileDialog.Title = "Select image";

                    if (openFileDialog.ShowDialog() == DialogResult.OK)
                    {
                        try
                        {
                            modifiedImage = Image.FromFile(openFileDialog.FileName);
                            picbox.Image = modifiedImage;
                        }
                        catch (Exception ex)
                        {
                            MessageBox.Show($"ERROR loading image: {ex.Message}", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                        }
                    }
                }
            };
            imagePanel.Controls.Add(addImg);
        }
    }

}
