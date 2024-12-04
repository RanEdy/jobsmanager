using System;
using System.Drawing;
using System.Windows.Forms;

namespace Presentacion
{
    public class UIUserEditForm : Form
    {
        private Size maxSize = new Size(1400, 1000);
        private int widthPercentage = 80;
        private int heightPercentage = 80;
        private UIProfilePage profilePage;
        public UIAdminUsersPage adminUsersPage {  get; set; }
        public UIUserBlock externBlock { get; set; }
        public bool insertMode;

        //Modo Edicion (predeterminado)
        //Modo Insercion
        public UIUserEditForm(UIProfilePage profile, bool insertMode=false)
        {
            profilePage = profile;
            this.Controls.Add(profilePage);
            CalculateSize();

            if (!insertMode) profile.saveButton.Click += SaveButtonEdit_Click;
            else
            {
                profile.insertMode = true;
            }
        }

        private void SaveButtonEdit_Click(object sender, EventArgs e)
        {
            adminUsersPage.userBlocksPanel.Controls.Remove(externBlock);
            externBlock = new UIUserBlock(externBlock.userData, externBlock.Size);
            externBlock.uIAdminUsersPage = adminUsersPage;
            adminUsersPage.userBlocksPanel.Controls.Add(externBlock);
            profilePage.Reset(externBlock.userData);
            Close();
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
    }
}
