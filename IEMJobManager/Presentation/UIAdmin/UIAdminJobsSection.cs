using Logic.JobLogic;
using Logic.RequestLogic;
using Logic.UserLogic;
using Persistance.DataModels.JobModel;
using Persistance.DataModels.RequestModel;
using Persistance.DataModels.UserModel;
using Presentation.Common;
using Presentation.Common.UI;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentation.UIAdmin
{
    public class UIAdminJobsSection : ISection
    {
        public string sectionName => "Job List";
        public Panel sectionPanel => mainPanel;
        public Image sectionImage => Properties.Resources.JobListIcon;

        private Panel mainPanel;
        private FlowLayoutPanel jobBlocksPanel;
        private Form editJobWindow;
        private Job modifiedJob;
        private Form userRequestsWindow;
        

        public UIAdminJobsSection(Size panelSize)
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
                Height = mainPanel.Height,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Single
            };
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 10.0F));
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 80.0F));
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 10.0F));

            Label label = new Label()
            {
                Dock = DockStyle.Fill,
                Text = "JOB LIST MANAGEMENT",
                ForeColor = Style.BLUE,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 28, FontStyle.Bold),
                TextAlign = ContentAlignment.MiddleCenter,
                Width = mainPanel.Width,
                Height = mainPanel.Height * 15 / 100
            };
            mainPanel.Controls.Add(label);
            jobBlocksPanel = new FlowLayoutPanel()
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.SOFT_WHITE,
                Width = mainPanel.Width,
                Height = mainPanel.Height * 60 / 100,
            };

            Button addJob = new Button()
            {
                MinimumSize = new Size(mainPanel.Width * 30 / 100, 20),
                Text = "+  ADD JOB",
                AutoSize = true,
                TextAlign = ContentAlignment.MiddleCenter,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 24, FontStyle.Bold),
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Anchor = AnchorStyles.None,
                Padding = new Padding(0),
                Margin = new Padding(0),
            };
            addJob.Click += (s, e) =>
            {
                CreateJobEditWindow(true, null);
            };

            tablePanel.Controls.Add(label);
            tablePanel.Controls.Add(jobBlocksPanel);
            tablePanel.Controls.Add(addJob);
            mainPanel.Controls.Add(tablePanel);

            InitJobBlocks();
        }

        private void InitJobBlocks()
        {
            List<Job> jobs = new JobController().QueryJobs();
            foreach (Job job in jobs)
            {
                CreateJobBlock(job);
            }
        }

        private void CreateJobBlock(Job job)
        {
            int fontSize = 16;
            FlowLayoutPanel blockPanel = new FlowLayoutPanel()
            {
                Width = mainPanel.Width * 98/100,
                Height = mainPanel.Height * 12 /100,
                BackColor = Style.WHITE,
                BorderStyle= BorderStyle.FixedSingle
            };

            Label date = new Label()
            {
                AutoSize = true,
                Text = job.StartDate.ToString("d"),
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRIFT, fontSize, FontStyle.Bold),
                ForeColor = Style.DARK_GRAY
            };
            Label time = new Label()
            {
                AutoSize = true,
                Text = job.StartDate.ToString("T"),
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRIFT, fontSize),
                ForeColor = Style.DARK_GRAY
            };
            TableLayoutPanel datePanel = new TableLayoutPanel()
            {
                Height = blockPanel.Height*95/100,
                ColumnCount = 1,
                RowCount = 2,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Inset,
                BackColor= Style.DARK_WHITE
            };
            datePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            datePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            datePanel.Controls.Add(date);
            datePanel.Controls.Add(time);

            Label displayName = new Label()
            {
                AutoSize = true,
                Text = job.DisplayName,
                Anchor = AnchorStyles.Left,
                Font = new Font(Style.FONT_BAHNSCHRIFT, fontSize, FontStyle.Bold),
                ForeColor = Style.DARK_GRAY
            };
            Label siteName = new Label()
            {
                AutoSize = true,
                Text = job.SiteName,
                Anchor = AnchorStyles.Left,
                Font = new Font(Style.FONT_BAHNSCHRIFT, fontSize),
                ForeColor = Style.DARK_GRAY
            };
            TableLayoutPanel descriptionPanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Width = blockPanel.Width * 45/100,
                Height = blockPanel.Height * 95/100,
            };
            descriptionPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            descriptionPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            descriptionPanel.Controls.Add(displayName);
            descriptionPanel.Controls.Add(siteName);

            Label otherUsers = new Label()
            {
                Height = blockPanel.Height*50/100,
                Width = blockPanel.Height*50/100,
                Anchor = AnchorStyles.None,
                ImageAlign = ContentAlignment.MiddleCenter,
            };
            otherUsers.Image = new Bitmap(Properties.Resources.GroupUserIcon, new Size(otherUsers.Height, otherUsers.Height));

            Label userlabel = new Label()
            {
                Height = blockPanel.Height,
                Width = blockPanel.Width * 10 / 100,
                Text = $"{new JobController().CountUsersByJob(job.Id)}/{job.MaxUsers}",
                Anchor = AnchorStyles.None,
                TextAlign = ContentAlignment.MiddleLeft,
                Font = new Font(Style.FONT_BAHNSCHRIFT, fontSize, FontStyle.Bold),
                ForeColor = Style.DARK_GRAY,
                //Margin = new Padding(0, 0, blockPanel.Width*5/100, 0)
            };


            //
            //Botones
            //
            Size buttonSize = new Size(blockPanel.Height * 80 / 100, blockPanel.Height * 80 / 100);
            
            Button requests = new Button()
            {
                Size = buttonSize,
                Anchor = AnchorStyles.None,
                ImageAlign = ContentAlignment.MiddleCenter,
            };
            requests.Image = new Bitmap(Properties.Resources.RequestIcon, new Size(requests.Height*90/100, requests.Height*90/100));
            requests.Click += (s, e) =>
            {
                CreateRequestsWindow(job);
            };

            Button edit = new Button()
            {
                Size = buttonSize,
                BackColor = Style.DARK_WHITE,
                Anchor = AnchorStyles.None,
                ImageAlign = ContentAlignment.MiddleCenter,
            };
            edit.Image = new Bitmap(Properties.Resources.ConfigIcon, new Size(edit.Height, edit.Height));
            edit.Click += (s, e) =>
            {
                CreateJobEditWindow(false, job);
            };

            Button delete = new Button()
            {
                Size = buttonSize,
                BackColor = Style.LIGHT_RED,
                Anchor = AnchorStyles.None,
                ImageAlign = ContentAlignment.MiddleCenter,
            };
            delete.Image = new Bitmap(Properties.Resources.RemoveIcon, new Size(delete.Height * 70 / 100, delete.Height * 70 / 100));
            delete.Click += (s, e) =>
            {
                DialogResult result = MessageBox.Show("You want to permantly delete this job?", "Job Confirmation", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
                if (result == DialogResult.Yes)
                {
                    new JobController().DeleteJob(job.Id);
                    GlobalUIManager.UpdateAll();
                    MessageBox.Show("SUCCESFULLY DELETED");
                }
            };

            //Orden de colocacion
            blockPanel.Controls.Add(datePanel);
            blockPanel.Controls.Add(descriptionPanel);
            blockPanel.Controls.Add(otherUsers);
            blockPanel.Controls.Add(userlabel);
            
            blockPanel.Controls.Add(requests);
            blockPanel.Controls.Add(edit);
            blockPanel.Controls.Add(delete);

            jobBlocksPanel.Controls.Add(blockPanel);
        }

        private void CreateJobEditWindow(bool isNewJob, Job jobData=null)
        {
            editJobWindow = new Form()
            {
                Width = mainPanel.Width * 70 / 100,
                Height = mainPanel.Height,
                BackColor = Style.WHITE,
                Text = "Job Editing",
                FormBorderStyle = FormBorderStyle.FixedDialog,
                MaximizeBox = false,
            };
            TableLayoutPanel tablePanel = new TableLayoutPanel()
            {
                AutoSize = true,
                Dock = DockStyle.Fill,
                RowCount = 2,
                ColumnCount = 1,
            };
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 90.0f));
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 10.0f));

            Size panelSize = new Size(editJobWindow.Width*90/100, editJobWindow.Height*90/100);
            UIAdminJobEditPanel jobEditPanel = new UIAdminJobEditPanel(panelSize, jobData, isNewJob);

            Button saveButton = new Button()
            {
                MinimumSize = new Size(editJobWindow.Width * 50 / 100, 20),
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
            saveButton.Click += (s, e) =>
            {
                Job values = jobEditPanel.GetValues();
                DialogResult result = MessageBox.Show("You want to save the edited values for this job?", "Job Edition Confirmation", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
                if (VerifyValues(values) && result == DialogResult.Yes)
                {
                    if (isNewJob)
                    {
                        new JobController().InsertJob(values);
                    }
                    else
                    {
                        new JobController().EditJob(values);
                    }
                    MessageBox.Show("ACTION SUCCESFULLY PERFORMED");
                    editJobWindow.Close();
                    GlobalUIManager.UpdateAll();
                }
                else
                {
                    MessageBox.Show("ONE OR MORE FIELDS HAVE INVALID VALUES", "INVALID VALUES", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }

            };

            tablePanel.Controls.Add(jobEditPanel);
            tablePanel.Controls.Add(saveButton);

            editJobWindow.Controls.Add(tablePanel);
            editJobWindow.ShowDialog();
        }

        private bool VerifyValues(Job job)
        {
            bool verifyNames = !(string.IsNullOrWhiteSpace(job.DisplayName) || string.IsNullOrWhiteSpace(job.SiteName));
            bool verifyAddress = !(string.IsNullOrWhiteSpace(job.Address.State) || string.IsNullOrWhiteSpace(job.Address.City)
                || string.IsNullOrWhiteSpace(job.Address.Street) || string.IsNullOrWhiteSpace(job.Address.PostalCode)
                || string.IsNullOrWhiteSpace(job.Address.Number));
            return verifyAddress && verifyNames;
        }

        private void CreateRequestsWindow(Job job)
        {
            userRequestsWindow = new Form()
            {
                Width = mainPanel.Width * 70 / 100,
                Height = mainPanel.Height,
                BackColor = Style.WHITE,
                Text = "User Requests",
                FormBorderStyle = FormBorderStyle.FixedDialog,
                MaximizeBox = false,
                StartPosition = FormStartPosition.CenterParent,
            };

            FlowLayoutPanel requestsPanel = new FlowLayoutPanel()
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.SOFT_WHITE,
            };

            List<Request> usersRequests = new RequestController().QueryRequestsByJob(job.Id);

            
            int pendingRequestsCount = 0;
            foreach (Request request in usersRequests)
            {
                if (request.State == RequestState.PENDING)
                {
                    requestsPanel.Controls.Add(CreateRequestBlock(request));
                    pendingRequestsCount++;
                }
            }
            
            //Si no hay solicitudes colocar un mensaje en medio
            if (pendingRequestsCount == 0)
            {
                Label l = new Label()
                {
                    Text = "NO REQUESTS AVAILABLE",
                    Font = new Font(Style.FONT_BAHNSCHRIFT, 30, FontStyle.Bold),
                    ForeColor = Style.LIGHT_GRAY,
                    AutoSize = true,
                    Margin = new Padding(userRequestsWindow.Width / 4, userRequestsWindow.Height / 3, userRequestsWindow.Width / 4, userRequestsWindow.Height / 3)
                };
                requestsPanel.Controls.Add(l);
            }

            userRequestsWindow.Controls.Add(requestsPanel);
            userRequestsWindow.ShowDialog();
        }

        private FlowLayoutPanel CreateRequestBlock(Request request)
        {
            User data = new UserController().GetUser(request.UserId);
            FlowLayoutPanel blockPanel = new FlowLayoutPanel()
            {
                Size = new Size(mainPanel.Width * 67 / 100, mainPanel.Height * 12 / 100),
                //AutoSize = true,
                BackColor = Style.WHITE,
                BorderStyle = BorderStyle.FixedSingle,
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
                Font = new Font(Style.FONT_BAHNSCHRIFT, 16, FontStyle.Bold),
                ForeColor = textColor
            };
            blockPanel.Controls.Add(name);

            Label seniority = new Label()
            {
                Height = blockPanel.Height,
                Width = blockPanel.Width * 15 / 100,
                Text = "Seniority: " + data.Seniority,
                Anchor = AnchorStyles.None,
                TextAlign = ContentAlignment.MiddleCenter,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 16, FontStyle.Bold),
                ForeColor = textColor
            };
            blockPanel.Controls.Add(seniority);

            Label type = new Label()
            {
                AutoSize = true,
                Text = data.UserType.ToString(),
                TextAlign = ContentAlignment.MiddleLeft,
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 16, FontStyle.Bold),
                ForeColor = textColor
            };
            Label id = new Label()
            {
                AutoSize = true,
                Text = "ID: " + data.Id,
                TextAlign = ContentAlignment.MiddleLeft,
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 16, FontStyle.Bold),
                ForeColor = textColor
            };

            TableLayoutPanel typeAndId = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Height = blockPanel.Height,
                Width = blockPanel.Width * 17 / 100,
                Margin = new Padding(0,0, blockPanel.Width*4/100, 0)
            };
            typeAndId.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            typeAndId.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            typeAndId.Controls.Add(type);
            typeAndId.Controls.Add(id);
            blockPanel.Controls.Add(typeAndId);

            //
            //Botones
            //
            Size buttonSize = new Size(blockPanel.Height * 80 / 100, blockPanel.Height * 80 / 100);
            Button accept = new Button()
            {
                Size = new Size(blockPanel.Height * 80 / 100, blockPanel.Height * 80 / 100),
                BackColor = Style.LIGHT_GREEN,
                ImageAlign = ContentAlignment.MiddleCenter,
                Anchor = AnchorStyles.None
            };
            accept.Image = new Bitmap(Properties.Resources.CheckRequestIcon, new Size(accept.Height * 70 / 100, accept.Height * 70 / 100));
            accept.Click += (s, e) =>
            {
                DialogResult result = MessageBox.Show("You want accept this request?", "Request Confirmation", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
                if ( result == DialogResult.Yes)
                {
                    request.State = RequestState.ACCEPTED;
                    new RequestController().EditRequest(request);
                    new JobController().InsertUserIntoJob(request.JobId, request.UserId);
                    blockPanel.Hide();
                    GlobalUIManager.UpdateAll();
                    MessageBox.Show("REQUEST ACCEPTED");
                }
            };
            blockPanel.Controls.Add(accept);

            Button reject = new Button()
            {
                Size = buttonSize,
                BackColor = Style.LIGHT_RED,
                ImageAlign = ContentAlignment.MiddleCenter,
                Anchor = AnchorStyles.None
            };
            reject.Image = new Bitmap(Properties.Resources.RemoveIcon, new Size(reject.Height * 70 / 100, reject.Height * 70 / 100));
            reject.Click += (s, e) =>
            {
                DialogResult result = MessageBox.Show("You want reject this request?", "Request Confirmation", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
                if (result == DialogResult.Yes)
                {
                    request.State = RequestState.REJECTED;
                    new RequestController().EditRequest(request);
                    new JobController().InsertUserIntoJob(request.JobId, request.UserId);
                    blockPanel.Hide();
                    GlobalUIManager.UpdateAll();
                    MessageBox.Show("REQUEST REJECTED");
                }
            };
            blockPanel.Controls.Add(reject);

            return blockPanel;
        }
    }
}
