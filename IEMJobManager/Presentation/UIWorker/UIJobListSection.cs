using System.Collections.Generic;
using System.Windows.Forms;
using System.Drawing;
using Presentation.Common;
using Persistance.DataModels.RequestModel;
using Persistance.DataModels.UserModel;
using Persistance.DataModels.JobModel;
using Logic.JobLogic;
using Logic.RequestLogic;
using Logic.UserLogic;
using System;

namespace Presentation.UIWorker
{
    public class UIJobListSection : ISection
    {
        string ISection.sectionName => "My Jobs";
        Panel ISection.sectionPanel => mainPanel;
        Image ISection.sectionImage => Properties.Resources.JobListIcon;

        private Panel mainPanel;
        private Form hoverWindow;
        private TableLayoutPanel contentPanel;
        private FlowLayoutPanel rejected, pending, accepted;

        public UIJobListSection(Size panelSize)
        {
            mainPanel = new Panel()
            {
                Size = panelSize,
                BackColor = Style.DARK_WHITE,
                Dock = DockStyle.Fill
            };

            InitUI();
            InitJobBlocks();
        }

        public void UpdateSection()
        {
            rejected.Controls.Clear(); pending.Controls.Clear(); accepted.Controls.Clear();
            InitJobBlocks();
        }

        private void InitUI()
        { 
            contentPanel = new TableLayoutPanel()
            {
                ColumnCount = 3,
                RowCount = 2,
                AutoSize = true,
                Dock = DockStyle.Fill,
            };
            contentPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 33.33F));
            contentPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 33.33F));
            contentPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 33.33F));

            contentPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 10.0F));
            contentPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 90.0F));
            mainPanel.Controls.Add(contentPanel);

            rejected = CreateJobBlockListPanel(Style.LIGHT_RED, "REJECTED", 0);
            pending = CreateJobBlockListPanel(Style.LIGHT_ORANGE, "PENDING", 1);
            accepted = CreateJobBlockListPanel(Style.LIGHT_GREEN, "ACCEPTED", 2);
        }

        private FlowLayoutPanel CreateJobBlockListPanel(Color color, string name, int column)
        {
            Label label = new Label()
            {
                Dock = DockStyle.Fill,
                AutoSize = true,
                TextAlign = ContentAlignment.MiddleCenter,
                Text = name,
                Font = new Font(Style.FONT_BAHNSCHRIFT, 28, FontStyle.Bold),
                ForeColor = Style.WHITE,
                BackColor = color,
                BorderStyle = BorderStyle.FixedSingle
            };
            contentPanel.Controls.Add(label, column, 0);
            FlowLayoutPanel panel = new FlowLayoutPanel()
            {
                Dock = DockStyle.Fill,
                BackColor = Style.WHITE,
                AutoSize = true,
                AutoScroll = true,
                BorderStyle= BorderStyle.FixedSingle,
            };
            contentPanel.Controls.Add(panel, column, 1);
            return panel;
        }

        private void InitJobBlocks()
        {
            User loggedUser = UserController.GetLoggedUser();
            List<Request> requests = new RequestController().QueryRequestsByUser(loggedUser.Id);

            foreach (Request request in requests)
            {
                Job job = new JobController().GetJob(request.JobId);
                CreateJobBlock(job, request.State);
            }
        }


        private void CreateHoverWindow(Job job, Point pos, Size windowSize)
        {
            if (hoverWindow == null)
            {
                hoverWindow = new Form()
                {
                    Size = windowSize,
                    BackColor = Style.DARK_WHITE,
                    Location = pos,
                    ControlBox = false,
                    FormBorderStyle = FormBorderStyle.None,
                    StartPosition = FormStartPosition.Manual
                };
            }

            TableLayoutPanel tablePanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Fill,
                ColumnCount = 2,
                RowCount = 7,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Single
            };
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 50.0f));
            tablePanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 50.0f));
            string[] names = { "Duration", "Maximum Users", "State", "City", "Street", "Postal Code", "Street Number"};
            string[] values = { job.Duration.ToString(), job.MaxUsers.ToString(), job.Address.State, job.Address.City, job.Address.Street, job.Address.PostalCode, job.Address.Number };

            for (int i=0; i < names.Length; i++)
            {
                Label label1 = new Label()
                {
                    Text = names[i],
                    Dock = DockStyle.Fill,
                    Font = new Font(Style.FONT_BAHNSCHRIFT, 10, FontStyle.Bold),
                    ForeColor = Style.DARK_GRAY
                };

                Label label2 = new Label()
                {
                    Text = values[i],
                    Dock = DockStyle.Fill,
                    Font = new Font(Style.FONT_BAHNSCHRIFT, 10, FontStyle.Bold),
                    ForeColor = Style.DARK_GRAY
                };

                tablePanel.RowStyles.Add(new RowStyle(SizeType.Percent, hoverWindow.Height/names.Length));
                tablePanel.Controls.Add(label1, 0, i);
                tablePanel.Controls.Add(label2, 1, i);
            }
            hoverWindow.Controls.Add(tablePanel);
        }

        private void CreateJobBlock(Job job, RequestState state)
        {
            int fontSize = 12;

            FlowLayoutPanel blockPanel = new FlowLayoutPanel()
            {
                MinimumSize = new Size(contentPanel.Width * 32 / 100, contentPanel.Height * 5 / 100),
                AutoSize = true,
                BackColor = Style.SOFT_WHITE,
                BorderStyle = BorderStyle.FixedSingle,
            };

            EventHandler showHoverWindow = (s, e) =>
            {
                Point pos = blockPanel.PointToScreen(Point.Empty);
                pos.Offset(0, blockPanel.Height);
                Size size = new Size(blockPanel.Width * 90 / 100, blockPanel.Height * 3);
                CreateHoverWindow(job, pos, size);
                hoverWindow.Location = pos;
                hoverWindow.Show();
                hoverWindow.BringToFront();
            };
            EventHandler hideHoverWindow = (s, e) =>
            {
                if (hoverWindow != null)
                {
                    hoverWindow.Controls.Clear();
                    hoverWindow.Hide();
                }
            };

            blockPanel.MouseHover += showHoverWindow;
            blockPanel.MouseLeave += hideHoverWindow;

            Label date = new Label()
            {
                AutoSize = true,
                Text = job.StartDate.ToString("d"),
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRIFT, fontSize, FontStyle.Bold),
                ForeColor = Style.DARK_GRAY
            };
            date.MouseHover += showHoverWindow;
            date.MouseLeave += hideHoverWindow;

            Label time = new Label()
            {
                AutoSize = true,
                Text = job.StartDate.ToString("T"),
                Anchor = AnchorStyles.None,
                Font = new Font(Style.FONT_BAHNSCHRIFT, fontSize),
                ForeColor = Style.DARK_GRAY
            };
            time.MouseHover += showHoverWindow;
            time.MouseLeave += hideHoverWindow;

            TableLayoutPanel datePanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                AutoSize = true,
                //CellBorderStyle = TableLayoutPanelCellBorderStyle.Inset
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
            displayName.MouseHover += showHoverWindow;
            displayName.MouseLeave += hideHoverWindow;

            Label siteName = new Label()
            {
                AutoSize = true,
                Text = job.SiteName,
                Anchor = AnchorStyles.Left,
                Font = new Font(Style.FONT_BAHNSCHRIFT, fontSize),
                ForeColor = Style.DARK_GRAY
            };
            siteName.MouseHover += showHoverWindow;
            siteName.MouseLeave += hideHoverWindow;

            TableLayoutPanel descriptionPanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Width = mainPanel.Width * 40 / 100,
                AutoSize = true
            };
            descriptionPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            descriptionPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 50.0F));
            descriptionPanel.Controls.Add(displayName);
            descriptionPanel.Controls.Add(siteName);
            descriptionPanel.MouseHover += showHoverWindow;
            descriptionPanel.MouseLeave += hideHoverWindow;


            blockPanel.Controls.Add(datePanel);
            blockPanel.Controls.Add(descriptionPanel);

            switch (state)
            {
                case RequestState.REJECTED: rejected.Controls.Add(blockPanel); break;
                case RequestState.PENDING: pending.Controls.Add(blockPanel); break;
                case RequestState.ACCEPTED: accepted.Controls.Add(blockPanel); break;
            }
        }
    }
}
