namespace Presentacion
{
    partial class LoginForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label_upperTitle = new System.Windows.Forms.Label();
            this.textBox_user = new System.Windows.Forms.TextBox();
            this.textBox_password = new System.Windows.Forms.TextBox();
            this.button_login = new System.Windows.Forms.Button();
            this.img_login = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.img_login)).BeginInit();
            this.SuspendLayout();
            // 
            // label_upperTitle
            // 
            this.label_upperTitle.AutoSize = true;
            this.label_upperTitle.Font = new System.Drawing.Font("Lucida Fax", 26.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label_upperTitle.Location = new System.Drawing.Point(128, 9);
            this.label_upperTitle.Name = "label_upperTitle";
            this.label_upperTitle.Size = new System.Drawing.Size(370, 40);
            this.label_upperTitle.TabIndex = 0;
            this.label_upperTitle.Text = "IEM Event Manager";
            // 
            // textBox_user
            // 
            this.textBox_user.BackColor = System.Drawing.Color.White;
            this.textBox_user.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.textBox_user.Font = new System.Drawing.Font("Simplified Arabic", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox_user.Location = new System.Drawing.Point(152, 314);
            this.textBox_user.Name = "textBox_user";
            this.textBox_user.Size = new System.Drawing.Size(317, 42);
            this.textBox_user.TabIndex = 5;
            // 
            // textBox_password
            // 
            this.textBox_password.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.textBox_password.Font = new System.Drawing.Font("Simplified Arabic", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox_password.Location = new System.Drawing.Point(152, 390);
            this.textBox_password.Name = "textBox_password";
            this.textBox_password.Size = new System.Drawing.Size(317, 42);
            this.textBox_password.TabIndex = 6;
            // 
            // button_login
            // 
            this.button_login.BackColor = System.Drawing.Color.WhiteSmoke;
            this.button_login.Font = new System.Drawing.Font("Lucida Console", 15.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button_login.Location = new System.Drawing.Point(247, 468);
            this.button_login.Name = "button_login";
            this.button_login.Size = new System.Drawing.Size(150, 29);
            this.button_login.TabIndex = 8;
            this.button_login.Text = "Log In";
            this.button_login.UseVisualStyleBackColor = false;
            this.button_login.Click += new System.EventHandler(this.button_login_Click);
            // 
            // img_login
            // 
            this.img_login.Image = global::Presentacion.Properties.Resources.loginIcon;
            this.img_login.Location = new System.Drawing.Point(247, 100);
            this.img_login.Name = "img_login";
            this.img_login.Size = new System.Drawing.Size(150, 150);
            this.img_login.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.img_login.TabIndex = 2;
            this.img_login.TabStop = false;
            // 
            // LoginForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(663, 524);
            this.Controls.Add(this.button_login);
            this.Controls.Add(this.textBox_password);
            this.Controls.Add(this.textBox_user);
            this.Controls.Add(this.img_login);
            this.Controls.Add(this.label_upperTitle);
            this.Name = "LoginForm";
            this.Text = "Gestor de Eventos";
            ((System.ComponentModel.ISupportInitialize)(this.img_login)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label_upperTitle;
        private System.Windows.Forms.PictureBox img_login;
        private System.Windows.Forms.TextBox textBox_user;
        private System.Windows.Forms.TextBox textBox_password;
        private System.Windows.Forms.Button button_login;
    }
}

