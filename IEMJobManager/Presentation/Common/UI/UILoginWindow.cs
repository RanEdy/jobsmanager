using Logic.UserLogic;
using System;
using System.Windows.Forms;
using System.Drawing;

namespace Presentation.Common.UI
{
    public class UILoginWindow : Form
    {
        readonly Size maxSize = new Size(650, 1000);
        readonly int widthPercentage = 35;
        readonly int heightPercentage = 65;

        private FlowLayoutPanel mainPanel;
        private Label lTitle, lEmail, lPassword;
        private PictureBox loginImage;
        private TextBox tbEmail, tbPassword;
        private Button btnLogin;

        private string defaultEmail = "erandisacbe@gmail.com";
        private string defaultPassword = "12345";

        public UILoginWindow()
        {
            
            InitSize();
            InitUI();
        }

        public void InitSize()
        {
            this.MaximumSize = maxSize;
            Size screenSize = Screen.PrimaryScreen.WorkingArea.Size;
            
            this.Width = (screenSize.Width * widthPercentage) / 100;
            this.Height = (screenSize.Height * heightPercentage) / 100;
            
            if (this.Width > maxSize.Width) { this.Width = maxSize.Width; }
            if (this.Height > maxSize.Height) { this.Height = maxSize.Height; }

            this.StartPosition = FormStartPosition.CenterScreen;
            this.FormBorderStyle = FormBorderStyle.FixedSingle;
        }

        public void InitUI()
        {
            Font mediumFont = new Font(Style.FONT_BAHNSCHRIFT, 14);
            Font bigFont = new Font(Style.FONT_BAHNSCHRIFT, 18, FontStyle.Bold);
            Font titleFont = new Font(Style.FONT_BAHNSCHRIFT, 24, FontStyle.Bold);
            int paddingH = this.Width / 4;
            int paddingV = this.Height / 32;
            int paddingContent = 15;

            this.Text = "Login: Job Manager App";
            this.BackColor = Style.SOFT_WHITE;
            this.Icon = Properties.Resources.iem_tinyicon_blue; 

            mainPanel = new FlowLayoutPanel()
            {
                FlowDirection = FlowDirection.TopDown,
                Dock = DockStyle.Fill,
                Padding = new Padding(paddingH, paddingV, paddingH, paddingV)
            };

            lTitle = new Label()
            {
                Text = "JOB     MANAGER     APP",
                Font = bigFont,
                AutoSize = true,
                Padding = new Padding(paddingContent, paddingContent-15, paddingContent, paddingContent+60),
                Anchor = AnchorStyles.None,
                TextAlign = ContentAlignment.MiddleCenter,
                //ForeColor = Style.DARK_GRAY,
            };

            loginImage = new PictureBox()
            {
                Image = Properties.Resources.iem_icon_dark,
                SizeMode = PictureBoxSizeMode.StretchImage,
                Size = new Size(this.Size.Width * 45 / 100, this.Size.Height * 25 / 100),
                Padding = new Padding(paddingContent),
                Anchor = AnchorStyles.None
            };

            lEmail = new Label()
            {
                Text = "Email",
                Font = mediumFont,
                AutoSize = true,
                Padding = new Padding(0, paddingContent, 0, paddingContent),
                Anchor = AnchorStyles.Left
            };

            tbEmail = new TextBox()
            {
                Text = defaultEmail,
                Font = mediumFont,
                Width = this.Width * 50 / 100,
                Anchor = AnchorStyles.None
            };

            lPassword = new Label()
            {
                Text = "Password",
                Font = mediumFont,
                AutoSize = true,
                Padding = new Padding(0, paddingContent, 0, paddingContent),
                Anchor = AnchorStyles.Left
            };

            tbPassword = new TextBox()
            {
                Text = defaultPassword,
                Font = mediumFont,
                Width = this.Width * 50 / 100,
                UseSystemPasswordChar = false,
                Padding = new Padding(paddingContent),
                Anchor = AnchorStyles.None
            };

            btnLogin = new Button()
            {
                Text = "Log In",
                Font = bigFont,
                AutoSize = true,
                Margin = new Padding(paddingContent),
                Anchor = AnchorStyles.None
            };
            btnLogin.Click += btnlogin_click;

            
            mainPanel.Controls.Add(loginImage);
            mainPanel.Controls.Add(lTitle);
            mainPanel.Controls.Add(lEmail);
            mainPanel.Controls.Add(tbEmail);
            mainPanel.Controls.Add(lPassword);
            mainPanel.Controls.Add(tbPassword);
            mainPanel.Controls.Add(btnLogin);
            this.Controls.Add(mainPanel);
        }

        private void btnlogin_click(object sender, EventArgs e)
        {
            UserController userController = new UserController();
            if (userController.LogUser(tbEmail.Text, tbPassword.Text))
            {
                GlobalUIManager.InitMainWindow();
                this.Hide();
            }
            else
            {
                MessageBox.Show("Invalid Data", "", MessageBoxButtons.OK);
            }
        }
    }
}
