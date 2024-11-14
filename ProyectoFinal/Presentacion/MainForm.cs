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

    //Este Form es en el que estara cada apartado de la interfaz
    //Esta construido similar a un Singleton
    public partial class MainForm : Form
    {
        private Panel contentBottomPanel;
        private FlowLayoutPanel optionsTopPanel;
        private Form loginForm;

        public MainForm(UserType userType)
        {
            //Inicializacion de todos los componentes y controles en comun
            InitializeComponent();
            InitGeneralPanels();

            //Iniciar la interfaz dependiendo de si es Administrador o Empleado
            switch (userType)
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

        // Se necesita esta funcion para cerrar la ventana del Login cuando se cierre la principal
        public void SetLoginForm(Form loginForm)
        {
            this.loginForm = loginForm;
        }

        private void InitGeneralPanels()
        {
            optionsTopPanel = new FlowLayoutPanel()
            {
                Dock = DockStyle.Top,
                BackColor = Color.Red,
                Size = new Size(this.Width, this.Height * 20 / 100)
            };

            contentBottomPanel = new Panel()
            {
                Dock = DockStyle.Bottom,
                BackColor = Color.Blue,
                Size = new Size(this.Width, this.Height * 80 / 100)

            };

            this.Controls.Add(optionsTopPanel);
            this.Controls.Add(contentBottomPanel);
        }
        private void InitForAdmin()
        {

        }

        private void InitForWorker()
        {

        }

        private void MainForm_FormClosed(object sender, FormClosedEventArgs e)
        {
            loginForm.Close();
        }

        private void MainForm_Resize(object sender, EventArgs e)
        {
            optionsTopPanel.Height = this.Height * 20/100;
            contentBottomPanel.Height = this.Height * 80/100;
        }
    }
}
