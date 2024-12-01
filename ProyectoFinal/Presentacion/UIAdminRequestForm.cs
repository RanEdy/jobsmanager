using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentacion
{
    public class UIAdminRequestForm : Form
    {
        private Size maxSize = new Size(1500, 800);
        private int widthPercentage = 70;
        private int heightPercentage = 70;
        private int jobId;
        public UIAdminRequestForm(int jobId)
        {
            InitFormSize();

            this.jobId = jobId;
            this.Controls.Add(new UIAdminUsersPage(this.Size, true, jobId));
            this.Show();
        }

        private void InitFormSize()
        {
            this.MaximumSize = maxSize;
            this.StartPosition = FormStartPosition.Manual;
            Size screenSize = Screen.PrimaryScreen.WorkingArea.Size;
            if (screenSize.Width > maxSize.Width) { this.Width = maxSize.Width; }
            if (screenSize.Height > maxSize.Height) { this.Height = maxSize.Height; }
            else { this.Size = screenSize; }
            this.Width = (this.Width * widthPercentage) / 100;
            this.Height = (this.Height * heightPercentage) / 100;
            this.StartPosition = FormStartPosition.CenterScreen;
            this.FormBorderStyle = FormBorderStyle.FixedSingle;
        }
    }
}
