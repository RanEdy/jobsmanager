﻿using Negocio;
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
    public class UIJobBlock : FlowLayoutPanel
    {
        private UIJobEditForm editForm;
        public Job jobData;
        public int userId;
        public UIAdminJobsPage adminJobsPage;
        private bool adminMode = UserController.IsLoggedUserAdmin();
        private bool isRequest;
        private JobController controller = new JobController();
        private RequestController requestController = new RequestController();

        private TableLayoutPanel datePanel, descriptionPanel;
        private Label maxUsersLabel;
        private Label otherUsers;
        private Button accept, delete, edit;
        public UIJobBlock(Size size, Job jobData, bool isRequest=false)
        {
            this.isRequest = isRequest;
            this.jobData = jobData;
            this.Size = size;
            this.BackColor = Style.WHITE;
            this.BorderStyle = BorderStyle.FixedSingle;
            InitUI();
            InitButtons();
        }

        private void InitUI()
        {
            int fontSize = isRequest ? 12 : 16;
            Label date = new Label()
            {
                AutoSize = true,
                Text = jobData.StartDate.ToString("d"),
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRTFT, fontSize, FontStyle.Bold),
                ForeColor = Style.GRAY
            };

            Label time = new Label()
            {
                AutoSize = true,
                Text = jobData.StartDate.ToString("T"),
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRTFT, fontSize),
                ForeColor = Style.GRAY
            };

            datePanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Height = this.Height,
                AutoSize = true,
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
                Font = new Font(Style.FONT_BAHNSCHRTFT, fontSize, FontStyle.Bold),
                ForeColor = Style.GRAY
            };
            Label siteName = new Label()
            {
                AutoSize = true,
                Text = jobData.SiteName,
                Anchor = AnchorStyles.Left,
                Font = new Font(Style.FONT_BAHNSCHRTFT, fontSize),
                ForeColor = Style.GRAY
            };

            descriptionPanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Height = this.Height,
                Width = this.Width * 40 / 100,
                AutoSize = isRequest
            };
            descriptionPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            descriptionPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            descriptionPanel.Controls.Add(displayName);
            descriptionPanel.Controls.Add(siteName);

            maxUsersLabel = new Label()
            {
                Height = this.Height,
                Width = this.Width * 10 / 100,
                Text = $"{controller.CountUsersByJob(jobData.Id)}/{jobData.MaxUsers}",
                Anchor = AnchorStyles.None,
                TextAlign = ContentAlignment.MiddleCenter,
                Font = new Font(Style.FONT_BAHNSCHRTFT, fontSize, FontStyle.Bold),
                ForeColor = Style.GRAY
            };

            this.Controls.Add(datePanel);
            this.Controls.Add(descriptionPanel);
            if (!isRequest) this.Controls.Add(maxUsersLabel);
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
            if (!isRequest) this.Controls.Add(otherUsers);

            if (!adminMode)
            {
                if (!isRequest)
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
                    accept.Click += accept_click;
                    this.Controls.Add(accept);
                }
            }
            else
            {
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
                    edit.Click += edit_click;
                    this.Controls.Add(edit);
                }
                //Para que el admin pueda aceptar la solicitud
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
                    accept.Click += accept_click;
                    this.Controls.Add(accept);
                }
                delete = new Button()
                {
                    Size = new Size(this.Height * 80 / 100, this.Height * 80 / 100),
                    BackColor = Style.LIGHT_RED,
                    Anchor = AnchorStyles.None,
                    ImageAlign = ContentAlignment.MiddleCenter,
                };
                delete.Image = new Bitmap(Properties.Resources.RemoveIcon, new Size(delete.Height * 60 / 100, delete.Height * 60 / 100));
                delete.Click += delete_click;
                this.Controls.Add(delete);
            }
            
        }

        private void accept_click(object sender, EventArgs e)
        {
            if (isRequest)
            {
                Request r = new Request()
                {
                    UserId = userId,
                    JobId = jobData.Id,
                    State = RequestState.ACCEPTED
                };
                requestController.EditRequest(r);
                controller.InsertUserIntoJob(jobData.Id, userId);
            }
            else
            {
                int userId = UserController.GetLoggedUser().Id;
                Request r = new Request()
                {
                    UserId = userId,
                    JobId = jobData.Id,
                    State = RequestState.PENDING
                };
                requestController.InsertRequest(r);
            }
            
            this.Visible = false;
        }

        private void edit_click(object sender, EventArgs e)
        {
            //Aqui se debe abrir una nueva ventana para editar el trabajo
            if (editForm != null) editForm.Dispose();
            editForm = new UIJobEditForm(jobData, false, this);
            editForm.adminJobsPage = adminJobsPage;
            editForm.Show();
        }

        private void delete_click(object sender, EventArgs e)
        {
            //Si es tipo solicitud entonces simplemente la rechaza
            //si es tipo trabajo entonces lo elimina

            if (isRequest)
            {
                Request r = new Request()
                {
                    UserId = userId,
                    JobId = jobData.Id,
                    State = RequestState.REJECTED
                };
                requestController.EditRequest(r);
            }
            else controller.DeleteJob(jobData.Id);
            this.Visible = false;
        }
    }
}