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
        public MainForm(UserType userType)
        {
            InitializeComponent();

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

        private void InitForAdmin()
        {

        }

        private void InitForWorker()
        {

        }
    }
}
