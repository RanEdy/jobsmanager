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
    public class UIRequestPage : Panel
    {
        private FlowLayoutPanel jobBlocksPanel;
        private JobController controller = new JobController();
        private Size blockSize;
 
        public UIRequestPage(Size size)
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
                Text = "AVAILABLE JOBS",
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
                Height = this.Height * 80 /100,
                Padding = new Padding(0, this.Height * 15 / 100, 0, 0)
            };
            blockSize = new Size(jobBlocksPanel.Width * 95 / 100, jobBlocksPanel.Height * 15 / 100);
            this.Controls.Add(jobBlocksPanel);
        }

        private void InitJobBlocks()
        {
            User loggedUser = UserController.GetLoggedUser();
            List<Job> jobs = controller.QueryJobs();
            List<Job> userJobs = controller.QueryJobsByUser(loggedUser.Id);
            List<Job> addedJobs = new List<Job>();
            if (jobs == null) return;
            foreach (Job job in jobs)
            {
                if (userJobs == null)
                {
                    jobBlocksPanel.Controls.Add(new UIJobRequestBlock(blockSize, job));
                    continue;
                }
                foreach (Job userJob in userJobs)
                {
                    if(job.Id != userJob.Id && !addedJobs.Contains(job))
                    {
                        jobBlocksPanel.Controls.Add(new UIJobRequestBlock(blockSize, job));
                        addedJobs.Add(job);
                    }
                }
            }
        }
    }
}
