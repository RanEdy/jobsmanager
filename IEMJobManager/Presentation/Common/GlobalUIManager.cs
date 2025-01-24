using Logic.UserLogic;
using Presentation.Common.UI;
using Presentation.UIAdmin;
using Presentation.UIWorker;
using System.Collections.Generic;
using System.Drawing;


namespace Presentation.Common
{
    public static class GlobalUIManager
    {
        public static UIMainWindow mainWindow;
        public static UILoginWindow loginWindow;
        public static Dictionary<SectionType, ISection> sections = new Dictionary<SectionType, ISection>();

        public static void InitMainWindow()
        {
            mainWindow = new UIMainWindow();
            if (UserController.IsLoggedUserAdmin())
            {
                InitSectionsForAdmin();
            }
            else
            {
                InitSectionsForWorker();
            }
            mainWindow.InitSections(sections);
            mainWindow.Show();
        }

        public static void InitSectionsForAdmin()
        {
            Size panelSize = mainWindow.GetSectionPanelSize();
            sections.Add(SectionType.PROFILE, new UIProfileSection(panelSize, UserController.GetLoggedUser().Id));
            sections.Add(SectionType.ADMIN_USERS, new UIAdminUsersSection(panelSize));
            sections.Add(SectionType.ADMIN_JOBS, new UIAdminJobsSection(panelSize));
        }

        public static void InitSectionsForWorker()
        {
            Size panelSize = mainWindow.GetSectionPanelSize();
            sections.Add(SectionType.PROFILE, new UIProfileSection(panelSize, UserController.GetLoggedUser().Id));
            sections.Add(SectionType.WORKER_REQUEST, new UIRequestSection(panelSize));
            sections.Add(SectionType.WORKER_JOB_LIST, new UIJobListSection(panelSize));
        }

        //Encargada de actualizar todos los apartados UI
        public static void UpdateAll()
        {
            foreach (ISection section in sections.Values)
                section.UpdateSection();
        }
    }
}
