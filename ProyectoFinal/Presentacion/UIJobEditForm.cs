using Negocio;
using Persistencia;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Linq;

namespace Presentacion
{
    public class UIJobEditForm : Form
    {
        private Job jobData;
        private Size maxSize = new Size(800, 1300);
        private int widthPercentage = 60;
        private int heightPercentage = 70;

        public UIAdminJobsPage adminJobsPage { get; set; }
        public UIJobBlock externBlock {  get; set; }
        private JobController controller = new JobController();

        private bool insertMode = false;
        private string[] fieldNames = { 
            "Job Name", "Site Name", "Duration", 
            "Maximum Users", "State", "City", "Street", "Postal Code", "Street Number" 
        };
        private Dictionary<string, TextBox> textBoxDict = new Dictionary<string, TextBox>();
        private DateTimePicker startDatePicker;

        private TableLayoutPanel mainPanel;
        private FlowLayoutPanel optionsPanel;
        private Button accept, cancel;

        public UIJobEditForm(Job jobData, bool insertMode, UIJobBlock externBlock = null)
        {
            this.jobData = jobData;
            this.insertMode = insertMode;
            this.externBlock = externBlock;
            CalculateSize();
            InitMainPanel();
            InitFields();
            InitOptions();
            InitMode();

        }

        private void CalculateSize()
        {
            this.MaximumSize = maxSize;
            this.StartPosition = FormStartPosition.Manual;
            Size screenSize = Screen.PrimaryScreen.WorkingArea.Size;
            if (screenSize.Width > maxSize.Width) { this.Width = maxSize.Width; }
            if (screenSize.Height > maxSize.Height) { this.Height = maxSize.Height; }
            else { this.Size = screenSize; }
            this.Width = (this.Width * widthPercentage) / 100;
            this.Height = (this.Height * heightPercentage) / 100;
        }

