
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
 * Model DoctorClinic
 * 
 */
export type DoctorClinic = $Result.DefaultSelection<Prisma.$DoctorClinicPayload>
/**
 * Model Queue
 * 
 */
export type Queue = $Result.DefaultSelection<Prisma.$QueuePayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model StaffActivity
 * 
 */
export type StaffActivity = $Result.DefaultSelection<Prisma.$StaffActivityPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  PATIENT: 'PATIENT',
  STAFF: 'STAFF',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TokenStatus: {
  WAITING: 'WAITING',
  CALLED: 'CALLED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  SKIPPED: 'SKIPPED'
};

export type TokenStatus = (typeof TokenStatus)[keyof typeof TokenStatus]


export const StaffAction: {
  CALL: 'CALL',
  SKIP: 'SKIP',
  COMPLETE: 'COMPLETE'
};

export type StaffAction = (typeof StaffAction)[keyof typeof StaffAction]


export const DoctorType: {
  GENERAL_PRACTICE: 'GENERAL_PRACTICE',
  PEDIATRICS: 'PEDIATRICS',
  DERMATOLOGY: 'DERMATOLOGY',
  PSYCHIATRY: 'PSYCHIATRY',
  GYNECOLOGY: 'GYNECOLOGY',
  ORTHOPEDICS: 'ORTHOPEDICS',
  ENT: 'ENT',
  DENTIST: 'DENTIST'
};

