using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Negocio;
using Persistencia;

namespace Presentacion
{
    public partial class UILoginForm : Form
    {
        private LoginController controller = new LoginController();
        public UILoginForm()
        {
            InitializeComponent();
        }

        private void button_login_Click(object sender, EventArgs e)
        {
            //Aqui utiliza el LoginController para verificar la existencia del usuario y logearlo si es que existe
            if (controller.VerifyAndLogUser(textBox_user.Text, textBox_password.Text))
            {
                UIMainForm mainForm = new UIMainForm();
                mainForm.loginForm = this;
                mainForm.Show();
                this.Hide();
            }
            else
            {
                MessageBox.Show("Invalid Data", "", MessageBoxButtons.OK);
            }
        }
    }
}
