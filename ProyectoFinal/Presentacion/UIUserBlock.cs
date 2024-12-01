using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Negocio;
using Persistencia;

namespace Presentacion
{
    public class UIUserBlock : FlowLayoutPanel
    {
        public UIAdminUsersPage uIAdminUsersPage { get; set; }
        public User userData;
        private PictureBox profileImg;
        private Button edit, delete, accept, reject;
        private UIUserEditForm editProfile;
        private UserController controller = new UserController();
        private RequestController requestController = new RequestController();
        private JobController jobController = new JobController();
        private bool isRequest;
        private int jobId;

        //Modo Administrador (predeterminado)
        //Modo Solicitud
        public UIUserBlock(User userData, Size size, bool isRequest=false, int jobId=-1)
        {
            this.jobId = jobId;
            this.isRequest = isRequest;
            this.userData = userData;
            this.Size = size;
            this.BackColor = Style.WHITE;
            this.BorderStyle = BorderStyle.FixedSingle;
            InitUI();
            InitButtons();
        }

        private void InitUI()
        {
            int fontSize = 20;
            profileImg = new PictureBox()
            {
                SizeMode = PictureBoxSizeMode.StretchImage,
                Height = this.Height * 95 /100,
                Width = this.Height * 95 /100,
                Margin = new Padding(0)
            };
            if (userData.ProfileImage != null) profileImg.Image = userData.ProfileImage;
            else profileImg.Image = new Bitmap(Properties.Resources.UserIcon);

            this.Controls.Add(profileImg);

            Label name = new Label()
            {
                Height = this.Height,
                Width = this.Width * 30 / 100,
                Text = userData.Name,
                Anchor = AnchorStyles.Left,
                Font = new Font(Style.FONT_BAHNSCHRTFT, fontSize, FontStyle.Bold),
                ForeColor = Style.GRAY
            };
            this.Controls.Add(name);

            Label seniority = new Label()
            {
                Height = this.Height,
                Width = this.Width * 20 / 100,
                Text = "Seniority: " + userData.Seniority,
                Anchor = AnchorStyles.Left,
                Font = new Font(Style.FONT_BAHNSCHRTFT, fontSize, FontStyle.Bold),
                ForeColor = Style.GRAY
            };
            this.Controls.Add(seniority);

            Label type = new Label()
            {
                AutoSize = true,
                Text = userData.UserType.ToString(),
                TextAlign = ContentAlignment.MiddleLeft,
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRTFT, fontSize, FontStyle.Bold),
                ForeColor = Style.GRAY
            };
            Label id = new Label()
            {
                AutoSize = true,
                Text = "ID: " + userData.Id,
                TextAlign = ContentAlignment.MiddleLeft,
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRTFT, fontSize, FontStyle.Bold),
                ForeColor = Style.GRAY
            };

            TableLayoutPanel typeAndId = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Height = this.Height,
                Width = this.Width * 20 / 100,
                Margin = new Padding(0)
            };
            typeAndId.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            typeAndId.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            typeAndId.Controls.Add(type);
            typeAndId.Controls.Add(id);
            this.Controls.Add(typeAndId);
        }

        private void InitButtons()
        {
            // Si No esta en modo solicitud
            if (!isRequest)
            {
                edit = new Button()
                {
                    Size = new Size(this.Height * 80 / 100, this.Height * 80 / 100),
                    BackColor = Style.LIGHT_GRAY,
                    Anchor = AnchorStyles.None,
                    ImageAlign = ContentAlignment.MiddleCenter,
                };
                edit.Image = new Bitmap(Properties.Resources.ConfigIcon, new Size(edit.Height, edit.Height));
                edit.Click += Edit_Click;
                delete = new Button()
                {
                    Size = new Size(this.Height * 80 / 100, this.Height * 80 / 100),
                    BackColor = Style.LIGHT_RED,
                    Anchor = AnchorStyles.None,
                    ImageAlign = ContentAlignment.MiddleCenter,
                };
                delete.Image = new Bitmap(Properties.Resources.RemoveIcon, new Size(delete.Height * 60 / 100, delete.Height * 60 / 100));
                delete.Click += Delete_Click;

                this.Controls.Add(edit);
                this.Controls.Add(delete);
            }
            //Si esta en modo solicitud
            else
            {
                accept = new Button()
                {
                    Size = new Size(this.Height * 80 / 100, this.Height * 80 / 100),
                    BackColor = Style.LIGHT_GREEN,
                    Anchor = AnchorStyles.None,
                    ImageAlign = ContentAlignment.MiddleCenter,
                    Margin = new Padding(this.Width * 10 / 100, 0, 0, 0)
                };
                accept.Image = new Bitmap(Properties.Resources.CheckRequestIcon, new Size(accept.Height * 60 / 100, accept.Height * 60 / 100));
                accept.Click += Accept_Click;

                reject = new Button()
                {
                    Size = new Size(this.Height * 80 / 100, this.Height * 80 / 100),
                    BackColor = Style.LIGHT_RED,
                    Anchor = AnchorStyles.None,
                    ImageAlign = ContentAlignment.MiddleCenter,
                };
                reject.Image = new Bitmap(Properties.Resources.RemoveIcon, new Size(reject.Height * 60 / 100, reject.Height * 60 / 100));
                reject.Click += Reject_Click;
                this.Controls.Add(accept);
                this.Controls.Add(reject);
            }
        }

        private void Reject_Click(object sender, EventArgs e)
        {
            Request r = new Request()
            {
                UserId = userData.Id,
                JobId = jobId,
                State = RequestState.REJECTED
            };
            requestController.EditRequest(r);
            this.Visible = false;
        }

        private void Accept_Click(object sender, EventArgs e)
        {
            Request r = new Request()
            {
                UserId = userData.Id,
                JobId = jobId,
                State = RequestState.ACCEPTED
            };
            requestController.EditRequest(r);
            jobController.InsertUserIntoJob(userData.Id, jobId);
            this.Visible = false;
        }

        private void Delete_Click(object sender, EventArgs e)
        {
            controller.DeleteUser(userData.Id);
            this.Visible = false;
        }

        private void Edit_Click(object sender, EventArgs e)
        {
            if (editProfile != null) editProfile.Dispose();
            editProfile = new UIUserEditForm(new UIProfilePage(UIMainForm.finalSize, userData));
            editProfile.adminUsersPage = uIAdminUsersPage;
            editProfile.externBlock = this;
            editProfile.Show();
        }
    }
}
