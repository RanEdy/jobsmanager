
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventRequest
 * 
 */
export type EventRequest = $Result.DefaultSelection<Prisma.$EventRequestPayload>
/**
 * Model EventSection
 * 
 */
export type EventSection = $Result.DefaultSelection<Prisma.$EventSectionPayload>
/**
 * Model SectionFile
 * 
 */
export type SectionFile = $Result.DefaultSelection<Prisma.$SectionFilePayload>
/**
 * Model EventUserList
 * 
 */
export type EventUserList = $Result.DefaultSelection<Prisma.$EventUserListPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model EventShiftTime
 * 
 */
export type EventShiftTime = $Result.DefaultSelection<Prisma.$EventShiftTimePayload>
/**
 * Model EventShiftDay
 * 
 */
export type EventShiftDay = $Result.DefaultSelection<Prisma.$EventShiftDayPayload>
/**
 * Model ShiftRequest
 * 
 */
export type ShiftRequest = $Result.DefaultSelection<Prisma.$ShiftRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPERVISOR: 'SUPERVISOR',
  MANAGER: 'MANAGER',
  LOGISTIC: 'LOGISTIC',
  DRIVER: 'DRIVER',
  DISPATCH: 'DISPATCH',
  ASSISTANT_MANAGER: 'ASSISTANT_MANAGER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserLevel: {
  MASTER: 'MASTER',
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

export type UserLevel = (typeof UserLevel)[keyof typeof UserLevel]


export const GenericRequestStatus: {
  PENDING: 'PENDING',
  REJECTED: 'REJECTED',
  ACCEPTED: 'ACCEPTED'
};

export type GenericRequestStatus = (typeof GenericRequestStatus)[keyof typeof GenericRequestStatus]


