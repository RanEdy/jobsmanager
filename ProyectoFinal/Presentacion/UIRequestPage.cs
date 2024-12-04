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
        private RequestController requestController = new RequestController();
        private Size blockSize;
        private UIJobListPage jobListPage;
 
        public UIRequestPage(Size size, UIJobListPage jobListPage=null)
        {
            this.jobListPage = jobListPage;
            this.Size = size;
            this.BackColor = Style.WHITE;
            this.Dock = DockStyle.Fill;

            
            InitUI();
            InitJobBlocks();
        }

        private void InitUI()
        {
            TableLayoutPanel mainPanel = new TableLayoutPanel
            {
                Dock = DockStyle.Fill,
                ColumnCount = 1,
                RowCount = 2,
                AutoSize = true,
            };
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 15));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 85));


            Label label = new Label()
            {
                Dock = DockStyle.Fill,
                Text = "AVAILABLE JOBS",
                ForeColor = Style.BLUE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 28, FontStyle.Bold),
                TextAlign = ContentAlignment.MiddleCenter,
                Width = this.Width,
                Height = this.Height * 10 / 100,
            };
            mainPanel.Controls.Add(label);
            jobBlocksPanel = new FlowLayoutPanel()
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.LIGHT_GRAY,
                Width = this.Width * 95 / 100,
                Height = this.Height * 80 /100,
            };
            blockSize = new Size(jobBlocksPanel.Width, jobBlocksPanel.Height * 15 / 100);
            mainPanel.Controls.Add(jobBlocksPanel);
            this.Controls.Add(mainPanel);
        }

        private void InitJobBlocks()
        {
            User loggedUser = UserController.GetLoggedUser();
            List<Job> jobs = controller.QueryJobs();

            JobController jc = new JobController();
            List<Job> userJobs = jc.QueryJobsByUser(loggedUser.Id);
            List<Request> userRequests = requestController.QueryRequestsByUser(loggedUser.Id);

            List<UIJobBlock> blocks = new List<UIJobBlock>();
            if (jobs == null) return;
            foreach (Job job in jobs)
            {
                UIJobBlock jb = new UIJobBlock(blockSize, job, false, jobListPage);
                blocks.Add(jb);

                if (userJobs == null) continue;
                if (userRequests == null) continue;

                foreach (Job userJob in userJobs) if(job.Id == userJob.Id) blocks.Remove(jb);

                foreach (Request r in userRequests) if(r.JobId == job.Id) blocks.Remove(jb);
            }

            foreach (UIJobBlock jb in blocks) jobBlocksPanel.Controls.Add(jb);
        }
    }
}
