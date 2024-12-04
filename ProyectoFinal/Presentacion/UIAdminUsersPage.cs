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
    public class UIAdminUsersPage : Panel
    {
        public TableLayoutPanel mainPanel;
        public FlowLayoutPanel userBlocksPanel;
        public Size blockSize;
        private Button addUser;
        private UserController controller = new UserController();
        private RequestController requestController = new RequestController();
        private UIUserEditForm userEditForm;
        private bool isRequestMode;
        private int jobId;
        private UIMainForm mainForm;

        //Modo Administracion (predeterminado)
        //Modo Solicitudes
        public UIAdminUsersPage(Size size, bool isRequestMode=false, int jobId=-1, UIMainForm mainForm=null)
        {
            this.mainForm = mainForm;
            this.jobId = jobId;
            this.isRequestMode = isRequestMode;
            this.Size = size;
            this.BackColor = Style.LIGHT_GRAY;
            this.Dock = DockStyle.Fill;
            InitUI();
            InitUserBlocks();
            if (UserController.IsLoggedUserAdmin() && !isRequestMode) InitAddUserPanel();
        }

        private void InitUI()
        {
            mainPanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 3,
                Dock = DockStyle.Fill,
                Width = this.Width * 95 / 100,
                Height = this.Height
            };
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 15.0F));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 70.0F));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 15.0F));

            Label label = new Label()
            {
                Dock = DockStyle.Fill,
                Text = isRequestMode ? "USER REQUESTS" : "USER LIST MANAGEMENT",
                ForeColor = Style.BLUE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 28, FontStyle.Bold),
                TextAlign = ContentAlignment.MiddleCenter,
                Width = this.Width,
                Height = this.Height * 15 / 100
            };
            this.Controls.Add(label);
            userBlocksPanel = new FlowLayoutPanel()
            {
                AutoScroll = true,
                Dock = DockStyle.Fill,
                BackColor = Style.LIGHT_GRAY,
                Width = mainPanel.Width,
                Height = this.Height * 70 / 100,
                BorderStyle = BorderStyle.FixedSingle
            };
            blockSize = new Size(userBlocksPanel.Width, userBlocksPanel.Height * 18 / 100);
            mainPanel.Controls.Add(label);
            mainPanel.Controls.Add(userBlocksPanel);
            this.Controls.Add(mainPanel);
        }
        private void InitUserBlocks()
        {
            List<Request> requests = requestController.QueryRequestsByJob(jobId);
            List<User> users = controller.QueryUsers();

            if (users == null) return;
            foreach (User user in users)
            {
                UIUserBlock ub = isRequestMode ? new UIUserBlock(user, blockSize, true, jobId, mainForm) : new UIUserBlock(user, blockSize);
                ub.uIAdminUsersPage = this;

                if (isRequestMode)
                {
                    if (requests == null) continue;
                    else 
                    { 
                        foreach (Request request in requests) if (user.Id == request.UserId && request.State == RequestState.PENDING) userBlocksPanel.Controls.Add(ub);
                    }
                }

                else if (UserController.GetLoggedUser().Id != user.Id) userBlocksPanel.Controls.Add(ub);
            }
        }


        private void InitAddUserPanel()
        {
            addUser = new Button()
            {
                Dock = DockStyle.Fill,
                Text = "   ADD NEW USER",
                BackColor = Style.WHITE,
                Anchor = AnchorStyles.Left,
                TextImageRelation = TextImageRelation.ImageBeforeText,
                TextAlign = ContentAlignment.MiddleCenter,
                ImageAlign = ContentAlignment.MiddleCenter,
                ForeColor = Style.LIGHT_GREEN,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 20, FontStyle.Bold),
                Padding = new Padding(this.Width * 15 / 100, 0, 0, 0),
                Height = this.Height * 15 / 100,
                Width = this.Width
            };
            addUser.Image = new Bitmap(Properties.Resources.AddIcon, new Size(addUser.Height * 70 / 100, addUser.Height * 70 / 100));
            addUser.Click += addUser_click;
            mainPanel.Controls.Add(addUser);
        }

        private void addUser_click(object sender, EventArgs e)
        {
            if (userEditForm != null) userEditForm.Dispose();
            User u = new User()
            {
                Name = "",
                Email = "",
                Password = "",
                Birthday = DateTime.Now,
                HireDate = DateTime.Now,
                Address = new Address()
                {
                    State = "",
                    City  = "",
                    Street = "",
                    PostalCode = "",
                    Number = ""
                },
                Phone = "",
                UserType = UserType.WORKER,
                IsActivated = false,
                HasGuardCard = false,
                ProfileImage = Properties.Resources.UserIcon,
            };
            //Crear un usuario nuevo
            UIProfilePage upp = new UIProfilePage(UIMainForm.finalSize, u, true, mainForm);
            upp.usersPage = this;
            userEditForm = new UIUserEditForm(upp, true);
            userEditForm.adminUsersPage = this;
            userEditForm.Show();
        }
    }
}
