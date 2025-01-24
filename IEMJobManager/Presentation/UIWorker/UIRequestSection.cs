using Logic.JobLogic;
using Logic.RequestLogic;
using Logic.UserLogic;
using Persistance.DataModels.JobModel;
using Persistance.DataModels.RequestModel;
using Presentation.Common;
using System.Collections.Generic;
using System.Drawing;
using System.Windows.Forms;

namespace Presentation.UIWorker
{
    public class UIRequestSection : ISection
    {
        public string sectionName => "Request";
        public Panel sectionPanel => mainPanel;
        public Image sectionImage => Properties.Resources.RequestIcon;
        
        private Panel mainPanel;
        private FlowLayoutPanel jobBlocksPanel;

        public UIRequestSection(Size panelSize)
        {
            mainPanel = new Panel()
            {
                Size = panelSize,
                BackColor = Style.WHITE,
                Dock = DockStyle.Fill
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
            TableLayoutPanel tablePanel = new TableLayoutPanel
            {
                Dock = DockStyle.Fill,
                ColumnCount = 1,
                RowCount = 2,
                AutoSize = true,
            };
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 15));
            tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, 85));

            Label label = new Label()
            {
                Dock = DockStyle.Fill,
                Text = "AVAILABLE JOBS",
                ForeColor = Style.BLUE,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 34, FontStyle.Bold),
                TextAlign = ContentAlignment.MiddleCenter,
                Width = mainPanel.Width,
                Height = mainPanel.Height * 10 / 100,
            };
            tablePanel.Controls.Add(label);
            jobBlocksPanel = new FlowLayoutPanel()
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.DARK_WHITE,
                Width = mainPanel.Width * 95 / 100,
                Height = mainPanel.Height * 80 / 100,
            };
            tablePanel.Controls.Add(jobBlocksPanel);
            mainPanel.Controls.Add(tablePanel);
            InitJobBlocks();
        }

        private void InitJobBlocks()
        {
            List<Job> requestableJobs = new JobController().GetRequestableJobs(UserController.GetLoggedUser().Id);
            //Crear los bloques de los trabajos solicitables
            foreach (Job job in requestableJobs)
                CreateJobBlockPanel(job);
        }

        private void CreateJobBlockPanel(Job job)
        {
            FlowLayoutPanel blockPanel = new FlowLayoutPanel()
            {
                AutoSize = true,
                MinimumSize = new Size(jobBlocksPanel.Width * 98 / 100, jobBlocksPanel.Height * 15 / 100),
                BackColor = Style.WHITE,
                BorderStyle = BorderStyle.FixedSingle,
            };
            int fontSize = 16;

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
                MinimumSize = new Size(blockPanel.Width * 15/100, blockPanel.Height*90/100),
                AutoSize = true,
                ColumnCount = 1,
                RowCount = 2,
                BackColor = Style.DARK_WHITE
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
                MinimumSize = new Size(blockPanel.Width * 45 / 100, blockPanel.Height * 90 / 100),
                AutoSize = true,
                ColumnCount = 1,
                RowCount = 2,
            };
            descriptionPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            descriptionPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            descriptionPanel.Controls.Add(displayName);
            descriptionPanel.Controls.Add(siteName);

            Label maxUsersLabel = new Label()
            {
                MinimumSize = new Size(blockPanel.Width * 5 / 100, blockPanel.Height * 40 / 100),
                AutoSize = true,
                Text = $"{new JobController().CountUsersByJob(job.Id)}/{job.MaxUsers}",
                TextAlign = ContentAlignment.MiddleRight,
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRIFT, fontSize, FontStyle.Bold),
                ForeColor = Style.DARK_GRAY,
                Margin = new Padding(0, 0, blockPanel.Width * 5 / 100, 0)
            };
           
            Label otherUsers = new Label()
            {
                Size = new Size(blockPanel.Height * 50 / 100, blockPanel.Height * 50 / 100),
                BackColor = Style.WHITE,
                Anchor = AnchorStyles.None
            };
            otherUsers.Image = new Bitmap(Properties.Resources.GroupUserIcon, new Size(otherUsers.Height, otherUsers.Height));

            Label durationLabel = new Label()
            {
                MinimumSize = new Size(blockPanel.Width * 10 / 100, blockPanel.Height * 40 / 100),
                AutoSize = true,
                Text = $"{job.Duration} hours",
                TextAlign = ContentAlignment.MiddleRight,
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRIFT, fontSize-2, FontStyle.Bold),
                ForeColor = Style.DARK_GRAY,
                Margin = new Padding(0, 0, blockPanel.Width * 5 / 100, 0)
            };

            Button accept = new Button()
            {
                Size = new Size(blockPanel.Height * 80 / 100, blockPanel.Height * 80 / 100),
                BackColor = Style.LIGHT_GREEN,
                ImageAlign = ContentAlignment.MiddleCenter,
                
            };
            accept.Image = new Bitmap(Properties.Resources.CheckRequestIcon, new Size(accept.Height * 60 / 100, accept.Height * 60 / 100));
            accept.Click += (sender, e) =>
            {
                int userId = UserController.GetLoggedUser().Id;
                Request r = new Request()
                {
                    UserId = userId,
                    JobId = job.Id,
                    State = RequestState.PENDING
                };
                new RequestController().InsertRequest(r);
                MessageBox.Show("JOB SUCCESSFULLY REQUESTED");
                GlobalUIManager.UpdateAll();
            };

            blockPanel.Controls.Add(datePanel);
            blockPanel.Controls.Add(descriptionPanel);
            blockPanel.Controls.Add(durationLabel);
            blockPanel.Controls.Add(otherUsers);
            blockPanel.Controls.Add(maxUsersLabel);
            blockPanel.Controls.Add(accept);

            jobBlocksPanel.Controls.Add(blockPanel);
        }
    }
}
