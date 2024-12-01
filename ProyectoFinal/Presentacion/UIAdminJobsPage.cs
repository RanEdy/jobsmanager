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
    public class UIAdminJobsPage : Panel
    {
        public TableLayoutPanel mainPanel;
        public FlowLayoutPanel jobBlocksPanel;
        private Panel addJobPanel;
        private JobController controller = new JobController();
        public Size blockSize;
        private Button addJob;
        private UIJobEditForm jobEditForm;
        public UIAdminJobsPage(Size size)
        {
            this.Size = size;
            this.BackColor = Style.WHITE;
            this.Dock = DockStyle.Fill;

            InitUI();
            InitJobBlocks();
            if (UserController.IsLoggedUserAdmin()) InitAddJobPanel();
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

            Label label = new Label()
            {
                Dock = DockStyle.Fill,
                Text = "JOB LIST MANAGEMENT",
                ForeColor = Style.BLUE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 28, FontStyle.Bold),
                TextAlign = ContentAlignment.MiddleCenter,
                Width = this.Width,
                Height = this.Height * 15 / 100,
                BorderStyle = BorderStyle.FixedSingle
            };
            jobBlocksPanel = new FlowLayoutPanel()
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.LIGHT_GRAY,
                Width = mainPanel.Width,
                Height = this.Height * 70 / 100,
                BorderStyle = BorderStyle.FixedSingle
            };
            blockSize = new Size(jobBlocksPanel.Width, jobBlocksPanel.Height * 18 / 100);
            mainPanel.Controls.Add(label);
            mainPanel.Controls.Add(jobBlocksPanel);
            this.Controls.Add(mainPanel);
        }

        private void InitJobBlocks()
        {
            List<Job> jobs = controller.QueryJobs();

            if (jobs == null) return;
            foreach (Job job in jobs)
            {
                UIJobBlock jb = new UIJobBlock(blockSize, job);
                jb.adminJobsPage = this;
                jobBlocksPanel.Controls.Add(jb);
            }
        }

        private void InitAddJobPanel()
        {
            addJob = new Button()
            {
                Dock = DockStyle.Fill,
                Text = "   ADD NEW JOB",
                BackColor = Style.WHITE,
                Anchor = AnchorStyles.Left,
                TextImageRelation = TextImageRelation.ImageBeforeText,
                TextAlign = ContentAlignment.MiddleCenter,
                ImageAlign = ContentAlignment.MiddleCenter,
                ForeColor = Style.LIGHT_GREEN,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 20, FontStyle.Bold),
                Padding = new Padding(this.Width * 15 / 100, 0 ,0 ,0),
                Height = this.Height * 15 / 100,
                Width = this.Width
            };
            addJob.Image = new Bitmap(Properties.Resources.AddIcon, new Size(addJob.Height * 70 / 100, addJob.Height * 70 / 100));
            addJob.Click += addJob_click;
            mainPanel.Controls.Add(addJob);
        }

        private void addJob_click(object sender, EventArgs e)
        {
            if (jobEditForm != null) jobEditForm.Dispose();
            jobEditForm = new UIJobEditForm(null, true, null);
            jobEditForm.adminJobsPage = this;
            jobEditForm.Show();
        }


    }
}
