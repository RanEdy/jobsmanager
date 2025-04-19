
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  level: 'level',
  name: 'name',
  email: 'email',
  password: 'password',
  address: 'address',
  city: 'city',
  state: 'state',
  zipCode: 'zipCode',
  birthday: 'birthday',
  hireDate: 'hireDate',
  phone: 'phone',
  active: 'active',
  guardCard: 'guardCard',
  supervisotCount: 'supervisotCount',
  managerCount: 'managerCount',
  logisticCount: 'logisticCount',
  driverCount: 'driverCount',
  dispatchCount: 'dispatchCount',
  assistantManagerCount: 'assistantManagerCount',
  contactName1: 'contactName1',
  contactPhone1: 'contactPhone1',
  contactName2: 'contactName2',
  contactPhone2: 'contactPhone2'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  name: 'name',
  city: 'city',
  state: 'state',
  zipCode: 'zipCode',
  address: 'address',
  startDate: 'startDate',
  endDate: 'endDate',
  public: 'public',
  done: 'done'
};

exports.Prisma.EventRequestScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  userId: 'userId',
  status: 'status',
  isInvitation: 'isInvitation'
};

exports.Prisma.EventSectionScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  sectionName: 'sectionName',
  description: 'description'
};

exports.Prisma.SectionFileScalarFieldEnum = {
  id: 'id',
  sectionId: 'sectionId',
  name: 'name',
  dataBytes: 'dataBytes'
};

exports.Prisma.EventUserListScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  eventId: 'eventId',
  role: 'role'
};

exports.Prisma.IncidentScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  userId: 'userId',
  title: 'title',
  description: 'description',
  incidentDate: 'incidentDate'
};

exports.Prisma.EventShiftTimeScalarFieldEnum = {
  id: 'id',
  shiftDayId: 'shiftDayId',
  startTime: 'startTime',
  endTime: 'endTime'
};

exports.Prisma.EventShiftDayScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  day: 'day',
  maxUsers: 'maxUsers',
  role: 'role'
};

exports.Prisma.ShiftRequestScalarFieldEnum = {
  id: 'id',
  shiftDayId: 'shiftDayId',
  userId: 'userId',
  status: 'status'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.UserLevel = exports.$Enums.UserLevel = {
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

exports.USAState = exports.$Enums.USAState = {
  ALABAMA: 'ALABAMA',
  ALASKA: 'ALASKA',
  ARIZONA: 'ARIZONA',
  ARKANSAS: 'ARKANSAS',
  CALIFORNIA: 'CALIFORNIA',
  COLORADO: 'COLORADO',
  CONNECTICUT: 'CONNECTICUT',
  DELAWARE: 'DELAWARE',
  FLORIDA: 'FLORIDA',
  GEORGIA: 'GEORGIA',
  HAWAII: 'HAWAII',
  IDAHO: 'IDAHO',
  ILLINOIS: 'ILLINOIS',
  INDIANA: 'INDIANA',
  IOWA: 'IOWA',
  KANSAS: 'KANSAS',
  KENTUCKY: 'KENTUCKY',
  LOUISIANA: 'LOUISIANA',
  MAINE: 'MAINE',
  MARYLAND: 'MARYLAND',
  MASSACHUSETTS: 'MASSACHUSETTS',
  MICHIGAN: 'MICHIGAN',
  MINNESOTA: 'MINNESOTA',
  MISSISSIPPI: 'MISSISSIPPI',
  MISSOURI: 'MISSOURI',
  MONTANA: 'MONTANA',
  NEBRASKA: 'NEBRASKA',
  NEVADA: 'NEVADA',
  NEW_HAMPSHIRE: 'NEW_HAMPSHIRE',
  NEW_JERSEY: 'NEW_JERSEY',
  NEW_MEXICO: 'NEW_MEXICO',
  NEW_YORK: 'NEW_YORK',
  NORTH_CAROLINA: 'NORTH_CAROLINA',
  NORTH_DAKOTA: 'NORTH_DAKOTA',
  OHIO: 'OHIO',
  OKLAHOMA: 'OKLAHOMA',
  OREGON: 'OREGON',
  PENNSYLVANIA: 'PENNSYLVANIA',
  RHODE_ISLAND: 'RHODE_ISLAND',
  SOUTH_CAROLINA: 'SOUTH_CAROLINA',
  SOUTH_DAKOTA: 'SOUTH_DAKOTA',
  TENNESSEE: 'TENNESSEE',
  TEXAS: 'TEXAS',
  UTAH: 'UTAH',
  VERMONT: 'VERMONT',
  VIRGINIA: 'VIRGINIA',
  WASHINGTON: 'WASHINGTON',
  WEST_VIRGINIA: 'WEST_VIRGINIA',
  WISCONSIN: 'WISCONSIN',
  WYOMING: 'WYOMING'
};

exports.GenericRequestStatus = exports.$Enums.GenericRequestStatus = {
  PENDING: 'PENDING',
  REJECTED: 'REJECTED',
  ACCEPTED: 'ACCEPTED'
};

exports.UserRole = exports.$Enums.UserRole = {
  SUPERVISOR: 'SUPERVISOR',
  MANAGER: 'MANAGER',
  LOGISTIC: 'LOGISTIC',
  DRIVER: 'DRIVER',
  DISPATCH: 'DISPATCH',
  ASSISTANT_MANAGER: 'ASSISTANT_MANAGER'
};

exports.Prisma.ModelName = {
  User: 'User',
  Event: 'Event',
  EventRequest: 'EventRequest',
  EventSection: 'EventSection',
  SectionFile: 'SectionFile',
  EventUserList: 'EventUserList',
  Incident: 'Incident',
  EventShiftTime: 'EventShiftTime',
  EventShiftDay: 'EventShiftDay',
  ShiftRequest: 'ShiftRequest'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
