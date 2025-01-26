using Persistance.DataModels.UserModel;
using Logic.UserLogic;
using Presentation.Common;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Presentation.Common.UI;

namespace Presentation.UIAdmin
{
    public class UIAdminUsersSection : ISection
    {
        public string sectionName => "User List";
        public Panel sectionPanel => mainPanel;
        public Image sectionImage => Properties.Resources.GroupUserIcon;

        private Panel mainPanel;
        private Form profileEditWindow;

        public UIAdminUsersSection(Size panelSize)
        {
            mainPanel = new Panel()
            {
                Size = panelSize,
                BackColor = Style.DARK_WHITE,
                Dock = DockStyle.Fill,
                BorderStyle = BorderStyle.FixedSingle
            };
            InitUI();
        }
        public void UpdateSection()
        {
            mainPanel.Controls.Clear();
            InitUI();
        }

        private void InitUI()
        {
            TableLayoutPanel tablePanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 3,
                Dock = DockStyle.Fill,
                Width = mainPanel.Width * 95 / 100,
                Height = mainPanel.Height
            };
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 15.0F));
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 70.0F));
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 15.0F));

            Label label = new Label()
            {
                Dock = DockStyle.Fill,
                Text = "USER LIST MANAGEMENT",
                ForeColor = Style.BLUE,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 28, FontStyle.Bold),
                TextAlign = ContentAlignment.MiddleCenter,
                Width = mainPanel.Width,
                Height = mainPanel.Height * 15 / 100
            };
            mainPanel.Controls.Add(label);
            FlowLayoutPanel userBlocksPanel = new FlowLayoutPanel()
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.LIGHT_GRAY,
                Width = mainPanel.Width,
                Height = mainPanel.Height * 70 / 100,
                BorderStyle = BorderStyle.FixedSingle
            };
            List<User> userlist = new UserController().QueryUsers();
            
            foreach (User user in userlist)
            {
                userBlocksPanel.Controls.Add(CreateUserBlock(user));
            }

            Button addUser = new Button()
            {
                MinimumSize = new Size(mainPanel.Width * 30 / 100, 20),
                Text = "+  ADD USER",
                AutoSize = true,
                TextAlign = ContentAlignment.MiddleCenter,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 24, FontStyle.Bold),
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Anchor = AnchorStyles.None,
                Padding = new Padding(0),
                Margin = new Padding(0),
            };
            addUser.Click += AddUser_Click;

            tablePanel.Controls.Add(label);
            tablePanel.Controls.Add(userBlocksPanel);
            tablePanel.Controls.Add(addUser);
            mainPanel.Controls.Add(tablePanel);
        }

        private FlowLayoutPanel CreateUserBlock(User data)
        {
            FlowLayoutPanel blockPanel = new FlowLayoutPanel()
            {
                Size = new Size(mainPanel.Width * 98/100, mainPanel.Height*13/100),
                //AutoSize = true,
                BackColor= Style.WHITE,
                BorderStyle= BorderStyle.FixedSingle,
            };

            PictureBox profileImg = new PictureBox()
            {
                SizeMode = PictureBoxSizeMode.StretchImage,
                Height = blockPanel.Height * 95 / 100,
                Width = blockPanel.Height * 95 / 100,
                Margin = new Padding(0),
                Image = data.ProfileImage == null ? Properties.Resources.userIcon : data.ProfileImage,
                Anchor = AnchorStyles.None,
            };
            
            blockPanel.Controls.Add(profileImg);

            Color textColor = Style.DARK_GRAY;
            Label name = new Label()
            {
                Height = blockPanel.Height,
                Width = blockPanel.Width * 30 / 100,
                Text = data.Name,
                Anchor = AnchorStyles.None,
                TextAlign = ContentAlignment.MiddleLeft,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
                ForeColor = textColor
            };
            blockPanel.Controls.Add(name);

            Label seniority = new Label()
            {
                Height = blockPanel.Height,
                Width = blockPanel.Width * 15 / 100,
                Text = "Seniority: " + data.Seniority,
                Anchor = AnchorStyles.None,
                TextAlign = ContentAlignment.MiddleLeft,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
                ForeColor = textColor
            };
            blockPanel.Controls.Add(seniority);

            Label type = new Label()
            {
                AutoSize = true,
                Text = data.UserType.ToString(),
                TextAlign = ContentAlignment.MiddleLeft,
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
                ForeColor = textColor
            };
            Label id = new Label()
            {
                AutoSize = true,
                Text = "ID: " + data.Id,
                TextAlign = ContentAlignment.MiddleLeft,
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
                ForeColor = textColor
            };

            TableLayoutPanel typeAndId = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Height = blockPanel.Height,
                Width = blockPanel.Width * 17 / 100,
                Margin = new Padding(0)
            };
            typeAndId.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            typeAndId.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            typeAndId.Controls.Add(type);
            typeAndId.Controls.Add(id);
            blockPanel.Controls.Add(typeAndId);

            //
            //Botones
            //
            Button edit = new Button()
            {
                Size = new Size(blockPanel.Height * 80 / 100, blockPanel.Height * 80 / 100),
                BackColor = Style.LIGHT_GRAY,
                Anchor = AnchorStyles.None,
                ImageAlign = ContentAlignment.MiddleCenter,
                Margin = new Padding(blockPanel.Width * 15 / 100, 0, 0, 0)
            };
            edit.Image = new Bitmap(Properties.Resources.ConfigIcon, new Size(edit.Height, edit.Height));
            edit.Click += (sender, e) =>
            {
                CreateEditUserWindow(data);
            };

            Button delete = new Button()
            {
                Size = new Size(blockPanel.Height * 80 / 100, blockPanel.Height * 80 / 100),
                BackColor = Style.LIGHT_RED,
                Anchor = AnchorStyles.None,
                ImageAlign = ContentAlignment.MiddleCenter,
            };
            delete.Image = new Bitmap(Properties.Resources.RemoveIcon, new Size(delete.Height * 60 / 100, delete.Height * 60 / 100));
            delete.Click += (sender, e) =>
            {
                DialogResult result = MessageBox.Show("You want to delete this user?", "Delete User Confirmation", MessageBoxButtons.OKCancel, MessageBoxIcon.Question);
                if (result == DialogResult.OK)
                {
                    new UserController().DeleteUser(data.Id);
                    GlobalUIManager.UpdateAll();
                    MessageBox.Show("USER DELETED SUCCESFULLY", "USER DELETION", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                }
            };

            blockPanel.Controls.Add(edit);
            blockPanel.Controls.Add(delete);

            return blockPanel;
        }

        private void CreateEditUserWindow(User data)
        {
            profileEditWindow = new Form()
            {
                Width = mainPanel.Width * 80 / 100,
                Height = mainPanel.Height,
                BackColor = Style.WHITE,
                Text = "User Editing"
            };

            UIProfilePanel profilePanel = new UIProfilePanel(new Size(profileEditWindow.Width, profileEditWindow.Height), data.Id);

            TableLayoutPanel tablePanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Dock = DockStyle.Fill,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Single
            };
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 90.0f));
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 10.0f));
            
            //Boton para editar la informacion del usuario en la base de datos
            Button saveButton = new Button()
            {
                MinimumSize = new Size(mainPanel.Width * 30 / 100, 20),
                Text = "SAVE",
                AutoSize = true,
                TextAlign = ContentAlignment.MiddleCenter,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 24, FontStyle.Bold),
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Anchor = AnchorStyles.None,
                Padding = new Padding(0),
                Margin = new Padding(0),
            };
            saveButton.Click += (sender, e) =>
            {
                User editedValues = profilePanel.GetValues();
                DialogResult result = MessageBox.Show("You want to save the edited values for this user?", "User Edition Confirmation", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
                if (VerifyValues(editedValues) && result == DialogResult.Yes)
                {
                    new UserController().EditUser(editedValues);
                    GlobalUIManager.UpdateAll();
                    profileEditWindow.Close();
                    MessageBox.Show("USER SUCCESSFULLY EDITED");
                }
                else
                {
                    MessageBox.Show("ONE OR MORE FIELDS HAVE INVALID VALUES", "INVALID VALUES", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            };

            tablePanel.Controls.Add(profilePanel, 0, 0);
            tablePanel.Controls.Add(saveButton, 0, 1);
            profileEditWindow.Controls.Add(tablePanel);
            profileEditWindow.ShowDialog();
        }

        private bool VerifyValues(User data)
        {
            bool verifyAddress = !(string.IsNullOrWhiteSpace(data.Address.State) || string.IsNullOrWhiteSpace(data.Address.City)
                                || string.IsNullOrWhiteSpace(data.Address.Street) || string.IsNullOrWhiteSpace(data.Address.PostalCode)
                                || string.IsNullOrWhiteSpace(data.Address.Number));
            bool verifyTextual = !(string.IsNullOrWhiteSpace(data.Name) || string.IsNullOrWhiteSpace(data.Email) || string.IsNullOrWhiteSpace(data.Password));
            bool verifyPhone = !string.IsNullOrWhiteSpace(data.Phone) && uint.TryParse(data.Phone.Replace(" ", ""), out _);
            bool verifyEmail = !new UserController().VerifyEmail(data.Email);

            return verifyTextual && verifyPhone && verifyAddress && verifyEmail;
        }

        private void AddUser_Click(object sender, EventArgs e)
        {
            profileEditWindow = new Form()
            {
                Width = mainPanel.Width * 80 / 100,
                Height = mainPanel.Height,
                BackColor = Style.WHITE,
                Text = "User Creation"
            };

            UIProfilePanel profilePanel = new UIProfilePanel(new Size(profileEditWindow.Width, profileEditWindow.Height), -1, true);

            TableLayoutPanel tablePanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Dock = DockStyle.Fill,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Single
            };
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 90.0f));
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 10.0f));

            //Boton para guardar y crear al nuevo usuario
            Button saveButton = new Button()
            {
                MinimumSize = new Size(mainPanel.Width * 30 / 100, 20),
                Text = "SAVE",
                AutoSize = true,
                TextAlign = ContentAlignment.MiddleCenter,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 24, FontStyle.Bold),
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Anchor = AnchorStyles.None,
                Padding = new Padding(0),
                Margin = new Padding(0),
            };
            saveButton.Click += (a, b) =>
            {
                User editedValues = profilePanel.GetValues();
                DialogResult result = MessageBox.Show("You want to create the new user?", "User Creation Confirmation", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
                if (VerifyValues(editedValues) && result == DialogResult.Yes)
                {
                    new UserController().InsertUser(editedValues);
                    GlobalUIManager.UpdateAll();
                    profileEditWindow.Close();
                    MessageBox.Show("USER SUCCESSFULLY CREATED");
                }
                else
                {
                    MessageBox.Show("ONE OR MORE FIELDS HAVE INVALID VALUES", "INVALID VALUES", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            };

            tablePanel.Controls.Add(profilePanel, 0, 0);
            tablePanel.Controls.Add(saveButton, 0, 1);
            profileEditWindow.Controls.Add(tablePanel);
            profileEditWindow.ShowDialog();
        }

    }
}
