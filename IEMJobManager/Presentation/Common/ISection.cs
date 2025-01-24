using System.Windows.Forms;
using System.Drawing;

namespace Presentation.Common
{
    public interface ISection
    {
        string sectionName { get; }
        Panel sectionPanel { get; }
        Image sectionImage { get; }

        void UpdateSection();
    }
}