export const USAState: {
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

export type USAState = (typeof USAState)[keyof typeof USAState]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserLevel = $Enums.UserLevel

export const UserLevel: typeof $Enums.UserLevel

export type GenericRequestStatus = $Enums.GenericRequestStatus

export const GenericRequestStatus: typeof $Enums.GenericRequestStatus

export type USAState = $Enums.USAState

export const USAState: typeof $Enums.USAState

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventRequest`: Exposes CRUD operations for the **EventRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventRequests
    * const eventRequests = await prisma.eventRequest.findMany()
    * ```
    */
  get eventRequest(): Prisma.EventRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventSection`: Exposes CRUD operations for the **EventSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventSections
    * const eventSections = await prisma.eventSection.findMany()
    * ```
    */
  get eventSection(): Prisma.EventSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sectionFile`: Exposes CRUD operations for the **SectionFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SectionFiles
    * const sectionFiles = await prisma.sectionFile.findMany()
    * ```
    */
  get sectionFile(): Prisma.SectionFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventUserList`: Exposes CRUD operations for the **EventUserList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventUserLists
    * const eventUserLists = await prisma.eventUserList.findMany()
    * ```
    */
  get eventUserList(): Prisma.EventUserListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventShiftTime`: Exposes CRUD operations for the **EventShiftTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventShiftTimes
    * const eventShiftTimes = await prisma.eventShiftTime.findMany()
    * ```
    */
  get eventShiftTime(): Prisma.EventShiftTimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventShiftDay`: Exposes CRUD operations for the **EventShiftDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventShiftDays
    * const eventShiftDays = await prisma.eventShiftDay.findMany()
    * ```
    */
  get eventShiftDay(): Prisma.EventShiftDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shiftRequest`: Exposes CRUD operations for the **ShiftRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftRequests
    * const shiftRequests = await prisma.shiftRequest.findMany()
    * ```
    */
  get shiftRequest(): Prisma.ShiftRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "event" | "eventRequest" | "eventSection" | "sectionFile" | "eventUserList" | "incident" | "eventShiftTime" | "eventShiftDay" | "shiftRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventRequest: {
        payload: Prisma.$EventRequestPayload<ExtArgs>
        fields: Prisma.EventRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          findFirst: {
            args: Prisma.EventRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          findMany: {
            args: Prisma.EventRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>[]
          }
          create: {
            args: Prisma.EventRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          createMany: {
            args: Prisma.EventRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>[]
          }
          delete: {
            args: Prisma.EventRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          update: {
            args: Prisma.EventRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          deleteMany: {
            args: Prisma.EventRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>[]
          }
          upsert: {
            args: Prisma.EventRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventRequestPayload>
          }
          aggregate: {
            args: Prisma.EventRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventRequest>
          }
          groupBy: {
            args: Prisma.EventRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventRequestCountArgs<ExtArgs>
            result: $Utils.Optional<EventRequestCountAggregateOutputType> | number
          }
        }
      }
      EventSection: {
        payload: Prisma.$EventSectionPayload<ExtArgs>
        fields: Prisma.EventSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSectionPayload>
          }
          findFirst: {
            args: Prisma.EventSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSectionPayload>
          }
          findMany: {
            args: Prisma.EventSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSectionPayload>[]
          }
          create: {
            args: Prisma.EventSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSectionPayload>
          }
          createMany: {
            args: Prisma.EventSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSectionPayload>[]
          }
          delete: {
            args: Prisma.EventSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSectionPayload>
          }
          update: {
            args: Prisma.EventSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSectionPayload>
          }
          deleteMany: {
            args: Prisma.EventSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSectionPayload>[]
          }
          upsert: {
            args: Prisma.EventSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSectionPayload>
          }
          aggregate: {
            args: Prisma.EventSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventSection>
          }
          groupBy: {
            args: Prisma.EventSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventSectionCountArgs<ExtArgs>
            result: $Utils.Optional<EventSectionCountAggregateOutputType> | number
          }
        }
      }
      SectionFile: {
        payload: Prisma.$SectionFilePayload<ExtArgs>
        fields: Prisma.SectionFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionFilePayload>
          }
          findFirst: {
            args: Prisma.SectionFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionFilePayload>
          }
          findMany: {
            args: Prisma.SectionFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionFilePayload>[]
          }
          create: {
            args: Prisma.SectionFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionFilePayload>
          }
          createMany: {
            args: Prisma.SectionFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionFilePayload>[]
          }
          delete: {
            args: Prisma.SectionFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionFilePayload>
          }
          update: {
            args: Prisma.SectionFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionFilePayload>
          }
          deleteMany: {
            args: Prisma.SectionFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionFilePayload>[]
          }
          upsert: {
            args: Prisma.SectionFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionFilePayload>
          }
          aggregate: {
            args: Prisma.SectionFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSectionFile>
          }
          groupBy: {
            args: Prisma.SectionFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionFileCountArgs<ExtArgs>
            result: $Utils.Optional<SectionFileCountAggregateOutputType> | number
          }
        }
      }
      EventUserList: {
        payload: Prisma.$EventUserListPayload<ExtArgs>
        fields: Prisma.EventUserListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventUserListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventUserListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventUserListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventUserListPayload>
          }
          findFirst: {
            args: Prisma.EventUserListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventUserListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventUserListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventUserListPayload>
          }
          findMany: {
            args: Prisma.EventUserListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventUserListPayload>[]
          }
          create: {
            args: Prisma.EventUserListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventUserListPayload>
          }
          createMany: {
            args: Prisma.EventUserListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventUserListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventUserListPayload>[]
          }
          delete: {
            args: Prisma.EventUserListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventUserListPayload>
          }
          update: {
            args: Prisma.EventUserListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventUserListPayload>
          }
          deleteMany: {
            args: Prisma.EventUserListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUserListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUserListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventUserListPayload>[]
          }
          upsert: {
            args: Prisma.EventUserListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventUserListPayload>
          }
          aggregate: {
            args: Prisma.EventUserListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventUserList>
          }
          groupBy: {
            args: Prisma.EventUserListGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventUserListGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventUserListCountArgs<ExtArgs>
            result: $Utils.Optional<EventUserListCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      EventShiftTime: {
        payload: Prisma.$EventShiftTimePayload<ExtArgs>
        fields: Prisma.EventShiftTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventShiftTimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventShiftTimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftTimePayload>
          }
          findFirst: {
            args: Prisma.EventShiftTimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventShiftTimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftTimePayload>
          }
          findMany: {
            args: Prisma.EventShiftTimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftTimePayload>[]
          }
          create: {
            args: Prisma.EventShiftTimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftTimePayload>
          }
          createMany: {
            args: Prisma.EventShiftTimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventShiftTimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftTimePayload>[]
          }
          delete: {
            args: Prisma.EventShiftTimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftTimePayload>
          }
          update: {
            args: Prisma.EventShiftTimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftTimePayload>
          }
          deleteMany: {
            args: Prisma.EventShiftTimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventShiftTimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventShiftTimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftTimePayload>[]
          }
          upsert: {
            args: Prisma.EventShiftTimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftTimePayload>
          }
          aggregate: {
            args: Prisma.EventShiftTimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventShiftTime>
          }
          groupBy: {
            args: Prisma.EventShiftTimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventShiftTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventShiftTimeCountArgs<ExtArgs>
            result: $Utils.Optional<EventShiftTimeCountAggregateOutputType> | number
          }
        }
      }
      EventShiftDay: {
        payload: Prisma.$EventShiftDayPayload<ExtArgs>
        fields: Prisma.EventShiftDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventShiftDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventShiftDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftDayPayload>
          }
          findFirst: {
            args: Prisma.EventShiftDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventShiftDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftDayPayload>
          }
          findMany: {
            args: Prisma.EventShiftDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftDayPayload>[]
          }
          create: {
            args: Prisma.EventShiftDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftDayPayload>
          }
          createMany: {
            args: Prisma.EventShiftDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventShiftDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftDayPayload>[]
          }
          delete: {
            args: Prisma.EventShiftDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftDayPayload>
          }
          update: {
            args: Prisma.EventShiftDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftDayPayload>
          }
          deleteMany: {
            args: Prisma.EventShiftDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventShiftDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventShiftDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftDayPayload>[]
          }
          upsert: {
            args: Prisma.EventShiftDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventShiftDayPayload>
          }
          aggregate: {
            args: Prisma.EventShiftDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventShiftDay>
          }
          groupBy: {
            args: Prisma.EventShiftDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventShiftDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventShiftDayCountArgs<ExtArgs>
            result: $Utils.Optional<EventShiftDayCountAggregateOutputType> | number
          }
        }
      }
      ShiftRequest: {
        payload: Prisma.$ShiftRequestPayload<ExtArgs>
        fields: Prisma.ShiftRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRequestPayload>
          }
          findFirst: {
            args: Prisma.ShiftRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRequestPayload>
          }
          findMany: {
            args: Prisma.ShiftRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRequestPayload>[]
          }
          create: {
            args: Prisma.ShiftRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRequestPayload>
          }
          createMany: {
            args: Prisma.ShiftRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRequestPayload>[]
          }
          delete: {
            args: Prisma.ShiftRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRequestPayload>
          }
          update: {
            args: Prisma.ShiftRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRequestPayload>
          }
          deleteMany: {
            args: Prisma.ShiftRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRequestPayload>[]
          }
          upsert: {
            args: Prisma.ShiftRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftRequestPayload>
          }
          aggregate: {
            args: Prisma.ShiftRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftRequest>
          }
          groupBy: {
            args: Prisma.ShiftRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    event?: EventOmit
    eventRequest?: EventRequestOmit
    eventSection?: EventSectionOmit
    sectionFile?: SectionFileOmit
    eventUserList?: EventUserListOmit
    incident?: IncidentOmit
    eventShiftTime?: EventShiftTimeOmit
    eventShiftDay?: EventShiftDayOmit
    shiftRequest?: ShiftRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    eventUsers: number
    eventRequests: number
    incidents: number
    shiftRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventUsers?: boolean | UserCountOutputTypeCountEventUsersArgs
    eventRequests?: boolean | UserCountOutputTypeCountEventRequestsArgs
    incidents?: boolean | UserCountOutputTypeCountIncidentsArgs
    shiftRequests?: boolean | UserCountOutputTypeCountShiftRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventUserListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShiftRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftRequestWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    eventUsers: number
    sections: number
    userRequests: number
    incidents: number
    shifts: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventUsers?: boolean | EventCountOutputTypeCountEventUsersArgs
    sections?: boolean | EventCountOutputTypeCountSectionsArgs
    userRequests?: boolean | EventCountOutputTypeCountUserRequestsArgs
    incidents?: boolean | EventCountOutputTypeCountIncidentsArgs
    shifts?: boolean | EventCountOutputTypeCountShiftsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventUserListWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSectionWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountUserRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRequestWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventShiftDayWhereInput
  }


  /**
   * Count Type EventSectionCountOutputType
   */

  export type EventSectionCountOutputType = {
    files: number
  }

  export type EventSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | EventSectionCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * EventSectionCountOutputType without action
   */
  export type EventSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSectionCountOutputType
     */
    select?: EventSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventSectionCountOutputType without action
   */
  export type EventSectionCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionFileWhereInput
  }


  /**
   * Count Type EventShiftDayCountOutputType
   */

  export type EventShiftDayCountOutputType = {
    times: number
    requests: number
  }

  export type EventShiftDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    times?: boolean | EventShiftDayCountOutputTypeCountTimesArgs
    requests?: boolean | EventShiftDayCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * EventShiftDayCountOutputType without action
   */
  export type EventShiftDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDayCountOutputType
     */
    select?: EventShiftDayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventShiftDayCountOutputType without action
   */
  export type EventShiftDayCountOutputTypeCountTimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventShiftTimeWhereInput
  }

  /**
   * EventShiftDayCountOutputType without action
   */
  export type EventShiftDayCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    supervisotCount: number | null
    managerCount: number | null
    logisticCount: number | null
    driverCount: number | null
    dispatchCount: number | null
    assistantManagerCount: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    supervisotCount: number | null
    managerCount: number | null
    logisticCount: number | null
    driverCount: number | null
    dispatchCount: number | null
    assistantManagerCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    level: $Enums.UserLevel | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    city: string | null
    state: $Enums.USAState | null
    zipCode: string | null
    birthday: Date | null
    hireDate: Date | null
    phone: string | null
    active: boolean | null
    guardCard: boolean | null
    supervisotCount: number | null
    managerCount: number | null
    logisticCount: number | null
    driverCount: number | null
    dispatchCount: number | null
    assistantManagerCount: number | null
    contactName1: string | null
    contactPhone1: string | null
    contactName2: string | null
    contactPhone2: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    level: $Enums.UserLevel | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    city: string | null
    state: $Enums.USAState | null
    zipCode: string | null
    birthday: Date | null
    hireDate: Date | null
    phone: string | null
    active: boolean | null
    guardCard: boolean | null
    supervisotCount: number | null
    managerCount: number | null
    logisticCount: number | null
    driverCount: number | null
    dispatchCount: number | null
    assistantManagerCount: number | null
    contactName1: string | null
    contactPhone1: string | null
    contactName2: string | null
    contactPhone2: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    level: number
    name: number
    email: number
    password: number
    address: number
    city: number
    state: number
    zipCode: number
    birthday: number
    hireDate: number
    phone: number
    active: number
    guardCard: number
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: number
    contactPhone1: number
    contactName2: number
    contactPhone2: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    supervisotCount?: true
    managerCount?: true
    logisticCount?: true
    driverCount?: true
    dispatchCount?: true
    assistantManagerCount?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    supervisotCount?: true
    managerCount?: true
    logisticCount?: true
    driverCount?: true
    dispatchCount?: true
    assistantManagerCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    level?: true
    name?: true
    email?: true
    password?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    birthday?: true
    hireDate?: true
    phone?: true
    active?: true
    guardCard?: true
    supervisotCount?: true
    managerCount?: true
    logisticCount?: true
    driverCount?: true
    dispatchCount?: true
    assistantManagerCount?: true
    contactName1?: true
    contactPhone1?: true
    contactName2?: true
    contactPhone2?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    level?: true
    name?: true
    email?: true
    password?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    birthday?: true
    hireDate?: true
    phone?: true
    active?: true
    guardCard?: true
    supervisotCount?: true
    managerCount?: true
    logisticCount?: true
    driverCount?: true
    dispatchCount?: true
    assistantManagerCount?: true
    contactName1?: true
    contactPhone1?: true
    contactName2?: true
    contactPhone2?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    level?: true
    name?: true
    email?: true
    password?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    birthday?: true
    hireDate?: true
    phone?: true
    active?: true
    guardCard?: true
    supervisotCount?: true
    managerCount?: true
    logisticCount?: true
    driverCount?: true
    dispatchCount?: true
    assistantManagerCount?: true
    contactName1?: true
    contactPhone1?: true
    contactName2?: true
    contactPhone2?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date
    hireDate: Date
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    birthday?: boolean
    hireDate?: boolean
    phone?: boolean
    active?: boolean
    guardCard?: boolean
    supervisotCount?: boolean
    managerCount?: boolean
    logisticCount?: boolean
    driverCount?: boolean
    dispatchCount?: boolean
    assistantManagerCount?: boolean
    contactName1?: boolean
    contactPhone1?: boolean
    contactName2?: boolean
    contactPhone2?: boolean
    eventUsers?: boolean | User$eventUsersArgs<ExtArgs>
    eventRequests?: boolean | User$eventRequestsArgs<ExtArgs>
    incidents?: boolean | User$incidentsArgs<ExtArgs>
    shiftRequests?: boolean | User$shiftRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    birthday?: boolean
    hireDate?: boolean
    phone?: boolean
    active?: boolean
    guardCard?: boolean
    supervisotCount?: boolean
    managerCount?: boolean
    logisticCount?: boolean
    driverCount?: boolean
    dispatchCount?: boolean
    assistantManagerCount?: boolean
    contactName1?: boolean
    contactPhone1?: boolean
    contactName2?: boolean
    contactPhone2?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    birthday?: boolean
    hireDate?: boolean
    phone?: boolean
    active?: boolean
    guardCard?: boolean
    supervisotCount?: boolean
    managerCount?: boolean
    logisticCount?: boolean
    driverCount?: boolean
    dispatchCount?: boolean
    assistantManagerCount?: boolean
    contactName1?: boolean
    contactPhone1?: boolean
    contactName2?: boolean
    contactPhone2?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    level?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    birthday?: boolean
    hireDate?: boolean
    phone?: boolean
    active?: boolean
    guardCard?: boolean
    supervisotCount?: boolean
    managerCount?: boolean
    logisticCount?: boolean
    driverCount?: boolean
    dispatchCount?: boolean
    assistantManagerCount?: boolean
    contactName1?: boolean
    contactPhone1?: boolean
    contactName2?: boolean
    contactPhone2?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "level" | "name" | "email" | "password" | "address" | "city" | "state" | "zipCode" | "birthday" | "hireDate" | "phone" | "active" | "guardCard" | "supervisotCount" | "managerCount" | "logisticCount" | "driverCount" | "dispatchCount" | "assistantManagerCount" | "contactName1" | "contactPhone1" | "contactName2" | "contactPhone2", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventUsers?: boolean | User$eventUsersArgs<ExtArgs>
    eventRequests?: boolean | User$eventRequestsArgs<ExtArgs>
    incidents?: boolean | User$incidentsArgs<ExtArgs>
    shiftRequests?: boolean | User$shiftRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      eventUsers: Prisma.$EventUserListPayload<ExtArgs>[]
      eventRequests: Prisma.$EventRequestPayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
      shiftRequests: Prisma.$ShiftRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      level: $Enums.UserLevel
      name: string
      email: string
      password: string
      address: string
      city: string
      state: $Enums.USAState
      zipCode: string
      birthday: Date
      hireDate: Date
      phone: string
      active: boolean
      guardCard: boolean
      supervisotCount: number
      managerCount: number
      logisticCount: number
      driverCount: number
      dispatchCount: number
      assistantManagerCount: number
      contactName1: string
      contactPhone1: string
      contactName2: string
      contactPhone2: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventUsers<T extends User$eventUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$eventUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventRequests<T extends User$eventRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends User$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, User$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shiftRequests<T extends User$shiftRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$shiftRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly level: FieldRef<"User", 'UserLevel'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'USAState'>
    readonly zipCode: FieldRef<"User", 'String'>
    readonly birthday: FieldRef<"User", 'DateTime'>
    readonly hireDate: FieldRef<"User", 'DateTime'>
    readonly phone: FieldRef<"User", 'String'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly guardCard: FieldRef<"User", 'Boolean'>
    readonly supervisotCount: FieldRef<"User", 'Int'>
    readonly managerCount: FieldRef<"User", 'Int'>
    readonly logisticCount: FieldRef<"User", 'Int'>
    readonly driverCount: FieldRef<"User", 'Int'>
    readonly dispatchCount: FieldRef<"User", 'Int'>
    readonly assistantManagerCount: FieldRef<"User", 'Int'>
    readonly contactName1: FieldRef<"User", 'String'>
    readonly contactPhone1: FieldRef<"User", 'String'>
    readonly contactName2: FieldRef<"User", 'String'>
    readonly contactPhone2: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.eventUsers
   */
  export type User$eventUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
    where?: EventUserListWhereInput
    orderBy?: EventUserListOrderByWithRelationInput | EventUserListOrderByWithRelationInput[]
    cursor?: EventUserListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventUserListScalarFieldEnum | EventUserListScalarFieldEnum[]
  }

  /**
   * User.eventRequests
   */
  export type User$eventRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    where?: EventRequestWhereInput
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    cursor?: EventRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRequestScalarFieldEnum | EventRequestScalarFieldEnum[]
  }

  /**
   * User.incidents
   */
  export type User$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * User.shiftRequests
   */
  export type User$shiftRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
    where?: ShiftRequestWhereInput
    orderBy?: ShiftRequestOrderByWithRelationInput | ShiftRequestOrderByWithRelationInput[]
    cursor?: ShiftRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftRequestScalarFieldEnum | ShiftRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    state: $Enums.USAState | null
    zipCode: string | null
    address: string | null
    startDate: Date | null
    endDate: Date | null
    public: boolean | null
    done: boolean | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    state: $Enums.USAState | null
    zipCode: string | null
    address: string | null
    startDate: Date | null
    endDate: Date | null
    public: boolean | null
    done: boolean | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    city: number
    state: number
    zipCode: number
    address: number
    startDate: number
    endDate: number
    public: number
    done: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    state?: true
    zipCode?: true
    address?: true
    startDate?: true
    endDate?: true
    public?: true
    done?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    state?: true
    zipCode?: true
    address?: true
    startDate?: true
    endDate?: true
    public?: true
    done?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    state?: true
    zipCode?: true
    address?: true
    startDate?: true
    endDate?: true
    public?: true
    done?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date
    endDate: Date
    public: boolean
    done: boolean
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    address?: boolean
    startDate?: boolean
    endDate?: boolean
    public?: boolean
    done?: boolean
    eventUsers?: boolean | Event$eventUsersArgs<ExtArgs>
    sections?: boolean | Event$sectionsArgs<ExtArgs>
    userRequests?: boolean | Event$userRequestsArgs<ExtArgs>
    incidents?: boolean | Event$incidentsArgs<ExtArgs>
    shifts?: boolean | Event$shiftsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    address?: boolean
    startDate?: boolean
    endDate?: boolean
    public?: boolean
    done?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    address?: boolean
    startDate?: boolean
    endDate?: boolean
    public?: boolean
    done?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    address?: boolean
    startDate?: boolean
    endDate?: boolean
    public?: boolean
    done?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "state" | "zipCode" | "address" | "startDate" | "endDate" | "public" | "done", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventUsers?: boolean | Event$eventUsersArgs<ExtArgs>
    sections?: boolean | Event$sectionsArgs<ExtArgs>
    userRequests?: boolean | Event$userRequestsArgs<ExtArgs>
    incidents?: boolean | Event$incidentsArgs<ExtArgs>
    shifts?: boolean | Event$shiftsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      eventUsers: Prisma.$EventUserListPayload<ExtArgs>[]
      sections: Prisma.$EventSectionPayload<ExtArgs>[]
      userRequests: Prisma.$EventRequestPayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
      shifts: Prisma.$EventShiftDayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      city: string
      state: $Enums.USAState
      zipCode: string
      address: string
      startDate: Date
      endDate: Date
      public: boolean
      done: boolean
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventUsers<T extends Event$eventUsersArgs<ExtArgs> = {}>(args?: Subset<T, Event$eventUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sections<T extends Event$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRequests<T extends Event$userRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Event$userRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends Event$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Event$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shifts<T extends Event$shiftsArgs<ExtArgs> = {}>(args?: Subset<T, Event$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly name: FieldRef<"Event", 'String'>
    readonly city: FieldRef<"Event", 'String'>
    readonly state: FieldRef<"Event", 'USAState'>
    readonly zipCode: FieldRef<"Event", 'String'>
    readonly address: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly public: FieldRef<"Event", 'Boolean'>
    readonly done: FieldRef<"Event", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.eventUsers
   */
  export type Event$eventUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
    where?: EventUserListWhereInput
    orderBy?: EventUserListOrderByWithRelationInput | EventUserListOrderByWithRelationInput[]
    cursor?: EventUserListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventUserListScalarFieldEnum | EventUserListScalarFieldEnum[]
  }

  /**
   * Event.sections
   */
  export type Event$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionInclude<ExtArgs> | null
    where?: EventSectionWhereInput
    orderBy?: EventSectionOrderByWithRelationInput | EventSectionOrderByWithRelationInput[]
    cursor?: EventSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventSectionScalarFieldEnum | EventSectionScalarFieldEnum[]
  }

  /**
   * Event.userRequests
   */
  export type Event$userRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    where?: EventRequestWhereInput
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    cursor?: EventRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventRequestScalarFieldEnum | EventRequestScalarFieldEnum[]
  }

  /**
   * Event.incidents
   */
  export type Event$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Event.shifts
   */
  export type Event$shiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayInclude<ExtArgs> | null
    where?: EventShiftDayWhereInput
    orderBy?: EventShiftDayOrderByWithRelationInput | EventShiftDayOrderByWithRelationInput[]
    cursor?: EventShiftDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventShiftDayScalarFieldEnum | EventShiftDayScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventRequest
   */

  export type AggregateEventRequest = {
    _count: EventRequestCountAggregateOutputType | null
    _avg: EventRequestAvgAggregateOutputType | null
    _sum: EventRequestSumAggregateOutputType | null
    _min: EventRequestMinAggregateOutputType | null
    _max: EventRequestMaxAggregateOutputType | null
  }

  export type EventRequestAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type EventRequestSumAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type EventRequestMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
    status: $Enums.GenericRequestStatus | null
    isInvitation: boolean | null
  }

  export type EventRequestMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
    status: $Enums.GenericRequestStatus | null
    isInvitation: boolean | null
  }

  export type EventRequestCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    status: number
    isInvitation: number
    _all: number
  }


  export type EventRequestAvgAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type EventRequestSumAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type EventRequestMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    status?: true
    isInvitation?: true
  }

  export type EventRequestMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    status?: true
    isInvitation?: true
  }

  export type EventRequestCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    status?: true
    isInvitation?: true
    _all?: true
  }

  export type EventRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRequest to aggregate.
     */
    where?: EventRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRequests to fetch.
     */
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventRequests
    **/
    _count?: true | EventRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventRequestMaxAggregateInputType
  }

  export type GetEventRequestAggregateType<T extends EventRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateEventRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventRequest[P]>
      : GetScalarType<T[P], AggregateEventRequest[P]>
  }




  export type EventRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventRequestWhereInput
    orderBy?: EventRequestOrderByWithAggregationInput | EventRequestOrderByWithAggregationInput[]
    by: EventRequestScalarFieldEnum[] | EventRequestScalarFieldEnum
    having?: EventRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventRequestCountAggregateInputType | true
    _avg?: EventRequestAvgAggregateInputType
    _sum?: EventRequestSumAggregateInputType
    _min?: EventRequestMinAggregateInputType
    _max?: EventRequestMaxAggregateInputType
  }

  export type EventRequestGroupByOutputType = {
    id: number
    eventId: number
    userId: number
    status: $Enums.GenericRequestStatus
    isInvitation: boolean
    _count: EventRequestCountAggregateOutputType | null
    _avg: EventRequestAvgAggregateOutputType | null
    _sum: EventRequestSumAggregateOutputType | null
    _min: EventRequestMinAggregateOutputType | null
    _max: EventRequestMaxAggregateOutputType | null
  }

  type GetEventRequestGroupByPayload<T extends EventRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventRequestGroupByOutputType[P]>
            : GetScalarType<T[P], EventRequestGroupByOutputType[P]>
        }
      >
    >


  export type EventRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    status?: boolean
    isInvitation?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRequest"]>

  export type EventRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    status?: boolean
    isInvitation?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRequest"]>

  export type EventRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    status?: boolean
    isInvitation?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventRequest"]>

  export type EventRequestSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    status?: boolean
    isInvitation?: boolean
  }

  export type EventRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId" | "status" | "isInvitation", ExtArgs["result"]["eventRequest"]>
  export type EventRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventRequest"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      userId: number
      status: $Enums.GenericRequestStatus
      isInvitation: boolean
    }, ExtArgs["result"]["eventRequest"]>
    composites: {}
  }

  type EventRequestGetPayload<S extends boolean | null | undefined | EventRequestDefaultArgs> = $Result.GetResult<Prisma.$EventRequestPayload, S>

  type EventRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventRequestCountAggregateInputType | true
    }

  export interface EventRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventRequest'], meta: { name: 'EventRequest' } }
    /**
     * Find zero or one EventRequest that matches the filter.
     * @param {EventRequestFindUniqueArgs} args - Arguments to find a EventRequest
     * @example
     * // Get one EventRequest
     * const eventRequest = await prisma.eventRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventRequestFindUniqueArgs>(args: SelectSubset<T, EventRequestFindUniqueArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventRequestFindUniqueOrThrowArgs} args - Arguments to find a EventRequest
     * @example
     * // Get one EventRequest
     * const eventRequest = await prisma.eventRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, EventRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestFindFirstArgs} args - Arguments to find a EventRequest
     * @example
     * // Get one EventRequest
     * const eventRequest = await prisma.eventRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventRequestFindFirstArgs>(args?: SelectSubset<T, EventRequestFindFirstArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestFindFirstOrThrowArgs} args - Arguments to find a EventRequest
     * @example
     * // Get one EventRequest
     * const eventRequest = await prisma.eventRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, EventRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventRequests
     * const eventRequests = await prisma.eventRequest.findMany()
     * 
     * // Get first 10 EventRequests
     * const eventRequests = await prisma.eventRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventRequestWithIdOnly = await prisma.eventRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventRequestFindManyArgs>(args?: SelectSubset<T, EventRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventRequest.
     * @param {EventRequestCreateArgs} args - Arguments to create a EventRequest.
     * @example
     * // Create one EventRequest
     * const EventRequest = await prisma.eventRequest.create({
     *   data: {
     *     // ... data to create a EventRequest
     *   }
     * })
     * 
     */
    create<T extends EventRequestCreateArgs>(args: SelectSubset<T, EventRequestCreateArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventRequests.
     * @param {EventRequestCreateManyArgs} args - Arguments to create many EventRequests.
     * @example
     * // Create many EventRequests
     * const eventRequest = await prisma.eventRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventRequestCreateManyArgs>(args?: SelectSubset<T, EventRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventRequests and returns the data saved in the database.
     * @param {EventRequestCreateManyAndReturnArgs} args - Arguments to create many EventRequests.
     * @example
     * // Create many EventRequests
     * const eventRequest = await prisma.eventRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventRequests and only return the `id`
     * const eventRequestWithIdOnly = await prisma.eventRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, EventRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventRequest.
     * @param {EventRequestDeleteArgs} args - Arguments to delete one EventRequest.
     * @example
     * // Delete one EventRequest
     * const EventRequest = await prisma.eventRequest.delete({
     *   where: {
     *     // ... filter to delete one EventRequest
     *   }
     * })
     * 
     */
    delete<T extends EventRequestDeleteArgs>(args: SelectSubset<T, EventRequestDeleteArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventRequest.
     * @param {EventRequestUpdateArgs} args - Arguments to update one EventRequest.
     * @example
     * // Update one EventRequest
     * const eventRequest = await prisma.eventRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventRequestUpdateArgs>(args: SelectSubset<T, EventRequestUpdateArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventRequests.
     * @param {EventRequestDeleteManyArgs} args - Arguments to filter EventRequests to delete.
     * @example
     * // Delete a few EventRequests
     * const { count } = await prisma.eventRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventRequestDeleteManyArgs>(args?: SelectSubset<T, EventRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventRequests
     * const eventRequest = await prisma.eventRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventRequestUpdateManyArgs>(args: SelectSubset<T, EventRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventRequests and returns the data updated in the database.
     * @param {EventRequestUpdateManyAndReturnArgs} args - Arguments to update many EventRequests.
     * @example
     * // Update many EventRequests
     * const eventRequest = await prisma.eventRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventRequests and only return the `id`
     * const eventRequestWithIdOnly = await prisma.eventRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, EventRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventRequest.
     * @param {EventRequestUpsertArgs} args - Arguments to update or create a EventRequest.
     * @example
     * // Update or create a EventRequest
     * const eventRequest = await prisma.eventRequest.upsert({
     *   create: {
     *     // ... data to create a EventRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventRequest we want to update
     *   }
     * })
     */
    upsert<T extends EventRequestUpsertArgs>(args: SelectSubset<T, EventRequestUpsertArgs<ExtArgs>>): Prisma__EventRequestClient<$Result.GetResult<Prisma.$EventRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestCountArgs} args - Arguments to filter EventRequests to count.
     * @example
     * // Count the number of EventRequests
     * const count = await prisma.eventRequest.count({
     *   where: {
     *     // ... the filter for the EventRequests we want to count
     *   }
     * })
    **/
    count<T extends EventRequestCountArgs>(
      args?: Subset<T, EventRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventRequestAggregateArgs>(args: Subset<T, EventRequestAggregateArgs>): Prisma.PrismaPromise<GetEventRequestAggregateType<T>>

    /**
     * Group by EventRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventRequestGroupByArgs['orderBy'] }
        : { orderBy?: EventRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventRequest model
   */
  readonly fields: EventRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventRequest model
   */
  interface EventRequestFieldRefs {
    readonly id: FieldRef<"EventRequest", 'Int'>
    readonly eventId: FieldRef<"EventRequest", 'Int'>
    readonly userId: FieldRef<"EventRequest", 'Int'>
    readonly status: FieldRef<"EventRequest", 'GenericRequestStatus'>
    readonly isInvitation: FieldRef<"EventRequest", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EventRequest findUnique
   */
  export type EventRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter, which EventRequest to fetch.
     */
    where: EventRequestWhereUniqueInput
  }

  /**
   * EventRequest findUniqueOrThrow
   */
  export type EventRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter, which EventRequest to fetch.
     */
    where: EventRequestWhereUniqueInput
  }

  /**
   * EventRequest findFirst
   */
  export type EventRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter, which EventRequest to fetch.
     */
    where?: EventRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRequests to fetch.
     */
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRequests.
     */
    cursor?: EventRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRequests.
     */
    distinct?: EventRequestScalarFieldEnum | EventRequestScalarFieldEnum[]
  }

  /**
   * EventRequest findFirstOrThrow
   */
  export type EventRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter, which EventRequest to fetch.
     */
    where?: EventRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRequests to fetch.
     */
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventRequests.
     */
    cursor?: EventRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventRequests.
     */
    distinct?: EventRequestScalarFieldEnum | EventRequestScalarFieldEnum[]
  }

  /**
   * EventRequest findMany
   */
  export type EventRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter, which EventRequests to fetch.
     */
    where?: EventRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventRequests to fetch.
     */
    orderBy?: EventRequestOrderByWithRelationInput | EventRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventRequests.
     */
    cursor?: EventRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventRequests.
     */
    skip?: number
    distinct?: EventRequestScalarFieldEnum | EventRequestScalarFieldEnum[]
  }

  /**
   * EventRequest create
   */
  export type EventRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a EventRequest.
     */
    data: XOR<EventRequestCreateInput, EventRequestUncheckedCreateInput>
  }

  /**
   * EventRequest createMany
   */
  export type EventRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventRequests.
     */
    data: EventRequestCreateManyInput | EventRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventRequest createManyAndReturn
   */
  export type EventRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * The data used to create many EventRequests.
     */
    data: EventRequestCreateManyInput | EventRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRequest update
   */
  export type EventRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a EventRequest.
     */
    data: XOR<EventRequestUpdateInput, EventRequestUncheckedUpdateInput>
    /**
     * Choose, which EventRequest to update.
     */
    where: EventRequestWhereUniqueInput
  }

  /**
   * EventRequest updateMany
   */
  export type EventRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventRequests.
     */
    data: XOR<EventRequestUpdateManyMutationInput, EventRequestUncheckedUpdateManyInput>
    /**
     * Filter which EventRequests to update
     */
    where?: EventRequestWhereInput
    /**
     * Limit how many EventRequests to update.
     */
    limit?: number
  }

  /**
   * EventRequest updateManyAndReturn
   */
  export type EventRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * The data used to update EventRequests.
     */
    data: XOR<EventRequestUpdateManyMutationInput, EventRequestUncheckedUpdateManyInput>
    /**
     * Filter which EventRequests to update
     */
    where?: EventRequestWhereInput
    /**
     * Limit how many EventRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventRequest upsert
   */
  export type EventRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the EventRequest to update in case it exists.
     */
    where: EventRequestWhereUniqueInput
    /**
     * In case the EventRequest found by the `where` argument doesn't exist, create a new EventRequest with this data.
     */
    create: XOR<EventRequestCreateInput, EventRequestUncheckedCreateInput>
    /**
     * In case the EventRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventRequestUpdateInput, EventRequestUncheckedUpdateInput>
  }

  /**
   * EventRequest delete
   */
  export type EventRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
    /**
     * Filter which EventRequest to delete.
     */
    where: EventRequestWhereUniqueInput
  }

  /**
   * EventRequest deleteMany
   */
  export type EventRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventRequests to delete
     */
    where?: EventRequestWhereInput
    /**
     * Limit how many EventRequests to delete.
     */
    limit?: number
  }

  /**
   * EventRequest without action
   */
  export type EventRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRequest
     */
    select?: EventRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventRequest
     */
    omit?: EventRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventRequestInclude<ExtArgs> | null
  }


  /**
   * Model EventSection
   */

  export type AggregateEventSection = {
    _count: EventSectionCountAggregateOutputType | null
    _avg: EventSectionAvgAggregateOutputType | null
    _sum: EventSectionSumAggregateOutputType | null
    _min: EventSectionMinAggregateOutputType | null
    _max: EventSectionMaxAggregateOutputType | null
  }

  export type EventSectionAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type EventSectionSumAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type EventSectionMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    sectionName: string | null
    description: string | null
  }

  export type EventSectionMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    sectionName: string | null
    description: string | null
  }

  export type EventSectionCountAggregateOutputType = {
    id: number
    eventId: number
    sectionName: number
    description: number
    _all: number
  }


  export type EventSectionAvgAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type EventSectionSumAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type EventSectionMinAggregateInputType = {
    id?: true
    eventId?: true
    sectionName?: true
    description?: true
  }

  export type EventSectionMaxAggregateInputType = {
    id?: true
    eventId?: true
    sectionName?: true
    description?: true
  }

  export type EventSectionCountAggregateInputType = {
    id?: true
    eventId?: true
    sectionName?: true
    description?: true
    _all?: true
  }

  export type EventSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSection to aggregate.
     */
    where?: EventSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSections to fetch.
     */
    orderBy?: EventSectionOrderByWithRelationInput | EventSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventSections
    **/
    _count?: true | EventSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventSectionMaxAggregateInputType
  }

  export type GetEventSectionAggregateType<T extends EventSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateEventSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventSection[P]>
      : GetScalarType<T[P], AggregateEventSection[P]>
  }




  export type EventSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSectionWhereInput
    orderBy?: EventSectionOrderByWithAggregationInput | EventSectionOrderByWithAggregationInput[]
    by: EventSectionScalarFieldEnum[] | EventSectionScalarFieldEnum
    having?: EventSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventSectionCountAggregateInputType | true
    _avg?: EventSectionAvgAggregateInputType
    _sum?: EventSectionSumAggregateInputType
    _min?: EventSectionMinAggregateInputType
    _max?: EventSectionMaxAggregateInputType
  }

  export type EventSectionGroupByOutputType = {
    id: number
    eventId: number
    sectionName: string
    description: string
    _count: EventSectionCountAggregateOutputType | null
    _avg: EventSectionAvgAggregateOutputType | null
    _sum: EventSectionSumAggregateOutputType | null
    _min: EventSectionMinAggregateOutputType | null
    _max: EventSectionMaxAggregateOutputType | null
  }

  type GetEventSectionGroupByPayload<T extends EventSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventSectionGroupByOutputType[P]>
            : GetScalarType<T[P], EventSectionGroupByOutputType[P]>
        }
      >
    >


  export type EventSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    sectionName?: boolean
    description?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    files?: boolean | EventSection$filesArgs<ExtArgs>
    _count?: boolean | EventSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSection"]>

  export type EventSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    sectionName?: boolean
    description?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSection"]>

  export type EventSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    sectionName?: boolean
    description?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSection"]>

  export type EventSectionSelectScalar = {
    id?: boolean
    eventId?: boolean
    sectionName?: boolean
    description?: boolean
  }

  export type EventSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "sectionName" | "description", ExtArgs["result"]["eventSection"]>
  export type EventSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    files?: boolean | EventSection$filesArgs<ExtArgs>
    _count?: boolean | EventSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventSection"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      files: Prisma.$SectionFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      sectionName: string
      description: string
    }, ExtArgs["result"]["eventSection"]>
    composites: {}
  }

  type EventSectionGetPayload<S extends boolean | null | undefined | EventSectionDefaultArgs> = $Result.GetResult<Prisma.$EventSectionPayload, S>

  type EventSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventSectionCountAggregateInputType | true
    }

  export interface EventSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventSection'], meta: { name: 'EventSection' } }
    /**
     * Find zero or one EventSection that matches the filter.
     * @param {EventSectionFindUniqueArgs} args - Arguments to find a EventSection
     * @example
     * // Get one EventSection
     * const eventSection = await prisma.eventSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventSectionFindUniqueArgs>(args: SelectSubset<T, EventSectionFindUniqueArgs<ExtArgs>>): Prisma__EventSectionClient<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventSectionFindUniqueOrThrowArgs} args - Arguments to find a EventSection
     * @example
     * // Get one EventSection
     * const eventSection = await prisma.eventSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, EventSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventSectionClient<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSectionFindFirstArgs} args - Arguments to find a EventSection
     * @example
     * // Get one EventSection
     * const eventSection = await prisma.eventSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventSectionFindFirstArgs>(args?: SelectSubset<T, EventSectionFindFirstArgs<ExtArgs>>): Prisma__EventSectionClient<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSectionFindFirstOrThrowArgs} args - Arguments to find a EventSection
     * @example
     * // Get one EventSection
     * const eventSection = await prisma.eventSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, EventSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventSectionClient<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventSections
     * const eventSections = await prisma.eventSection.findMany()
     * 
     * // Get first 10 EventSections
     * const eventSections = await prisma.eventSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventSectionWithIdOnly = await prisma.eventSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventSectionFindManyArgs>(args?: SelectSubset<T, EventSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventSection.
     * @param {EventSectionCreateArgs} args - Arguments to create a EventSection.
     * @example
     * // Create one EventSection
     * const EventSection = await prisma.eventSection.create({
     *   data: {
     *     // ... data to create a EventSection
     *   }
     * })
     * 
     */
    create<T extends EventSectionCreateArgs>(args: SelectSubset<T, EventSectionCreateArgs<ExtArgs>>): Prisma__EventSectionClient<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventSections.
     * @param {EventSectionCreateManyArgs} args - Arguments to create many EventSections.
     * @example
     * // Create many EventSections
     * const eventSection = await prisma.eventSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventSectionCreateManyArgs>(args?: SelectSubset<T, EventSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventSections and returns the data saved in the database.
     * @param {EventSectionCreateManyAndReturnArgs} args - Arguments to create many EventSections.
     * @example
     * // Create many EventSections
     * const eventSection = await prisma.eventSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventSections and only return the `id`
     * const eventSectionWithIdOnly = await prisma.eventSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, EventSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventSection.
     * @param {EventSectionDeleteArgs} args - Arguments to delete one EventSection.
     * @example
     * // Delete one EventSection
     * const EventSection = await prisma.eventSection.delete({
     *   where: {
     *     // ... filter to delete one EventSection
     *   }
     * })
     * 
     */
    delete<T extends EventSectionDeleteArgs>(args: SelectSubset<T, EventSectionDeleteArgs<ExtArgs>>): Prisma__EventSectionClient<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventSection.
     * @param {EventSectionUpdateArgs} args - Arguments to update one EventSection.
     * @example
     * // Update one EventSection
     * const eventSection = await prisma.eventSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventSectionUpdateArgs>(args: SelectSubset<T, EventSectionUpdateArgs<ExtArgs>>): Prisma__EventSectionClient<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventSections.
     * @param {EventSectionDeleteManyArgs} args - Arguments to filter EventSections to delete.
     * @example
     * // Delete a few EventSections
     * const { count } = await prisma.eventSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventSectionDeleteManyArgs>(args?: SelectSubset<T, EventSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventSections
     * const eventSection = await prisma.eventSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventSectionUpdateManyArgs>(args: SelectSubset<T, EventSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventSections and returns the data updated in the database.
     * @param {EventSectionUpdateManyAndReturnArgs} args - Arguments to update many EventSections.
     * @example
     * // Update many EventSections
     * const eventSection = await prisma.eventSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventSections and only return the `id`
     * const eventSectionWithIdOnly = await prisma.eventSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, EventSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventSection.
     * @param {EventSectionUpsertArgs} args - Arguments to update or create a EventSection.
     * @example
     * // Update or create a EventSection
     * const eventSection = await prisma.eventSection.upsert({
     *   create: {
     *     // ... data to create a EventSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventSection we want to update
     *   }
     * })
     */
    upsert<T extends EventSectionUpsertArgs>(args: SelectSubset<T, EventSectionUpsertArgs<ExtArgs>>): Prisma__EventSectionClient<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSectionCountArgs} args - Arguments to filter EventSections to count.
     * @example
     * // Count the number of EventSections
     * const count = await prisma.eventSection.count({
     *   where: {
     *     // ... the filter for the EventSections we want to count
     *   }
     * })
    **/
    count<T extends EventSectionCountArgs>(
      args?: Subset<T, EventSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventSectionAggregateArgs>(args: Subset<T, EventSectionAggregateArgs>): Prisma.PrismaPromise<GetEventSectionAggregateType<T>>

    /**
     * Group by EventSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventSectionGroupByArgs['orderBy'] }
        : { orderBy?: EventSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventSection model
   */
  readonly fields: EventSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    files<T extends EventSection$filesArgs<ExtArgs> = {}>(args?: Subset<T, EventSection$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventSection model
   */
  interface EventSectionFieldRefs {
    readonly id: FieldRef<"EventSection", 'Int'>
    readonly eventId: FieldRef<"EventSection", 'Int'>
    readonly sectionName: FieldRef<"EventSection", 'String'>
    readonly description: FieldRef<"EventSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventSection findUnique
   */
  export type EventSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionInclude<ExtArgs> | null
    /**
     * Filter, which EventSection to fetch.
     */
    where: EventSectionWhereUniqueInput
  }

  /**
   * EventSection findUniqueOrThrow
   */
  export type EventSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionInclude<ExtArgs> | null
    /**
     * Filter, which EventSection to fetch.
     */
    where: EventSectionWhereUniqueInput
  }

  /**
   * EventSection findFirst
   */
  export type EventSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionInclude<ExtArgs> | null
    /**
     * Filter, which EventSection to fetch.
     */
    where?: EventSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSections to fetch.
     */
    orderBy?: EventSectionOrderByWithRelationInput | EventSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSections.
     */
    cursor?: EventSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSections.
     */
    distinct?: EventSectionScalarFieldEnum | EventSectionScalarFieldEnum[]
  }

  /**
   * EventSection findFirstOrThrow
   */
  export type EventSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionInclude<ExtArgs> | null
    /**
     * Filter, which EventSection to fetch.
     */
    where?: EventSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSections to fetch.
     */
    orderBy?: EventSectionOrderByWithRelationInput | EventSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSections.
     */
    cursor?: EventSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSections.
     */
    distinct?: EventSectionScalarFieldEnum | EventSectionScalarFieldEnum[]
  }

  /**
   * EventSection findMany
   */
  export type EventSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionInclude<ExtArgs> | null
    /**
     * Filter, which EventSections to fetch.
     */
    where?: EventSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSections to fetch.
     */
    orderBy?: EventSectionOrderByWithRelationInput | EventSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventSections.
     */
    cursor?: EventSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSections.
     */
    skip?: number
    distinct?: EventSectionScalarFieldEnum | EventSectionScalarFieldEnum[]
  }

  /**
   * EventSection create
   */
  export type EventSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a EventSection.
     */
    data: XOR<EventSectionCreateInput, EventSectionUncheckedCreateInput>
  }

  /**
   * EventSection createMany
   */
  export type EventSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventSections.
     */
    data: EventSectionCreateManyInput | EventSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventSection createManyAndReturn
   */
  export type EventSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * The data used to create many EventSections.
     */
    data: EventSectionCreateManyInput | EventSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventSection update
   */
  export type EventSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a EventSection.
     */
    data: XOR<EventSectionUpdateInput, EventSectionUncheckedUpdateInput>
    /**
     * Choose, which EventSection to update.
     */
    where: EventSectionWhereUniqueInput
  }

  /**
   * EventSection updateMany
   */
  export type EventSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventSections.
     */
    data: XOR<EventSectionUpdateManyMutationInput, EventSectionUncheckedUpdateManyInput>
    /**
     * Filter which EventSections to update
     */
    where?: EventSectionWhereInput
    /**
     * Limit how many EventSections to update.
     */
    limit?: number
  }

  /**
   * EventSection updateManyAndReturn
   */
  export type EventSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * The data used to update EventSections.
     */
    data: XOR<EventSectionUpdateManyMutationInput, EventSectionUncheckedUpdateManyInput>
    /**
     * Filter which EventSections to update
     */
    where?: EventSectionWhereInput
    /**
     * Limit how many EventSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventSection upsert
   */
  export type EventSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the EventSection to update in case it exists.
     */
    where: EventSectionWhereUniqueInput
    /**
     * In case the EventSection found by the `where` argument doesn't exist, create a new EventSection with this data.
     */
    create: XOR<EventSectionCreateInput, EventSectionUncheckedCreateInput>
    /**
     * In case the EventSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventSectionUpdateInput, EventSectionUncheckedUpdateInput>
  }

  /**
   * EventSection delete
   */
  export type EventSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionInclude<ExtArgs> | null
    /**
     * Filter which EventSection to delete.
     */
    where: EventSectionWhereUniqueInput
  }

  /**
   * EventSection deleteMany
   */
  export type EventSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSections to delete
     */
    where?: EventSectionWhereInput
    /**
     * Limit how many EventSections to delete.
     */
    limit?: number
  }

  /**
   * EventSection.files
   */
  export type EventSection$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileInclude<ExtArgs> | null
    where?: SectionFileWhereInput
    orderBy?: SectionFileOrderByWithRelationInput | SectionFileOrderByWithRelationInput[]
    cursor?: SectionFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionFileScalarFieldEnum | SectionFileScalarFieldEnum[]
  }

  /**
   * EventSection without action
   */
  export type EventSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSection
     */
    select?: EventSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSection
     */
    omit?: EventSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSectionInclude<ExtArgs> | null
  }


  /**
   * Model SectionFile
   */

  export type AggregateSectionFile = {
    _count: SectionFileCountAggregateOutputType | null
    _avg: SectionFileAvgAggregateOutputType | null
    _sum: SectionFileSumAggregateOutputType | null
    _min: SectionFileMinAggregateOutputType | null
    _max: SectionFileMaxAggregateOutputType | null
  }

  export type SectionFileAvgAggregateOutputType = {
    id: number | null
    sectionId: number | null
  }

  export type SectionFileSumAggregateOutputType = {
    id: number | null
    sectionId: number | null
  }

  export type SectionFileMinAggregateOutputType = {
    id: number | null
    sectionId: number | null
    name: string | null
    dataBytes: Uint8Array | null
  }

  export type SectionFileMaxAggregateOutputType = {
    id: number | null
    sectionId: number | null
    name: string | null
    dataBytes: Uint8Array | null
  }

  export type SectionFileCountAggregateOutputType = {
    id: number
    sectionId: number
    name: number
    dataBytes: number
    _all: number
  }


  export type SectionFileAvgAggregateInputType = {
    id?: true
    sectionId?: true
  }

  export type SectionFileSumAggregateInputType = {
    id?: true
    sectionId?: true
  }

  export type SectionFileMinAggregateInputType = {
    id?: true
    sectionId?: true
    name?: true
    dataBytes?: true
  }

  export type SectionFileMaxAggregateInputType = {
    id?: true
    sectionId?: true
    name?: true
    dataBytes?: true
  }

  export type SectionFileCountAggregateInputType = {
    id?: true
    sectionId?: true
    name?: true
    dataBytes?: true
    _all?: true
  }

  export type SectionFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionFile to aggregate.
     */
    where?: SectionFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionFiles to fetch.
     */
    orderBy?: SectionFileOrderByWithRelationInput | SectionFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SectionFiles
    **/
    _count?: true | SectionFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionFileMaxAggregateInputType
  }

  export type GetSectionFileAggregateType<T extends SectionFileAggregateArgs> = {
        [P in keyof T & keyof AggregateSectionFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSectionFile[P]>
      : GetScalarType<T[P], AggregateSectionFile[P]>
  }




  export type SectionFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionFileWhereInput
    orderBy?: SectionFileOrderByWithAggregationInput | SectionFileOrderByWithAggregationInput[]
    by: SectionFileScalarFieldEnum[] | SectionFileScalarFieldEnum
    having?: SectionFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionFileCountAggregateInputType | true
    _avg?: SectionFileAvgAggregateInputType
    _sum?: SectionFileSumAggregateInputType
    _min?: SectionFileMinAggregateInputType
    _max?: SectionFileMaxAggregateInputType
  }

  export type SectionFileGroupByOutputType = {
    id: number
    sectionId: number
    name: string
    dataBytes: Uint8Array
    _count: SectionFileCountAggregateOutputType | null
    _avg: SectionFileAvgAggregateOutputType | null
    _sum: SectionFileSumAggregateOutputType | null
    _min: SectionFileMinAggregateOutputType | null
    _max: SectionFileMaxAggregateOutputType | null
  }

  type GetSectionFileGroupByPayload<T extends SectionFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionFileGroupByOutputType[P]>
            : GetScalarType<T[P], SectionFileGroupByOutputType[P]>
        }
      >
    >


  export type SectionFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    name?: boolean
    dataBytes?: boolean
    section?: boolean | EventSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionFile"]>

  export type SectionFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    name?: boolean
    dataBytes?: boolean
    section?: boolean | EventSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionFile"]>

  export type SectionFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    name?: boolean
    dataBytes?: boolean
    section?: boolean | EventSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionFile"]>

  export type SectionFileSelectScalar = {
    id?: boolean
    sectionId?: boolean
    name?: boolean
    dataBytes?: boolean
  }

  export type SectionFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionId" | "name" | "dataBytes", ExtArgs["result"]["sectionFile"]>
  export type SectionFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | EventSectionDefaultArgs<ExtArgs>
  }
  export type SectionFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | EventSectionDefaultArgs<ExtArgs>
  }
  export type SectionFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | EventSectionDefaultArgs<ExtArgs>
  }

  export type $SectionFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectionFile"
    objects: {
      section: Prisma.$EventSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sectionId: number
      name: string
      dataBytes: Uint8Array
    }, ExtArgs["result"]["sectionFile"]>
    composites: {}
  }

  type SectionFileGetPayload<S extends boolean | null | undefined | SectionFileDefaultArgs> = $Result.GetResult<Prisma.$SectionFilePayload, S>

  type SectionFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionFileCountAggregateInputType | true
    }

  export interface SectionFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SectionFile'], meta: { name: 'SectionFile' } }
    /**
     * Find zero or one SectionFile that matches the filter.
     * @param {SectionFileFindUniqueArgs} args - Arguments to find a SectionFile
     * @example
     * // Get one SectionFile
     * const sectionFile = await prisma.sectionFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFileFindUniqueArgs>(args: SelectSubset<T, SectionFileFindUniqueArgs<ExtArgs>>): Prisma__SectionFileClient<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SectionFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFileFindUniqueOrThrowArgs} args - Arguments to find a SectionFile
     * @example
     * // Get one SectionFile
     * const sectionFile = await prisma.sectionFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFileFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionFileClient<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFileFindFirstArgs} args - Arguments to find a SectionFile
     * @example
     * // Get one SectionFile
     * const sectionFile = await prisma.sectionFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFileFindFirstArgs>(args?: SelectSubset<T, SectionFileFindFirstArgs<ExtArgs>>): Prisma__SectionFileClient<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFileFindFirstOrThrowArgs} args - Arguments to find a SectionFile
     * @example
     * // Get one SectionFile
     * const sectionFile = await prisma.sectionFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFileFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionFileClient<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SectionFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SectionFiles
     * const sectionFiles = await prisma.sectionFile.findMany()
     * 
     * // Get first 10 SectionFiles
     * const sectionFiles = await prisma.sectionFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionFileWithIdOnly = await prisma.sectionFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFileFindManyArgs>(args?: SelectSubset<T, SectionFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SectionFile.
     * @param {SectionFileCreateArgs} args - Arguments to create a SectionFile.
     * @example
     * // Create one SectionFile
     * const SectionFile = await prisma.sectionFile.create({
     *   data: {
     *     // ... data to create a SectionFile
     *   }
     * })
     * 
     */
    create<T extends SectionFileCreateArgs>(args: SelectSubset<T, SectionFileCreateArgs<ExtArgs>>): Prisma__SectionFileClient<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SectionFiles.
     * @param {SectionFileCreateManyArgs} args - Arguments to create many SectionFiles.
     * @example
     * // Create many SectionFiles
     * const sectionFile = await prisma.sectionFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionFileCreateManyArgs>(args?: SelectSubset<T, SectionFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SectionFiles and returns the data saved in the database.
     * @param {SectionFileCreateManyAndReturnArgs} args - Arguments to create many SectionFiles.
     * @example
     * // Create many SectionFiles
     * const sectionFile = await prisma.sectionFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SectionFiles and only return the `id`
     * const sectionFileWithIdOnly = await prisma.sectionFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionFileCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SectionFile.
     * @param {SectionFileDeleteArgs} args - Arguments to delete one SectionFile.
     * @example
     * // Delete one SectionFile
     * const SectionFile = await prisma.sectionFile.delete({
     *   where: {
     *     // ... filter to delete one SectionFile
     *   }
     * })
     * 
     */
    delete<T extends SectionFileDeleteArgs>(args: SelectSubset<T, SectionFileDeleteArgs<ExtArgs>>): Prisma__SectionFileClient<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SectionFile.
     * @param {SectionFileUpdateArgs} args - Arguments to update one SectionFile.
     * @example
     * // Update one SectionFile
     * const sectionFile = await prisma.sectionFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionFileUpdateArgs>(args: SelectSubset<T, SectionFileUpdateArgs<ExtArgs>>): Prisma__SectionFileClient<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SectionFiles.
     * @param {SectionFileDeleteManyArgs} args - Arguments to filter SectionFiles to delete.
     * @example
     * // Delete a few SectionFiles
     * const { count } = await prisma.sectionFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionFileDeleteManyArgs>(args?: SelectSubset<T, SectionFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SectionFiles
     * const sectionFile = await prisma.sectionFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionFileUpdateManyArgs>(args: SelectSubset<T, SectionFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionFiles and returns the data updated in the database.
     * @param {SectionFileUpdateManyAndReturnArgs} args - Arguments to update many SectionFiles.
     * @example
     * // Update many SectionFiles
     * const sectionFile = await prisma.sectionFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SectionFiles and only return the `id`
     * const sectionFileWithIdOnly = await prisma.sectionFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionFileUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SectionFile.
     * @param {SectionFileUpsertArgs} args - Arguments to update or create a SectionFile.
     * @example
     * // Update or create a SectionFile
     * const sectionFile = await prisma.sectionFile.upsert({
     *   create: {
     *     // ... data to create a SectionFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SectionFile we want to update
     *   }
     * })
     */
    upsert<T extends SectionFileUpsertArgs>(args: SelectSubset<T, SectionFileUpsertArgs<ExtArgs>>): Prisma__SectionFileClient<$Result.GetResult<Prisma.$SectionFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SectionFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFileCountArgs} args - Arguments to filter SectionFiles to count.
     * @example
     * // Count the number of SectionFiles
     * const count = await prisma.sectionFile.count({
     *   where: {
     *     // ... the filter for the SectionFiles we want to count
     *   }
     * })
    **/
    count<T extends SectionFileCountArgs>(
      args?: Subset<T, SectionFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SectionFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionFileAggregateArgs>(args: Subset<T, SectionFileAggregateArgs>): Prisma.PrismaPromise<GetSectionFileAggregateType<T>>

    /**
     * Group by SectionFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionFileGroupByArgs['orderBy'] }
        : { orderBy?: SectionFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SectionFile model
   */
  readonly fields: SectionFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SectionFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends EventSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventSectionDefaultArgs<ExtArgs>>): Prisma__EventSectionClient<$Result.GetResult<Prisma.$EventSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SectionFile model
   */
  interface SectionFileFieldRefs {
    readonly id: FieldRef<"SectionFile", 'Int'>
    readonly sectionId: FieldRef<"SectionFile", 'Int'>
    readonly name: FieldRef<"SectionFile", 'String'>
    readonly dataBytes: FieldRef<"SectionFile", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * SectionFile findUnique
   */
  export type SectionFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileInclude<ExtArgs> | null
    /**
     * Filter, which SectionFile to fetch.
     */
    where: SectionFileWhereUniqueInput
  }

  /**
   * SectionFile findUniqueOrThrow
   */
  export type SectionFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileInclude<ExtArgs> | null
    /**
     * Filter, which SectionFile to fetch.
     */
    where: SectionFileWhereUniqueInput
  }

  /**
   * SectionFile findFirst
   */
  export type SectionFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileInclude<ExtArgs> | null
    /**
     * Filter, which SectionFile to fetch.
     */
    where?: SectionFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionFiles to fetch.
     */
    orderBy?: SectionFileOrderByWithRelationInput | SectionFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionFiles.
     */
    cursor?: SectionFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionFiles.
     */
    distinct?: SectionFileScalarFieldEnum | SectionFileScalarFieldEnum[]
  }

  /**
   * SectionFile findFirstOrThrow
   */
  export type SectionFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileInclude<ExtArgs> | null
    /**
     * Filter, which SectionFile to fetch.
     */
    where?: SectionFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionFiles to fetch.
     */
    orderBy?: SectionFileOrderByWithRelationInput | SectionFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionFiles.
     */
    cursor?: SectionFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionFiles.
     */
    distinct?: SectionFileScalarFieldEnum | SectionFileScalarFieldEnum[]
  }

  /**
   * SectionFile findMany
   */
  export type SectionFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileInclude<ExtArgs> | null
    /**
     * Filter, which SectionFiles to fetch.
     */
    where?: SectionFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionFiles to fetch.
     */
    orderBy?: SectionFileOrderByWithRelationInput | SectionFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SectionFiles.
     */
    cursor?: SectionFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionFiles.
     */
    skip?: number
    distinct?: SectionFileScalarFieldEnum | SectionFileScalarFieldEnum[]
  }

  /**
   * SectionFile create
   */
  export type SectionFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileInclude<ExtArgs> | null
    /**
     * The data needed to create a SectionFile.
     */
    data: XOR<SectionFileCreateInput, SectionFileUncheckedCreateInput>
  }

  /**
   * SectionFile createMany
   */
  export type SectionFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SectionFiles.
     */
    data: SectionFileCreateManyInput | SectionFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectionFile createManyAndReturn
   */
  export type SectionFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * The data used to create many SectionFiles.
     */
    data: SectionFileCreateManyInput | SectionFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionFile update
   */
  export type SectionFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileInclude<ExtArgs> | null
    /**
     * The data needed to update a SectionFile.
     */
    data: XOR<SectionFileUpdateInput, SectionFileUncheckedUpdateInput>
    /**
     * Choose, which SectionFile to update.
     */
    where: SectionFileWhereUniqueInput
  }

  /**
   * SectionFile updateMany
   */
  export type SectionFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SectionFiles.
     */
    data: XOR<SectionFileUpdateManyMutationInput, SectionFileUncheckedUpdateManyInput>
    /**
     * Filter which SectionFiles to update
     */
    where?: SectionFileWhereInput
    /**
     * Limit how many SectionFiles to update.
     */
    limit?: number
  }

  /**
   * SectionFile updateManyAndReturn
   */
  export type SectionFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * The data used to update SectionFiles.
     */
    data: XOR<SectionFileUpdateManyMutationInput, SectionFileUncheckedUpdateManyInput>
    /**
     * Filter which SectionFiles to update
     */
    where?: SectionFileWhereInput
    /**
     * Limit how many SectionFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionFile upsert
   */
  export type SectionFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileInclude<ExtArgs> | null
    /**
     * The filter to search for the SectionFile to update in case it exists.
     */
    where: SectionFileWhereUniqueInput
    /**
     * In case the SectionFile found by the `where` argument doesn't exist, create a new SectionFile with this data.
     */
    create: XOR<SectionFileCreateInput, SectionFileUncheckedCreateInput>
    /**
     * In case the SectionFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionFileUpdateInput, SectionFileUncheckedUpdateInput>
  }

  /**
   * SectionFile delete
   */
  export type SectionFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileInclude<ExtArgs> | null
    /**
     * Filter which SectionFile to delete.
     */
    where: SectionFileWhereUniqueInput
  }

  /**
   * SectionFile deleteMany
   */
  export type SectionFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionFiles to delete
     */
    where?: SectionFileWhereInput
    /**
     * Limit how many SectionFiles to delete.
     */
    limit?: number
  }

  /**
   * SectionFile without action
   */
  export type SectionFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionFile
     */
    select?: SectionFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionFile
     */
    omit?: SectionFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionFileInclude<ExtArgs> | null
  }


  /**
   * Model EventUserList
   */

  export type AggregateEventUserList = {
    _count: EventUserListCountAggregateOutputType | null
    _avg: EventUserListAvgAggregateOutputType | null
    _sum: EventUserListSumAggregateOutputType | null
    _min: EventUserListMinAggregateOutputType | null
    _max: EventUserListMaxAggregateOutputType | null
  }

  export type EventUserListAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
  }

  export type EventUserListSumAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
  }

  export type EventUserListMinAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    role: $Enums.UserRole | null
  }

  export type EventUserListMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    role: $Enums.UserRole | null
  }

  export type EventUserListCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    role: number
    _all: number
  }


  export type EventUserListAvgAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
  }

  export type EventUserListSumAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
  }

  export type EventUserListMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    role?: true
  }

  export type EventUserListMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    role?: true
  }

  export type EventUserListCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    role?: true
    _all?: true
  }

  export type EventUserListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventUserList to aggregate.
     */
    where?: EventUserListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventUserLists to fetch.
     */
    orderBy?: EventUserListOrderByWithRelationInput | EventUserListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventUserListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventUserLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventUserLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventUserLists
    **/
    _count?: true | EventUserListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventUserListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventUserListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventUserListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventUserListMaxAggregateInputType
  }

  export type GetEventUserListAggregateType<T extends EventUserListAggregateArgs> = {
        [P in keyof T & keyof AggregateEventUserList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventUserList[P]>
      : GetScalarType<T[P], AggregateEventUserList[P]>
  }




  export type EventUserListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventUserListWhereInput
    orderBy?: EventUserListOrderByWithAggregationInput | EventUserListOrderByWithAggregationInput[]
    by: EventUserListScalarFieldEnum[] | EventUserListScalarFieldEnum
    having?: EventUserListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventUserListCountAggregateInputType | true
    _avg?: EventUserListAvgAggregateInputType
    _sum?: EventUserListSumAggregateInputType
    _min?: EventUserListMinAggregateInputType
    _max?: EventUserListMaxAggregateInputType
  }

  export type EventUserListGroupByOutputType = {
    id: number
    userId: number
    eventId: number
    role: $Enums.UserRole
    _count: EventUserListCountAggregateOutputType | null
    _avg: EventUserListAvgAggregateOutputType | null
    _sum: EventUserListSumAggregateOutputType | null
    _min: EventUserListMinAggregateOutputType | null
    _max: EventUserListMaxAggregateOutputType | null
  }

  type GetEventUserListGroupByPayload<T extends EventUserListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventUserListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventUserListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventUserListGroupByOutputType[P]>
            : GetScalarType<T[P], EventUserListGroupByOutputType[P]>
        }
      >
    >


  export type EventUserListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventUserList"]>

  export type EventUserListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventUserList"]>

  export type EventUserListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventUserList"]>

  export type EventUserListSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    role?: boolean
  }

  export type EventUserListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "role", ExtArgs["result"]["eventUserList"]>
  export type EventUserListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventUserListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventUserListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventUserListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventUserList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      eventId: number
      role: $Enums.UserRole
    }, ExtArgs["result"]["eventUserList"]>
    composites: {}
  }

  type EventUserListGetPayload<S extends boolean | null | undefined | EventUserListDefaultArgs> = $Result.GetResult<Prisma.$EventUserListPayload, S>

  type EventUserListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventUserListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventUserListCountAggregateInputType | true
    }

  export interface EventUserListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventUserList'], meta: { name: 'EventUserList' } }
    /**
     * Find zero or one EventUserList that matches the filter.
     * @param {EventUserListFindUniqueArgs} args - Arguments to find a EventUserList
     * @example
     * // Get one EventUserList
     * const eventUserList = await prisma.eventUserList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventUserListFindUniqueArgs>(args: SelectSubset<T, EventUserListFindUniqueArgs<ExtArgs>>): Prisma__EventUserListClient<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventUserList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventUserListFindUniqueOrThrowArgs} args - Arguments to find a EventUserList
     * @example
     * // Get one EventUserList
     * const eventUserList = await prisma.eventUserList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventUserListFindUniqueOrThrowArgs>(args: SelectSubset<T, EventUserListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventUserListClient<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventUserList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUserListFindFirstArgs} args - Arguments to find a EventUserList
     * @example
     * // Get one EventUserList
     * const eventUserList = await prisma.eventUserList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventUserListFindFirstArgs>(args?: SelectSubset<T, EventUserListFindFirstArgs<ExtArgs>>): Prisma__EventUserListClient<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventUserList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUserListFindFirstOrThrowArgs} args - Arguments to find a EventUserList
     * @example
     * // Get one EventUserList
     * const eventUserList = await prisma.eventUserList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventUserListFindFirstOrThrowArgs>(args?: SelectSubset<T, EventUserListFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventUserListClient<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventUserLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUserListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventUserLists
     * const eventUserLists = await prisma.eventUserList.findMany()
     * 
     * // Get first 10 EventUserLists
     * const eventUserLists = await prisma.eventUserList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventUserListWithIdOnly = await prisma.eventUserList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventUserListFindManyArgs>(args?: SelectSubset<T, EventUserListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventUserList.
     * @param {EventUserListCreateArgs} args - Arguments to create a EventUserList.
     * @example
     * // Create one EventUserList
     * const EventUserList = await prisma.eventUserList.create({
     *   data: {
     *     // ... data to create a EventUserList
     *   }
     * })
     * 
     */
    create<T extends EventUserListCreateArgs>(args: SelectSubset<T, EventUserListCreateArgs<ExtArgs>>): Prisma__EventUserListClient<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventUserLists.
     * @param {EventUserListCreateManyArgs} args - Arguments to create many EventUserLists.
     * @example
     * // Create many EventUserLists
     * const eventUserList = await prisma.eventUserList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventUserListCreateManyArgs>(args?: SelectSubset<T, EventUserListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventUserLists and returns the data saved in the database.
     * @param {EventUserListCreateManyAndReturnArgs} args - Arguments to create many EventUserLists.
     * @example
     * // Create many EventUserLists
     * const eventUserList = await prisma.eventUserList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventUserLists and only return the `id`
     * const eventUserListWithIdOnly = await prisma.eventUserList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventUserListCreateManyAndReturnArgs>(args?: SelectSubset<T, EventUserListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventUserList.
     * @param {EventUserListDeleteArgs} args - Arguments to delete one EventUserList.
     * @example
     * // Delete one EventUserList
     * const EventUserList = await prisma.eventUserList.delete({
     *   where: {
     *     // ... filter to delete one EventUserList
     *   }
     * })
     * 
     */
    delete<T extends EventUserListDeleteArgs>(args: SelectSubset<T, EventUserListDeleteArgs<ExtArgs>>): Prisma__EventUserListClient<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventUserList.
     * @param {EventUserListUpdateArgs} args - Arguments to update one EventUserList.
     * @example
     * // Update one EventUserList
     * const eventUserList = await prisma.eventUserList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUserListUpdateArgs>(args: SelectSubset<T, EventUserListUpdateArgs<ExtArgs>>): Prisma__EventUserListClient<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventUserLists.
     * @param {EventUserListDeleteManyArgs} args - Arguments to filter EventUserLists to delete.
     * @example
     * // Delete a few EventUserLists
     * const { count } = await prisma.eventUserList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventUserListDeleteManyArgs>(args?: SelectSubset<T, EventUserListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventUserLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUserListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventUserLists
     * const eventUserList = await prisma.eventUserList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUserListUpdateManyArgs>(args: SelectSubset<T, EventUserListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventUserLists and returns the data updated in the database.
     * @param {EventUserListUpdateManyAndReturnArgs} args - Arguments to update many EventUserLists.
     * @example
     * // Update many EventUserLists
     * const eventUserList = await prisma.eventUserList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventUserLists and only return the `id`
     * const eventUserListWithIdOnly = await prisma.eventUserList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUserListUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUserListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventUserList.
     * @param {EventUserListUpsertArgs} args - Arguments to update or create a EventUserList.
     * @example
     * // Update or create a EventUserList
     * const eventUserList = await prisma.eventUserList.upsert({
     *   create: {
     *     // ... data to create a EventUserList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventUserList we want to update
     *   }
     * })
     */
    upsert<T extends EventUserListUpsertArgs>(args: SelectSubset<T, EventUserListUpsertArgs<ExtArgs>>): Prisma__EventUserListClient<$Result.GetResult<Prisma.$EventUserListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventUserLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUserListCountArgs} args - Arguments to filter EventUserLists to count.
     * @example
     * // Count the number of EventUserLists
     * const count = await prisma.eventUserList.count({
     *   where: {
     *     // ... the filter for the EventUserLists we want to count
     *   }
     * })
    **/
    count<T extends EventUserListCountArgs>(
      args?: Subset<T, EventUserListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventUserListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventUserList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUserListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventUserListAggregateArgs>(args: Subset<T, EventUserListAggregateArgs>): Prisma.PrismaPromise<GetEventUserListAggregateType<T>>

    /**
     * Group by EventUserList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUserListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventUserListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventUserListGroupByArgs['orderBy'] }
        : { orderBy?: EventUserListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventUserListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventUserListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventUserList model
   */
  readonly fields: EventUserListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventUserList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventUserListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventUserList model
   */
  interface EventUserListFieldRefs {
    readonly id: FieldRef<"EventUserList", 'Int'>
    readonly userId: FieldRef<"EventUserList", 'Int'>
    readonly eventId: FieldRef<"EventUserList", 'Int'>
    readonly role: FieldRef<"EventUserList", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * EventUserList findUnique
   */
  export type EventUserListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
    /**
     * Filter, which EventUserList to fetch.
     */
    where: EventUserListWhereUniqueInput
  }

  /**
   * EventUserList findUniqueOrThrow
   */
  export type EventUserListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
    /**
     * Filter, which EventUserList to fetch.
     */
    where: EventUserListWhereUniqueInput
  }

  /**
   * EventUserList findFirst
   */
  export type EventUserListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
    /**
     * Filter, which EventUserList to fetch.
     */
    where?: EventUserListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventUserLists to fetch.
     */
    orderBy?: EventUserListOrderByWithRelationInput | EventUserListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventUserLists.
     */
    cursor?: EventUserListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventUserLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventUserLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventUserLists.
     */
    distinct?: EventUserListScalarFieldEnum | EventUserListScalarFieldEnum[]
  }

  /**
   * EventUserList findFirstOrThrow
   */
  export type EventUserListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
    /**
     * Filter, which EventUserList to fetch.
     */
    where?: EventUserListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventUserLists to fetch.
     */
    orderBy?: EventUserListOrderByWithRelationInput | EventUserListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventUserLists.
     */
    cursor?: EventUserListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventUserLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventUserLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventUserLists.
     */
    distinct?: EventUserListScalarFieldEnum | EventUserListScalarFieldEnum[]
  }

  /**
   * EventUserList findMany
   */
  export type EventUserListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
    /**
     * Filter, which EventUserLists to fetch.
     */
    where?: EventUserListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventUserLists to fetch.
     */
    orderBy?: EventUserListOrderByWithRelationInput | EventUserListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventUserLists.
     */
    cursor?: EventUserListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventUserLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventUserLists.
     */
    skip?: number
    distinct?: EventUserListScalarFieldEnum | EventUserListScalarFieldEnum[]
  }

  /**
   * EventUserList create
   */
  export type EventUserListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
    /**
     * The data needed to create a EventUserList.
     */
    data: XOR<EventUserListCreateInput, EventUserListUncheckedCreateInput>
  }

  /**
   * EventUserList createMany
   */
  export type EventUserListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventUserLists.
     */
    data: EventUserListCreateManyInput | EventUserListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventUserList createManyAndReturn
   */
  export type EventUserListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * The data used to create many EventUserLists.
     */
    data: EventUserListCreateManyInput | EventUserListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventUserList update
   */
  export type EventUserListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
    /**
     * The data needed to update a EventUserList.
     */
    data: XOR<EventUserListUpdateInput, EventUserListUncheckedUpdateInput>
    /**
     * Choose, which EventUserList to update.
     */
    where: EventUserListWhereUniqueInput
  }

  /**
   * EventUserList updateMany
   */
  export type EventUserListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventUserLists.
     */
    data: XOR<EventUserListUpdateManyMutationInput, EventUserListUncheckedUpdateManyInput>
    /**
     * Filter which EventUserLists to update
     */
    where?: EventUserListWhereInput
    /**
     * Limit how many EventUserLists to update.
     */
    limit?: number
  }

  /**
   * EventUserList updateManyAndReturn
   */
  export type EventUserListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * The data used to update EventUserLists.
     */
    data: XOR<EventUserListUpdateManyMutationInput, EventUserListUncheckedUpdateManyInput>
    /**
     * Filter which EventUserLists to update
     */
    where?: EventUserListWhereInput
    /**
     * Limit how many EventUserLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventUserList upsert
   */
  export type EventUserListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
    /**
     * The filter to search for the EventUserList to update in case it exists.
     */
    where: EventUserListWhereUniqueInput
    /**
     * In case the EventUserList found by the `where` argument doesn't exist, create a new EventUserList with this data.
     */
    create: XOR<EventUserListCreateInput, EventUserListUncheckedCreateInput>
    /**
     * In case the EventUserList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUserListUpdateInput, EventUserListUncheckedUpdateInput>
  }

  /**
   * EventUserList delete
   */
  export type EventUserListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
    /**
     * Filter which EventUserList to delete.
     */
    where: EventUserListWhereUniqueInput
  }

  /**
   * EventUserList deleteMany
   */
  export type EventUserListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventUserLists to delete
     */
    where?: EventUserListWhereInput
    /**
     * Limit how many EventUserLists to delete.
     */
    limit?: number
  }

  /**
   * EventUserList without action
   */
  export type EventUserListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventUserList
     */
    select?: EventUserListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventUserList
     */
    omit?: EventUserListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventUserListInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type IncidentSumAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type IncidentMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
    title: string | null
    description: string | null
    incidentDate: Date | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
    title: string | null
    description: string | null
    incidentDate: Date | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    title: number
    description: number
    incidentDate: number
    _all: number
  }


  export type IncidentAvgAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type IncidentSumAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type IncidentMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    title?: true
    description?: true
    incidentDate?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    title?: true
    description?: true
    incidentDate?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    title?: true
    description?: true
    incidentDate?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _avg?: IncidentAvgAggregateInputType
    _sum?: IncidentSumAggregateInputType
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: number
    eventId: number
    userId: number
    title: string
    description: string
    incidentDate: Date
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    incidentDate?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    incidentDate?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    incidentDate?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    incidentDate?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId" | "title" | "description" | "incidentDate", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      userId: number
      title: string
      description: string
      incidentDate: Date
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'Int'>
    readonly eventId: FieldRef<"Incident", 'Int'>
    readonly userId: FieldRef<"Incident", 'Int'>
    readonly title: FieldRef<"Incident", 'String'>
    readonly description: FieldRef<"Incident", 'String'>
    readonly incidentDate: FieldRef<"Incident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model EventShiftTime
   */

  export type AggregateEventShiftTime = {
    _count: EventShiftTimeCountAggregateOutputType | null
    _avg: EventShiftTimeAvgAggregateOutputType | null
    _sum: EventShiftTimeSumAggregateOutputType | null
    _min: EventShiftTimeMinAggregateOutputType | null
    _max: EventShiftTimeMaxAggregateOutputType | null
  }

  export type EventShiftTimeAvgAggregateOutputType = {
    id: number | null
    shiftDayId: number | null
  }

  export type EventShiftTimeSumAggregateOutputType = {
    id: number | null
    shiftDayId: number | null
  }

  export type EventShiftTimeMinAggregateOutputType = {
    id: number | null
    shiftDayId: number | null
    startTime: Date | null
    endTime: Date | null
  }

  export type EventShiftTimeMaxAggregateOutputType = {
    id: number | null
    shiftDayId: number | null
    startTime: Date | null
    endTime: Date | null
  }

  export type EventShiftTimeCountAggregateOutputType = {
    id: number
    shiftDayId: number
    startTime: number
    endTime: number
    _all: number
  }


  export type EventShiftTimeAvgAggregateInputType = {
    id?: true
    shiftDayId?: true
  }

  export type EventShiftTimeSumAggregateInputType = {
    id?: true
    shiftDayId?: true
  }

  export type EventShiftTimeMinAggregateInputType = {
    id?: true
    shiftDayId?: true
    startTime?: true
    endTime?: true
  }

  export type EventShiftTimeMaxAggregateInputType = {
    id?: true
    shiftDayId?: true
    startTime?: true
    endTime?: true
  }

  export type EventShiftTimeCountAggregateInputType = {
    id?: true
    shiftDayId?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type EventShiftTimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventShiftTime to aggregate.
     */
    where?: EventShiftTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventShiftTimes to fetch.
     */
    orderBy?: EventShiftTimeOrderByWithRelationInput | EventShiftTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventShiftTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventShiftTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventShiftTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventShiftTimes
    **/
    _count?: true | EventShiftTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventShiftTimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventShiftTimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventShiftTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventShiftTimeMaxAggregateInputType
  }

  export type GetEventShiftTimeAggregateType<T extends EventShiftTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventShiftTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventShiftTime[P]>
      : GetScalarType<T[P], AggregateEventShiftTime[P]>
  }




  export type EventShiftTimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventShiftTimeWhereInput
    orderBy?: EventShiftTimeOrderByWithAggregationInput | EventShiftTimeOrderByWithAggregationInput[]
    by: EventShiftTimeScalarFieldEnum[] | EventShiftTimeScalarFieldEnum
    having?: EventShiftTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventShiftTimeCountAggregateInputType | true
    _avg?: EventShiftTimeAvgAggregateInputType
    _sum?: EventShiftTimeSumAggregateInputType
    _min?: EventShiftTimeMinAggregateInputType
    _max?: EventShiftTimeMaxAggregateInputType
  }

  export type EventShiftTimeGroupByOutputType = {
    id: number
    shiftDayId: number
    startTime: Date
    endTime: Date
    _count: EventShiftTimeCountAggregateOutputType | null
    _avg: EventShiftTimeAvgAggregateOutputType | null
    _sum: EventShiftTimeSumAggregateOutputType | null
    _min: EventShiftTimeMinAggregateOutputType | null
    _max: EventShiftTimeMaxAggregateOutputType | null
  }

  type GetEventShiftTimeGroupByPayload<T extends EventShiftTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventShiftTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventShiftTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventShiftTimeGroupByOutputType[P]>
            : GetScalarType<T[P], EventShiftTimeGroupByOutputType[P]>
        }
      >
    >


  export type EventShiftTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftDayId?: boolean
    startTime?: boolean
    endTime?: boolean
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventShiftTime"]>

  export type EventShiftTimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftDayId?: boolean
    startTime?: boolean
    endTime?: boolean
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventShiftTime"]>

  export type EventShiftTimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftDayId?: boolean
    startTime?: boolean
    endTime?: boolean
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventShiftTime"]>

  export type EventShiftTimeSelectScalar = {
    id?: boolean
    shiftDayId?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type EventShiftTimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shiftDayId" | "startTime" | "endTime", ExtArgs["result"]["eventShiftTime"]>
  export type EventShiftTimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
  }
  export type EventShiftTimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
  }
  export type EventShiftTimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
  }

  export type $EventShiftTimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventShiftTime"
    objects: {
      shiftDay: Prisma.$EventShiftDayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shiftDayId: number
      startTime: Date
      endTime: Date
    }, ExtArgs["result"]["eventShiftTime"]>
    composites: {}
  }

  type EventShiftTimeGetPayload<S extends boolean | null | undefined | EventShiftTimeDefaultArgs> = $Result.GetResult<Prisma.$EventShiftTimePayload, S>

  type EventShiftTimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventShiftTimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventShiftTimeCountAggregateInputType | true
    }

  export interface EventShiftTimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventShiftTime'], meta: { name: 'EventShiftTime' } }
    /**
     * Find zero or one EventShiftTime that matches the filter.
     * @param {EventShiftTimeFindUniqueArgs} args - Arguments to find a EventShiftTime
     * @example
     * // Get one EventShiftTime
     * const eventShiftTime = await prisma.eventShiftTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventShiftTimeFindUniqueArgs>(args: SelectSubset<T, EventShiftTimeFindUniqueArgs<ExtArgs>>): Prisma__EventShiftTimeClient<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventShiftTime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventShiftTimeFindUniqueOrThrowArgs} args - Arguments to find a EventShiftTime
     * @example
     * // Get one EventShiftTime
     * const eventShiftTime = await prisma.eventShiftTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventShiftTimeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventShiftTimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventShiftTimeClient<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventShiftTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftTimeFindFirstArgs} args - Arguments to find a EventShiftTime
     * @example
     * // Get one EventShiftTime
     * const eventShiftTime = await prisma.eventShiftTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventShiftTimeFindFirstArgs>(args?: SelectSubset<T, EventShiftTimeFindFirstArgs<ExtArgs>>): Prisma__EventShiftTimeClient<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventShiftTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftTimeFindFirstOrThrowArgs} args - Arguments to find a EventShiftTime
     * @example
     * // Get one EventShiftTime
     * const eventShiftTime = await prisma.eventShiftTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventShiftTimeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventShiftTimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventShiftTimeClient<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventShiftTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftTimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventShiftTimes
     * const eventShiftTimes = await prisma.eventShiftTime.findMany()
     * 
     * // Get first 10 EventShiftTimes
     * const eventShiftTimes = await prisma.eventShiftTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventShiftTimeWithIdOnly = await prisma.eventShiftTime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventShiftTimeFindManyArgs>(args?: SelectSubset<T, EventShiftTimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventShiftTime.
     * @param {EventShiftTimeCreateArgs} args - Arguments to create a EventShiftTime.
     * @example
     * // Create one EventShiftTime
     * const EventShiftTime = await prisma.eventShiftTime.create({
     *   data: {
     *     // ... data to create a EventShiftTime
     *   }
     * })
     * 
     */
    create<T extends EventShiftTimeCreateArgs>(args: SelectSubset<T, EventShiftTimeCreateArgs<ExtArgs>>): Prisma__EventShiftTimeClient<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventShiftTimes.
     * @param {EventShiftTimeCreateManyArgs} args - Arguments to create many EventShiftTimes.
     * @example
     * // Create many EventShiftTimes
     * const eventShiftTime = await prisma.eventShiftTime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventShiftTimeCreateManyArgs>(args?: SelectSubset<T, EventShiftTimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventShiftTimes and returns the data saved in the database.
     * @param {EventShiftTimeCreateManyAndReturnArgs} args - Arguments to create many EventShiftTimes.
     * @example
     * // Create many EventShiftTimes
     * const eventShiftTime = await prisma.eventShiftTime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventShiftTimes and only return the `id`
     * const eventShiftTimeWithIdOnly = await prisma.eventShiftTime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventShiftTimeCreateManyAndReturnArgs>(args?: SelectSubset<T, EventShiftTimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventShiftTime.
     * @param {EventShiftTimeDeleteArgs} args - Arguments to delete one EventShiftTime.
     * @example
     * // Delete one EventShiftTime
     * const EventShiftTime = await prisma.eventShiftTime.delete({
     *   where: {
     *     // ... filter to delete one EventShiftTime
     *   }
     * })
     * 
     */
    delete<T extends EventShiftTimeDeleteArgs>(args: SelectSubset<T, EventShiftTimeDeleteArgs<ExtArgs>>): Prisma__EventShiftTimeClient<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventShiftTime.
     * @param {EventShiftTimeUpdateArgs} args - Arguments to update one EventShiftTime.
     * @example
     * // Update one EventShiftTime
     * const eventShiftTime = await prisma.eventShiftTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventShiftTimeUpdateArgs>(args: SelectSubset<T, EventShiftTimeUpdateArgs<ExtArgs>>): Prisma__EventShiftTimeClient<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventShiftTimes.
     * @param {EventShiftTimeDeleteManyArgs} args - Arguments to filter EventShiftTimes to delete.
     * @example
     * // Delete a few EventShiftTimes
     * const { count } = await prisma.eventShiftTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventShiftTimeDeleteManyArgs>(args?: SelectSubset<T, EventShiftTimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventShiftTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventShiftTimes
     * const eventShiftTime = await prisma.eventShiftTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventShiftTimeUpdateManyArgs>(args: SelectSubset<T, EventShiftTimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventShiftTimes and returns the data updated in the database.
     * @param {EventShiftTimeUpdateManyAndReturnArgs} args - Arguments to update many EventShiftTimes.
     * @example
     * // Update many EventShiftTimes
     * const eventShiftTime = await prisma.eventShiftTime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventShiftTimes and only return the `id`
     * const eventShiftTimeWithIdOnly = await prisma.eventShiftTime.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventShiftTimeUpdateManyAndReturnArgs>(args: SelectSubset<T, EventShiftTimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventShiftTime.
     * @param {EventShiftTimeUpsertArgs} args - Arguments to update or create a EventShiftTime.
     * @example
     * // Update or create a EventShiftTime
     * const eventShiftTime = await prisma.eventShiftTime.upsert({
     *   create: {
     *     // ... data to create a EventShiftTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventShiftTime we want to update
     *   }
     * })
     */
    upsert<T extends EventShiftTimeUpsertArgs>(args: SelectSubset<T, EventShiftTimeUpsertArgs<ExtArgs>>): Prisma__EventShiftTimeClient<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventShiftTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftTimeCountArgs} args - Arguments to filter EventShiftTimes to count.
     * @example
     * // Count the number of EventShiftTimes
     * const count = await prisma.eventShiftTime.count({
     *   where: {
     *     // ... the filter for the EventShiftTimes we want to count
     *   }
     * })
    **/
    count<T extends EventShiftTimeCountArgs>(
      args?: Subset<T, EventShiftTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventShiftTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventShiftTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventShiftTimeAggregateArgs>(args: Subset<T, EventShiftTimeAggregateArgs>): Prisma.PrismaPromise<GetEventShiftTimeAggregateType<T>>

    /**
     * Group by EventShiftTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftTimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventShiftTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventShiftTimeGroupByArgs['orderBy'] }
        : { orderBy?: EventShiftTimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventShiftTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventShiftTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventShiftTime model
   */
  readonly fields: EventShiftTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventShiftTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventShiftTimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shiftDay<T extends EventShiftDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventShiftDayDefaultArgs<ExtArgs>>): Prisma__EventShiftDayClient<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventShiftTime model
   */
  interface EventShiftTimeFieldRefs {
    readonly id: FieldRef<"EventShiftTime", 'Int'>
    readonly shiftDayId: FieldRef<"EventShiftTime", 'Int'>
    readonly startTime: FieldRef<"EventShiftTime", 'DateTime'>
    readonly endTime: FieldRef<"EventShiftTime", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventShiftTime findUnique
   */
  export type EventShiftTimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeInclude<ExtArgs> | null
    /**
     * Filter, which EventShiftTime to fetch.
     */
    where: EventShiftTimeWhereUniqueInput
  }

  /**
   * EventShiftTime findUniqueOrThrow
   */
  export type EventShiftTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeInclude<ExtArgs> | null
    /**
     * Filter, which EventShiftTime to fetch.
     */
    where: EventShiftTimeWhereUniqueInput
  }

  /**
   * EventShiftTime findFirst
   */
  export type EventShiftTimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeInclude<ExtArgs> | null
    /**
     * Filter, which EventShiftTime to fetch.
     */
    where?: EventShiftTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventShiftTimes to fetch.
     */
    orderBy?: EventShiftTimeOrderByWithRelationInput | EventShiftTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventShiftTimes.
     */
    cursor?: EventShiftTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventShiftTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventShiftTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventShiftTimes.
     */
    distinct?: EventShiftTimeScalarFieldEnum | EventShiftTimeScalarFieldEnum[]
  }

  /**
   * EventShiftTime findFirstOrThrow
   */
  export type EventShiftTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeInclude<ExtArgs> | null
    /**
     * Filter, which EventShiftTime to fetch.
     */
    where?: EventShiftTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventShiftTimes to fetch.
     */
    orderBy?: EventShiftTimeOrderByWithRelationInput | EventShiftTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventShiftTimes.
     */
    cursor?: EventShiftTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventShiftTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventShiftTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventShiftTimes.
     */
    distinct?: EventShiftTimeScalarFieldEnum | EventShiftTimeScalarFieldEnum[]
  }

  /**
   * EventShiftTime findMany
   */
  export type EventShiftTimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeInclude<ExtArgs> | null
    /**
     * Filter, which EventShiftTimes to fetch.
     */
    where?: EventShiftTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventShiftTimes to fetch.
     */
    orderBy?: EventShiftTimeOrderByWithRelationInput | EventShiftTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventShiftTimes.
     */
    cursor?: EventShiftTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventShiftTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventShiftTimes.
     */
    skip?: number
    distinct?: EventShiftTimeScalarFieldEnum | EventShiftTimeScalarFieldEnum[]
  }

  /**
   * EventShiftTime create
   */
  export type EventShiftTimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeInclude<ExtArgs> | null
    /**
     * The data needed to create a EventShiftTime.
     */
    data: XOR<EventShiftTimeCreateInput, EventShiftTimeUncheckedCreateInput>
  }

  /**
   * EventShiftTime createMany
   */
  export type EventShiftTimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventShiftTimes.
     */
    data: EventShiftTimeCreateManyInput | EventShiftTimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventShiftTime createManyAndReturn
   */
  export type EventShiftTimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * The data used to create many EventShiftTimes.
     */
    data: EventShiftTimeCreateManyInput | EventShiftTimeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventShiftTime update
   */
  export type EventShiftTimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeInclude<ExtArgs> | null
    /**
     * The data needed to update a EventShiftTime.
     */
    data: XOR<EventShiftTimeUpdateInput, EventShiftTimeUncheckedUpdateInput>
    /**
     * Choose, which EventShiftTime to update.
     */
    where: EventShiftTimeWhereUniqueInput
  }

  /**
   * EventShiftTime updateMany
   */
  export type EventShiftTimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventShiftTimes.
     */
    data: XOR<EventShiftTimeUpdateManyMutationInput, EventShiftTimeUncheckedUpdateManyInput>
    /**
     * Filter which EventShiftTimes to update
     */
    where?: EventShiftTimeWhereInput
    /**
     * Limit how many EventShiftTimes to update.
     */
    limit?: number
  }

  /**
   * EventShiftTime updateManyAndReturn
   */
  export type EventShiftTimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * The data used to update EventShiftTimes.
     */
    data: XOR<EventShiftTimeUpdateManyMutationInput, EventShiftTimeUncheckedUpdateManyInput>
    /**
     * Filter which EventShiftTimes to update
     */
    where?: EventShiftTimeWhereInput
    /**
     * Limit how many EventShiftTimes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventShiftTime upsert
   */
  export type EventShiftTimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeInclude<ExtArgs> | null
    /**
     * The filter to search for the EventShiftTime to update in case it exists.
     */
    where: EventShiftTimeWhereUniqueInput
    /**
     * In case the EventShiftTime found by the `where` argument doesn't exist, create a new EventShiftTime with this data.
     */
    create: XOR<EventShiftTimeCreateInput, EventShiftTimeUncheckedCreateInput>
    /**
     * In case the EventShiftTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventShiftTimeUpdateInput, EventShiftTimeUncheckedUpdateInput>
  }

  /**
   * EventShiftTime delete
   */
  export type EventShiftTimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeInclude<ExtArgs> | null
    /**
     * Filter which EventShiftTime to delete.
     */
    where: EventShiftTimeWhereUniqueInput
  }

  /**
   * EventShiftTime deleteMany
   */
  export type EventShiftTimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventShiftTimes to delete
     */
    where?: EventShiftTimeWhereInput
    /**
     * Limit how many EventShiftTimes to delete.
     */
    limit?: number
  }

  /**
   * EventShiftTime without action
   */
  export type EventShiftTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeInclude<ExtArgs> | null
  }


  /**
   * Model EventShiftDay
   */

  export type AggregateEventShiftDay = {
    _count: EventShiftDayCountAggregateOutputType | null
    _avg: EventShiftDayAvgAggregateOutputType | null
    _sum: EventShiftDaySumAggregateOutputType | null
    _min: EventShiftDayMinAggregateOutputType | null
    _max: EventShiftDayMaxAggregateOutputType | null
  }

  export type EventShiftDayAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
    maxUsers: number | null
  }

  export type EventShiftDaySumAggregateOutputType = {
    id: number | null
    eventId: number | null
    maxUsers: number | null
  }

  export type EventShiftDayMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    day: Date | null
    maxUsers: number | null
    role: $Enums.UserRole | null
  }

  export type EventShiftDayMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    day: Date | null
    maxUsers: number | null
    role: $Enums.UserRole | null
  }

  export type EventShiftDayCountAggregateOutputType = {
    id: number
    eventId: number
    day: number
    maxUsers: number
    role: number
    _all: number
  }


  export type EventShiftDayAvgAggregateInputType = {
    id?: true
    eventId?: true
    maxUsers?: true
  }

  export type EventShiftDaySumAggregateInputType = {
    id?: true
    eventId?: true
    maxUsers?: true
  }

  export type EventShiftDayMinAggregateInputType = {
    id?: true
    eventId?: true
    day?: true
    maxUsers?: true
    role?: true
  }

  export type EventShiftDayMaxAggregateInputType = {
    id?: true
    eventId?: true
    day?: true
    maxUsers?: true
    role?: true
  }

  export type EventShiftDayCountAggregateInputType = {
    id?: true
    eventId?: true
    day?: true
    maxUsers?: true
    role?: true
    _all?: true
  }

  export type EventShiftDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventShiftDay to aggregate.
     */
    where?: EventShiftDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventShiftDays to fetch.
     */
    orderBy?: EventShiftDayOrderByWithRelationInput | EventShiftDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventShiftDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventShiftDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventShiftDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventShiftDays
    **/
    _count?: true | EventShiftDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventShiftDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventShiftDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventShiftDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventShiftDayMaxAggregateInputType
  }

  export type GetEventShiftDayAggregateType<T extends EventShiftDayAggregateArgs> = {
        [P in keyof T & keyof AggregateEventShiftDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventShiftDay[P]>
      : GetScalarType<T[P], AggregateEventShiftDay[P]>
  }




  export type EventShiftDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventShiftDayWhereInput
    orderBy?: EventShiftDayOrderByWithAggregationInput | EventShiftDayOrderByWithAggregationInput[]
    by: EventShiftDayScalarFieldEnum[] | EventShiftDayScalarFieldEnum
    having?: EventShiftDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventShiftDayCountAggregateInputType | true
    _avg?: EventShiftDayAvgAggregateInputType
    _sum?: EventShiftDaySumAggregateInputType
    _min?: EventShiftDayMinAggregateInputType
    _max?: EventShiftDayMaxAggregateInputType
  }

  export type EventShiftDayGroupByOutputType = {
    id: number
    eventId: number
    day: Date
    maxUsers: number
    role: $Enums.UserRole
    _count: EventShiftDayCountAggregateOutputType | null
    _avg: EventShiftDayAvgAggregateOutputType | null
    _sum: EventShiftDaySumAggregateOutputType | null
    _min: EventShiftDayMinAggregateOutputType | null
    _max: EventShiftDayMaxAggregateOutputType | null
  }

  type GetEventShiftDayGroupByPayload<T extends EventShiftDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventShiftDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventShiftDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventShiftDayGroupByOutputType[P]>
            : GetScalarType<T[P], EventShiftDayGroupByOutputType[P]>
        }
      >
    >


  export type EventShiftDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    day?: boolean
    maxUsers?: boolean
    role?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    times?: boolean | EventShiftDay$timesArgs<ExtArgs>
    requests?: boolean | EventShiftDay$requestsArgs<ExtArgs>
    _count?: boolean | EventShiftDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventShiftDay"]>

  export type EventShiftDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    day?: boolean
    maxUsers?: boolean
    role?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventShiftDay"]>

  export type EventShiftDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    day?: boolean
    maxUsers?: boolean
    role?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventShiftDay"]>

  export type EventShiftDaySelectScalar = {
    id?: boolean
    eventId?: boolean
    day?: boolean
    maxUsers?: boolean
    role?: boolean
  }

  export type EventShiftDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "day" | "maxUsers" | "role", ExtArgs["result"]["eventShiftDay"]>
  export type EventShiftDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    times?: boolean | EventShiftDay$timesArgs<ExtArgs>
    requests?: boolean | EventShiftDay$requestsArgs<ExtArgs>
    _count?: boolean | EventShiftDayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventShiftDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventShiftDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventShiftDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventShiftDay"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      times: Prisma.$EventShiftTimePayload<ExtArgs>[]
      requests: Prisma.$ShiftRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      day: Date
      maxUsers: number
      role: $Enums.UserRole
    }, ExtArgs["result"]["eventShiftDay"]>
    composites: {}
  }

  type EventShiftDayGetPayload<S extends boolean | null | undefined | EventShiftDayDefaultArgs> = $Result.GetResult<Prisma.$EventShiftDayPayload, S>

  type EventShiftDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventShiftDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventShiftDayCountAggregateInputType | true
    }

  export interface EventShiftDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventShiftDay'], meta: { name: 'EventShiftDay' } }
    /**
     * Find zero or one EventShiftDay that matches the filter.
     * @param {EventShiftDayFindUniqueArgs} args - Arguments to find a EventShiftDay
     * @example
     * // Get one EventShiftDay
     * const eventShiftDay = await prisma.eventShiftDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventShiftDayFindUniqueArgs>(args: SelectSubset<T, EventShiftDayFindUniqueArgs<ExtArgs>>): Prisma__EventShiftDayClient<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventShiftDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventShiftDayFindUniqueOrThrowArgs} args - Arguments to find a EventShiftDay
     * @example
     * // Get one EventShiftDay
     * const eventShiftDay = await prisma.eventShiftDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventShiftDayFindUniqueOrThrowArgs>(args: SelectSubset<T, EventShiftDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventShiftDayClient<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventShiftDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftDayFindFirstArgs} args - Arguments to find a EventShiftDay
     * @example
     * // Get one EventShiftDay
     * const eventShiftDay = await prisma.eventShiftDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventShiftDayFindFirstArgs>(args?: SelectSubset<T, EventShiftDayFindFirstArgs<ExtArgs>>): Prisma__EventShiftDayClient<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventShiftDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftDayFindFirstOrThrowArgs} args - Arguments to find a EventShiftDay
     * @example
     * // Get one EventShiftDay
     * const eventShiftDay = await prisma.eventShiftDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventShiftDayFindFirstOrThrowArgs>(args?: SelectSubset<T, EventShiftDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventShiftDayClient<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventShiftDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventShiftDays
     * const eventShiftDays = await prisma.eventShiftDay.findMany()
     * 
     * // Get first 10 EventShiftDays
     * const eventShiftDays = await prisma.eventShiftDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventShiftDayWithIdOnly = await prisma.eventShiftDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventShiftDayFindManyArgs>(args?: SelectSubset<T, EventShiftDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventShiftDay.
     * @param {EventShiftDayCreateArgs} args - Arguments to create a EventShiftDay.
     * @example
     * // Create one EventShiftDay
     * const EventShiftDay = await prisma.eventShiftDay.create({
     *   data: {
     *     // ... data to create a EventShiftDay
     *   }
     * })
     * 
     */
    create<T extends EventShiftDayCreateArgs>(args: SelectSubset<T, EventShiftDayCreateArgs<ExtArgs>>): Prisma__EventShiftDayClient<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventShiftDays.
     * @param {EventShiftDayCreateManyArgs} args - Arguments to create many EventShiftDays.
     * @example
     * // Create many EventShiftDays
     * const eventShiftDay = await prisma.eventShiftDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventShiftDayCreateManyArgs>(args?: SelectSubset<T, EventShiftDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventShiftDays and returns the data saved in the database.
     * @param {EventShiftDayCreateManyAndReturnArgs} args - Arguments to create many EventShiftDays.
     * @example
     * // Create many EventShiftDays
     * const eventShiftDay = await prisma.eventShiftDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventShiftDays and only return the `id`
     * const eventShiftDayWithIdOnly = await prisma.eventShiftDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventShiftDayCreateManyAndReturnArgs>(args?: SelectSubset<T, EventShiftDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventShiftDay.
     * @param {EventShiftDayDeleteArgs} args - Arguments to delete one EventShiftDay.
     * @example
     * // Delete one EventShiftDay
     * const EventShiftDay = await prisma.eventShiftDay.delete({
     *   where: {
     *     // ... filter to delete one EventShiftDay
     *   }
     * })
     * 
     */
    delete<T extends EventShiftDayDeleteArgs>(args: SelectSubset<T, EventShiftDayDeleteArgs<ExtArgs>>): Prisma__EventShiftDayClient<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventShiftDay.
     * @param {EventShiftDayUpdateArgs} args - Arguments to update one EventShiftDay.
     * @example
     * // Update one EventShiftDay
     * const eventShiftDay = await prisma.eventShiftDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventShiftDayUpdateArgs>(args: SelectSubset<T, EventShiftDayUpdateArgs<ExtArgs>>): Prisma__EventShiftDayClient<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventShiftDays.
     * @param {EventShiftDayDeleteManyArgs} args - Arguments to filter EventShiftDays to delete.
     * @example
     * // Delete a few EventShiftDays
     * const { count } = await prisma.eventShiftDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventShiftDayDeleteManyArgs>(args?: SelectSubset<T, EventShiftDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventShiftDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventShiftDays
     * const eventShiftDay = await prisma.eventShiftDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventShiftDayUpdateManyArgs>(args: SelectSubset<T, EventShiftDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventShiftDays and returns the data updated in the database.
     * @param {EventShiftDayUpdateManyAndReturnArgs} args - Arguments to update many EventShiftDays.
     * @example
     * // Update many EventShiftDays
     * const eventShiftDay = await prisma.eventShiftDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventShiftDays and only return the `id`
     * const eventShiftDayWithIdOnly = await prisma.eventShiftDay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventShiftDayUpdateManyAndReturnArgs>(args: SelectSubset<T, EventShiftDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventShiftDay.
     * @param {EventShiftDayUpsertArgs} args - Arguments to update or create a EventShiftDay.
     * @example
     * // Update or create a EventShiftDay
     * const eventShiftDay = await prisma.eventShiftDay.upsert({
     *   create: {
     *     // ... data to create a EventShiftDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventShiftDay we want to update
     *   }
     * })
     */
    upsert<T extends EventShiftDayUpsertArgs>(args: SelectSubset<T, EventShiftDayUpsertArgs<ExtArgs>>): Prisma__EventShiftDayClient<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventShiftDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftDayCountArgs} args - Arguments to filter EventShiftDays to count.
     * @example
     * // Count the number of EventShiftDays
     * const count = await prisma.eventShiftDay.count({
     *   where: {
     *     // ... the filter for the EventShiftDays we want to count
     *   }
     * })
    **/
    count<T extends EventShiftDayCountArgs>(
      args?: Subset<T, EventShiftDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventShiftDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventShiftDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventShiftDayAggregateArgs>(args: Subset<T, EventShiftDayAggregateArgs>): Prisma.PrismaPromise<GetEventShiftDayAggregateType<T>>

    /**
     * Group by EventShiftDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventShiftDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventShiftDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventShiftDayGroupByArgs['orderBy'] }
        : { orderBy?: EventShiftDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventShiftDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventShiftDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventShiftDay model
   */
  readonly fields: EventShiftDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventShiftDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventShiftDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    times<T extends EventShiftDay$timesArgs<ExtArgs> = {}>(args?: Subset<T, EventShiftDay$timesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventShiftTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends EventShiftDay$requestsArgs<ExtArgs> = {}>(args?: Subset<T, EventShiftDay$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventShiftDay model
   */
  interface EventShiftDayFieldRefs {
    readonly id: FieldRef<"EventShiftDay", 'Int'>
    readonly eventId: FieldRef<"EventShiftDay", 'Int'>
    readonly day: FieldRef<"EventShiftDay", 'DateTime'>
    readonly maxUsers: FieldRef<"EventShiftDay", 'Int'>
    readonly role: FieldRef<"EventShiftDay", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * EventShiftDay findUnique
   */
  export type EventShiftDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayInclude<ExtArgs> | null
    /**
     * Filter, which EventShiftDay to fetch.
     */
    where: EventShiftDayWhereUniqueInput
  }

  /**
   * EventShiftDay findUniqueOrThrow
   */
  export type EventShiftDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayInclude<ExtArgs> | null
    /**
     * Filter, which EventShiftDay to fetch.
     */
    where: EventShiftDayWhereUniqueInput
  }

  /**
   * EventShiftDay findFirst
   */
  export type EventShiftDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayInclude<ExtArgs> | null
    /**
     * Filter, which EventShiftDay to fetch.
     */
    where?: EventShiftDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventShiftDays to fetch.
     */
    orderBy?: EventShiftDayOrderByWithRelationInput | EventShiftDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventShiftDays.
     */
    cursor?: EventShiftDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventShiftDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventShiftDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventShiftDays.
     */
    distinct?: EventShiftDayScalarFieldEnum | EventShiftDayScalarFieldEnum[]
  }

  /**
   * EventShiftDay findFirstOrThrow
   */
  export type EventShiftDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayInclude<ExtArgs> | null
    /**
     * Filter, which EventShiftDay to fetch.
     */
    where?: EventShiftDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventShiftDays to fetch.
     */
    orderBy?: EventShiftDayOrderByWithRelationInput | EventShiftDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventShiftDays.
     */
    cursor?: EventShiftDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventShiftDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventShiftDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventShiftDays.
     */
    distinct?: EventShiftDayScalarFieldEnum | EventShiftDayScalarFieldEnum[]
  }

  /**
   * EventShiftDay findMany
   */
  export type EventShiftDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayInclude<ExtArgs> | null
    /**
     * Filter, which EventShiftDays to fetch.
     */
    where?: EventShiftDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventShiftDays to fetch.
     */
    orderBy?: EventShiftDayOrderByWithRelationInput | EventShiftDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventShiftDays.
     */
    cursor?: EventShiftDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventShiftDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventShiftDays.
     */
    skip?: number
    distinct?: EventShiftDayScalarFieldEnum | EventShiftDayScalarFieldEnum[]
  }

  /**
   * EventShiftDay create
   */
  export type EventShiftDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayInclude<ExtArgs> | null
    /**
     * The data needed to create a EventShiftDay.
     */
    data: XOR<EventShiftDayCreateInput, EventShiftDayUncheckedCreateInput>
  }

  /**
   * EventShiftDay createMany
   */
  export type EventShiftDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventShiftDays.
     */
    data: EventShiftDayCreateManyInput | EventShiftDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventShiftDay createManyAndReturn
   */
  export type EventShiftDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * The data used to create many EventShiftDays.
     */
    data: EventShiftDayCreateManyInput | EventShiftDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventShiftDay update
   */
  export type EventShiftDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayInclude<ExtArgs> | null
    /**
     * The data needed to update a EventShiftDay.
     */
    data: XOR<EventShiftDayUpdateInput, EventShiftDayUncheckedUpdateInput>
    /**
     * Choose, which EventShiftDay to update.
     */
    where: EventShiftDayWhereUniqueInput
  }

  /**
   * EventShiftDay updateMany
   */
  export type EventShiftDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventShiftDays.
     */
    data: XOR<EventShiftDayUpdateManyMutationInput, EventShiftDayUncheckedUpdateManyInput>
    /**
     * Filter which EventShiftDays to update
     */
    where?: EventShiftDayWhereInput
    /**
     * Limit how many EventShiftDays to update.
     */
    limit?: number
  }

  /**
   * EventShiftDay updateManyAndReturn
   */
  export type EventShiftDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * The data used to update EventShiftDays.
     */
    data: XOR<EventShiftDayUpdateManyMutationInput, EventShiftDayUncheckedUpdateManyInput>
    /**
     * Filter which EventShiftDays to update
     */
    where?: EventShiftDayWhereInput
    /**
     * Limit how many EventShiftDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventShiftDay upsert
   */
  export type EventShiftDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayInclude<ExtArgs> | null
    /**
     * The filter to search for the EventShiftDay to update in case it exists.
     */
    where: EventShiftDayWhereUniqueInput
    /**
     * In case the EventShiftDay found by the `where` argument doesn't exist, create a new EventShiftDay with this data.
     */
    create: XOR<EventShiftDayCreateInput, EventShiftDayUncheckedCreateInput>
    /**
     * In case the EventShiftDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventShiftDayUpdateInput, EventShiftDayUncheckedUpdateInput>
  }

  /**
   * EventShiftDay delete
   */
  export type EventShiftDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayInclude<ExtArgs> | null
    /**
     * Filter which EventShiftDay to delete.
     */
    where: EventShiftDayWhereUniqueInput
  }

  /**
   * EventShiftDay deleteMany
   */
  export type EventShiftDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventShiftDays to delete
     */
    where?: EventShiftDayWhereInput
    /**
     * Limit how many EventShiftDays to delete.
     */
    limit?: number
  }

  /**
   * EventShiftDay.times
   */
  export type EventShiftDay$timesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftTime
     */
    select?: EventShiftTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftTime
     */
    omit?: EventShiftTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftTimeInclude<ExtArgs> | null
    where?: EventShiftTimeWhereInput
    orderBy?: EventShiftTimeOrderByWithRelationInput | EventShiftTimeOrderByWithRelationInput[]
    cursor?: EventShiftTimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventShiftTimeScalarFieldEnum | EventShiftTimeScalarFieldEnum[]
  }

  /**
   * EventShiftDay.requests
   */
  export type EventShiftDay$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
    where?: ShiftRequestWhereInput
    orderBy?: ShiftRequestOrderByWithRelationInput | ShiftRequestOrderByWithRelationInput[]
    cursor?: ShiftRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftRequestScalarFieldEnum | ShiftRequestScalarFieldEnum[]
  }

  /**
   * EventShiftDay without action
   */
  export type EventShiftDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventShiftDay
     */
    select?: EventShiftDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventShiftDay
     */
    omit?: EventShiftDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventShiftDayInclude<ExtArgs> | null
  }


  /**
   * Model ShiftRequest
   */

  export type AggregateShiftRequest = {
    _count: ShiftRequestCountAggregateOutputType | null
    _avg: ShiftRequestAvgAggregateOutputType | null
    _sum: ShiftRequestSumAggregateOutputType | null
    _min: ShiftRequestMinAggregateOutputType | null
    _max: ShiftRequestMaxAggregateOutputType | null
  }

  export type ShiftRequestAvgAggregateOutputType = {
    id: number | null
    shiftDayId: number | null
    userId: number | null
  }

  export type ShiftRequestSumAggregateOutputType = {
    id: number | null
    shiftDayId: number | null
    userId: number | null
  }

  export type ShiftRequestMinAggregateOutputType = {
    id: number | null
    shiftDayId: number | null
    userId: number | null
    status: $Enums.GenericRequestStatus | null
  }

  export type ShiftRequestMaxAggregateOutputType = {
    id: number | null
    shiftDayId: number | null
    userId: number | null
    status: $Enums.GenericRequestStatus | null
  }

  export type ShiftRequestCountAggregateOutputType = {
    id: number
    shiftDayId: number
    userId: number
    status: number
    _all: number
  }


  export type ShiftRequestAvgAggregateInputType = {
    id?: true
    shiftDayId?: true
    userId?: true
  }

  export type ShiftRequestSumAggregateInputType = {
    id?: true
    shiftDayId?: true
    userId?: true
  }

  export type ShiftRequestMinAggregateInputType = {
    id?: true
    shiftDayId?: true
    userId?: true
    status?: true
  }

  export type ShiftRequestMaxAggregateInputType = {
    id?: true
    shiftDayId?: true
    userId?: true
    status?: true
  }

  export type ShiftRequestCountAggregateInputType = {
    id?: true
    shiftDayId?: true
    userId?: true
    status?: true
    _all?: true
  }

  export type ShiftRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftRequest to aggregate.
     */
    where?: ShiftRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftRequests to fetch.
     */
    orderBy?: ShiftRequestOrderByWithRelationInput | ShiftRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftRequests
    **/
    _count?: true | ShiftRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftRequestMaxAggregateInputType
  }

  export type GetShiftRequestAggregateType<T extends ShiftRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftRequest[P]>
      : GetScalarType<T[P], AggregateShiftRequest[P]>
  }




  export type ShiftRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftRequestWhereInput
    orderBy?: ShiftRequestOrderByWithAggregationInput | ShiftRequestOrderByWithAggregationInput[]
    by: ShiftRequestScalarFieldEnum[] | ShiftRequestScalarFieldEnum
    having?: ShiftRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftRequestCountAggregateInputType | true
    _avg?: ShiftRequestAvgAggregateInputType
    _sum?: ShiftRequestSumAggregateInputType
    _min?: ShiftRequestMinAggregateInputType
    _max?: ShiftRequestMaxAggregateInputType
  }

  export type ShiftRequestGroupByOutputType = {
    id: number
    shiftDayId: number
    userId: number
    status: $Enums.GenericRequestStatus
    _count: ShiftRequestCountAggregateOutputType | null
    _avg: ShiftRequestAvgAggregateOutputType | null
    _sum: ShiftRequestSumAggregateOutputType | null
    _min: ShiftRequestMinAggregateOutputType | null
    _max: ShiftRequestMaxAggregateOutputType | null
  }

  type GetShiftRequestGroupByPayload<T extends ShiftRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftRequestGroupByOutputType[P]>
        }
      >
    >


  export type ShiftRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftDayId?: boolean
    userId?: boolean
    status?: boolean
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftRequest"]>

  export type ShiftRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftDayId?: boolean
    userId?: boolean
    status?: boolean
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftRequest"]>

  export type ShiftRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftDayId?: boolean
    userId?: boolean
    status?: boolean
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftRequest"]>

  export type ShiftRequestSelectScalar = {
    id?: boolean
    shiftDayId?: boolean
    userId?: boolean
    status?: boolean
  }

  export type ShiftRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shiftDayId" | "userId" | "status", ExtArgs["result"]["shiftRequest"]>
  export type ShiftRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShiftRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShiftRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shiftDay?: boolean | EventShiftDayDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShiftRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftRequest"
    objects: {
      shiftDay: Prisma.$EventShiftDayPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shiftDayId: number
      userId: number
      status: $Enums.GenericRequestStatus
    }, ExtArgs["result"]["shiftRequest"]>
    composites: {}
  }

  type ShiftRequestGetPayload<S extends boolean | null | undefined | ShiftRequestDefaultArgs> = $Result.GetResult<Prisma.$ShiftRequestPayload, S>

  type ShiftRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftRequestCountAggregateInputType | true
    }

  export interface ShiftRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftRequest'], meta: { name: 'ShiftRequest' } }
    /**
     * Find zero or one ShiftRequest that matches the filter.
     * @param {ShiftRequestFindUniqueArgs} args - Arguments to find a ShiftRequest
     * @example
     * // Get one ShiftRequest
     * const shiftRequest = await prisma.shiftRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftRequestFindUniqueArgs>(args: SelectSubset<T, ShiftRequestFindUniqueArgs<ExtArgs>>): Prisma__ShiftRequestClient<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShiftRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftRequestFindUniqueOrThrowArgs} args - Arguments to find a ShiftRequest
     * @example
     * // Get one ShiftRequest
     * const shiftRequest = await prisma.shiftRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftRequestClient<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRequestFindFirstArgs} args - Arguments to find a ShiftRequest
     * @example
     * // Get one ShiftRequest
     * const shiftRequest = await prisma.shiftRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftRequestFindFirstArgs>(args?: SelectSubset<T, ShiftRequestFindFirstArgs<ExtArgs>>): Prisma__ShiftRequestClient<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRequestFindFirstOrThrowArgs} args - Arguments to find a ShiftRequest
     * @example
     * // Get one ShiftRequest
     * const shiftRequest = await prisma.shiftRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftRequestClient<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShiftRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftRequests
     * const shiftRequests = await prisma.shiftRequest.findMany()
     * 
     * // Get first 10 ShiftRequests
     * const shiftRequests = await prisma.shiftRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftRequestWithIdOnly = await prisma.shiftRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftRequestFindManyArgs>(args?: SelectSubset<T, ShiftRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShiftRequest.
     * @param {ShiftRequestCreateArgs} args - Arguments to create a ShiftRequest.
     * @example
     * // Create one ShiftRequest
     * const ShiftRequest = await prisma.shiftRequest.create({
     *   data: {
     *     // ... data to create a ShiftRequest
     *   }
     * })
     * 
     */
    create<T extends ShiftRequestCreateArgs>(args: SelectSubset<T, ShiftRequestCreateArgs<ExtArgs>>): Prisma__ShiftRequestClient<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShiftRequests.
     * @param {ShiftRequestCreateManyArgs} args - Arguments to create many ShiftRequests.
     * @example
     * // Create many ShiftRequests
     * const shiftRequest = await prisma.shiftRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftRequestCreateManyArgs>(args?: SelectSubset<T, ShiftRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftRequests and returns the data saved in the database.
     * @param {ShiftRequestCreateManyAndReturnArgs} args - Arguments to create many ShiftRequests.
     * @example
     * // Create many ShiftRequests
     * const shiftRequest = await prisma.shiftRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftRequests and only return the `id`
     * const shiftRequestWithIdOnly = await prisma.shiftRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShiftRequest.
     * @param {ShiftRequestDeleteArgs} args - Arguments to delete one ShiftRequest.
     * @example
     * // Delete one ShiftRequest
     * const ShiftRequest = await prisma.shiftRequest.delete({
     *   where: {
     *     // ... filter to delete one ShiftRequest
     *   }
     * })
     * 
     */
    delete<T extends ShiftRequestDeleteArgs>(args: SelectSubset<T, ShiftRequestDeleteArgs<ExtArgs>>): Prisma__ShiftRequestClient<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShiftRequest.
     * @param {ShiftRequestUpdateArgs} args - Arguments to update one ShiftRequest.
     * @example
     * // Update one ShiftRequest
     * const shiftRequest = await prisma.shiftRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftRequestUpdateArgs>(args: SelectSubset<T, ShiftRequestUpdateArgs<ExtArgs>>): Prisma__ShiftRequestClient<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShiftRequests.
     * @param {ShiftRequestDeleteManyArgs} args - Arguments to filter ShiftRequests to delete.
     * @example
     * // Delete a few ShiftRequests
     * const { count } = await prisma.shiftRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftRequestDeleteManyArgs>(args?: SelectSubset<T, ShiftRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftRequests
     * const shiftRequest = await prisma.shiftRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftRequestUpdateManyArgs>(args: SelectSubset<T, ShiftRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftRequests and returns the data updated in the database.
     * @param {ShiftRequestUpdateManyAndReturnArgs} args - Arguments to update many ShiftRequests.
     * @example
     * // Update many ShiftRequests
     * const shiftRequest = await prisma.shiftRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShiftRequests and only return the `id`
     * const shiftRequestWithIdOnly = await prisma.shiftRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShiftRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShiftRequest.
     * @param {ShiftRequestUpsertArgs} args - Arguments to update or create a ShiftRequest.
     * @example
     * // Update or create a ShiftRequest
     * const shiftRequest = await prisma.shiftRequest.upsert({
     *   create: {
     *     // ... data to create a ShiftRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftRequest we want to update
     *   }
     * })
     */
    upsert<T extends ShiftRequestUpsertArgs>(args: SelectSubset<T, ShiftRequestUpsertArgs<ExtArgs>>): Prisma__ShiftRequestClient<$Result.GetResult<Prisma.$ShiftRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShiftRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRequestCountArgs} args - Arguments to filter ShiftRequests to count.
     * @example
     * // Count the number of ShiftRequests
     * const count = await prisma.shiftRequest.count({
     *   where: {
     *     // ... the filter for the ShiftRequests we want to count
     *   }
     * })
    **/
    count<T extends ShiftRequestCountArgs>(
      args?: Subset<T, ShiftRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftRequestAggregateArgs>(args: Subset<T, ShiftRequestAggregateArgs>): Prisma.PrismaPromise<GetShiftRequestAggregateType<T>>

    /**
     * Group by ShiftRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftRequestGroupByArgs['orderBy'] }
        : { orderBy?: ShiftRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftRequest model
   */
  readonly fields: ShiftRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shiftDay<T extends EventShiftDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventShiftDayDefaultArgs<ExtArgs>>): Prisma__EventShiftDayClient<$Result.GetResult<Prisma.$EventShiftDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShiftRequest model
   */
  interface ShiftRequestFieldRefs {
    readonly id: FieldRef<"ShiftRequest", 'Int'>
    readonly shiftDayId: FieldRef<"ShiftRequest", 'Int'>
    readonly userId: FieldRef<"ShiftRequest", 'Int'>
    readonly status: FieldRef<"ShiftRequest", 'GenericRequestStatus'>
  }
    

  // Custom InputTypes
  /**
   * ShiftRequest findUnique
   */
  export type ShiftRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftRequest to fetch.
     */
    where: ShiftRequestWhereUniqueInput
  }

  /**
   * ShiftRequest findUniqueOrThrow
   */
  export type ShiftRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftRequest to fetch.
     */
    where: ShiftRequestWhereUniqueInput
  }

  /**
   * ShiftRequest findFirst
   */
  export type ShiftRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftRequest to fetch.
     */
    where?: ShiftRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftRequests to fetch.
     */
    orderBy?: ShiftRequestOrderByWithRelationInput | ShiftRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftRequests.
     */
    cursor?: ShiftRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftRequests.
     */
    distinct?: ShiftRequestScalarFieldEnum | ShiftRequestScalarFieldEnum[]
  }

  /**
   * ShiftRequest findFirstOrThrow
   */
  export type ShiftRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftRequest to fetch.
     */
    where?: ShiftRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftRequests to fetch.
     */
    orderBy?: ShiftRequestOrderByWithRelationInput | ShiftRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftRequests.
     */
    cursor?: ShiftRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftRequests.
     */
    distinct?: ShiftRequestScalarFieldEnum | ShiftRequestScalarFieldEnum[]
  }

  /**
   * ShiftRequest findMany
   */
  export type ShiftRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftRequests to fetch.
     */
    where?: ShiftRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftRequests to fetch.
     */
    orderBy?: ShiftRequestOrderByWithRelationInput | ShiftRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftRequests.
     */
    cursor?: ShiftRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftRequests.
     */
    skip?: number
    distinct?: ShiftRequestScalarFieldEnum | ShiftRequestScalarFieldEnum[]
  }

  /**
   * ShiftRequest create
   */
  export type ShiftRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftRequest.
     */
    data: XOR<ShiftRequestCreateInput, ShiftRequestUncheckedCreateInput>
  }

  /**
   * ShiftRequest createMany
   */
  export type ShiftRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftRequests.
     */
    data: ShiftRequestCreateManyInput | ShiftRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftRequest createManyAndReturn
   */
  export type ShiftRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ShiftRequests.
     */
    data: ShiftRequestCreateManyInput | ShiftRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftRequest update
   */
  export type ShiftRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftRequest.
     */
    data: XOR<ShiftRequestUpdateInput, ShiftRequestUncheckedUpdateInput>
    /**
     * Choose, which ShiftRequest to update.
     */
    where: ShiftRequestWhereUniqueInput
  }

  /**
   * ShiftRequest updateMany
   */
  export type ShiftRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftRequests.
     */
    data: XOR<ShiftRequestUpdateManyMutationInput, ShiftRequestUncheckedUpdateManyInput>
    /**
     * Filter which ShiftRequests to update
     */
    where?: ShiftRequestWhereInput
    /**
     * Limit how many ShiftRequests to update.
     */
    limit?: number
  }

  /**
   * ShiftRequest updateManyAndReturn
   */
  export type ShiftRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * The data used to update ShiftRequests.
     */
    data: XOR<ShiftRequestUpdateManyMutationInput, ShiftRequestUncheckedUpdateManyInput>
    /**
     * Filter which ShiftRequests to update
     */
    where?: ShiftRequestWhereInput
    /**
     * Limit how many ShiftRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftRequest upsert
   */
  export type ShiftRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftRequest to update in case it exists.
     */
    where: ShiftRequestWhereUniqueInput
    /**
     * In case the ShiftRequest found by the `where` argument doesn't exist, create a new ShiftRequest with this data.
     */
    create: XOR<ShiftRequestCreateInput, ShiftRequestUncheckedCreateInput>
    /**
     * In case the ShiftRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftRequestUpdateInput, ShiftRequestUncheckedUpdateInput>
  }

  /**
   * ShiftRequest delete
   */
  export type ShiftRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
    /**
     * Filter which ShiftRequest to delete.
     */
    where: ShiftRequestWhereUniqueInput
  }

  /**
   * ShiftRequest deleteMany
   */
  export type ShiftRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftRequests to delete
     */
    where?: ShiftRequestWhereInput
    /**
     * Limit how many ShiftRequests to delete.
     */
    limit?: number
  }

  /**
   * ShiftRequest without action
   */
  export type ShiftRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftRequest
     */
    select?: ShiftRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftRequest
     */
    omit?: ShiftRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
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

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventRequestScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    status: 'status',
    isInvitation: 'isInvitation'
  };

  export type EventRequestScalarFieldEnum = (typeof EventRequestScalarFieldEnum)[keyof typeof EventRequestScalarFieldEnum]


  export const EventSectionScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    sectionName: 'sectionName',
    description: 'description'
  };

  export type EventSectionScalarFieldEnum = (typeof EventSectionScalarFieldEnum)[keyof typeof EventSectionScalarFieldEnum]


  export const SectionFileScalarFieldEnum: {
    id: 'id',
    sectionId: 'sectionId',
    name: 'name',
    dataBytes: 'dataBytes'
  };

  export type SectionFileScalarFieldEnum = (typeof SectionFileScalarFieldEnum)[keyof typeof SectionFileScalarFieldEnum]


  export const EventUserListScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    role: 'role'
  };

  export type EventUserListScalarFieldEnum = (typeof EventUserListScalarFieldEnum)[keyof typeof EventUserListScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    title: 'title',
    description: 'description',
    incidentDate: 'incidentDate'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const EventShiftTimeScalarFieldEnum: {
    id: 'id',
    shiftDayId: 'shiftDayId',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type EventShiftTimeScalarFieldEnum = (typeof EventShiftTimeScalarFieldEnum)[keyof typeof EventShiftTimeScalarFieldEnum]


  export const EventShiftDayScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    day: 'day',
    maxUsers: 'maxUsers',
    role: 'role'
  };

  export type EventShiftDayScalarFieldEnum = (typeof EventShiftDayScalarFieldEnum)[keyof typeof EventShiftDayScalarFieldEnum]


  export const ShiftRequestScalarFieldEnum: {
    id: 'id',
    shiftDayId: 'shiftDayId',
    userId: 'userId',
    status: 'status'
  };

  export type ShiftRequestScalarFieldEnum = (typeof ShiftRequestScalarFieldEnum)[keyof typeof ShiftRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UserLevel'
   */
  export type EnumUserLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserLevel'>
    


  /**
   * Reference to a field of type 'UserLevel[]'
   */
  export type ListEnumUserLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserLevel[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'USAState'
   */
  export type EnumUSAStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USAState'>
    


  /**
   * Reference to a field of type 'USAState[]'
   */
  export type ListEnumUSAStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USAState[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'GenericRequestStatus'
   */
  export type EnumGenericRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenericRequestStatus'>
    


  /**
   * Reference to a field of type 'GenericRequestStatus[]'
   */
  export type ListEnumGenericRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenericRequestStatus[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    level?: EnumUserLevelFilter<"User"> | $Enums.UserLevel
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    state?: EnumUSAStateFilter<"User"> | $Enums.USAState
    zipCode?: StringFilter<"User"> | string
    birthday?: DateTimeFilter<"User"> | Date | string
    hireDate?: DateTimeFilter<"User"> | Date | string
    phone?: StringFilter<"User"> | string
    active?: BoolFilter<"User"> | boolean
    guardCard?: BoolFilter<"User"> | boolean
    supervisotCount?: IntFilter<"User"> | number
    managerCount?: IntFilter<"User"> | number
    logisticCount?: IntFilter<"User"> | number
    driverCount?: IntFilter<"User"> | number
    dispatchCount?: IntFilter<"User"> | number
    assistantManagerCount?: IntFilter<"User"> | number
    contactName1?: StringFilter<"User"> | string
    contactPhone1?: StringFilter<"User"> | string
    contactName2?: StringFilter<"User"> | string
    contactPhone2?: StringFilter<"User"> | string
    eventUsers?: EventUserListListRelationFilter
    eventRequests?: EventRequestListRelationFilter
    incidents?: IncidentListRelationFilter
    shiftRequests?: ShiftRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    birthday?: SortOrder
    hireDate?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    guardCard?: SortOrder
    supervisotCount?: SortOrder
    managerCount?: SortOrder
    logisticCount?: SortOrder
    driverCount?: SortOrder
    dispatchCount?: SortOrder
    assistantManagerCount?: SortOrder
    contactName1?: SortOrder
    contactPhone1?: SortOrder
    contactName2?: SortOrder
    contactPhone2?: SortOrder
    eventUsers?: EventUserListOrderByRelationAggregateInput
    eventRequests?: EventRequestOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
    shiftRequests?: ShiftRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    level?: EnumUserLevelFilter<"User"> | $Enums.UserLevel
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    state?: EnumUSAStateFilter<"User"> | $Enums.USAState
    zipCode?: StringFilter<"User"> | string
    birthday?: DateTimeFilter<"User"> | Date | string
    hireDate?: DateTimeFilter<"User"> | Date | string
    phone?: StringFilter<"User"> | string
    active?: BoolFilter<"User"> | boolean
    guardCard?: BoolFilter<"User"> | boolean
    supervisotCount?: IntFilter<"User"> | number
    managerCount?: IntFilter<"User"> | number
    logisticCount?: IntFilter<"User"> | number
    driverCount?: IntFilter<"User"> | number
    dispatchCount?: IntFilter<"User"> | number
    assistantManagerCount?: IntFilter<"User"> | number
    contactName1?: StringFilter<"User"> | string
    contactPhone1?: StringFilter<"User"> | string
    contactName2?: StringFilter<"User"> | string
    contactPhone2?: StringFilter<"User"> | string
    eventUsers?: EventUserListListRelationFilter
    eventRequests?: EventRequestListRelationFilter
    incidents?: IncidentListRelationFilter
    shiftRequests?: ShiftRequestListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    birthday?: SortOrder
    hireDate?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    guardCard?: SortOrder
    supervisotCount?: SortOrder
    managerCount?: SortOrder
    logisticCount?: SortOrder
    driverCount?: SortOrder
    dispatchCount?: SortOrder
    assistantManagerCount?: SortOrder
    contactName1?: SortOrder
    contactPhone1?: SortOrder
    contactName2?: SortOrder
    contactPhone2?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    level?: EnumUserLevelWithAggregatesFilter<"User"> | $Enums.UserLevel
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    city?: StringWithAggregatesFilter<"User"> | string
    state?: EnumUSAStateWithAggregatesFilter<"User"> | $Enums.USAState
    zipCode?: StringWithAggregatesFilter<"User"> | string
    birthday?: DateTimeWithAggregatesFilter<"User"> | Date | string
    hireDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    phone?: StringWithAggregatesFilter<"User"> | string
    active?: BoolWithAggregatesFilter<"User"> | boolean
    guardCard?: BoolWithAggregatesFilter<"User"> | boolean
    supervisotCount?: IntWithAggregatesFilter<"User"> | number
    managerCount?: IntWithAggregatesFilter<"User"> | number
    logisticCount?: IntWithAggregatesFilter<"User"> | number
    driverCount?: IntWithAggregatesFilter<"User"> | number
    dispatchCount?: IntWithAggregatesFilter<"User"> | number
    assistantManagerCount?: IntWithAggregatesFilter<"User"> | number
    contactName1?: StringWithAggregatesFilter<"User"> | string
    contactPhone1?: StringWithAggregatesFilter<"User"> | string
    contactName2?: StringWithAggregatesFilter<"User"> | string
    contactPhone2?: StringWithAggregatesFilter<"User"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    city?: StringFilter<"Event"> | string
    state?: EnumUSAStateFilter<"Event"> | $Enums.USAState
    zipCode?: StringFilter<"Event"> | string
    address?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    public?: BoolFilter<"Event"> | boolean
    done?: BoolFilter<"Event"> | boolean
    eventUsers?: EventUserListListRelationFilter
    sections?: EventSectionListRelationFilter
    userRequests?: EventRequestListRelationFilter
    incidents?: IncidentListRelationFilter
    shifts?: EventShiftDayListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    address?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    public?: SortOrder
    done?: SortOrder
    eventUsers?: EventUserListOrderByRelationAggregateInput
    sections?: EventSectionOrderByRelationAggregateInput
    userRequests?: EventRequestOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
    shifts?: EventShiftDayOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    city?: StringFilter<"Event"> | string
    state?: EnumUSAStateFilter<"Event"> | $Enums.USAState
    zipCode?: StringFilter<"Event"> | string
    address?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    public?: BoolFilter<"Event"> | boolean
    done?: BoolFilter<"Event"> | boolean
    eventUsers?: EventUserListListRelationFilter
    sections?: EventSectionListRelationFilter
    userRequests?: EventRequestListRelationFilter
    incidents?: IncidentListRelationFilter
    shifts?: EventShiftDayListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    address?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    public?: SortOrder
    done?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    name?: StringWithAggregatesFilter<"Event"> | string
    city?: StringWithAggregatesFilter<"Event"> | string
    state?: EnumUSAStateWithAggregatesFilter<"Event"> | $Enums.USAState
    zipCode?: StringWithAggregatesFilter<"Event"> | string
    address?: StringWithAggregatesFilter<"Event"> | string
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    public?: BoolWithAggregatesFilter<"Event"> | boolean
    done?: BoolWithAggregatesFilter<"Event"> | boolean
  }

  export type EventRequestWhereInput = {
    AND?: EventRequestWhereInput | EventRequestWhereInput[]
    OR?: EventRequestWhereInput[]
    NOT?: EventRequestWhereInput | EventRequestWhereInput[]
    id?: IntFilter<"EventRequest"> | number
    eventId?: IntFilter<"EventRequest"> | number
    userId?: IntFilter<"EventRequest"> | number
    status?: EnumGenericRequestStatusFilter<"EventRequest"> | $Enums.GenericRequestStatus
    isInvitation?: BoolFilter<"EventRequest"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventRequestOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    isInvitation?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EventRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventRequestWhereInput | EventRequestWhereInput[]
    OR?: EventRequestWhereInput[]
    NOT?: EventRequestWhereInput | EventRequestWhereInput[]
    eventId?: IntFilter<"EventRequest"> | number
    userId?: IntFilter<"EventRequest"> | number
    status?: EnumGenericRequestStatusFilter<"EventRequest"> | $Enums.GenericRequestStatus
    isInvitation?: BoolFilter<"EventRequest"> | boolean
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EventRequestOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    isInvitation?: SortOrder
    _count?: EventRequestCountOrderByAggregateInput
    _avg?: EventRequestAvgOrderByAggregateInput
    _max?: EventRequestMaxOrderByAggregateInput
    _min?: EventRequestMinOrderByAggregateInput
    _sum?: EventRequestSumOrderByAggregateInput
  }

  export type EventRequestScalarWhereWithAggregatesInput = {
    AND?: EventRequestScalarWhereWithAggregatesInput | EventRequestScalarWhereWithAggregatesInput[]
    OR?: EventRequestScalarWhereWithAggregatesInput[]
    NOT?: EventRequestScalarWhereWithAggregatesInput | EventRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventRequest"> | number
    eventId?: IntWithAggregatesFilter<"EventRequest"> | number
    userId?: IntWithAggregatesFilter<"EventRequest"> | number
    status?: EnumGenericRequestStatusWithAggregatesFilter<"EventRequest"> | $Enums.GenericRequestStatus
    isInvitation?: BoolWithAggregatesFilter<"EventRequest"> | boolean
  }

  export type EventSectionWhereInput = {
    AND?: EventSectionWhereInput | EventSectionWhereInput[]
    OR?: EventSectionWhereInput[]
    NOT?: EventSectionWhereInput | EventSectionWhereInput[]
    id?: IntFilter<"EventSection"> | number
    eventId?: IntFilter<"EventSection"> | number
    sectionName?: StringFilter<"EventSection"> | string
    description?: StringFilter<"EventSection"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    files?: SectionFileListRelationFilter
  }

  export type EventSectionOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    sectionName?: SortOrder
    description?: SortOrder
    event?: EventOrderByWithRelationInput
    files?: SectionFileOrderByRelationAggregateInput
  }

  export type EventSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventSectionWhereInput | EventSectionWhereInput[]
    OR?: EventSectionWhereInput[]
    NOT?: EventSectionWhereInput | EventSectionWhereInput[]
    eventId?: IntFilter<"EventSection"> | number
    sectionName?: StringFilter<"EventSection"> | string
    description?: StringFilter<"EventSection"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    files?: SectionFileListRelationFilter
  }, "id">

  export type EventSectionOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    sectionName?: SortOrder
    description?: SortOrder
    _count?: EventSectionCountOrderByAggregateInput
    _avg?: EventSectionAvgOrderByAggregateInput
    _max?: EventSectionMaxOrderByAggregateInput
    _min?: EventSectionMinOrderByAggregateInput
    _sum?: EventSectionSumOrderByAggregateInput
  }

  export type EventSectionScalarWhereWithAggregatesInput = {
    AND?: EventSectionScalarWhereWithAggregatesInput | EventSectionScalarWhereWithAggregatesInput[]
    OR?: EventSectionScalarWhereWithAggregatesInput[]
    NOT?: EventSectionScalarWhereWithAggregatesInput | EventSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventSection"> | number
    eventId?: IntWithAggregatesFilter<"EventSection"> | number
    sectionName?: StringWithAggregatesFilter<"EventSection"> | string
    description?: StringWithAggregatesFilter<"EventSection"> | string
  }

  export type SectionFileWhereInput = {
    AND?: SectionFileWhereInput | SectionFileWhereInput[]
    OR?: SectionFileWhereInput[]
    NOT?: SectionFileWhereInput | SectionFileWhereInput[]
    id?: IntFilter<"SectionFile"> | number
    sectionId?: IntFilter<"SectionFile"> | number
    name?: StringFilter<"SectionFile"> | string
    dataBytes?: BytesFilter<"SectionFile"> | Uint8Array
    section?: XOR<EventSectionScalarRelationFilter, EventSectionWhereInput>
  }

  export type SectionFileOrderByWithRelationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    name?: SortOrder
    dataBytes?: SortOrder
    section?: EventSectionOrderByWithRelationInput
  }

  export type SectionFileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SectionFileWhereInput | SectionFileWhereInput[]
    OR?: SectionFileWhereInput[]
    NOT?: SectionFileWhereInput | SectionFileWhereInput[]
    sectionId?: IntFilter<"SectionFile"> | number
    name?: StringFilter<"SectionFile"> | string
    dataBytes?: BytesFilter<"SectionFile"> | Uint8Array
    section?: XOR<EventSectionScalarRelationFilter, EventSectionWhereInput>
  }, "id">

  export type SectionFileOrderByWithAggregationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    name?: SortOrder
    dataBytes?: SortOrder
    _count?: SectionFileCountOrderByAggregateInput
    _avg?: SectionFileAvgOrderByAggregateInput
    _max?: SectionFileMaxOrderByAggregateInput
    _min?: SectionFileMinOrderByAggregateInput
    _sum?: SectionFileSumOrderByAggregateInput
  }

  export type SectionFileScalarWhereWithAggregatesInput = {
    AND?: SectionFileScalarWhereWithAggregatesInput | SectionFileScalarWhereWithAggregatesInput[]
    OR?: SectionFileScalarWhereWithAggregatesInput[]
    NOT?: SectionFileScalarWhereWithAggregatesInput | SectionFileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SectionFile"> | number
    sectionId?: IntWithAggregatesFilter<"SectionFile"> | number
    name?: StringWithAggregatesFilter<"SectionFile"> | string
    dataBytes?: BytesWithAggregatesFilter<"SectionFile"> | Uint8Array
  }

  export type EventUserListWhereInput = {
    AND?: EventUserListWhereInput | EventUserListWhereInput[]
    OR?: EventUserListWhereInput[]
    NOT?: EventUserListWhereInput | EventUserListWhereInput[]
    id?: IntFilter<"EventUserList"> | number
    userId?: IntFilter<"EventUserList"> | number
    eventId?: IntFilter<"EventUserList"> | number
    role?: EnumUserRoleFilter<"EventUserList"> | $Enums.UserRole
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventUserListOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type EventUserListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventUserListWhereInput | EventUserListWhereInput[]
    OR?: EventUserListWhereInput[]
    NOT?: EventUserListWhereInput | EventUserListWhereInput[]
    userId?: IntFilter<"EventUserList"> | number
    eventId?: IntFilter<"EventUserList"> | number
    role?: EnumUserRoleFilter<"EventUserList"> | $Enums.UserRole
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type EventUserListOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    _count?: EventUserListCountOrderByAggregateInput
    _avg?: EventUserListAvgOrderByAggregateInput
    _max?: EventUserListMaxOrderByAggregateInput
    _min?: EventUserListMinOrderByAggregateInput
    _sum?: EventUserListSumOrderByAggregateInput
  }

  export type EventUserListScalarWhereWithAggregatesInput = {
    AND?: EventUserListScalarWhereWithAggregatesInput | EventUserListScalarWhereWithAggregatesInput[]
    OR?: EventUserListScalarWhereWithAggregatesInput[]
    NOT?: EventUserListScalarWhereWithAggregatesInput | EventUserListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventUserList"> | number
    userId?: IntWithAggregatesFilter<"EventUserList"> | number
    eventId?: IntWithAggregatesFilter<"EventUserList"> | number
    role?: EnumUserRoleWithAggregatesFilter<"EventUserList"> | $Enums.UserRole
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: IntFilter<"Incident"> | number
    eventId?: IntFilter<"Incident"> | number
    userId?: IntFilter<"Incident"> | number
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    incidentDate?: DateTimeFilter<"Incident"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    incidentDate?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    eventId?: IntFilter<"Incident"> | number
    userId?: IntFilter<"Incident"> | number
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    incidentDate?: DateTimeFilter<"Incident"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    incidentDate?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _avg?: IncidentAvgOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
    _sum?: IncidentSumOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Incident"> | number
    eventId?: IntWithAggregatesFilter<"Incident"> | number
    userId?: IntWithAggregatesFilter<"Incident"> | number
    title?: StringWithAggregatesFilter<"Incident"> | string
    description?: StringWithAggregatesFilter<"Incident"> | string
    incidentDate?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
  }

  export type EventShiftTimeWhereInput = {
    AND?: EventShiftTimeWhereInput | EventShiftTimeWhereInput[]
    OR?: EventShiftTimeWhereInput[]
    NOT?: EventShiftTimeWhereInput | EventShiftTimeWhereInput[]
    id?: IntFilter<"EventShiftTime"> | number
    shiftDayId?: IntFilter<"EventShiftTime"> | number
    startTime?: DateTimeFilter<"EventShiftTime"> | Date | string
    endTime?: DateTimeFilter<"EventShiftTime"> | Date | string
    shiftDay?: XOR<EventShiftDayScalarRelationFilter, EventShiftDayWhereInput>
  }

  export type EventShiftTimeOrderByWithRelationInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    shiftDay?: EventShiftDayOrderByWithRelationInput
  }

  export type EventShiftTimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventShiftTimeWhereInput | EventShiftTimeWhereInput[]
    OR?: EventShiftTimeWhereInput[]
    NOT?: EventShiftTimeWhereInput | EventShiftTimeWhereInput[]
    shiftDayId?: IntFilter<"EventShiftTime"> | number
    startTime?: DateTimeFilter<"EventShiftTime"> | Date | string
    endTime?: DateTimeFilter<"EventShiftTime"> | Date | string
    shiftDay?: XOR<EventShiftDayScalarRelationFilter, EventShiftDayWhereInput>
  }, "id">

  export type EventShiftTimeOrderByWithAggregationInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: EventShiftTimeCountOrderByAggregateInput
    _avg?: EventShiftTimeAvgOrderByAggregateInput
    _max?: EventShiftTimeMaxOrderByAggregateInput
    _min?: EventShiftTimeMinOrderByAggregateInput
    _sum?: EventShiftTimeSumOrderByAggregateInput
  }

  export type EventShiftTimeScalarWhereWithAggregatesInput = {
    AND?: EventShiftTimeScalarWhereWithAggregatesInput | EventShiftTimeScalarWhereWithAggregatesInput[]
    OR?: EventShiftTimeScalarWhereWithAggregatesInput[]
    NOT?: EventShiftTimeScalarWhereWithAggregatesInput | EventShiftTimeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventShiftTime"> | number
    shiftDayId?: IntWithAggregatesFilter<"EventShiftTime"> | number
    startTime?: DateTimeWithAggregatesFilter<"EventShiftTime"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"EventShiftTime"> | Date | string
  }

  export type EventShiftDayWhereInput = {
    AND?: EventShiftDayWhereInput | EventShiftDayWhereInput[]
    OR?: EventShiftDayWhereInput[]
    NOT?: EventShiftDayWhereInput | EventShiftDayWhereInput[]
    id?: IntFilter<"EventShiftDay"> | number
    eventId?: IntFilter<"EventShiftDay"> | number
    day?: DateTimeFilter<"EventShiftDay"> | Date | string
    maxUsers?: IntFilter<"EventShiftDay"> | number
    role?: EnumUserRoleFilter<"EventShiftDay"> | $Enums.UserRole
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    times?: EventShiftTimeListRelationFilter
    requests?: ShiftRequestListRelationFilter
  }

  export type EventShiftDayOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    day?: SortOrder
    maxUsers?: SortOrder
    role?: SortOrder
    event?: EventOrderByWithRelationInput
    times?: EventShiftTimeOrderByRelationAggregateInput
    requests?: ShiftRequestOrderByRelationAggregateInput
  }

  export type EventShiftDayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventShiftDayWhereInput | EventShiftDayWhereInput[]
    OR?: EventShiftDayWhereInput[]
    NOT?: EventShiftDayWhereInput | EventShiftDayWhereInput[]
    eventId?: IntFilter<"EventShiftDay"> | number
    day?: DateTimeFilter<"EventShiftDay"> | Date | string
    maxUsers?: IntFilter<"EventShiftDay"> | number
    role?: EnumUserRoleFilter<"EventShiftDay"> | $Enums.UserRole
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    times?: EventShiftTimeListRelationFilter
    requests?: ShiftRequestListRelationFilter
  }, "id">

  export type EventShiftDayOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    day?: SortOrder
    maxUsers?: SortOrder
    role?: SortOrder
    _count?: EventShiftDayCountOrderByAggregateInput
    _avg?: EventShiftDayAvgOrderByAggregateInput
    _max?: EventShiftDayMaxOrderByAggregateInput
    _min?: EventShiftDayMinOrderByAggregateInput
    _sum?: EventShiftDaySumOrderByAggregateInput
  }

  export type EventShiftDayScalarWhereWithAggregatesInput = {
    AND?: EventShiftDayScalarWhereWithAggregatesInput | EventShiftDayScalarWhereWithAggregatesInput[]
    OR?: EventShiftDayScalarWhereWithAggregatesInput[]
    NOT?: EventShiftDayScalarWhereWithAggregatesInput | EventShiftDayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventShiftDay"> | number
    eventId?: IntWithAggregatesFilter<"EventShiftDay"> | number
    day?: DateTimeWithAggregatesFilter<"EventShiftDay"> | Date | string
    maxUsers?: IntWithAggregatesFilter<"EventShiftDay"> | number
    role?: EnumUserRoleWithAggregatesFilter<"EventShiftDay"> | $Enums.UserRole
  }

  export type ShiftRequestWhereInput = {
    AND?: ShiftRequestWhereInput | ShiftRequestWhereInput[]
    OR?: ShiftRequestWhereInput[]
    NOT?: ShiftRequestWhereInput | ShiftRequestWhereInput[]
    id?: IntFilter<"ShiftRequest"> | number
    shiftDayId?: IntFilter<"ShiftRequest"> | number
    userId?: IntFilter<"ShiftRequest"> | number
    status?: EnumGenericRequestStatusFilter<"ShiftRequest"> | $Enums.GenericRequestStatus
    shiftDay?: XOR<EventShiftDayScalarRelationFilter, EventShiftDayWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ShiftRequestOrderByWithRelationInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    shiftDay?: EventShiftDayOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ShiftRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShiftRequestWhereInput | ShiftRequestWhereInput[]
    OR?: ShiftRequestWhereInput[]
    NOT?: ShiftRequestWhereInput | ShiftRequestWhereInput[]
    shiftDayId?: IntFilter<"ShiftRequest"> | number
    userId?: IntFilter<"ShiftRequest"> | number
    status?: EnumGenericRequestStatusFilter<"ShiftRequest"> | $Enums.GenericRequestStatus
    shiftDay?: XOR<EventShiftDayScalarRelationFilter, EventShiftDayWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ShiftRequestOrderByWithAggregationInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    _count?: ShiftRequestCountOrderByAggregateInput
    _avg?: ShiftRequestAvgOrderByAggregateInput
    _max?: ShiftRequestMaxOrderByAggregateInput
    _min?: ShiftRequestMinOrderByAggregateInput
    _sum?: ShiftRequestSumOrderByAggregateInput
  }

  export type ShiftRequestScalarWhereWithAggregatesInput = {
    AND?: ShiftRequestScalarWhereWithAggregatesInput | ShiftRequestScalarWhereWithAggregatesInput[]
    OR?: ShiftRequestScalarWhereWithAggregatesInput[]
    NOT?: ShiftRequestScalarWhereWithAggregatesInput | ShiftRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShiftRequest"> | number
    shiftDayId?: IntWithAggregatesFilter<"ShiftRequest"> | number
    userId?: IntWithAggregatesFilter<"ShiftRequest"> | number
    status?: EnumGenericRequestStatusWithAggregatesFilter<"ShiftRequest"> | $Enums.GenericRequestStatus
  }

  export type UserCreateInput = {
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date | string
    hireDate: Date | string
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
    eventUsers?: EventUserListCreateNestedManyWithoutUserInput
    eventRequests?: EventRequestCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
    shiftRequests?: ShiftRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date | string
    hireDate: Date | string
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
    eventUsers?: EventUserListUncheckedCreateNestedManyWithoutUserInput
    eventRequests?: EventRequestUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
    shiftRequests?: ShiftRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
    eventUsers?: EventUserListUpdateManyWithoutUserNestedInput
    eventRequests?: EventRequestUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
    shiftRequests?: ShiftRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
    eventUsers?: EventUserListUncheckedUpdateManyWithoutUserNestedInput
    eventRequests?: EventRequestUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
    shiftRequests?: ShiftRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date | string
    hireDate: Date | string
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
  }

  export type UserUpdateManyMutationInput = {
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    eventUsers?: EventUserListCreateNestedManyWithoutEventInput
    sections?: EventSectionCreateNestedManyWithoutEventInput
    userRequests?: EventRequestCreateNestedManyWithoutEventInput
    incidents?: IncidentCreateNestedManyWithoutEventInput
    shifts?: EventShiftDayCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    eventUsers?: EventUserListUncheckedCreateNestedManyWithoutEventInput
    sections?: EventSectionUncheckedCreateNestedManyWithoutEventInput
    userRequests?: EventRequestUncheckedCreateNestedManyWithoutEventInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutEventInput
    shifts?: EventShiftDayUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    eventUsers?: EventUserListUpdateManyWithoutEventNestedInput
    sections?: EventSectionUpdateManyWithoutEventNestedInput
    userRequests?: EventRequestUpdateManyWithoutEventNestedInput
    incidents?: IncidentUpdateManyWithoutEventNestedInput
    shifts?: EventShiftDayUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    eventUsers?: EventUserListUncheckedUpdateManyWithoutEventNestedInput
    sections?: EventSectionUncheckedUpdateManyWithoutEventNestedInput
    userRequests?: EventRequestUncheckedUpdateManyWithoutEventNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutEventNestedInput
    shifts?: EventShiftDayUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
  }

  export type EventUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventRequestCreateInput = {
    status: $Enums.GenericRequestStatus
    isInvitation: boolean
    event: EventCreateNestedOneWithoutUserRequestsInput
    user: UserCreateNestedOneWithoutEventRequestsInput
  }

  export type EventRequestUncheckedCreateInput = {
    id?: number
    eventId: number
    userId: number
    status: $Enums.GenericRequestStatus
    isInvitation: boolean
  }

  export type EventRequestUpdateInput = {
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    isInvitation?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutUserRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutEventRequestsNestedInput
  }

  export type EventRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    isInvitation?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventRequestCreateManyInput = {
    id?: number
    eventId: number
    userId: number
    status: $Enums.GenericRequestStatus
    isInvitation: boolean
  }

  export type EventRequestUpdateManyMutationInput = {
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    isInvitation?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    isInvitation?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventSectionCreateInput = {
    sectionName: string
    description: string
    event: EventCreateNestedOneWithoutSectionsInput
    files?: SectionFileCreateNestedManyWithoutSectionInput
  }

  export type EventSectionUncheckedCreateInput = {
    id?: number
    eventId: number
    sectionName: string
    description: string
    files?: SectionFileUncheckedCreateNestedManyWithoutSectionInput
  }

  export type EventSectionUpdateInput = {
    sectionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutSectionsNestedInput
    files?: SectionFileUpdateManyWithoutSectionNestedInput
  }

  export type EventSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    files?: SectionFileUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type EventSectionCreateManyInput = {
    id?: number
    eventId: number
    sectionName: string
    description: string
  }

  export type EventSectionUpdateManyMutationInput = {
    sectionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type EventSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SectionFileCreateInput = {
    name: string
    dataBytes: Uint8Array
    section: EventSectionCreateNestedOneWithoutFilesInput
  }

  export type SectionFileUncheckedCreateInput = {
    id?: number
    sectionId: number
    name: string
    dataBytes: Uint8Array
  }

  export type SectionFileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataBytes?: BytesFieldUpdateOperationsInput | Uint8Array
    section?: EventSectionUpdateOneRequiredWithoutFilesNestedInput
  }

  export type SectionFileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataBytes?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type SectionFileCreateManyInput = {
    id?: number
    sectionId: number
    name: string
    dataBytes: Uint8Array
  }

  export type SectionFileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataBytes?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type SectionFileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataBytes?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type EventUserListCreateInput = {
    role: $Enums.UserRole
    user: UserCreateNestedOneWithoutEventUsersInput
    event: EventCreateNestedOneWithoutEventUsersInput
  }

  export type EventUserListUncheckedCreateInput = {
    id?: number
    userId: number
    eventId: number
    role: $Enums.UserRole
  }

  export type EventUserListUpdateInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    user?: UserUpdateOneRequiredWithoutEventUsersNestedInput
    event?: EventUpdateOneRequiredWithoutEventUsersNestedInput
  }

  export type EventUserListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type EventUserListCreateManyInput = {
    id?: number
    userId: number
    eventId: number
    role: $Enums.UserRole
  }

  export type EventUserListUpdateManyMutationInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type EventUserListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type IncidentCreateInput = {
    title: string
    description: string
    incidentDate: Date | string
    event: EventCreateNestedOneWithoutIncidentsInput
    user: UserCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: number
    eventId: number
    userId: number
    title: string
    description: string
    incidentDate: Date | string
  }

  export type IncidentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutIncidentsNestedInput
    user?: UserUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateManyInput = {
    id?: number
    eventId: number
    userId: number
    title: string
    description: string
    incidentDate: Date | string
  }

  export type IncidentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventShiftTimeCreateInput = {
    startTime: Date | string
    endTime: Date | string
    shiftDay: EventShiftDayCreateNestedOneWithoutTimesInput
  }

  export type EventShiftTimeUncheckedCreateInput = {
    id?: number
    shiftDayId: number
    startTime: Date | string
    endTime: Date | string
  }

  export type EventShiftTimeUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftDay?: EventShiftDayUpdateOneRequiredWithoutTimesNestedInput
  }

  export type EventShiftTimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDayId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventShiftTimeCreateManyInput = {
    id?: number
    shiftDayId: number
    startTime: Date | string
    endTime: Date | string
  }

  export type EventShiftTimeUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventShiftTimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDayId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventShiftDayCreateInput = {
    day: Date | string
    maxUsers: number
    role: $Enums.UserRole
    event: EventCreateNestedOneWithoutShiftsInput
    times?: EventShiftTimeCreateNestedManyWithoutShiftDayInput
    requests?: ShiftRequestCreateNestedManyWithoutShiftDayInput
  }

  export type EventShiftDayUncheckedCreateInput = {
    id?: number
    eventId: number
    day: Date | string
    maxUsers: number
    role: $Enums.UserRole
    times?: EventShiftTimeUncheckedCreateNestedManyWithoutShiftDayInput
    requests?: ShiftRequestUncheckedCreateNestedManyWithoutShiftDayInput
  }

  export type EventShiftDayUpdateInput = {
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    event?: EventUpdateOneRequiredWithoutShiftsNestedInput
    times?: EventShiftTimeUpdateManyWithoutShiftDayNestedInput
    requests?: ShiftRequestUpdateManyWithoutShiftDayNestedInput
  }

  export type EventShiftDayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    times?: EventShiftTimeUncheckedUpdateManyWithoutShiftDayNestedInput
    requests?: ShiftRequestUncheckedUpdateManyWithoutShiftDayNestedInput
  }

  export type EventShiftDayCreateManyInput = {
    id?: number
    eventId: number
    day: Date | string
    maxUsers: number
    role: $Enums.UserRole
  }

  export type EventShiftDayUpdateManyMutationInput = {
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type EventShiftDayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type ShiftRequestCreateInput = {
    status: $Enums.GenericRequestStatus
    shiftDay: EventShiftDayCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutShiftRequestsInput
  }

  export type ShiftRequestUncheckedCreateInput = {
    id?: number
    shiftDayId: number
    userId: number
    status: $Enums.GenericRequestStatus
  }

  export type ShiftRequestUpdateInput = {
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    shiftDay?: EventShiftDayUpdateOneRequiredWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutShiftRequestsNestedInput
  }

  export type ShiftRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDayId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
  }

  export type ShiftRequestCreateManyInput = {
    id?: number
    shiftDayId: number
    userId: number
    status: $Enums.GenericRequestStatus
  }

  export type ShiftRequestUpdateManyMutationInput = {
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
  }

  export type ShiftRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDayId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumUserLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLevel | EnumUserLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLevelFilter<$PrismaModel> | $Enums.UserLevel
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUSAStateFilter<$PrismaModel = never> = {
    equals?: $Enums.USAState | EnumUSAStateFieldRefInput<$PrismaModel>
    in?: $Enums.USAState[] | ListEnumUSAStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.USAState[] | ListEnumUSAStateFieldRefInput<$PrismaModel>
    not?: NestedEnumUSAStateFilter<$PrismaModel> | $Enums.USAState
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EventUserListListRelationFilter = {
    every?: EventUserListWhereInput
    some?: EventUserListWhereInput
    none?: EventUserListWhereInput
  }

  export type EventRequestListRelationFilter = {
    every?: EventRequestWhereInput
    some?: EventRequestWhereInput
    none?: EventRequestWhereInput
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type ShiftRequestListRelationFilter = {
    every?: ShiftRequestWhereInput
    some?: ShiftRequestWhereInput
    none?: ShiftRequestWhereInput
  }

  export type EventUserListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    birthday?: SortOrder
    hireDate?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    guardCard?: SortOrder
    supervisotCount?: SortOrder
    managerCount?: SortOrder
    logisticCount?: SortOrder
    driverCount?: SortOrder
    dispatchCount?: SortOrder
    assistantManagerCount?: SortOrder
    contactName1?: SortOrder
    contactPhone1?: SortOrder
    contactName2?: SortOrder
    contactPhone2?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    supervisotCount?: SortOrder
    managerCount?: SortOrder
    logisticCount?: SortOrder
    driverCount?: SortOrder
    dispatchCount?: SortOrder
    assistantManagerCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    birthday?: SortOrder
    hireDate?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    guardCard?: SortOrder
    supervisotCount?: SortOrder
    managerCount?: SortOrder
    logisticCount?: SortOrder
    driverCount?: SortOrder
    dispatchCount?: SortOrder
    assistantManagerCount?: SortOrder
    contactName1?: SortOrder
    contactPhone1?: SortOrder
    contactName2?: SortOrder
    contactPhone2?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    birthday?: SortOrder
    hireDate?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    guardCard?: SortOrder
    supervisotCount?: SortOrder
    managerCount?: SortOrder
    logisticCount?: SortOrder
    driverCount?: SortOrder
    dispatchCount?: SortOrder
    assistantManagerCount?: SortOrder
    contactName1?: SortOrder
    contactPhone1?: SortOrder
    contactName2?: SortOrder
    contactPhone2?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    supervisotCount?: SortOrder
    managerCount?: SortOrder
    logisticCount?: SortOrder
    driverCount?: SortOrder
    dispatchCount?: SortOrder
    assistantManagerCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumUserLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLevel | EnumUserLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLevelWithAggregatesFilter<$PrismaModel> | $Enums.UserLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserLevelFilter<$PrismaModel>
    _max?: NestedEnumUserLevelFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUSAStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USAState | EnumUSAStateFieldRefInput<$PrismaModel>
    in?: $Enums.USAState[] | ListEnumUSAStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.USAState[] | ListEnumUSAStateFieldRefInput<$PrismaModel>
    not?: NestedEnumUSAStateWithAggregatesFilter<$PrismaModel> | $Enums.USAState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSAStateFilter<$PrismaModel>
    _max?: NestedEnumUSAStateFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EventSectionListRelationFilter = {
    every?: EventSectionWhereInput
    some?: EventSectionWhereInput
    none?: EventSectionWhereInput
  }

  export type EventShiftDayListRelationFilter = {
    every?: EventShiftDayWhereInput
    some?: EventShiftDayWhereInput
    none?: EventShiftDayWhereInput
  }

  export type EventSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventShiftDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    address?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    public?: SortOrder
    done?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    address?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    public?: SortOrder
    done?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    address?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    public?: SortOrder
    done?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumGenericRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GenericRequestStatus | EnumGenericRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenericRequestStatus[] | ListEnumGenericRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenericRequestStatus[] | ListEnumGenericRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenericRequestStatusFilter<$PrismaModel> | $Enums.GenericRequestStatus
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventRequestCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    isInvitation?: SortOrder
  }

  export type EventRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type EventRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    isInvitation?: SortOrder
  }

  export type EventRequestMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    isInvitation?: SortOrder
  }

  export type EventRequestSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type EnumGenericRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenericRequestStatus | EnumGenericRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenericRequestStatus[] | ListEnumGenericRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenericRequestStatus[] | ListEnumGenericRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenericRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.GenericRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenericRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumGenericRequestStatusFilter<$PrismaModel>
  }

  export type SectionFileListRelationFilter = {
    every?: SectionFileWhereInput
    some?: SectionFileWhereInput
    none?: SectionFileWhereInput
  }

  export type SectionFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventSectionCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    sectionName?: SortOrder
    description?: SortOrder
  }

  export type EventSectionAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
  }

  export type EventSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    sectionName?: SortOrder
    description?: SortOrder
  }

  export type EventSectionMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    sectionName?: SortOrder
    description?: SortOrder
  }

  export type EventSectionSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type EventSectionScalarRelationFilter = {
    is?: EventSectionWhereInput
    isNot?: EventSectionWhereInput
  }

  export type SectionFileCountOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    name?: SortOrder
    dataBytes?: SortOrder
  }

  export type SectionFileAvgOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
  }

  export type SectionFileMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    name?: SortOrder
    dataBytes?: SortOrder
  }

  export type SectionFileMinOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    name?: SortOrder
    dataBytes?: SortOrder
  }

  export type SectionFileSumOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EventUserListCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
  }

  export type EventUserListAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type EventUserListMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
  }

  export type EventUserListMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
  }

  export type EventUserListSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    incidentDate?: SortOrder
  }

  export type IncidentAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    incidentDate?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    incidentDate?: SortOrder
  }

  export type IncidentSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type EventShiftDayScalarRelationFilter = {
    is?: EventShiftDayWhereInput
    isNot?: EventShiftDayWhereInput
  }

  export type EventShiftTimeCountOrderByAggregateInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type EventShiftTimeAvgOrderByAggregateInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
  }

  export type EventShiftTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type EventShiftTimeMinOrderByAggregateInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type EventShiftTimeSumOrderByAggregateInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
  }

  export type EventShiftTimeListRelationFilter = {
    every?: EventShiftTimeWhereInput
    some?: EventShiftTimeWhereInput
    none?: EventShiftTimeWhereInput
  }

  export type EventShiftTimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventShiftDayCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    day?: SortOrder
    maxUsers?: SortOrder
    role?: SortOrder
  }

  export type EventShiftDayAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    maxUsers?: SortOrder
  }

  export type EventShiftDayMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    day?: SortOrder
    maxUsers?: SortOrder
    role?: SortOrder
  }

  export type EventShiftDayMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    day?: SortOrder
    maxUsers?: SortOrder
    role?: SortOrder
  }

  export type EventShiftDaySumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    maxUsers?: SortOrder
  }

  export type ShiftRequestCountOrderByAggregateInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type ShiftRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    userId?: SortOrder
  }

  export type ShiftRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type ShiftRequestMinOrderByAggregateInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
  }

  export type ShiftRequestSumOrderByAggregateInput = {
    id?: SortOrder
    shiftDayId?: SortOrder
    userId?: SortOrder
  }

  export type EventUserListCreateNestedManyWithoutUserInput = {
    create?: XOR<EventUserListCreateWithoutUserInput, EventUserListUncheckedCreateWithoutUserInput> | EventUserListCreateWithoutUserInput[] | EventUserListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventUserListCreateOrConnectWithoutUserInput | EventUserListCreateOrConnectWithoutUserInput[]
    createMany?: EventUserListCreateManyUserInputEnvelope
    connect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
  }

  export type EventRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<EventRequestCreateWithoutUserInput, EventRequestUncheckedCreateWithoutUserInput> | EventRequestCreateWithoutUserInput[] | EventRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutUserInput | EventRequestCreateOrConnectWithoutUserInput[]
    createMany?: EventRequestCreateManyUserInputEnvelope
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutUserInput = {
    create?: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput> | IncidentCreateWithoutUserInput[] | IncidentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutUserInput | IncidentCreateOrConnectWithoutUserInput[]
    createMany?: IncidentCreateManyUserInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ShiftRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftRequestCreateWithoutUserInput, ShiftRequestUncheckedCreateWithoutUserInput> | ShiftRequestCreateWithoutUserInput[] | ShiftRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftRequestCreateOrConnectWithoutUserInput | ShiftRequestCreateOrConnectWithoutUserInput[]
    createMany?: ShiftRequestCreateManyUserInputEnvelope
    connect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
  }

  export type EventUserListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventUserListCreateWithoutUserInput, EventUserListUncheckedCreateWithoutUserInput> | EventUserListCreateWithoutUserInput[] | EventUserListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventUserListCreateOrConnectWithoutUserInput | EventUserListCreateOrConnectWithoutUserInput[]
    createMany?: EventUserListCreateManyUserInputEnvelope
    connect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
  }

  export type EventRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventRequestCreateWithoutUserInput, EventRequestUncheckedCreateWithoutUserInput> | EventRequestCreateWithoutUserInput[] | EventRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutUserInput | EventRequestCreateOrConnectWithoutUserInput[]
    createMany?: EventRequestCreateManyUserInputEnvelope
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput> | IncidentCreateWithoutUserInput[] | IncidentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutUserInput | IncidentCreateOrConnectWithoutUserInput[]
    createMany?: IncidentCreateManyUserInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ShiftRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftRequestCreateWithoutUserInput, ShiftRequestUncheckedCreateWithoutUserInput> | ShiftRequestCreateWithoutUserInput[] | ShiftRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftRequestCreateOrConnectWithoutUserInput | ShiftRequestCreateOrConnectWithoutUserInput[]
    createMany?: ShiftRequestCreateManyUserInputEnvelope
    connect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
  }

  export type EnumUserLevelFieldUpdateOperationsInput = {
    set?: $Enums.UserLevel
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUSAStateFieldUpdateOperationsInput = {
    set?: $Enums.USAState
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUserListUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventUserListCreateWithoutUserInput, EventUserListUncheckedCreateWithoutUserInput> | EventUserListCreateWithoutUserInput[] | EventUserListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventUserListCreateOrConnectWithoutUserInput | EventUserListCreateOrConnectWithoutUserInput[]
    upsert?: EventUserListUpsertWithWhereUniqueWithoutUserInput | EventUserListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventUserListCreateManyUserInputEnvelope
    set?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    disconnect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    delete?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    connect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    update?: EventUserListUpdateWithWhereUniqueWithoutUserInput | EventUserListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUserListUpdateManyWithWhereWithoutUserInput | EventUserListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventUserListScalarWhereInput | EventUserListScalarWhereInput[]
  }

  export type EventRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventRequestCreateWithoutUserInput, EventRequestUncheckedCreateWithoutUserInput> | EventRequestCreateWithoutUserInput[] | EventRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutUserInput | EventRequestCreateOrConnectWithoutUserInput[]
    upsert?: EventRequestUpsertWithWhereUniqueWithoutUserInput | EventRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventRequestCreateManyUserInputEnvelope
    set?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    disconnect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    delete?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    update?: EventRequestUpdateWithWhereUniqueWithoutUserInput | EventRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventRequestUpdateManyWithWhereWithoutUserInput | EventRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput> | IncidentCreateWithoutUserInput[] | IncidentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutUserInput | IncidentCreateOrConnectWithoutUserInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutUserInput | IncidentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncidentCreateManyUserInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutUserInput | IncidentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutUserInput | IncidentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type ShiftRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftRequestCreateWithoutUserInput, ShiftRequestUncheckedCreateWithoutUserInput> | ShiftRequestCreateWithoutUserInput[] | ShiftRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftRequestCreateOrConnectWithoutUserInput | ShiftRequestCreateOrConnectWithoutUserInput[]
    upsert?: ShiftRequestUpsertWithWhereUniqueWithoutUserInput | ShiftRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftRequestCreateManyUserInputEnvelope
    set?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    disconnect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    delete?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    connect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    update?: ShiftRequestUpdateWithWhereUniqueWithoutUserInput | ShiftRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftRequestUpdateManyWithWhereWithoutUserInput | ShiftRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftRequestScalarWhereInput | ShiftRequestScalarWhereInput[]
  }

  export type EventUserListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventUserListCreateWithoutUserInput, EventUserListUncheckedCreateWithoutUserInput> | EventUserListCreateWithoutUserInput[] | EventUserListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventUserListCreateOrConnectWithoutUserInput | EventUserListCreateOrConnectWithoutUserInput[]
    upsert?: EventUserListUpsertWithWhereUniqueWithoutUserInput | EventUserListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventUserListCreateManyUserInputEnvelope
    set?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    disconnect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    delete?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    connect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    update?: EventUserListUpdateWithWhereUniqueWithoutUserInput | EventUserListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUserListUpdateManyWithWhereWithoutUserInput | EventUserListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventUserListScalarWhereInput | EventUserListScalarWhereInput[]
  }

  export type EventRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventRequestCreateWithoutUserInput, EventRequestUncheckedCreateWithoutUserInput> | EventRequestCreateWithoutUserInput[] | EventRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutUserInput | EventRequestCreateOrConnectWithoutUserInput[]
    upsert?: EventRequestUpsertWithWhereUniqueWithoutUserInput | EventRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventRequestCreateManyUserInputEnvelope
    set?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    disconnect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    delete?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    update?: EventRequestUpdateWithWhereUniqueWithoutUserInput | EventRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventRequestUpdateManyWithWhereWithoutUserInput | EventRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput> | IncidentCreateWithoutUserInput[] | IncidentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutUserInput | IncidentCreateOrConnectWithoutUserInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutUserInput | IncidentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncidentCreateManyUserInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutUserInput | IncidentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutUserInput | IncidentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type ShiftRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftRequestCreateWithoutUserInput, ShiftRequestUncheckedCreateWithoutUserInput> | ShiftRequestCreateWithoutUserInput[] | ShiftRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftRequestCreateOrConnectWithoutUserInput | ShiftRequestCreateOrConnectWithoutUserInput[]
    upsert?: ShiftRequestUpsertWithWhereUniqueWithoutUserInput | ShiftRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftRequestCreateManyUserInputEnvelope
    set?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    disconnect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    delete?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    connect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    update?: ShiftRequestUpdateWithWhereUniqueWithoutUserInput | ShiftRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftRequestUpdateManyWithWhereWithoutUserInput | ShiftRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftRequestScalarWhereInput | ShiftRequestScalarWhereInput[]
  }

  export type EventUserListCreateNestedManyWithoutEventInput = {
    create?: XOR<EventUserListCreateWithoutEventInput, EventUserListUncheckedCreateWithoutEventInput> | EventUserListCreateWithoutEventInput[] | EventUserListUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventUserListCreateOrConnectWithoutEventInput | EventUserListCreateOrConnectWithoutEventInput[]
    createMany?: EventUserListCreateManyEventInputEnvelope
    connect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
  }

  export type EventSectionCreateNestedManyWithoutEventInput = {
    create?: XOR<EventSectionCreateWithoutEventInput, EventSectionUncheckedCreateWithoutEventInput> | EventSectionCreateWithoutEventInput[] | EventSectionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSectionCreateOrConnectWithoutEventInput | EventSectionCreateOrConnectWithoutEventInput[]
    createMany?: EventSectionCreateManyEventInputEnvelope
    connect?: EventSectionWhereUniqueInput | EventSectionWhereUniqueInput[]
  }

  export type EventRequestCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRequestCreateWithoutEventInput, EventRequestUncheckedCreateWithoutEventInput> | EventRequestCreateWithoutEventInput[] | EventRequestUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutEventInput | EventRequestCreateOrConnectWithoutEventInput[]
    createMany?: EventRequestCreateManyEventInputEnvelope
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutEventInput = {
    create?: XOR<IncidentCreateWithoutEventInput, IncidentUncheckedCreateWithoutEventInput> | IncidentCreateWithoutEventInput[] | IncidentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutEventInput | IncidentCreateOrConnectWithoutEventInput[]
    createMany?: IncidentCreateManyEventInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type EventShiftDayCreateNestedManyWithoutEventInput = {
    create?: XOR<EventShiftDayCreateWithoutEventInput, EventShiftDayUncheckedCreateWithoutEventInput> | EventShiftDayCreateWithoutEventInput[] | EventShiftDayUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventShiftDayCreateOrConnectWithoutEventInput | EventShiftDayCreateOrConnectWithoutEventInput[]
    createMany?: EventShiftDayCreateManyEventInputEnvelope
    connect?: EventShiftDayWhereUniqueInput | EventShiftDayWhereUniqueInput[]
  }

  export type EventUserListUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventUserListCreateWithoutEventInput, EventUserListUncheckedCreateWithoutEventInput> | EventUserListCreateWithoutEventInput[] | EventUserListUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventUserListCreateOrConnectWithoutEventInput | EventUserListCreateOrConnectWithoutEventInput[]
    createMany?: EventUserListCreateManyEventInputEnvelope
    connect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
  }

  export type EventSectionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventSectionCreateWithoutEventInput, EventSectionUncheckedCreateWithoutEventInput> | EventSectionCreateWithoutEventInput[] | EventSectionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSectionCreateOrConnectWithoutEventInput | EventSectionCreateOrConnectWithoutEventInput[]
    createMany?: EventSectionCreateManyEventInputEnvelope
    connect?: EventSectionWhereUniqueInput | EventSectionWhereUniqueInput[]
  }

  export type EventRequestUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventRequestCreateWithoutEventInput, EventRequestUncheckedCreateWithoutEventInput> | EventRequestCreateWithoutEventInput[] | EventRequestUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutEventInput | EventRequestCreateOrConnectWithoutEventInput[]
    createMany?: EventRequestCreateManyEventInputEnvelope
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<IncidentCreateWithoutEventInput, IncidentUncheckedCreateWithoutEventInput> | IncidentCreateWithoutEventInput[] | IncidentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutEventInput | IncidentCreateOrConnectWithoutEventInput[]
    createMany?: IncidentCreateManyEventInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type EventShiftDayUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventShiftDayCreateWithoutEventInput, EventShiftDayUncheckedCreateWithoutEventInput> | EventShiftDayCreateWithoutEventInput[] | EventShiftDayUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventShiftDayCreateOrConnectWithoutEventInput | EventShiftDayCreateOrConnectWithoutEventInput[]
    createMany?: EventShiftDayCreateManyEventInputEnvelope
    connect?: EventShiftDayWhereUniqueInput | EventShiftDayWhereUniqueInput[]
  }

  export type EventUserListUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventUserListCreateWithoutEventInput, EventUserListUncheckedCreateWithoutEventInput> | EventUserListCreateWithoutEventInput[] | EventUserListUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventUserListCreateOrConnectWithoutEventInput | EventUserListCreateOrConnectWithoutEventInput[]
    upsert?: EventUserListUpsertWithWhereUniqueWithoutEventInput | EventUserListUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventUserListCreateManyEventInputEnvelope
    set?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    disconnect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    delete?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    connect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    update?: EventUserListUpdateWithWhereUniqueWithoutEventInput | EventUserListUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventUserListUpdateManyWithWhereWithoutEventInput | EventUserListUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventUserListScalarWhereInput | EventUserListScalarWhereInput[]
  }

  export type EventSectionUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventSectionCreateWithoutEventInput, EventSectionUncheckedCreateWithoutEventInput> | EventSectionCreateWithoutEventInput[] | EventSectionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSectionCreateOrConnectWithoutEventInput | EventSectionCreateOrConnectWithoutEventInput[]
    upsert?: EventSectionUpsertWithWhereUniqueWithoutEventInput | EventSectionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventSectionCreateManyEventInputEnvelope
    set?: EventSectionWhereUniqueInput | EventSectionWhereUniqueInput[]
    disconnect?: EventSectionWhereUniqueInput | EventSectionWhereUniqueInput[]
    delete?: EventSectionWhereUniqueInput | EventSectionWhereUniqueInput[]
    connect?: EventSectionWhereUniqueInput | EventSectionWhereUniqueInput[]
    update?: EventSectionUpdateWithWhereUniqueWithoutEventInput | EventSectionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventSectionUpdateManyWithWhereWithoutEventInput | EventSectionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventSectionScalarWhereInput | EventSectionScalarWhereInput[]
  }

  export type EventRequestUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRequestCreateWithoutEventInput, EventRequestUncheckedCreateWithoutEventInput> | EventRequestCreateWithoutEventInput[] | EventRequestUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutEventInput | EventRequestCreateOrConnectWithoutEventInput[]
    upsert?: EventRequestUpsertWithWhereUniqueWithoutEventInput | EventRequestUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRequestCreateManyEventInputEnvelope
    set?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    disconnect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    delete?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    update?: EventRequestUpdateWithWhereUniqueWithoutEventInput | EventRequestUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRequestUpdateManyWithWhereWithoutEventInput | EventRequestUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutEventNestedInput = {
    create?: XOR<IncidentCreateWithoutEventInput, IncidentUncheckedCreateWithoutEventInput> | IncidentCreateWithoutEventInput[] | IncidentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutEventInput | IncidentCreateOrConnectWithoutEventInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutEventInput | IncidentUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: IncidentCreateManyEventInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutEventInput | IncidentUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutEventInput | IncidentUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type EventShiftDayUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventShiftDayCreateWithoutEventInput, EventShiftDayUncheckedCreateWithoutEventInput> | EventShiftDayCreateWithoutEventInput[] | EventShiftDayUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventShiftDayCreateOrConnectWithoutEventInput | EventShiftDayCreateOrConnectWithoutEventInput[]
    upsert?: EventShiftDayUpsertWithWhereUniqueWithoutEventInput | EventShiftDayUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventShiftDayCreateManyEventInputEnvelope
    set?: EventShiftDayWhereUniqueInput | EventShiftDayWhereUniqueInput[]
    disconnect?: EventShiftDayWhereUniqueInput | EventShiftDayWhereUniqueInput[]
    delete?: EventShiftDayWhereUniqueInput | EventShiftDayWhereUniqueInput[]
    connect?: EventShiftDayWhereUniqueInput | EventShiftDayWhereUniqueInput[]
    update?: EventShiftDayUpdateWithWhereUniqueWithoutEventInput | EventShiftDayUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventShiftDayUpdateManyWithWhereWithoutEventInput | EventShiftDayUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventShiftDayScalarWhereInput | EventShiftDayScalarWhereInput[]
  }

  export type EventUserListUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventUserListCreateWithoutEventInput, EventUserListUncheckedCreateWithoutEventInput> | EventUserListCreateWithoutEventInput[] | EventUserListUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventUserListCreateOrConnectWithoutEventInput | EventUserListCreateOrConnectWithoutEventInput[]
    upsert?: EventUserListUpsertWithWhereUniqueWithoutEventInput | EventUserListUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventUserListCreateManyEventInputEnvelope
    set?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    disconnect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    delete?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    connect?: EventUserListWhereUniqueInput | EventUserListWhereUniqueInput[]
    update?: EventUserListUpdateWithWhereUniqueWithoutEventInput | EventUserListUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventUserListUpdateManyWithWhereWithoutEventInput | EventUserListUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventUserListScalarWhereInput | EventUserListScalarWhereInput[]
  }

  export type EventSectionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventSectionCreateWithoutEventInput, EventSectionUncheckedCreateWithoutEventInput> | EventSectionCreateWithoutEventInput[] | EventSectionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSectionCreateOrConnectWithoutEventInput | EventSectionCreateOrConnectWithoutEventInput[]
    upsert?: EventSectionUpsertWithWhereUniqueWithoutEventInput | EventSectionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventSectionCreateManyEventInputEnvelope
    set?: EventSectionWhereUniqueInput | EventSectionWhereUniqueInput[]
    disconnect?: EventSectionWhereUniqueInput | EventSectionWhereUniqueInput[]
    delete?: EventSectionWhereUniqueInput | EventSectionWhereUniqueInput[]
    connect?: EventSectionWhereUniqueInput | EventSectionWhereUniqueInput[]
    update?: EventSectionUpdateWithWhereUniqueWithoutEventInput | EventSectionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventSectionUpdateManyWithWhereWithoutEventInput | EventSectionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventSectionScalarWhereInput | EventSectionScalarWhereInput[]
  }

  export type EventRequestUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventRequestCreateWithoutEventInput, EventRequestUncheckedCreateWithoutEventInput> | EventRequestCreateWithoutEventInput[] | EventRequestUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventRequestCreateOrConnectWithoutEventInput | EventRequestCreateOrConnectWithoutEventInput[]
    upsert?: EventRequestUpsertWithWhereUniqueWithoutEventInput | EventRequestUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventRequestCreateManyEventInputEnvelope
    set?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    disconnect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    delete?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    connect?: EventRequestWhereUniqueInput | EventRequestWhereUniqueInput[]
    update?: EventRequestUpdateWithWhereUniqueWithoutEventInput | EventRequestUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventRequestUpdateManyWithWhereWithoutEventInput | EventRequestUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<IncidentCreateWithoutEventInput, IncidentUncheckedCreateWithoutEventInput> | IncidentCreateWithoutEventInput[] | IncidentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutEventInput | IncidentCreateOrConnectWithoutEventInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutEventInput | IncidentUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: IncidentCreateManyEventInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutEventInput | IncidentUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutEventInput | IncidentUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type EventShiftDayUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventShiftDayCreateWithoutEventInput, EventShiftDayUncheckedCreateWithoutEventInput> | EventShiftDayCreateWithoutEventInput[] | EventShiftDayUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventShiftDayCreateOrConnectWithoutEventInput | EventShiftDayCreateOrConnectWithoutEventInput[]
    upsert?: EventShiftDayUpsertWithWhereUniqueWithoutEventInput | EventShiftDayUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventShiftDayCreateManyEventInputEnvelope
    set?: EventShiftDayWhereUniqueInput | EventShiftDayWhereUniqueInput[]
    disconnect?: EventShiftDayWhereUniqueInput | EventShiftDayWhereUniqueInput[]
    delete?: EventShiftDayWhereUniqueInput | EventShiftDayWhereUniqueInput[]
    connect?: EventShiftDayWhereUniqueInput | EventShiftDayWhereUniqueInput[]
    update?: EventShiftDayUpdateWithWhereUniqueWithoutEventInput | EventShiftDayUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventShiftDayUpdateManyWithWhereWithoutEventInput | EventShiftDayUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventShiftDayScalarWhereInput | EventShiftDayScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutUserRequestsInput = {
    create?: XOR<EventCreateWithoutUserRequestsInput, EventUncheckedCreateWithoutUserRequestsInput>
    connectOrCreate?: EventCreateOrConnectWithoutUserRequestsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventRequestsInput = {
    create?: XOR<UserCreateWithoutEventRequestsInput, UserUncheckedCreateWithoutEventRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGenericRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.GenericRequestStatus
  }

  export type EventUpdateOneRequiredWithoutUserRequestsNestedInput = {
    create?: XOR<EventCreateWithoutUserRequestsInput, EventUncheckedCreateWithoutUserRequestsInput>
    connectOrCreate?: EventCreateOrConnectWithoutUserRequestsInput
    upsert?: EventUpsertWithoutUserRequestsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutUserRequestsInput, EventUpdateWithoutUserRequestsInput>, EventUncheckedUpdateWithoutUserRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutEventRequestsNestedInput = {
    create?: XOR<UserCreateWithoutEventRequestsInput, UserUncheckedCreateWithoutEventRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventRequestsInput
    upsert?: UserUpsertWithoutEventRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventRequestsInput, UserUpdateWithoutEventRequestsInput>, UserUncheckedUpdateWithoutEventRequestsInput>
  }

  export type EventCreateNestedOneWithoutSectionsInput = {
    create?: XOR<EventCreateWithoutSectionsInput, EventUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutSectionsInput
    connect?: EventWhereUniqueInput
  }

  export type SectionFileCreateNestedManyWithoutSectionInput = {
    create?: XOR<SectionFileCreateWithoutSectionInput, SectionFileUncheckedCreateWithoutSectionInput> | SectionFileCreateWithoutSectionInput[] | SectionFileUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionFileCreateOrConnectWithoutSectionInput | SectionFileCreateOrConnectWithoutSectionInput[]
    createMany?: SectionFileCreateManySectionInputEnvelope
    connect?: SectionFileWhereUniqueInput | SectionFileWhereUniqueInput[]
  }

  export type SectionFileUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<SectionFileCreateWithoutSectionInput, SectionFileUncheckedCreateWithoutSectionInput> | SectionFileCreateWithoutSectionInput[] | SectionFileUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionFileCreateOrConnectWithoutSectionInput | SectionFileCreateOrConnectWithoutSectionInput[]
    createMany?: SectionFileCreateManySectionInputEnvelope
    connect?: SectionFileWhereUniqueInput | SectionFileWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<EventCreateWithoutSectionsInput, EventUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutSectionsInput
    upsert?: EventUpsertWithoutSectionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutSectionsInput, EventUpdateWithoutSectionsInput>, EventUncheckedUpdateWithoutSectionsInput>
  }

  export type SectionFileUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SectionFileCreateWithoutSectionInput, SectionFileUncheckedCreateWithoutSectionInput> | SectionFileCreateWithoutSectionInput[] | SectionFileUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionFileCreateOrConnectWithoutSectionInput | SectionFileCreateOrConnectWithoutSectionInput[]
    upsert?: SectionFileUpsertWithWhereUniqueWithoutSectionInput | SectionFileUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SectionFileCreateManySectionInputEnvelope
    set?: SectionFileWhereUniqueInput | SectionFileWhereUniqueInput[]
    disconnect?: SectionFileWhereUniqueInput | SectionFileWhereUniqueInput[]
    delete?: SectionFileWhereUniqueInput | SectionFileWhereUniqueInput[]
    connect?: SectionFileWhereUniqueInput | SectionFileWhereUniqueInput[]
    update?: SectionFileUpdateWithWhereUniqueWithoutSectionInput | SectionFileUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SectionFileUpdateManyWithWhereWithoutSectionInput | SectionFileUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SectionFileScalarWhereInput | SectionFileScalarWhereInput[]
  }

  export type SectionFileUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SectionFileCreateWithoutSectionInput, SectionFileUncheckedCreateWithoutSectionInput> | SectionFileCreateWithoutSectionInput[] | SectionFileUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SectionFileCreateOrConnectWithoutSectionInput | SectionFileCreateOrConnectWithoutSectionInput[]
    upsert?: SectionFileUpsertWithWhereUniqueWithoutSectionInput | SectionFileUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SectionFileCreateManySectionInputEnvelope
    set?: SectionFileWhereUniqueInput | SectionFileWhereUniqueInput[]
    disconnect?: SectionFileWhereUniqueInput | SectionFileWhereUniqueInput[]
    delete?: SectionFileWhereUniqueInput | SectionFileWhereUniqueInput[]
    connect?: SectionFileWhereUniqueInput | SectionFileWhereUniqueInput[]
    update?: SectionFileUpdateWithWhereUniqueWithoutSectionInput | SectionFileUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SectionFileUpdateManyWithWhereWithoutSectionInput | SectionFileUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SectionFileScalarWhereInput | SectionFileScalarWhereInput[]
  }

  export type EventSectionCreateNestedOneWithoutFilesInput = {
    create?: XOR<EventSectionCreateWithoutFilesInput, EventSectionUncheckedCreateWithoutFilesInput>
    connectOrCreate?: EventSectionCreateOrConnectWithoutFilesInput
    connect?: EventSectionWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type EventSectionUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<EventSectionCreateWithoutFilesInput, EventSectionUncheckedCreateWithoutFilesInput>
    connectOrCreate?: EventSectionCreateOrConnectWithoutFilesInput
    upsert?: EventSectionUpsertWithoutFilesInput
    connect?: EventSectionWhereUniqueInput
    update?: XOR<XOR<EventSectionUpdateToOneWithWhereWithoutFilesInput, EventSectionUpdateWithoutFilesInput>, EventSectionUncheckedUpdateWithoutFilesInput>
  }

  export type UserCreateNestedOneWithoutEventUsersInput = {
    create?: XOR<UserCreateWithoutEventUsersInput, UserUncheckedCreateWithoutEventUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventUsersInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutEventUsersInput = {
    create?: XOR<EventCreateWithoutEventUsersInput, EventUncheckedCreateWithoutEventUsersInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventUsersInput
    connect?: EventWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserUpdateOneRequiredWithoutEventUsersNestedInput = {
    create?: XOR<UserCreateWithoutEventUsersInput, UserUncheckedCreateWithoutEventUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventUsersInput
    upsert?: UserUpsertWithoutEventUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventUsersInput, UserUpdateWithoutEventUsersInput>, UserUncheckedUpdateWithoutEventUsersInput>
  }

  export type EventUpdateOneRequiredWithoutEventUsersNestedInput = {
    create?: XOR<EventCreateWithoutEventUsersInput, EventUncheckedCreateWithoutEventUsersInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventUsersInput
    upsert?: EventUpsertWithoutEventUsersInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventUsersInput, EventUpdateWithoutEventUsersInput>, EventUncheckedUpdateWithoutEventUsersInput>
  }

  export type EventCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<EventCreateWithoutIncidentsInput, EventUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: EventCreateOrConnectWithoutIncidentsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<EventCreateWithoutIncidentsInput, EventUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: EventCreateOrConnectWithoutIncidentsInput
    upsert?: EventUpsertWithoutIncidentsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutIncidentsInput, EventUpdateWithoutIncidentsInput>, EventUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentsInput
    upsert?: UserUpsertWithoutIncidentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncidentsInput, UserUpdateWithoutIncidentsInput>, UserUncheckedUpdateWithoutIncidentsInput>
  }

  export type EventShiftDayCreateNestedOneWithoutTimesInput = {
    create?: XOR<EventShiftDayCreateWithoutTimesInput, EventShiftDayUncheckedCreateWithoutTimesInput>
    connectOrCreate?: EventShiftDayCreateOrConnectWithoutTimesInput
    connect?: EventShiftDayWhereUniqueInput
  }

  export type EventShiftDayUpdateOneRequiredWithoutTimesNestedInput = {
    create?: XOR<EventShiftDayCreateWithoutTimesInput, EventShiftDayUncheckedCreateWithoutTimesInput>
    connectOrCreate?: EventShiftDayCreateOrConnectWithoutTimesInput
    upsert?: EventShiftDayUpsertWithoutTimesInput
    connect?: EventShiftDayWhereUniqueInput
    update?: XOR<XOR<EventShiftDayUpdateToOneWithWhereWithoutTimesInput, EventShiftDayUpdateWithoutTimesInput>, EventShiftDayUncheckedUpdateWithoutTimesInput>
  }

  export type EventCreateNestedOneWithoutShiftsInput = {
    create?: XOR<EventCreateWithoutShiftsInput, EventUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: EventCreateOrConnectWithoutShiftsInput
    connect?: EventWhereUniqueInput
  }

  export type EventShiftTimeCreateNestedManyWithoutShiftDayInput = {
    create?: XOR<EventShiftTimeCreateWithoutShiftDayInput, EventShiftTimeUncheckedCreateWithoutShiftDayInput> | EventShiftTimeCreateWithoutShiftDayInput[] | EventShiftTimeUncheckedCreateWithoutShiftDayInput[]
    connectOrCreate?: EventShiftTimeCreateOrConnectWithoutShiftDayInput | EventShiftTimeCreateOrConnectWithoutShiftDayInput[]
    createMany?: EventShiftTimeCreateManyShiftDayInputEnvelope
    connect?: EventShiftTimeWhereUniqueInput | EventShiftTimeWhereUniqueInput[]
  }

  export type ShiftRequestCreateNestedManyWithoutShiftDayInput = {
    create?: XOR<ShiftRequestCreateWithoutShiftDayInput, ShiftRequestUncheckedCreateWithoutShiftDayInput> | ShiftRequestCreateWithoutShiftDayInput[] | ShiftRequestUncheckedCreateWithoutShiftDayInput[]
    connectOrCreate?: ShiftRequestCreateOrConnectWithoutShiftDayInput | ShiftRequestCreateOrConnectWithoutShiftDayInput[]
    createMany?: ShiftRequestCreateManyShiftDayInputEnvelope
    connect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
  }

  export type EventShiftTimeUncheckedCreateNestedManyWithoutShiftDayInput = {
    create?: XOR<EventShiftTimeCreateWithoutShiftDayInput, EventShiftTimeUncheckedCreateWithoutShiftDayInput> | EventShiftTimeCreateWithoutShiftDayInput[] | EventShiftTimeUncheckedCreateWithoutShiftDayInput[]
    connectOrCreate?: EventShiftTimeCreateOrConnectWithoutShiftDayInput | EventShiftTimeCreateOrConnectWithoutShiftDayInput[]
    createMany?: EventShiftTimeCreateManyShiftDayInputEnvelope
    connect?: EventShiftTimeWhereUniqueInput | EventShiftTimeWhereUniqueInput[]
  }

  export type ShiftRequestUncheckedCreateNestedManyWithoutShiftDayInput = {
    create?: XOR<ShiftRequestCreateWithoutShiftDayInput, ShiftRequestUncheckedCreateWithoutShiftDayInput> | ShiftRequestCreateWithoutShiftDayInput[] | ShiftRequestUncheckedCreateWithoutShiftDayInput[]
    connectOrCreate?: ShiftRequestCreateOrConnectWithoutShiftDayInput | ShiftRequestCreateOrConnectWithoutShiftDayInput[]
    createMany?: ShiftRequestCreateManyShiftDayInputEnvelope
    connect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutShiftsNestedInput = {
    create?: XOR<EventCreateWithoutShiftsInput, EventUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: EventCreateOrConnectWithoutShiftsInput
    upsert?: EventUpsertWithoutShiftsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutShiftsInput, EventUpdateWithoutShiftsInput>, EventUncheckedUpdateWithoutShiftsInput>
  }

  export type EventShiftTimeUpdateManyWithoutShiftDayNestedInput = {
    create?: XOR<EventShiftTimeCreateWithoutShiftDayInput, EventShiftTimeUncheckedCreateWithoutShiftDayInput> | EventShiftTimeCreateWithoutShiftDayInput[] | EventShiftTimeUncheckedCreateWithoutShiftDayInput[]
    connectOrCreate?: EventShiftTimeCreateOrConnectWithoutShiftDayInput | EventShiftTimeCreateOrConnectWithoutShiftDayInput[]
    upsert?: EventShiftTimeUpsertWithWhereUniqueWithoutShiftDayInput | EventShiftTimeUpsertWithWhereUniqueWithoutShiftDayInput[]
    createMany?: EventShiftTimeCreateManyShiftDayInputEnvelope
    set?: EventShiftTimeWhereUniqueInput | EventShiftTimeWhereUniqueInput[]
    disconnect?: EventShiftTimeWhereUniqueInput | EventShiftTimeWhereUniqueInput[]
    delete?: EventShiftTimeWhereUniqueInput | EventShiftTimeWhereUniqueInput[]
    connect?: EventShiftTimeWhereUniqueInput | EventShiftTimeWhereUniqueInput[]
    update?: EventShiftTimeUpdateWithWhereUniqueWithoutShiftDayInput | EventShiftTimeUpdateWithWhereUniqueWithoutShiftDayInput[]
    updateMany?: EventShiftTimeUpdateManyWithWhereWithoutShiftDayInput | EventShiftTimeUpdateManyWithWhereWithoutShiftDayInput[]
    deleteMany?: EventShiftTimeScalarWhereInput | EventShiftTimeScalarWhereInput[]
  }

  export type ShiftRequestUpdateManyWithoutShiftDayNestedInput = {
    create?: XOR<ShiftRequestCreateWithoutShiftDayInput, ShiftRequestUncheckedCreateWithoutShiftDayInput> | ShiftRequestCreateWithoutShiftDayInput[] | ShiftRequestUncheckedCreateWithoutShiftDayInput[]
    connectOrCreate?: ShiftRequestCreateOrConnectWithoutShiftDayInput | ShiftRequestCreateOrConnectWithoutShiftDayInput[]
    upsert?: ShiftRequestUpsertWithWhereUniqueWithoutShiftDayInput | ShiftRequestUpsertWithWhereUniqueWithoutShiftDayInput[]
    createMany?: ShiftRequestCreateManyShiftDayInputEnvelope
    set?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    disconnect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    delete?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    connect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    update?: ShiftRequestUpdateWithWhereUniqueWithoutShiftDayInput | ShiftRequestUpdateWithWhereUniqueWithoutShiftDayInput[]
    updateMany?: ShiftRequestUpdateManyWithWhereWithoutShiftDayInput | ShiftRequestUpdateManyWithWhereWithoutShiftDayInput[]
    deleteMany?: ShiftRequestScalarWhereInput | ShiftRequestScalarWhereInput[]
  }

  export type EventShiftTimeUncheckedUpdateManyWithoutShiftDayNestedInput = {
    create?: XOR<EventShiftTimeCreateWithoutShiftDayInput, EventShiftTimeUncheckedCreateWithoutShiftDayInput> | EventShiftTimeCreateWithoutShiftDayInput[] | EventShiftTimeUncheckedCreateWithoutShiftDayInput[]
    connectOrCreate?: EventShiftTimeCreateOrConnectWithoutShiftDayInput | EventShiftTimeCreateOrConnectWithoutShiftDayInput[]
    upsert?: EventShiftTimeUpsertWithWhereUniqueWithoutShiftDayInput | EventShiftTimeUpsertWithWhereUniqueWithoutShiftDayInput[]
    createMany?: EventShiftTimeCreateManyShiftDayInputEnvelope
    set?: EventShiftTimeWhereUniqueInput | EventShiftTimeWhereUniqueInput[]
    disconnect?: EventShiftTimeWhereUniqueInput | EventShiftTimeWhereUniqueInput[]
    delete?: EventShiftTimeWhereUniqueInput | EventShiftTimeWhereUniqueInput[]
    connect?: EventShiftTimeWhereUniqueInput | EventShiftTimeWhereUniqueInput[]
    update?: EventShiftTimeUpdateWithWhereUniqueWithoutShiftDayInput | EventShiftTimeUpdateWithWhereUniqueWithoutShiftDayInput[]
    updateMany?: EventShiftTimeUpdateManyWithWhereWithoutShiftDayInput | EventShiftTimeUpdateManyWithWhereWithoutShiftDayInput[]
    deleteMany?: EventShiftTimeScalarWhereInput | EventShiftTimeScalarWhereInput[]
  }

  export type ShiftRequestUncheckedUpdateManyWithoutShiftDayNestedInput = {
    create?: XOR<ShiftRequestCreateWithoutShiftDayInput, ShiftRequestUncheckedCreateWithoutShiftDayInput> | ShiftRequestCreateWithoutShiftDayInput[] | ShiftRequestUncheckedCreateWithoutShiftDayInput[]
    connectOrCreate?: ShiftRequestCreateOrConnectWithoutShiftDayInput | ShiftRequestCreateOrConnectWithoutShiftDayInput[]
    upsert?: ShiftRequestUpsertWithWhereUniqueWithoutShiftDayInput | ShiftRequestUpsertWithWhereUniqueWithoutShiftDayInput[]
    createMany?: ShiftRequestCreateManyShiftDayInputEnvelope
    set?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    disconnect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    delete?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    connect?: ShiftRequestWhereUniqueInput | ShiftRequestWhereUniqueInput[]
    update?: ShiftRequestUpdateWithWhereUniqueWithoutShiftDayInput | ShiftRequestUpdateWithWhereUniqueWithoutShiftDayInput[]
    updateMany?: ShiftRequestUpdateManyWithWhereWithoutShiftDayInput | ShiftRequestUpdateManyWithWhereWithoutShiftDayInput[]
    deleteMany?: ShiftRequestScalarWhereInput | ShiftRequestScalarWhereInput[]
  }

  export type EventShiftDayCreateNestedOneWithoutRequestsInput = {
    create?: XOR<EventShiftDayCreateWithoutRequestsInput, EventShiftDayUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: EventShiftDayCreateOrConnectWithoutRequestsInput
    connect?: EventShiftDayWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutShiftRequestsInput = {
    create?: XOR<UserCreateWithoutShiftRequestsInput, UserUncheckedCreateWithoutShiftRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EventShiftDayUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<EventShiftDayCreateWithoutRequestsInput, EventShiftDayUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: EventShiftDayCreateOrConnectWithoutRequestsInput
    upsert?: EventShiftDayUpsertWithoutRequestsInput
    connect?: EventShiftDayWhereUniqueInput
    update?: XOR<XOR<EventShiftDayUpdateToOneWithWhereWithoutRequestsInput, EventShiftDayUpdateWithoutRequestsInput>, EventShiftDayUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutShiftRequestsNestedInput = {
    create?: XOR<UserCreateWithoutShiftRequestsInput, UserUncheckedCreateWithoutShiftRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftRequestsInput
    upsert?: UserUpsertWithoutShiftRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShiftRequestsInput, UserUpdateWithoutShiftRequestsInput>, UserUncheckedUpdateWithoutShiftRequestsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLevel | EnumUserLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLevelFilter<$PrismaModel> | $Enums.UserLevel
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUSAStateFilter<$PrismaModel = never> = {
    equals?: $Enums.USAState | EnumUSAStateFieldRefInput<$PrismaModel>
    in?: $Enums.USAState[] | ListEnumUSAStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.USAState[] | ListEnumUSAStateFieldRefInput<$PrismaModel>
    not?: NestedEnumUSAStateFilter<$PrismaModel> | $Enums.USAState
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumUserLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLevel | EnumUserLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLevel[] | ListEnumUserLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLevelWithAggregatesFilter<$PrismaModel> | $Enums.UserLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserLevelFilter<$PrismaModel>
    _max?: NestedEnumUserLevelFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUSAStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USAState | EnumUSAStateFieldRefInput<$PrismaModel>
    in?: $Enums.USAState[] | ListEnumUSAStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.USAState[] | ListEnumUSAStateFieldRefInput<$PrismaModel>
    not?: NestedEnumUSAStateWithAggregatesFilter<$PrismaModel> | $Enums.USAState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSAStateFilter<$PrismaModel>
    _max?: NestedEnumUSAStateFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGenericRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GenericRequestStatus | EnumGenericRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenericRequestStatus[] | ListEnumGenericRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenericRequestStatus[] | ListEnumGenericRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenericRequestStatusFilter<$PrismaModel> | $Enums.GenericRequestStatus
  }

  export type NestedEnumGenericRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenericRequestStatus | EnumGenericRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GenericRequestStatus[] | ListEnumGenericRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenericRequestStatus[] | ListEnumGenericRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGenericRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.GenericRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenericRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumGenericRequestStatusFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EventUserListCreateWithoutUserInput = {
    role: $Enums.UserRole
    event: EventCreateNestedOneWithoutEventUsersInput
  }

  export type EventUserListUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
    role: $Enums.UserRole
  }

  export type EventUserListCreateOrConnectWithoutUserInput = {
    where: EventUserListWhereUniqueInput
    create: XOR<EventUserListCreateWithoutUserInput, EventUserListUncheckedCreateWithoutUserInput>
  }

  export type EventUserListCreateManyUserInputEnvelope = {
    data: EventUserListCreateManyUserInput | EventUserListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventRequestCreateWithoutUserInput = {
    status: $Enums.GenericRequestStatus
    isInvitation: boolean
    event: EventCreateNestedOneWithoutUserRequestsInput
  }

  export type EventRequestUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
    status: $Enums.GenericRequestStatus
    isInvitation: boolean
  }

  export type EventRequestCreateOrConnectWithoutUserInput = {
    where: EventRequestWhereUniqueInput
    create: XOR<EventRequestCreateWithoutUserInput, EventRequestUncheckedCreateWithoutUserInput>
  }

  export type EventRequestCreateManyUserInputEnvelope = {
    data: EventRequestCreateManyUserInput | EventRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutUserInput = {
    title: string
    description: string
    incidentDate: Date | string
    event: EventCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
    title: string
    description: string
    incidentDate: Date | string
  }

  export type IncidentCreateOrConnectWithoutUserInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput>
  }

  export type IncidentCreateManyUserInputEnvelope = {
    data: IncidentCreateManyUserInput | IncidentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShiftRequestCreateWithoutUserInput = {
    status: $Enums.GenericRequestStatus
    shiftDay: EventShiftDayCreateNestedOneWithoutRequestsInput
  }

  export type ShiftRequestUncheckedCreateWithoutUserInput = {
    id?: number
    shiftDayId: number
    status: $Enums.GenericRequestStatus
  }

  export type ShiftRequestCreateOrConnectWithoutUserInput = {
    where: ShiftRequestWhereUniqueInput
    create: XOR<ShiftRequestCreateWithoutUserInput, ShiftRequestUncheckedCreateWithoutUserInput>
  }

  export type ShiftRequestCreateManyUserInputEnvelope = {
    data: ShiftRequestCreateManyUserInput | ShiftRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventUserListUpsertWithWhereUniqueWithoutUserInput = {
    where: EventUserListWhereUniqueInput
    update: XOR<EventUserListUpdateWithoutUserInput, EventUserListUncheckedUpdateWithoutUserInput>
    create: XOR<EventUserListCreateWithoutUserInput, EventUserListUncheckedCreateWithoutUserInput>
  }

  export type EventUserListUpdateWithWhereUniqueWithoutUserInput = {
    where: EventUserListWhereUniqueInput
    data: XOR<EventUserListUpdateWithoutUserInput, EventUserListUncheckedUpdateWithoutUserInput>
  }

  export type EventUserListUpdateManyWithWhereWithoutUserInput = {
    where: EventUserListScalarWhereInput
    data: XOR<EventUserListUpdateManyMutationInput, EventUserListUncheckedUpdateManyWithoutUserInput>
  }

  export type EventUserListScalarWhereInput = {
    AND?: EventUserListScalarWhereInput | EventUserListScalarWhereInput[]
    OR?: EventUserListScalarWhereInput[]
    NOT?: EventUserListScalarWhereInput | EventUserListScalarWhereInput[]
    id?: IntFilter<"EventUserList"> | number
    userId?: IntFilter<"EventUserList"> | number
    eventId?: IntFilter<"EventUserList"> | number
    role?: EnumUserRoleFilter<"EventUserList"> | $Enums.UserRole
  }

  export type EventRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: EventRequestWhereUniqueInput
    update: XOR<EventRequestUpdateWithoutUserInput, EventRequestUncheckedUpdateWithoutUserInput>
    create: XOR<EventRequestCreateWithoutUserInput, EventRequestUncheckedCreateWithoutUserInput>
  }

  export type EventRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: EventRequestWhereUniqueInput
    data: XOR<EventRequestUpdateWithoutUserInput, EventRequestUncheckedUpdateWithoutUserInput>
  }

  export type EventRequestUpdateManyWithWhereWithoutUserInput = {
    where: EventRequestScalarWhereInput
    data: XOR<EventRequestUpdateManyMutationInput, EventRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type EventRequestScalarWhereInput = {
    AND?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
    OR?: EventRequestScalarWhereInput[]
    NOT?: EventRequestScalarWhereInput | EventRequestScalarWhereInput[]
    id?: IntFilter<"EventRequest"> | number
    eventId?: IntFilter<"EventRequest"> | number
    userId?: IntFilter<"EventRequest"> | number
    status?: EnumGenericRequestStatusFilter<"EventRequest"> | $Enums.GenericRequestStatus
    isInvitation?: BoolFilter<"EventRequest"> | boolean
  }

  export type IncidentUpsertWithWhereUniqueWithoutUserInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutUserInput, IncidentUncheckedUpdateWithoutUserInput>
    create: XOR<IncidentCreateWithoutUserInput, IncidentUncheckedCreateWithoutUserInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutUserInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutUserInput, IncidentUncheckedUpdateWithoutUserInput>
  }

  export type IncidentUpdateManyWithWhereWithoutUserInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutUserInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: IntFilter<"Incident"> | number
    eventId?: IntFilter<"Incident"> | number
    userId?: IntFilter<"Incident"> | number
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    incidentDate?: DateTimeFilter<"Incident"> | Date | string
  }

  export type ShiftRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: ShiftRequestWhereUniqueInput
    update: XOR<ShiftRequestUpdateWithoutUserInput, ShiftRequestUncheckedUpdateWithoutUserInput>
    create: XOR<ShiftRequestCreateWithoutUserInput, ShiftRequestUncheckedCreateWithoutUserInput>
  }

  export type ShiftRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: ShiftRequestWhereUniqueInput
    data: XOR<ShiftRequestUpdateWithoutUserInput, ShiftRequestUncheckedUpdateWithoutUserInput>
  }

  export type ShiftRequestUpdateManyWithWhereWithoutUserInput = {
    where: ShiftRequestScalarWhereInput
    data: XOR<ShiftRequestUpdateManyMutationInput, ShiftRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type ShiftRequestScalarWhereInput = {
    AND?: ShiftRequestScalarWhereInput | ShiftRequestScalarWhereInput[]
    OR?: ShiftRequestScalarWhereInput[]
    NOT?: ShiftRequestScalarWhereInput | ShiftRequestScalarWhereInput[]
    id?: IntFilter<"ShiftRequest"> | number
    shiftDayId?: IntFilter<"ShiftRequest"> | number
    userId?: IntFilter<"ShiftRequest"> | number
    status?: EnumGenericRequestStatusFilter<"ShiftRequest"> | $Enums.GenericRequestStatus
  }

  export type EventUserListCreateWithoutEventInput = {
    role: $Enums.UserRole
    user: UserCreateNestedOneWithoutEventUsersInput
  }

  export type EventUserListUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
    role: $Enums.UserRole
  }

  export type EventUserListCreateOrConnectWithoutEventInput = {
    where: EventUserListWhereUniqueInput
    create: XOR<EventUserListCreateWithoutEventInput, EventUserListUncheckedCreateWithoutEventInput>
  }

  export type EventUserListCreateManyEventInputEnvelope = {
    data: EventUserListCreateManyEventInput | EventUserListCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventSectionCreateWithoutEventInput = {
    sectionName: string
    description: string
    files?: SectionFileCreateNestedManyWithoutSectionInput
  }

  export type EventSectionUncheckedCreateWithoutEventInput = {
    id?: number
    sectionName: string
    description: string
    files?: SectionFileUncheckedCreateNestedManyWithoutSectionInput
  }

  export type EventSectionCreateOrConnectWithoutEventInput = {
    where: EventSectionWhereUniqueInput
    create: XOR<EventSectionCreateWithoutEventInput, EventSectionUncheckedCreateWithoutEventInput>
  }

  export type EventSectionCreateManyEventInputEnvelope = {
    data: EventSectionCreateManyEventInput | EventSectionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventRequestCreateWithoutEventInput = {
    status: $Enums.GenericRequestStatus
    isInvitation: boolean
    user: UserCreateNestedOneWithoutEventRequestsInput
  }

  export type EventRequestUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
    status: $Enums.GenericRequestStatus
    isInvitation: boolean
  }

  export type EventRequestCreateOrConnectWithoutEventInput = {
    where: EventRequestWhereUniqueInput
    create: XOR<EventRequestCreateWithoutEventInput, EventRequestUncheckedCreateWithoutEventInput>
  }

  export type EventRequestCreateManyEventInputEnvelope = {
    data: EventRequestCreateManyEventInput | EventRequestCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutEventInput = {
    title: string
    description: string
    incidentDate: Date | string
    user: UserCreateNestedOneWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
    title: string
    description: string
    incidentDate: Date | string
  }

  export type IncidentCreateOrConnectWithoutEventInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutEventInput, IncidentUncheckedCreateWithoutEventInput>
  }

  export type IncidentCreateManyEventInputEnvelope = {
    data: IncidentCreateManyEventInput | IncidentCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventShiftDayCreateWithoutEventInput = {
    day: Date | string
    maxUsers: number
    role: $Enums.UserRole
    times?: EventShiftTimeCreateNestedManyWithoutShiftDayInput
    requests?: ShiftRequestCreateNestedManyWithoutShiftDayInput
  }

  export type EventShiftDayUncheckedCreateWithoutEventInput = {
    id?: number
    day: Date | string
    maxUsers: number
    role: $Enums.UserRole
    times?: EventShiftTimeUncheckedCreateNestedManyWithoutShiftDayInput
    requests?: ShiftRequestUncheckedCreateNestedManyWithoutShiftDayInput
  }

  export type EventShiftDayCreateOrConnectWithoutEventInput = {
    where: EventShiftDayWhereUniqueInput
    create: XOR<EventShiftDayCreateWithoutEventInput, EventShiftDayUncheckedCreateWithoutEventInput>
  }

  export type EventShiftDayCreateManyEventInputEnvelope = {
    data: EventShiftDayCreateManyEventInput | EventShiftDayCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventUserListUpsertWithWhereUniqueWithoutEventInput = {
    where: EventUserListWhereUniqueInput
    update: XOR<EventUserListUpdateWithoutEventInput, EventUserListUncheckedUpdateWithoutEventInput>
    create: XOR<EventUserListCreateWithoutEventInput, EventUserListUncheckedCreateWithoutEventInput>
  }

  export type EventUserListUpdateWithWhereUniqueWithoutEventInput = {
    where: EventUserListWhereUniqueInput
    data: XOR<EventUserListUpdateWithoutEventInput, EventUserListUncheckedUpdateWithoutEventInput>
  }

  export type EventUserListUpdateManyWithWhereWithoutEventInput = {
    where: EventUserListScalarWhereInput
    data: XOR<EventUserListUpdateManyMutationInput, EventUserListUncheckedUpdateManyWithoutEventInput>
  }

  export type EventSectionUpsertWithWhereUniqueWithoutEventInput = {
    where: EventSectionWhereUniqueInput
    update: XOR<EventSectionUpdateWithoutEventInput, EventSectionUncheckedUpdateWithoutEventInput>
    create: XOR<EventSectionCreateWithoutEventInput, EventSectionUncheckedCreateWithoutEventInput>
  }

  export type EventSectionUpdateWithWhereUniqueWithoutEventInput = {
    where: EventSectionWhereUniqueInput
    data: XOR<EventSectionUpdateWithoutEventInput, EventSectionUncheckedUpdateWithoutEventInput>
  }

  export type EventSectionUpdateManyWithWhereWithoutEventInput = {
    where: EventSectionScalarWhereInput
    data: XOR<EventSectionUpdateManyMutationInput, EventSectionUncheckedUpdateManyWithoutEventInput>
  }

  export type EventSectionScalarWhereInput = {
    AND?: EventSectionScalarWhereInput | EventSectionScalarWhereInput[]
    OR?: EventSectionScalarWhereInput[]
    NOT?: EventSectionScalarWhereInput | EventSectionScalarWhereInput[]
    id?: IntFilter<"EventSection"> | number
    eventId?: IntFilter<"EventSection"> | number
    sectionName?: StringFilter<"EventSection"> | string
    description?: StringFilter<"EventSection"> | string
  }

  export type EventRequestUpsertWithWhereUniqueWithoutEventInput = {
    where: EventRequestWhereUniqueInput
    update: XOR<EventRequestUpdateWithoutEventInput, EventRequestUncheckedUpdateWithoutEventInput>
    create: XOR<EventRequestCreateWithoutEventInput, EventRequestUncheckedCreateWithoutEventInput>
  }

  export type EventRequestUpdateWithWhereUniqueWithoutEventInput = {
    where: EventRequestWhereUniqueInput
    data: XOR<EventRequestUpdateWithoutEventInput, EventRequestUncheckedUpdateWithoutEventInput>
  }

  export type EventRequestUpdateManyWithWhereWithoutEventInput = {
    where: EventRequestScalarWhereInput
    data: XOR<EventRequestUpdateManyMutationInput, EventRequestUncheckedUpdateManyWithoutEventInput>
  }

  export type IncidentUpsertWithWhereUniqueWithoutEventInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutEventInput, IncidentUncheckedUpdateWithoutEventInput>
    create: XOR<IncidentCreateWithoutEventInput, IncidentUncheckedCreateWithoutEventInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutEventInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutEventInput, IncidentUncheckedUpdateWithoutEventInput>
  }

  export type IncidentUpdateManyWithWhereWithoutEventInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutEventInput>
  }

  export type EventShiftDayUpsertWithWhereUniqueWithoutEventInput = {
    where: EventShiftDayWhereUniqueInput
    update: XOR<EventShiftDayUpdateWithoutEventInput, EventShiftDayUncheckedUpdateWithoutEventInput>
    create: XOR<EventShiftDayCreateWithoutEventInput, EventShiftDayUncheckedCreateWithoutEventInput>
  }

  export type EventShiftDayUpdateWithWhereUniqueWithoutEventInput = {
    where: EventShiftDayWhereUniqueInput
    data: XOR<EventShiftDayUpdateWithoutEventInput, EventShiftDayUncheckedUpdateWithoutEventInput>
  }

  export type EventShiftDayUpdateManyWithWhereWithoutEventInput = {
    where: EventShiftDayScalarWhereInput
    data: XOR<EventShiftDayUpdateManyMutationInput, EventShiftDayUncheckedUpdateManyWithoutEventInput>
  }

  export type EventShiftDayScalarWhereInput = {
    AND?: EventShiftDayScalarWhereInput | EventShiftDayScalarWhereInput[]
    OR?: EventShiftDayScalarWhereInput[]
    NOT?: EventShiftDayScalarWhereInput | EventShiftDayScalarWhereInput[]
    id?: IntFilter<"EventShiftDay"> | number
    eventId?: IntFilter<"EventShiftDay"> | number
    day?: DateTimeFilter<"EventShiftDay"> | Date | string
    maxUsers?: IntFilter<"EventShiftDay"> | number
    role?: EnumUserRoleFilter<"EventShiftDay"> | $Enums.UserRole
  }

  export type EventCreateWithoutUserRequestsInput = {
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    eventUsers?: EventUserListCreateNestedManyWithoutEventInput
    sections?: EventSectionCreateNestedManyWithoutEventInput
    incidents?: IncidentCreateNestedManyWithoutEventInput
    shifts?: EventShiftDayCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutUserRequestsInput = {
    id?: number
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    eventUsers?: EventUserListUncheckedCreateNestedManyWithoutEventInput
    sections?: EventSectionUncheckedCreateNestedManyWithoutEventInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutEventInput
    shifts?: EventShiftDayUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutUserRequestsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserRequestsInput, EventUncheckedCreateWithoutUserRequestsInput>
  }

  export type UserCreateWithoutEventRequestsInput = {
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date | string
    hireDate: Date | string
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
    eventUsers?: EventUserListCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
    shiftRequests?: ShiftRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventRequestsInput = {
    id?: number
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date | string
    hireDate: Date | string
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
    eventUsers?: EventUserListUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
    shiftRequests?: ShiftRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventRequestsInput, UserUncheckedCreateWithoutEventRequestsInput>
  }

  export type EventUpsertWithoutUserRequestsInput = {
    update: XOR<EventUpdateWithoutUserRequestsInput, EventUncheckedUpdateWithoutUserRequestsInput>
    create: XOR<EventCreateWithoutUserRequestsInput, EventUncheckedCreateWithoutUserRequestsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutUserRequestsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutUserRequestsInput, EventUncheckedUpdateWithoutUserRequestsInput>
  }

  export type EventUpdateWithoutUserRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    eventUsers?: EventUserListUpdateManyWithoutEventNestedInput
    sections?: EventSectionUpdateManyWithoutEventNestedInput
    incidents?: IncidentUpdateManyWithoutEventNestedInput
    shifts?: EventShiftDayUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutUserRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    eventUsers?: EventUserListUncheckedUpdateManyWithoutEventNestedInput
    sections?: EventSectionUncheckedUpdateManyWithoutEventNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutEventNestedInput
    shifts?: EventShiftDayUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutEventRequestsInput = {
    update: XOR<UserUpdateWithoutEventRequestsInput, UserUncheckedUpdateWithoutEventRequestsInput>
    create: XOR<UserCreateWithoutEventRequestsInput, UserUncheckedCreateWithoutEventRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventRequestsInput, UserUncheckedUpdateWithoutEventRequestsInput>
  }

  export type UserUpdateWithoutEventRequestsInput = {
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
    eventUsers?: EventUserListUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
    shiftRequests?: ShiftRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
    eventUsers?: EventUserListUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
    shiftRequests?: ShiftRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventCreateWithoutSectionsInput = {
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    eventUsers?: EventUserListCreateNestedManyWithoutEventInput
    userRequests?: EventRequestCreateNestedManyWithoutEventInput
    incidents?: IncidentCreateNestedManyWithoutEventInput
    shifts?: EventShiftDayCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutSectionsInput = {
    id?: number
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    eventUsers?: EventUserListUncheckedCreateNestedManyWithoutEventInput
    userRequests?: EventRequestUncheckedCreateNestedManyWithoutEventInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutEventInput
    shifts?: EventShiftDayUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutSectionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutSectionsInput, EventUncheckedCreateWithoutSectionsInput>
  }

  export type SectionFileCreateWithoutSectionInput = {
    name: string
    dataBytes: Uint8Array
  }

  export type SectionFileUncheckedCreateWithoutSectionInput = {
    id?: number
    name: string
    dataBytes: Uint8Array
  }

  export type SectionFileCreateOrConnectWithoutSectionInput = {
    where: SectionFileWhereUniqueInput
    create: XOR<SectionFileCreateWithoutSectionInput, SectionFileUncheckedCreateWithoutSectionInput>
  }

  export type SectionFileCreateManySectionInputEnvelope = {
    data: SectionFileCreateManySectionInput | SectionFileCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutSectionsInput = {
    update: XOR<EventUpdateWithoutSectionsInput, EventUncheckedUpdateWithoutSectionsInput>
    create: XOR<EventCreateWithoutSectionsInput, EventUncheckedCreateWithoutSectionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutSectionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutSectionsInput, EventUncheckedUpdateWithoutSectionsInput>
  }

  export type EventUpdateWithoutSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    eventUsers?: EventUserListUpdateManyWithoutEventNestedInput
    userRequests?: EventRequestUpdateManyWithoutEventNestedInput
    incidents?: IncidentUpdateManyWithoutEventNestedInput
    shifts?: EventShiftDayUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    eventUsers?: EventUserListUncheckedUpdateManyWithoutEventNestedInput
    userRequests?: EventRequestUncheckedUpdateManyWithoutEventNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutEventNestedInput
    shifts?: EventShiftDayUncheckedUpdateManyWithoutEventNestedInput
  }

  export type SectionFileUpsertWithWhereUniqueWithoutSectionInput = {
    where: SectionFileWhereUniqueInput
    update: XOR<SectionFileUpdateWithoutSectionInput, SectionFileUncheckedUpdateWithoutSectionInput>
    create: XOR<SectionFileCreateWithoutSectionInput, SectionFileUncheckedCreateWithoutSectionInput>
  }

  export type SectionFileUpdateWithWhereUniqueWithoutSectionInput = {
    where: SectionFileWhereUniqueInput
    data: XOR<SectionFileUpdateWithoutSectionInput, SectionFileUncheckedUpdateWithoutSectionInput>
  }

  export type SectionFileUpdateManyWithWhereWithoutSectionInput = {
    where: SectionFileScalarWhereInput
    data: XOR<SectionFileUpdateManyMutationInput, SectionFileUncheckedUpdateManyWithoutSectionInput>
  }

  export type SectionFileScalarWhereInput = {
    AND?: SectionFileScalarWhereInput | SectionFileScalarWhereInput[]
    OR?: SectionFileScalarWhereInput[]
    NOT?: SectionFileScalarWhereInput | SectionFileScalarWhereInput[]
    id?: IntFilter<"SectionFile"> | number
    sectionId?: IntFilter<"SectionFile"> | number
    name?: StringFilter<"SectionFile"> | string
    dataBytes?: BytesFilter<"SectionFile"> | Uint8Array
  }

  export type EventSectionCreateWithoutFilesInput = {
    sectionName: string
    description: string
    event: EventCreateNestedOneWithoutSectionsInput
  }

  export type EventSectionUncheckedCreateWithoutFilesInput = {
    id?: number
    eventId: number
    sectionName: string
    description: string
  }

  export type EventSectionCreateOrConnectWithoutFilesInput = {
    where: EventSectionWhereUniqueInput
    create: XOR<EventSectionCreateWithoutFilesInput, EventSectionUncheckedCreateWithoutFilesInput>
  }

  export type EventSectionUpsertWithoutFilesInput = {
    update: XOR<EventSectionUpdateWithoutFilesInput, EventSectionUncheckedUpdateWithoutFilesInput>
    create: XOR<EventSectionCreateWithoutFilesInput, EventSectionUncheckedCreateWithoutFilesInput>
    where?: EventSectionWhereInput
  }

  export type EventSectionUpdateToOneWithWhereWithoutFilesInput = {
    where?: EventSectionWhereInput
    data: XOR<EventSectionUpdateWithoutFilesInput, EventSectionUncheckedUpdateWithoutFilesInput>
  }

  export type EventSectionUpdateWithoutFilesInput = {
    sectionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type EventSectionUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutEventUsersInput = {
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date | string
    hireDate: Date | string
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
    eventRequests?: EventRequestCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
    shiftRequests?: ShiftRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventUsersInput = {
    id?: number
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date | string
    hireDate: Date | string
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
    eventRequests?: EventRequestUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
    shiftRequests?: ShiftRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventUsersInput, UserUncheckedCreateWithoutEventUsersInput>
  }

  export type EventCreateWithoutEventUsersInput = {
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    sections?: EventSectionCreateNestedManyWithoutEventInput
    userRequests?: EventRequestCreateNestedManyWithoutEventInput
    incidents?: IncidentCreateNestedManyWithoutEventInput
    shifts?: EventShiftDayCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventUsersInput = {
    id?: number
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    sections?: EventSectionUncheckedCreateNestedManyWithoutEventInput
    userRequests?: EventRequestUncheckedCreateNestedManyWithoutEventInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutEventInput
    shifts?: EventShiftDayUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventUsersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventUsersInput, EventUncheckedCreateWithoutEventUsersInput>
  }

  export type UserUpsertWithoutEventUsersInput = {
    update: XOR<UserUpdateWithoutEventUsersInput, UserUncheckedUpdateWithoutEventUsersInput>
    create: XOR<UserCreateWithoutEventUsersInput, UserUncheckedCreateWithoutEventUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventUsersInput, UserUncheckedUpdateWithoutEventUsersInput>
  }

  export type UserUpdateWithoutEventUsersInput = {
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
    eventRequests?: EventRequestUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
    shiftRequests?: ShiftRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
    eventRequests?: EventRequestUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
    shiftRequests?: ShiftRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutEventUsersInput = {
    update: XOR<EventUpdateWithoutEventUsersInput, EventUncheckedUpdateWithoutEventUsersInput>
    create: XOR<EventCreateWithoutEventUsersInput, EventUncheckedCreateWithoutEventUsersInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventUsersInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventUsersInput, EventUncheckedUpdateWithoutEventUsersInput>
  }

  export type EventUpdateWithoutEventUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    sections?: EventSectionUpdateManyWithoutEventNestedInput
    userRequests?: EventRequestUpdateManyWithoutEventNestedInput
    incidents?: IncidentUpdateManyWithoutEventNestedInput
    shifts?: EventShiftDayUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    sections?: EventSectionUncheckedUpdateManyWithoutEventNestedInput
    userRequests?: EventRequestUncheckedUpdateManyWithoutEventNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutEventNestedInput
    shifts?: EventShiftDayUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutIncidentsInput = {
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    eventUsers?: EventUserListCreateNestedManyWithoutEventInput
    sections?: EventSectionCreateNestedManyWithoutEventInput
    userRequests?: EventRequestCreateNestedManyWithoutEventInput
    shifts?: EventShiftDayCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutIncidentsInput = {
    id?: number
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    eventUsers?: EventUserListUncheckedCreateNestedManyWithoutEventInput
    sections?: EventSectionUncheckedCreateNestedManyWithoutEventInput
    userRequests?: EventRequestUncheckedCreateNestedManyWithoutEventInput
    shifts?: EventShiftDayUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutIncidentsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutIncidentsInput, EventUncheckedCreateWithoutIncidentsInput>
  }

  export type UserCreateWithoutIncidentsInput = {
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date | string
    hireDate: Date | string
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
    eventUsers?: EventUserListCreateNestedManyWithoutUserInput
    eventRequests?: EventRequestCreateNestedManyWithoutUserInput
    shiftRequests?: ShiftRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIncidentsInput = {
    id?: number
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date | string
    hireDate: Date | string
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
    eventUsers?: EventUserListUncheckedCreateNestedManyWithoutUserInput
    eventRequests?: EventRequestUncheckedCreateNestedManyWithoutUserInput
    shiftRequests?: ShiftRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIncidentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
  }

  export type EventUpsertWithoutIncidentsInput = {
    update: XOR<EventUpdateWithoutIncidentsInput, EventUncheckedUpdateWithoutIncidentsInput>
    create: XOR<EventCreateWithoutIncidentsInput, EventUncheckedCreateWithoutIncidentsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutIncidentsInput, EventUncheckedUpdateWithoutIncidentsInput>
  }

  export type EventUpdateWithoutIncidentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    eventUsers?: EventUserListUpdateManyWithoutEventNestedInput
    sections?: EventSectionUpdateManyWithoutEventNestedInput
    userRequests?: EventRequestUpdateManyWithoutEventNestedInput
    shifts?: EventShiftDayUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    eventUsers?: EventUserListUncheckedUpdateManyWithoutEventNestedInput
    sections?: EventSectionUncheckedUpdateManyWithoutEventNestedInput
    userRequests?: EventRequestUncheckedUpdateManyWithoutEventNestedInput
    shifts?: EventShiftDayUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutIncidentsInput = {
    update: XOR<UserUpdateWithoutIncidentsInput, UserUncheckedUpdateWithoutIncidentsInput>
    create: XOR<UserCreateWithoutIncidentsInput, UserUncheckedCreateWithoutIncidentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncidentsInput, UserUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserUpdateWithoutIncidentsInput = {
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
    eventUsers?: EventUserListUpdateManyWithoutUserNestedInput
    eventRequests?: EventRequestUpdateManyWithoutUserNestedInput
    shiftRequests?: ShiftRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
    eventUsers?: EventUserListUncheckedUpdateManyWithoutUserNestedInput
    eventRequests?: EventRequestUncheckedUpdateManyWithoutUserNestedInput
    shiftRequests?: ShiftRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventShiftDayCreateWithoutTimesInput = {
    day: Date | string
    maxUsers: number
    role: $Enums.UserRole
    event: EventCreateNestedOneWithoutShiftsInput
    requests?: ShiftRequestCreateNestedManyWithoutShiftDayInput
  }

  export type EventShiftDayUncheckedCreateWithoutTimesInput = {
    id?: number
    eventId: number
    day: Date | string
    maxUsers: number
    role: $Enums.UserRole
    requests?: ShiftRequestUncheckedCreateNestedManyWithoutShiftDayInput
  }

  export type EventShiftDayCreateOrConnectWithoutTimesInput = {
    where: EventShiftDayWhereUniqueInput
    create: XOR<EventShiftDayCreateWithoutTimesInput, EventShiftDayUncheckedCreateWithoutTimesInput>
  }

  export type EventShiftDayUpsertWithoutTimesInput = {
    update: XOR<EventShiftDayUpdateWithoutTimesInput, EventShiftDayUncheckedUpdateWithoutTimesInput>
    create: XOR<EventShiftDayCreateWithoutTimesInput, EventShiftDayUncheckedCreateWithoutTimesInput>
    where?: EventShiftDayWhereInput
  }

  export type EventShiftDayUpdateToOneWithWhereWithoutTimesInput = {
    where?: EventShiftDayWhereInput
    data: XOR<EventShiftDayUpdateWithoutTimesInput, EventShiftDayUncheckedUpdateWithoutTimesInput>
  }

  export type EventShiftDayUpdateWithoutTimesInput = {
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    event?: EventUpdateOneRequiredWithoutShiftsNestedInput
    requests?: ShiftRequestUpdateManyWithoutShiftDayNestedInput
  }

  export type EventShiftDayUncheckedUpdateWithoutTimesInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    requests?: ShiftRequestUncheckedUpdateManyWithoutShiftDayNestedInput
  }

  export type EventCreateWithoutShiftsInput = {
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    eventUsers?: EventUserListCreateNestedManyWithoutEventInput
    sections?: EventSectionCreateNestedManyWithoutEventInput
    userRequests?: EventRequestCreateNestedManyWithoutEventInput
    incidents?: IncidentCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutShiftsInput = {
    id?: number
    name: string
    city: string
    state: $Enums.USAState
    zipCode: string
    address: string
    startDate: Date | string
    endDate: Date | string
    public: boolean
    done: boolean
    eventUsers?: EventUserListUncheckedCreateNestedManyWithoutEventInput
    sections?: EventSectionUncheckedCreateNestedManyWithoutEventInput
    userRequests?: EventRequestUncheckedCreateNestedManyWithoutEventInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutShiftsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutShiftsInput, EventUncheckedCreateWithoutShiftsInput>
  }

  export type EventShiftTimeCreateWithoutShiftDayInput = {
    startTime: Date | string
    endTime: Date | string
  }

  export type EventShiftTimeUncheckedCreateWithoutShiftDayInput = {
    id?: number
    startTime: Date | string
    endTime: Date | string
  }

  export type EventShiftTimeCreateOrConnectWithoutShiftDayInput = {
    where: EventShiftTimeWhereUniqueInput
    create: XOR<EventShiftTimeCreateWithoutShiftDayInput, EventShiftTimeUncheckedCreateWithoutShiftDayInput>
  }

  export type EventShiftTimeCreateManyShiftDayInputEnvelope = {
    data: EventShiftTimeCreateManyShiftDayInput | EventShiftTimeCreateManyShiftDayInput[]
    skipDuplicates?: boolean
  }

  export type ShiftRequestCreateWithoutShiftDayInput = {
    status: $Enums.GenericRequestStatus
    user: UserCreateNestedOneWithoutShiftRequestsInput
  }

  export type ShiftRequestUncheckedCreateWithoutShiftDayInput = {
    id?: number
    userId: number
    status: $Enums.GenericRequestStatus
  }

  export type ShiftRequestCreateOrConnectWithoutShiftDayInput = {
    where: ShiftRequestWhereUniqueInput
    create: XOR<ShiftRequestCreateWithoutShiftDayInput, ShiftRequestUncheckedCreateWithoutShiftDayInput>
  }

  export type ShiftRequestCreateManyShiftDayInputEnvelope = {
    data: ShiftRequestCreateManyShiftDayInput | ShiftRequestCreateManyShiftDayInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutShiftsInput = {
    update: XOR<EventUpdateWithoutShiftsInput, EventUncheckedUpdateWithoutShiftsInput>
    create: XOR<EventCreateWithoutShiftsInput, EventUncheckedCreateWithoutShiftsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutShiftsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutShiftsInput, EventUncheckedUpdateWithoutShiftsInput>
  }

  export type EventUpdateWithoutShiftsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    eventUsers?: EventUserListUpdateManyWithoutEventNestedInput
    sections?: EventSectionUpdateManyWithoutEventNestedInput
    userRequests?: EventRequestUpdateManyWithoutEventNestedInput
    incidents?: IncidentUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutShiftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    done?: BoolFieldUpdateOperationsInput | boolean
    eventUsers?: EventUserListUncheckedUpdateManyWithoutEventNestedInput
    sections?: EventSectionUncheckedUpdateManyWithoutEventNestedInput
    userRequests?: EventRequestUncheckedUpdateManyWithoutEventNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventShiftTimeUpsertWithWhereUniqueWithoutShiftDayInput = {
    where: EventShiftTimeWhereUniqueInput
    update: XOR<EventShiftTimeUpdateWithoutShiftDayInput, EventShiftTimeUncheckedUpdateWithoutShiftDayInput>
    create: XOR<EventShiftTimeCreateWithoutShiftDayInput, EventShiftTimeUncheckedCreateWithoutShiftDayInput>
  }

  export type EventShiftTimeUpdateWithWhereUniqueWithoutShiftDayInput = {
    where: EventShiftTimeWhereUniqueInput
    data: XOR<EventShiftTimeUpdateWithoutShiftDayInput, EventShiftTimeUncheckedUpdateWithoutShiftDayInput>
  }

  export type EventShiftTimeUpdateManyWithWhereWithoutShiftDayInput = {
    where: EventShiftTimeScalarWhereInput
    data: XOR<EventShiftTimeUpdateManyMutationInput, EventShiftTimeUncheckedUpdateManyWithoutShiftDayInput>
  }

  export type EventShiftTimeScalarWhereInput = {
    AND?: EventShiftTimeScalarWhereInput | EventShiftTimeScalarWhereInput[]
    OR?: EventShiftTimeScalarWhereInput[]
    NOT?: EventShiftTimeScalarWhereInput | EventShiftTimeScalarWhereInput[]
    id?: IntFilter<"EventShiftTime"> | number
    shiftDayId?: IntFilter<"EventShiftTime"> | number
    startTime?: DateTimeFilter<"EventShiftTime"> | Date | string
    endTime?: DateTimeFilter<"EventShiftTime"> | Date | string
  }

  export type ShiftRequestUpsertWithWhereUniqueWithoutShiftDayInput = {
    where: ShiftRequestWhereUniqueInput
    update: XOR<ShiftRequestUpdateWithoutShiftDayInput, ShiftRequestUncheckedUpdateWithoutShiftDayInput>
    create: XOR<ShiftRequestCreateWithoutShiftDayInput, ShiftRequestUncheckedCreateWithoutShiftDayInput>
  }

  export type ShiftRequestUpdateWithWhereUniqueWithoutShiftDayInput = {
    where: ShiftRequestWhereUniqueInput
    data: XOR<ShiftRequestUpdateWithoutShiftDayInput, ShiftRequestUncheckedUpdateWithoutShiftDayInput>
  }

  export type ShiftRequestUpdateManyWithWhereWithoutShiftDayInput = {
    where: ShiftRequestScalarWhereInput
    data: XOR<ShiftRequestUpdateManyMutationInput, ShiftRequestUncheckedUpdateManyWithoutShiftDayInput>
  }

  export type EventShiftDayCreateWithoutRequestsInput = {
    day: Date | string
    maxUsers: number
    role: $Enums.UserRole
    event: EventCreateNestedOneWithoutShiftsInput
    times?: EventShiftTimeCreateNestedManyWithoutShiftDayInput
  }

  export type EventShiftDayUncheckedCreateWithoutRequestsInput = {
    id?: number
    eventId: number
    day: Date | string
    maxUsers: number
    role: $Enums.UserRole
    times?: EventShiftTimeUncheckedCreateNestedManyWithoutShiftDayInput
  }

  export type EventShiftDayCreateOrConnectWithoutRequestsInput = {
    where: EventShiftDayWhereUniqueInput
    create: XOR<EventShiftDayCreateWithoutRequestsInput, EventShiftDayUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutShiftRequestsInput = {
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date | string
    hireDate: Date | string
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
    eventUsers?: EventUserListCreateNestedManyWithoutUserInput
    eventRequests?: EventRequestCreateNestedManyWithoutUserInput
    incidents?: IncidentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShiftRequestsInput = {
    id?: number
    level: $Enums.UserLevel
    name: string
    email: string
    password: string
    address: string
    city: string
    state: $Enums.USAState
    zipCode: string
    birthday: Date | string
    hireDate: Date | string
    phone: string
    active: boolean
    guardCard: boolean
    supervisotCount: number
    managerCount: number
    logisticCount: number
    driverCount: number
    dispatchCount: number
    assistantManagerCount: number
    contactName1: string
    contactPhone1: string
    contactName2: string
    contactPhone2: string
    eventUsers?: EventUserListUncheckedCreateNestedManyWithoutUserInput
    eventRequests?: EventRequestUncheckedCreateNestedManyWithoutUserInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShiftRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShiftRequestsInput, UserUncheckedCreateWithoutShiftRequestsInput>
  }

  export type EventShiftDayUpsertWithoutRequestsInput = {
    update: XOR<EventShiftDayUpdateWithoutRequestsInput, EventShiftDayUncheckedUpdateWithoutRequestsInput>
    create: XOR<EventShiftDayCreateWithoutRequestsInput, EventShiftDayUncheckedCreateWithoutRequestsInput>
    where?: EventShiftDayWhereInput
  }

  export type EventShiftDayUpdateToOneWithWhereWithoutRequestsInput = {
    where?: EventShiftDayWhereInput
    data: XOR<EventShiftDayUpdateWithoutRequestsInput, EventShiftDayUncheckedUpdateWithoutRequestsInput>
  }

  export type EventShiftDayUpdateWithoutRequestsInput = {
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    event?: EventUpdateOneRequiredWithoutShiftsNestedInput
    times?: EventShiftTimeUpdateManyWithoutShiftDayNestedInput
  }

  export type EventShiftDayUncheckedUpdateWithoutRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    times?: EventShiftTimeUncheckedUpdateManyWithoutShiftDayNestedInput
  }

  export type UserUpsertWithoutShiftRequestsInput = {
    update: XOR<UserUpdateWithoutShiftRequestsInput, UserUncheckedUpdateWithoutShiftRequestsInput>
    create: XOR<UserCreateWithoutShiftRequestsInput, UserUncheckedCreateWithoutShiftRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShiftRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShiftRequestsInput, UserUncheckedUpdateWithoutShiftRequestsInput>
  }

  export type UserUpdateWithoutShiftRequestsInput = {
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
    eventUsers?: EventUserListUpdateManyWithoutUserNestedInput
    eventRequests?: EventRequestUpdateManyWithoutUserNestedInput
    incidents?: IncidentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShiftRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumUserLevelFieldUpdateOperationsInput | $Enums.UserLevel
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumUSAStateFieldUpdateOperationsInput | $Enums.USAState
    zipCode?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    guardCard?: BoolFieldUpdateOperationsInput | boolean
    supervisotCount?: IntFieldUpdateOperationsInput | number
    managerCount?: IntFieldUpdateOperationsInput | number
    logisticCount?: IntFieldUpdateOperationsInput | number
    driverCount?: IntFieldUpdateOperationsInput | number
    dispatchCount?: IntFieldUpdateOperationsInput | number
    assistantManagerCount?: IntFieldUpdateOperationsInput | number
    contactName1?: StringFieldUpdateOperationsInput | string
    contactPhone1?: StringFieldUpdateOperationsInput | string
    contactName2?: StringFieldUpdateOperationsInput | string
    contactPhone2?: StringFieldUpdateOperationsInput | string
    eventUsers?: EventUserListUncheckedUpdateManyWithoutUserNestedInput
    eventRequests?: EventRequestUncheckedUpdateManyWithoutUserNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUserListCreateManyUserInput = {
    id?: number
    eventId: number
    role: $Enums.UserRole
  }

  export type EventRequestCreateManyUserInput = {
    id?: number
    eventId: number
    status: $Enums.GenericRequestStatus
    isInvitation: boolean
  }

  export type IncidentCreateManyUserInput = {
    id?: number
    eventId: number
    title: string
    description: string
    incidentDate: Date | string
  }

  export type ShiftRequestCreateManyUserInput = {
    id?: number
    shiftDayId: number
    status: $Enums.GenericRequestStatus
  }

  export type EventUserListUpdateWithoutUserInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    event?: EventUpdateOneRequiredWithoutEventUsersNestedInput
  }

  export type EventUserListUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type EventUserListUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type EventRequestUpdateWithoutUserInput = {
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    isInvitation?: BoolFieldUpdateOperationsInput | boolean
    event?: EventUpdateOneRequiredWithoutUserRequestsNestedInput
  }

  export type EventRequestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    isInvitation?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventRequestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    isInvitation?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftRequestUpdateWithoutUserInput = {
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    shiftDay?: EventShiftDayUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type ShiftRequestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDayId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
  }

  export type ShiftRequestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDayId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
  }

  export type EventUserListCreateManyEventInput = {
    id?: number
    userId: number
    role: $Enums.UserRole
  }

  export type EventSectionCreateManyEventInput = {
    id?: number
    sectionName: string
    description: string
  }

  export type EventRequestCreateManyEventInput = {
    id?: number
    userId: number
    status: $Enums.GenericRequestStatus
    isInvitation: boolean
  }

  export type IncidentCreateManyEventInput = {
    id?: number
    userId: number
    title: string
    description: string
    incidentDate: Date | string
  }

  export type EventShiftDayCreateManyEventInput = {
    id?: number
    day: Date | string
    maxUsers: number
    role: $Enums.UserRole
  }

  export type EventUserListUpdateWithoutEventInput = {
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    user?: UserUpdateOneRequiredWithoutEventUsersNestedInput
  }

  export type EventUserListUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type EventUserListUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type EventSectionUpdateWithoutEventInput = {
    sectionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    files?: SectionFileUpdateManyWithoutSectionNestedInput
  }

  export type EventSectionUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    files?: SectionFileUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type EventSectionUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type EventRequestUpdateWithoutEventInput = {
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    isInvitation?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutEventRequestsNestedInput
  }

  export type EventRequestUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    isInvitation?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventRequestUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    isInvitation?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IncidentUpdateWithoutEventInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventShiftDayUpdateWithoutEventInput = {
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    times?: EventShiftTimeUpdateManyWithoutShiftDayNestedInput
    requests?: ShiftRequestUpdateManyWithoutShiftDayNestedInput
  }

  export type EventShiftDayUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    times?: EventShiftTimeUncheckedUpdateManyWithoutShiftDayNestedInput
    requests?: ShiftRequestUncheckedUpdateManyWithoutShiftDayNestedInput
  }

  export type EventShiftDayUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type SectionFileCreateManySectionInput = {
    id?: number
    name: string
    dataBytes: Uint8Array
  }

  export type SectionFileUpdateWithoutSectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataBytes?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type SectionFileUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataBytes?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type SectionFileUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataBytes?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type EventShiftTimeCreateManyShiftDayInput = {
    id?: number
    startTime: Date | string
    endTime: Date | string
  }

  export type ShiftRequestCreateManyShiftDayInput = {
    id?: number
    userId: number
    status: $Enums.GenericRequestStatus
  }

  export type EventShiftTimeUpdateWithoutShiftDayInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventShiftTimeUncheckedUpdateWithoutShiftDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventShiftTimeUncheckedUpdateManyWithoutShiftDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftRequestUpdateWithoutShiftDayInput = {
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
    user?: UserUpdateOneRequiredWithoutShiftRequestsNestedInput
  }

  export type ShiftRequestUncheckedUpdateWithoutShiftDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
  }

  export type ShiftRequestUncheckedUpdateManyWithoutShiftDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumGenericRequestStatusFieldUpdateOperationsInput | $Enums.GenericRequestStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}