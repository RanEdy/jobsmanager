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
    public class UIJobListPage : Panel
    {
        private TableLayoutPanel mainPanel;
        private FlowLayoutPanel rejected, pending, accepted;
        private RequestController requestController = new RequestController();

        public UIJobListPage(Size size, bool adminMode)
        {
            this.Size = size;
            this.BackColor = Style.LIGHT_GRAY;
            this.Dock = DockStyle.Fill;
            InitMainPanel();
            InitJobBlocks();
        }

        private void InitMainPanel()
        {
            mainPanel = new TableLayoutPanel()
            {
                ColumnCount = 3,
                RowCount = 2,
                AutoSize = true,
                Dock = DockStyle.Fill,
            };
            mainPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 33.33F));
            mainPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 33.33F));
            mainPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 33.33F));

            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 15.0F));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 85.0F));
            this.Controls.Add(mainPanel);

            rejected = InitPanel(Style.LIGHT_RED, "REJECTED", 0);
            pending = InitPanel(Style.LIGHT_ORANGE, "PENDING", 1);
            accepted = InitPanel(Style.LIGHT_GREEN, "ACCEPTED", 2);
        }

        private FlowLayoutPanel InitPanel(Color color, string name, int column)
        {
            Label label = new Label()
            {
                Dock = DockStyle.Fill,
                AutoSize = true,
                TextAlign = ContentAlignment.MiddleCenter,
                Text = name,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 28, FontStyle.Bold),
                ForeColor = Style.WHITE,
                BackColor = color,
                BorderStyle = BorderStyle.FixedSingle
            };
            mainPanel.Controls.Add(label, column, 0);
            FlowLayoutPanel panel = new FlowLayoutPanel()
            {
                Dock = DockStyle.Fill,
                BackColor = color,
                AutoSize = true,
                AutoScroll = true,
            };
            mainPanel.Controls.Add(panel, column, 1);
            return panel;
        }

        private void InitJobBlocks()
        {
            Size blockSize = new Size(mainPanel.Width * 32 / 100, mainPanel.Height * 10 / 100);
            User loggedUser = UserController.GetLoggedUser();
            List<Request> requests = requestController.QueryRequestsByUser(loggedUser.Id);
            if (requests == null) return;

            List<Job> requestedJobs = new List<Job>();
            foreach (Request request in requests)
            {
                JobController controller = new JobController();
                Job j = controller.GetJob(request.JobId);

                UIJobBlock jb = new UIJobBlock(blockSize, j, true, this);
                jb.userId = loggedUser.Id;

                switch(request.State)
                {
                    case RequestState.REJECTED: rejected.Controls.Add(jb); break;
                    case RequestState.PENDING: pending.Controls.Add(jb); break;
                    case RequestState.ACCEPTED: accepted.Controls.Add(jb); break;
                }
            }
        }

        public void Reset()
        {
            rejected.Controls.Clear(); pending.Controls.Clear(); accepted.Controls.Clear();
            InitJobBlocks();
        }

    }
}
