
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
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Relationship
 * 
 */
export type Relationship = $Result.DefaultSelection<Prisma.$RelationshipPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  GUEST: 'GUEST',
  EDITOR: 'EDITOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const RelationType: {
  PARENT_CHILD: 'PARENT_CHILD',
  SPOUSE: 'SPOUSE',
  SIBLING: 'SIBLING'
};

export type RelationType = (typeof RelationType)[keyof typeof RelationType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type RelationType = $Enums.RelationType

export const RelationType: typeof $Enums.RelationType

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
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relationship`: Exposes CRUD operations for the **Relationship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relationships
    * const relationships = await prisma.relationship.findMany()
    * ```
    */
  get relationship(): Prisma.RelationshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;
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
    Member: 'Member',
    Relationship: 'Relationship',
    Event: 'Event'
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
      modelProps: "user" | "member" | "relationship" | "event"
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
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Relationship: {
        payload: Prisma.$RelationshipPayload<ExtArgs>
        fields: Prisma.RelationshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelationshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelationshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          findFirst: {
            args: Prisma.RelationshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelationshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          findMany: {
            args: Prisma.RelationshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>[]
          }
          create: {
            args: Prisma.RelationshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          createMany: {
            args: Prisma.RelationshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelationshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>[]
          }
          delete: {
            args: Prisma.RelationshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          update: {
            args: Prisma.RelationshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          deleteMany: {
            args: Prisma.RelationshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelationshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelationshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>[]
          }
          upsert: {
            args: Prisma.RelationshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          aggregate: {
            args: Prisma.RelationshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelationship>
          }
          groupBy: {
            args: Prisma.RelationshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelationshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelationshipCountArgs<ExtArgs>
            result: $Utils.Optional<RelationshipCountAggregateOutputType> | number
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
    member?: MemberOmit
    relationship?: RelationshipOmit
    event?: EventOmit
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
    members: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | UserCountOutputTypeCountMembersArgs
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
  export type UserCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    events: number
    childRelations: number
    parentRelations: number
    siblingAsSibling1: number
    siblingAsSibling2: number
    spouseAsSpouse1: number
    spouseAsSpouse2: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | MemberCountOutputTypeCountEventsArgs
    childRelations?: boolean | MemberCountOutputTypeCountChildRelationsArgs
    parentRelations?: boolean | MemberCountOutputTypeCountParentRelationsArgs
    siblingAsSibling1?: boolean | MemberCountOutputTypeCountSiblingAsSibling1Args
    siblingAsSibling2?: boolean | MemberCountOutputTypeCountSiblingAsSibling2Args
    spouseAsSpouse1?: boolean | MemberCountOutputTypeCountSpouseAsSpouse1Args
    spouseAsSpouse2?: boolean | MemberCountOutputTypeCountSpouseAsSpouse2Args
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountChildRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountParentRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountSiblingAsSibling1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountSiblingAsSibling2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountSpouseAsSpouse1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountSpouseAsSpouse2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
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
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | User$membersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | User$membersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      members: Prisma.$MemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
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
    members<T extends User$membersArgs<ExtArgs> = {}>(args?: Subset<T, User$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.members
   */
  export type User$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
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
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    name: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    deathDate: Date | null
    photo: string | null
    biography: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    deathDate: Date | null
    photo: string | null
    biography: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    birthDate: number
    deathDate: number
    photo: number
    biography: number
    contactInfo: number
    createdAt: number
    updatedAt: number
    creatorId: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birthDate?: true
    deathDate?: true
    photo?: true
    biography?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birthDate?: true
    deathDate?: true
    photo?: true
    biography?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birthDate?: true
    deathDate?: true
    photo?: true
    biography?: true
    contactInfo?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    name: string
    gender: $Enums.Gender
    birthDate: Date | null
    deathDate: Date | null
    photo: string | null
    biography: string | null
    contactInfo: JsonValue | null
    createdAt: Date
    updatedAt: Date
    creatorId: string
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    deathDate?: boolean
    photo?: boolean
    biography?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    events?: boolean | Member$eventsArgs<ExtArgs>
    childRelations?: boolean | Member$childRelationsArgs<ExtArgs>
    parentRelations?: boolean | Member$parentRelationsArgs<ExtArgs>
    siblingAsSibling1?: boolean | Member$siblingAsSibling1Args<ExtArgs>
    siblingAsSibling2?: boolean | Member$siblingAsSibling2Args<ExtArgs>
    spouseAsSpouse1?: boolean | Member$spouseAsSpouse1Args<ExtArgs>
    spouseAsSpouse2?: boolean | Member$spouseAsSpouse2Args<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    deathDate?: boolean
    photo?: boolean
    biography?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    deathDate?: boolean
    photo?: boolean
    biography?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    deathDate?: boolean
    photo?: boolean
    biography?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "birthDate" | "deathDate" | "photo" | "biography" | "contactInfo" | "createdAt" | "updatedAt" | "creatorId", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    events?: boolean | Member$eventsArgs<ExtArgs>
    childRelations?: boolean | Member$childRelationsArgs<ExtArgs>
    parentRelations?: boolean | Member$parentRelationsArgs<ExtArgs>
    siblingAsSibling1?: boolean | Member$siblingAsSibling1Args<ExtArgs>
    siblingAsSibling2?: boolean | Member$siblingAsSibling2Args<ExtArgs>
    spouseAsSpouse1?: boolean | Member$spouseAsSpouse1Args<ExtArgs>
    spouseAsSpouse2?: boolean | Member$spouseAsSpouse2Args<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      events: Prisma.$EventPayload<ExtArgs>[]
      childRelations: Prisma.$RelationshipPayload<ExtArgs>[]
      parentRelations: Prisma.$RelationshipPayload<ExtArgs>[]
      siblingAsSibling1: Prisma.$RelationshipPayload<ExtArgs>[]
      siblingAsSibling2: Prisma.$RelationshipPayload<ExtArgs>[]
      spouseAsSpouse1: Prisma.$RelationshipPayload<ExtArgs>[]
      spouseAsSpouse2: Prisma.$RelationshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gender: $Enums.Gender
      birthDate: Date | null
      deathDate: Date | null
      photo: string | null
      biography: string | null
      contactInfo: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      creatorId: string
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends Member$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Member$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    childRelations<T extends Member$childRelationsArgs<ExtArgs> = {}>(args?: Subset<T, Member$childRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parentRelations<T extends Member$parentRelationsArgs<ExtArgs> = {}>(args?: Subset<T, Member$parentRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    siblingAsSibling1<T extends Member$siblingAsSibling1Args<ExtArgs> = {}>(args?: Subset<T, Member$siblingAsSibling1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    siblingAsSibling2<T extends Member$siblingAsSibling2Args<ExtArgs> = {}>(args?: Subset<T, Member$siblingAsSibling2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spouseAsSpouse1<T extends Member$spouseAsSpouse1Args<ExtArgs> = {}>(args?: Subset<T, Member$spouseAsSpouse1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spouseAsSpouse2<T extends Member$spouseAsSpouse2Args<ExtArgs> = {}>(args?: Subset<T, Member$spouseAsSpouse2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly gender: FieldRef<"Member", 'Gender'>
    readonly birthDate: FieldRef<"Member", 'DateTime'>
    readonly deathDate: FieldRef<"Member", 'DateTime'>
    readonly photo: FieldRef<"Member", 'String'>
    readonly biography: FieldRef<"Member", 'String'>
    readonly contactInfo: FieldRef<"Member", 'Json'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
    readonly creatorId: FieldRef<"Member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.events
   */
  export type Member$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Member.childRelations
   */
  export type Member$childRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Member.parentRelations
   */
  export type Member$parentRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Member.siblingAsSibling1
   */
  export type Member$siblingAsSibling1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Member.siblingAsSibling2
   */
  export type Member$siblingAsSibling2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Member.spouseAsSpouse1
   */
  export type Member$spouseAsSpouse1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Member.spouseAsSpouse2
   */
  export type Member$spouseAsSpouse2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Relationship
   */

  export type AggregateRelationship = {
    _count: RelationshipCountAggregateOutputType | null
    _min: RelationshipMinAggregateOutputType | null
    _max: RelationshipMaxAggregateOutputType | null
  }

  export type RelationshipMinAggregateOutputType = {
    id: string | null
    type: $Enums.RelationType | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: string | null
    childId: string | null
    spouse1Id: string | null
    spouse2Id: string | null
    sibling1Id: string | null
    sibling2Id: string | null
  }

  export type RelationshipMaxAggregateOutputType = {
    id: string | null
    type: $Enums.RelationType | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: string | null
    childId: string | null
    spouse1Id: string | null
    spouse2Id: string | null
    sibling1Id: string | null
    sibling2Id: string | null
  }

  export type RelationshipCountAggregateOutputType = {
    id: number
    type: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    parentId: number
    childId: number
    spouse1Id: number
    spouse2Id: number
    sibling1Id: number
    sibling2Id: number
    _all: number
  }


  export type RelationshipMinAggregateInputType = {
    id?: true
    type?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    childId?: true
    spouse1Id?: true
    spouse2Id?: true
    sibling1Id?: true
    sibling2Id?: true
  }

  export type RelationshipMaxAggregateInputType = {
    id?: true
    type?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    childId?: true
    spouse1Id?: true
    spouse2Id?: true
    sibling1Id?: true
    sibling2Id?: true
  }

  export type RelationshipCountAggregateInputType = {
    id?: true
    type?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    childId?: true
    spouse1Id?: true
    spouse2Id?: true
    sibling1Id?: true
    sibling2Id?: true
    _all?: true
  }

  export type RelationshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationship to aggregate.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relationships
    **/
    _count?: true | RelationshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationshipMaxAggregateInputType
  }

  export type GetRelationshipAggregateType<T extends RelationshipAggregateArgs> = {
        [P in keyof T & keyof AggregateRelationship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelationship[P]>
      : GetScalarType<T[P], AggregateRelationship[P]>
  }




  export type RelationshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithAggregationInput | RelationshipOrderByWithAggregationInput[]
    by: RelationshipScalarFieldEnum[] | RelationshipScalarFieldEnum
    having?: RelationshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationshipCountAggregateInputType | true
    _min?: RelationshipMinAggregateInputType
    _max?: RelationshipMaxAggregateInputType
  }

  export type RelationshipGroupByOutputType = {
    id: string
    type: $Enums.RelationType
    startDate: Date | null
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    parentId: string | null
    childId: string | null
    spouse1Id: string | null
    spouse2Id: string | null
    sibling1Id: string | null
    sibling2Id: string | null
    _count: RelationshipCountAggregateOutputType | null
    _min: RelationshipMinAggregateOutputType | null
    _max: RelationshipMaxAggregateOutputType | null
  }

  type GetRelationshipGroupByPayload<T extends RelationshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationshipGroupByOutputType[P]>
            : GetScalarType<T[P], RelationshipGroupByOutputType[P]>
        }
      >
    >


  export type RelationshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    childId?: boolean
    spouse1Id?: boolean
    spouse2Id?: boolean
    sibling1Id?: boolean
    sibling2Id?: boolean
    child?: boolean | Relationship$childArgs<ExtArgs>
    parent?: boolean | Relationship$parentArgs<ExtArgs>
    sibling1?: boolean | Relationship$sibling1Args<ExtArgs>
    sibling2?: boolean | Relationship$sibling2Args<ExtArgs>
    spouse1?: boolean | Relationship$spouse1Args<ExtArgs>
    spouse2?: boolean | Relationship$spouse2Args<ExtArgs>
  }, ExtArgs["result"]["relationship"]>

  export type RelationshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    childId?: boolean
    spouse1Id?: boolean
    spouse2Id?: boolean
    sibling1Id?: boolean
    sibling2Id?: boolean
    child?: boolean | Relationship$childArgs<ExtArgs>
    parent?: boolean | Relationship$parentArgs<ExtArgs>
    sibling1?: boolean | Relationship$sibling1Args<ExtArgs>
    sibling2?: boolean | Relationship$sibling2Args<ExtArgs>
    spouse1?: boolean | Relationship$spouse1Args<ExtArgs>
    spouse2?: boolean | Relationship$spouse2Args<ExtArgs>
  }, ExtArgs["result"]["relationship"]>

  export type RelationshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    childId?: boolean
    spouse1Id?: boolean
    spouse2Id?: boolean
    sibling1Id?: boolean
    sibling2Id?: boolean
    child?: boolean | Relationship$childArgs<ExtArgs>
    parent?: boolean | Relationship$parentArgs<ExtArgs>
    sibling1?: boolean | Relationship$sibling1Args<ExtArgs>
    sibling2?: boolean | Relationship$sibling2Args<ExtArgs>
    spouse1?: boolean | Relationship$spouse1Args<ExtArgs>
    spouse2?: boolean | Relationship$spouse2Args<ExtArgs>
  }, ExtArgs["result"]["relationship"]>

  export type RelationshipSelectScalar = {
    id?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    childId?: boolean
    spouse1Id?: boolean
    spouse2Id?: boolean
    sibling1Id?: boolean
    sibling2Id?: boolean
  }

  export type RelationshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "startDate" | "endDate" | "createdAt" | "updatedAt" | "parentId" | "childId" | "spouse1Id" | "spouse2Id" | "sibling1Id" | "sibling2Id", ExtArgs["result"]["relationship"]>
  export type RelationshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | Relationship$childArgs<ExtArgs>
    parent?: boolean | Relationship$parentArgs<ExtArgs>
    sibling1?: boolean | Relationship$sibling1Args<ExtArgs>
    sibling2?: boolean | Relationship$sibling2Args<ExtArgs>
    spouse1?: boolean | Relationship$spouse1Args<ExtArgs>
    spouse2?: boolean | Relationship$spouse2Args<ExtArgs>
  }
  export type RelationshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | Relationship$childArgs<ExtArgs>
    parent?: boolean | Relationship$parentArgs<ExtArgs>
    sibling1?: boolean | Relationship$sibling1Args<ExtArgs>
    sibling2?: boolean | Relationship$sibling2Args<ExtArgs>
    spouse1?: boolean | Relationship$spouse1Args<ExtArgs>
    spouse2?: boolean | Relationship$spouse2Args<ExtArgs>
  }
  export type RelationshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    child?: boolean | Relationship$childArgs<ExtArgs>
    parent?: boolean | Relationship$parentArgs<ExtArgs>
    sibling1?: boolean | Relationship$sibling1Args<ExtArgs>
    sibling2?: boolean | Relationship$sibling2Args<ExtArgs>
    spouse1?: boolean | Relationship$spouse1Args<ExtArgs>
    spouse2?: boolean | Relationship$spouse2Args<ExtArgs>
  }

  export type $RelationshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relationship"
    objects: {
      child: Prisma.$MemberPayload<ExtArgs> | null
      parent: Prisma.$MemberPayload<ExtArgs> | null
      sibling1: Prisma.$MemberPayload<ExtArgs> | null
      sibling2: Prisma.$MemberPayload<ExtArgs> | null
      spouse1: Prisma.$MemberPayload<ExtArgs> | null
      spouse2: Prisma.$MemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.RelationType
      startDate: Date | null
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
      parentId: string | null
      childId: string | null
      spouse1Id: string | null
      spouse2Id: string | null
      sibling1Id: string | null
      sibling2Id: string | null
    }, ExtArgs["result"]["relationship"]>
    composites: {}
  }

  type RelationshipGetPayload<S extends boolean | null | undefined | RelationshipDefaultArgs> = $Result.GetResult<Prisma.$RelationshipPayload, S>

  type RelationshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelationshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelationshipCountAggregateInputType | true
    }

  export interface RelationshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relationship'], meta: { name: 'Relationship' } }
    /**
     * Find zero or one Relationship that matches the filter.
     * @param {RelationshipFindUniqueArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelationshipFindUniqueArgs>(args: SelectSubset<T, RelationshipFindUniqueArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relationship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelationshipFindUniqueOrThrowArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelationshipFindUniqueOrThrowArgs>(args: SelectSubset<T, RelationshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relationship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindFirstArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelationshipFindFirstArgs>(args?: SelectSubset<T, RelationshipFindFirstArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relationship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindFirstOrThrowArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelationshipFindFirstOrThrowArgs>(args?: SelectSubset<T, RelationshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relationships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relationships
     * const relationships = await prisma.relationship.findMany()
     * 
     * // Get first 10 Relationships
     * const relationships = await prisma.relationship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationshipWithIdOnly = await prisma.relationship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelationshipFindManyArgs>(args?: SelectSubset<T, RelationshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relationship.
     * @param {RelationshipCreateArgs} args - Arguments to create a Relationship.
     * @example
     * // Create one Relationship
     * const Relationship = await prisma.relationship.create({
     *   data: {
     *     // ... data to create a Relationship
     *   }
     * })
     * 
     */
    create<T extends RelationshipCreateArgs>(args: SelectSubset<T, RelationshipCreateArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relationships.
     * @param {RelationshipCreateManyArgs} args - Arguments to create many Relationships.
     * @example
     * // Create many Relationships
     * const relationship = await prisma.relationship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelationshipCreateManyArgs>(args?: SelectSubset<T, RelationshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Relationships and returns the data saved in the database.
     * @param {RelationshipCreateManyAndReturnArgs} args - Arguments to create many Relationships.
     * @example
     * // Create many Relationships
     * const relationship = await prisma.relationship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Relationships and only return the `id`
     * const relationshipWithIdOnly = await prisma.relationship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelationshipCreateManyAndReturnArgs>(args?: SelectSubset<T, RelationshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Relationship.
     * @param {RelationshipDeleteArgs} args - Arguments to delete one Relationship.
     * @example
     * // Delete one Relationship
     * const Relationship = await prisma.relationship.delete({
     *   where: {
     *     // ... filter to delete one Relationship
     *   }
     * })
     * 
     */
    delete<T extends RelationshipDeleteArgs>(args: SelectSubset<T, RelationshipDeleteArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relationship.
     * @param {RelationshipUpdateArgs} args - Arguments to update one Relationship.
     * @example
     * // Update one Relationship
     * const relationship = await prisma.relationship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelationshipUpdateArgs>(args: SelectSubset<T, RelationshipUpdateArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relationships.
     * @param {RelationshipDeleteManyArgs} args - Arguments to filter Relationships to delete.
     * @example
     * // Delete a few Relationships
     * const { count } = await prisma.relationship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelationshipDeleteManyArgs>(args?: SelectSubset<T, RelationshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relationships
     * const relationship = await prisma.relationship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelationshipUpdateManyArgs>(args: SelectSubset<T, RelationshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationships and returns the data updated in the database.
     * @param {RelationshipUpdateManyAndReturnArgs} args - Arguments to update many Relationships.
     * @example
     * // Update many Relationships
     * const relationship = await prisma.relationship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Relationships and only return the `id`
     * const relationshipWithIdOnly = await prisma.relationship.updateManyAndReturn({
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
    updateManyAndReturn<T extends RelationshipUpdateManyAndReturnArgs>(args: SelectSubset<T, RelationshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Relationship.
     * @param {RelationshipUpsertArgs} args - Arguments to update or create a Relationship.
     * @example
     * // Update or create a Relationship
     * const relationship = await prisma.relationship.upsert({
     *   create: {
     *     // ... data to create a Relationship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relationship we want to update
     *   }
     * })
     */
    upsert<T extends RelationshipUpsertArgs>(args: SelectSubset<T, RelationshipUpsertArgs<ExtArgs>>): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipCountArgs} args - Arguments to filter Relationships to count.
     * @example
     * // Count the number of Relationships
     * const count = await prisma.relationship.count({
     *   where: {
     *     // ... the filter for the Relationships we want to count
     *   }
     * })
    **/
    count<T extends RelationshipCountArgs>(
      args?: Subset<T, RelationshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RelationshipAggregateArgs>(args: Subset<T, RelationshipAggregateArgs>): Prisma.PrismaPromise<GetRelationshipAggregateType<T>>

    /**
     * Group by Relationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipGroupByArgs} args - Group by arguments.
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
      T extends RelationshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationshipGroupByArgs['orderBy'] }
        : { orderBy?: RelationshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RelationshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relationship model
   */
  readonly fields: RelationshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relationship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelationshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    child<T extends Relationship$childArgs<ExtArgs> = {}>(args?: Subset<T, Relationship$childArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parent<T extends Relationship$parentArgs<ExtArgs> = {}>(args?: Subset<T, Relationship$parentArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sibling1<T extends Relationship$sibling1Args<ExtArgs> = {}>(args?: Subset<T, Relationship$sibling1Args<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sibling2<T extends Relationship$sibling2Args<ExtArgs> = {}>(args?: Subset<T, Relationship$sibling2Args<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    spouse1<T extends Relationship$spouse1Args<ExtArgs> = {}>(args?: Subset<T, Relationship$spouse1Args<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    spouse2<T extends Relationship$spouse2Args<ExtArgs> = {}>(args?: Subset<T, Relationship$spouse2Args<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Relationship model
   */
  interface RelationshipFieldRefs {
    readonly id: FieldRef<"Relationship", 'String'>
    readonly type: FieldRef<"Relationship", 'RelationType'>
    readonly startDate: FieldRef<"Relationship", 'DateTime'>
    readonly endDate: FieldRef<"Relationship", 'DateTime'>
    readonly createdAt: FieldRef<"Relationship", 'DateTime'>
    readonly updatedAt: FieldRef<"Relationship", 'DateTime'>
    readonly parentId: FieldRef<"Relationship", 'String'>
    readonly childId: FieldRef<"Relationship", 'String'>
    readonly spouse1Id: FieldRef<"Relationship", 'String'>
    readonly spouse2Id: FieldRef<"Relationship", 'String'>
    readonly sibling1Id: FieldRef<"Relationship", 'String'>
    readonly sibling2Id: FieldRef<"Relationship", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Relationship findUnique
   */
  export type RelationshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship findUniqueOrThrow
   */
  export type RelationshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship findFirst
   */
  export type RelationshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationships.
     */
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Relationship findFirstOrThrow
   */
  export type RelationshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationships.
     */
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Relationship findMany
   */
  export type RelationshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationships to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }

  /**
   * Relationship create
   */
  export type RelationshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Relationship.
     */
    data: XOR<RelationshipCreateInput, RelationshipUncheckedCreateInput>
  }

  /**
   * Relationship createMany
   */
  export type RelationshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relationships.
     */
    data: RelationshipCreateManyInput | RelationshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relationship createManyAndReturn
   */
  export type RelationshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * The data used to create many Relationships.
     */
    data: RelationshipCreateManyInput | RelationshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relationship update
   */
  export type RelationshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Relationship.
     */
    data: XOR<RelationshipUpdateInput, RelationshipUncheckedUpdateInput>
    /**
     * Choose, which Relationship to update.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship updateMany
   */
  export type RelationshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relationships.
     */
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyInput>
    /**
     * Filter which Relationships to update
     */
    where?: RelationshipWhereInput
    /**
     * Limit how many Relationships to update.
     */
    limit?: number
  }

  /**
   * Relationship updateManyAndReturn
   */
  export type RelationshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * The data used to update Relationships.
     */
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyInput>
    /**
     * Filter which Relationships to update
     */
    where?: RelationshipWhereInput
    /**
     * Limit how many Relationships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relationship upsert
   */
  export type RelationshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Relationship to update in case it exists.
     */
    where: RelationshipWhereUniqueInput
    /**
     * In case the Relationship found by the `where` argument doesn't exist, create a new Relationship with this data.
     */
    create: XOR<RelationshipCreateInput, RelationshipUncheckedCreateInput>
    /**
     * In case the Relationship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelationshipUpdateInput, RelationshipUncheckedUpdateInput>
  }

  /**
   * Relationship delete
   */
  export type RelationshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter which Relationship to delete.
     */
    where: RelationshipWhereUniqueInput
  }

  /**
   * Relationship deleteMany
   */
  export type RelationshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationships to delete
     */
    where?: RelationshipWhereInput
    /**
     * Limit how many Relationships to delete.
     */
    limit?: number
  }

  /**
   * Relationship.child
   */
  export type Relationship$childArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Relationship.parent
   */
  export type Relationship$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Relationship.sibling1
   */
  export type Relationship$sibling1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Relationship.sibling2
   */
  export type Relationship$sibling2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Relationship.spouse1
   */
  export type Relationship$spouse1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Relationship.spouse2
   */
  export type Relationship$spouse2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Relationship without action
   */
  export type RelationshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relationship
     */
    omit?: RelationshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationshipInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    location: string | null
    eventType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    memberId: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    location: string | null
    eventType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    memberId: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    location: number
    eventType: number
    createdAt: number
    updatedAt: number
    memberId: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    eventType?: true
    createdAt?: true
    updatedAt?: true
    memberId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    eventType?: true
    createdAt?: true
    updatedAt?: true
    memberId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    eventType?: true
    createdAt?: true
    updatedAt?: true
    memberId?: true
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
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string
    date: Date
    location: string | null
    eventType: string
    createdAt: Date
    updatedAt: Date
    memberId: string
    _count: EventCountAggregateOutputType | null
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
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    eventType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberId?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    eventType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberId?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    eventType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberId?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    eventType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "location" | "eventType" | "createdAt" | "updatedAt" | "memberId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      date: Date
      location: string | null
      eventType: string
      createdAt: Date
      updatedAt: Date
      memberId: string
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
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly eventType: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly memberId: FieldRef<"Event", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
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
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    birthDate: 'birthDate',
    deathDate: 'deathDate',
    photo: 'photo',
    biography: 'biography',
    contactInfo: 'contactInfo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorId: 'creatorId'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const RelationshipScalarFieldEnum: {
    id: 'id',
    type: 'type',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parentId: 'parentId',
    childId: 'childId',
    spouse1Id: 'spouse1Id',
    spouse2Id: 'spouse2Id',
    sibling1Id: 'sibling1Id',
    sibling2Id: 'sibling2Id'
  };

  export type RelationshipScalarFieldEnum = (typeof RelationshipScalarFieldEnum)[keyof typeof RelationshipScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    location: 'location',
    eventType: 'eventType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    memberId: 'memberId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'RelationType'
   */
  export type EnumRelationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationType'>
    


  /**
   * Reference to a field of type 'RelationType[]'
   */
  export type ListEnumRelationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
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
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    members?: MemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: MemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    members?: MemberListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    gender?: EnumGenderFilter<"Member"> | $Enums.Gender
    birthDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    deathDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    photo?: StringNullableFilter<"Member"> | string | null
    biography?: StringNullableFilter<"Member"> | string | null
    contactInfo?: JsonNullableFilter<"Member">
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    creatorId?: StringFilter<"Member"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    events?: EventListRelationFilter
    childRelations?: RelationshipListRelationFilter
    parentRelations?: RelationshipListRelationFilter
    siblingAsSibling1?: RelationshipListRelationFilter
    siblingAsSibling2?: RelationshipListRelationFilter
    spouseAsSpouse1?: RelationshipListRelationFilter
    spouseAsSpouse2?: RelationshipListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    deathDate?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    creator?: UserOrderByWithRelationInput
    events?: EventOrderByRelationAggregateInput
    childRelations?: RelationshipOrderByRelationAggregateInput
    parentRelations?: RelationshipOrderByRelationAggregateInput
    siblingAsSibling1?: RelationshipOrderByRelationAggregateInput
    siblingAsSibling2?: RelationshipOrderByRelationAggregateInput
    spouseAsSpouse1?: RelationshipOrderByRelationAggregateInput
    spouseAsSpouse2?: RelationshipOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    name?: StringFilter<"Member"> | string
    gender?: EnumGenderFilter<"Member"> | $Enums.Gender
    birthDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    deathDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    photo?: StringNullableFilter<"Member"> | string | null
    biography?: StringNullableFilter<"Member"> | string | null
    contactInfo?: JsonNullableFilter<"Member">
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    creatorId?: StringFilter<"Member"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    events?: EventListRelationFilter
    childRelations?: RelationshipListRelationFilter
    parentRelations?: RelationshipListRelationFilter
    siblingAsSibling1?: RelationshipListRelationFilter
    siblingAsSibling2?: RelationshipListRelationFilter
    spouseAsSpouse1?: RelationshipListRelationFilter
    spouseAsSpouse2?: RelationshipListRelationFilter
  }, "id">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    deathDate?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    name?: StringWithAggregatesFilter<"Member"> | string
    gender?: EnumGenderWithAggregatesFilter<"Member"> | $Enums.Gender
    birthDate?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    deathDate?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    photo?: StringNullableWithAggregatesFilter<"Member"> | string | null
    biography?: StringNullableWithAggregatesFilter<"Member"> | string | null
    contactInfo?: JsonNullableWithAggregatesFilter<"Member">
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    creatorId?: StringWithAggregatesFilter<"Member"> | string
  }

  export type RelationshipWhereInput = {
    AND?: RelationshipWhereInput | RelationshipWhereInput[]
    OR?: RelationshipWhereInput[]
    NOT?: RelationshipWhereInput | RelationshipWhereInput[]
    id?: StringFilter<"Relationship"> | string
    type?: EnumRelationTypeFilter<"Relationship"> | $Enums.RelationType
    startDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
    createdAt?: DateTimeFilter<"Relationship"> | Date | string
    updatedAt?: DateTimeFilter<"Relationship"> | Date | string
    parentId?: StringNullableFilter<"Relationship"> | string | null
    childId?: StringNullableFilter<"Relationship"> | string | null
    spouse1Id?: StringNullableFilter<"Relationship"> | string | null
    spouse2Id?: StringNullableFilter<"Relationship"> | string | null
    sibling1Id?: StringNullableFilter<"Relationship"> | string | null
    sibling2Id?: StringNullableFilter<"Relationship"> | string | null
    child?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    parent?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    sibling1?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    sibling2?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    spouse1?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    spouse2?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }

  export type RelationshipOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    childId?: SortOrderInput | SortOrder
    spouse1Id?: SortOrderInput | SortOrder
    spouse2Id?: SortOrderInput | SortOrder
    sibling1Id?: SortOrderInput | SortOrder
    sibling2Id?: SortOrderInput | SortOrder
    child?: MemberOrderByWithRelationInput
    parent?: MemberOrderByWithRelationInput
    sibling1?: MemberOrderByWithRelationInput
    sibling2?: MemberOrderByWithRelationInput
    spouse1?: MemberOrderByWithRelationInput
    spouse2?: MemberOrderByWithRelationInput
  }

  export type RelationshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RelationshipWhereInput | RelationshipWhereInput[]
    OR?: RelationshipWhereInput[]
    NOT?: RelationshipWhereInput | RelationshipWhereInput[]
    type?: EnumRelationTypeFilter<"Relationship"> | $Enums.RelationType
    startDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
    createdAt?: DateTimeFilter<"Relationship"> | Date | string
    updatedAt?: DateTimeFilter<"Relationship"> | Date | string
    parentId?: StringNullableFilter<"Relationship"> | string | null
    childId?: StringNullableFilter<"Relationship"> | string | null
    spouse1Id?: StringNullableFilter<"Relationship"> | string | null
    spouse2Id?: StringNullableFilter<"Relationship"> | string | null
    sibling1Id?: StringNullableFilter<"Relationship"> | string | null
    sibling2Id?: StringNullableFilter<"Relationship"> | string | null
    child?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    parent?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    sibling1?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    sibling2?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    spouse1?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    spouse2?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }, "id">

  export type RelationshipOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    childId?: SortOrderInput | SortOrder
    spouse1Id?: SortOrderInput | SortOrder
    spouse2Id?: SortOrderInput | SortOrder
    sibling1Id?: SortOrderInput | SortOrder
    sibling2Id?: SortOrderInput | SortOrder
    _count?: RelationshipCountOrderByAggregateInput
    _max?: RelationshipMaxOrderByAggregateInput
    _min?: RelationshipMinOrderByAggregateInput
  }

  export type RelationshipScalarWhereWithAggregatesInput = {
    AND?: RelationshipScalarWhereWithAggregatesInput | RelationshipScalarWhereWithAggregatesInput[]
    OR?: RelationshipScalarWhereWithAggregatesInput[]
    NOT?: RelationshipScalarWhereWithAggregatesInput | RelationshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Relationship"> | string
    type?: EnumRelationTypeWithAggregatesFilter<"Relationship"> | $Enums.RelationType
    startDate?: DateTimeNullableWithAggregatesFilter<"Relationship"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Relationship"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Relationship"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Relationship"> | Date | string
    parentId?: StringNullableWithAggregatesFilter<"Relationship"> | string | null
    childId?: StringNullableWithAggregatesFilter<"Relationship"> | string | null
    spouse1Id?: StringNullableWithAggregatesFilter<"Relationship"> | string | null
    spouse2Id?: StringNullableWithAggregatesFilter<"Relationship"> | string | null
    sibling1Id?: StringNullableWithAggregatesFilter<"Relationship"> | string | null
    sibling2Id?: StringNullableWithAggregatesFilter<"Relationship"> | string | null
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    eventType?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    memberId?: StringFilter<"Event"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrderInput | SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberId?: SortOrder
    member?: MemberOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    eventType?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    memberId?: StringFilter<"Event"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrderInput | SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberId?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    eventType?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    memberId?: StringWithAggregatesFilter<"Event"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutMembersInput
    events?: EventCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipCreateNestedManyWithoutSpouse2Input
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    events?: EventUncheckedCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipUncheckedCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipUncheckedCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipUncheckedCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipUncheckedCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipUncheckedCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipUncheckedCreateNestedManyWithoutSpouse2Input
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMembersNestedInput
    events?: EventUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUncheckedUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUncheckedUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUncheckedUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUncheckedUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUncheckedUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUncheckedUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type RelationshipCreateInput = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    child?: MemberCreateNestedOneWithoutChildRelationsInput
    parent?: MemberCreateNestedOneWithoutParentRelationsInput
    sibling1?: MemberCreateNestedOneWithoutSiblingAsSibling1Input
    sibling2?: MemberCreateNestedOneWithoutSiblingAsSibling2Input
    spouse1?: MemberCreateNestedOneWithoutSpouseAsSpouse1Input
    spouse2?: MemberCreateNestedOneWithoutSpouseAsSpouse2Input
  }

  export type RelationshipUncheckedCreateInput = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    childId?: string | null
    spouse1Id?: string | null
    spouse2Id?: string | null
    sibling1Id?: string | null
    sibling2Id?: string | null
  }

  export type RelationshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: MemberUpdateOneWithoutChildRelationsNestedInput
    parent?: MemberUpdateOneWithoutParentRelationsNestedInput
    sibling1?: MemberUpdateOneWithoutSiblingAsSibling1NestedInput
    sibling2?: MemberUpdateOneWithoutSiblingAsSibling2NestedInput
    spouse1?: MemberUpdateOneWithoutSpouseAsSpouse1NestedInput
    spouse2?: MemberUpdateOneWithoutSpouseAsSpouse2NestedInput
  }

  export type RelationshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipCreateManyInput = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    childId?: string | null
    spouse1Id?: string | null
    spouse2Id?: string | null
    sibling1Id?: string | null
    sibling2Id?: string | null
  }

  export type RelationshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    location?: string | null
    eventType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    location?: string | null
    eventType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberId: string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    location?: string | null
    eventType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberId: string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberId?: StringFieldUpdateOperationsInput | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type RelationshipListRelationFilter = {
    every?: RelationshipWhereInput
    some?: RelationshipWhereInput
    none?: RelationshipWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelationshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    photo?: SortOrder
    biography?: SortOrder
    contactInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    photo?: SortOrder
    biography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    deathDate?: SortOrder
    photo?: SortOrder
    biography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumRelationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationType | EnumRelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationTypeFilter<$PrismaModel> | $Enums.RelationType
  }

  export type MemberNullableScalarRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type RelationshipCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
    childId?: SortOrder
    spouse1Id?: SortOrder
    spouse2Id?: SortOrder
    sibling1Id?: SortOrder
    sibling2Id?: SortOrder
  }

  export type RelationshipMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
    childId?: SortOrder
    spouse1Id?: SortOrder
    spouse2Id?: SortOrder
    sibling1Id?: SortOrder
    sibling2Id?: SortOrder
  }

  export type RelationshipMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
    childId?: SortOrder
    spouse1Id?: SortOrder
    spouse2Id?: SortOrder
    sibling1Id?: SortOrder
    sibling2Id?: SortOrder
  }

  export type EnumRelationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationType | EnumRelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationTypeFilter<$PrismaModel>
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberId?: SortOrder
  }

  export type MemberCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput> | MemberCreateWithoutCreatorInput[] | MemberUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCreatorInput | MemberCreateOrConnectWithoutCreatorInput[]
    createMany?: MemberCreateManyCreatorInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput> | MemberCreateWithoutCreatorInput[] | MemberUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCreatorInput | MemberCreateOrConnectWithoutCreatorInput[]
    createMany?: MemberCreateManyCreatorInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MemberUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput> | MemberCreateWithoutCreatorInput[] | MemberUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCreatorInput | MemberCreateOrConnectWithoutCreatorInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutCreatorInput | MemberUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MemberCreateManyCreatorInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutCreatorInput | MemberUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutCreatorInput | MemberUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput> | MemberCreateWithoutCreatorInput[] | MemberUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCreatorInput | MemberCreateOrConnectWithoutCreatorInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutCreatorInput | MemberUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MemberCreateManyCreatorInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutCreatorInput | MemberUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutCreatorInput | MemberUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembersInput = {
    create?: XOR<UserCreateWithoutMembersInput, UserUncheckedCreateWithoutMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembersInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutMemberInput = {
    create?: XOR<EventCreateWithoutMemberInput, EventUncheckedCreateWithoutMemberInput> | EventCreateWithoutMemberInput[] | EventUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMemberInput | EventCreateOrConnectWithoutMemberInput[]
    createMany?: EventCreateManyMemberInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type RelationshipCreateNestedManyWithoutChildInput = {
    create?: XOR<RelationshipCreateWithoutChildInput, RelationshipUncheckedCreateWithoutChildInput> | RelationshipCreateWithoutChildInput[] | RelationshipUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutChildInput | RelationshipCreateOrConnectWithoutChildInput[]
    createMany?: RelationshipCreateManyChildInputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipCreateNestedManyWithoutParentInput = {
    create?: XOR<RelationshipCreateWithoutParentInput, RelationshipUncheckedCreateWithoutParentInput> | RelationshipCreateWithoutParentInput[] | RelationshipUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutParentInput | RelationshipCreateOrConnectWithoutParentInput[]
    createMany?: RelationshipCreateManyParentInputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipCreateNestedManyWithoutSibling1Input = {
    create?: XOR<RelationshipCreateWithoutSibling1Input, RelationshipUncheckedCreateWithoutSibling1Input> | RelationshipCreateWithoutSibling1Input[] | RelationshipUncheckedCreateWithoutSibling1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSibling1Input | RelationshipCreateOrConnectWithoutSibling1Input[]
    createMany?: RelationshipCreateManySibling1InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipCreateNestedManyWithoutSibling2Input = {
    create?: XOR<RelationshipCreateWithoutSibling2Input, RelationshipUncheckedCreateWithoutSibling2Input> | RelationshipCreateWithoutSibling2Input[] | RelationshipUncheckedCreateWithoutSibling2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSibling2Input | RelationshipCreateOrConnectWithoutSibling2Input[]
    createMany?: RelationshipCreateManySibling2InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipCreateNestedManyWithoutSpouse1Input = {
    create?: XOR<RelationshipCreateWithoutSpouse1Input, RelationshipUncheckedCreateWithoutSpouse1Input> | RelationshipCreateWithoutSpouse1Input[] | RelationshipUncheckedCreateWithoutSpouse1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSpouse1Input | RelationshipCreateOrConnectWithoutSpouse1Input[]
    createMany?: RelationshipCreateManySpouse1InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipCreateNestedManyWithoutSpouse2Input = {
    create?: XOR<RelationshipCreateWithoutSpouse2Input, RelationshipUncheckedCreateWithoutSpouse2Input> | RelationshipCreateWithoutSpouse2Input[] | RelationshipUncheckedCreateWithoutSpouse2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSpouse2Input | RelationshipCreateOrConnectWithoutSpouse2Input[]
    createMany?: RelationshipCreateManySpouse2InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<EventCreateWithoutMemberInput, EventUncheckedCreateWithoutMemberInput> | EventCreateWithoutMemberInput[] | EventUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMemberInput | EventCreateOrConnectWithoutMemberInput[]
    createMany?: EventCreateManyMemberInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<RelationshipCreateWithoutChildInput, RelationshipUncheckedCreateWithoutChildInput> | RelationshipCreateWithoutChildInput[] | RelationshipUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutChildInput | RelationshipCreateOrConnectWithoutChildInput[]
    createMany?: RelationshipCreateManyChildInputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<RelationshipCreateWithoutParentInput, RelationshipUncheckedCreateWithoutParentInput> | RelationshipCreateWithoutParentInput[] | RelationshipUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutParentInput | RelationshipCreateOrConnectWithoutParentInput[]
    createMany?: RelationshipCreateManyParentInputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutSibling1Input = {
    create?: XOR<RelationshipCreateWithoutSibling1Input, RelationshipUncheckedCreateWithoutSibling1Input> | RelationshipCreateWithoutSibling1Input[] | RelationshipUncheckedCreateWithoutSibling1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSibling1Input | RelationshipCreateOrConnectWithoutSibling1Input[]
    createMany?: RelationshipCreateManySibling1InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutSibling2Input = {
    create?: XOR<RelationshipCreateWithoutSibling2Input, RelationshipUncheckedCreateWithoutSibling2Input> | RelationshipCreateWithoutSibling2Input[] | RelationshipUncheckedCreateWithoutSibling2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSibling2Input | RelationshipCreateOrConnectWithoutSibling2Input[]
    createMany?: RelationshipCreateManySibling2InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutSpouse1Input = {
    create?: XOR<RelationshipCreateWithoutSpouse1Input, RelationshipUncheckedCreateWithoutSpouse1Input> | RelationshipCreateWithoutSpouse1Input[] | RelationshipUncheckedCreateWithoutSpouse1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSpouse1Input | RelationshipCreateOrConnectWithoutSpouse1Input[]
    createMany?: RelationshipCreateManySpouse1InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutSpouse2Input = {
    create?: XOR<RelationshipCreateWithoutSpouse2Input, RelationshipUncheckedCreateWithoutSpouse2Input> | RelationshipCreateWithoutSpouse2Input[] | RelationshipUncheckedCreateWithoutSpouse2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSpouse2Input | RelationshipCreateOrConnectWithoutSpouse2Input[]
    createMany?: RelationshipCreateManySpouse2InputEnvelope
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<UserCreateWithoutMembersInput, UserUncheckedCreateWithoutMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembersInput
    upsert?: UserUpsertWithoutMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembersInput, UserUpdateWithoutMembersInput>, UserUncheckedUpdateWithoutMembersInput>
  }

  export type EventUpdateManyWithoutMemberNestedInput = {
    create?: XOR<EventCreateWithoutMemberInput, EventUncheckedCreateWithoutMemberInput> | EventCreateWithoutMemberInput[] | EventUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMemberInput | EventCreateOrConnectWithoutMemberInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutMemberInput | EventUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: EventCreateManyMemberInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutMemberInput | EventUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: EventUpdateManyWithWhereWithoutMemberInput | EventUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type RelationshipUpdateManyWithoutChildNestedInput = {
    create?: XOR<RelationshipCreateWithoutChildInput, RelationshipUncheckedCreateWithoutChildInput> | RelationshipCreateWithoutChildInput[] | RelationshipUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutChildInput | RelationshipCreateOrConnectWithoutChildInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutChildInput | RelationshipUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RelationshipCreateManyChildInputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutChildInput | RelationshipUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutChildInput | RelationshipUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUpdateManyWithoutParentNestedInput = {
    create?: XOR<RelationshipCreateWithoutParentInput, RelationshipUncheckedCreateWithoutParentInput> | RelationshipCreateWithoutParentInput[] | RelationshipUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutParentInput | RelationshipCreateOrConnectWithoutParentInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutParentInput | RelationshipUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RelationshipCreateManyParentInputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutParentInput | RelationshipUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutParentInput | RelationshipUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUpdateManyWithoutSibling1NestedInput = {
    create?: XOR<RelationshipCreateWithoutSibling1Input, RelationshipUncheckedCreateWithoutSibling1Input> | RelationshipCreateWithoutSibling1Input[] | RelationshipUncheckedCreateWithoutSibling1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSibling1Input | RelationshipCreateOrConnectWithoutSibling1Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutSibling1Input | RelationshipUpsertWithWhereUniqueWithoutSibling1Input[]
    createMany?: RelationshipCreateManySibling1InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutSibling1Input | RelationshipUpdateWithWhereUniqueWithoutSibling1Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutSibling1Input | RelationshipUpdateManyWithWhereWithoutSibling1Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUpdateManyWithoutSibling2NestedInput = {
    create?: XOR<RelationshipCreateWithoutSibling2Input, RelationshipUncheckedCreateWithoutSibling2Input> | RelationshipCreateWithoutSibling2Input[] | RelationshipUncheckedCreateWithoutSibling2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSibling2Input | RelationshipCreateOrConnectWithoutSibling2Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutSibling2Input | RelationshipUpsertWithWhereUniqueWithoutSibling2Input[]
    createMany?: RelationshipCreateManySibling2InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutSibling2Input | RelationshipUpdateWithWhereUniqueWithoutSibling2Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutSibling2Input | RelationshipUpdateManyWithWhereWithoutSibling2Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUpdateManyWithoutSpouse1NestedInput = {
    create?: XOR<RelationshipCreateWithoutSpouse1Input, RelationshipUncheckedCreateWithoutSpouse1Input> | RelationshipCreateWithoutSpouse1Input[] | RelationshipUncheckedCreateWithoutSpouse1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSpouse1Input | RelationshipCreateOrConnectWithoutSpouse1Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutSpouse1Input | RelationshipUpsertWithWhereUniqueWithoutSpouse1Input[]
    createMany?: RelationshipCreateManySpouse1InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutSpouse1Input | RelationshipUpdateWithWhereUniqueWithoutSpouse1Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutSpouse1Input | RelationshipUpdateManyWithWhereWithoutSpouse1Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUpdateManyWithoutSpouse2NestedInput = {
    create?: XOR<RelationshipCreateWithoutSpouse2Input, RelationshipUncheckedCreateWithoutSpouse2Input> | RelationshipCreateWithoutSpouse2Input[] | RelationshipUncheckedCreateWithoutSpouse2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSpouse2Input | RelationshipCreateOrConnectWithoutSpouse2Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutSpouse2Input | RelationshipUpsertWithWhereUniqueWithoutSpouse2Input[]
    createMany?: RelationshipCreateManySpouse2InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutSpouse2Input | RelationshipUpdateWithWhereUniqueWithoutSpouse2Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutSpouse2Input | RelationshipUpdateManyWithWhereWithoutSpouse2Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<EventCreateWithoutMemberInput, EventUncheckedCreateWithoutMemberInput> | EventCreateWithoutMemberInput[] | EventUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMemberInput | EventCreateOrConnectWithoutMemberInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutMemberInput | EventUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: EventCreateManyMemberInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutMemberInput | EventUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: EventUpdateManyWithWhereWithoutMemberInput | EventUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<RelationshipCreateWithoutChildInput, RelationshipUncheckedCreateWithoutChildInput> | RelationshipCreateWithoutChildInput[] | RelationshipUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutChildInput | RelationshipCreateOrConnectWithoutChildInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutChildInput | RelationshipUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RelationshipCreateManyChildInputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutChildInput | RelationshipUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutChildInput | RelationshipUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<RelationshipCreateWithoutParentInput, RelationshipUncheckedCreateWithoutParentInput> | RelationshipCreateWithoutParentInput[] | RelationshipUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutParentInput | RelationshipCreateOrConnectWithoutParentInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutParentInput | RelationshipUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RelationshipCreateManyParentInputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutParentInput | RelationshipUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutParentInput | RelationshipUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutSibling1NestedInput = {
    create?: XOR<RelationshipCreateWithoutSibling1Input, RelationshipUncheckedCreateWithoutSibling1Input> | RelationshipCreateWithoutSibling1Input[] | RelationshipUncheckedCreateWithoutSibling1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSibling1Input | RelationshipCreateOrConnectWithoutSibling1Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutSibling1Input | RelationshipUpsertWithWhereUniqueWithoutSibling1Input[]
    createMany?: RelationshipCreateManySibling1InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutSibling1Input | RelationshipUpdateWithWhereUniqueWithoutSibling1Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutSibling1Input | RelationshipUpdateManyWithWhereWithoutSibling1Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutSibling2NestedInput = {
    create?: XOR<RelationshipCreateWithoutSibling2Input, RelationshipUncheckedCreateWithoutSibling2Input> | RelationshipCreateWithoutSibling2Input[] | RelationshipUncheckedCreateWithoutSibling2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSibling2Input | RelationshipCreateOrConnectWithoutSibling2Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutSibling2Input | RelationshipUpsertWithWhereUniqueWithoutSibling2Input[]
    createMany?: RelationshipCreateManySibling2InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutSibling2Input | RelationshipUpdateWithWhereUniqueWithoutSibling2Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutSibling2Input | RelationshipUpdateManyWithWhereWithoutSibling2Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutSpouse1NestedInput = {
    create?: XOR<RelationshipCreateWithoutSpouse1Input, RelationshipUncheckedCreateWithoutSpouse1Input> | RelationshipCreateWithoutSpouse1Input[] | RelationshipUncheckedCreateWithoutSpouse1Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSpouse1Input | RelationshipCreateOrConnectWithoutSpouse1Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutSpouse1Input | RelationshipUpsertWithWhereUniqueWithoutSpouse1Input[]
    createMany?: RelationshipCreateManySpouse1InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutSpouse1Input | RelationshipUpdateWithWhereUniqueWithoutSpouse1Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutSpouse1Input | RelationshipUpdateManyWithWhereWithoutSpouse1Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutSpouse2NestedInput = {
    create?: XOR<RelationshipCreateWithoutSpouse2Input, RelationshipUncheckedCreateWithoutSpouse2Input> | RelationshipCreateWithoutSpouse2Input[] | RelationshipUncheckedCreateWithoutSpouse2Input[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutSpouse2Input | RelationshipCreateOrConnectWithoutSpouse2Input[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutSpouse2Input | RelationshipUpsertWithWhereUniqueWithoutSpouse2Input[]
    createMany?: RelationshipCreateManySpouse2InputEnvelope
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutSpouse2Input | RelationshipUpdateWithWhereUniqueWithoutSpouse2Input[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutSpouse2Input | RelationshipUpdateManyWithWhereWithoutSpouse2Input[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutChildRelationsInput = {
    create?: XOR<MemberCreateWithoutChildRelationsInput, MemberUncheckedCreateWithoutChildRelationsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutChildRelationsInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutParentRelationsInput = {
    create?: XOR<MemberCreateWithoutParentRelationsInput, MemberUncheckedCreateWithoutParentRelationsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutParentRelationsInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutSiblingAsSibling1Input = {
    create?: XOR<MemberCreateWithoutSiblingAsSibling1Input, MemberUncheckedCreateWithoutSiblingAsSibling1Input>
    connectOrCreate?: MemberCreateOrConnectWithoutSiblingAsSibling1Input
    connect?: MemberWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutSiblingAsSibling2Input = {
    create?: XOR<MemberCreateWithoutSiblingAsSibling2Input, MemberUncheckedCreateWithoutSiblingAsSibling2Input>
    connectOrCreate?: MemberCreateOrConnectWithoutSiblingAsSibling2Input
    connect?: MemberWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutSpouseAsSpouse1Input = {
    create?: XOR<MemberCreateWithoutSpouseAsSpouse1Input, MemberUncheckedCreateWithoutSpouseAsSpouse1Input>
    connectOrCreate?: MemberCreateOrConnectWithoutSpouseAsSpouse1Input
    connect?: MemberWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutSpouseAsSpouse2Input = {
    create?: XOR<MemberCreateWithoutSpouseAsSpouse2Input, MemberUncheckedCreateWithoutSpouseAsSpouse2Input>
    connectOrCreate?: MemberCreateOrConnectWithoutSpouseAsSpouse2Input
    connect?: MemberWhereUniqueInput
  }

  export type EnumRelationTypeFieldUpdateOperationsInput = {
    set?: $Enums.RelationType
  }

  export type MemberUpdateOneWithoutChildRelationsNestedInput = {
    create?: XOR<MemberCreateWithoutChildRelationsInput, MemberUncheckedCreateWithoutChildRelationsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutChildRelationsInput
    upsert?: MemberUpsertWithoutChildRelationsInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutChildRelationsInput, MemberUpdateWithoutChildRelationsInput>, MemberUncheckedUpdateWithoutChildRelationsInput>
  }

  export type MemberUpdateOneWithoutParentRelationsNestedInput = {
    create?: XOR<MemberCreateWithoutParentRelationsInput, MemberUncheckedCreateWithoutParentRelationsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutParentRelationsInput
    upsert?: MemberUpsertWithoutParentRelationsInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutParentRelationsInput, MemberUpdateWithoutParentRelationsInput>, MemberUncheckedUpdateWithoutParentRelationsInput>
  }

  export type MemberUpdateOneWithoutSiblingAsSibling1NestedInput = {
    create?: XOR<MemberCreateWithoutSiblingAsSibling1Input, MemberUncheckedCreateWithoutSiblingAsSibling1Input>
    connectOrCreate?: MemberCreateOrConnectWithoutSiblingAsSibling1Input
    upsert?: MemberUpsertWithoutSiblingAsSibling1Input
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutSiblingAsSibling1Input, MemberUpdateWithoutSiblingAsSibling1Input>, MemberUncheckedUpdateWithoutSiblingAsSibling1Input>
  }

  export type MemberUpdateOneWithoutSiblingAsSibling2NestedInput = {
    create?: XOR<MemberCreateWithoutSiblingAsSibling2Input, MemberUncheckedCreateWithoutSiblingAsSibling2Input>
    connectOrCreate?: MemberCreateOrConnectWithoutSiblingAsSibling2Input
    upsert?: MemberUpsertWithoutSiblingAsSibling2Input
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutSiblingAsSibling2Input, MemberUpdateWithoutSiblingAsSibling2Input>, MemberUncheckedUpdateWithoutSiblingAsSibling2Input>
  }

  export type MemberUpdateOneWithoutSpouseAsSpouse1NestedInput = {
    create?: XOR<MemberCreateWithoutSpouseAsSpouse1Input, MemberUncheckedCreateWithoutSpouseAsSpouse1Input>
    connectOrCreate?: MemberCreateOrConnectWithoutSpouseAsSpouse1Input
    upsert?: MemberUpsertWithoutSpouseAsSpouse1Input
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutSpouseAsSpouse1Input, MemberUpdateWithoutSpouseAsSpouse1Input>, MemberUncheckedUpdateWithoutSpouseAsSpouse1Input>
  }

  export type MemberUpdateOneWithoutSpouseAsSpouse2NestedInput = {
    create?: XOR<MemberCreateWithoutSpouseAsSpouse2Input, MemberUncheckedCreateWithoutSpouseAsSpouse2Input>
    connectOrCreate?: MemberCreateOrConnectWithoutSpouseAsSpouse2Input
    upsert?: MemberUpsertWithoutSpouseAsSpouse2Input
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutSpouseAsSpouse2Input, MemberUpdateWithoutSpouseAsSpouse2Input>, MemberUncheckedUpdateWithoutSpouseAsSpouse2Input>
  }

  export type MemberCreateNestedOneWithoutEventsInput = {
    create?: XOR<MemberCreateWithoutEventsInput, MemberUncheckedCreateWithoutEventsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutEventsInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<MemberCreateWithoutEventsInput, MemberUncheckedCreateWithoutEventsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutEventsInput
    upsert?: MemberUpsertWithoutEventsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutEventsInput, MemberUpdateWithoutEventsInput>, MemberUncheckedUpdateWithoutEventsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type NestedEnumRelationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationType | EnumRelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationTypeFilter<$PrismaModel> | $Enums.RelationType
  }

  export type NestedEnumRelationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationType | EnumRelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationTypeFilter<$PrismaModel>
  }

  export type MemberCreateWithoutCreatorInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipCreateNestedManyWithoutSpouse2Input
  }

  export type MemberUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipUncheckedCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipUncheckedCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipUncheckedCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipUncheckedCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipUncheckedCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipUncheckedCreateNestedManyWithoutSpouse2Input
  }

  export type MemberCreateOrConnectWithoutCreatorInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput>
  }

  export type MemberCreateManyCreatorInputEnvelope = {
    data: MemberCreateManyCreatorInput | MemberCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutCreatorInput, MemberUncheckedUpdateWithoutCreatorInput>
    create: XOR<MemberCreateWithoutCreatorInput, MemberUncheckedCreateWithoutCreatorInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutCreatorInput, MemberUncheckedUpdateWithoutCreatorInput>
  }

  export type MemberUpdateManyWithWhereWithoutCreatorInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    name?: StringFilter<"Member"> | string
    gender?: EnumGenderFilter<"Member"> | $Enums.Gender
    birthDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    deathDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    photo?: StringNullableFilter<"Member"> | string | null
    biography?: StringNullableFilter<"Member"> | string | null
    contactInfo?: JsonNullableFilter<"Member">
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    creatorId?: StringFilter<"Member"> | string
  }

  export type UserCreateWithoutMembersInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutMembersInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembersInput, UserUncheckedCreateWithoutMembersInput>
  }

  export type EventCreateWithoutMemberInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    location?: string | null
    eventType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateWithoutMemberInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    location?: string | null
    eventType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutMemberInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutMemberInput, EventUncheckedCreateWithoutMemberInput>
  }

  export type EventCreateManyMemberInputEnvelope = {
    data: EventCreateManyMemberInput | EventCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type RelationshipCreateWithoutChildInput = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: MemberCreateNestedOneWithoutParentRelationsInput
    sibling1?: MemberCreateNestedOneWithoutSiblingAsSibling1Input
    sibling2?: MemberCreateNestedOneWithoutSiblingAsSibling2Input
    spouse1?: MemberCreateNestedOneWithoutSpouseAsSpouse1Input
    spouse2?: MemberCreateNestedOneWithoutSpouseAsSpouse2Input
  }

  export type RelationshipUncheckedCreateWithoutChildInput = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    spouse1Id?: string | null
    spouse2Id?: string | null
    sibling1Id?: string | null
    sibling2Id?: string | null
  }

  export type RelationshipCreateOrConnectWithoutChildInput = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutChildInput, RelationshipUncheckedCreateWithoutChildInput>
  }

  export type RelationshipCreateManyChildInputEnvelope = {
    data: RelationshipCreateManyChildInput | RelationshipCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type RelationshipCreateWithoutParentInput = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    child?: MemberCreateNestedOneWithoutChildRelationsInput
    sibling1?: MemberCreateNestedOneWithoutSiblingAsSibling1Input
    sibling2?: MemberCreateNestedOneWithoutSiblingAsSibling2Input
    spouse1?: MemberCreateNestedOneWithoutSpouseAsSpouse1Input
    spouse2?: MemberCreateNestedOneWithoutSpouseAsSpouse2Input
  }

  export type RelationshipUncheckedCreateWithoutParentInput = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childId?: string | null
    spouse1Id?: string | null
    spouse2Id?: string | null
    sibling1Id?: string | null
    sibling2Id?: string | null
  }

  export type RelationshipCreateOrConnectWithoutParentInput = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutParentInput, RelationshipUncheckedCreateWithoutParentInput>
  }

  export type RelationshipCreateManyParentInputEnvelope = {
    data: RelationshipCreateManyParentInput | RelationshipCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type RelationshipCreateWithoutSibling1Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    child?: MemberCreateNestedOneWithoutChildRelationsInput
    parent?: MemberCreateNestedOneWithoutParentRelationsInput
    sibling2?: MemberCreateNestedOneWithoutSiblingAsSibling2Input
    spouse1?: MemberCreateNestedOneWithoutSpouseAsSpouse1Input
    spouse2?: MemberCreateNestedOneWithoutSpouseAsSpouse2Input
  }

  export type RelationshipUncheckedCreateWithoutSibling1Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    childId?: string | null
    spouse1Id?: string | null
    spouse2Id?: string | null
    sibling2Id?: string | null
  }

  export type RelationshipCreateOrConnectWithoutSibling1Input = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutSibling1Input, RelationshipUncheckedCreateWithoutSibling1Input>
  }

  export type RelationshipCreateManySibling1InputEnvelope = {
    data: RelationshipCreateManySibling1Input | RelationshipCreateManySibling1Input[]
    skipDuplicates?: boolean
  }

  export type RelationshipCreateWithoutSibling2Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    child?: MemberCreateNestedOneWithoutChildRelationsInput
    parent?: MemberCreateNestedOneWithoutParentRelationsInput
    sibling1?: MemberCreateNestedOneWithoutSiblingAsSibling1Input
    spouse1?: MemberCreateNestedOneWithoutSpouseAsSpouse1Input
    spouse2?: MemberCreateNestedOneWithoutSpouseAsSpouse2Input
  }

  export type RelationshipUncheckedCreateWithoutSibling2Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    childId?: string | null
    spouse1Id?: string | null
    spouse2Id?: string | null
    sibling1Id?: string | null
  }

  export type RelationshipCreateOrConnectWithoutSibling2Input = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutSibling2Input, RelationshipUncheckedCreateWithoutSibling2Input>
  }

  export type RelationshipCreateManySibling2InputEnvelope = {
    data: RelationshipCreateManySibling2Input | RelationshipCreateManySibling2Input[]
    skipDuplicates?: boolean
  }

  export type RelationshipCreateWithoutSpouse1Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    child?: MemberCreateNestedOneWithoutChildRelationsInput
    parent?: MemberCreateNestedOneWithoutParentRelationsInput
    sibling1?: MemberCreateNestedOneWithoutSiblingAsSibling1Input
    sibling2?: MemberCreateNestedOneWithoutSiblingAsSibling2Input
    spouse2?: MemberCreateNestedOneWithoutSpouseAsSpouse2Input
  }

  export type RelationshipUncheckedCreateWithoutSpouse1Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    childId?: string | null
    spouse2Id?: string | null
    sibling1Id?: string | null
    sibling2Id?: string | null
  }

  export type RelationshipCreateOrConnectWithoutSpouse1Input = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutSpouse1Input, RelationshipUncheckedCreateWithoutSpouse1Input>
  }

  export type RelationshipCreateManySpouse1InputEnvelope = {
    data: RelationshipCreateManySpouse1Input | RelationshipCreateManySpouse1Input[]
    skipDuplicates?: boolean
  }

  export type RelationshipCreateWithoutSpouse2Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    child?: MemberCreateNestedOneWithoutChildRelationsInput
    parent?: MemberCreateNestedOneWithoutParentRelationsInput
    sibling1?: MemberCreateNestedOneWithoutSiblingAsSibling1Input
    sibling2?: MemberCreateNestedOneWithoutSiblingAsSibling2Input
    spouse1?: MemberCreateNestedOneWithoutSpouseAsSpouse1Input
  }

  export type RelationshipUncheckedCreateWithoutSpouse2Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    childId?: string | null
    spouse1Id?: string | null
    sibling1Id?: string | null
    sibling2Id?: string | null
  }

  export type RelationshipCreateOrConnectWithoutSpouse2Input = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutSpouse2Input, RelationshipUncheckedCreateWithoutSpouse2Input>
  }

  export type RelationshipCreateManySpouse2InputEnvelope = {
    data: RelationshipCreateManySpouse2Input | RelationshipCreateManySpouse2Input[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMembersInput = {
    update: XOR<UserUpdateWithoutMembersInput, UserUncheckedUpdateWithoutMembersInput>
    create: XOR<UserCreateWithoutMembersInput, UserUncheckedCreateWithoutMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembersInput, UserUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutMemberInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutMemberInput, EventUncheckedUpdateWithoutMemberInput>
    create: XOR<EventCreateWithoutMemberInput, EventUncheckedCreateWithoutMemberInput>
  }

  export type EventUpdateWithWhereUniqueWithoutMemberInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutMemberInput, EventUncheckedUpdateWithoutMemberInput>
  }

  export type EventUpdateManyWithWhereWithoutMemberInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutMemberInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    eventType?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    memberId?: StringFilter<"Event"> | string
  }

  export type RelationshipUpsertWithWhereUniqueWithoutChildInput = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutChildInput, RelationshipUncheckedUpdateWithoutChildInput>
    create: XOR<RelationshipCreateWithoutChildInput, RelationshipUncheckedCreateWithoutChildInput>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutChildInput = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutChildInput, RelationshipUncheckedUpdateWithoutChildInput>
  }

  export type RelationshipUpdateManyWithWhereWithoutChildInput = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutChildInput>
  }

  export type RelationshipScalarWhereInput = {
    AND?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
    OR?: RelationshipScalarWhereInput[]
    NOT?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
    id?: StringFilter<"Relationship"> | string
    type?: EnumRelationTypeFilter<"Relationship"> | $Enums.RelationType
    startDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Relationship"> | Date | string | null
    createdAt?: DateTimeFilter<"Relationship"> | Date | string
    updatedAt?: DateTimeFilter<"Relationship"> | Date | string
    parentId?: StringNullableFilter<"Relationship"> | string | null
    childId?: StringNullableFilter<"Relationship"> | string | null
    spouse1Id?: StringNullableFilter<"Relationship"> | string | null
    spouse2Id?: StringNullableFilter<"Relationship"> | string | null
    sibling1Id?: StringNullableFilter<"Relationship"> | string | null
    sibling2Id?: StringNullableFilter<"Relationship"> | string | null
  }

  export type RelationshipUpsertWithWhereUniqueWithoutParentInput = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutParentInput, RelationshipUncheckedUpdateWithoutParentInput>
    create: XOR<RelationshipCreateWithoutParentInput, RelationshipUncheckedCreateWithoutParentInput>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutParentInput = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutParentInput, RelationshipUncheckedUpdateWithoutParentInput>
  }

  export type RelationshipUpdateManyWithWhereWithoutParentInput = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutParentInput>
  }

  export type RelationshipUpsertWithWhereUniqueWithoutSibling1Input = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutSibling1Input, RelationshipUncheckedUpdateWithoutSibling1Input>
    create: XOR<RelationshipCreateWithoutSibling1Input, RelationshipUncheckedCreateWithoutSibling1Input>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutSibling1Input = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutSibling1Input, RelationshipUncheckedUpdateWithoutSibling1Input>
  }

  export type RelationshipUpdateManyWithWhereWithoutSibling1Input = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutSibling1Input>
  }

  export type RelationshipUpsertWithWhereUniqueWithoutSibling2Input = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutSibling2Input, RelationshipUncheckedUpdateWithoutSibling2Input>
    create: XOR<RelationshipCreateWithoutSibling2Input, RelationshipUncheckedCreateWithoutSibling2Input>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutSibling2Input = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutSibling2Input, RelationshipUncheckedUpdateWithoutSibling2Input>
  }

  export type RelationshipUpdateManyWithWhereWithoutSibling2Input = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutSibling2Input>
  }

  export type RelationshipUpsertWithWhereUniqueWithoutSpouse1Input = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutSpouse1Input, RelationshipUncheckedUpdateWithoutSpouse1Input>
    create: XOR<RelationshipCreateWithoutSpouse1Input, RelationshipUncheckedCreateWithoutSpouse1Input>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutSpouse1Input = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutSpouse1Input, RelationshipUncheckedUpdateWithoutSpouse1Input>
  }

  export type RelationshipUpdateManyWithWhereWithoutSpouse1Input = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutSpouse1Input>
  }

  export type RelationshipUpsertWithWhereUniqueWithoutSpouse2Input = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutSpouse2Input, RelationshipUncheckedUpdateWithoutSpouse2Input>
    create: XOR<RelationshipCreateWithoutSpouse2Input, RelationshipUncheckedCreateWithoutSpouse2Input>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutSpouse2Input = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutSpouse2Input, RelationshipUncheckedUpdateWithoutSpouse2Input>
  }

  export type RelationshipUpdateManyWithWhereWithoutSpouse2Input = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutSpouse2Input>
  }

  export type MemberCreateWithoutChildRelationsInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutMembersInput
    events?: EventCreateNestedManyWithoutMemberInput
    parentRelations?: RelationshipCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipCreateNestedManyWithoutSpouse2Input
  }

  export type MemberUncheckedCreateWithoutChildRelationsInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    events?: EventUncheckedCreateNestedManyWithoutMemberInput
    parentRelations?: RelationshipUncheckedCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipUncheckedCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipUncheckedCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipUncheckedCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipUncheckedCreateNestedManyWithoutSpouse2Input
  }

  export type MemberCreateOrConnectWithoutChildRelationsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutChildRelationsInput, MemberUncheckedCreateWithoutChildRelationsInput>
  }

  export type MemberCreateWithoutParentRelationsInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutMembersInput
    events?: EventCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipCreateNestedManyWithoutChildInput
    siblingAsSibling1?: RelationshipCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipCreateNestedManyWithoutSpouse2Input
  }

  export type MemberUncheckedCreateWithoutParentRelationsInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    events?: EventUncheckedCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipUncheckedCreateNestedManyWithoutChildInput
    siblingAsSibling1?: RelationshipUncheckedCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipUncheckedCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipUncheckedCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipUncheckedCreateNestedManyWithoutSpouse2Input
  }

  export type MemberCreateOrConnectWithoutParentRelationsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutParentRelationsInput, MemberUncheckedCreateWithoutParentRelationsInput>
  }

  export type MemberCreateWithoutSiblingAsSibling1Input = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutMembersInput
    events?: EventCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipCreateNestedManyWithoutParentInput
    siblingAsSibling2?: RelationshipCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipCreateNestedManyWithoutSpouse2Input
  }

  export type MemberUncheckedCreateWithoutSiblingAsSibling1Input = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    events?: EventUncheckedCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipUncheckedCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipUncheckedCreateNestedManyWithoutParentInput
    siblingAsSibling2?: RelationshipUncheckedCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipUncheckedCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipUncheckedCreateNestedManyWithoutSpouse2Input
  }

  export type MemberCreateOrConnectWithoutSiblingAsSibling1Input = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutSiblingAsSibling1Input, MemberUncheckedCreateWithoutSiblingAsSibling1Input>
  }

  export type MemberCreateWithoutSiblingAsSibling2Input = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutMembersInput
    events?: EventCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipCreateNestedManyWithoutSibling1Input
    spouseAsSpouse1?: RelationshipCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipCreateNestedManyWithoutSpouse2Input
  }

  export type MemberUncheckedCreateWithoutSiblingAsSibling2Input = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    events?: EventUncheckedCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipUncheckedCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipUncheckedCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipUncheckedCreateNestedManyWithoutSibling1Input
    spouseAsSpouse1?: RelationshipUncheckedCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipUncheckedCreateNestedManyWithoutSpouse2Input
  }

  export type MemberCreateOrConnectWithoutSiblingAsSibling2Input = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutSiblingAsSibling2Input, MemberUncheckedCreateWithoutSiblingAsSibling2Input>
  }

  export type MemberCreateWithoutSpouseAsSpouse1Input = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutMembersInput
    events?: EventCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipCreateNestedManyWithoutSibling2Input
    spouseAsSpouse2?: RelationshipCreateNestedManyWithoutSpouse2Input
  }

  export type MemberUncheckedCreateWithoutSpouseAsSpouse1Input = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    events?: EventUncheckedCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipUncheckedCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipUncheckedCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipUncheckedCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipUncheckedCreateNestedManyWithoutSibling2Input
    spouseAsSpouse2?: RelationshipUncheckedCreateNestedManyWithoutSpouse2Input
  }

  export type MemberCreateOrConnectWithoutSpouseAsSpouse1Input = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutSpouseAsSpouse1Input, MemberUncheckedCreateWithoutSpouseAsSpouse1Input>
  }

  export type MemberCreateWithoutSpouseAsSpouse2Input = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutMembersInput
    events?: EventCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipCreateNestedManyWithoutSpouse1Input
  }

  export type MemberUncheckedCreateWithoutSpouseAsSpouse2Input = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    events?: EventUncheckedCreateNestedManyWithoutMemberInput
    childRelations?: RelationshipUncheckedCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipUncheckedCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipUncheckedCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipUncheckedCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipUncheckedCreateNestedManyWithoutSpouse1Input
  }

  export type MemberCreateOrConnectWithoutSpouseAsSpouse2Input = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutSpouseAsSpouse2Input, MemberUncheckedCreateWithoutSpouseAsSpouse2Input>
  }

  export type MemberUpsertWithoutChildRelationsInput = {
    update: XOR<MemberUpdateWithoutChildRelationsInput, MemberUncheckedUpdateWithoutChildRelationsInput>
    create: XOR<MemberCreateWithoutChildRelationsInput, MemberUncheckedCreateWithoutChildRelationsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutChildRelationsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutChildRelationsInput, MemberUncheckedUpdateWithoutChildRelationsInput>
  }

  export type MemberUpdateWithoutChildRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMembersNestedInput
    events?: EventUpdateManyWithoutMemberNestedInput
    parentRelations?: RelationshipUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUncheckedUpdateWithoutChildRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutMemberNestedInput
    parentRelations?: RelationshipUncheckedUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUncheckedUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUncheckedUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUncheckedUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUncheckedUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUpsertWithoutParentRelationsInput = {
    update: XOR<MemberUpdateWithoutParentRelationsInput, MemberUncheckedUpdateWithoutParentRelationsInput>
    create: XOR<MemberCreateWithoutParentRelationsInput, MemberUncheckedCreateWithoutParentRelationsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutParentRelationsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutParentRelationsInput, MemberUncheckedUpdateWithoutParentRelationsInput>
  }

  export type MemberUpdateWithoutParentRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMembersNestedInput
    events?: EventUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUpdateManyWithoutChildNestedInput
    siblingAsSibling1?: RelationshipUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUncheckedUpdateWithoutParentRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUncheckedUpdateManyWithoutChildNestedInput
    siblingAsSibling1?: RelationshipUncheckedUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUncheckedUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUncheckedUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUncheckedUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUpsertWithoutSiblingAsSibling1Input = {
    update: XOR<MemberUpdateWithoutSiblingAsSibling1Input, MemberUncheckedUpdateWithoutSiblingAsSibling1Input>
    create: XOR<MemberCreateWithoutSiblingAsSibling1Input, MemberUncheckedCreateWithoutSiblingAsSibling1Input>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutSiblingAsSibling1Input = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutSiblingAsSibling1Input, MemberUncheckedUpdateWithoutSiblingAsSibling1Input>
  }

  export type MemberUpdateWithoutSiblingAsSibling1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMembersNestedInput
    events?: EventUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUpdateManyWithoutParentNestedInput
    siblingAsSibling2?: RelationshipUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUncheckedUpdateWithoutSiblingAsSibling1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUncheckedUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUncheckedUpdateManyWithoutParentNestedInput
    siblingAsSibling2?: RelationshipUncheckedUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUncheckedUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUncheckedUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUpsertWithoutSiblingAsSibling2Input = {
    update: XOR<MemberUpdateWithoutSiblingAsSibling2Input, MemberUncheckedUpdateWithoutSiblingAsSibling2Input>
    create: XOR<MemberCreateWithoutSiblingAsSibling2Input, MemberUncheckedCreateWithoutSiblingAsSibling2Input>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutSiblingAsSibling2Input = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutSiblingAsSibling2Input, MemberUncheckedUpdateWithoutSiblingAsSibling2Input>
  }

  export type MemberUpdateWithoutSiblingAsSibling2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMembersNestedInput
    events?: EventUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUpdateManyWithoutSibling1NestedInput
    spouseAsSpouse1?: RelationshipUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUncheckedUpdateWithoutSiblingAsSibling2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUncheckedUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUncheckedUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUncheckedUpdateManyWithoutSibling1NestedInput
    spouseAsSpouse1?: RelationshipUncheckedUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUncheckedUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUpsertWithoutSpouseAsSpouse1Input = {
    update: XOR<MemberUpdateWithoutSpouseAsSpouse1Input, MemberUncheckedUpdateWithoutSpouseAsSpouse1Input>
    create: XOR<MemberCreateWithoutSpouseAsSpouse1Input, MemberUncheckedCreateWithoutSpouseAsSpouse1Input>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutSpouseAsSpouse1Input = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutSpouseAsSpouse1Input, MemberUncheckedUpdateWithoutSpouseAsSpouse1Input>
  }

  export type MemberUpdateWithoutSpouseAsSpouse1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMembersNestedInput
    events?: EventUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse2?: RelationshipUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUncheckedUpdateWithoutSpouseAsSpouse1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUncheckedUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUncheckedUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUncheckedUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUncheckedUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse2?: RelationshipUncheckedUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUpsertWithoutSpouseAsSpouse2Input = {
    update: XOR<MemberUpdateWithoutSpouseAsSpouse2Input, MemberUncheckedUpdateWithoutSpouseAsSpouse2Input>
    create: XOR<MemberCreateWithoutSpouseAsSpouse2Input, MemberUncheckedCreateWithoutSpouseAsSpouse2Input>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutSpouseAsSpouse2Input = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutSpouseAsSpouse2Input, MemberUncheckedUpdateWithoutSpouseAsSpouse2Input>
  }

  export type MemberUpdateWithoutSpouseAsSpouse2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMembersNestedInput
    events?: EventUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUpdateManyWithoutSpouse1NestedInput
  }

  export type MemberUncheckedUpdateWithoutSpouseAsSpouse2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUncheckedUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUncheckedUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUncheckedUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUncheckedUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUncheckedUpdateManyWithoutSpouse1NestedInput
  }

  export type MemberCreateWithoutEventsInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutMembersInput
    childRelations?: RelationshipCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipCreateNestedManyWithoutSpouse2Input
  }

  export type MemberUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    childRelations?: RelationshipUncheckedCreateNestedManyWithoutChildInput
    parentRelations?: RelationshipUncheckedCreateNestedManyWithoutParentInput
    siblingAsSibling1?: RelationshipUncheckedCreateNestedManyWithoutSibling1Input
    siblingAsSibling2?: RelationshipUncheckedCreateNestedManyWithoutSibling2Input
    spouseAsSpouse1?: RelationshipUncheckedCreateNestedManyWithoutSpouse1Input
    spouseAsSpouse2?: RelationshipUncheckedCreateNestedManyWithoutSpouse2Input
  }

  export type MemberCreateOrConnectWithoutEventsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutEventsInput, MemberUncheckedCreateWithoutEventsInput>
  }

  export type MemberUpsertWithoutEventsInput = {
    update: XOR<MemberUpdateWithoutEventsInput, MemberUncheckedUpdateWithoutEventsInput>
    create: XOR<MemberCreateWithoutEventsInput, MemberUncheckedCreateWithoutEventsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutEventsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutEventsInput, MemberUncheckedUpdateWithoutEventsInput>
  }

  export type MemberUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutMembersNestedInput
    childRelations?: RelationshipUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    childRelations?: RelationshipUncheckedUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUncheckedUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUncheckedUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUncheckedUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUncheckedUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUncheckedUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberCreateManyCreatorInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    birthDate?: Date | string | null
    deathDate?: Date | string | null
    photo?: string | null
    biography?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutMemberNestedInput
    childRelations?: RelationshipUncheckedUpdateManyWithoutChildNestedInput
    parentRelations?: RelationshipUncheckedUpdateManyWithoutParentNestedInput
    siblingAsSibling1?: RelationshipUncheckedUpdateManyWithoutSibling1NestedInput
    siblingAsSibling2?: RelationshipUncheckedUpdateManyWithoutSibling2NestedInput
    spouseAsSpouse1?: RelationshipUncheckedUpdateManyWithoutSpouse1NestedInput
    spouseAsSpouse2?: RelationshipUncheckedUpdateManyWithoutSpouse2NestedInput
  }

  export type MemberUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deathDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyMemberInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    location?: string | null
    eventType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationshipCreateManyChildInput = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    spouse1Id?: string | null
    spouse2Id?: string | null
    sibling1Id?: string | null
    sibling2Id?: string | null
  }

  export type RelationshipCreateManyParentInput = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childId?: string | null
    spouse1Id?: string | null
    spouse2Id?: string | null
    sibling1Id?: string | null
    sibling2Id?: string | null
  }

  export type RelationshipCreateManySibling1Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    childId?: string | null
    spouse1Id?: string | null
    spouse2Id?: string | null
    sibling2Id?: string | null
  }

  export type RelationshipCreateManySibling2Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    childId?: string | null
    spouse1Id?: string | null
    spouse2Id?: string | null
    sibling1Id?: string | null
  }

  export type RelationshipCreateManySpouse1Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    childId?: string | null
    spouse2Id?: string | null
    sibling1Id?: string | null
    sibling2Id?: string | null
  }

  export type RelationshipCreateManySpouse2Input = {
    id?: string
    type: $Enums.RelationType
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    childId?: string | null
    spouse1Id?: string | null
    sibling1Id?: string | null
    sibling2Id?: string | null
  }

  export type EventUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationshipUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: MemberUpdateOneWithoutParentRelationsNestedInput
    sibling1?: MemberUpdateOneWithoutSiblingAsSibling1NestedInput
    sibling2?: MemberUpdateOneWithoutSiblingAsSibling2NestedInput
    spouse1?: MemberUpdateOneWithoutSpouseAsSpouse1NestedInput
    spouse2?: MemberUpdateOneWithoutSpouseAsSpouse2NestedInput
  }

  export type RelationshipUncheckedUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUncheckedUpdateManyWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: MemberUpdateOneWithoutChildRelationsNestedInput
    sibling1?: MemberUpdateOneWithoutSiblingAsSibling1NestedInput
    sibling2?: MemberUpdateOneWithoutSiblingAsSibling2NestedInput
    spouse1?: MemberUpdateOneWithoutSpouseAsSpouse1NestedInput
    spouse2?: MemberUpdateOneWithoutSpouseAsSpouse2NestedInput
  }

  export type RelationshipUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUpdateWithoutSibling1Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: MemberUpdateOneWithoutChildRelationsNestedInput
    parent?: MemberUpdateOneWithoutParentRelationsNestedInput
    sibling2?: MemberUpdateOneWithoutSiblingAsSibling2NestedInput
    spouse1?: MemberUpdateOneWithoutSpouseAsSpouse1NestedInput
    spouse2?: MemberUpdateOneWithoutSpouseAsSpouse2NestedInput
  }

  export type RelationshipUncheckedUpdateWithoutSibling1Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUncheckedUpdateManyWithoutSibling1Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUpdateWithoutSibling2Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: MemberUpdateOneWithoutChildRelationsNestedInput
    parent?: MemberUpdateOneWithoutParentRelationsNestedInput
    sibling1?: MemberUpdateOneWithoutSiblingAsSibling1NestedInput
    spouse1?: MemberUpdateOneWithoutSpouseAsSpouse1NestedInput
    spouse2?: MemberUpdateOneWithoutSpouseAsSpouse2NestedInput
  }

  export type RelationshipUncheckedUpdateWithoutSibling2Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUncheckedUpdateManyWithoutSibling2Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUpdateWithoutSpouse1Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: MemberUpdateOneWithoutChildRelationsNestedInput
    parent?: MemberUpdateOneWithoutParentRelationsNestedInput
    sibling1?: MemberUpdateOneWithoutSiblingAsSibling1NestedInput
    sibling2?: MemberUpdateOneWithoutSiblingAsSibling2NestedInput
    spouse2?: MemberUpdateOneWithoutSpouseAsSpouse2NestedInput
  }

  export type RelationshipUncheckedUpdateWithoutSpouse1Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUncheckedUpdateManyWithoutSpouse1Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse2Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUpdateWithoutSpouse2Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    child?: MemberUpdateOneWithoutChildRelationsNestedInput
    parent?: MemberUpdateOneWithoutParentRelationsNestedInput
    sibling1?: MemberUpdateOneWithoutSiblingAsSibling1NestedInput
    sibling2?: MemberUpdateOneWithoutSiblingAsSibling2NestedInput
    spouse1?: MemberUpdateOneWithoutSpouseAsSpouse1NestedInput
  }

  export type RelationshipUncheckedUpdateWithoutSpouse2Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUncheckedUpdateManyWithoutSpouse2Input = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    childId?: NullableStringFieldUpdateOperationsInput | string | null
    spouse1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling1Id?: NullableStringFieldUpdateOperationsInput | string | null
    sibling2Id?: NullableStringFieldUpdateOperationsInput | string | null
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