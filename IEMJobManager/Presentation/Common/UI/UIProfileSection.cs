using Logic.UserLogic;
using Persistance.DataModels;
using Persistance.DataModels.UserModel;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Serialization;

namespace Presentation.Common.UI
{
    public class UIProfileSection : ISection
    {
        public string sectionName => "Profile";
        public Panel sectionPanel => mainPanel;
        public Image sectionImage => Properties.Resources.userIcon;

        private UIProfilePanel profilePanel;
        private TableLayoutPanel mainPanel;
        private int userId;
        public UIProfileSection(Size panelSize, int userId)
        {
            this.userId = userId;
            mainPanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Fill,
                Size = panelSize,
                ColumnCount = 1,
                RowCount = 2,
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
            
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 90.0f));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 10.0f));
            int h = mainPanel.Height * 85 / 100;
            int w = mainPanel.Width;
            profilePanel = new UIProfilePanel(new Size(w,h), userId);

            mainPanel.Controls.Add(profilePanel, 0, 0);

            Button saveButton = new Button()
            {
                MinimumSize = new Size(mainPanel.Width*30/100, 20),
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
            saveButton.Click += (s,e) =>
            {
                User data = profilePanel.GetValues();
                //Modificar la info en la base de datos
                if (VerifyValues(data))
                {
                    new UserController().EditUser(data);
                    GlobalUIManager.UpdateAll();
                    MessageBox.Show("DATA SUCCESFULLY MODIFIED");
                }
                else MessageBox.Show("ONE OR MORE FIELDS HAVE INVALID VALUES", "INVALID VALUES", MessageBoxButtons.OK, MessageBoxIcon.Error);
            };
            mainPanel.Controls.Add(saveButton, 0, 1);
        }

        private bool VerifyValues(User data)
        {
            bool verifyAddress = !(string.IsNullOrWhiteSpace(data.Address.State) ||  string.IsNullOrWhiteSpace(data.Address.City)
                                || string.IsNullOrWhiteSpace(data.Address.Street) || string.IsNullOrWhiteSpace(data.Address.PostalCode)
                                || string.IsNullOrWhiteSpace(data.Address.Number));
            bool verifyTextual = !( string.IsNullOrWhiteSpace(data.Name) || string.IsNullOrWhiteSpace(data.Email) || string.IsNullOrWhiteSpace(data.Password) );
            bool verifyPhone = !string.IsNullOrWhiteSpace(data.Phone) && uint.TryParse(data.Phone.Replace(" ", ""), out _);
            bool verifyEmail = !new UserController().VerifyEmail(data.Email);

            return verifyTextual && verifyPhone && verifyAddress && verifyEmail;
        }

    }
}
