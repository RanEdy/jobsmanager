using Negocio;
using Persistencia;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentacion
{
    public class UIJobRequestBlock : FlowLayoutPanel
    {
        private Job jobData;
        private bool adminMode = UserController.IsLoggedUserAdmin();
        private JobController controller = new JobController();
        private RequestController requestController = new RequestController();

        private TableLayoutPanel datePanel, descriptionPanel;
        private Label maxUsersLabel;
        private Label otherUsers;
        private Button request, delete, edit;
        public UIJobRequestBlock(Size size, Job jobData)
        {
            this.jobData = jobData;
            this.Size = size;
            this.BackColor = Style.WHITE;
            this.BorderStyle = BorderStyle.FixedSingle;
            InitUI();
            InitButtons();
        }

        private void InitUI()
        {
            Label date = new Label()
            {
                AutoSize = true,
                Text = jobData.StartDate.ToString("d"),
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold),
                ForeColor = Style.GRAY
            };

            Label time = new Label()
            {
                AutoSize = true,
                Text = jobData.StartDate.ToString("T"),
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 16),
                ForeColor = Style.GRAY
            };

            datePanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Height = this.Height,
                Width = this.Width * 20 / 100,
                BackColor = Style.LIGHT_GRAY
            };
            datePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            datePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            datePanel.Controls.Add(date);
            datePanel.Controls.Add(time);

            Label displayName = new Label()
            {
                AutoSize = true,
                Text = jobData.DisplayName,
                Anchor = AnchorStyles.Left,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold),
                ForeColor = Style.GRAY
            };
            Label siteName = new Label()
            {
                AutoSize = true,
                Text = jobData.SiteName,
                Anchor = AnchorStyles.Left,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 16),
                ForeColor = Style.GRAY
            };

            descriptionPanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Height = this.Height,
                Width = this.Width * 40 / 100
            };
            descriptionPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            descriptionPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            descriptionPanel.Controls.Add(displayName);
            descriptionPanel.Controls.Add(siteName);

            maxUsersLabel = new Label()
            {
                AutoSize = true,
                Text = $"{controller.CountUsersByJob(jobData.Id)}/{jobData.MaxUsers}",
                Anchor = AnchorStyles.None,
                TextAlign = ContentAlignment.MiddleCenter,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 16, FontStyle.Bold),
                ForeColor = Style.GRAY
            };

            this.Controls.Add(datePanel);
            this.Controls.Add(descriptionPanel);
            this.Controls.Add(maxUsersLabel);
        }

        private void InitButtons()
        {
            otherUsers = new Label()
            {
                Size = new Size(this.Height * 90 / 100, this.Height * 90 / 100),
                BackColor = Style.WHITE,
                Anchor = AnchorStyles.None,
            };
            otherUsers.Image = new Bitmap(Properties.Resources.GroupUserIcon, new Size(otherUsers.Height * 90 / 100, otherUsers.Height * 90 / 100));
            this.Controls.Add(otherUsers);

            if (!adminMode)
            {
                request = new Button()
                {
                    Size = new Size(this.Height * 80 / 100, this.Height * 80 / 100),
                    BackColor = Style.LIGHT_GREEN,
                    Anchor = AnchorStyles.None,
                    ImageAlign = ContentAlignment.MiddleCenter,
                    Margin = new Padding(this.Width * 15 / 100, 0 ,0 ,0)
                };
                request.Image = new Bitmap(Properties.Resources.CheckRequestIcon, new Size(request.Height * 60 /100, request.Height * 60 / 100));
                request.Click += request_click;
                this.Controls.Add(request);
            }
            else
            {
                delete = new Button()
                {
                    Size = new Size(this.Height * 80 / 100, this.Height * 80 / 100),
                    BackColor = Style.LIGHT_RED,
                    Anchor = AnchorStyles.None,
                    ImageAlign = ContentAlignment.MiddleCenter,
                };
                delete.Image = new Bitmap(Properties.Resources.RemoveIcon, new Size(delete.Height, delete.Height));
                delete.Click += delete_click;
                this.Controls.Add(delete);

                edit = new Button()
                {
                    Size = new Size(this.Height * 80 / 100, this.Height * 80 / 100),
                    BackColor = Style.LIGHT_RED,
                    Anchor = AnchorStyles.None,
                    ImageAlign = ContentAlignment.MiddleCenter,
                };
                edit.Image = new Bitmap(Properties.Resources.ConfigIcon, new Size(edit.Height, edit.Height));
                edit.Click += edit_click;
                this.Controls.Add(edit);
            }
            
        }

        private void request_click(object sender, EventArgs e)
        {
            int userId = UserController.GetLoggedUser().Id;
            Request r = new Request()
            { 
                UserId = userId,
                JobId = jobData.Id,
                State = RequestState.PENDING
            };
            requestController.InsertRequest(r);
            this.Visible = false;
        }

        private void edit_click(object sender, EventArgs e)
        {
            //Aqui se debe abrir una nueva ventana para editar el trabajo
        }

        private void delete_click(object sender, EventArgs e)
        {
            controller.DeleteJob(jobData.Id);
            this.Visible = false;
        }
    }
}