export type DoctorType = (typeof DoctorType)[keyof typeof DoctorType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TokenStatus = $Enums.TokenStatus

export const TokenStatus: typeof $Enums.TokenStatus

export type StaffAction = $Enums.StaffAction

export const StaffAction: typeof $Enums.StaffAction

export type DoctorType = $Enums.DoctorType

export const DoctorType: typeof $Enums.DoctorType

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.doctorClinic`: Exposes CRUD operations for the **DoctorClinic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorClinics
    * const doctorClinics = await prisma.doctorClinic.findMany()
    * ```
    */
  get doctorClinic(): Prisma.DoctorClinicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.queue`: Exposes CRUD operations for the **Queue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Queues
    * const queues = await prisma.queue.findMany()
    * ```
    */
  get queue(): Prisma.QueueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffActivity`: Exposes CRUD operations for the **StaffActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffActivities
    * const staffActivities = await prisma.staffActivity.findMany()
    * ```
    */
  get staffActivity(): Prisma.StaffActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    DoctorClinic: 'DoctorClinic',
    Queue: 'Queue',
    Token: 'Token',
    StaffActivity: 'StaffActivity',
    Session: 'Session'
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
      modelProps: "user" | "doctorClinic" | "queue" | "token" | "staffActivity" | "session"
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
      DoctorClinic: {
        payload: Prisma.$DoctorClinicPayload<ExtArgs>
        fields: Prisma.DoctorClinicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorClinicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorClinicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorClinicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorClinicPayload>
          }
          findFirst: {
            args: Prisma.DoctorClinicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorClinicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorClinicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorClinicPayload>
          }
          findMany: {
            args: Prisma.DoctorClinicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorClinicPayload>[]
          }
          create: {
            args: Prisma.DoctorClinicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorClinicPayload>
          }
          createMany: {
            args: Prisma.DoctorClinicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorClinicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorClinicPayload>[]
          }
          delete: {
            args: Prisma.DoctorClinicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorClinicPayload>
          }
          update: {
            args: Prisma.DoctorClinicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorClinicPayload>
          }
          deleteMany: {
            args: Prisma.DoctorClinicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorClinicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorClinicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorClinicPayload>[]
          }
          upsert: {
            args: Prisma.DoctorClinicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorClinicPayload>
          }
          aggregate: {
            args: Prisma.DoctorClinicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorClinic>
          }
          groupBy: {
            args: Prisma.DoctorClinicGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorClinicGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorClinicCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorClinicCountAggregateOutputType> | number
          }
        }
      }
      Queue: {
        payload: Prisma.$QueuePayload<ExtArgs>
        fields: Prisma.QueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          findFirst: {
            args: Prisma.QueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          findMany: {
            args: Prisma.QueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>[]
          }
          create: {
            args: Prisma.QueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          createMany: {
            args: Prisma.QueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>[]
          }
          delete: {
            args: Prisma.QueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          update: {
            args: Prisma.QueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          deleteMany: {
            args: Prisma.QueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QueueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>[]
          }
          upsert: {
            args: Prisma.QueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueuePayload>
          }
          aggregate: {
            args: Prisma.QueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueue>
          }
          groupBy: {
            args: Prisma.QueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueueCountArgs<ExtArgs>
            result: $Utils.Optional<QueueCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      StaffActivity: {
        payload: Prisma.$StaffActivityPayload<ExtArgs>
        fields: Prisma.StaffActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffActivityPayload>
          }
          findFirst: {
            args: Prisma.StaffActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffActivityPayload>
          }
          findMany: {
            args: Prisma.StaffActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffActivityPayload>[]
          }
          create: {
            args: Prisma.StaffActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffActivityPayload>
          }
          createMany: {
            args: Prisma.StaffActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffActivityPayload>[]
          }
          delete: {
            args: Prisma.StaffActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffActivityPayload>
          }
          update: {
            args: Prisma.StaffActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffActivityPayload>
          }
          deleteMany: {
            args: Prisma.StaffActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffActivityPayload>[]
          }
          upsert: {
            args: Prisma.StaffActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffActivityPayload>
          }
          aggregate: {
            args: Prisma.StaffActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffActivity>
          }
          groupBy: {
            args: Prisma.StaffActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffActivityCountArgs<ExtArgs>
            result: $Utils.Optional<StaffActivityCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    doctorClinic?: DoctorClinicOmit
    queue?: QueueOmit
    token?: TokenOmit
    staffActivity?: StaffActivityOmit
    session?: SessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    tokens: number
    staffActivity: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    staffActivity?: boolean | UserCountOutputTypeCountStaffActivityArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStaffActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type DoctorClinicCountOutputType
   */

  export type DoctorClinicCountOutputType = {
    staff: number
    queues: number
  }

  export type DoctorClinicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | DoctorClinicCountOutputTypeCountStaffArgs
    queues?: boolean | DoctorClinicCountOutputTypeCountQueuesArgs
  }

  // Custom InputTypes
  /**
   * DoctorClinicCountOutputType without action
   */
  export type DoctorClinicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinicCountOutputType
     */
    select?: DoctorClinicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorClinicCountOutputType without action
   */
  export type DoctorClinicCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * DoctorClinicCountOutputType without action
   */
  export type DoctorClinicCountOutputTypeCountQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueWhereInput
  }


  /**
   * Count Type QueueCountOutputType
   */

  export type QueueCountOutputType = {
    tokens: number
  }

  export type QueueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | QueueCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * QueueCountOutputType without action
   */
  export type QueueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueCountOutputType
     */
    select?: QueueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QueueCountOutputType without action
   */
  export type QueueCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Count Type TokenCountOutputType
   */

  export type TokenCountOutputType = {
    staffActivity: number
  }

  export type TokenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffActivity?: boolean | TokenCountOutputTypeCountStaffActivityArgs
  }

  // Custom InputTypes
  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenCountOutputType
     */
    select?: TokenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountStaffActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    clinicId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    profilePicture: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    clinicId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    profilePicture: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    clinicId: number
    isActive: number
    createdAt: number
    updatedAt: number
    profilePicture: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    clinicId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    profilePicture?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    clinicId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    profilePicture?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    clinicId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    profilePicture?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    clinicId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    profilePicture: string | null
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    clinicId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilePicture?: boolean
    clinic?: boolean | User$clinicArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    staffActivity?: boolean | User$staffActivityArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    clinicId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilePicture?: boolean
    clinic?: boolean | User$clinicArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    clinicId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilePicture?: boolean
    clinic?: boolean | User$clinicArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    clinicId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profilePicture?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "role" | "clinicId" | "isActive" | "createdAt" | "updatedAt" | "profilePicture", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | User$clinicArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    staffActivity?: boolean | User$staffActivityArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | User$clinicArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | User$clinicArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clinic: Prisma.$DoctorClinicPayload<ExtArgs> | null
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      staffActivity: Prisma.$StaffActivityPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      role: $Enums.Role
      clinicId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      profilePicture: string | null
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
    clinic<T extends User$clinicArgs<ExtArgs> = {}>(args?: Subset<T, User$clinicArgs<ExtArgs>>): Prisma__DoctorClinicClient<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffActivity<T extends User$staffActivityArgs<ExtArgs> = {}>(args?: Subset<T, User$staffActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly clinicId: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly profilePicture: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.clinic
   */
  export type User$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorClinicInclude<ExtArgs> | null
    where?: DoctorClinicWhereInput
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User.staffActivity
   */
  export type User$staffActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
    where?: StaffActivityWhereInput
    orderBy?: StaffActivityOrderByWithRelationInput | StaffActivityOrderByWithRelationInput[]
    cursor?: StaffActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffActivityScalarFieldEnum | StaffActivityScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
   * Model DoctorClinic
   */

  export type AggregateDoctorClinic = {
    _count: DoctorClinicCountAggregateOutputType | null
    _avg: DoctorClinicAvgAggregateOutputType | null
    _sum: DoctorClinicSumAggregateOutputType | null
    _min: DoctorClinicMinAggregateOutputType | null
    _max: DoctorClinicMaxAggregateOutputType | null
  }

  export type DoctorClinicAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type DoctorClinicSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type DoctorClinicMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
    email: string | null
    website: string | null
    description: string | null
    logo: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.DoctorType | null
  }

  export type DoctorClinicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
    email: string | null
    website: string | null
    description: string | null
    logo: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.DoctorType | null
  }

  export type DoctorClinicCountAggregateOutputType = {
    id: number
    name: number
    address: number
    latitude: number
    longitude: number
    phone: number
    email: number
    website: number
    description: number
    logo: number
    images: number
    isActive: number
    createdAt: number
    updatedAt: number
    type: number
    openingHours: number
    _all: number
  }


  export type DoctorClinicAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type DoctorClinicSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type DoctorClinicMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    phone?: true
    email?: true
    website?: true
    description?: true
    logo?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    type?: true
  }

  export type DoctorClinicMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    phone?: true
    email?: true
    website?: true
    description?: true
    logo?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    type?: true
  }

  export type DoctorClinicCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    phone?: true
    email?: true
    website?: true
    description?: true
    logo?: true
    images?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    openingHours?: true
    _all?: true
  }

  export type DoctorClinicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorClinic to aggregate.
     */
    where?: DoctorClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorClinics to fetch.
     */
    orderBy?: DoctorClinicOrderByWithRelationInput | DoctorClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorClinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorClinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorClinics
    **/
    _count?: true | DoctorClinicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorClinicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorClinicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorClinicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorClinicMaxAggregateInputType
  }

  export type GetDoctorClinicAggregateType<T extends DoctorClinicAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorClinic[P]>
      : GetScalarType<T[P], AggregateDoctorClinic[P]>
  }




  export type DoctorClinicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorClinicWhereInput
    orderBy?: DoctorClinicOrderByWithAggregationInput | DoctorClinicOrderByWithAggregationInput[]
    by: DoctorClinicScalarFieldEnum[] | DoctorClinicScalarFieldEnum
    having?: DoctorClinicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorClinicCountAggregateInputType | true
    _avg?: DoctorClinicAvgAggregateInputType
    _sum?: DoctorClinicSumAggregateInputType
    _min?: DoctorClinicMinAggregateInputType
    _max?: DoctorClinicMaxAggregateInputType
  }

  export type DoctorClinicGroupByOutputType = {
    id: string
    name: string
    address: string | null
    latitude: number
    longitude: number
    phone: string | null
    email: string | null
    website: string | null
    description: string | null
    logo: string | null
    images: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    type: $Enums.DoctorType
    openingHours: JsonValue
    _count: DoctorClinicCountAggregateOutputType | null
    _avg: DoctorClinicAvgAggregateOutputType | null
    _sum: DoctorClinicSumAggregateOutputType | null
    _min: DoctorClinicMinAggregateOutputType | null
    _max: DoctorClinicMaxAggregateOutputType | null
  }

  type GetDoctorClinicGroupByPayload<T extends DoctorClinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorClinicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorClinicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorClinicGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorClinicGroupByOutputType[P]>
        }
      >
    >


  export type DoctorClinicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    description?: boolean
    logo?: boolean
    images?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    openingHours?: boolean
    staff?: boolean | DoctorClinic$staffArgs<ExtArgs>
    queues?: boolean | DoctorClinic$queuesArgs<ExtArgs>
    _count?: boolean | DoctorClinicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorClinic"]>

  export type DoctorClinicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    description?: boolean
    logo?: boolean
    images?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    openingHours?: boolean
  }, ExtArgs["result"]["doctorClinic"]>

  export type DoctorClinicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    description?: boolean
    logo?: boolean
    images?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    openingHours?: boolean
  }, ExtArgs["result"]["doctorClinic"]>

  export type DoctorClinicSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    description?: boolean
    logo?: boolean
    images?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    openingHours?: boolean
  }

  export type DoctorClinicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "latitude" | "longitude" | "phone" | "email" | "website" | "description" | "logo" | "images" | "isActive" | "createdAt" | "updatedAt" | "type" | "openingHours", ExtArgs["result"]["doctorClinic"]>
  export type DoctorClinicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | DoctorClinic$staffArgs<ExtArgs>
    queues?: boolean | DoctorClinic$queuesArgs<ExtArgs>
    _count?: boolean | DoctorClinicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorClinicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DoctorClinicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DoctorClinicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorClinic"
    objects: {
      staff: Prisma.$UserPayload<ExtArgs>[]
      queues: Prisma.$QueuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      latitude: number
      longitude: number
      phone: string | null
      email: string | null
      website: string | null
      description: string | null
      logo: string | null
      images: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      type: $Enums.DoctorType
      openingHours: Prisma.JsonValue
    }, ExtArgs["result"]["doctorClinic"]>
    composites: {}
  }

  type DoctorClinicGetPayload<S extends boolean | null | undefined | DoctorClinicDefaultArgs> = $Result.GetResult<Prisma.$DoctorClinicPayload, S>

  type DoctorClinicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorClinicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorClinicCountAggregateInputType | true
    }

  export interface DoctorClinicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorClinic'], meta: { name: 'DoctorClinic' } }
    /**
     * Find zero or one DoctorClinic that matches the filter.
     * @param {DoctorClinicFindUniqueArgs} args - Arguments to find a DoctorClinic
     * @example
     * // Get one DoctorClinic
     * const doctorClinic = await prisma.doctorClinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorClinicFindUniqueArgs>(args: SelectSubset<T, DoctorClinicFindUniqueArgs<ExtArgs>>): Prisma__DoctorClinicClient<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorClinic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorClinicFindUniqueOrThrowArgs} args - Arguments to find a DoctorClinic
     * @example
     * // Get one DoctorClinic
     * const doctorClinic = await prisma.doctorClinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorClinicFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorClinicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClinicClient<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorClinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorClinicFindFirstArgs} args - Arguments to find a DoctorClinic
     * @example
     * // Get one DoctorClinic
     * const doctorClinic = await prisma.doctorClinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorClinicFindFirstArgs>(args?: SelectSubset<T, DoctorClinicFindFirstArgs<ExtArgs>>): Prisma__DoctorClinicClient<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorClinic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorClinicFindFirstOrThrowArgs} args - Arguments to find a DoctorClinic
     * @example
     * // Get one DoctorClinic
     * const doctorClinic = await prisma.doctorClinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorClinicFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorClinicFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClinicClient<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorClinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorClinicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorClinics
     * const doctorClinics = await prisma.doctorClinic.findMany()
     * 
     * // Get first 10 DoctorClinics
     * const doctorClinics = await prisma.doctorClinic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorClinicWithIdOnly = await prisma.doctorClinic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorClinicFindManyArgs>(args?: SelectSubset<T, DoctorClinicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorClinic.
     * @param {DoctorClinicCreateArgs} args - Arguments to create a DoctorClinic.
     * @example
     * // Create one DoctorClinic
     * const DoctorClinic = await prisma.doctorClinic.create({
     *   data: {
     *     // ... data to create a DoctorClinic
     *   }
     * })
     * 
     */
    create<T extends DoctorClinicCreateArgs>(args: SelectSubset<T, DoctorClinicCreateArgs<ExtArgs>>): Prisma__DoctorClinicClient<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorClinics.
     * @param {DoctorClinicCreateManyArgs} args - Arguments to create many DoctorClinics.
     * @example
     * // Create many DoctorClinics
     * const doctorClinic = await prisma.doctorClinic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorClinicCreateManyArgs>(args?: SelectSubset<T, DoctorClinicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorClinics and returns the data saved in the database.
     * @param {DoctorClinicCreateManyAndReturnArgs} args - Arguments to create many DoctorClinics.
     * @example
     * // Create many DoctorClinics
     * const doctorClinic = await prisma.doctorClinic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorClinics and only return the `id`
     * const doctorClinicWithIdOnly = await prisma.doctorClinic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorClinicCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorClinicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorClinic.
     * @param {DoctorClinicDeleteArgs} args - Arguments to delete one DoctorClinic.
     * @example
     * // Delete one DoctorClinic
     * const DoctorClinic = await prisma.doctorClinic.delete({
     *   where: {
     *     // ... filter to delete one DoctorClinic
     *   }
     * })
     * 
     */
    delete<T extends DoctorClinicDeleteArgs>(args: SelectSubset<T, DoctorClinicDeleteArgs<ExtArgs>>): Prisma__DoctorClinicClient<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorClinic.
     * @param {DoctorClinicUpdateArgs} args - Arguments to update one DoctorClinic.
     * @example
     * // Update one DoctorClinic
     * const doctorClinic = await prisma.doctorClinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorClinicUpdateArgs>(args: SelectSubset<T, DoctorClinicUpdateArgs<ExtArgs>>): Prisma__DoctorClinicClient<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorClinics.
     * @param {DoctorClinicDeleteManyArgs} args - Arguments to filter DoctorClinics to delete.
     * @example
     * // Delete a few DoctorClinics
     * const { count } = await prisma.doctorClinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorClinicDeleteManyArgs>(args?: SelectSubset<T, DoctorClinicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorClinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorClinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorClinics
     * const doctorClinic = await prisma.doctorClinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorClinicUpdateManyArgs>(args: SelectSubset<T, DoctorClinicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorClinics and returns the data updated in the database.
     * @param {DoctorClinicUpdateManyAndReturnArgs} args - Arguments to update many DoctorClinics.
     * @example
     * // Update many DoctorClinics
     * const doctorClinic = await prisma.doctorClinic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorClinics and only return the `id`
     * const doctorClinicWithIdOnly = await prisma.doctorClinic.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorClinicUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorClinicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorClinic.
     * @param {DoctorClinicUpsertArgs} args - Arguments to update or create a DoctorClinic.
     * @example
     * // Update or create a DoctorClinic
     * const doctorClinic = await prisma.doctorClinic.upsert({
     *   create: {
     *     // ... data to create a DoctorClinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorClinic we want to update
     *   }
     * })
     */
    upsert<T extends DoctorClinicUpsertArgs>(args: SelectSubset<T, DoctorClinicUpsertArgs<ExtArgs>>): Prisma__DoctorClinicClient<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorClinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorClinicCountArgs} args - Arguments to filter DoctorClinics to count.
     * @example
     * // Count the number of DoctorClinics
     * const count = await prisma.doctorClinic.count({
     *   where: {
     *     // ... the filter for the DoctorClinics we want to count
     *   }
     * })
    **/
    count<T extends DoctorClinicCountArgs>(
      args?: Subset<T, DoctorClinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorClinicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorClinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorClinicAggregateArgs>(args: Subset<T, DoctorClinicAggregateArgs>): Prisma.PrismaPromise<GetDoctorClinicAggregateType<T>>

    /**
     * Group by DoctorClinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorClinicGroupByArgs} args - Group by arguments.
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
      T extends DoctorClinicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorClinicGroupByArgs['orderBy'] }
        : { orderBy?: DoctorClinicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorClinicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorClinic model
   */
  readonly fields: DoctorClinicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorClinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClinicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends DoctorClinic$staffArgs<ExtArgs> = {}>(args?: Subset<T, DoctorClinic$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    queues<T extends DoctorClinic$queuesArgs<ExtArgs> = {}>(args?: Subset<T, DoctorClinic$queuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DoctorClinic model
   */
  interface DoctorClinicFieldRefs {
    readonly id: FieldRef<"DoctorClinic", 'String'>
    readonly name: FieldRef<"DoctorClinic", 'String'>
    readonly address: FieldRef<"DoctorClinic", 'String'>
    readonly latitude: FieldRef<"DoctorClinic", 'Float'>
    readonly longitude: FieldRef<"DoctorClinic", 'Float'>
    readonly phone: FieldRef<"DoctorClinic", 'String'>
    readonly email: FieldRef<"DoctorClinic", 'String'>
    readonly website: FieldRef<"DoctorClinic", 'String'>
    readonly description: FieldRef<"DoctorClinic", 'String'>
    readonly logo: FieldRef<"DoctorClinic", 'String'>
    readonly images: FieldRef<"DoctorClinic", 'String[]'>
    readonly isActive: FieldRef<"DoctorClinic", 'Boolean'>
    readonly createdAt: FieldRef<"DoctorClinic", 'DateTime'>
    readonly updatedAt: FieldRef<"DoctorClinic", 'DateTime'>
    readonly type: FieldRef<"DoctorClinic", 'DoctorType'>
    readonly openingHours: FieldRef<"DoctorClinic", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * DoctorClinic findUnique
   */
  export type DoctorClinicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorClinicInclude<ExtArgs> | null
    /**
     * Filter, which DoctorClinic to fetch.
     */
    where: DoctorClinicWhereUniqueInput
  }

  /**
   * DoctorClinic findUniqueOrThrow
   */
  export type DoctorClinicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorClinicInclude<ExtArgs> | null
    /**
     * Filter, which DoctorClinic to fetch.
     */
    where: DoctorClinicWhereUniqueInput
  }

  /**
   * DoctorClinic findFirst
   */
  export type DoctorClinicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorClinicInclude<ExtArgs> | null
    /**
     * Filter, which DoctorClinic to fetch.
     */
    where?: DoctorClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorClinics to fetch.
     */
    orderBy?: DoctorClinicOrderByWithRelationInput | DoctorClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorClinics.
     */
    cursor?: DoctorClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorClinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorClinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorClinics.
     */
    distinct?: DoctorClinicScalarFieldEnum | DoctorClinicScalarFieldEnum[]
  }

  /**
   * DoctorClinic findFirstOrThrow
   */
  export type DoctorClinicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorClinicInclude<ExtArgs> | null
    /**
     * Filter, which DoctorClinic to fetch.
     */
    where?: DoctorClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorClinics to fetch.
     */
    orderBy?: DoctorClinicOrderByWithRelationInput | DoctorClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorClinics.
     */
    cursor?: DoctorClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorClinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorClinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorClinics.
     */
    distinct?: DoctorClinicScalarFieldEnum | DoctorClinicScalarFieldEnum[]
  }

  /**
   * DoctorClinic findMany
   */
  export type DoctorClinicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorClinicInclude<ExtArgs> | null
    /**
     * Filter, which DoctorClinics to fetch.
     */
    where?: DoctorClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorClinics to fetch.
     */
    orderBy?: DoctorClinicOrderByWithRelationInput | DoctorClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorClinics.
     */
    cursor?: DoctorClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorClinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorClinics.
     */
    skip?: number
    distinct?: DoctorClinicScalarFieldEnum | DoctorClinicScalarFieldEnum[]
  }

  /**
   * DoctorClinic create
   */
  export type DoctorClinicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorClinicInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorClinic.
     */
    data: XOR<DoctorClinicCreateInput, DoctorClinicUncheckedCreateInput>
  }

  /**
   * DoctorClinic createMany
   */
  export type DoctorClinicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorClinics.
     */
    data: DoctorClinicCreateManyInput | DoctorClinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorClinic createManyAndReturn
   */
  export type DoctorClinicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorClinics.
     */
    data: DoctorClinicCreateManyInput | DoctorClinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorClinic update
   */
  export type DoctorClinicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorClinicInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorClinic.
     */
    data: XOR<DoctorClinicUpdateInput, DoctorClinicUncheckedUpdateInput>
    /**
     * Choose, which DoctorClinic to update.
     */
    where: DoctorClinicWhereUniqueInput
  }

  /**
   * DoctorClinic updateMany
   */
  export type DoctorClinicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorClinics.
     */
    data: XOR<DoctorClinicUpdateManyMutationInput, DoctorClinicUncheckedUpdateManyInput>
    /**
     * Filter which DoctorClinics to update
     */
    where?: DoctorClinicWhereInput
    /**
     * Limit how many DoctorClinics to update.
     */
    limit?: number
  }

  /**
   * DoctorClinic updateManyAndReturn
   */
  export type DoctorClinicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * The data used to update DoctorClinics.
     */
    data: XOR<DoctorClinicUpdateManyMutationInput, DoctorClinicUncheckedUpdateManyInput>
    /**
     * Filter which DoctorClinics to update
     */
    where?: DoctorClinicWhereInput
    /**
     * Limit how many DoctorClinics to update.
     */
    limit?: number
  }

  /**
   * DoctorClinic upsert
   */
  export type DoctorClinicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorClinicInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorClinic to update in case it exists.
     */
    where: DoctorClinicWhereUniqueInput
    /**
     * In case the DoctorClinic found by the `where` argument doesn't exist, create a new DoctorClinic with this data.
     */
    create: XOR<DoctorClinicCreateInput, DoctorClinicUncheckedCreateInput>
    /**
     * In case the DoctorClinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorClinicUpdateInput, DoctorClinicUncheckedUpdateInput>
  }

  /**
   * DoctorClinic delete
   */
  export type DoctorClinicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorClinicInclude<ExtArgs> | null
    /**
     * Filter which DoctorClinic to delete.
     */
    where: DoctorClinicWhereUniqueInput
  }

  /**
   * DoctorClinic deleteMany
   */
  export type DoctorClinicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorClinics to delete
     */
    where?: DoctorClinicWhereInput
    /**
     * Limit how many DoctorClinics to delete.
     */
    limit?: number
  }

  /**
   * DoctorClinic.staff
   */
  export type DoctorClinic$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * DoctorClinic.queues
   */
  export type DoctorClinic$queuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    where?: QueueWhereInput
    orderBy?: QueueOrderByWithRelationInput | QueueOrderByWithRelationInput[]
    cursor?: QueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueueScalarFieldEnum | QueueScalarFieldEnum[]
  }

  /**
   * DoctorClinic without action
   */
  export type DoctorClinicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorClinic
     */
    select?: DoctorClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorClinic
     */
    omit?: DoctorClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorClinicInclude<ExtArgs> | null
  }


  /**
   * Model Queue
   */

  export type AggregateQueue = {
    _count: QueueCountAggregateOutputType | null
    _avg: QueueAvgAggregateOutputType | null
    _sum: QueueSumAggregateOutputType | null
    _min: QueueMinAggregateOutputType | null
    _max: QueueMaxAggregateOutputType | null
  }

  export type QueueAvgAggregateOutputType = {
    currentTokenNo: number | null
    maxQueueSize: number | null
  }

  export type QueueSumAggregateOutputType = {
    currentTokenNo: number | null
    maxQueueSize: number | null
  }

  export type QueueMinAggregateOutputType = {
    id: string | null
    clinicId: string | null
    queueDate: Date | null
    currentTokenNo: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    maxQueueSize: number | null
    startTime: Date | null
    endTime: Date | null
  }

  export type QueueMaxAggregateOutputType = {
    id: string | null
    clinicId: string | null
    queueDate: Date | null
    currentTokenNo: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    maxQueueSize: number | null
    startTime: Date | null
    endTime: Date | null
  }

  export type QueueCountAggregateOutputType = {
    id: number
    clinicId: number
    queueDate: number
    currentTokenNo: number
    isActive: number
    createdAt: number
    updatedAt: number
    maxQueueSize: number
    startTime: number
    endTime: number
    _all: number
  }


  export type QueueAvgAggregateInputType = {
    currentTokenNo?: true
    maxQueueSize?: true
  }

  export type QueueSumAggregateInputType = {
    currentTokenNo?: true
    maxQueueSize?: true
  }

  export type QueueMinAggregateInputType = {
    id?: true
    clinicId?: true
    queueDate?: true
    currentTokenNo?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    maxQueueSize?: true
    startTime?: true
    endTime?: true
  }

  export type QueueMaxAggregateInputType = {
    id?: true
    clinicId?: true
    queueDate?: true
    currentTokenNo?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    maxQueueSize?: true
    startTime?: true
    endTime?: true
  }

  export type QueueCountAggregateInputType = {
    id?: true
    clinicId?: true
    queueDate?: true
    currentTokenNo?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    maxQueueSize?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type QueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Queue to aggregate.
     */
    where?: QueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueueOrderByWithRelationInput | QueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Queues
    **/
    _count?: true | QueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QueueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueueMaxAggregateInputType
  }

  export type GetQueueAggregateType<T extends QueueAggregateArgs> = {
        [P in keyof T & keyof AggregateQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueue[P]>
      : GetScalarType<T[P], AggregateQueue[P]>
  }




  export type QueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueWhereInput
    orderBy?: QueueOrderByWithAggregationInput | QueueOrderByWithAggregationInput[]
    by: QueueScalarFieldEnum[] | QueueScalarFieldEnum
    having?: QueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueueCountAggregateInputType | true
    _avg?: QueueAvgAggregateInputType
    _sum?: QueueSumAggregateInputType
    _min?: QueueMinAggregateInputType
    _max?: QueueMaxAggregateInputType
  }

  export type QueueGroupByOutputType = {
    id: string
    clinicId: string
    queueDate: Date
    currentTokenNo: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    maxQueueSize: number
    startTime: Date
    endTime: Date
    _count: QueueCountAggregateOutputType | null
    _avg: QueueAvgAggregateOutputType | null
    _sum: QueueSumAggregateOutputType | null
    _min: QueueMinAggregateOutputType | null
    _max: QueueMaxAggregateOutputType | null
  }

  type GetQueueGroupByPayload<T extends QueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueueGroupByOutputType[P]>
            : GetScalarType<T[P], QueueGroupByOutputType[P]>
        }
      >
    >


  export type QueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    queueDate?: boolean
    currentTokenNo?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maxQueueSize?: boolean
    startTime?: boolean
    endTime?: boolean
    clinic?: boolean | DoctorClinicDefaultArgs<ExtArgs>
    tokens?: boolean | Queue$tokensArgs<ExtArgs>
    _count?: boolean | QueueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queue"]>

  export type QueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    queueDate?: boolean
    currentTokenNo?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maxQueueSize?: boolean
    startTime?: boolean
    endTime?: boolean
    clinic?: boolean | DoctorClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queue"]>

  export type QueueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicId?: boolean
    queueDate?: boolean
    currentTokenNo?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maxQueueSize?: boolean
    startTime?: boolean
    endTime?: boolean
    clinic?: boolean | DoctorClinicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queue"]>

  export type QueueSelectScalar = {
    id?: boolean
    clinicId?: boolean
    queueDate?: boolean
    currentTokenNo?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maxQueueSize?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type QueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clinicId" | "queueDate" | "currentTokenNo" | "isActive" | "createdAt" | "updatedAt" | "maxQueueSize" | "startTime" | "endTime", ExtArgs["result"]["queue"]>
  export type QueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | DoctorClinicDefaultArgs<ExtArgs>
    tokens?: boolean | Queue$tokensArgs<ExtArgs>
    _count?: boolean | QueueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | DoctorClinicDefaultArgs<ExtArgs>
  }
  export type QueueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | DoctorClinicDefaultArgs<ExtArgs>
  }

  export type $QueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Queue"
    objects: {
      clinic: Prisma.$DoctorClinicPayload<ExtArgs>
      tokens: Prisma.$TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clinicId: string
      queueDate: Date
      currentTokenNo: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      maxQueueSize: number
      startTime: Date
      endTime: Date
    }, ExtArgs["result"]["queue"]>
    composites: {}
  }

  type QueueGetPayload<S extends boolean | null | undefined | QueueDefaultArgs> = $Result.GetResult<Prisma.$QueuePayload, S>

  type QueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QueueCountAggregateInputType | true
    }

  export interface QueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Queue'], meta: { name: 'Queue' } }
    /**
     * Find zero or one Queue that matches the filter.
     * @param {QueueFindUniqueArgs} args - Arguments to find a Queue
     * @example
     * // Get one Queue
     * const queue = await prisma.queue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueueFindUniqueArgs>(args: SelectSubset<T, QueueFindUniqueArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Queue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QueueFindUniqueOrThrowArgs} args - Arguments to find a Queue
     * @example
     * // Get one Queue
     * const queue = await prisma.queue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueueFindUniqueOrThrowArgs>(args: SelectSubset<T, QueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueFindFirstArgs} args - Arguments to find a Queue
     * @example
     * // Get one Queue
     * const queue = await prisma.queue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueueFindFirstArgs>(args?: SelectSubset<T, QueueFindFirstArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Queue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueFindFirstOrThrowArgs} args - Arguments to find a Queue
     * @example
     * // Get one Queue
     * const queue = await prisma.queue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueueFindFirstOrThrowArgs>(args?: SelectSubset<T, QueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Queues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Queues
     * const queues = await prisma.queue.findMany()
     * 
     * // Get first 10 Queues
     * const queues = await prisma.queue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queueWithIdOnly = await prisma.queue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueueFindManyArgs>(args?: SelectSubset<T, QueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Queue.
     * @param {QueueCreateArgs} args - Arguments to create a Queue.
     * @example
     * // Create one Queue
     * const Queue = await prisma.queue.create({
     *   data: {
     *     // ... data to create a Queue
     *   }
     * })
     * 
     */
    create<T extends QueueCreateArgs>(args: SelectSubset<T, QueueCreateArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Queues.
     * @param {QueueCreateManyArgs} args - Arguments to create many Queues.
     * @example
     * // Create many Queues
     * const queue = await prisma.queue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueueCreateManyArgs>(args?: SelectSubset<T, QueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Queues and returns the data saved in the database.
     * @param {QueueCreateManyAndReturnArgs} args - Arguments to create many Queues.
     * @example
     * // Create many Queues
     * const queue = await prisma.queue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Queues and only return the `id`
     * const queueWithIdOnly = await prisma.queue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QueueCreateManyAndReturnArgs>(args?: SelectSubset<T, QueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Queue.
     * @param {QueueDeleteArgs} args - Arguments to delete one Queue.
     * @example
     * // Delete one Queue
     * const Queue = await prisma.queue.delete({
     *   where: {
     *     // ... filter to delete one Queue
     *   }
     * })
     * 
     */
    delete<T extends QueueDeleteArgs>(args: SelectSubset<T, QueueDeleteArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Queue.
     * @param {QueueUpdateArgs} args - Arguments to update one Queue.
     * @example
     * // Update one Queue
     * const queue = await prisma.queue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueueUpdateArgs>(args: SelectSubset<T, QueueUpdateArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Queues.
     * @param {QueueDeleteManyArgs} args - Arguments to filter Queues to delete.
     * @example
     * // Delete a few Queues
     * const { count } = await prisma.queue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueueDeleteManyArgs>(args?: SelectSubset<T, QueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Queues
     * const queue = await prisma.queue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueueUpdateManyArgs>(args: SelectSubset<T, QueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queues and returns the data updated in the database.
     * @param {QueueUpdateManyAndReturnArgs} args - Arguments to update many Queues.
     * @example
     * // Update many Queues
     * const queue = await prisma.queue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Queues and only return the `id`
     * const queueWithIdOnly = await prisma.queue.updateManyAndReturn({
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
    updateManyAndReturn<T extends QueueUpdateManyAndReturnArgs>(args: SelectSubset<T, QueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Queue.
     * @param {QueueUpsertArgs} args - Arguments to update or create a Queue.
     * @example
     * // Update or create a Queue
     * const queue = await prisma.queue.upsert({
     *   create: {
     *     // ... data to create a Queue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Queue we want to update
     *   }
     * })
     */
    upsert<T extends QueueUpsertArgs>(args: SelectSubset<T, QueueUpsertArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Queues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueCountArgs} args - Arguments to filter Queues to count.
     * @example
     * // Count the number of Queues
     * const count = await prisma.queue.count({
     *   where: {
     *     // ... the filter for the Queues we want to count
     *   }
     * })
    **/
    count<T extends QueueCountArgs>(
      args?: Subset<T, QueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QueueAggregateArgs>(args: Subset<T, QueueAggregateArgs>): Prisma.PrismaPromise<GetQueueAggregateType<T>>

    /**
     * Group by Queue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueGroupByArgs} args - Group by arguments.
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
      T extends QueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueueGroupByArgs['orderBy'] }
        : { orderBy?: QueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Queue model
   */
  readonly fields: QueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Queue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinic<T extends DoctorClinicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorClinicDefaultArgs<ExtArgs>>): Prisma__DoctorClinicClient<$Result.GetResult<Prisma.$DoctorClinicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tokens<T extends Queue$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Queue$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Queue model
   */
  interface QueueFieldRefs {
    readonly id: FieldRef<"Queue", 'String'>
    readonly clinicId: FieldRef<"Queue", 'String'>
    readonly queueDate: FieldRef<"Queue", 'DateTime'>
    readonly currentTokenNo: FieldRef<"Queue", 'Int'>
    readonly isActive: FieldRef<"Queue", 'Boolean'>
    readonly createdAt: FieldRef<"Queue", 'DateTime'>
    readonly updatedAt: FieldRef<"Queue", 'DateTime'>
    readonly maxQueueSize: FieldRef<"Queue", 'Int'>
    readonly startTime: FieldRef<"Queue", 'DateTime'>
    readonly endTime: FieldRef<"Queue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Queue findUnique
   */
  export type QueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter, which Queue to fetch.
     */
    where: QueueWhereUniqueInput
  }

  /**
   * Queue findUniqueOrThrow
   */
  export type QueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter, which Queue to fetch.
     */
    where: QueueWhereUniqueInput
  }

  /**
   * Queue findFirst
   */
  export type QueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter, which Queue to fetch.
     */
    where?: QueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueueOrderByWithRelationInput | QueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queues.
     */
    cursor?: QueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queues.
     */
    distinct?: QueueScalarFieldEnum | QueueScalarFieldEnum[]
  }

  /**
   * Queue findFirstOrThrow
   */
  export type QueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter, which Queue to fetch.
     */
    where?: QueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueueOrderByWithRelationInput | QueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queues.
     */
    cursor?: QueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queues.
     */
    distinct?: QueueScalarFieldEnum | QueueScalarFieldEnum[]
  }

  /**
   * Queue findMany
   */
  export type QueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter, which Queues to fetch.
     */
    where?: QueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queues to fetch.
     */
    orderBy?: QueueOrderByWithRelationInput | QueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Queues.
     */
    cursor?: QueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queues.
     */
    skip?: number
    distinct?: QueueScalarFieldEnum | QueueScalarFieldEnum[]
  }

  /**
   * Queue create
   */
  export type QueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * The data needed to create a Queue.
     */
    data: XOR<QueueCreateInput, QueueUncheckedCreateInput>
  }

  /**
   * Queue createMany
   */
  export type QueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Queues.
     */
    data: QueueCreateManyInput | QueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Queue createManyAndReturn
   */
  export type QueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * The data used to create many Queues.
     */
    data: QueueCreateManyInput | QueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Queue update
   */
  export type QueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * The data needed to update a Queue.
     */
    data: XOR<QueueUpdateInput, QueueUncheckedUpdateInput>
    /**
     * Choose, which Queue to update.
     */
    where: QueueWhereUniqueInput
  }

  /**
   * Queue updateMany
   */
  export type QueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Queues.
     */
    data: XOR<QueueUpdateManyMutationInput, QueueUncheckedUpdateManyInput>
    /**
     * Filter which Queues to update
     */
    where?: QueueWhereInput
    /**
     * Limit how many Queues to update.
     */
    limit?: number
  }

  /**
   * Queue updateManyAndReturn
   */
  export type QueueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * The data used to update Queues.
     */
    data: XOR<QueueUpdateManyMutationInput, QueueUncheckedUpdateManyInput>
    /**
     * Filter which Queues to update
     */
    where?: QueueWhereInput
    /**
     * Limit how many Queues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Queue upsert
   */
  export type QueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * The filter to search for the Queue to update in case it exists.
     */
    where: QueueWhereUniqueInput
    /**
     * In case the Queue found by the `where` argument doesn't exist, create a new Queue with this data.
     */
    create: XOR<QueueCreateInput, QueueUncheckedCreateInput>
    /**
     * In case the Queue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueueUpdateInput, QueueUncheckedUpdateInput>
  }

  /**
   * Queue delete
   */
  export type QueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
    /**
     * Filter which Queue to delete.
     */
    where: QueueWhereUniqueInput
  }

  /**
   * Queue deleteMany
   */
  export type QueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Queues to delete
     */
    where?: QueueWhereInput
    /**
     * Limit how many Queues to delete.
     */
    limit?: number
  }

  /**
   * Queue.tokens
   */
  export type Queue$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Queue without action
   */
  export type QueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Queue
     */
    select?: QueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Queue
     */
    omit?: QueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    tokenNumber: number | null
  }

  export type TokenSumAggregateOutputType = {
    tokenNumber: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    queueId: string | null
    patientId: string | null
    tokenNumber: number | null
    status: $Enums.TokenStatus | null
    createdAt: Date | null
    calledAt: Date | null
    completedAt: Date | null
    skippedAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    queueId: string | null
    patientId: string | null
    tokenNumber: number | null
    status: $Enums.TokenStatus | null
    createdAt: Date | null
    calledAt: Date | null
    completedAt: Date | null
    skippedAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    queueId: number
    patientId: number
    tokenNumber: number
    status: number
    createdAt: number
    calledAt: number
    completedAt: number
    skippedAt: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    tokenNumber?: true
  }

  export type TokenSumAggregateInputType = {
    tokenNumber?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    queueId?: true
    patientId?: true
    tokenNumber?: true
    status?: true
    createdAt?: true
    calledAt?: true
    completedAt?: true
    skippedAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    queueId?: true
    patientId?: true
    tokenNumber?: true
    status?: true
    createdAt?: true
    calledAt?: true
    completedAt?: true
    skippedAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    queueId?: true
    patientId?: true
    tokenNumber?: true
    status?: true
    createdAt?: true
    calledAt?: true
    completedAt?: true
    skippedAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    queueId: string
    patientId: string
    tokenNumber: number
    status: $Enums.TokenStatus
    createdAt: Date
    calledAt: Date | null
    completedAt: Date | null
    skippedAt: Date | null
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queueId?: boolean
    patientId?: boolean
    tokenNumber?: boolean
    status?: boolean
    createdAt?: boolean
    calledAt?: boolean
    completedAt?: boolean
    skippedAt?: boolean
    patient?: boolean | UserDefaultArgs<ExtArgs>
    queue?: boolean | QueueDefaultArgs<ExtArgs>
    staffActivity?: boolean | Token$staffActivityArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queueId?: boolean
    patientId?: boolean
    tokenNumber?: boolean
    status?: boolean
    createdAt?: boolean
    calledAt?: boolean
    completedAt?: boolean
    skippedAt?: boolean
    patient?: boolean | UserDefaultArgs<ExtArgs>
    queue?: boolean | QueueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queueId?: boolean
    patientId?: boolean
    tokenNumber?: boolean
    status?: boolean
    createdAt?: boolean
    calledAt?: boolean
    completedAt?: boolean
    skippedAt?: boolean
    patient?: boolean | UserDefaultArgs<ExtArgs>
    queue?: boolean | QueueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    queueId?: boolean
    patientId?: boolean
    tokenNumber?: boolean
    status?: boolean
    createdAt?: boolean
    calledAt?: boolean
    completedAt?: boolean
    skippedAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "queueId" | "patientId" | "tokenNumber" | "status" | "createdAt" | "calledAt" | "completedAt" | "skippedAt", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UserDefaultArgs<ExtArgs>
    queue?: boolean | QueueDefaultArgs<ExtArgs>
    staffActivity?: boolean | Token$staffActivityArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UserDefaultArgs<ExtArgs>
    queue?: boolean | QueueDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UserDefaultArgs<ExtArgs>
    queue?: boolean | QueueDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      patient: Prisma.$UserPayload<ExtArgs>
      queue: Prisma.$QueuePayload<ExtArgs>
      staffActivity: Prisma.$StaffActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      queueId: string
      patientId: string
      tokenNumber: number
      status: $Enums.TokenStatus
      createdAt: Date
      calledAt: Date | null
      completedAt: Date | null
      skippedAt: Date | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    queue<T extends QueueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QueueDefaultArgs<ExtArgs>>): Prisma__QueueClient<$Result.GetResult<Prisma.$QueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staffActivity<T extends Token$staffActivityArgs<ExtArgs> = {}>(args?: Subset<T, Token$staffActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly queueId: FieldRef<"Token", 'String'>
    readonly patientId: FieldRef<"Token", 'String'>
    readonly tokenNumber: FieldRef<"Token", 'Int'>
    readonly status: FieldRef<"Token", 'TokenStatus'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly calledAt: FieldRef<"Token", 'DateTime'>
    readonly completedAt: FieldRef<"Token", 'DateTime'>
    readonly skippedAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token.staffActivity
   */
  export type Token$staffActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
    where?: StaffActivityWhereInput
    orderBy?: StaffActivityOrderByWithRelationInput | StaffActivityOrderByWithRelationInput[]
    cursor?: StaffActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffActivityScalarFieldEnum | StaffActivityScalarFieldEnum[]
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model StaffActivity
   */

  export type AggregateStaffActivity = {
    _count: StaffActivityCountAggregateOutputType | null
    _min: StaffActivityMinAggregateOutputType | null
    _max: StaffActivityMaxAggregateOutputType | null
  }

  export type StaffActivityMinAggregateOutputType = {
    id: string | null
    staffId: string | null
    tokenId: string | null
    action: $Enums.StaffAction | null
    createdAt: Date | null
  }

  export type StaffActivityMaxAggregateOutputType = {
    id: string | null
    staffId: string | null
    tokenId: string | null
    action: $Enums.StaffAction | null
    createdAt: Date | null
  }

  export type StaffActivityCountAggregateOutputType = {
    id: number
    staffId: number
    tokenId: number
    action: number
    createdAt: number
    _all: number
  }


  export type StaffActivityMinAggregateInputType = {
    id?: true
    staffId?: true
    tokenId?: true
    action?: true
    createdAt?: true
  }

  export type StaffActivityMaxAggregateInputType = {
    id?: true
    staffId?: true
    tokenId?: true
    action?: true
    createdAt?: true
  }

  export type StaffActivityCountAggregateInputType = {
    id?: true
    staffId?: true
    tokenId?: true
    action?: true
    createdAt?: true
    _all?: true
  }

  export type StaffActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffActivity to aggregate.
     */
    where?: StaffActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffActivities to fetch.
     */
    orderBy?: StaffActivityOrderByWithRelationInput | StaffActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffActivities
    **/
    _count?: true | StaffActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffActivityMaxAggregateInputType
  }

  export type GetStaffActivityAggregateType<T extends StaffActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffActivity[P]>
      : GetScalarType<T[P], AggregateStaffActivity[P]>
  }




  export type StaffActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffActivityWhereInput
    orderBy?: StaffActivityOrderByWithAggregationInput | StaffActivityOrderByWithAggregationInput[]
    by: StaffActivityScalarFieldEnum[] | StaffActivityScalarFieldEnum
    having?: StaffActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffActivityCountAggregateInputType | true
    _min?: StaffActivityMinAggregateInputType
    _max?: StaffActivityMaxAggregateInputType
  }

  export type StaffActivityGroupByOutputType = {
    id: string
    staffId: string
    tokenId: string
    action: $Enums.StaffAction
    createdAt: Date
    _count: StaffActivityCountAggregateOutputType | null
    _min: StaffActivityMinAggregateOutputType | null
    _max: StaffActivityMaxAggregateOutputType | null
  }

  type GetStaffActivityGroupByPayload<T extends StaffActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffActivityGroupByOutputType[P]>
            : GetScalarType<T[P], StaffActivityGroupByOutputType[P]>
        }
      >
    >


  export type StaffActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    tokenId?: boolean
    action?: boolean
    createdAt?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffActivity"]>

  export type StaffActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    tokenId?: boolean
    action?: boolean
    createdAt?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffActivity"]>

  export type StaffActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staffId?: boolean
    tokenId?: boolean
    action?: boolean
    createdAt?: boolean
    staff?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffActivity"]>

  export type StaffActivitySelectScalar = {
    id?: boolean
    staffId?: boolean
    tokenId?: boolean
    action?: boolean
    createdAt?: boolean
  }

  export type StaffActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staffId" | "tokenId" | "action" | "createdAt", ExtArgs["result"]["staffActivity"]>
  export type StaffActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type StaffActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type StaffActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }

  export type $StaffActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffActivity"
    objects: {
      staff: Prisma.$UserPayload<ExtArgs>
      token: Prisma.$TokenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      staffId: string
      tokenId: string
      action: $Enums.StaffAction
      createdAt: Date
    }, ExtArgs["result"]["staffActivity"]>
    composites: {}
  }

  type StaffActivityGetPayload<S extends boolean | null | undefined | StaffActivityDefaultArgs> = $Result.GetResult<Prisma.$StaffActivityPayload, S>

  type StaffActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffActivityCountAggregateInputType | true
    }

  export interface StaffActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffActivity'], meta: { name: 'StaffActivity' } }
    /**
     * Find zero or one StaffActivity that matches the filter.
     * @param {StaffActivityFindUniqueArgs} args - Arguments to find a StaffActivity
     * @example
     * // Get one StaffActivity
     * const staffActivity = await prisma.staffActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffActivityFindUniqueArgs>(args: SelectSubset<T, StaffActivityFindUniqueArgs<ExtArgs>>): Prisma__StaffActivityClient<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffActivityFindUniqueOrThrowArgs} args - Arguments to find a StaffActivity
     * @example
     * // Get one StaffActivity
     * const staffActivity = await prisma.staffActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffActivityClient<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffActivityFindFirstArgs} args - Arguments to find a StaffActivity
     * @example
     * // Get one StaffActivity
     * const staffActivity = await prisma.staffActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffActivityFindFirstArgs>(args?: SelectSubset<T, StaffActivityFindFirstArgs<ExtArgs>>): Prisma__StaffActivityClient<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffActivityFindFirstOrThrowArgs} args - Arguments to find a StaffActivity
     * @example
     * // Get one StaffActivity
     * const staffActivity = await prisma.staffActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffActivityClient<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffActivities
     * const staffActivities = await prisma.staffActivity.findMany()
     * 
     * // Get first 10 StaffActivities
     * const staffActivities = await prisma.staffActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffActivityWithIdOnly = await prisma.staffActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffActivityFindManyArgs>(args?: SelectSubset<T, StaffActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffActivity.
     * @param {StaffActivityCreateArgs} args - Arguments to create a StaffActivity.
     * @example
     * // Create one StaffActivity
     * const StaffActivity = await prisma.staffActivity.create({
     *   data: {
     *     // ... data to create a StaffActivity
     *   }
     * })
     * 
     */
    create<T extends StaffActivityCreateArgs>(args: SelectSubset<T, StaffActivityCreateArgs<ExtArgs>>): Prisma__StaffActivityClient<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffActivities.
     * @param {StaffActivityCreateManyArgs} args - Arguments to create many StaffActivities.
     * @example
     * // Create many StaffActivities
     * const staffActivity = await prisma.staffActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffActivityCreateManyArgs>(args?: SelectSubset<T, StaffActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffActivities and returns the data saved in the database.
     * @param {StaffActivityCreateManyAndReturnArgs} args - Arguments to create many StaffActivities.
     * @example
     * // Create many StaffActivities
     * const staffActivity = await prisma.staffActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffActivities and only return the `id`
     * const staffActivityWithIdOnly = await prisma.staffActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffActivity.
     * @param {StaffActivityDeleteArgs} args - Arguments to delete one StaffActivity.
     * @example
     * // Delete one StaffActivity
     * const StaffActivity = await prisma.staffActivity.delete({
     *   where: {
     *     // ... filter to delete one StaffActivity
     *   }
     * })
     * 
     */
    delete<T extends StaffActivityDeleteArgs>(args: SelectSubset<T, StaffActivityDeleteArgs<ExtArgs>>): Prisma__StaffActivityClient<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffActivity.
     * @param {StaffActivityUpdateArgs} args - Arguments to update one StaffActivity.
     * @example
     * // Update one StaffActivity
     * const staffActivity = await prisma.staffActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffActivityUpdateArgs>(args: SelectSubset<T, StaffActivityUpdateArgs<ExtArgs>>): Prisma__StaffActivityClient<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffActivities.
     * @param {StaffActivityDeleteManyArgs} args - Arguments to filter StaffActivities to delete.
     * @example
     * // Delete a few StaffActivities
     * const { count } = await prisma.staffActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffActivityDeleteManyArgs>(args?: SelectSubset<T, StaffActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffActivities
     * const staffActivity = await prisma.staffActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffActivityUpdateManyArgs>(args: SelectSubset<T, StaffActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffActivities and returns the data updated in the database.
     * @param {StaffActivityUpdateManyAndReturnArgs} args - Arguments to update many StaffActivities.
     * @example
     * // Update many StaffActivities
     * const staffActivity = await prisma.staffActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffActivities and only return the `id`
     * const staffActivityWithIdOnly = await prisma.staffActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffActivity.
     * @param {StaffActivityUpsertArgs} args - Arguments to update or create a StaffActivity.
     * @example
     * // Update or create a StaffActivity
     * const staffActivity = await prisma.staffActivity.upsert({
     *   create: {
     *     // ... data to create a StaffActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffActivity we want to update
     *   }
     * })
     */
    upsert<T extends StaffActivityUpsertArgs>(args: SelectSubset<T, StaffActivityUpsertArgs<ExtArgs>>): Prisma__StaffActivityClient<$Result.GetResult<Prisma.$StaffActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffActivityCountArgs} args - Arguments to filter StaffActivities to count.
     * @example
     * // Count the number of StaffActivities
     * const count = await prisma.staffActivity.count({
     *   where: {
     *     // ... the filter for the StaffActivities we want to count
     *   }
     * })
    **/
    count<T extends StaffActivityCountArgs>(
      args?: Subset<T, StaffActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffActivityAggregateArgs>(args: Subset<T, StaffActivityAggregateArgs>): Prisma.PrismaPromise<GetStaffActivityAggregateType<T>>

    /**
     * Group by StaffActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffActivityGroupByArgs} args - Group by arguments.
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
      T extends StaffActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffActivityGroupByArgs['orderBy'] }
        : { orderBy?: StaffActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffActivity model
   */
  readonly fields: StaffActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StaffActivity model
   */
  interface StaffActivityFieldRefs {
    readonly id: FieldRef<"StaffActivity", 'String'>
    readonly staffId: FieldRef<"StaffActivity", 'String'>
    readonly tokenId: FieldRef<"StaffActivity", 'String'>
    readonly action: FieldRef<"StaffActivity", 'StaffAction'>
    readonly createdAt: FieldRef<"StaffActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffActivity findUnique
   */
  export type StaffActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
    /**
     * Filter, which StaffActivity to fetch.
     */
    where: StaffActivityWhereUniqueInput
  }

  /**
   * StaffActivity findUniqueOrThrow
   */
  export type StaffActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
    /**
     * Filter, which StaffActivity to fetch.
     */
    where: StaffActivityWhereUniqueInput
  }

  /**
   * StaffActivity findFirst
   */
  export type StaffActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
    /**
     * Filter, which StaffActivity to fetch.
     */
    where?: StaffActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffActivities to fetch.
     */
    orderBy?: StaffActivityOrderByWithRelationInput | StaffActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffActivities.
     */
    cursor?: StaffActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffActivities.
     */
    distinct?: StaffActivityScalarFieldEnum | StaffActivityScalarFieldEnum[]
  }

  /**
   * StaffActivity findFirstOrThrow
   */
  export type StaffActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
    /**
     * Filter, which StaffActivity to fetch.
     */
    where?: StaffActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffActivities to fetch.
     */
    orderBy?: StaffActivityOrderByWithRelationInput | StaffActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffActivities.
     */
    cursor?: StaffActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffActivities.
     */
    distinct?: StaffActivityScalarFieldEnum | StaffActivityScalarFieldEnum[]
  }

  /**
   * StaffActivity findMany
   */
  export type StaffActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
    /**
     * Filter, which StaffActivities to fetch.
     */
    where?: StaffActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffActivities to fetch.
     */
    orderBy?: StaffActivityOrderByWithRelationInput | StaffActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffActivities.
     */
    cursor?: StaffActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffActivities.
     */
    skip?: number
    distinct?: StaffActivityScalarFieldEnum | StaffActivityScalarFieldEnum[]
  }

  /**
   * StaffActivity create
   */
  export type StaffActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffActivity.
     */
    data: XOR<StaffActivityCreateInput, StaffActivityUncheckedCreateInput>
  }

  /**
   * StaffActivity createMany
   */
  export type StaffActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffActivities.
     */
    data: StaffActivityCreateManyInput | StaffActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffActivity createManyAndReturn
   */
  export type StaffActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * The data used to create many StaffActivities.
     */
    data: StaffActivityCreateManyInput | StaffActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffActivity update
   */
  export type StaffActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffActivity.
     */
    data: XOR<StaffActivityUpdateInput, StaffActivityUncheckedUpdateInput>
    /**
     * Choose, which StaffActivity to update.
     */
    where: StaffActivityWhereUniqueInput
  }

  /**
   * StaffActivity updateMany
   */
  export type StaffActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffActivities.
     */
    data: XOR<StaffActivityUpdateManyMutationInput, StaffActivityUncheckedUpdateManyInput>
    /**
     * Filter which StaffActivities to update
     */
    where?: StaffActivityWhereInput
    /**
     * Limit how many StaffActivities to update.
     */
    limit?: number
  }

  /**
   * StaffActivity updateManyAndReturn
   */
  export type StaffActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * The data used to update StaffActivities.
     */
    data: XOR<StaffActivityUpdateManyMutationInput, StaffActivityUncheckedUpdateManyInput>
    /**
     * Filter which StaffActivities to update
     */
    where?: StaffActivityWhereInput
    /**
     * Limit how many StaffActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffActivity upsert
   */
  export type StaffActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffActivity to update in case it exists.
     */
    where: StaffActivityWhereUniqueInput
    /**
     * In case the StaffActivity found by the `where` argument doesn't exist, create a new StaffActivity with this data.
     */
    create: XOR<StaffActivityCreateInput, StaffActivityUncheckedCreateInput>
    /**
     * In case the StaffActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffActivityUpdateInput, StaffActivityUncheckedUpdateInput>
  }

  /**
   * StaffActivity delete
   */
  export type StaffActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
    /**
     * Filter which StaffActivity to delete.
     */
    where: StaffActivityWhereUniqueInput
  }

  /**
   * StaffActivity deleteMany
   */
  export type StaffActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffActivities to delete
     */
    where?: StaffActivityWhereInput
    /**
     * Limit how many StaffActivities to delete.
     */
    limit?: number
  }

  /**
   * StaffActivity without action
   */
  export type StaffActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffActivity
     */
    select?: StaffActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaffActivity
     */
    omit?: StaffActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffActivityInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshTokenHash: string | null
    userAgent: string | null
    ipAddress: string | null
    expiresAt: Date | null
    isRevoked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshTokenHash: string | null
    userAgent: string | null
    ipAddress: string | null
    expiresAt: Date | null
    isRevoked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    refreshTokenHash: number
    userAgent: number
    ipAddress: number
    expiresAt: number
    isRevoked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    userAgent?: true
    ipAddress?: true
    expiresAt?: true
    isRevoked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    userAgent?: true
    ipAddress?: true
    expiresAt?: true
    isRevoked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    refreshTokenHash?: true
    userAgent?: true
    ipAddress?: true
    expiresAt?: true
    isRevoked?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    refreshTokenHash: string
    userAgent: string | null
    ipAddress: string | null
    expiresAt: Date
    isRevoked: boolean
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    refreshTokenHash?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "refreshTokenHash" | "userAgent" | "ipAddress" | "expiresAt" | "isRevoked" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      refreshTokenHash: string
      userAgent: string | null
      ipAddress: string | null
      expiresAt: Date
      isRevoked: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly refreshTokenHash: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly isRevoked: FieldRef<"Session", 'Boolean'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    clinicId: 'clinicId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    profilePicture: 'profilePicture'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DoctorClinicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    phone: 'phone',
    email: 'email',
    website: 'website',
    description: 'description',
    logo: 'logo',
    images: 'images',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type',
    openingHours: 'openingHours'
  };

  export type DoctorClinicScalarFieldEnum = (typeof DoctorClinicScalarFieldEnum)[keyof typeof DoctorClinicScalarFieldEnum]


  export const QueueScalarFieldEnum: {
    id: 'id',
    clinicId: 'clinicId',
    queueDate: 'queueDate',
    currentTokenNo: 'currentTokenNo',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    maxQueueSize: 'maxQueueSize',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type QueueScalarFieldEnum = (typeof QueueScalarFieldEnum)[keyof typeof QueueScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    queueId: 'queueId',
    patientId: 'patientId',
    tokenNumber: 'tokenNumber',
    status: 'status',
    createdAt: 'createdAt',
    calledAt: 'calledAt',
    completedAt: 'completedAt',
    skippedAt: 'skippedAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const StaffActivityScalarFieldEnum: {
    id: 'id',
    staffId: 'staffId',
    tokenId: 'tokenId',
    action: 'action',
    createdAt: 'createdAt'
  };

  export type StaffActivityScalarFieldEnum = (typeof StaffActivityScalarFieldEnum)[keyof typeof StaffActivityScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshTokenHash: 'refreshTokenHash',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    expiresAt: 'expiresAt',
    isRevoked: 'isRevoked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DoctorType'
   */
  export type EnumDoctorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoctorType'>
    


  /**
   * Reference to a field of type 'DoctorType[]'
   */
  export type ListEnumDoctorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoctorType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TokenStatus'
   */
  export type EnumTokenStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenStatus'>
    


  /**
   * Reference to a field of type 'TokenStatus[]'
   */
  export type ListEnumTokenStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenStatus[]'>
    


  /**
   * Reference to a field of type 'StaffAction'
   */
  export type EnumStaffActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffAction'>
    


  /**
   * Reference to a field of type 'StaffAction[]'
   */
  export type ListEnumStaffActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffAction[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    clinicId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    clinic?: XOR<DoctorClinicNullableScalarRelationFilter, DoctorClinicWhereInput> | null
    tokens?: TokenListRelationFilter
    staffActivity?: StaffActivityListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    clinicId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    clinic?: DoctorClinicOrderByWithRelationInput
    tokens?: TokenOrderByRelationAggregateInput
    staffActivity?: StaffActivityOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    clinicId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    clinic?: XOR<DoctorClinicNullableScalarRelationFilter, DoctorClinicWhereInput> | null
    tokens?: TokenListRelationFilter
    staffActivity?: StaffActivityListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    clinicId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    clinicId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type DoctorClinicWhereInput = {
    AND?: DoctorClinicWhereInput | DoctorClinicWhereInput[]
    OR?: DoctorClinicWhereInput[]
    NOT?: DoctorClinicWhereInput | DoctorClinicWhereInput[]
    id?: StringFilter<"DoctorClinic"> | string
    name?: StringFilter<"DoctorClinic"> | string
    address?: StringNullableFilter<"DoctorClinic"> | string | null
    latitude?: FloatFilter<"DoctorClinic"> | number
    longitude?: FloatFilter<"DoctorClinic"> | number
    phone?: StringNullableFilter<"DoctorClinic"> | string | null
    email?: StringNullableFilter<"DoctorClinic"> | string | null
    website?: StringNullableFilter<"DoctorClinic"> | string | null
    description?: StringNullableFilter<"DoctorClinic"> | string | null
    logo?: StringNullableFilter<"DoctorClinic"> | string | null
    images?: StringNullableListFilter<"DoctorClinic">
    isActive?: BoolFilter<"DoctorClinic"> | boolean
    createdAt?: DateTimeFilter<"DoctorClinic"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorClinic"> | Date | string
    type?: EnumDoctorTypeFilter<"DoctorClinic"> | $Enums.DoctorType
    openingHours?: JsonFilter<"DoctorClinic">
    staff?: UserListRelationFilter
    queues?: QueueListRelationFilter
  }

  export type DoctorClinicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    images?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    openingHours?: SortOrder
    staff?: UserOrderByRelationAggregateInput
    queues?: QueueOrderByRelationAggregateInput
  }

  export type DoctorClinicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_latitude_longitude?: DoctorClinicNameLatitudeLongitudeCompoundUniqueInput
    AND?: DoctorClinicWhereInput | DoctorClinicWhereInput[]
    OR?: DoctorClinicWhereInput[]
    NOT?: DoctorClinicWhereInput | DoctorClinicWhereInput[]
    name?: StringFilter<"DoctorClinic"> | string
    address?: StringNullableFilter<"DoctorClinic"> | string | null
    latitude?: FloatFilter<"DoctorClinic"> | number
    longitude?: FloatFilter<"DoctorClinic"> | number
    phone?: StringNullableFilter<"DoctorClinic"> | string | null
    email?: StringNullableFilter<"DoctorClinic"> | string | null
    website?: StringNullableFilter<"DoctorClinic"> | string | null
    description?: StringNullableFilter<"DoctorClinic"> | string | null
    logo?: StringNullableFilter<"DoctorClinic"> | string | null
    images?: StringNullableListFilter<"DoctorClinic">
    isActive?: BoolFilter<"DoctorClinic"> | boolean
    createdAt?: DateTimeFilter<"DoctorClinic"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorClinic"> | Date | string
    type?: EnumDoctorTypeFilter<"DoctorClinic"> | $Enums.DoctorType
    openingHours?: JsonFilter<"DoctorClinic">
    staff?: UserListRelationFilter
    queues?: QueueListRelationFilter
  }, "id" | "name_latitude_longitude">

  export type DoctorClinicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    images?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    openingHours?: SortOrder
    _count?: DoctorClinicCountOrderByAggregateInput
    _avg?: DoctorClinicAvgOrderByAggregateInput
    _max?: DoctorClinicMaxOrderByAggregateInput
    _min?: DoctorClinicMinOrderByAggregateInput
    _sum?: DoctorClinicSumOrderByAggregateInput
  }

  export type DoctorClinicScalarWhereWithAggregatesInput = {
    AND?: DoctorClinicScalarWhereWithAggregatesInput | DoctorClinicScalarWhereWithAggregatesInput[]
    OR?: DoctorClinicScalarWhereWithAggregatesInput[]
    NOT?: DoctorClinicScalarWhereWithAggregatesInput | DoctorClinicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorClinic"> | string
    name?: StringWithAggregatesFilter<"DoctorClinic"> | string
    address?: StringNullableWithAggregatesFilter<"DoctorClinic"> | string | null
    latitude?: FloatWithAggregatesFilter<"DoctorClinic"> | number
    longitude?: FloatWithAggregatesFilter<"DoctorClinic"> | number
    phone?: StringNullableWithAggregatesFilter<"DoctorClinic"> | string | null
    email?: StringNullableWithAggregatesFilter<"DoctorClinic"> | string | null
    website?: StringNullableWithAggregatesFilter<"DoctorClinic"> | string | null
    description?: StringNullableWithAggregatesFilter<"DoctorClinic"> | string | null
    logo?: StringNullableWithAggregatesFilter<"DoctorClinic"> | string | null
    images?: StringNullableListFilter<"DoctorClinic">
    isActive?: BoolWithAggregatesFilter<"DoctorClinic"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DoctorClinic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DoctorClinic"> | Date | string
    type?: EnumDoctorTypeWithAggregatesFilter<"DoctorClinic"> | $Enums.DoctorType
    openingHours?: JsonWithAggregatesFilter<"DoctorClinic">
  }

  export type QueueWhereInput = {
    AND?: QueueWhereInput | QueueWhereInput[]
    OR?: QueueWhereInput[]
    NOT?: QueueWhereInput | QueueWhereInput[]
    id?: StringFilter<"Queue"> | string
    clinicId?: StringFilter<"Queue"> | string
    queueDate?: DateTimeFilter<"Queue"> | Date | string
    currentTokenNo?: IntFilter<"Queue"> | number
    isActive?: BoolFilter<"Queue"> | boolean
    createdAt?: DateTimeFilter<"Queue"> | Date | string
    updatedAt?: DateTimeFilter<"Queue"> | Date | string
    maxQueueSize?: IntFilter<"Queue"> | number
    startTime?: DateTimeFilter<"Queue"> | Date | string
    endTime?: DateTimeFilter<"Queue"> | Date | string
    clinic?: XOR<DoctorClinicScalarRelationFilter, DoctorClinicWhereInput>
    tokens?: TokenListRelationFilter
  }

  export type QueueOrderByWithRelationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    queueDate?: SortOrder
    currentTokenNo?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxQueueSize?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    clinic?: DoctorClinicOrderByWithRelationInput
    tokens?: TokenOrderByRelationAggregateInput
  }

  export type QueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clinicId_queueDate?: QueueClinicIdQueueDateCompoundUniqueInput
    AND?: QueueWhereInput | QueueWhereInput[]
    OR?: QueueWhereInput[]
    NOT?: QueueWhereInput | QueueWhereInput[]
    clinicId?: StringFilter<"Queue"> | string
    queueDate?: DateTimeFilter<"Queue"> | Date | string
    currentTokenNo?: IntFilter<"Queue"> | number
    isActive?: BoolFilter<"Queue"> | boolean
    createdAt?: DateTimeFilter<"Queue"> | Date | string
    updatedAt?: DateTimeFilter<"Queue"> | Date | string
    maxQueueSize?: IntFilter<"Queue"> | number
    startTime?: DateTimeFilter<"Queue"> | Date | string
    endTime?: DateTimeFilter<"Queue"> | Date | string
    clinic?: XOR<DoctorClinicScalarRelationFilter, DoctorClinicWhereInput>
    tokens?: TokenListRelationFilter
  }, "id" | "clinicId_queueDate">

  export type QueueOrderByWithAggregationInput = {
    id?: SortOrder
    clinicId?: SortOrder
    queueDate?: SortOrder
    currentTokenNo?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxQueueSize?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: QueueCountOrderByAggregateInput
    _avg?: QueueAvgOrderByAggregateInput
    _max?: QueueMaxOrderByAggregateInput
    _min?: QueueMinOrderByAggregateInput
    _sum?: QueueSumOrderByAggregateInput
  }

  export type QueueScalarWhereWithAggregatesInput = {
    AND?: QueueScalarWhereWithAggregatesInput | QueueScalarWhereWithAggregatesInput[]
    OR?: QueueScalarWhereWithAggregatesInput[]
    NOT?: QueueScalarWhereWithAggregatesInput | QueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Queue"> | string
    clinicId?: StringWithAggregatesFilter<"Queue"> | string
    queueDate?: DateTimeWithAggregatesFilter<"Queue"> | Date | string
    currentTokenNo?: IntWithAggregatesFilter<"Queue"> | number
    isActive?: BoolWithAggregatesFilter<"Queue"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Queue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Queue"> | Date | string
    maxQueueSize?: IntWithAggregatesFilter<"Queue"> | number
    startTime?: DateTimeWithAggregatesFilter<"Queue"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Queue"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    queueId?: StringFilter<"Token"> | string
    patientId?: StringFilter<"Token"> | string
    tokenNumber?: IntFilter<"Token"> | number
    status?: EnumTokenStatusFilter<"Token"> | $Enums.TokenStatus
    createdAt?: DateTimeFilter<"Token"> | Date | string
    calledAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    skippedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    queue?: XOR<QueueScalarRelationFilter, QueueWhereInput>
    staffActivity?: StaffActivityListRelationFilter
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    queueId?: SortOrder
    patientId?: SortOrder
    tokenNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    calledAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    skippedAt?: SortOrderInput | SortOrder
    patient?: UserOrderByWithRelationInput
    queue?: QueueOrderByWithRelationInput
    staffActivity?: StaffActivityOrderByRelationAggregateInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    queueId_tokenNumber?: TokenQueueIdTokenNumberCompoundUniqueInput
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    queueId?: StringFilter<"Token"> | string
    patientId?: StringFilter<"Token"> | string
    tokenNumber?: IntFilter<"Token"> | number
    status?: EnumTokenStatusFilter<"Token"> | $Enums.TokenStatus
    createdAt?: DateTimeFilter<"Token"> | Date | string
    calledAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    skippedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    queue?: XOR<QueueScalarRelationFilter, QueueWhereInput>
    staffActivity?: StaffActivityListRelationFilter
  }, "id" | "queueId_tokenNumber">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    queueId?: SortOrder
    patientId?: SortOrder
    tokenNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    calledAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    skippedAt?: SortOrderInput | SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    queueId?: StringWithAggregatesFilter<"Token"> | string
    patientId?: StringWithAggregatesFilter<"Token"> | string
    tokenNumber?: IntWithAggregatesFilter<"Token"> | number
    status?: EnumTokenStatusWithAggregatesFilter<"Token"> | $Enums.TokenStatus
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    calledAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    skippedAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
  }

  export type StaffActivityWhereInput = {
    AND?: StaffActivityWhereInput | StaffActivityWhereInput[]
    OR?: StaffActivityWhereInput[]
    NOT?: StaffActivityWhereInput | StaffActivityWhereInput[]
    id?: StringFilter<"StaffActivity"> | string
    staffId?: StringFilter<"StaffActivity"> | string
    tokenId?: StringFilter<"StaffActivity"> | string
    action?: EnumStaffActionFilter<"StaffActivity"> | $Enums.StaffAction
    createdAt?: DateTimeFilter<"StaffActivity"> | Date | string
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }

  export type StaffActivityOrderByWithRelationInput = {
    id?: SortOrder
    staffId?: SortOrder
    tokenId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    staff?: UserOrderByWithRelationInput
    token?: TokenOrderByWithRelationInput
  }

  export type StaffActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    staffId_tokenId_action?: StaffActivityStaffIdTokenIdActionCompoundUniqueInput
    AND?: StaffActivityWhereInput | StaffActivityWhereInput[]
    OR?: StaffActivityWhereInput[]
    NOT?: StaffActivityWhereInput | StaffActivityWhereInput[]
    staffId?: StringFilter<"StaffActivity"> | string
    tokenId?: StringFilter<"StaffActivity"> | string
    action?: EnumStaffActionFilter<"StaffActivity"> | $Enums.StaffAction
    createdAt?: DateTimeFilter<"StaffActivity"> | Date | string
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }, "id" | "staffId_tokenId_action">

  export type StaffActivityOrderByWithAggregationInput = {
    id?: SortOrder
    staffId?: SortOrder
    tokenId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    _count?: StaffActivityCountOrderByAggregateInput
    _max?: StaffActivityMaxOrderByAggregateInput
    _min?: StaffActivityMinOrderByAggregateInput
  }

  export type StaffActivityScalarWhereWithAggregatesInput = {
    AND?: StaffActivityScalarWhereWithAggregatesInput | StaffActivityScalarWhereWithAggregatesInput[]
    OR?: StaffActivityScalarWhereWithAggregatesInput[]
    NOT?: StaffActivityScalarWhereWithAggregatesInput | StaffActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffActivity"> | string
    staffId?: StringWithAggregatesFilter<"StaffActivity"> | string
    tokenId?: StringWithAggregatesFilter<"StaffActivity"> | string
    action?: EnumStaffActionWithAggregatesFilter<"StaffActivity"> | $Enums.StaffAction
    createdAt?: DateTimeWithAggregatesFilter<"StaffActivity"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    refreshTokenHash?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    isRevoked?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    refreshTokenHash?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    isRevoked?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "refreshTokenHash">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    refreshTokenHash?: StringWithAggregatesFilter<"Session"> | string
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    isRevoked?: BoolWithAggregatesFilter<"Session"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
    clinic?: DoctorClinicCreateNestedOneWithoutStaffInput
    tokens?: TokenCreateNestedManyWithoutPatientInput
    staffActivity?: StaffActivityCreateNestedManyWithoutStaffInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    clinicId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
    tokens?: TokenUncheckedCreateNestedManyWithoutPatientInput
    staffActivity?: StaffActivityUncheckedCreateNestedManyWithoutStaffInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: DoctorClinicUpdateOneWithoutStaffNestedInput
    tokens?: TokenUpdateManyWithoutPatientNestedInput
    staffActivity?: StaffActivityUpdateManyWithoutStaffNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: TokenUncheckedUpdateManyWithoutPatientNestedInput
    staffActivity?: StaffActivityUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    clinicId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorClinicCreateInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    email?: string | null
    website?: string | null
    description?: string | null
    logo?: string | null
    images?: DoctorClinicCreateimagesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    staff?: UserCreateNestedManyWithoutClinicInput
    queues?: QueueCreateNestedManyWithoutClinicInput
  }

  export type DoctorClinicUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    email?: string | null
    website?: string | null
    description?: string | null
    logo?: string | null
    images?: DoctorClinicCreateimagesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    staff?: UserUncheckedCreateNestedManyWithoutClinicInput
    queues?: QueueUncheckedCreateNestedManyWithoutClinicInput
  }

  export type DoctorClinicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    images?: DoctorClinicUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDoctorTypeFieldUpdateOperationsInput | $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    staff?: UserUpdateManyWithoutClinicNestedInput
    queues?: QueueUpdateManyWithoutClinicNestedInput
  }

  export type DoctorClinicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    images?: DoctorClinicUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDoctorTypeFieldUpdateOperationsInput | $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    staff?: UserUncheckedUpdateManyWithoutClinicNestedInput
    queues?: QueueUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type DoctorClinicCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    email?: string | null
    website?: string | null
    description?: string | null
    logo?: string | null
    images?: DoctorClinicCreateimagesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
  }

  export type DoctorClinicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    images?: DoctorClinicUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDoctorTypeFieldUpdateOperationsInput | $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
  }

  export type DoctorClinicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    images?: DoctorClinicUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDoctorTypeFieldUpdateOperationsInput | $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
  }

  export type QueueCreateInput = {
    id?: string
    queueDate: Date | string
    currentTokenNo?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxQueueSize?: number
    startTime: Date | string
    endTime: Date | string
    clinic: DoctorClinicCreateNestedOneWithoutQueuesInput
    tokens?: TokenCreateNestedManyWithoutQueueInput
  }

  export type QueueUncheckedCreateInput = {
    id?: string
    clinicId: string
    queueDate: Date | string
    currentTokenNo?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxQueueSize?: number
    startTime: Date | string
    endTime: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutQueueInput
  }

  export type QueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentTokenNo?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxQueueSize?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: DoctorClinicUpdateOneRequiredWithoutQueuesNestedInput
    tokens?: TokenUpdateManyWithoutQueueNestedInput
  }

  export type QueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    queueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentTokenNo?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxQueueSize?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutQueueNestedInput
  }

  export type QueueCreateManyInput = {
    id?: string
    clinicId: string
    queueDate: Date | string
    currentTokenNo?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxQueueSize?: number
    startTime: Date | string
    endTime: Date | string
  }

  export type QueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentTokenNo?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxQueueSize?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    queueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentTokenNo?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxQueueSize?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    tokenNumber: number
    status?: $Enums.TokenStatus
    createdAt?: Date | string
    calledAt?: Date | string | null
    completedAt?: Date | string | null
    skippedAt?: Date | string | null
    patient: UserCreateNestedOneWithoutTokensInput
    queue: QueueCreateNestedOneWithoutTokensInput
    staffActivity?: StaffActivityCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    queueId: string
    patientId: string
    tokenNumber: number
    status?: $Enums.TokenStatus
    createdAt?: Date | string
    calledAt?: Date | string | null
    completedAt?: Date | string | null
    skippedAt?: Date | string | null
    staffActivity?: StaffActivityUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: UserUpdateOneRequiredWithoutTokensNestedInput
    queue?: QueueUpdateOneRequiredWithoutTokensNestedInput
    staffActivity?: StaffActivityUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staffActivity?: StaffActivityUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenCreateManyInput = {
    id?: string
    queueId: string
    patientId: string
    tokenNumber: number
    status?: $Enums.TokenStatus
    createdAt?: Date | string
    calledAt?: Date | string | null
    completedAt?: Date | string | null
    skippedAt?: Date | string | null
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffActivityCreateInput = {
    id?: string
    action: $Enums.StaffAction
    createdAt?: Date | string
    staff: UserCreateNestedOneWithoutStaffActivityInput
    token: TokenCreateNestedOneWithoutStaffActivityInput
  }

  export type StaffActivityUncheckedCreateInput = {
    id?: string
    staffId: string
    tokenId: string
    action: $Enums.StaffAction
    createdAt?: Date | string
  }

  export type StaffActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumStaffActionFieldUpdateOperationsInput | $Enums.StaffAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: UserUpdateOneRequiredWithoutStaffActivityNestedInput
    token?: TokenUpdateOneRequiredWithoutStaffActivityNestedInput
  }

  export type StaffActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    action?: EnumStaffActionFieldUpdateOperationsInput | $Enums.StaffAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffActivityCreateManyInput = {
    id?: string
    staffId: string
    tokenId: string
    action: $Enums.StaffAction
    createdAt?: Date | string
  }

  export type StaffActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumStaffActionFieldUpdateOperationsInput | $Enums.StaffAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    action?: EnumStaffActionFieldUpdateOperationsInput | $Enums.StaffAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    refreshTokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    refreshTokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    refreshTokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DoctorClinicNullableScalarRelationFilter = {
    is?: DoctorClinicWhereInput | null
    isNot?: DoctorClinicWhereInput | null
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type StaffActivityListRelationFilter = {
    every?: StaffActivityWhereInput
    some?: StaffActivityWhereInput
    none?: StaffActivityWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    clinicId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilePicture?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    clinicId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilePicture?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    clinicId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profilePicture?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumDoctorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorType | EnumDoctorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorType[] | ListEnumDoctorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoctorType[] | ListEnumDoctorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDoctorTypeFilter<$PrismaModel> | $Enums.DoctorType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type QueueListRelationFilter = {
    every?: QueueWhereInput
    some?: QueueWhereInput
    none?: QueueWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorClinicNameLatitudeLongitudeCompoundUniqueInput = {
    name: string
    latitude: number
    longitude: number
  }

  export type DoctorClinicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    images?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    openingHours?: SortOrder
  }

  export type DoctorClinicAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DoctorClinicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type DoctorClinicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type DoctorClinicSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumDoctorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorType | EnumDoctorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorType[] | ListEnumDoctorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoctorType[] | ListEnumDoctorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDoctorTypeWithAggregatesFilter<$PrismaModel> | $Enums.DoctorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDoctorTypeFilter<$PrismaModel>
    _max?: NestedEnumDoctorTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type DoctorClinicScalarRelationFilter = {
    is?: DoctorClinicWhereInput
    isNot?: DoctorClinicWhereInput
  }

  export type QueueClinicIdQueueDateCompoundUniqueInput = {
    clinicId: string
    queueDate: Date | string
  }

  export type QueueCountOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    queueDate?: SortOrder
    currentTokenNo?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxQueueSize?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type QueueAvgOrderByAggregateInput = {
    currentTokenNo?: SortOrder
    maxQueueSize?: SortOrder
  }

  export type QueueMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    queueDate?: SortOrder
    currentTokenNo?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxQueueSize?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type QueueMinOrderByAggregateInput = {
    id?: SortOrder
    clinicId?: SortOrder
    queueDate?: SortOrder
    currentTokenNo?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxQueueSize?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type QueueSumOrderByAggregateInput = {
    currentTokenNo?: SortOrder
    maxQueueSize?: SortOrder
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

  export type EnumTokenStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenStatus | EnumTokenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TokenStatus[] | ListEnumTokenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenStatus[] | ListEnumTokenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenStatusFilter<$PrismaModel> | $Enums.TokenStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QueueScalarRelationFilter = {
    is?: QueueWhereInput
    isNot?: QueueWhereInput
  }

  export type TokenQueueIdTokenNumberCompoundUniqueInput = {
    queueId: string
    tokenNumber: number
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    queueId?: SortOrder
    patientId?: SortOrder
    tokenNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    calledAt?: SortOrder
    completedAt?: SortOrder
    skippedAt?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    tokenNumber?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    queueId?: SortOrder
    patientId?: SortOrder
    tokenNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    calledAt?: SortOrder
    completedAt?: SortOrder
    skippedAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    queueId?: SortOrder
    patientId?: SortOrder
    tokenNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    calledAt?: SortOrder
    completedAt?: SortOrder
    skippedAt?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    tokenNumber?: SortOrder
  }

  export type EnumTokenStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenStatus | EnumTokenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TokenStatus[] | ListEnumTokenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenStatus[] | ListEnumTokenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenStatusWithAggregatesFilter<$PrismaModel> | $Enums.TokenStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenStatusFilter<$PrismaModel>
    _max?: NestedEnumTokenStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStaffActionFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffAction | EnumStaffActionFieldRefInput<$PrismaModel>
    in?: $Enums.StaffAction[] | ListEnumStaffActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffAction[] | ListEnumStaffActionFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffActionFilter<$PrismaModel> | $Enums.StaffAction
  }

  export type TokenScalarRelationFilter = {
    is?: TokenWhereInput
    isNot?: TokenWhereInput
  }

  export type StaffActivityStaffIdTokenIdActionCompoundUniqueInput = {
    staffId: string
    tokenId: string
    action: $Enums.StaffAction
  }

  export type StaffActivityCountOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    tokenId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    tokenId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffActivityMinOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    tokenId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStaffActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffAction | EnumStaffActionFieldRefInput<$PrismaModel>
    in?: $Enums.StaffAction[] | ListEnumStaffActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffAction[] | ListEnumStaffActionFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffActionWithAggregatesFilter<$PrismaModel> | $Enums.StaffAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffActionFilter<$PrismaModel>
    _max?: NestedEnumStaffActionFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshTokenHash?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorClinicCreateNestedOneWithoutStaffInput = {
    create?: XOR<DoctorClinicCreateWithoutStaffInput, DoctorClinicUncheckedCreateWithoutStaffInput>
    connectOrCreate?: DoctorClinicCreateOrConnectWithoutStaffInput
    connect?: DoctorClinicWhereUniqueInput
  }

  export type TokenCreateNestedManyWithoutPatientInput = {
    create?: XOR<TokenCreateWithoutPatientInput, TokenUncheckedCreateWithoutPatientInput> | TokenCreateWithoutPatientInput[] | TokenUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutPatientInput | TokenCreateOrConnectWithoutPatientInput[]
    createMany?: TokenCreateManyPatientInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type StaffActivityCreateNestedManyWithoutStaffInput = {
    create?: XOR<StaffActivityCreateWithoutStaffInput, StaffActivityUncheckedCreateWithoutStaffInput> | StaffActivityCreateWithoutStaffInput[] | StaffActivityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffActivityCreateOrConnectWithoutStaffInput | StaffActivityCreateOrConnectWithoutStaffInput[]
    createMany?: StaffActivityCreateManyStaffInputEnvelope
    connect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<TokenCreateWithoutPatientInput, TokenUncheckedCreateWithoutPatientInput> | TokenCreateWithoutPatientInput[] | TokenUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutPatientInput | TokenCreateOrConnectWithoutPatientInput[]
    createMany?: TokenCreateManyPatientInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type StaffActivityUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<StaffActivityCreateWithoutStaffInput, StaffActivityUncheckedCreateWithoutStaffInput> | StaffActivityCreateWithoutStaffInput[] | StaffActivityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffActivityCreateOrConnectWithoutStaffInput | StaffActivityCreateOrConnectWithoutStaffInput[]
    createMany?: StaffActivityCreateManyStaffInputEnvelope
    connect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DoctorClinicUpdateOneWithoutStaffNestedInput = {
    create?: XOR<DoctorClinicCreateWithoutStaffInput, DoctorClinicUncheckedCreateWithoutStaffInput>
    connectOrCreate?: DoctorClinicCreateOrConnectWithoutStaffInput
    upsert?: DoctorClinicUpsertWithoutStaffInput
    disconnect?: DoctorClinicWhereInput | boolean
    delete?: DoctorClinicWhereInput | boolean
    connect?: DoctorClinicWhereUniqueInput
    update?: XOR<XOR<DoctorClinicUpdateToOneWithWhereWithoutStaffInput, DoctorClinicUpdateWithoutStaffInput>, DoctorClinicUncheckedUpdateWithoutStaffInput>
  }

  export type TokenUpdateManyWithoutPatientNestedInput = {
    create?: XOR<TokenCreateWithoutPatientInput, TokenUncheckedCreateWithoutPatientInput> | TokenCreateWithoutPatientInput[] | TokenUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutPatientInput | TokenCreateOrConnectWithoutPatientInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutPatientInput | TokenUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: TokenCreateManyPatientInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutPatientInput | TokenUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutPatientInput | TokenUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type StaffActivityUpdateManyWithoutStaffNestedInput = {
    create?: XOR<StaffActivityCreateWithoutStaffInput, StaffActivityUncheckedCreateWithoutStaffInput> | StaffActivityCreateWithoutStaffInput[] | StaffActivityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffActivityCreateOrConnectWithoutStaffInput | StaffActivityCreateOrConnectWithoutStaffInput[]
    upsert?: StaffActivityUpsertWithWhereUniqueWithoutStaffInput | StaffActivityUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: StaffActivityCreateManyStaffInputEnvelope
    set?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    disconnect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    delete?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    connect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    update?: StaffActivityUpdateWithWhereUniqueWithoutStaffInput | StaffActivityUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: StaffActivityUpdateManyWithWhereWithoutStaffInput | StaffActivityUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: StaffActivityScalarWhereInput | StaffActivityScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<TokenCreateWithoutPatientInput, TokenUncheckedCreateWithoutPatientInput> | TokenCreateWithoutPatientInput[] | TokenUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutPatientInput | TokenCreateOrConnectWithoutPatientInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutPatientInput | TokenUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: TokenCreateManyPatientInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutPatientInput | TokenUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutPatientInput | TokenUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type StaffActivityUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<StaffActivityCreateWithoutStaffInput, StaffActivityUncheckedCreateWithoutStaffInput> | StaffActivityCreateWithoutStaffInput[] | StaffActivityUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: StaffActivityCreateOrConnectWithoutStaffInput | StaffActivityCreateOrConnectWithoutStaffInput[]
    upsert?: StaffActivityUpsertWithWhereUniqueWithoutStaffInput | StaffActivityUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: StaffActivityCreateManyStaffInputEnvelope
    set?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    disconnect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    delete?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    connect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    update?: StaffActivityUpdateWithWhereUniqueWithoutStaffInput | StaffActivityUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: StaffActivityUpdateManyWithWhereWithoutStaffInput | StaffActivityUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: StaffActivityScalarWhereInput | StaffActivityScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type DoctorClinicCreateimagesInput = {
    set: string[]
  }

  export type UserCreateNestedManyWithoutClinicInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type QueueCreateNestedManyWithoutClinicInput = {
    create?: XOR<QueueCreateWithoutClinicInput, QueueUncheckedCreateWithoutClinicInput> | QueueCreateWithoutClinicInput[] | QueueUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: QueueCreateOrConnectWithoutClinicInput | QueueCreateOrConnectWithoutClinicInput[]
    createMany?: QueueCreateManyClinicInputEnvelope
    connect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type QueueUncheckedCreateNestedManyWithoutClinicInput = {
    create?: XOR<QueueCreateWithoutClinicInput, QueueUncheckedCreateWithoutClinicInput> | QueueCreateWithoutClinicInput[] | QueueUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: QueueCreateOrConnectWithoutClinicInput | QueueCreateOrConnectWithoutClinicInput[]
    createMany?: QueueCreateManyClinicInputEnvelope
    connect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DoctorClinicUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumDoctorTypeFieldUpdateOperationsInput = {
    set?: $Enums.DoctorType
  }

  export type UserUpdateManyWithoutClinicNestedInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClinicInput | UserUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClinicInput | UserUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClinicInput | UserUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type QueueUpdateManyWithoutClinicNestedInput = {
    create?: XOR<QueueCreateWithoutClinicInput, QueueUncheckedCreateWithoutClinicInput> | QueueCreateWithoutClinicInput[] | QueueUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: QueueCreateOrConnectWithoutClinicInput | QueueCreateOrConnectWithoutClinicInput[]
    upsert?: QueueUpsertWithWhereUniqueWithoutClinicInput | QueueUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: QueueCreateManyClinicInputEnvelope
    set?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    disconnect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    delete?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    connect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    update?: QueueUpdateWithWhereUniqueWithoutClinicInput | QueueUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: QueueUpdateManyWithWhereWithoutClinicInput | QueueUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: QueueScalarWhereInput | QueueScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput> | UserCreateWithoutClinicInput[] | UserUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClinicInput | UserCreateOrConnectWithoutClinicInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClinicInput | UserUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: UserCreateManyClinicInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClinicInput | UserUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClinicInput | UserUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type QueueUncheckedUpdateManyWithoutClinicNestedInput = {
    create?: XOR<QueueCreateWithoutClinicInput, QueueUncheckedCreateWithoutClinicInput> | QueueCreateWithoutClinicInput[] | QueueUncheckedCreateWithoutClinicInput[]
    connectOrCreate?: QueueCreateOrConnectWithoutClinicInput | QueueCreateOrConnectWithoutClinicInput[]
    upsert?: QueueUpsertWithWhereUniqueWithoutClinicInput | QueueUpsertWithWhereUniqueWithoutClinicInput[]
    createMany?: QueueCreateManyClinicInputEnvelope
    set?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    disconnect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    delete?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    connect?: QueueWhereUniqueInput | QueueWhereUniqueInput[]
    update?: QueueUpdateWithWhereUniqueWithoutClinicInput | QueueUpdateWithWhereUniqueWithoutClinicInput[]
    updateMany?: QueueUpdateManyWithWhereWithoutClinicInput | QueueUpdateManyWithWhereWithoutClinicInput[]
    deleteMany?: QueueScalarWhereInput | QueueScalarWhereInput[]
  }

  export type DoctorClinicCreateNestedOneWithoutQueuesInput = {
    create?: XOR<DoctorClinicCreateWithoutQueuesInput, DoctorClinicUncheckedCreateWithoutQueuesInput>
    connectOrCreate?: DoctorClinicCreateOrConnectWithoutQueuesInput
    connect?: DoctorClinicWhereUniqueInput
  }

  export type TokenCreateNestedManyWithoutQueueInput = {
    create?: XOR<TokenCreateWithoutQueueInput, TokenUncheckedCreateWithoutQueueInput> | TokenCreateWithoutQueueInput[] | TokenUncheckedCreateWithoutQueueInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutQueueInput | TokenCreateOrConnectWithoutQueueInput[]
    createMany?: TokenCreateManyQueueInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutQueueInput = {
    create?: XOR<TokenCreateWithoutQueueInput, TokenUncheckedCreateWithoutQueueInput> | TokenCreateWithoutQueueInput[] | TokenUncheckedCreateWithoutQueueInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutQueueInput | TokenCreateOrConnectWithoutQueueInput[]
    createMany?: TokenCreateManyQueueInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DoctorClinicUpdateOneRequiredWithoutQueuesNestedInput = {
    create?: XOR<DoctorClinicCreateWithoutQueuesInput, DoctorClinicUncheckedCreateWithoutQueuesInput>
    connectOrCreate?: DoctorClinicCreateOrConnectWithoutQueuesInput
    upsert?: DoctorClinicUpsertWithoutQueuesInput
    connect?: DoctorClinicWhereUniqueInput
    update?: XOR<XOR<DoctorClinicUpdateToOneWithWhereWithoutQueuesInput, DoctorClinicUpdateWithoutQueuesInput>, DoctorClinicUncheckedUpdateWithoutQueuesInput>
  }

  export type TokenUpdateManyWithoutQueueNestedInput = {
    create?: XOR<TokenCreateWithoutQueueInput, TokenUncheckedCreateWithoutQueueInput> | TokenCreateWithoutQueueInput[] | TokenUncheckedCreateWithoutQueueInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutQueueInput | TokenCreateOrConnectWithoutQueueInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutQueueInput | TokenUpsertWithWhereUniqueWithoutQueueInput[]
    createMany?: TokenCreateManyQueueInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutQueueInput | TokenUpdateWithWhereUniqueWithoutQueueInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutQueueInput | TokenUpdateManyWithWhereWithoutQueueInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutQueueNestedInput = {
    create?: XOR<TokenCreateWithoutQueueInput, TokenUncheckedCreateWithoutQueueInput> | TokenCreateWithoutQueueInput[] | TokenUncheckedCreateWithoutQueueInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutQueueInput | TokenCreateOrConnectWithoutQueueInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutQueueInput | TokenUpsertWithWhereUniqueWithoutQueueInput[]
    createMany?: TokenCreateManyQueueInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutQueueInput | TokenUpdateWithWhereUniqueWithoutQueueInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutQueueInput | TokenUpdateManyWithWhereWithoutQueueInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type QueueCreateNestedOneWithoutTokensInput = {
    create?: XOR<QueueCreateWithoutTokensInput, QueueUncheckedCreateWithoutTokensInput>
    connectOrCreate?: QueueCreateOrConnectWithoutTokensInput
    connect?: QueueWhereUniqueInput
  }

  export type StaffActivityCreateNestedManyWithoutTokenInput = {
    create?: XOR<StaffActivityCreateWithoutTokenInput, StaffActivityUncheckedCreateWithoutTokenInput> | StaffActivityCreateWithoutTokenInput[] | StaffActivityUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: StaffActivityCreateOrConnectWithoutTokenInput | StaffActivityCreateOrConnectWithoutTokenInput[]
    createMany?: StaffActivityCreateManyTokenInputEnvelope
    connect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
  }

  export type StaffActivityUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<StaffActivityCreateWithoutTokenInput, StaffActivityUncheckedCreateWithoutTokenInput> | StaffActivityCreateWithoutTokenInput[] | StaffActivityUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: StaffActivityCreateOrConnectWithoutTokenInput | StaffActivityCreateOrConnectWithoutTokenInput[]
    createMany?: StaffActivityCreateManyTokenInputEnvelope
    connect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
  }

  export type EnumTokenStatusFieldUpdateOperationsInput = {
    set?: $Enums.TokenStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type QueueUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<QueueCreateWithoutTokensInput, QueueUncheckedCreateWithoutTokensInput>
    connectOrCreate?: QueueCreateOrConnectWithoutTokensInput
    upsert?: QueueUpsertWithoutTokensInput
    connect?: QueueWhereUniqueInput
    update?: XOR<XOR<QueueUpdateToOneWithWhereWithoutTokensInput, QueueUpdateWithoutTokensInput>, QueueUncheckedUpdateWithoutTokensInput>
  }

  export type StaffActivityUpdateManyWithoutTokenNestedInput = {
    create?: XOR<StaffActivityCreateWithoutTokenInput, StaffActivityUncheckedCreateWithoutTokenInput> | StaffActivityCreateWithoutTokenInput[] | StaffActivityUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: StaffActivityCreateOrConnectWithoutTokenInput | StaffActivityCreateOrConnectWithoutTokenInput[]
    upsert?: StaffActivityUpsertWithWhereUniqueWithoutTokenInput | StaffActivityUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: StaffActivityCreateManyTokenInputEnvelope
    set?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    disconnect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    delete?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    connect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    update?: StaffActivityUpdateWithWhereUniqueWithoutTokenInput | StaffActivityUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: StaffActivityUpdateManyWithWhereWithoutTokenInput | StaffActivityUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: StaffActivityScalarWhereInput | StaffActivityScalarWhereInput[]
  }

  export type StaffActivityUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<StaffActivityCreateWithoutTokenInput, StaffActivityUncheckedCreateWithoutTokenInput> | StaffActivityCreateWithoutTokenInput[] | StaffActivityUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: StaffActivityCreateOrConnectWithoutTokenInput | StaffActivityCreateOrConnectWithoutTokenInput[]
    upsert?: StaffActivityUpsertWithWhereUniqueWithoutTokenInput | StaffActivityUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: StaffActivityCreateManyTokenInputEnvelope
    set?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    disconnect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    delete?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    connect?: StaffActivityWhereUniqueInput | StaffActivityWhereUniqueInput[]
    update?: StaffActivityUpdateWithWhereUniqueWithoutTokenInput | StaffActivityUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: StaffActivityUpdateManyWithWhereWithoutTokenInput | StaffActivityUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: StaffActivityScalarWhereInput | StaffActivityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStaffActivityInput = {
    create?: XOR<UserCreateWithoutStaffActivityInput, UserUncheckedCreateWithoutStaffActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffActivityInput
    connect?: UserWhereUniqueInput
  }

  export type TokenCreateNestedOneWithoutStaffActivityInput = {
    create?: XOR<TokenCreateWithoutStaffActivityInput, TokenUncheckedCreateWithoutStaffActivityInput>
    connectOrCreate?: TokenCreateOrConnectWithoutStaffActivityInput
    connect?: TokenWhereUniqueInput
  }

  export type EnumStaffActionFieldUpdateOperationsInput = {
    set?: $Enums.StaffAction
  }

  export type UserUpdateOneRequiredWithoutStaffActivityNestedInput = {
    create?: XOR<UserCreateWithoutStaffActivityInput, UserUncheckedCreateWithoutStaffActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffActivityInput
    upsert?: UserUpsertWithoutStaffActivityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffActivityInput, UserUpdateWithoutStaffActivityInput>, UserUncheckedUpdateWithoutStaffActivityInput>
  }

  export type TokenUpdateOneRequiredWithoutStaffActivityNestedInput = {
    create?: XOR<TokenCreateWithoutStaffActivityInput, TokenUncheckedCreateWithoutStaffActivityInput>
    connectOrCreate?: TokenCreateOrConnectWithoutStaffActivityInput
    upsert?: TokenUpsertWithoutStaffActivityInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutStaffActivityInput, TokenUpdateWithoutStaffActivityInput>, TokenUncheckedUpdateWithoutStaffActivityInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumDoctorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorType | EnumDoctorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorType[] | ListEnumDoctorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoctorType[] | ListEnumDoctorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDoctorTypeFilter<$PrismaModel> | $Enums.DoctorType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDoctorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorType | EnumDoctorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorType[] | ListEnumDoctorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoctorType[] | ListEnumDoctorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDoctorTypeWithAggregatesFilter<$PrismaModel> | $Enums.DoctorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDoctorTypeFilter<$PrismaModel>
    _max?: NestedEnumDoctorTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumTokenStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenStatus | EnumTokenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TokenStatus[] | ListEnumTokenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenStatus[] | ListEnumTokenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenStatusFilter<$PrismaModel> | $Enums.TokenStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTokenStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenStatus | EnumTokenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TokenStatus[] | ListEnumTokenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenStatus[] | ListEnumTokenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenStatusWithAggregatesFilter<$PrismaModel> | $Enums.TokenStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenStatusFilter<$PrismaModel>
    _max?: NestedEnumTokenStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStaffActionFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffAction | EnumStaffActionFieldRefInput<$PrismaModel>
    in?: $Enums.StaffAction[] | ListEnumStaffActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffAction[] | ListEnumStaffActionFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffActionFilter<$PrismaModel> | $Enums.StaffAction
  }

  export type NestedEnumStaffActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffAction | EnumStaffActionFieldRefInput<$PrismaModel>
    in?: $Enums.StaffAction[] | ListEnumStaffActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffAction[] | ListEnumStaffActionFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffActionWithAggregatesFilter<$PrismaModel> | $Enums.StaffAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffActionFilter<$PrismaModel>
    _max?: NestedEnumStaffActionFilter<$PrismaModel>
  }

  export type DoctorClinicCreateWithoutStaffInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    email?: string | null
    website?: string | null
    description?: string | null
    logo?: string | null
    images?: DoctorClinicCreateimagesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    queues?: QueueCreateNestedManyWithoutClinicInput
  }

  export type DoctorClinicUncheckedCreateWithoutStaffInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    email?: string | null
    website?: string | null
    description?: string | null
    logo?: string | null
    images?: DoctorClinicCreateimagesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    queues?: QueueUncheckedCreateNestedManyWithoutClinicInput
  }

  export type DoctorClinicCreateOrConnectWithoutStaffInput = {
    where: DoctorClinicWhereUniqueInput
    create: XOR<DoctorClinicCreateWithoutStaffInput, DoctorClinicUncheckedCreateWithoutStaffInput>
  }

  export type TokenCreateWithoutPatientInput = {
    id?: string
    tokenNumber: number
    status?: $Enums.TokenStatus
    createdAt?: Date | string
    calledAt?: Date | string | null
    completedAt?: Date | string | null
    skippedAt?: Date | string | null
    queue: QueueCreateNestedOneWithoutTokensInput
    staffActivity?: StaffActivityCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutPatientInput = {
    id?: string
    queueId: string
    tokenNumber: number
    status?: $Enums.TokenStatus
    createdAt?: Date | string
    calledAt?: Date | string | null
    completedAt?: Date | string | null
    skippedAt?: Date | string | null
    staffActivity?: StaffActivityUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutPatientInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutPatientInput, TokenUncheckedCreateWithoutPatientInput>
  }

  export type TokenCreateManyPatientInputEnvelope = {
    data: TokenCreateManyPatientInput | TokenCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type StaffActivityCreateWithoutStaffInput = {
    id?: string
    action: $Enums.StaffAction
    createdAt?: Date | string
    token: TokenCreateNestedOneWithoutStaffActivityInput
  }

  export type StaffActivityUncheckedCreateWithoutStaffInput = {
    id?: string
    tokenId: string
    action: $Enums.StaffAction
    createdAt?: Date | string
  }

  export type StaffActivityCreateOrConnectWithoutStaffInput = {
    where: StaffActivityWhereUniqueInput
    create: XOR<StaffActivityCreateWithoutStaffInput, StaffActivityUncheckedCreateWithoutStaffInput>
  }

  export type StaffActivityCreateManyStaffInputEnvelope = {
    data: StaffActivityCreateManyStaffInput | StaffActivityCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    refreshTokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    refreshTokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DoctorClinicUpsertWithoutStaffInput = {
    update: XOR<DoctorClinicUpdateWithoutStaffInput, DoctorClinicUncheckedUpdateWithoutStaffInput>
    create: XOR<DoctorClinicCreateWithoutStaffInput, DoctorClinicUncheckedCreateWithoutStaffInput>
    where?: DoctorClinicWhereInput
  }

  export type DoctorClinicUpdateToOneWithWhereWithoutStaffInput = {
    where?: DoctorClinicWhereInput
    data: XOR<DoctorClinicUpdateWithoutStaffInput, DoctorClinicUncheckedUpdateWithoutStaffInput>
  }

  export type DoctorClinicUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    images?: DoctorClinicUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDoctorTypeFieldUpdateOperationsInput | $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    queues?: QueueUpdateManyWithoutClinicNestedInput
  }

  export type DoctorClinicUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    images?: DoctorClinicUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDoctorTypeFieldUpdateOperationsInput | $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    queues?: QueueUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type TokenUpsertWithWhereUniqueWithoutPatientInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutPatientInput, TokenUncheckedUpdateWithoutPatientInput>
    create: XOR<TokenCreateWithoutPatientInput, TokenUncheckedCreateWithoutPatientInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutPatientInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutPatientInput, TokenUncheckedUpdateWithoutPatientInput>
  }

  export type TokenUpdateManyWithWhereWithoutPatientInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutPatientInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    queueId?: StringFilter<"Token"> | string
    patientId?: StringFilter<"Token"> | string
    tokenNumber?: IntFilter<"Token"> | number
    status?: EnumTokenStatusFilter<"Token"> | $Enums.TokenStatus
    createdAt?: DateTimeFilter<"Token"> | Date | string
    calledAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    skippedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
  }

  export type StaffActivityUpsertWithWhereUniqueWithoutStaffInput = {
    where: StaffActivityWhereUniqueInput
    update: XOR<StaffActivityUpdateWithoutStaffInput, StaffActivityUncheckedUpdateWithoutStaffInput>
    create: XOR<StaffActivityCreateWithoutStaffInput, StaffActivityUncheckedCreateWithoutStaffInput>
  }

  export type StaffActivityUpdateWithWhereUniqueWithoutStaffInput = {
    where: StaffActivityWhereUniqueInput
    data: XOR<StaffActivityUpdateWithoutStaffInput, StaffActivityUncheckedUpdateWithoutStaffInput>
  }

  export type StaffActivityUpdateManyWithWhereWithoutStaffInput = {
    where: StaffActivityScalarWhereInput
    data: XOR<StaffActivityUpdateManyMutationInput, StaffActivityUncheckedUpdateManyWithoutStaffInput>
  }

  export type StaffActivityScalarWhereInput = {
    AND?: StaffActivityScalarWhereInput | StaffActivityScalarWhereInput[]
    OR?: StaffActivityScalarWhereInput[]
    NOT?: StaffActivityScalarWhereInput | StaffActivityScalarWhereInput[]
    id?: StringFilter<"StaffActivity"> | string
    staffId?: StringFilter<"StaffActivity"> | string
    tokenId?: StringFilter<"StaffActivity"> | string
    action?: EnumStaffActionFilter<"StaffActivity"> | $Enums.StaffAction
    createdAt?: DateTimeFilter<"StaffActivity"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    refreshTokenHash?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    isRevoked?: BoolFilter<"Session"> | boolean
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutClinicInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
    tokens?: TokenCreateNestedManyWithoutPatientInput
    staffActivity?: StaffActivityCreateNestedManyWithoutStaffInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClinicInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
    tokens?: TokenUncheckedCreateNestedManyWithoutPatientInput
    staffActivity?: StaffActivityUncheckedCreateNestedManyWithoutStaffInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClinicInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput>
  }

  export type UserCreateManyClinicInputEnvelope = {
    data: UserCreateManyClinicInput | UserCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type QueueCreateWithoutClinicInput = {
    id?: string
    queueDate: Date | string
    currentTokenNo?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxQueueSize?: number
    startTime: Date | string
    endTime: Date | string
    tokens?: TokenCreateNestedManyWithoutQueueInput
  }

  export type QueueUncheckedCreateWithoutClinicInput = {
    id?: string
    queueDate: Date | string
    currentTokenNo?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxQueueSize?: number
    startTime: Date | string
    endTime: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutQueueInput
  }

  export type QueueCreateOrConnectWithoutClinicInput = {
    where: QueueWhereUniqueInput
    create: XOR<QueueCreateWithoutClinicInput, QueueUncheckedCreateWithoutClinicInput>
  }

  export type QueueCreateManyClinicInputEnvelope = {
    data: QueueCreateManyClinicInput | QueueCreateManyClinicInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutClinicInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClinicInput, UserUncheckedUpdateWithoutClinicInput>
    create: XOR<UserCreateWithoutClinicInput, UserUncheckedCreateWithoutClinicInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClinicInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClinicInput, UserUncheckedUpdateWithoutClinicInput>
  }

  export type UserUpdateManyWithWhereWithoutClinicInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClinicInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    clinicId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profilePicture?: StringNullableFilter<"User"> | string | null
  }

  export type QueueUpsertWithWhereUniqueWithoutClinicInput = {
    where: QueueWhereUniqueInput
    update: XOR<QueueUpdateWithoutClinicInput, QueueUncheckedUpdateWithoutClinicInput>
    create: XOR<QueueCreateWithoutClinicInput, QueueUncheckedCreateWithoutClinicInput>
  }

  export type QueueUpdateWithWhereUniqueWithoutClinicInput = {
    where: QueueWhereUniqueInput
    data: XOR<QueueUpdateWithoutClinicInput, QueueUncheckedUpdateWithoutClinicInput>
  }

  export type QueueUpdateManyWithWhereWithoutClinicInput = {
    where: QueueScalarWhereInput
    data: XOR<QueueUpdateManyMutationInput, QueueUncheckedUpdateManyWithoutClinicInput>
  }

  export type QueueScalarWhereInput = {
    AND?: QueueScalarWhereInput | QueueScalarWhereInput[]
    OR?: QueueScalarWhereInput[]
    NOT?: QueueScalarWhereInput | QueueScalarWhereInput[]
    id?: StringFilter<"Queue"> | string
    clinicId?: StringFilter<"Queue"> | string
    queueDate?: DateTimeFilter<"Queue"> | Date | string
    currentTokenNo?: IntFilter<"Queue"> | number
    isActive?: BoolFilter<"Queue"> | boolean
    createdAt?: DateTimeFilter<"Queue"> | Date | string
    updatedAt?: DateTimeFilter<"Queue"> | Date | string
    maxQueueSize?: IntFilter<"Queue"> | number
    startTime?: DateTimeFilter<"Queue"> | Date | string
    endTime?: DateTimeFilter<"Queue"> | Date | string
  }

  export type DoctorClinicCreateWithoutQueuesInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    email?: string | null
    website?: string | null
    description?: string | null
    logo?: string | null
    images?: DoctorClinicCreateimagesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    staff?: UserCreateNestedManyWithoutClinicInput
  }

  export type DoctorClinicUncheckedCreateWithoutQueuesInput = {
    id?: string
    name: string
    address?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    email?: string | null
    website?: string | null
    description?: string | null
    logo?: string | null
    images?: DoctorClinicCreateimagesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    staff?: UserUncheckedCreateNestedManyWithoutClinicInput
  }

  export type DoctorClinicCreateOrConnectWithoutQueuesInput = {
    where: DoctorClinicWhereUniqueInput
    create: XOR<DoctorClinicCreateWithoutQueuesInput, DoctorClinicUncheckedCreateWithoutQueuesInput>
  }

  export type TokenCreateWithoutQueueInput = {
    id?: string
    tokenNumber: number
    status?: $Enums.TokenStatus
    createdAt?: Date | string
    calledAt?: Date | string | null
    completedAt?: Date | string | null
    skippedAt?: Date | string | null
    patient: UserCreateNestedOneWithoutTokensInput
    staffActivity?: StaffActivityCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutQueueInput = {
    id?: string
    patientId: string
    tokenNumber: number
    status?: $Enums.TokenStatus
    createdAt?: Date | string
    calledAt?: Date | string | null
    completedAt?: Date | string | null
    skippedAt?: Date | string | null
    staffActivity?: StaffActivityUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutQueueInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutQueueInput, TokenUncheckedCreateWithoutQueueInput>
  }

  export type TokenCreateManyQueueInputEnvelope = {
    data: TokenCreateManyQueueInput | TokenCreateManyQueueInput[]
    skipDuplicates?: boolean
  }

  export type DoctorClinicUpsertWithoutQueuesInput = {
    update: XOR<DoctorClinicUpdateWithoutQueuesInput, DoctorClinicUncheckedUpdateWithoutQueuesInput>
    create: XOR<DoctorClinicCreateWithoutQueuesInput, DoctorClinicUncheckedCreateWithoutQueuesInput>
    where?: DoctorClinicWhereInput
  }

  export type DoctorClinicUpdateToOneWithWhereWithoutQueuesInput = {
    where?: DoctorClinicWhereInput
    data: XOR<DoctorClinicUpdateWithoutQueuesInput, DoctorClinicUncheckedUpdateWithoutQueuesInput>
  }

  export type DoctorClinicUpdateWithoutQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    images?: DoctorClinicUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDoctorTypeFieldUpdateOperationsInput | $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    staff?: UserUpdateManyWithoutClinicNestedInput
  }

  export type DoctorClinicUncheckedUpdateWithoutQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    images?: DoctorClinicUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumDoctorTypeFieldUpdateOperationsInput | $Enums.DoctorType
    openingHours?: JsonNullValueInput | InputJsonValue
    staff?: UserUncheckedUpdateManyWithoutClinicNestedInput
  }

  export type TokenUpsertWithWhereUniqueWithoutQueueInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutQueueInput, TokenUncheckedUpdateWithoutQueueInput>
    create: XOR<TokenCreateWithoutQueueInput, TokenUncheckedCreateWithoutQueueInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutQueueInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutQueueInput, TokenUncheckedUpdateWithoutQueueInput>
  }

  export type TokenUpdateManyWithWhereWithoutQueueInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutQueueInput>
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
    clinic?: DoctorClinicCreateNestedOneWithoutStaffInput
    staffActivity?: StaffActivityCreateNestedManyWithoutStaffInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    clinicId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
    staffActivity?: StaffActivityUncheckedCreateNestedManyWithoutStaffInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type QueueCreateWithoutTokensInput = {
    id?: string
    queueDate: Date | string
    currentTokenNo?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxQueueSize?: number
    startTime: Date | string
    endTime: Date | string
    clinic: DoctorClinicCreateNestedOneWithoutQueuesInput
  }

  export type QueueUncheckedCreateWithoutTokensInput = {
    id?: string
    clinicId: string
    queueDate: Date | string
    currentTokenNo?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxQueueSize?: number
    startTime: Date | string
    endTime: Date | string
  }

  export type QueueCreateOrConnectWithoutTokensInput = {
    where: QueueWhereUniqueInput
    create: XOR<QueueCreateWithoutTokensInput, QueueUncheckedCreateWithoutTokensInput>
  }

  export type StaffActivityCreateWithoutTokenInput = {
    id?: string
    action: $Enums.StaffAction
    createdAt?: Date | string
    staff: UserCreateNestedOneWithoutStaffActivityInput
  }

  export type StaffActivityUncheckedCreateWithoutTokenInput = {
    id?: string
    staffId: string
    action: $Enums.StaffAction
    createdAt?: Date | string
  }

  export type StaffActivityCreateOrConnectWithoutTokenInput = {
    where: StaffActivityWhereUniqueInput
    create: XOR<StaffActivityCreateWithoutTokenInput, StaffActivityUncheckedCreateWithoutTokenInput>
  }

  export type StaffActivityCreateManyTokenInputEnvelope = {
    data: StaffActivityCreateManyTokenInput | StaffActivityCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: DoctorClinicUpdateOneWithoutStaffNestedInput
    staffActivity?: StaffActivityUpdateManyWithoutStaffNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    staffActivity?: StaffActivityUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QueueUpsertWithoutTokensInput = {
    update: XOR<QueueUpdateWithoutTokensInput, QueueUncheckedUpdateWithoutTokensInput>
    create: XOR<QueueCreateWithoutTokensInput, QueueUncheckedCreateWithoutTokensInput>
    where?: QueueWhereInput
  }

  export type QueueUpdateToOneWithWhereWithoutTokensInput = {
    where?: QueueWhereInput
    data: XOR<QueueUpdateWithoutTokensInput, QueueUncheckedUpdateWithoutTokensInput>
  }

  export type QueueUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentTokenNo?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxQueueSize?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    clinic?: DoctorClinicUpdateOneRequiredWithoutQueuesNestedInput
  }

  export type QueueUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicId?: StringFieldUpdateOperationsInput | string
    queueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentTokenNo?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxQueueSize?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffActivityUpsertWithWhereUniqueWithoutTokenInput = {
    where: StaffActivityWhereUniqueInput
    update: XOR<StaffActivityUpdateWithoutTokenInput, StaffActivityUncheckedUpdateWithoutTokenInput>
    create: XOR<StaffActivityCreateWithoutTokenInput, StaffActivityUncheckedCreateWithoutTokenInput>
  }

  export type StaffActivityUpdateWithWhereUniqueWithoutTokenInput = {
    where: StaffActivityWhereUniqueInput
    data: XOR<StaffActivityUpdateWithoutTokenInput, StaffActivityUncheckedUpdateWithoutTokenInput>
  }

  export type StaffActivityUpdateManyWithWhereWithoutTokenInput = {
    where: StaffActivityScalarWhereInput
    data: XOR<StaffActivityUpdateManyMutationInput, StaffActivityUncheckedUpdateManyWithoutTokenInput>
  }

  export type UserCreateWithoutStaffActivityInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
    clinic?: DoctorClinicCreateNestedOneWithoutStaffInput
    tokens?: TokenCreateNestedManyWithoutPatientInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStaffActivityInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    clinicId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
    tokens?: TokenUncheckedCreateNestedManyWithoutPatientInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStaffActivityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffActivityInput, UserUncheckedCreateWithoutStaffActivityInput>
  }

  export type TokenCreateWithoutStaffActivityInput = {
    id?: string
    tokenNumber: number
    status?: $Enums.TokenStatus
    createdAt?: Date | string
    calledAt?: Date | string | null
    completedAt?: Date | string | null
    skippedAt?: Date | string | null
    patient: UserCreateNestedOneWithoutTokensInput
    queue: QueueCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateWithoutStaffActivityInput = {
    id?: string
    queueId: string
    patientId: string
    tokenNumber: number
    status?: $Enums.TokenStatus
    createdAt?: Date | string
    calledAt?: Date | string | null
    completedAt?: Date | string | null
    skippedAt?: Date | string | null
  }

  export type TokenCreateOrConnectWithoutStaffActivityInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutStaffActivityInput, TokenUncheckedCreateWithoutStaffActivityInput>
  }

  export type UserUpsertWithoutStaffActivityInput = {
    update: XOR<UserUpdateWithoutStaffActivityInput, UserUncheckedUpdateWithoutStaffActivityInput>
    create: XOR<UserCreateWithoutStaffActivityInput, UserUncheckedCreateWithoutStaffActivityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffActivityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffActivityInput, UserUncheckedUpdateWithoutStaffActivityInput>
  }

  export type UserUpdateWithoutStaffActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: DoctorClinicUpdateOneWithoutStaffNestedInput
    tokens?: TokenUpdateManyWithoutPatientNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: TokenUncheckedUpdateManyWithoutPatientNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TokenUpsertWithoutStaffActivityInput = {
    update: XOR<TokenUpdateWithoutStaffActivityInput, TokenUncheckedUpdateWithoutStaffActivityInput>
    create: XOR<TokenCreateWithoutStaffActivityInput, TokenUncheckedCreateWithoutStaffActivityInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutStaffActivityInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutStaffActivityInput, TokenUncheckedUpdateWithoutStaffActivityInput>
  }

  export type TokenUpdateWithoutStaffActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: UserUpdateOneRequiredWithoutTokensNestedInput
    queue?: QueueUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateWithoutStaffActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
    clinic?: DoctorClinicCreateNestedOneWithoutStaffInput
    tokens?: TokenCreateNestedManyWithoutPatientInput
    staffActivity?: StaffActivityCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    clinicId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
    tokens?: TokenUncheckedCreateNestedManyWithoutPatientInput
    staffActivity?: StaffActivityUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    clinic?: DoctorClinicUpdateOneWithoutStaffNestedInput
    tokens?: TokenUpdateManyWithoutPatientNestedInput
    staffActivity?: StaffActivityUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clinicId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: TokenUncheckedUpdateManyWithoutPatientNestedInput
    staffActivity?: StaffActivityUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type TokenCreateManyPatientInput = {
    id?: string
    queueId: string
    tokenNumber: number
    status?: $Enums.TokenStatus
    createdAt?: Date | string
    calledAt?: Date | string | null
    completedAt?: Date | string | null
    skippedAt?: Date | string | null
  }

  export type StaffActivityCreateManyStaffInput = {
    id?: string
    tokenId: string
    action: $Enums.StaffAction
    createdAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    refreshTokenHash: string
    userAgent?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    queue?: QueueUpdateOneRequiredWithoutTokensNestedInput
    staffActivity?: StaffActivityUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueId?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staffActivity?: StaffActivityUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueId?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffActivityUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumStaffActionFieldUpdateOperationsInput | $Enums.StaffAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutStaffActivityNestedInput
  }

  export type StaffActivityUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    action?: EnumStaffActionFieldUpdateOperationsInput | $Enums.StaffAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffActivityUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    action?: EnumStaffActionFieldUpdateOperationsInput | $Enums.StaffAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyClinicInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profilePicture?: string | null
  }

  export type QueueCreateManyClinicInput = {
    id?: string
    queueDate: Date | string
    currentTokenNo?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxQueueSize?: number
    startTime: Date | string
    endTime: Date | string
  }

  export type UserUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: TokenUpdateManyWithoutPatientNestedInput
    staffActivity?: StaffActivityUpdateManyWithoutStaffNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: TokenUncheckedUpdateManyWithoutPatientNestedInput
    staffActivity?: StaffActivityUncheckedUpdateManyWithoutStaffNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QueueUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentTokenNo?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxQueueSize?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutQueueNestedInput
  }

  export type QueueUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentTokenNo?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxQueueSize?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutQueueNestedInput
  }

  export type QueueUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentTokenNo?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxQueueSize?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyQueueInput = {
    id?: string
    patientId: string
    tokenNumber: number
    status?: $Enums.TokenStatus
    createdAt?: Date | string
    calledAt?: Date | string | null
    completedAt?: Date | string | null
    skippedAt?: Date | string | null
  }

  export type TokenUpdateWithoutQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: UserUpdateOneRequiredWithoutTokensNestedInput
    staffActivity?: StaffActivityUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staffActivity?: StaffActivityUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateManyWithoutQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    tokenNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumTokenStatusFieldUpdateOperationsInput | $Enums.TokenStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffActivityCreateManyTokenInput = {
    id?: string
    staffId: string
    action: $Enums.StaffAction
    createdAt?: Date | string
  }

  export type StaffActivityUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumStaffActionFieldUpdateOperationsInput | $Enums.StaffAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: UserUpdateOneRequiredWithoutStaffActivityNestedInput
  }

  export type StaffActivityUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    action?: EnumStaffActionFieldUpdateOperationsInput | $Enums.StaffAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffActivityUncheckedUpdateManyWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    action?: EnumStaffActionFieldUpdateOperationsInput | $Enums.StaffAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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