        private void InitMainPanel()
        {
            mainPanel = new TableLayoutPanel()
            {
                Dock = DockStyle.Top,
                BackColor = Style.LIGHT_GRAY,
                AutoSize = true,
                Width = this.Width,
                ColumnCount = 2,
                RowCount = 11,
                CellBorderStyle = TableLayoutPanelCellBorderStyle.Single
            };
            mainPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 40));
            mainPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 60));

            this.Controls.Add(mainPanel);
        }

        private void InitFields()
        {
            foreach (string name in fieldNames)
            {
                Label l = new Label()
                {
                    AutoSize = true,
                    Text = name,
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 18, FontStyle.Bold),
                    Dock = DockStyle.Fill,
                    Anchor = AnchorStyles.Left,
                };
                mainPanel.Controls.Add(l);

                TextBox textBox_field = new TextBox()
                {
                    Text = GetJobValue(name),
                    Font = new Font(Style.FONT_BAHNSCHRTFT, 18),
                    Width = mainPanel.Width * 60 / 100,
                };
                mainPanel.Controls.Add(textBox_field);
                textBoxDict.Add(name, textBox_field);
            }

            Label dateLabel = new Label()
            {
                AutoSize = true,
                Text = "Start Date",
                Font = new Font(Style.FONT_BAHNSCHRTFT, 18, FontStyle.Bold),
                Dock = DockStyle.Fill,
                Anchor = AnchorStyles.Left,
            };
            mainPanel.Controls.Add(dateLabel);

            startDatePicker = new DateTimePicker()
            {
                Value = jobData == null ? DateTime.Now : jobData.StartDate,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 18),
                Width = this.Width * 60 / 100,
                Format = DateTimePickerFormat.Custom, 
                CustomFormat = "dd/MM/yyyy HH:mm:ss",
                ShowUpDown = true
            };
            mainPanel.Controls.Add(startDatePicker);
        }

        private string GetJobValue(string name)
        {
            if (jobData == null) return "";
            switch(name)
            {
                case "Job Name": return jobData.DisplayName;
                case "Site Name": return jobData.SiteName;
                case "Duration": return jobData.Duration.ToString();
                case "Maximum Users": return jobData.MaxUsers.ToString();
                case "State": return jobData.Address.State;
                case "City": return jobData.Address.City;
                case "Street": return jobData.Address.Street;
                case "Postal Code": return jobData.Address.PostalCode;
                case "Street Number": return jobData.Address.Number;
                default: return "";
            }
        }

        private void InitOptions()
        {
            accept = new Button()
            {
                AutoSize = true,
                Text = "ACCEPT",
                BackColor = Style.LIGHT_GREEN,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 22, FontStyle.Bold),
                Anchor = AnchorStyles.None
            };

            cancel = new Button()
            {
                AutoSize = true,
                Text = "CANCEL",
                BackColor = Style.LIGHT_RED,
                ForeColor = Style.WHITE,
                Font = new Font(Style.FONT_BAHNSCHRTFT, 22, FontStyle.Bold),
                Anchor = AnchorStyles.None
            };
            cancel.Click += (sender, e) => this.Dispose();

            optionsPanel = new FlowLayoutPanel()
            {
                Dock = DockStyle.Bottom,
                BackColor = Style.WHITE,
                AutoSize = true,
                Padding = new Padding(this.Width * 25 / 100, 0, 0, 0)
            };
            optionsPanel.Controls.Add(accept);
            optionsPanel.Controls.Add(cancel);
            this.Controls.Add(optionsPanel);

        }

        private bool VerifyFields()
        {
            foreach (var t in textBoxDict.Values)
            {
                if (t.Text.Trim().Length == 0) return false;
            }
            if (!int.TryParse(textBoxDict["Duration"].Text, out int a)) return false;
            if (!int.TryParse(textBoxDict["Maximum Users"].Text, out int b)) return false;
            return true;
        }

        private void InitMode()
        {
            if (insertMode)
            {
                foreach (var textbox in textBoxDict.Values)
                {
                    textbox.Text = "";
                }
                startDatePicker.Value = DateTime.Now;
                accept.Click += accept_insert;
                
            }
            else
            {
                accept.Click += accept_edit;
            }
            
        }

        private void accept_insert(object sender, EventArgs e)
        {
            if (VerifyFields())
            {
                Job j = new Job()
                {
                    DisplayName = textBoxDict["Job Name"].Text,
                    SiteName = textBoxDict["Site Name"].Text,
                    StartDate = startDatePicker.Value,
                    Duration = int.Parse(textBoxDict["Duration"].Text),
                    MaxUsers = int.Parse(textBoxDict["Maximum Users"].Text),
                    Address = new Address()
                    {
                        State = textBoxDict["State"].Text,
                        City = textBoxDict["City"].Text,
                        Street = textBoxDict["Street"].Text,
                        PostalCode = textBoxDict["Postal Code"].Text,
                        Number = textBoxDict["Street Number"].Text
                    }
                };
                controller.InsertJob(j);
                UIJobBlock jb = new UIJobBlock(adminJobsPage.blockSize, controller.GetLastJob());
                jb.adminJobsPage = adminJobsPage;
                adminJobsPage.jobBlocksPanel.Controls.Add(jb);
                Close();
            }
            else
            {
                MessageBox.Show("Please complete all the required fields");
            }
        }

        private void accept_edit(object sender, EventArgs e)
        {
            if (VerifyFields())
            {
                Job j = new Job()
                {
                    Id = jobData.Id,
                    DisplayName = textBoxDict["Job Name"].Text,
                    SiteName = textBoxDict["Site Name"].Text,
                    StartDate = startDatePicker.Value,
                    Duration = int.Parse(textBoxDict["Duration"].Text),
                    MaxUsers = int.Parse(textBoxDict["Maximum Users"].Text),
                    Address = new Address()
                    {
                        State = textBoxDict["State"].Text,
                        City = textBoxDict["City"].Text,
                        Street = textBoxDict["Street"].Text,
                        PostalCode = textBoxDict["Postal Code"].Text,
                        Number = textBoxDict["Street Number"].Text
                    }
                };
                controller.EditJob(j);

                if (externBlock != null)
                {
                    adminJobsPage.jobBlocksPanel.Controls.Remove(externBlock);
                    externBlock = new UIJobBlock(externBlock.Size, j);
                    externBlock.adminJobsPage = adminJobsPage;
                    adminJobsPage.jobBlocksPanel.Controls.Add(externBlock);
                }
                else
                {
                    // Si no hay un bloque externo, agregar uno nuevo
                    adminJobsPage.jobBlocksPanel.Controls.Add(new UIJobBlock(adminJobsPage.blockSize, j));
                }
                Close();
            }
            else
            {
                MessageBox.Show("Please complete all the required fields");
            }
        }
    }
}
