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
        private FlowLayoutPanel jobBlocksPanel;
        private JobController controller = new JobController();
        private Size blockSize;
        public UIAdminJobsPage(Size size)
        {
            this.Size = size;
            this.BackColor = Style.WHITE;
            this.Dock = DockStyle.Fill;


            InitUI();
            InitJobBlocks();
        }

        private void InitUI()
        {
            Label label = new Label()
            {
                Dock = DockStyle.Top,
                Text = "JOB LIST MANAGEMENT",
                ForeColor = Style.BLUE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 28, FontStyle.Bold),
                TextAlign = ContentAlignment.MiddleCenter,
                Width = this.Width,
                Height = this.Height * 10 / 100,
            };
            this.Controls.Add(label);
            jobBlocksPanel = new FlowLayoutPanel()
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.LIGHT_GRAY,
                Width = this.Width,
                Height = this.Height * 80 / 100,
                Padding = new Padding(0, this.Height * 15 / 100, 0, 0)
            };
            blockSize = new Size(jobBlocksPanel.Width * 95 / 100, jobBlocksPanel.Height * 15 / 100);
            this.Controls.Add(jobBlocksPanel);
        }

        private void InitJobBlocks()
        {
            List<Job> jobs = controller.QueryJobs();

            if (jobs == null) return;
            foreach (Job job in jobs)
            {
                jobBlocksPanel.Controls.Add(new UIJobRequestBlock(blockSize, job));
            }
        }


    }
}
