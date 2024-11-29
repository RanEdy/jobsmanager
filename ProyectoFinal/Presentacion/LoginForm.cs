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
    public partial class LoginForm : Form
    {
        private LoginController controller = new LoginController();

        //TODO::Solo para hacer pruebas
        private User debugTestUser = new User()
        {
            Id = 1,
            Name = "Debug Test User",
            Email = "debugtest@gmail.com",
            Password = "password",
            Birthday = DateTime.Parse("10-07-1994"),
            HireDate = DateTime.Parse("12-03-2010"),
            Address = new Address()
            {
                State = "California",
                City = "Test City",
                Street = "Test Street",
                Number = "043",
                PostalCode = "123456"
            },
            Phone = "5551112233",
            UserType = UserType.ADMIN,
            IsActivated = true,
            HasGuardCard = true,
            ProfileImage = new Bitmap(Properties.Resources.UserIcon, new Size(80, 80)),
            EmergencyContacts = new List<EmergencyContact>()
            { 
                new EmergencyContact()
                {
                    Id = 0,
                    Name = "Pollo",
                    Phone = "942344234",
                    Relation = Relation.FAMILIAR
                }
            }
        };

        public LoginForm()
        {
            InitializeComponent();
        }

        private void button_login_Click(object sender, EventArgs e)
        {
            UserController.SetLoggedUser(debugTestUser); // DEBUG

            //Aqui utiliza el LoginController para verificar la existencia del usuario y logearlo si es que existe
            if (controller.VerifyAndLogUser(textBox_user.Text, textBox_password.Text))
            {
                MainForm mainForm = new MainForm();
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
