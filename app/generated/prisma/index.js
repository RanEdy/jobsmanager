
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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
exports.UserRole = exports.$Enums.UserRole = {
  SUPERVISOR: 'SUPERVISOR',
  MANAGER: 'MANAGER',
  LOGISTIC: 'LOGISTIC',
  DRIVER: 'DRIVER',
  DISPATCH: 'DISPATCH',
  ASSISTANT_MANAGER: 'ASSISTANT_MANAGER'
};

exports.UserLevel = exports.$Enums.UserLevel = {
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

exports.GenericRequestStatus = exports.$Enums.GenericRequestStatus = {
  PENDING: 'PENDING',
  REJECTED: 'REJECTED',
  ACCEPTED: 'ACCEPTED'
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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\erand\\dev\\personal\\web\\iem-event-management-system\\app\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\erand\\dev\\personal\\web\\iem-event-management-system\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOGZkODUwY2YtZmVmOC00NjA0LTg3NWUtZDNiOTQ2MWMyN2QzIiwidGVuYW50X2lkIjoiZDM5MDZkNDAyZTA0ZmVhNzg5M2IwZGEyZTMzZTQzNDhkNTJjYjBlNThhMDQ2MmUyMTkyNDYyOGFkNmRiYjg5NSIsImludGVybmFsX3NlY3JldCI6IjhkMGZkZmRjLThiNjktNGFiZS05MDYyLTE0ZDRjZWU5ODcxNiJ9.M-l-x0pcGe_pA6EF1b-_ddcVHtPoT4QXTTYccABdzos"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../app/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nenum UserRole {\n  SUPERVISOR\n  MANAGER\n  LOGISTIC\n  DRIVER\n  DISPATCH\n  ASSISTANT_MANAGER\n}\n\nenum UserLevel {\n  MASTER\n  ADMIN\n  STAFF\n}\n\nenum GenericRequestStatus {\n  PENDING\n  REJECTED\n  ACCEPTED\n}\n\nenum USAState {\n  ALABAMA\n  ALASKA\n  ARIZONA\n  ARKANSAS\n  CALIFORNIA\n  COLORADO\n  CONNECTICUT\n  DELAWARE\n  FLORIDA\n  GEORGIA\n  HAWAII\n  IDAHO\n  ILLINOIS\n  INDIANA\n  IOWA\n  KANSAS\n  KENTUCKY\n  LOUISIANA\n  MAINE\n  MARYLAND\n  MASSACHUSETTS\n  MICHIGAN\n  MINNESOTA\n  MISSISSIPPI\n  MISSOURI\n  MONTANA\n  NEBRASKA\n  NEVADA\n  NEW_HAMPSHIRE\n  NEW_JERSEY\n  NEW_MEXICO\n  NEW_YORK\n  NORTH_CAROLINA\n  NORTH_DAKOTA\n  OHIO\n  OKLAHOMA\n  OREGON\n  PENNSYLVANIA\n  RHODE_ISLAND\n  SOUTH_CAROLINA\n  SOUTH_DAKOTA\n  TENNESSEE\n  TEXAS\n  UTAH\n  VERMONT\n  VIRGINIA\n  WASHINGTON\n  WEST_VIRGINIA\n  WISCONSIN\n  WYOMING\n}\n\nmodel User {\n  id       Int       @id @default(autoincrement())\n  level    UserLevel\n  name     String\n  email    String\n  password String\n\n  address String\n  city    String\n  state   USAState\n  zipCode String\n\n  birthday  DateTime\n  hireDate  DateTime\n  phone     String\n  active    Boolean\n  guardCard Boolean\n\n  supervisotCount       Int\n  managerCount          Int\n  logisticCount         Int\n  driverCount           Int\n  dispatchCount         Int\n  assistantManagerCount Int\n\n  contactName1  String\n  contactPhone1 String\n  contactName2  String\n  contactPhone2 String\n\n  eventUsers    EventUserList[]\n  eventRequests EventRequest[]\n  incidents     Incident[]\n  shiftRequests ShiftRequest[]\n}\n\nmodel Event {\n  id      Int      @id @default(autoincrement())\n  name    String\n  city    String\n  state   USAState\n  zipCode String\n  address String\n\n  startDate DateTime\n  endDate   DateTime\n  public    Boolean\n  done      Boolean\n\n  eventUsers   EventUserList[]\n  sections     EventSection[]\n  userRequests EventRequest[]\n  incidents    Incident[]\n  shifts       EventShiftDay[]\n}\n\nmodel EventRequest {\n  id           Int                  @id @default(autoincrement())\n  eventId      Int\n  userId       Int\n  status       GenericRequestStatus\n  isInvitation Boolean\n  event        Event                @relation(fields: [eventId], references: [id])\n  user         User                 @relation(fields: [userId], references: [id])\n}\n\nmodel EventSection {\n  id          Int    @id @default(autoincrement())\n  eventId     Int\n  sectionName String\n  description String\n  event       Event  @relation(fields: [eventId], references: [id])\n\n  files SectionFile[]\n}\n\nmodel SectionFile {\n  id        Int          @id @default(autoincrement())\n  sectionId Int\n  name      String\n  dataBytes Bytes\n  section   EventSection @relation(fields: [sectionId], references: [id])\n}\n\nmodel EventUserList {\n  id      Int      @id @default(autoincrement())\n  userId  Int\n  eventId Int\n  role    UserRole\n  user    User     @relation(fields: [userId], references: [id])\n  event   Event    @relation(fields: [eventId], references: [id])\n}\n\nmodel Incident {\n  id           Int      @id @default(autoincrement())\n  eventId      Int\n  userId       Int\n  title        String\n  description  String\n  incidentDate DateTime\n  event        Event    @relation(fields: [eventId], references: [id])\n  user         User     @relation(fields: [userId], references: [id])\n}\n\nmodel EventShiftTime {\n  id         Int      @id @default(autoincrement())\n  shiftDayId Int\n  startTime  DateTime\n  endTime    DateTime\n\n  shiftDay EventShiftDay @relation(fields: [shiftDayId], references: [id])\n}\n\nmodel EventShiftDay {\n  id       Int      @id @default(autoincrement())\n  eventId  Int\n  day      DateTime\n  maxUsers Int\n  role     UserRole\n  event    Event    @relation(fields: [eventId], references: [id])\n\n  times    EventShiftTime[]\n  requests ShiftRequest[]\n}\n\nmodel ShiftRequest {\n  id         Int                  @id @default(autoincrement())\n  shiftDayId Int\n  userId     Int\n  status     GenericRequestStatus\n  shiftDay   EventShiftDay        @relation(fields: [shiftDayId], references: [id])\n  user       User                 @relation(fields: [userId], references: [id])\n}\n",
  "inlineSchemaHash": "8a457dc5ba81ec09e55b2ce92bd1e64e4b0c36fe6910e0750c06853269f312e6",
  "copyEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "app/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserLevel\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"USAState\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zipCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthday\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hireDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guardCard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"supervisotCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"managerCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logisticCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"driverCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dispatchCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assistantManagerCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactName1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactPhone1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactName2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactPhone2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventUsers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EventUserList\",\"nativeType\":null,\"relationName\":\"EventUserListToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventRequests\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EventRequest\",\"nativeType\":null,\"relationName\":\"EventRequestToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incidents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Incident\",\"nativeType\":null,\"relationName\":\"IncidentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shiftRequests\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShiftRequest\",\"nativeType\":null,\"relationName\":\"ShiftRequestToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Event\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"USAState\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zipCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"public\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"done\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventUsers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EventUserList\",\"nativeType\":null,\"relationName\":\"EventToEventUserList\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EventSection\",\"nativeType\":null,\"relationName\":\"EventToEventSection\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userRequests\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EventRequest\",\"nativeType\":null,\"relationName\":\"EventToEventRequest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incidents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Incident\",\"nativeType\":null,\"relationName\":\"EventToIncident\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shifts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EventShiftDay\",\"nativeType\":null,\"relationName\":\"EventToEventShiftDay\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EventRequest\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GenericRequestStatus\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isInvitation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"nativeType\":null,\"relationName\":\"EventToEventRequest\",\"relationFromFields\":[\"eventId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"EventRequestToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EventSection\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sectionName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"nativeType\":null,\"relationName\":\"EventToEventSection\",\"relationFromFields\":[\"eventId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"files\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SectionFile\",\"nativeType\":null,\"relationName\":\"EventSectionToSectionFile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SectionFile\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sectionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataBytes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"section\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EventSection\",\"nativeType\":null,\"relationName\":\"EventSectionToSectionFile\",\"relationFromFields\":[\"sectionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EventUserList\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserRole\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"EventUserListToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"nativeType\":null,\"relationName\":\"EventToEventUserList\",\"relationFromFields\":[\"eventId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Incident\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"incidentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"nativeType\":null,\"relationName\":\"EventToIncident\",\"relationFromFields\":[\"eventId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"IncidentToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EventShiftTime\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shiftDayId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shiftDay\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EventShiftDay\",\"nativeType\":null,\"relationName\":\"EventShiftDayToEventShiftTime\",\"relationFromFields\":[\"shiftDayId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EventShiftDay\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eventId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"day\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxUsers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserRole\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"nativeType\":null,\"relationName\":\"EventToEventShiftDay\",\"relationFromFields\":[\"eventId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"times\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EventShiftTime\",\"nativeType\":null,\"relationName\":\"EventShiftDayToEventShiftTime\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requests\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShiftRequest\",\"nativeType\":null,\"relationName\":\"EventShiftDayToShiftRequest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ShiftRequest\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shiftDayId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GenericRequestStatus\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shiftDay\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EventShiftDay\",\"nativeType\":null,\"relationName\":\"EventShiftDayToShiftRequest\",\"relationFromFields\":[\"shiftDayId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"ShiftRequestToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"UserRole\":{\"values\":[{\"name\":\"SUPERVISOR\",\"dbName\":null},{\"name\":\"MANAGER\",\"dbName\":null},{\"name\":\"LOGISTIC\",\"dbName\":null},{\"name\":\"DRIVER\",\"dbName\":null},{\"name\":\"DISPATCH\",\"dbName\":null},{\"name\":\"ASSISTANT_MANAGER\",\"dbName\":null}],\"dbName\":null},\"UserLevel\":{\"values\":[{\"name\":\"MASTER\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"STAFF\",\"dbName\":null}],\"dbName\":null},\"GenericRequestStatus\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"REJECTED\",\"dbName\":null},{\"name\":\"ACCEPTED\",\"dbName\":null}],\"dbName\":null},\"USAState\":{\"values\":[{\"name\":\"ALABAMA\",\"dbName\":null},{\"name\":\"ALASKA\",\"dbName\":null},{\"name\":\"ARIZONA\",\"dbName\":null},{\"name\":\"ARKANSAS\",\"dbName\":null},{\"name\":\"CALIFORNIA\",\"dbName\":null},{\"name\":\"COLORADO\",\"dbName\":null},{\"name\":\"CONNECTICUT\",\"dbName\":null},{\"name\":\"DELAWARE\",\"dbName\":null},{\"name\":\"FLORIDA\",\"dbName\":null},{\"name\":\"GEORGIA\",\"dbName\":null},{\"name\":\"HAWAII\",\"dbName\":null},{\"name\":\"IDAHO\",\"dbName\":null},{\"name\":\"ILLINOIS\",\"dbName\":null},{\"name\":\"INDIANA\",\"dbName\":null},{\"name\":\"IOWA\",\"dbName\":null},{\"name\":\"KANSAS\",\"dbName\":null},{\"name\":\"KENTUCKY\",\"dbName\":null},{\"name\":\"LOUISIANA\",\"dbName\":null},{\"name\":\"MAINE\",\"dbName\":null},{\"name\":\"MARYLAND\",\"dbName\":null},{\"name\":\"MASSACHUSETTS\",\"dbName\":null},{\"name\":\"MICHIGAN\",\"dbName\":null},{\"name\":\"MINNESOTA\",\"dbName\":null},{\"name\":\"MISSISSIPPI\",\"dbName\":null},{\"name\":\"MISSOURI\",\"dbName\":null},{\"name\":\"MONTANA\",\"dbName\":null},{\"name\":\"NEBRASKA\",\"dbName\":null},{\"name\":\"NEVADA\",\"dbName\":null},{\"name\":\"NEW_HAMPSHIRE\",\"dbName\":null},{\"name\":\"NEW_JERSEY\",\"dbName\":null},{\"name\":\"NEW_MEXICO\",\"dbName\":null},{\"name\":\"NEW_YORK\",\"dbName\":null},{\"name\":\"NORTH_CAROLINA\",\"dbName\":null},{\"name\":\"NORTH_DAKOTA\",\"dbName\":null},{\"name\":\"OHIO\",\"dbName\":null},{\"name\":\"OKLAHOMA\",\"dbName\":null},{\"name\":\"OREGON\",\"dbName\":null},{\"name\":\"PENNSYLVANIA\",\"dbName\":null},{\"name\":\"RHODE_ISLAND\",\"dbName\":null},{\"name\":\"SOUTH_CAROLINA\",\"dbName\":null},{\"name\":\"SOUTH_DAKOTA\",\"dbName\":null},{\"name\":\"TENNESSEE\",\"dbName\":null},{\"name\":\"TEXAS\",\"dbName\":null},{\"name\":\"UTAH\",\"dbName\":null},{\"name\":\"VERMONT\",\"dbName\":null},{\"name\":\"VIRGINIA\",\"dbName\":null},{\"name\":\"WASHINGTON\",\"dbName\":null},{\"name\":\"WEST_VIRGINIA\",\"dbName\":null},{\"name\":\"WISCONSIN\",\"dbName\":null},{\"name\":\"WYOMING\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

