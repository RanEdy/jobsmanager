using Persistance.DataModels.UserModel;
using Logic.UserLogic;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Persistance.DataModels;
using System.Xml.Linq;

namespace Presentation.Common.UI
{
    public class UIProfilePanel : Panel
    {
        private FlowLayoutPanel userPanel;
        private Panel imagePanel;
        private Form addressWindow;
        private Form emergencyContactsWindow;

        private User modifiedData;
        private int userId;
        private bool isEmpty;
        private Dictionary<UserFieldType, object> fieldValues = new Dictionary<UserFieldType, object>();
        public UIProfilePanel(Size panelSize, int userId, bool isEmpty=false)
        {
            this.userId = userId;
            this.isEmpty = isEmpty;
            this.BackColor = Style.RED;
            this.Dock = DockStyle.Fill;
            this.Size = panelSize;

            InitUI();
        }

        public User GetValues()
        {
            if (!isEmpty)
                modifiedData.Id = (int)fieldValues[UserFieldType.ID];
            modifiedData.Name = (fieldValues[UserFieldType.NAME] as TextBox).Text;
            modifiedData.Email = (fieldValues[UserFieldType.EMAIL] as TextBox).Text;
            modifiedData.Password = (fieldValues[UserFieldType.PASSWORD] as TextBox).Text;
            modifiedData.Birthday = (fieldValues[UserFieldType.BIRTHDAY] as DateTimePicker).Value;
            modifiedData.HasGuardCard = (fieldValues[UserFieldType.GUARD_CARD] as CheckBox).Checked;
            modifiedData.IsActivated = (fieldValues[UserFieldType.ACTIVE] as CheckBox).Checked;
            modifiedData.Phone = (fieldValues[UserFieldType.PHONE] as TextBox).Text;
            modifiedData.Birthday = (fieldValues[UserFieldType.BIRTHDAY] as DateTimePicker).Value;
            modifiedData.UserType = (UserType)(fieldValues[UserFieldType.USER_TYPE] as ComboBox).SelectedIndex;
            modifiedData.ProfileImage = (Image)fieldValues[UserFieldType.PROFILE_IMG];
            modifiedData.Address = (Address)fieldValues[UserFieldType.ADDRESS];
            
            return modifiedData;
        }
        
