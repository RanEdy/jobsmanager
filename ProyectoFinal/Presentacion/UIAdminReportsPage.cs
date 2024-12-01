using Negocio;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentacion
{
    public class UIAdminReportsPage : Panel
    {
        private TableLayoutPanel mainPanel;
        private FlowLayoutPanel bottomPanel;
        private DataGridView dataGrid;
        private Button userSummary, jobSummary;
        private UserController userController = new UserController();
        private JobController jobController = new JobController();
        public UIAdminReportsPage(Size size)
        {
            this.Size = size;
            this.BackColor = Style.LIGHT_GRAY;
            this.Dock = DockStyle.Fill;
            InitUI();
            InitButtons();
        }

        private void InitUI()
        {
            mainPanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 3,
                Dock = DockStyle.Fill,
                Width = this.Width * 95 /100,
                Height = this.Height
            };
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 15.0F));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 70.0F));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 15.0F));

            Label label = new Label
            {
                Dock = DockStyle.Fill,
                Text = "REPORTS AND SUMMARIES",
                ForeColor = Style.BLUE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 28, FontStyle.Bold),
                TextAlign = ContentAlignment.MiddleCenter,
                Width = this.Width,
                Height = this.Height * 15 / 100,
                BorderStyle = BorderStyle.FixedSingle
            };

            dataGrid = new DataGridView
            {
                Dock = DockStyle.Fill,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 13, FontStyle.Bold),
                AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.AllCells,
                AutoSizeRowsMode = DataGridViewAutoSizeRowsMode.AllCells,
                ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize
            };

            bottomPanel = new FlowLayoutPanel
            {
                Dock = DockStyle.Fill,
                AutoScroll = true
            };
            mainPanel.Controls.Add(label);
            mainPanel.Controls.Add(dataGrid);
            mainPanel.Controls.Add(bottomPanel);
            this.Controls.Add(mainPanel);
        }

        public void InitButtons()
        {
            NumericUpDown userSlider = new NumericUpDown
            {
                AutoSize = true,
                Minimum = 0,
                Font  = new Font(Style.FONT_BAHNSCHRTFT, 24, FontStyle.Bold)
            };
            userSummary = new Button
            {
                Text = "USER SUMMARY",
                BackColor = Style.WHITE,
                TextAlign = ContentAlignment.MiddleCenter,
                ForeColor = Style.GRAY,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 24, FontStyle.Bold),
                AutoSize = true
            };
            userSummary.Click += (sender, e) => dataGrid.DataSource = userController.GetUserSummary((int)userSlider.Value);

            bottomPanel.Controls.Add(userSummary);
            bottomPanel.Controls.Add(userSlider);

            NumericUpDown jobSlider = new NumericUpDown
            {
                AutoSize = true,
                Minimum = 0,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 24, FontStyle.Bold)
            };

            jobSummary = new Button
            {
                Text = "JOB SUMMARY",
                BackColor = Style.WHITE,
                TextAlign = ContentAlignment.MiddleCenter,
                ForeColor = Style.GRAY,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 24, FontStyle.Bold),
                AutoSize = true
            };
            jobSummary.Click += (sender, e) => dataGrid.DataSource = jobController.GetJobSummary((int)jobSlider.Value);

            bottomPanel.Controls.Add(jobSummary);
            bottomPanel.Controls.Add(jobSlider);
        }
    }
}
