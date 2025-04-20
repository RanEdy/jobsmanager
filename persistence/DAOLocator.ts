import { EventDAO } from "./dao/EventDAO";
import { EventRequestDAO } from "./dao/EventRequestDAO";
import { EventSectionDAO } from "./dao/EventSectionDAO";
import { EventShiftDayDAO } from "./dao/EventShiftDayDAO";
import { EventUserListDAO } from "./dao/EventUserListDAO";
import { IncidentDAO } from "./dao/IncidentDAO";
import { SectionFileDAO } from "./dao/SectionFileDAO";
import { ShiftRequestDAO } from "./dao/ShiftRequestDAO";
import { UserDAO } from "./dao/UserDAO";

export const DAOLocator = {
    user: new UserDAO(),
    event: new EventDAO(),
    eventRequest: new EventRequestDAO(),
    eventSection: new EventSectionDAO(),
    sectionFile: new SectionFileDAO(),
    eventUserList: new EventUserListDAO(),
    eventShiftTime: new EventShiftDayDAO(),
    eventShiftDay: new EventShiftDayDAO(),
    shiftRequest: new ShiftRequestDAO(),
    incident: new IncidentDAO()
}