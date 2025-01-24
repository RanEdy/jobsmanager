using System;
using System.Collections.Generic;
using System.Drawing;
using System.Windows.Forms;
using System.Windows.Forms.VisualStyles;

namespace Presentation.Common.UI
{
    public class UIMainWindow : Form
    {
        readonly Size maxSize = new Size(1920, 1080);
        readonly int widthPercentage = 70;
        readonly int heightPercentage = 90;
        readonly float minFontSize = 10;
        readonly float fontPercentage = 0.15f;

        private Panel mainPanel, sectionPanel;
        private FlowLayoutPanel sectionTopPanel;
        private List<Button> buttonList = new List<Button>();
        public UIMainWindow()
        {
            this.FormClosing += OnClosing;
            this.Text = "Job Manager App";
            this.Icon = Properties.Resources.iem_tinyicon_blue;
            InitSize();
            InitUI();
        }

        public Size GetSectionPanelSize() => sectionPanel.Size;

        public void InitSections(Dictionary<SectionType, ISection> sections)
        {
            foreach (KeyValuePair<SectionType, ISection> pair in sections)
            {
                Button button = CreateButtonSection(pair.Key, pair.Value, sections.Count);
                buttonList.Add(button);
                sectionTopPanel.Controls.Add(button);
            }
        }
        
        private void InitSize()
        {
            this.MaximumSize = maxSize;
            Size screenSize = Screen.PrimaryScreen.WorkingArea.Size;

            this.Width = (screenSize.Width * widthPercentage) / 100;
            this.Height = (screenSize.Height * heightPercentage) / 100;

            if (this.Width > maxSize.Width) { this.Width = maxSize.Width; }
            if (this.Height > maxSize.Height) { this.Height = maxSize.Height; }

            this.StartPosition = FormStartPosition.CenterScreen;
            this.FormBorderStyle = FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
        }

        private void InitUI()
        {
            mainPanel = new Panel()
            {
                AutoScroll = true,
                Dock = DockStyle.Bottom,
                BackColor = Style.WHITE,
                Width = this.Width,
                Height = this.Height * 90 / 100,
                Padding = new Padding(10, 50, 10, 10)
            };

            sectionTopPanel = new FlowLayoutPanel()
            {
                MaximumSize = new Size(this.Width, this.Height - mainPanel.Height),
                AutoSize = true,
                Dock = DockStyle.Top,
                BackColor = Style.WHITE,
                Padding = new Padding(0)
            };

            sectionPanel = new Panel()
            {
                Dock = DockStyle.Fill,
                BackColor = Style.WHITE,
                Width = mainPanel.Width,
                Height = mainPanel.Height,
            };

            mainPanel.Controls.Add(sectionPanel);
            this.Controls.Add(sectionTopPanel);
            this.Controls.Add(mainPanel);
        }

        private Button CreateButtonSection(SectionType type, ISection section, int sectionsCount)
        {
            int buttonW = sectionTopPanel.Width / sectionsCount;
            int buttonH = this.Height - mainPanel.Height;
            Size imgSize = new Size(buttonH * 70 / 100, buttonH * 70 / 100);

            Button button = new Button()
            {
                MinimumSize = new Size(buttonW, buttonH),
                AutoSize = true,
                Text = section.sectionName,
                Font = new Font(Style.FONT_BAHNSCHRIFT, minFontSize + buttonH * fontPercentage, FontStyle.Bold),
                Image = new Bitmap(section.sectionImage, imgSize),
                BackColor = Style.DARK_WHITE,
                ForeColor = Style.DARK_GRAY,
                Margin = new Padding(0),
                FlatStyle = FlatStyle.Popup,
                TextImageRelation = TextImageRelation.ImageBeforeText
            };
            button.Click += (object sender, EventArgs e) =>
            {
                Button b = sender as Button;

                //Cambiar color de los botones
                b.BackColor = Style.DARK_CYAN;
                b.ForeColor = Style.DARK_WHITE;

                foreach (Button btn in buttonList)
                {
                    if (btn != b)
                    {
                        btn.BackColor = Style.DARK_WHITE;
                        btn.ForeColor = Style.DARK_GRAY;
                    }
                }

                //Cambiar panel
                mainPanel.Controls.Remove(sectionPanel);
                section.UpdateSection();
                sectionPanel = section.sectionPanel;
                mainPanel.Controls.Add(sectionPanel);
            };
            return button;
        }

        private void OnClosing(object sender, FormClosingEventArgs e)
        {
            GlobalUIManager.loginWindow.Close();
        }
    }
}
