using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Negocios;
using Persistencia;

namespace Presentacion
{
    public partial class LoginForm : Form
    {
        LoginController controller = new LoginController();
        public LoginForm()
        {
            InitializeComponent();
        }

        private void button_login_Click(object sender, EventArgs e)
        {
            //Aqui utiliza el LoginController para verificar la existencia del usuario
            if (controller.CheckUser(textBox_user.Text, textBox_password.Text))
            {
                MainForm mainForm = new MainForm(UserType.WORKER);
                mainForm.SetLoginForm(this);
                mainForm.Show();
                this.Hide();
            }
            else
            {
                MessageBox.Show("Datos Incorrectos", "", MessageBoxButtons.OK);
            }
        }
    }
}
