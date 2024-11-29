using Negocio;
using Persistencia;

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentacion
{
    public partial class MainForm : Form
    {
        private Size maxSize = new Size(1920, 1080);
        private int widthPercentage = 70;
        private int heightPercentage = 92;
        private float minFontSize = 10;
        private float fontPercentage = 0.15f;

        private Panel contentPanel;
        private Panel contentDisplayPanel;
        private FlowLayoutPanel optionsTopPanel;

        public Form loginForm { get; set; }

        private List<Button> optionsButtonList = new List<Button>();

        private Dictionary<string, Panel> optionsDictionary;
        private Dictionary<string, Image> optionsImagesDictionary;


        public MainForm()
        {
            InitializeComponent();
            InitFormSize();
            InitGeneralPanels();

            //Iniciar la interfaz dependiendo de si es Administrador o Empleado
            switch (UserController.GetLoggedUser().UserType)
            {
                case UserType.ADMIN:
                    InitForAdmin();
                    break;


                case UserType.WORKER:
                case UserType.SUPERIVSOR:
                    InitForWorker();
                    break;
            }
        }

        /*
        ===========================================================================================================
                              FUNCIONES DE INICIALIZACION DE COMPONENTES
        ===========================================================================================================
        */
        private void InitFormSize()
        {
            this.MaximumSize = maxSize;
            this.StartPosition = FormStartPosition.Manual;
            Size screenSize = Screen.PrimaryScreen.WorkingArea.Size;
            if (screenSize.Width > maxSize.Width) { this.Width = maxSize.Width; }
            if (screenSize.Height > maxSize.Height) { this.Height = maxSize.Height; }
            else { this.Size = screenSize; }
            this.Width = (this.Width * widthPercentage) / 100;
            this.Height = (this.Height * heightPercentage) / 100;
            this.StartPosition = FormStartPosition.CenterScreen;
        }
        private void InitGeneralPanels()
        {
            optionsTopPanel = new FlowLayoutPanel()
            {
                Dock = DockStyle.Top,
                BackColor = Style.WHITE,
                Size = new Size(this.Width, this.Height * 10 / 100),
                Padding = new Padding(0),
            };

            contentPanel = new Panel()
            {
                Dock = DockStyle.Bottom,
                BackColor = Style.WHITE,
                Size = new Size(this.Width, this.Height * 88 / 100),
                Padding = new Padding(10, 50, 10 ,10)
            };

            contentDisplayPanel = new Panel()
            {
                Dock = DockStyle.Fill,
                BackColor = Style.WHITE,
                Size = contentPanel.Size
            };

            contentPanel.Controls.Add(contentDisplayPanel);
            this.Controls.Add(optionsTopPanel);
            this.Controls.Add(contentPanel);
        }

        private void InitGeneralOptionsButton(string[] options)
        {
            foreach (string optionName in options)
            {
                Button b = new Button()
                {
                    Size = new Size(optionsTopPanel.Width / options.Length, optionsTopPanel.Height),
                    Text = optionName,
                    BackColor = Style.LIGHT_GRAY,
                    ForeColor = Style.GRAY,
                    Margin = new Padding(0),
                    FlatStyle = FlatStyle.Popup,
                    TextImageRelation = TextImageRelation.ImageBeforeText
                };
                b.Font = new Font(Style.FONT_BAHNSCHRTFT, minFontSize + b.Size.Height * fontPercentage, FontStyle.Bold);
                b.Enter += new EventHandler(this.Button_selected);
                b.Leave += new EventHandler(this.Button_deselected);
                b.Click += new EventHandler(this.Button_click);
                optionsTopPanel.Controls.Add(b);
                optionsButtonList.Add(b);
            }
        }
        private void InitOptionsImages(Dictionary<string, Image> images)
        {
            foreach (Button b in optionsButtonList)
            {
                b.Image = new Bitmap(images[b.Text], new Size(b.Height * 70 / 100, b.Height * 70 / 100));
            }
        }

        private void InitForAdmin()
        {
            //Mapear los nombres de cada opcion con su respectivo panel
            optionsDictionary = new Dictionary<string, Panel>()
            {
                {"Profile", new UIProfilePage(contentDisplayPanel.Size, UserController.GetLoggedUser())},
                {"Users", new UIAdminUsersPage(contentDisplayPanel.Size)},
                {"Jobs", new UIAdminJobsPage(contentDisplayPanel.Size)},
                {"Reports", new UIAdminReportsPage(contentDisplayPanel.Size)}
            };

            //Mapear los nombres de cada opcion con su respectiva imagen
            optionsImagesDictionary = new Dictionary<string, Image>()
            {
                {optionsDictionary.Keys.ElementAt(0),  Properties.Resources.UserIcon},
                {optionsDictionary.Keys.ElementAt(1),  Properties.Resources.GroupUserIcon},
                {optionsDictionary.Keys.ElementAt(2),  Properties.Resources.JobListIcon},
                {optionsDictionary.Keys.ElementAt(3),  Properties.Resources.RequestIcon}
            };
            //Inicializar propiedades en comun que tendran todos los botones de las opciones
            InitGeneralOptionsButton(optionsDictionary.Keys.ToArray());
            InitOptionsImages(optionsImagesDictionary);

        }

        private void InitForWorker()
        {
            //Mapear los nombres de cada opcion con su respectivo panel
            optionsDictionary = new Dictionary<string, Panel>()
            {
                {"Profile", new UIProfilePage(contentDisplayPanel.Size, UserController.GetLoggedUser())},
                {"Request", new UIRequestPage(contentDisplayPanel.Size)},
                //{"Schedule", new UISchedulePage(contentDisplayPanel.Size)},
                {"Job List", new UIJobListPage(contentDisplayPanel.Size)}
            };

            //Mapear los nombres de cada opcion con su respectiva imagen
            optionsImagesDictionary = new Dictionary<string, Image>()
            {
                {optionsDictionary.Keys.ElementAt(0),  Properties.Resources.UserIcon},
                {optionsDictionary.Keys.ElementAt(1),  Properties.Resources.RequestIcon},
                //{optionsDictionary.Keys.ElementAt(2),  Properties.Resources.ScheduleIcon},
                {optionsDictionary.Keys.ElementAt(2),  Properties.Resources.JobListIcon}
            };

            //Inicializar propiedades en comun que tendran todos los botones de las opciones
            InitGeneralOptionsButton(optionsDictionary.Keys.ToArray());
            InitOptionsImages(optionsImagesDictionary);

        }

        /*
        ===========================================================================================================
                              EVENTOS DE CONTROLES Y DE LA VENTANA
        ===========================================================================================================
        */

        // Se necesita esta funcion para cerrar la ventana del Login cuando se cierre la principal
        private void MainForm_FormClosing(object sender, FormClosedEventArgs e)
        {
            loginForm.Dispose();
        }

        private void Button_selected(object sender, EventArgs e)
        {
            Button button = sender as Button;
            button.BackColor = Style.DARK_CYAN;
            button.ForeColor = Style.LIGHT_GRAY;
        }

        private void Button_deselected(object sender, EventArgs e)
        {
            Button button = sender as Button;
            button.BackColor = Style.LIGHT_GRAY;
            button.ForeColor = Style.GRAY;
        }

        private void Button_click(object sender, EventArgs e)
        {
            Button button = sender as Button;
            contentPanel.Controls.Remove(contentDisplayPanel);
            contentDisplayPanel = optionsDictionary[button.Text];
            contentPanel.Controls.Add(contentDisplayPanel);
        }

    }
}
