using Persistance.DataModels.JobModel;
using Persistance.DataModels;
using Presentation.Common;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Presentation.UIAdmin
{
    public class UIAdminJobEditPanel : Panel
    {
        private Job inputData;
        private bool isEmpty;
        private Dictionary<JobFieldType, object> fieldValues = new Dictionary<JobFieldType, object>();

        public UIAdminJobEditPanel(Size panelSize, Job jobData= null, bool isEmpty= false)
        {
            this.Size = panelSize;
            this.BackColor = Style.SOFT_WHITE;
            this.Dock = DockStyle.Fill;
            inputData = jobData;
            this.isEmpty = isEmpty;

            if (isEmpty || jobData == null)
            {
                inputData = new Job()
                {
                    Id = -1,
                    DisplayName = "",
                    SiteName = "",
                    Duration = 0,
                    MaxUsers = 0,
                    StartDate = DateTime.Now,
                    Address = new Address()
                    {
                        State = "",
                        City = "",
                        Street = "",
                        PostalCode = "",
                        Number = ""
                    }
                };
            }

            InitUI();
        }

        public Job GetValues()
        {
            Job modifiedJob = new Job()
            {
                Id = (int)fieldValues[JobFieldType.ID],
                DisplayName = (fieldValues[JobFieldType.DISPLAY_NAME] as TextBox).Text,
                SiteName = (fieldValues[JobFieldType.SITE_NAME] as TextBox).Text,
                Duration = ((int)(fieldValues[JobFieldType.DURATION] as NumericUpDown).Value),
                MaxUsers = ((int)(fieldValues[JobFieldType.MAX_USERS] as NumericUpDown).Value),
                StartDate = (DateTime)((fieldValues[JobFieldType.START_DATE] as DateTimePicker).Value),
                Address = new Address()
                {
                    State = (fieldValues[JobFieldType.STATE] as TextBox).Text,
                    City = (fieldValues[JobFieldType.CITY] as TextBox).Text,
                    Street = (fieldValues[JobFieldType.STREET] as TextBox).Text,
                    PostalCode = (fieldValues[JobFieldType.POSTAL_CODE] as TextBox).Text,
                    Number = (fieldValues[JobFieldType.NUMBER] as TextBox).Text
                }
            };

            return modifiedJob;
        }

        private void InitUI()
        {
            int fieldCount = Job.fieldMetaData.Count;
            TableLayoutPanel mainPanel = new TableLayoutPanel()
            {
                ColumnCount = 1,
                RowCount = 2,
                Dock = DockStyle.Fill,
                Width = this.Width,
                Height = this.Height
            };
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 85.0F));
            mainPanel.RowStyles.Add(new RowStyle(SizeType.Percent, 15.0F));

            TableLayoutPanel fieldPanel = new TableLayoutPanel()
            {
                ColumnCount = 2,
                RowCount = fieldCount,
                Dock = DockStyle.Fill,
            };
            fieldPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 25.0f));
            fieldPanel.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 75.0f));
            
            CreateFieldBlocks(inputData, fieldPanel, fieldCount);

            mainPanel.Controls.Add(fieldPanel);
            this.Controls.Add(mainPanel);
        }

        private void CreateFieldBlocks(Job data, TableLayoutPanel fieldPanel, int num)
        {
            int i = 0;
            foreach (JobFieldType type in Job.fieldMetaData.Keys)
            {
                fieldPanel.RowStyles.Add(new RowStyle(SizeType.Percent, fieldPanel.Height / num));
                Label labelName = new Label()
                {
                    Text = Job.fieldMetaData[type],
                    Font = new Font(Style.FONT_BAHNSCHRIFT, 20, FontStyle.Bold),
                    Dock = DockStyle.Fill,
                };
                fieldPanel.Controls.Add(labelName, 0, i++);
            }
            
            fieldPanel.Controls.Add(CreateFieldInput(JobFieldType.ID,          new Label(),          data.Id),                 1, 0);
            fieldPanel.Controls.Add(CreateFieldInput(JobFieldType.DISPLAY_NAME,new TextBox(),        data.DisplayName),        1, 1);
            fieldPanel.Controls.Add(CreateFieldInput(JobFieldType.SITE_NAME,   new TextBox(),        data.SiteName),           1, 2);
            fieldPanel.Controls.Add(CreateFieldInput(JobFieldType.DURATION,    new NumericUpDown(),  data.Duration),           1, 3);
            fieldPanel.Controls.Add(CreateFieldInput(JobFieldType.MAX_USERS,   new NumericUpDown(),  data.MaxUsers),           1, 4);
            fieldPanel.Controls.Add(CreateFieldInput(JobFieldType.STATE,       new TextBox(),        data.Address.State),      1, 5);
            fieldPanel.Controls.Add(CreateFieldInput(JobFieldType.CITY,        new TextBox(),        data.Address.City),       1, 6);
            fieldPanel.Controls.Add(CreateFieldInput(JobFieldType.STREET,      new TextBox(),        data.Address.Street),     1, 7);
            fieldPanel.Controls.Add(CreateFieldInput(JobFieldType.POSTAL_CODE, new TextBox(),        data.Address.PostalCode), 1, 8);
            fieldPanel.Controls.Add(CreateFieldInput(JobFieldType.NUMBER,      new TextBox(),        data.Address.Number),     1, 9);
            fieldPanel.Controls.Add(CreateFieldInput(JobFieldType.START_DATE,  new DateTimePicker(), data.StartDate),          1, 10);
        }

        private Control CreateFieldInput(JobFieldType type, Control control, object value)
        {
            Font font = new Font(Style.FONT_BAHNSCHRIFT, 18);
            switch(control)
            {
                case Label label:
                    label.Text = isEmpty ? "" : value.ToString();
                    label.Dock = DockStyle.Fill;
                    label.Font = font;
                    fieldValues[type] = value;
                    return label;
                case TextBox textBox:
                    textBox.Text = (string) value;
                    textBox.Dock = DockStyle.Fill;
                    textBox.Font = font;
                    fieldValues[type] = textBox;
                    return textBox;
                case NumericUpDown numcontrol:
                    numcontrol.Font = font;
                    numcontrol.Maximum = int.MaxValue;
                    numcontrol.Minimum = 0;
                    numcontrol.Value = (int)value;
                    numcontrol.Dock = DockStyle.Fill;
                    fieldValues[type] = numcontrol;
                    return numcontrol;
                case DateTimePicker dateControl:
                    dateControl.Font = font;
                    dateControl.Dock = DockStyle.Fill;
                    dateControl.Value = (DateTime)value;
                    fieldValues[type] = dateControl;
                    return dateControl;
            }
            return null;
        }

    }
}