        private void InitUI()
        {
            TableLayoutPanel tablePanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Fill,
                AutoSize = true,
                BackColor = Style.DARK_WHITE,
                ColumnCount = 2,
                RowCount = 1,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Single
            };
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30.0f));
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70.0f));
            this.Controls.Add(tablePanel);

            //Panel de los datos del usuario
            userPanel = new FlowLayoutPanel()
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.DARK_WHITE,
                Padding = new Padding(10)
            };
            tablePanel.Controls.Add(userPanel, 1, 0);
            //Panel de la imagen del usuario
            imagePanel = new Panel()
            {
                BackColor = Style.DARK_WHITE,
                AutoSize = true,
                Dock = DockStyle.Fill
            };
            tablePanel.Controls.Add(imagePanel, 0, 0);
            
            InitFieldPanels();
        }

        private void InitFieldPanels()
        {
            if (!isEmpty)
                modifiedData = new UserController().GetUser(userId);
            else
                modifiedData = new User()
                {
                    Id = -1,
                    Name = "",
                    Email = "",
                    Password = "",
                    Birthday = DateTime.Now,
                    HireDate = DateTime.Now,
                    Address = new Address(),
                    Phone = "",
                    UserType = UserType.WORKER,
                    IsActivated = false,
                    HasGuardCard = false
                };

            if (!isEmpty)
                CreateFieldInputControl(modifiedData.Id,           UserFieldType.ID,                 new Label());
            CreateFieldInputControl(modifiedData.Name,         UserFieldType.NAME,               new TextBox());
            CreateFieldInputControl(modifiedData.Email,        UserFieldType.EMAIL,              new TextBox());
            CreateFieldInputControl(modifiedData.Password,     UserFieldType.PASSWORD,           new TextBox());
            if (!isEmpty)
                CreateFieldInputControl(modifiedData.Age,          UserFieldType.AGE,                new Label());
            CreateFieldInputControl(modifiedData.Birthday,     UserFieldType.BIRTHDAY,           new DateTimePicker());
            CreateFieldInputControl(modifiedData.HireDate,     UserFieldType.HIRE_DATE,          new DateTimePicker());
            if (!isEmpty)
                CreateFieldInputControl(modifiedData.Seniority,    UserFieldType.SENIORITY,          new Label());
            CreateFieldInputControl(modifiedData.Address,      UserFieldType.ADDRESS,            new Button());
            CreateFieldInputControl(modifiedData.Phone,        UserFieldType.PHONE,              new TextBox());
            CreateFieldInputControl(modifiedData.UserType,     UserFieldType.USER_TYPE,          new ComboBox());
            CreateFieldInputControl(modifiedData.IsActivated,  UserFieldType.ACTIVE,             new CheckBox());
            CreateFieldInputControl(modifiedData.HasGuardCard, UserFieldType.GUARD_CARD,         new CheckBox());
            CreateFieldInputControl(modifiedData.ProfileImage, UserFieldType.PROFILE_IMG,        new Button());
            if (!isEmpty)
                CreateFieldInputControl(modifiedData.Id,       UserFieldType.EMERGENCY_CONTACTS, new Button());
        }

        private void CreateFieldInputControl(object value, UserFieldType field, Control control)
        {
            string name = User.fieldsMetaData[field].name;
            EditableType editable = User.fieldsMetaData[field].editable;
            bool isEditable = UserController.IsLoggedUserAdmin() || (!UserController.IsLoggedUserAdmin()
                && (editable == EditableType.WORKER_ADMIN_EDITABLE || editable == EditableType.WORKER_EDITABLE));

            Font font = new Font(Style.FONT_BAHNSCHRIFT, 16);
            switch (control)
            {
                case TextBox textBox:
                    textBox.Text = (string)value;
                    textBox.Font = font;
                    textBox.ForeColor = Style.DARK_GRAY;
                    textBox.Dock = DockStyle.Fill;
                    textBox.Enabled = isEditable;

                    CreateFieldPanel(name, textBox);
                    fieldValues.Add(field, textBox);
                    break;
                case Label label:
                    label.Text = value.ToString();
                    label.Font = font;
                    label.ForeColor = Style.DARK_GRAY;
                    label.Dock = DockStyle.Fill;
                    label.Enabled = isEditable;

                    CreateFieldPanel(name, label);
                    fieldValues.Add(field, value);
                    break;
                case DateTimePicker dateTimePicker:
                    dateTimePicker.Value = (DateTime)value;
                    dateTimePicker.Font = font;
                    dateTimePicker.ForeColor = Style.DARK_GRAY;
                    dateTimePicker.AutoSize = true;
                    dateTimePicker.Dock = DockStyle.Fill;
                    dateTimePicker.Enabled = isEditable;

                    CreateFieldPanel(name, dateTimePicker);
                    fieldValues.Add(field, dateTimePicker);
                    break;
                case Button button:
                    button.AutoSize = true;
                    button.Font = font;
                    button.ForeColor = Style.BLUE;
                    button.BackColor = Style.WHITE;
                    button.Text = "EDIT";
                    button.Enabled = isEditable;

                    if (field == UserFieldType.PROFILE_IMG)
                    {
                        value = value == null ? new Bitmap(Properties.Resources.userIcon) : value;
                        button.Text = "SET IMAGE";
                        button.Anchor = AnchorStyles.None;
                        CreateImagePanel(value as Image, button);
                        fieldValues.Add(field, value);
                        return;
                    }
                    if (field == UserFieldType.ADDRESS)
                    {
                        button.Click += (sender, e) => CreateAddressWindow();
                        CreateFieldPanel(name, button);
                        fieldValues.Add(field, value);
                        return;
                    }
                    if (field == UserFieldType.EMERGENCY_CONTACTS)
                    {
                        button.Click += (sender, e) => CreateEmergencyContactsWindow();
                        CreateFieldPanel(name, button);
                        fieldValues.Add(field, value);
                        return;
                    }
                    break;
                case ComboBox comboBox:
                    comboBox.Font = font;
                    comboBox.ForeColor = Style.DARK_GRAY;
                    comboBox.Items.AddRange(Enum.GetNames(typeof(UserType)));
                    comboBox.SelectedIndex = (int)value;
                    comboBox.Enabled = isEditable;
                    comboBox.DropDownStyle = ComboBoxStyle.DropDownList;

                    CreateFieldPanel(name, comboBox);
                    fieldValues.Add(field, comboBox);
                    break;
                case CheckBox checkBox:
                    checkBox.Text = name;
                    checkBox.Checked = (bool)value;
                    checkBox.Font = font;
                    checkBox.ForeColor = Style.DARK_GRAY;
                    checkBox.AutoSize = true;
                    checkBox.Enabled = isEditable;

                    CreateFieldPanel(name, checkBox);
                    fieldValues.Add(field, checkBox);
                    break;
            }
        }

        private void CreateFieldPanel(string name, Control control)
        {
            TableLayoutPanel fieldPanel = new TableLayoutPanel()
            {
                MinimumSize = new Size(userPanel.Width * 95 / 100, 30),
                ColumnCount = 2,
                RowCount = 1,
                AutoSize = true,
                Padding = new Padding(0, 0, 0, 10),
            };
            fieldPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 35.0f));
            fieldPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 65.0f));
            fieldPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));

            Label fieldName = new Label()
            {
                Text = name,
                AutoSize = true,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
                ForeColor = Style.DARK_GRAY
            };

            fieldPanel.Controls.Add(fieldName, 0, 0);
            fieldPanel.Controls.Add(control, 1, 0);
            userPanel.Controls.Add(fieldPanel);
        }

        private void CreateImagePanel(Image img, Button button)
        {
            TableLayoutPanel panel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Anchor = AnchorStyles.Top,
                Height = imagePanel.Height * 50 / 100,
                Width = imagePanel.Width,
            };
            panel.RowStyles.Add(new ColumnStyle(SizeType.Percent, 75.0f));
            panel.RowStyles.Add(new ColumnStyle(SizeType.Percent, 25.0f));
            PictureBox pictureBox = new PictureBox()
            {
                Image = img,
                SizeMode = PictureBoxSizeMode.StretchImage,
                Anchor = AnchorStyles.None,
                Width = panel.Height*75/100,
                Height = panel.Height*75/100,
                BorderStyle = BorderStyle.FixedSingle
            };
            button.Click += (sender, e) =>
            {
                using (OpenFileDialog openFileDialog = new OpenFileDialog())
                {
                    openFileDialog.Filter = "Image Files (*.png)|*.png";
                    openFileDialog.Title = "Select image";

                    if (openFileDialog.ShowDialog() == DialogResult.OK)
                    {
                        try
                        {
                            fieldValues[UserFieldType.PROFILE_IMG] = Image.FromFile(openFileDialog.FileName);
                            pictureBox.Image = (Image) fieldValues[UserFieldType.PROFILE_IMG];
                        }
                        catch (Exception ex)
                        {
                            MessageBox.Show($"ERROR loading image: {ex.Message}", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                        }
                    }
                }
            };
            panel.Controls.Add(pictureBox, 0, 0);
            panel.Controls.Add(button, 0, 1);
            imagePanel.Controls.Add(panel);
        }

        private void CreateAddressWindow()
        {
            Address address = modifiedData.Address;
            string[] names = { "Street", "City", "State", "Number", "Postal Code" };
            string[] values = { address.Street, address.City, address.State, address.Number, address.PostalCode };
            TextBox[] textBoxes = new TextBox[5];

            addressWindow = new Form()
            {
                Text = "Edit Address",
                Size = new Size(500, 300),
                StartPosition = FormStartPosition.CenterScreen,
                AutoScroll = true,
                FormBorderStyle = FormBorderStyle.FixedDialog,
                MaximizeBox = false,
            };
            TableLayoutPanel tableLayoutPanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Fill,
                AutoSize = true,
                ColumnCount = 2,
                RowCount = 6,
            };
            tableLayoutPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30.0f));
            tableLayoutPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70.0f));
            for (int j = 0; j < 6; j++) tableLayoutPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            
            for (int i = 0; i < names.Length; i++)
            {
                Label label = new Label()
                {
                    Text = names[i],
                    Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
                    ForeColor = Style.DARK_GRAY,
                    Dock = DockStyle.Fill
                };
                TextBox textBox = new TextBox()
                {
                    Text = values[i],
                    Font = new Font(Style.FONT_BAHNSCHRIFT, 16),
                    ForeColor = Style.DARK_GRAY,
                    Dock = DockStyle.Fill
                };
                textBoxes[i] = textBox;
                tableLayoutPanel.Controls.Add(label, 0, i);
                tableLayoutPanel.Controls.Add(textBox, 1, i);
            }
            Button saveButton = new Button()
            {
                Text = "SAVE",
                Font = new Font(Style.FONT_BAHNSCHRIFT, 24, FontStyle.Bold),
                ForeColor = Style.WHITE,
                BackColor = Style.LIGHT_GREEN,
                Dock = DockStyle.Fill,
            };
            saveButton.Click += (sender, e) =>
            {
                address.Street = textBoxes[0].Text;
                address.City = textBoxes[1].Text;
                address.State = textBoxes[2].Text;
                address.Number = textBoxes[3].Text;
                address.PostalCode = textBoxes[4].Text;
                fieldValues[UserFieldType.ADDRESS] = address;
                addressWindow.Close();
            };
            tableLayoutPanel.Controls.Add(saveButton, 1, 5);
            addressWindow.Controls.Add(tableLayoutPanel);

            addressWindow.ShowDialog();
        }

        private void CreateEmergencyContactsWindow()
        {
            emergencyContactsWindow = new Form()
            {
                Text = "Emergency Contacts",
                Size = new Size(1000, 500),
                StartPosition = FormStartPosition.CenterScreen,
                AutoScroll = true,
                FormBorderStyle = FormBorderStyle.FixedDialog,
                MaximizeBox = false,
            };

            TableLayoutPanel backPanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Fill,
                ColumnCount = 2,
                RowCount = 1,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Single,
                BackColor = Style.DARK_WHITE
            };
            backPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 50));
            backPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 50));

            TableLayoutPanel insertContactPanel = new TableLayoutPanel()
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

            FlowLayoutPanel contactsPanel = new FlowLayoutPanel()
            {
                Dock = DockStyle.Fill,
                AutoScroll = true,
                BackColor = Style.DARK_WHITE
            };
            backPanel.Controls.Add(insertContactPanel, 1, 0);
            backPanel.Controls.Add(contactsPanel, 0, 0);
            emergencyContactsWindow.Controls.Add(backPanel);

            //Campos
            string[] fieldNames = { "Name", "Phone", "Relation" };

            for (int i = 0; i < fieldNames.Length; i++)
            {
                Label l = new Label()
                {
                    Text = fieldNames[i],
                    Anchor = AnchorStyles.Left,
                    Dock = DockStyle.Fill,
                    Font = new Font(Style.FONT_BAHNSCHRIFT, 18, FontStyle.Bold)
                };
                insertContactPanel.Controls.Add(l, 0, i);
            }
            TextBox nameT = new TextBox()
            {
                Anchor = AnchorStyles.Left,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 16),
                Dock = DockStyle.Fill
            };
            TextBox phoneT = new TextBox()
            {
                Anchor = AnchorStyles.Left,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 16),
                Dock = DockStyle.Fill
            };
            ComboBox relationCB = new ComboBox()
            {
                Anchor = AnchorStyles.Left,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 16),
                Dock = DockStyle.Fill,
                DropDownStyle = ComboBoxStyle.DropDownList,
            };
            relationCB.Items.AddRange(Enum.GetNames(typeof(Relation)));
            relationCB.SelectedIndex = 0;

            Button insertContactB = new Button()
            {
                Text = "INSERT CONTACT",
                AutoSize = true,
                TextAlign = ContentAlignment.MiddleCenter,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Anchor = AnchorStyles.Right | AnchorStyles.Top,
                Padding = new Padding(5),
                Margin = new Padding(0, 15, 5, 0),
            };
            insertContactB.Click += (sender, e) =>
            {
                bool verifyName = !string.IsNullOrWhiteSpace(nameT.Text);
                bool verifyPhone = !string.IsNullOrWhiteSpace(phoneT.Text) && uint.TryParse(phoneT.Text.Replace(" ", ""), out _);
                if (verifyName && verifyPhone)
                {
                    EmergencyContact contact = new EmergencyContact();
                    contact.IdUser = userId;
                    contact.Name = nameT.Text;
                    contact.Phone = phoneT.Text;
                    contact.Relation = (Relation)relationCB.SelectedIndex;
                    new EmergencyContactController().InsertEmergencyContact(contact, userId);

                    contactsPanel.Controls.Add(CreateEmergencyContactBlock(contact));
                    MessageBox.Show("Succesfully Inserted");
                }
                else
                {
                    MessageBox.Show("ONE OR MORE FIELDS HAVE INVALID VALUES");
                }
            };
            insertContactPanel.Controls.Add(nameT, 1, 0);
            insertContactPanel.Controls.Add(phoneT, 1, 1);
            insertContactPanel.Controls.Add(relationCB, 1, 2);
            insertContactPanel.Controls.Add(insertContactB, 1, 3);

            //Bloques de Contactos
            List<EmergencyContact> list = new EmergencyContactController().QueryEmergencyContactsByUser(userId);
            foreach (EmergencyContact contact in list)
            {
                contactsPanel.Controls.Add(CreateEmergencyContactBlock(contact));
            }

            emergencyContactsWindow.ShowDialog();
        }

        private Panel CreateEmergencyContactBlock(EmergencyContact data)
        {
            Size blockSize = new Size(emergencyContactsWindow.Width * 45 / 100, emergencyContactsWindow.Height * 40 / 100);
            Panel blockPanel = new Panel()
            {
                Size = blockSize,
                BackColor = Style.WHITE,
                BorderStyle = BorderStyle.FixedSingle
            };
            TableLayoutPanel mainPanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Top,
                RowCount = 3,
                ColumnCount = 2,
                AutoSize = true,
                BackColor = Style.WHITE,
                Size = blockSize,
            };
            mainPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 30));
            mainPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 70));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.AutoSize));

            string[] names = { "Name", "Phone", "Relation" };
            for (int i = 0; i < names.Length; i++)
            {
                Label l = new Label()
                {
                    Dock = DockStyle.Fill,
                    Text = names[i],
                    Font = new Font(Style.FONT_BAHNSCHRIFT, 14, FontStyle.Bold),
                    Width = blockPanel.Width * 50 / 100,
                };
                mainPanel.Controls.Add(l, 0, i);
            }
            
            //Inputs
            TextBox nameTextBox = new TextBox()
            {
                Text = data.Name,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 14),
                Dock = DockStyle.Fill,
                Enabled = false
            };
            mainPanel.Controls.Add(nameTextBox, 1, 0);

            TextBox phoneTextBox = new TextBox()
            {
                Text = data.Phone,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 14),
                Dock = DockStyle.Fill,
                Enabled = false
            };
            mainPanel.Controls.Add(phoneTextBox, 1, 1);

            ComboBox relationCombo = new ComboBox()
            {
                Font = new Font(Style.FONT_BAHNSCHRIFT, 14),
                Enabled = false,
                Dock = DockStyle.Fill,
                DropDownStyle = ComboBoxStyle.DropDownList
            };
            relationCombo.Items.AddRange(Enum.GetNames(typeof(Relation)));
            
            relationCombo.SelectedIndex = (int)data.Relation;
            mainPanel.Controls.Add(relationCombo, 1, 2);

            //Botones
            FlowLayoutPanel optionsPanel = new FlowLayoutPanel()
            {
                Dock = DockStyle.Bottom,
                BackColor = Style.WHITE,
                AutoSize = true,
                Height = blockPanel.Height*25/100,
            };
            Button accept = new Button();
            Button edit = new Button();
            Button cancel = new Button();
            Button delete = new Button();

            accept = new Button()
            {
                AutoSize = true,
                Text = "ACCEPT",
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
                Anchor = AnchorStyles.None,
                Visible = false
            };

            accept.Click += new EventHandler((object sender, EventArgs e) =>
            {
                bool verifyName = !string.IsNullOrWhiteSpace(nameTextBox.Text);
                bool verifyPhone = !string.IsNullOrWhiteSpace(phoneTextBox.Text) && uint.TryParse(phoneTextBox.Text.Replace(" ", ""), out _);

                if (verifyName && verifyPhone)
                {
                    nameTextBox.ClearUndo();
                    phoneTextBox.ClearUndo();
                    
                    EmergencyContact contact = new EmergencyContact()
                    {
                        Id = data.Id,
                        IdUser = data.IdUser,
                        Name = nameTextBox.Text,
                        Phone = phoneTextBox.Text,
                        Relation = (Relation)relationCombo.SelectedIndex
                    };
                    new EmergencyContactController().EditEmergencyContact(contact, userId);
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
                Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
                Anchor = AnchorStyles.None,
                Visible = false
            };
            cancel.Click += new EventHandler((object sender, EventArgs e) =>
            {
                nameTextBox.Undo();
                nameTextBox.ClearUndo();
                phoneTextBox.Undo();
                phoneTextBox.ClearUndo();
                relationCombo.SelectedIndex = (int)data.Relation;

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
                Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
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
                Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
                Anchor = AnchorStyles.None
            };
            delete.Click += new EventHandler((object sender, EventArgs e) =>
            {
                new EmergencyContactController().DeleteEmergencyContact(data.Id, data.IdUser);
                blockPanel.Visible = false;
                MessageBox.Show("Successfully deleted");
            });


            optionsPanel.Controls.Add(edit);
            optionsPanel.Controls.Add(delete);
            optionsPanel.Controls.Add(accept);
            optionsPanel.Controls.Add(cancel);

            blockPanel.Controls.Add(mainPanel);
            blockPanel.Controls.Add(optionsPanel);

            return blockPanel;
        }


    }
}
