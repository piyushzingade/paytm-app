
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
 * Model Merchant
 * 
 */
export type Merchant = $Result.DefaultSelection<Prisma.$MerchantPayload>
/**
 * Model OnRampTransaction
 * 
 */
export type OnRampTransaction = $Result.DefaultSelection<Prisma.$OnRampTransactionPayload>
/**
 * Model P2pTransfer
 * 
 */
export type P2pTransfer = $Result.DefaultSelection<Prisma.$P2pTransferPayload>
/**
 * Model UserBalance
 * 
 */
export type UserBalance = $Result.DefaultSelection<Prisma.$UserBalancePayload>
/**
 * Model MerchantBalance
 * 
 */
export type MerchantBalance = $Result.DefaultSelection<Prisma.$MerchantBalancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthType: {
  Google: 'Google',
  Github: 'Github'
};

export type AuthType = (typeof AuthType)[keyof typeof AuthType]


export const OnRampStatus: {
  Success: 'Success',
  Failure: 'Failure',
  Processing: 'Processing'
};

export type OnRampStatus = (typeof OnRampStatus)[keyof typeof OnRampStatus]

}

export type AuthType = $Enums.AuthType

export const AuthType: typeof $Enums.AuthType

export type OnRampStatus = $Enums.OnRampStatus

export const OnRampStatus: typeof $Enums.OnRampStatus

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
   * `prisma.merchant`: Exposes CRUD operations for the **Merchant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchant.findMany()
    * ```
    */
  get merchant(): Prisma.MerchantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.onRampTransaction`: Exposes CRUD operations for the **OnRampTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OnRampTransactions
    * const onRampTransactions = await prisma.onRampTransaction.findMany()
    * ```
    */
  get onRampTransaction(): Prisma.OnRampTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.p2pTransfer`: Exposes CRUD operations for the **P2pTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more P2pTransfers
    * const p2pTransfers = await prisma.p2pTransfer.findMany()
    * ```
    */
  get p2pTransfer(): Prisma.P2pTransferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBalance`: Exposes CRUD operations for the **UserBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBalances
    * const userBalances = await prisma.userBalance.findMany()
    * ```
    */
  get userBalance(): Prisma.UserBalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.merchantBalance`: Exposes CRUD operations for the **MerchantBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MerchantBalances
    * const merchantBalances = await prisma.merchantBalance.findMany()
    * ```
    */
  get merchantBalance(): Prisma.MerchantBalanceDelegate<ExtArgs, ClientOptions>;
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
    Merchant: 'Merchant',
    OnRampTransaction: 'OnRampTransaction',
    P2pTransfer: 'P2pTransfer',
    UserBalance: 'UserBalance',
    MerchantBalance: 'MerchantBalance'
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
      modelProps: "user" | "merchant" | "onRampTransaction" | "p2pTransfer" | "userBalance" | "merchantBalance"
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
      Merchant: {
        payload: Prisma.$MerchantPayload<ExtArgs>
        fields: Prisma.MerchantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findFirst: {
            args: Prisma.MerchantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findMany: {
            args: Prisma.MerchantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          create: {
            args: Prisma.MerchantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          createMany: {
            args: Prisma.MerchantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          delete: {
            args: Prisma.MerchantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          update: {
            args: Prisma.MerchantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          deleteMany: {
            args: Prisma.MerchantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MerchantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          upsert: {
            args: Prisma.MerchantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          aggregate: {
            args: Prisma.MerchantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchant>
          }
          groupBy: {
            args: Prisma.MerchantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantCountAggregateOutputType> | number
          }
        }
      }
      OnRampTransaction: {
        payload: Prisma.$OnRampTransactionPayload<ExtArgs>
        fields: Prisma.OnRampTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OnRampTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OnRampTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          findFirst: {
            args: Prisma.OnRampTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OnRampTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          findMany: {
            args: Prisma.OnRampTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>[]
          }
          create: {
            args: Prisma.OnRampTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          createMany: {
            args: Prisma.OnRampTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OnRampTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>[]
          }
          delete: {
            args: Prisma.OnRampTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          update: {
            args: Prisma.OnRampTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          deleteMany: {
            args: Prisma.OnRampTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OnRampTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OnRampTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>[]
          }
          upsert: {
            args: Prisma.OnRampTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          aggregate: {
            args: Prisma.OnRampTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOnRampTransaction>
          }
          groupBy: {
            args: Prisma.OnRampTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OnRampTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OnRampTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<OnRampTransactionCountAggregateOutputType> | number
          }
        }
      }
      P2pTransfer: {
        payload: Prisma.$P2pTransferPayload<ExtArgs>
        fields: Prisma.P2pTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.P2pTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.P2pTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          findFirst: {
            args: Prisma.P2pTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.P2pTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          findMany: {
            args: Prisma.P2pTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>[]
          }
          create: {
            args: Prisma.P2pTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          createMany: {
            args: Prisma.P2pTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.P2pTransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>[]
          }
          delete: {
            args: Prisma.P2pTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          update: {
            args: Prisma.P2pTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          deleteMany: {
            args: Prisma.P2pTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.P2pTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.P2pTransferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>[]
          }
          upsert: {
            args: Prisma.P2pTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2pTransferPayload>
          }
          aggregate: {
            args: Prisma.P2pTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateP2pTransfer>
          }
          groupBy: {
            args: Prisma.P2pTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<P2pTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.P2pTransferCountArgs<ExtArgs>
            result: $Utils.Optional<P2pTransferCountAggregateOutputType> | number
          }
        }
      }
      UserBalance: {
        payload: Prisma.$UserBalancePayload<ExtArgs>
        fields: Prisma.UserBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          findFirst: {
            args: Prisma.UserBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          findMany: {
            args: Prisma.UserBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>[]
          }
          create: {
            args: Prisma.UserBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          createMany: {
            args: Prisma.UserBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>[]
          }
          delete: {
            args: Prisma.UserBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          update: {
            args: Prisma.UserBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          deleteMany: {
            args: Prisma.UserBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>[]
          }
          upsert: {
            args: Prisma.UserBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          aggregate: {
            args: Prisma.UserBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBalance>
          }
          groupBy: {
            args: Prisma.UserBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<UserBalanceCountAggregateOutputType> | number
          }
        }
      }
      MerchantBalance: {
        payload: Prisma.$MerchantBalancePayload<ExtArgs>
        fields: Prisma.MerchantBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantBalancePayload>
          }
          findFirst: {
            args: Prisma.MerchantBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantBalancePayload>
          }
          findMany: {
            args: Prisma.MerchantBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantBalancePayload>[]
          }
          create: {
            args: Prisma.MerchantBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantBalancePayload>
          }
          createMany: {
            args: Prisma.MerchantBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantBalancePayload>[]
          }
          delete: {
            args: Prisma.MerchantBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantBalancePayload>
          }
          update: {
            args: Prisma.MerchantBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantBalancePayload>
          }
          deleteMany: {
            args: Prisma.MerchantBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MerchantBalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantBalancePayload>[]
          }
          upsert: {
            args: Prisma.MerchantBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantBalancePayload>
          }
          aggregate: {
            args: Prisma.MerchantBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchantBalance>
          }
          groupBy: {
            args: Prisma.MerchantBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantBalanceCountAggregateOutputType> | number
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
    merchant?: MerchantOmit
    onRampTransaction?: OnRampTransactionOmit
    p2pTransfer?: P2pTransferOmit
    userBalance?: UserBalanceOmit
    merchantBalance?: MerchantBalanceOmit
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
    OnRampTransaction: number
    balances: number
    sentTransfers: number
    receivedTransfers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OnRampTransaction?: boolean | UserCountOutputTypeCountOnRampTransactionArgs
    balances?: boolean | UserCountOutputTypeCountBalancesArgs
    sentTransfers?: boolean | UserCountOutputTypeCountSentTransfersArgs
    receivedTransfers?: boolean | UserCountOutputTypeCountReceivedTransfersArgs
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
  export type UserCountOutputTypeCountOnRampTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnRampTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBalanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: P2pTransferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: P2pTransferWhereInput
  }


  /**
   * Count Type MerchantCountOutputType
   */

  export type MerchantCountOutputType = {
    balances: number
    receivedTransfers: number
  }

  export type MerchantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balances?: boolean | MerchantCountOutputTypeCountBalancesArgs
    receivedTransfers?: boolean | MerchantCountOutputTypeCountReceivedTransfersArgs
  }

  // Custom InputTypes
  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCountOutputType
     */
    select?: MerchantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantBalanceWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountReceivedTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: P2pTransferWhereInput
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    password: string | null
    upiId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    password: string | null
    upiId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    number: number
    password: number
    upiId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
    upiId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
    upiId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
    upiId?: true
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
    email: string | null
    name: string | null
    number: string
    password: string
    upiId: string | null
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
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    upiId?: boolean
    OnRampTransaction?: boolean | User$OnRampTransactionArgs<ExtArgs>
    balances?: boolean | User$balancesArgs<ExtArgs>
    sentTransfers?: boolean | User$sentTransfersArgs<ExtArgs>
    receivedTransfers?: boolean | User$receivedTransfersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    upiId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    upiId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    upiId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "number" | "password" | "upiId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OnRampTransaction?: boolean | User$OnRampTransactionArgs<ExtArgs>
    balances?: boolean | User$balancesArgs<ExtArgs>
    sentTransfers?: boolean | User$sentTransfersArgs<ExtArgs>
    receivedTransfers?: boolean | User$receivedTransfersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      OnRampTransaction: Prisma.$OnRampTransactionPayload<ExtArgs>[]
      balances: Prisma.$UserBalancePayload<ExtArgs>[]
      sentTransfers: Prisma.$P2pTransferPayload<ExtArgs>[]
      receivedTransfers: Prisma.$P2pTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      name: string | null
      number: string
      password: string
      upiId: string | null
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
    OnRampTransaction<T extends User$OnRampTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$OnRampTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    balances<T extends User$balancesArgs<ExtArgs> = {}>(args?: Subset<T, User$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentTransfers<T extends User$sentTransfersArgs<ExtArgs> = {}>(args?: Subset<T, User$sentTransfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedTransfers<T extends User$receivedTransfersArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedTransfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly number: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly upiId: FieldRef<"User", 'String'>
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
   * User.OnRampTransaction
   */
  export type User$OnRampTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    where?: OnRampTransactionWhereInput
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    cursor?: OnRampTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
  }

  /**
   * User.balances
   */
  export type User$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceInclude<ExtArgs> | null
    where?: UserBalanceWhereInput
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    cursor?: UserBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBalanceScalarFieldEnum | UserBalanceScalarFieldEnum[]
  }

  /**
   * User.sentTransfers
   */
  export type User$sentTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    where?: P2pTransferWhereInput
    orderBy?: P2pTransferOrderByWithRelationInput | P2pTransferOrderByWithRelationInput[]
    cursor?: P2pTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * User.receivedTransfers
   */
  export type User$receivedTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    where?: P2pTransferWhereInput
    orderBy?: P2pTransferOrderByWithRelationInput | P2pTransferOrderByWithRelationInput[]
    cursor?: P2pTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
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
   * Model Merchant
   */

  export type AggregateMerchant = {
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  export type MerchantAvgAggregateOutputType = {
    id: number | null
  }

  export type MerchantSumAggregateOutputType = {
    id: number | null
  }

  export type MerchantMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    upiId: string | null
    auth_type: $Enums.AuthType | null
  }

  export type MerchantMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    upiId: string | null
    auth_type: $Enums.AuthType | null
  }

  export type MerchantCountAggregateOutputType = {
    id: number
    email: number
    name: number
    number: number
    upiId: number
    auth_type: number
    _all: number
  }


  export type MerchantAvgAggregateInputType = {
    id?: true
  }

  export type MerchantSumAggregateInputType = {
    id?: true
  }

  export type MerchantMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    upiId?: true
    auth_type?: true
  }

  export type MerchantMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    upiId?: true
    auth_type?: true
  }

  export type MerchantCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    upiId?: true
    auth_type?: true
    _all?: true
  }

  export type MerchantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchant to aggregate.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Merchants
    **/
    _count?: true | MerchantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerchantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerchantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantMaxAggregateInputType
  }

  export type GetMerchantAggregateType<T extends MerchantAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchant[P]>
      : GetScalarType<T[P], AggregateMerchant[P]>
  }




  export type MerchantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantWhereInput
    orderBy?: MerchantOrderByWithAggregationInput | MerchantOrderByWithAggregationInput[]
    by: MerchantScalarFieldEnum[] | MerchantScalarFieldEnum
    having?: MerchantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantCountAggregateInputType | true
    _avg?: MerchantAvgAggregateInputType
    _sum?: MerchantSumAggregateInputType
    _min?: MerchantMinAggregateInputType
    _max?: MerchantMaxAggregateInputType
  }

  export type MerchantGroupByOutputType = {
    id: number
    email: string
    name: string | null
    number: string | null
    upiId: string | null
    auth_type: $Enums.AuthType
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  type GetMerchantGroupByPayload<T extends MerchantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantGroupByOutputType[P]>
        }
      >
    >


  export type MerchantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    upiId?: boolean
    auth_type?: boolean
    balances?: boolean | Merchant$balancesArgs<ExtArgs>
    receivedTransfers?: boolean | Merchant$receivedTransfersArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    upiId?: boolean
    auth_type?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    upiId?: boolean
    auth_type?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    upiId?: boolean
    auth_type?: boolean
  }

  export type MerchantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "number" | "upiId" | "auth_type", ExtArgs["result"]["merchant"]>
  export type MerchantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balances?: boolean | Merchant$balancesArgs<ExtArgs>
    receivedTransfers?: boolean | Merchant$receivedTransfersArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MerchantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MerchantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MerchantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Merchant"
    objects: {
      balances: Prisma.$MerchantBalancePayload<ExtArgs>[]
      receivedTransfers: Prisma.$P2pTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      number: string | null
      upiId: string | null
      auth_type: $Enums.AuthType
    }, ExtArgs["result"]["merchant"]>
    composites: {}
  }

  type MerchantGetPayload<S extends boolean | null | undefined | MerchantDefaultArgs> = $Result.GetResult<Prisma.$MerchantPayload, S>

  type MerchantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MerchantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MerchantCountAggregateInputType | true
    }

  export interface MerchantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Merchant'], meta: { name: 'Merchant' } }
    /**
     * Find zero or one Merchant that matches the filter.
     * @param {MerchantFindUniqueArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantFindUniqueArgs>(args: SelectSubset<T, MerchantFindUniqueArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Merchant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MerchantFindUniqueOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantFindFirstArgs>(args?: SelectSubset<T, MerchantFindFirstArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchant.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantWithIdOnly = await prisma.merchant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantFindManyArgs>(args?: SelectSubset<T, MerchantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Merchant.
     * @param {MerchantCreateArgs} args - Arguments to create a Merchant.
     * @example
     * // Create one Merchant
     * const Merchant = await prisma.merchant.create({
     *   data: {
     *     // ... data to create a Merchant
     *   }
     * })
     * 
     */
    create<T extends MerchantCreateArgs>(args: SelectSubset<T, MerchantCreateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Merchants.
     * @param {MerchantCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantCreateManyArgs>(args?: SelectSubset<T, MerchantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {MerchantCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Merchant.
     * @param {MerchantDeleteArgs} args - Arguments to delete one Merchant.
     * @example
     * // Delete one Merchant
     * const Merchant = await prisma.merchant.delete({
     *   where: {
     *     // ... filter to delete one Merchant
     *   }
     * })
     * 
     */
    delete<T extends MerchantDeleteArgs>(args: SelectSubset<T, MerchantDeleteArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Merchant.
     * @param {MerchantUpdateArgs} args - Arguments to update one Merchant.
     * @example
     * // Update one Merchant
     * const merchant = await prisma.merchant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantUpdateArgs>(args: SelectSubset<T, MerchantUpdateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Merchants.
     * @param {MerchantDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantDeleteManyArgs>(args?: SelectSubset<T, MerchantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantUpdateManyArgs>(args: SelectSubset<T, MerchantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants and returns the data updated in the database.
     * @param {MerchantUpdateManyAndReturnArgs} args - Arguments to update many Merchants.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.updateManyAndReturn({
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
    updateManyAndReturn<T extends MerchantUpdateManyAndReturnArgs>(args: SelectSubset<T, MerchantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Merchant.
     * @param {MerchantUpsertArgs} args - Arguments to update or create a Merchant.
     * @example
     * // Update or create a Merchant
     * const merchant = await prisma.merchant.upsert({
     *   create: {
     *     // ... data to create a Merchant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchant we want to update
     *   }
     * })
     */
    upsert<T extends MerchantUpsertArgs>(args: SelectSubset<T, MerchantUpsertArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchant.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends MerchantCountArgs>(
      args?: Subset<T, MerchantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MerchantAggregateArgs>(args: Subset<T, MerchantAggregateArgs>): Prisma.PrismaPromise<GetMerchantAggregateType<T>>

    /**
     * Group by Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantGroupByArgs} args - Group by arguments.
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
      T extends MerchantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantGroupByArgs['orderBy'] }
        : { orderBy?: MerchantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MerchantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Merchant model
   */
  readonly fields: MerchantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Merchant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    balances<T extends Merchant$balancesArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedTransfers<T extends Merchant$receivedTransfersArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$receivedTransfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Merchant model
   */
  interface MerchantFieldRefs {
    readonly id: FieldRef<"Merchant", 'Int'>
    readonly email: FieldRef<"Merchant", 'String'>
    readonly name: FieldRef<"Merchant", 'String'>
    readonly number: FieldRef<"Merchant", 'String'>
    readonly upiId: FieldRef<"Merchant", 'String'>
    readonly auth_type: FieldRef<"Merchant", 'AuthType'>
  }
    

  // Custom InputTypes
  /**
   * Merchant findUnique
   */
  export type MerchantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findUniqueOrThrow
   */
  export type MerchantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findFirst
   */
  export type MerchantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findFirstOrThrow
   */
  export type MerchantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findMany
   */
  export type MerchantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchants to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant create
   */
  export type MerchantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to create a Merchant.
     */
    data: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
  }

  /**
   * Merchant createMany
   */
  export type MerchantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant createManyAndReturn
   */
  export type MerchantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant update
   */
  export type MerchantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to update a Merchant.
     */
    data: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
    /**
     * Choose, which Merchant to update.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant updateMany
   */
  export type MerchantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to update.
     */
    limit?: number
  }

  /**
   * Merchant updateManyAndReturn
   */
  export type MerchantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to update.
     */
    limit?: number
  }

  /**
   * Merchant upsert
   */
  export type MerchantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The filter to search for the Merchant to update in case it exists.
     */
    where: MerchantWhereUniqueInput
    /**
     * In case the Merchant found by the `where` argument doesn't exist, create a new Merchant with this data.
     */
    create: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
    /**
     * In case the Merchant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
  }

  /**
   * Merchant delete
   */
  export type MerchantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter which Merchant to delete.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant deleteMany
   */
  export type MerchantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchants to delete
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to delete.
     */
    limit?: number
  }

  /**
   * Merchant.balances
   */
  export type Merchant$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceInclude<ExtArgs> | null
    where?: MerchantBalanceWhereInput
    orderBy?: MerchantBalanceOrderByWithRelationInput | MerchantBalanceOrderByWithRelationInput[]
    cursor?: MerchantBalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MerchantBalanceScalarFieldEnum | MerchantBalanceScalarFieldEnum[]
  }

  /**
   * Merchant.receivedTransfers
   */
  export type Merchant$receivedTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    where?: P2pTransferWhereInput
    orderBy?: P2pTransferOrderByWithRelationInput | P2pTransferOrderByWithRelationInput[]
    cursor?: P2pTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * Merchant without action
   */
  export type MerchantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
  }


  /**
   * Model OnRampTransaction
   */

  export type AggregateOnRampTransaction = {
    _count: OnRampTransactionCountAggregateOutputType | null
    _avg: OnRampTransactionAvgAggregateOutputType | null
    _sum: OnRampTransactionSumAggregateOutputType | null
    _min: OnRampTransactionMinAggregateOutputType | null
    _max: OnRampTransactionMaxAggregateOutputType | null
  }

  export type OnRampTransactionAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type OnRampTransactionSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type OnRampTransactionMinAggregateOutputType = {
    id: number | null
    status: $Enums.OnRampStatus | null
    token: string | null
    provider: string | null
    amount: number | null
    startTime: Date | null
    userId: number | null
  }

  export type OnRampTransactionMaxAggregateOutputType = {
    id: number | null
    status: $Enums.OnRampStatus | null
    token: string | null
    provider: string | null
    amount: number | null
    startTime: Date | null
    userId: number | null
  }

  export type OnRampTransactionCountAggregateOutputType = {
    id: number
    status: number
    token: number
    provider: number
    amount: number
    startTime: number
    userId: number
    _all: number
  }


  export type OnRampTransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type OnRampTransactionSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type OnRampTransactionMinAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    startTime?: true
    userId?: true
  }

  export type OnRampTransactionMaxAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    startTime?: true
    userId?: true
  }

  export type OnRampTransactionCountAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    startTime?: true
    userId?: true
    _all?: true
  }

  export type OnRampTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnRampTransaction to aggregate.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OnRampTransactions
    **/
    _count?: true | OnRampTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OnRampTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OnRampTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OnRampTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OnRampTransactionMaxAggregateInputType
  }

  export type GetOnRampTransactionAggregateType<T extends OnRampTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateOnRampTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOnRampTransaction[P]>
      : GetScalarType<T[P], AggregateOnRampTransaction[P]>
  }




  export type OnRampTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnRampTransactionWhereInput
    orderBy?: OnRampTransactionOrderByWithAggregationInput | OnRampTransactionOrderByWithAggregationInput[]
    by: OnRampTransactionScalarFieldEnum[] | OnRampTransactionScalarFieldEnum
    having?: OnRampTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OnRampTransactionCountAggregateInputType | true
    _avg?: OnRampTransactionAvgAggregateInputType
    _sum?: OnRampTransactionSumAggregateInputType
    _min?: OnRampTransactionMinAggregateInputType
    _max?: OnRampTransactionMaxAggregateInputType
  }

  export type OnRampTransactionGroupByOutputType = {
    id: number
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date
    userId: number
    _count: OnRampTransactionCountAggregateOutputType | null
    _avg: OnRampTransactionAvgAggregateOutputType | null
    _sum: OnRampTransactionSumAggregateOutputType | null
    _min: OnRampTransactionMinAggregateOutputType | null
    _max: OnRampTransactionMaxAggregateOutputType | null
  }

  type GetOnRampTransactionGroupByPayload<T extends OnRampTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OnRampTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OnRampTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OnRampTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], OnRampTransactionGroupByOutputType[P]>
        }
      >
    >


  export type OnRampTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    startTime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTransaction"]>

  export type OnRampTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    startTime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTransaction"]>

  export type OnRampTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    startTime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTransaction"]>

  export type OnRampTransactionSelectScalar = {
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    startTime?: boolean
    userId?: boolean
  }

  export type OnRampTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "token" | "provider" | "amount" | "startTime" | "userId", ExtArgs["result"]["onRampTransaction"]>
  export type OnRampTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnRampTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnRampTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OnRampTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OnRampTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.OnRampStatus
      token: string
      provider: string
      amount: number
      startTime: Date
      userId: number
    }, ExtArgs["result"]["onRampTransaction"]>
    composites: {}
  }

  type OnRampTransactionGetPayload<S extends boolean | null | undefined | OnRampTransactionDefaultArgs> = $Result.GetResult<Prisma.$OnRampTransactionPayload, S>

  type OnRampTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OnRampTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OnRampTransactionCountAggregateInputType | true
    }

  export interface OnRampTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OnRampTransaction'], meta: { name: 'OnRampTransaction' } }
    /**
     * Find zero or one OnRampTransaction that matches the filter.
     * @param {OnRampTransactionFindUniqueArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OnRampTransactionFindUniqueArgs>(args: SelectSubset<T, OnRampTransactionFindUniqueArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OnRampTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OnRampTransactionFindUniqueOrThrowArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OnRampTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, OnRampTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnRampTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionFindFirstArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OnRampTransactionFindFirstArgs>(args?: SelectSubset<T, OnRampTransactionFindFirstArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnRampTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionFindFirstOrThrowArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OnRampTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, OnRampTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OnRampTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransaction.findMany()
     * 
     * // Get first 10 OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const onRampTransactionWithIdOnly = await prisma.onRampTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OnRampTransactionFindManyArgs>(args?: SelectSubset<T, OnRampTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OnRampTransaction.
     * @param {OnRampTransactionCreateArgs} args - Arguments to create a OnRampTransaction.
     * @example
     * // Create one OnRampTransaction
     * const OnRampTransaction = await prisma.onRampTransaction.create({
     *   data: {
     *     // ... data to create a OnRampTransaction
     *   }
     * })
     * 
     */
    create<T extends OnRampTransactionCreateArgs>(args: SelectSubset<T, OnRampTransactionCreateArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OnRampTransactions.
     * @param {OnRampTransactionCreateManyArgs} args - Arguments to create many OnRampTransactions.
     * @example
     * // Create many OnRampTransactions
     * const onRampTransaction = await prisma.onRampTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OnRampTransactionCreateManyArgs>(args?: SelectSubset<T, OnRampTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OnRampTransactions and returns the data saved in the database.
     * @param {OnRampTransactionCreateManyAndReturnArgs} args - Arguments to create many OnRampTransactions.
     * @example
     * // Create many OnRampTransactions
     * const onRampTransaction = await prisma.onRampTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OnRampTransactions and only return the `id`
     * const onRampTransactionWithIdOnly = await prisma.onRampTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OnRampTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, OnRampTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OnRampTransaction.
     * @param {OnRampTransactionDeleteArgs} args - Arguments to delete one OnRampTransaction.
     * @example
     * // Delete one OnRampTransaction
     * const OnRampTransaction = await prisma.onRampTransaction.delete({
     *   where: {
     *     // ... filter to delete one OnRampTransaction
     *   }
     * })
     * 
     */
    delete<T extends OnRampTransactionDeleteArgs>(args: SelectSubset<T, OnRampTransactionDeleteArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OnRampTransaction.
     * @param {OnRampTransactionUpdateArgs} args - Arguments to update one OnRampTransaction.
     * @example
     * // Update one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OnRampTransactionUpdateArgs>(args: SelectSubset<T, OnRampTransactionUpdateArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OnRampTransactions.
     * @param {OnRampTransactionDeleteManyArgs} args - Arguments to filter OnRampTransactions to delete.
     * @example
     * // Delete a few OnRampTransactions
     * const { count } = await prisma.onRampTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OnRampTransactionDeleteManyArgs>(args?: SelectSubset<T, OnRampTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnRampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OnRampTransactions
     * const onRampTransaction = await prisma.onRampTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OnRampTransactionUpdateManyArgs>(args: SelectSubset<T, OnRampTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnRampTransactions and returns the data updated in the database.
     * @param {OnRampTransactionUpdateManyAndReturnArgs} args - Arguments to update many OnRampTransactions.
     * @example
     * // Update many OnRampTransactions
     * const onRampTransaction = await prisma.onRampTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OnRampTransactions and only return the `id`
     * const onRampTransactionWithIdOnly = await prisma.onRampTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends OnRampTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, OnRampTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OnRampTransaction.
     * @param {OnRampTransactionUpsertArgs} args - Arguments to update or create a OnRampTransaction.
     * @example
     * // Update or create a OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.upsert({
     *   create: {
     *     // ... data to create a OnRampTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OnRampTransaction we want to update
     *   }
     * })
     */
    upsert<T extends OnRampTransactionUpsertArgs>(args: SelectSubset<T, OnRampTransactionUpsertArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OnRampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionCountArgs} args - Arguments to filter OnRampTransactions to count.
     * @example
     * // Count the number of OnRampTransactions
     * const count = await prisma.onRampTransaction.count({
     *   where: {
     *     // ... the filter for the OnRampTransactions we want to count
     *   }
     * })
    **/
    count<T extends OnRampTransactionCountArgs>(
      args?: Subset<T, OnRampTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OnRampTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OnRampTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OnRampTransactionAggregateArgs>(args: Subset<T, OnRampTransactionAggregateArgs>): Prisma.PrismaPromise<GetOnRampTransactionAggregateType<T>>

    /**
     * Group by OnRampTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionGroupByArgs} args - Group by arguments.
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
      T extends OnRampTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OnRampTransactionGroupByArgs['orderBy'] }
        : { orderBy?: OnRampTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OnRampTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnRampTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OnRampTransaction model
   */
  readonly fields: OnRampTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OnRampTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OnRampTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OnRampTransaction model
   */
  interface OnRampTransactionFieldRefs {
    readonly id: FieldRef<"OnRampTransaction", 'Int'>
    readonly status: FieldRef<"OnRampTransaction", 'OnRampStatus'>
    readonly token: FieldRef<"OnRampTransaction", 'String'>
    readonly provider: FieldRef<"OnRampTransaction", 'String'>
    readonly amount: FieldRef<"OnRampTransaction", 'Int'>
    readonly startTime: FieldRef<"OnRampTransaction", 'DateTime'>
    readonly userId: FieldRef<"OnRampTransaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OnRampTransaction findUnique
   */
  export type OnRampTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where: OnRampTransactionWhereUniqueInput
  }

  /**
   * OnRampTransaction findUniqueOrThrow
   */
  export type OnRampTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where: OnRampTransactionWhereUniqueInput
  }

  /**
   * OnRampTransaction findFirst
   */
  export type OnRampTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnRampTransactions.
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnRampTransactions.
     */
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
  }

  /**
   * OnRampTransaction findFirstOrThrow
   */
  export type OnRampTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnRampTransactions.
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnRampTransactions.
     */
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
  }

  /**
   * OnRampTransaction findMany
   */
  export type OnRampTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransactions to fetch.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OnRampTransactions.
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
  }

  /**
   * OnRampTransaction create
   */
  export type OnRampTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a OnRampTransaction.
     */
    data: XOR<OnRampTransactionCreateInput, OnRampTransactionUncheckedCreateInput>
  }

  /**
   * OnRampTransaction createMany
   */
  export type OnRampTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OnRampTransactions.
     */
    data: OnRampTransactionCreateManyInput | OnRampTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OnRampTransaction createManyAndReturn
   */
  export type OnRampTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many OnRampTransactions.
     */
    data: OnRampTransactionCreateManyInput | OnRampTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OnRampTransaction update
   */
  export type OnRampTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a OnRampTransaction.
     */
    data: XOR<OnRampTransactionUpdateInput, OnRampTransactionUncheckedUpdateInput>
    /**
     * Choose, which OnRampTransaction to update.
     */
    where: OnRampTransactionWhereUniqueInput
  }

  /**
   * OnRampTransaction updateMany
   */
  export type OnRampTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OnRampTransactions.
     */
    data: XOR<OnRampTransactionUpdateManyMutationInput, OnRampTransactionUncheckedUpdateManyInput>
    /**
     * Filter which OnRampTransactions to update
     */
    where?: OnRampTransactionWhereInput
    /**
     * Limit how many OnRampTransactions to update.
     */
    limit?: number
  }

  /**
   * OnRampTransaction updateManyAndReturn
   */
  export type OnRampTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * The data used to update OnRampTransactions.
     */
    data: XOR<OnRampTransactionUpdateManyMutationInput, OnRampTransactionUncheckedUpdateManyInput>
    /**
     * Filter which OnRampTransactions to update
     */
    where?: OnRampTransactionWhereInput
    /**
     * Limit how many OnRampTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OnRampTransaction upsert
   */
  export type OnRampTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the OnRampTransaction to update in case it exists.
     */
    where: OnRampTransactionWhereUniqueInput
    /**
     * In case the OnRampTransaction found by the `where` argument doesn't exist, create a new OnRampTransaction with this data.
     */
    create: XOR<OnRampTransactionCreateInput, OnRampTransactionUncheckedCreateInput>
    /**
     * In case the OnRampTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OnRampTransactionUpdateInput, OnRampTransactionUncheckedUpdateInput>
  }

  /**
   * OnRampTransaction delete
   */
  export type OnRampTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter which OnRampTransaction to delete.
     */
    where: OnRampTransactionWhereUniqueInput
  }

  /**
   * OnRampTransaction deleteMany
   */
  export type OnRampTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnRampTransactions to delete
     */
    where?: OnRampTransactionWhereInput
    /**
     * Limit how many OnRampTransactions to delete.
     */
    limit?: number
  }

  /**
   * OnRampTransaction without action
   */
  export type OnRampTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTransaction
     */
    omit?: OnRampTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
  }


  /**
   * Model P2pTransfer
   */

  export type AggregateP2pTransfer = {
    _count: P2pTransferCountAggregateOutputType | null
    _avg: P2pTransferAvgAggregateOutputType | null
    _sum: P2pTransferSumAggregateOutputType | null
    _min: P2pTransferMinAggregateOutputType | null
    _max: P2pTransferMaxAggregateOutputType | null
  }

  export type P2pTransferAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    fromUserId: number | null
    toUserId: number | null
    toMerchantId: number | null
  }

  export type P2pTransferSumAggregateOutputType = {
    id: number | null
    amount: number | null
    fromUserId: number | null
    toUserId: number | null
    toMerchantId: number | null
  }

  export type P2pTransferMinAggregateOutputType = {
    id: number | null
    amount: number | null
    timestamp: Date | null
    fromUserId: number | null
    toUserId: number | null
    toMerchantId: number | null
  }

  export type P2pTransferMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    timestamp: Date | null
    fromUserId: number | null
    toUserId: number | null
    toMerchantId: number | null
  }

  export type P2pTransferCountAggregateOutputType = {
    id: number
    amount: number
    timestamp: number
    fromUserId: number
    toUserId: number
    toMerchantId: number
    _all: number
  }


  export type P2pTransferAvgAggregateInputType = {
    id?: true
    amount?: true
    fromUserId?: true
    toUserId?: true
    toMerchantId?: true
  }

  export type P2pTransferSumAggregateInputType = {
    id?: true
    amount?: true
    fromUserId?: true
    toUserId?: true
    toMerchantId?: true
  }

  export type P2pTransferMinAggregateInputType = {
    id?: true
    amount?: true
    timestamp?: true
    fromUserId?: true
    toUserId?: true
    toMerchantId?: true
  }

  export type P2pTransferMaxAggregateInputType = {
    id?: true
    amount?: true
    timestamp?: true
    fromUserId?: true
    toUserId?: true
    toMerchantId?: true
  }

  export type P2pTransferCountAggregateInputType = {
    id?: true
    amount?: true
    timestamp?: true
    fromUserId?: true
    toUserId?: true
    toMerchantId?: true
    _all?: true
  }

  export type P2pTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which P2pTransfer to aggregate.
     */
    where?: P2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2pTransfers to fetch.
     */
    orderBy?: P2pTransferOrderByWithRelationInput | P2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: P2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned P2pTransfers
    **/
    _count?: true | P2pTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: P2pTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: P2pTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: P2pTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: P2pTransferMaxAggregateInputType
  }

  export type GetP2pTransferAggregateType<T extends P2pTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateP2pTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateP2pTransfer[P]>
      : GetScalarType<T[P], AggregateP2pTransfer[P]>
  }




  export type P2pTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: P2pTransferWhereInput
    orderBy?: P2pTransferOrderByWithAggregationInput | P2pTransferOrderByWithAggregationInput[]
    by: P2pTransferScalarFieldEnum[] | P2pTransferScalarFieldEnum
    having?: P2pTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: P2pTransferCountAggregateInputType | true
    _avg?: P2pTransferAvgAggregateInputType
    _sum?: P2pTransferSumAggregateInputType
    _min?: P2pTransferMinAggregateInputType
    _max?: P2pTransferMaxAggregateInputType
  }

  export type P2pTransferGroupByOutputType = {
    id: number
    amount: number
    timestamp: Date
    fromUserId: number
    toUserId: number | null
    toMerchantId: number | null
    _count: P2pTransferCountAggregateOutputType | null
    _avg: P2pTransferAvgAggregateOutputType | null
    _sum: P2pTransferSumAggregateOutputType | null
    _min: P2pTransferMinAggregateOutputType | null
    _max: P2pTransferMaxAggregateOutputType | null
  }

  type GetP2pTransferGroupByPayload<T extends P2pTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<P2pTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof P2pTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], P2pTransferGroupByOutputType[P]>
            : GetScalarType<T[P], P2pTransferGroupByOutputType[P]>
        }
      >
    >


  export type P2pTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    toMerchantId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | P2pTransfer$toUserArgs<ExtArgs>
    toMerchant?: boolean | P2pTransfer$toMerchantArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransfer"]>

  export type P2pTransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    toMerchantId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | P2pTransfer$toUserArgs<ExtArgs>
    toMerchant?: boolean | P2pTransfer$toMerchantArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransfer"]>

  export type P2pTransferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    toMerchantId?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | P2pTransfer$toUserArgs<ExtArgs>
    toMerchant?: boolean | P2pTransfer$toMerchantArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransfer"]>

  export type P2pTransferSelectScalar = {
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    toMerchantId?: boolean
  }

  export type P2pTransferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "timestamp" | "fromUserId" | "toUserId" | "toMerchantId", ExtArgs["result"]["p2pTransfer"]>
  export type P2pTransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | P2pTransfer$toUserArgs<ExtArgs>
    toMerchant?: boolean | P2pTransfer$toMerchantArgs<ExtArgs>
  }
  export type P2pTransferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | P2pTransfer$toUserArgs<ExtArgs>
    toMerchant?: boolean | P2pTransfer$toMerchantArgs<ExtArgs>
  }
  export type P2pTransferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | P2pTransfer$toUserArgs<ExtArgs>
    toMerchant?: boolean | P2pTransfer$toMerchantArgs<ExtArgs>
  }

  export type $P2pTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "P2pTransfer"
    objects: {
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs> | null
      toMerchant: Prisma.$MerchantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      timestamp: Date
      fromUserId: number
      toUserId: number | null
      toMerchantId: number | null
    }, ExtArgs["result"]["p2pTransfer"]>
    composites: {}
  }

  type P2pTransferGetPayload<S extends boolean | null | undefined | P2pTransferDefaultArgs> = $Result.GetResult<Prisma.$P2pTransferPayload, S>

  type P2pTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<P2pTransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: P2pTransferCountAggregateInputType | true
    }

  export interface P2pTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['P2pTransfer'], meta: { name: 'P2pTransfer' } }
    /**
     * Find zero or one P2pTransfer that matches the filter.
     * @param {P2pTransferFindUniqueArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends P2pTransferFindUniqueArgs>(args: SelectSubset<T, P2pTransferFindUniqueArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one P2pTransfer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {P2pTransferFindUniqueOrThrowArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends P2pTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, P2pTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first P2pTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferFindFirstArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends P2pTransferFindFirstArgs>(args?: SelectSubset<T, P2pTransferFindFirstArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first P2pTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferFindFirstOrThrowArgs} args - Arguments to find a P2pTransfer
     * @example
     * // Get one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends P2pTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, P2pTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more P2pTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all P2pTransfers
     * const p2pTransfers = await prisma.p2pTransfer.findMany()
     * 
     * // Get first 10 P2pTransfers
     * const p2pTransfers = await prisma.p2pTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const p2pTransferWithIdOnly = await prisma.p2pTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends P2pTransferFindManyArgs>(args?: SelectSubset<T, P2pTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a P2pTransfer.
     * @param {P2pTransferCreateArgs} args - Arguments to create a P2pTransfer.
     * @example
     * // Create one P2pTransfer
     * const P2pTransfer = await prisma.p2pTransfer.create({
     *   data: {
     *     // ... data to create a P2pTransfer
     *   }
     * })
     * 
     */
    create<T extends P2pTransferCreateArgs>(args: SelectSubset<T, P2pTransferCreateArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many P2pTransfers.
     * @param {P2pTransferCreateManyArgs} args - Arguments to create many P2pTransfers.
     * @example
     * // Create many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends P2pTransferCreateManyArgs>(args?: SelectSubset<T, P2pTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many P2pTransfers and returns the data saved in the database.
     * @param {P2pTransferCreateManyAndReturnArgs} args - Arguments to create many P2pTransfers.
     * @example
     * // Create many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many P2pTransfers and only return the `id`
     * const p2pTransferWithIdOnly = await prisma.p2pTransfer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends P2pTransferCreateManyAndReturnArgs>(args?: SelectSubset<T, P2pTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a P2pTransfer.
     * @param {P2pTransferDeleteArgs} args - Arguments to delete one P2pTransfer.
     * @example
     * // Delete one P2pTransfer
     * const P2pTransfer = await prisma.p2pTransfer.delete({
     *   where: {
     *     // ... filter to delete one P2pTransfer
     *   }
     * })
     * 
     */
    delete<T extends P2pTransferDeleteArgs>(args: SelectSubset<T, P2pTransferDeleteArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one P2pTransfer.
     * @param {P2pTransferUpdateArgs} args - Arguments to update one P2pTransfer.
     * @example
     * // Update one P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends P2pTransferUpdateArgs>(args: SelectSubset<T, P2pTransferUpdateArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more P2pTransfers.
     * @param {P2pTransferDeleteManyArgs} args - Arguments to filter P2pTransfers to delete.
     * @example
     * // Delete a few P2pTransfers
     * const { count } = await prisma.p2pTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends P2pTransferDeleteManyArgs>(args?: SelectSubset<T, P2pTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2pTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends P2pTransferUpdateManyArgs>(args: SelectSubset<T, P2pTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2pTransfers and returns the data updated in the database.
     * @param {P2pTransferUpdateManyAndReturnArgs} args - Arguments to update many P2pTransfers.
     * @example
     * // Update many P2pTransfers
     * const p2pTransfer = await prisma.p2pTransfer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more P2pTransfers and only return the `id`
     * const p2pTransferWithIdOnly = await prisma.p2pTransfer.updateManyAndReturn({
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
    updateManyAndReturn<T extends P2pTransferUpdateManyAndReturnArgs>(args: SelectSubset<T, P2pTransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one P2pTransfer.
     * @param {P2pTransferUpsertArgs} args - Arguments to update or create a P2pTransfer.
     * @example
     * // Update or create a P2pTransfer
     * const p2pTransfer = await prisma.p2pTransfer.upsert({
     *   create: {
     *     // ... data to create a P2pTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the P2pTransfer we want to update
     *   }
     * })
     */
    upsert<T extends P2pTransferUpsertArgs>(args: SelectSubset<T, P2pTransferUpsertArgs<ExtArgs>>): Prisma__P2pTransferClient<$Result.GetResult<Prisma.$P2pTransferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of P2pTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferCountArgs} args - Arguments to filter P2pTransfers to count.
     * @example
     * // Count the number of P2pTransfers
     * const count = await prisma.p2pTransfer.count({
     *   where: {
     *     // ... the filter for the P2pTransfers we want to count
     *   }
     * })
    **/
    count<T extends P2pTransferCountArgs>(
      args?: Subset<T, P2pTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], P2pTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a P2pTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends P2pTransferAggregateArgs>(args: Subset<T, P2pTransferAggregateArgs>): Prisma.PrismaPromise<GetP2pTransferAggregateType<T>>

    /**
     * Group by P2pTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransferGroupByArgs} args - Group by arguments.
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
      T extends P2pTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: P2pTransferGroupByArgs['orderBy'] }
        : { orderBy?: P2pTransferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, P2pTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetP2pTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the P2pTransfer model
   */
  readonly fields: P2pTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for P2pTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__P2pTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toUser<T extends P2pTransfer$toUserArgs<ExtArgs> = {}>(args?: Subset<T, P2pTransfer$toUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    toMerchant<T extends P2pTransfer$toMerchantArgs<ExtArgs> = {}>(args?: Subset<T, P2pTransfer$toMerchantArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the P2pTransfer model
   */
  interface P2pTransferFieldRefs {
    readonly id: FieldRef<"P2pTransfer", 'Int'>
    readonly amount: FieldRef<"P2pTransfer", 'Int'>
    readonly timestamp: FieldRef<"P2pTransfer", 'DateTime'>
    readonly fromUserId: FieldRef<"P2pTransfer", 'Int'>
    readonly toUserId: FieldRef<"P2pTransfer", 'Int'>
    readonly toMerchantId: FieldRef<"P2pTransfer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * P2pTransfer findUnique
   */
  export type P2pTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which P2pTransfer to fetch.
     */
    where: P2pTransferWhereUniqueInput
  }

  /**
   * P2pTransfer findUniqueOrThrow
   */
  export type P2pTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which P2pTransfer to fetch.
     */
    where: P2pTransferWhereUniqueInput
  }

  /**
   * P2pTransfer findFirst
   */
  export type P2pTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which P2pTransfer to fetch.
     */
    where?: P2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2pTransfers to fetch.
     */
    orderBy?: P2pTransferOrderByWithRelationInput | P2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for P2pTransfers.
     */
    cursor?: P2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of P2pTransfers.
     */
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * P2pTransfer findFirstOrThrow
   */
  export type P2pTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which P2pTransfer to fetch.
     */
    where?: P2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2pTransfers to fetch.
     */
    orderBy?: P2pTransferOrderByWithRelationInput | P2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for P2pTransfers.
     */
    cursor?: P2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2pTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of P2pTransfers.
     */
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * P2pTransfer findMany
   */
  export type P2pTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    /**
     * Filter, which P2pTransfers to fetch.
     */
    where?: P2pTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2pTransfers to fetch.
     */
    orderBy?: P2pTransferOrderByWithRelationInput | P2pTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing P2pTransfers.
     */
    cursor?: P2pTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2pTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2pTransfers.
     */
    skip?: number
    distinct?: P2pTransferScalarFieldEnum | P2pTransferScalarFieldEnum[]
  }

  /**
   * P2pTransfer create
   */
  export type P2pTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    /**
     * The data needed to create a P2pTransfer.
     */
    data: XOR<P2pTransferCreateInput, P2pTransferUncheckedCreateInput>
  }

  /**
   * P2pTransfer createMany
   */
  export type P2pTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many P2pTransfers.
     */
    data: P2pTransferCreateManyInput | P2pTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * P2pTransfer createManyAndReturn
   */
  export type P2pTransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * The data used to create many P2pTransfers.
     */
    data: P2pTransferCreateManyInput | P2pTransferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * P2pTransfer update
   */
  export type P2pTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    /**
     * The data needed to update a P2pTransfer.
     */
    data: XOR<P2pTransferUpdateInput, P2pTransferUncheckedUpdateInput>
    /**
     * Choose, which P2pTransfer to update.
     */
    where: P2pTransferWhereUniqueInput
  }

  /**
   * P2pTransfer updateMany
   */
  export type P2pTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update P2pTransfers.
     */
    data: XOR<P2pTransferUpdateManyMutationInput, P2pTransferUncheckedUpdateManyInput>
    /**
     * Filter which P2pTransfers to update
     */
    where?: P2pTransferWhereInput
    /**
     * Limit how many P2pTransfers to update.
     */
    limit?: number
  }

  /**
   * P2pTransfer updateManyAndReturn
   */
  export type P2pTransferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * The data used to update P2pTransfers.
     */
    data: XOR<P2pTransferUpdateManyMutationInput, P2pTransferUncheckedUpdateManyInput>
    /**
     * Filter which P2pTransfers to update
     */
    where?: P2pTransferWhereInput
    /**
     * Limit how many P2pTransfers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * P2pTransfer upsert
   */
  export type P2pTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    /**
     * The filter to search for the P2pTransfer to update in case it exists.
     */
    where: P2pTransferWhereUniqueInput
    /**
     * In case the P2pTransfer found by the `where` argument doesn't exist, create a new P2pTransfer with this data.
     */
    create: XOR<P2pTransferCreateInput, P2pTransferUncheckedCreateInput>
    /**
     * In case the P2pTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<P2pTransferUpdateInput, P2pTransferUncheckedUpdateInput>
  }

  /**
   * P2pTransfer delete
   */
  export type P2pTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
    /**
     * Filter which P2pTransfer to delete.
     */
    where: P2pTransferWhereUniqueInput
  }

  /**
   * P2pTransfer deleteMany
   */
  export type P2pTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which P2pTransfers to delete
     */
    where?: P2pTransferWhereInput
    /**
     * Limit how many P2pTransfers to delete.
     */
    limit?: number
  }

  /**
   * P2pTransfer.toUser
   */
  export type P2pTransfer$toUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * P2pTransfer.toMerchant
   */
  export type P2pTransfer$toMerchantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    where?: MerchantWhereInput
  }

  /**
   * P2pTransfer without action
   */
  export type P2pTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2pTransfer
     */
    select?: P2pTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2pTransfer
     */
    omit?: P2pTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2pTransferInclude<ExtArgs> | null
  }


  /**
   * Model UserBalance
   */

  export type AggregateUserBalance = {
    _count: UserBalanceCountAggregateOutputType | null
    _avg: UserBalanceAvgAggregateOutputType | null
    _sum: UserBalanceSumAggregateOutputType | null
    _min: UserBalanceMinAggregateOutputType | null
    _max: UserBalanceMaxAggregateOutputType | null
  }

  export type UserBalanceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type UserBalanceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type UserBalanceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type UserBalanceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type UserBalanceCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    locked: number
    _all: number
  }


  export type UserBalanceAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type UserBalanceSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type UserBalanceMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type UserBalanceMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type UserBalanceCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
    _all?: true
  }

  export type UserBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBalance to aggregate.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBalances
    **/
    _count?: true | UserBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBalanceMaxAggregateInputType
  }

  export type GetUserBalanceAggregateType<T extends UserBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBalance[P]>
      : GetScalarType<T[P], AggregateUserBalance[P]>
  }




  export type UserBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBalanceWhereInput
    orderBy?: UserBalanceOrderByWithAggregationInput | UserBalanceOrderByWithAggregationInput[]
    by: UserBalanceScalarFieldEnum[] | UserBalanceScalarFieldEnum
    having?: UserBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBalanceCountAggregateInputType | true
    _avg?: UserBalanceAvgAggregateInputType
    _sum?: UserBalanceSumAggregateInputType
    _min?: UserBalanceMinAggregateInputType
    _max?: UserBalanceMaxAggregateInputType
  }

  export type UserBalanceGroupByOutputType = {
    id: number
    userId: number
    amount: number
    locked: number
    _count: UserBalanceCountAggregateOutputType | null
    _avg: UserBalanceAvgAggregateOutputType | null
    _sum: UserBalanceSumAggregateOutputType | null
    _min: UserBalanceMinAggregateOutputType | null
    _max: UserBalanceMaxAggregateOutputType | null
  }

  type GetUserBalanceGroupByPayload<T extends UserBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], UserBalanceGroupByOutputType[P]>
        }
      >
    >


  export type UserBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBalance"]>

  export type UserBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBalance"]>

  export type UserBalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBalance"]>

  export type UserBalanceSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
  }

  export type UserBalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "locked", ExtArgs["result"]["userBalance"]>
  export type UserBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserBalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBalance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: number
      locked: number
    }, ExtArgs["result"]["userBalance"]>
    composites: {}
  }

  type UserBalanceGetPayload<S extends boolean | null | undefined | UserBalanceDefaultArgs> = $Result.GetResult<Prisma.$UserBalancePayload, S>

  type UserBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBalanceCountAggregateInputType | true
    }

  export interface UserBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBalance'], meta: { name: 'UserBalance' } }
    /**
     * Find zero or one UserBalance that matches the filter.
     * @param {UserBalanceFindUniqueArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBalanceFindUniqueArgs>(args: SelectSubset<T, UserBalanceFindUniqueArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBalanceFindUniqueOrThrowArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceFindFirstArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBalanceFindFirstArgs>(args?: SelectSubset<T, UserBalanceFindFirstArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceFindFirstOrThrowArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBalances
     * const userBalances = await prisma.userBalance.findMany()
     * 
     * // Get first 10 UserBalances
     * const userBalances = await prisma.userBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBalanceWithIdOnly = await prisma.userBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBalanceFindManyArgs>(args?: SelectSubset<T, UserBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBalance.
     * @param {UserBalanceCreateArgs} args - Arguments to create a UserBalance.
     * @example
     * // Create one UserBalance
     * const UserBalance = await prisma.userBalance.create({
     *   data: {
     *     // ... data to create a UserBalance
     *   }
     * })
     * 
     */
    create<T extends UserBalanceCreateArgs>(args: SelectSubset<T, UserBalanceCreateArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBalances.
     * @param {UserBalanceCreateManyArgs} args - Arguments to create many UserBalances.
     * @example
     * // Create many UserBalances
     * const userBalance = await prisma.userBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBalanceCreateManyArgs>(args?: SelectSubset<T, UserBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBalances and returns the data saved in the database.
     * @param {UserBalanceCreateManyAndReturnArgs} args - Arguments to create many UserBalances.
     * @example
     * // Create many UserBalances
     * const userBalance = await prisma.userBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBalances and only return the `id`
     * const userBalanceWithIdOnly = await prisma.userBalance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBalance.
     * @param {UserBalanceDeleteArgs} args - Arguments to delete one UserBalance.
     * @example
     * // Delete one UserBalance
     * const UserBalance = await prisma.userBalance.delete({
     *   where: {
     *     // ... filter to delete one UserBalance
     *   }
     * })
     * 
     */
    delete<T extends UserBalanceDeleteArgs>(args: SelectSubset<T, UserBalanceDeleteArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBalance.
     * @param {UserBalanceUpdateArgs} args - Arguments to update one UserBalance.
     * @example
     * // Update one UserBalance
     * const userBalance = await prisma.userBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBalanceUpdateArgs>(args: SelectSubset<T, UserBalanceUpdateArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBalances.
     * @param {UserBalanceDeleteManyArgs} args - Arguments to filter UserBalances to delete.
     * @example
     * // Delete a few UserBalances
     * const { count } = await prisma.userBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBalanceDeleteManyArgs>(args?: SelectSubset<T, UserBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBalances
     * const userBalance = await prisma.userBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBalanceUpdateManyArgs>(args: SelectSubset<T, UserBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBalances and returns the data updated in the database.
     * @param {UserBalanceUpdateManyAndReturnArgs} args - Arguments to update many UserBalances.
     * @example
     * // Update many UserBalances
     * const userBalance = await prisma.userBalance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBalances and only return the `id`
     * const userBalanceWithIdOnly = await prisma.userBalance.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserBalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBalance.
     * @param {UserBalanceUpsertArgs} args - Arguments to update or create a UserBalance.
     * @example
     * // Update or create a UserBalance
     * const userBalance = await prisma.userBalance.upsert({
     *   create: {
     *     // ... data to create a UserBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBalance we want to update
     *   }
     * })
     */
    upsert<T extends UserBalanceUpsertArgs>(args: SelectSubset<T, UserBalanceUpsertArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceCountArgs} args - Arguments to filter UserBalances to count.
     * @example
     * // Count the number of UserBalances
     * const count = await prisma.userBalance.count({
     *   where: {
     *     // ... the filter for the UserBalances we want to count
     *   }
     * })
    **/
    count<T extends UserBalanceCountArgs>(
      args?: Subset<T, UserBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBalanceAggregateArgs>(args: Subset<T, UserBalanceAggregateArgs>): Prisma.PrismaPromise<GetUserBalanceAggregateType<T>>

    /**
     * Group by UserBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceGroupByArgs} args - Group by arguments.
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
      T extends UserBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBalanceGroupByArgs['orderBy'] }
        : { orderBy?: UserBalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBalance model
   */
  readonly fields: UserBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserBalance model
   */
  interface UserBalanceFieldRefs {
    readonly id: FieldRef<"UserBalance", 'Int'>
    readonly userId: FieldRef<"UserBalance", 'Int'>
    readonly amount: FieldRef<"UserBalance", 'Int'>
    readonly locked: FieldRef<"UserBalance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserBalance findUnique
   */
  export type UserBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceInclude<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance findUniqueOrThrow
   */
  export type UserBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceInclude<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance findFirst
   */
  export type UserBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceInclude<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBalances.
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBalances.
     */
    distinct?: UserBalanceScalarFieldEnum | UserBalanceScalarFieldEnum[]
  }

  /**
   * UserBalance findFirstOrThrow
   */
  export type UserBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceInclude<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBalances.
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBalances.
     */
    distinct?: UserBalanceScalarFieldEnum | UserBalanceScalarFieldEnum[]
  }

  /**
   * UserBalance findMany
   */
  export type UserBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceInclude<ExtArgs> | null
    /**
     * Filter, which UserBalances to fetch.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBalances.
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    distinct?: UserBalanceScalarFieldEnum | UserBalanceScalarFieldEnum[]
  }

  /**
   * UserBalance create
   */
  export type UserBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBalance.
     */
    data: XOR<UserBalanceCreateInput, UserBalanceUncheckedCreateInput>
  }

  /**
   * UserBalance createMany
   */
  export type UserBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBalances.
     */
    data: UserBalanceCreateManyInput | UserBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBalance createManyAndReturn
   */
  export type UserBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * The data used to create many UserBalances.
     */
    data: UserBalanceCreateManyInput | UserBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBalance update
   */
  export type UserBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBalance.
     */
    data: XOR<UserBalanceUpdateInput, UserBalanceUncheckedUpdateInput>
    /**
     * Choose, which UserBalance to update.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance updateMany
   */
  export type UserBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBalances.
     */
    data: XOR<UserBalanceUpdateManyMutationInput, UserBalanceUncheckedUpdateManyInput>
    /**
     * Filter which UserBalances to update
     */
    where?: UserBalanceWhereInput
    /**
     * Limit how many UserBalances to update.
     */
    limit?: number
  }

  /**
   * UserBalance updateManyAndReturn
   */
  export type UserBalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * The data used to update UserBalances.
     */
    data: XOR<UserBalanceUpdateManyMutationInput, UserBalanceUncheckedUpdateManyInput>
    /**
     * Filter which UserBalances to update
     */
    where?: UserBalanceWhereInput
    /**
     * Limit how many UserBalances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBalance upsert
   */
  export type UserBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBalance to update in case it exists.
     */
    where: UserBalanceWhereUniqueInput
    /**
     * In case the UserBalance found by the `where` argument doesn't exist, create a new UserBalance with this data.
     */
    create: XOR<UserBalanceCreateInput, UserBalanceUncheckedCreateInput>
    /**
     * In case the UserBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBalanceUpdateInput, UserBalanceUncheckedUpdateInput>
  }

  /**
   * UserBalance delete
   */
  export type UserBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceInclude<ExtArgs> | null
    /**
     * Filter which UserBalance to delete.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance deleteMany
   */
  export type UserBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBalances to delete
     */
    where?: UserBalanceWhereInput
    /**
     * Limit how many UserBalances to delete.
     */
    limit?: number
  }

  /**
   * UserBalance without action
   */
  export type UserBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBalance
     */
    omit?: UserBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBalanceInclude<ExtArgs> | null
  }


  /**
   * Model MerchantBalance
   */

  export type AggregateMerchantBalance = {
    _count: MerchantBalanceCountAggregateOutputType | null
    _avg: MerchantBalanceAvgAggregateOutputType | null
    _sum: MerchantBalanceSumAggregateOutputType | null
    _min: MerchantBalanceMinAggregateOutputType | null
    _max: MerchantBalanceMaxAggregateOutputType | null
  }

  export type MerchantBalanceAvgAggregateOutputType = {
    id: number | null
    merchantId: number | null
    amount: number | null
    locked: number | null
  }

  export type MerchantBalanceSumAggregateOutputType = {
    id: number | null
    merchantId: number | null
    amount: number | null
    locked: number | null
  }

  export type MerchantBalanceMinAggregateOutputType = {
    id: number | null
    merchantId: number | null
    amount: number | null
    locked: number | null
  }

  export type MerchantBalanceMaxAggregateOutputType = {
    id: number | null
    merchantId: number | null
    amount: number | null
    locked: number | null
  }

  export type MerchantBalanceCountAggregateOutputType = {
    id: number
    merchantId: number
    amount: number
    locked: number
    _all: number
  }


  export type MerchantBalanceAvgAggregateInputType = {
    id?: true
    merchantId?: true
    amount?: true
    locked?: true
  }

  export type MerchantBalanceSumAggregateInputType = {
    id?: true
    merchantId?: true
    amount?: true
    locked?: true
  }

  export type MerchantBalanceMinAggregateInputType = {
    id?: true
    merchantId?: true
    amount?: true
    locked?: true
  }

  export type MerchantBalanceMaxAggregateInputType = {
    id?: true
    merchantId?: true
    amount?: true
    locked?: true
  }

  export type MerchantBalanceCountAggregateInputType = {
    id?: true
    merchantId?: true
    amount?: true
    locked?: true
    _all?: true
  }

  export type MerchantBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerchantBalance to aggregate.
     */
    where?: MerchantBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantBalances to fetch.
     */
    orderBy?: MerchantBalanceOrderByWithRelationInput | MerchantBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MerchantBalances
    **/
    _count?: true | MerchantBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerchantBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerchantBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantBalanceMaxAggregateInputType
  }

  export type GetMerchantBalanceAggregateType<T extends MerchantBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchantBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchantBalance[P]>
      : GetScalarType<T[P], AggregateMerchantBalance[P]>
  }




  export type MerchantBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantBalanceWhereInput
    orderBy?: MerchantBalanceOrderByWithAggregationInput | MerchantBalanceOrderByWithAggregationInput[]
    by: MerchantBalanceScalarFieldEnum[] | MerchantBalanceScalarFieldEnum
    having?: MerchantBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantBalanceCountAggregateInputType | true
    _avg?: MerchantBalanceAvgAggregateInputType
    _sum?: MerchantBalanceSumAggregateInputType
    _min?: MerchantBalanceMinAggregateInputType
    _max?: MerchantBalanceMaxAggregateInputType
  }

  export type MerchantBalanceGroupByOutputType = {
    id: number
    merchantId: number
    amount: number
    locked: number
    _count: MerchantBalanceCountAggregateOutputType | null
    _avg: MerchantBalanceAvgAggregateOutputType | null
    _sum: MerchantBalanceSumAggregateOutputType | null
    _min: MerchantBalanceMinAggregateOutputType | null
    _max: MerchantBalanceMaxAggregateOutputType | null
  }

  type GetMerchantBalanceGroupByPayload<T extends MerchantBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantBalanceGroupByOutputType[P]>
        }
      >
    >


  export type MerchantBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    amount?: boolean
    locked?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchantBalance"]>

  export type MerchantBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    amount?: boolean
    locked?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchantBalance"]>

  export type MerchantBalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    amount?: boolean
    locked?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchantBalance"]>

  export type MerchantBalanceSelectScalar = {
    id?: boolean
    merchantId?: boolean
    amount?: boolean
    locked?: boolean
  }

  export type MerchantBalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "merchantId" | "amount" | "locked", ExtArgs["result"]["merchantBalance"]>
  export type MerchantBalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type MerchantBalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type MerchantBalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $MerchantBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MerchantBalance"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      merchantId: number
      amount: number
      locked: number
    }, ExtArgs["result"]["merchantBalance"]>
    composites: {}
  }

  type MerchantBalanceGetPayload<S extends boolean | null | undefined | MerchantBalanceDefaultArgs> = $Result.GetResult<Prisma.$MerchantBalancePayload, S>

  type MerchantBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MerchantBalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MerchantBalanceCountAggregateInputType | true
    }

  export interface MerchantBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MerchantBalance'], meta: { name: 'MerchantBalance' } }
    /**
     * Find zero or one MerchantBalance that matches the filter.
     * @param {MerchantBalanceFindUniqueArgs} args - Arguments to find a MerchantBalance
     * @example
     * // Get one MerchantBalance
     * const merchantBalance = await prisma.merchantBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantBalanceFindUniqueArgs>(args: SelectSubset<T, MerchantBalanceFindUniqueArgs<ExtArgs>>): Prisma__MerchantBalanceClient<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MerchantBalance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MerchantBalanceFindUniqueOrThrowArgs} args - Arguments to find a MerchantBalance
     * @example
     * // Get one MerchantBalance
     * const merchantBalance = await prisma.merchantBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantBalanceClient<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MerchantBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantBalanceFindFirstArgs} args - Arguments to find a MerchantBalance
     * @example
     * // Get one MerchantBalance
     * const merchantBalance = await prisma.merchantBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantBalanceFindFirstArgs>(args?: SelectSubset<T, MerchantBalanceFindFirstArgs<ExtArgs>>): Prisma__MerchantBalanceClient<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MerchantBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantBalanceFindFirstOrThrowArgs} args - Arguments to find a MerchantBalance
     * @example
     * // Get one MerchantBalance
     * const merchantBalance = await prisma.merchantBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantBalanceClient<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MerchantBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MerchantBalances
     * const merchantBalances = await prisma.merchantBalance.findMany()
     * 
     * // Get first 10 MerchantBalances
     * const merchantBalances = await prisma.merchantBalance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantBalanceWithIdOnly = await prisma.merchantBalance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantBalanceFindManyArgs>(args?: SelectSubset<T, MerchantBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MerchantBalance.
     * @param {MerchantBalanceCreateArgs} args - Arguments to create a MerchantBalance.
     * @example
     * // Create one MerchantBalance
     * const MerchantBalance = await prisma.merchantBalance.create({
     *   data: {
     *     // ... data to create a MerchantBalance
     *   }
     * })
     * 
     */
    create<T extends MerchantBalanceCreateArgs>(args: SelectSubset<T, MerchantBalanceCreateArgs<ExtArgs>>): Prisma__MerchantBalanceClient<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MerchantBalances.
     * @param {MerchantBalanceCreateManyArgs} args - Arguments to create many MerchantBalances.
     * @example
     * // Create many MerchantBalances
     * const merchantBalance = await prisma.merchantBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantBalanceCreateManyArgs>(args?: SelectSubset<T, MerchantBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MerchantBalances and returns the data saved in the database.
     * @param {MerchantBalanceCreateManyAndReturnArgs} args - Arguments to create many MerchantBalances.
     * @example
     * // Create many MerchantBalances
     * const merchantBalance = await prisma.merchantBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MerchantBalances and only return the `id`
     * const merchantBalanceWithIdOnly = await prisma.merchantBalance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MerchantBalance.
     * @param {MerchantBalanceDeleteArgs} args - Arguments to delete one MerchantBalance.
     * @example
     * // Delete one MerchantBalance
     * const MerchantBalance = await prisma.merchantBalance.delete({
     *   where: {
     *     // ... filter to delete one MerchantBalance
     *   }
     * })
     * 
     */
    delete<T extends MerchantBalanceDeleteArgs>(args: SelectSubset<T, MerchantBalanceDeleteArgs<ExtArgs>>): Prisma__MerchantBalanceClient<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MerchantBalance.
     * @param {MerchantBalanceUpdateArgs} args - Arguments to update one MerchantBalance.
     * @example
     * // Update one MerchantBalance
     * const merchantBalance = await prisma.merchantBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantBalanceUpdateArgs>(args: SelectSubset<T, MerchantBalanceUpdateArgs<ExtArgs>>): Prisma__MerchantBalanceClient<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MerchantBalances.
     * @param {MerchantBalanceDeleteManyArgs} args - Arguments to filter MerchantBalances to delete.
     * @example
     * // Delete a few MerchantBalances
     * const { count } = await prisma.merchantBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantBalanceDeleteManyArgs>(args?: SelectSubset<T, MerchantBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MerchantBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MerchantBalances
     * const merchantBalance = await prisma.merchantBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantBalanceUpdateManyArgs>(args: SelectSubset<T, MerchantBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MerchantBalances and returns the data updated in the database.
     * @param {MerchantBalanceUpdateManyAndReturnArgs} args - Arguments to update many MerchantBalances.
     * @example
     * // Update many MerchantBalances
     * const merchantBalance = await prisma.merchantBalance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MerchantBalances and only return the `id`
     * const merchantBalanceWithIdOnly = await prisma.merchantBalance.updateManyAndReturn({
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
    updateManyAndReturn<T extends MerchantBalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, MerchantBalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MerchantBalance.
     * @param {MerchantBalanceUpsertArgs} args - Arguments to update or create a MerchantBalance.
     * @example
     * // Update or create a MerchantBalance
     * const merchantBalance = await prisma.merchantBalance.upsert({
     *   create: {
     *     // ... data to create a MerchantBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MerchantBalance we want to update
     *   }
     * })
     */
    upsert<T extends MerchantBalanceUpsertArgs>(args: SelectSubset<T, MerchantBalanceUpsertArgs<ExtArgs>>): Prisma__MerchantBalanceClient<$Result.GetResult<Prisma.$MerchantBalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MerchantBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantBalanceCountArgs} args - Arguments to filter MerchantBalances to count.
     * @example
     * // Count the number of MerchantBalances
     * const count = await prisma.merchantBalance.count({
     *   where: {
     *     // ... the filter for the MerchantBalances we want to count
     *   }
     * })
    **/
    count<T extends MerchantBalanceCountArgs>(
      args?: Subset<T, MerchantBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MerchantBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MerchantBalanceAggregateArgs>(args: Subset<T, MerchantBalanceAggregateArgs>): Prisma.PrismaPromise<GetMerchantBalanceAggregateType<T>>

    /**
     * Group by MerchantBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantBalanceGroupByArgs} args - Group by arguments.
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
      T extends MerchantBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantBalanceGroupByArgs['orderBy'] }
        : { orderBy?: MerchantBalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MerchantBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MerchantBalance model
   */
  readonly fields: MerchantBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MerchantBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MerchantBalance model
   */
  interface MerchantBalanceFieldRefs {
    readonly id: FieldRef<"MerchantBalance", 'Int'>
    readonly merchantId: FieldRef<"MerchantBalance", 'Int'>
    readonly amount: FieldRef<"MerchantBalance", 'Int'>
    readonly locked: FieldRef<"MerchantBalance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MerchantBalance findUnique
   */
  export type MerchantBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceInclude<ExtArgs> | null
    /**
     * Filter, which MerchantBalance to fetch.
     */
    where: MerchantBalanceWhereUniqueInput
  }

  /**
   * MerchantBalance findUniqueOrThrow
   */
  export type MerchantBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceInclude<ExtArgs> | null
    /**
     * Filter, which MerchantBalance to fetch.
     */
    where: MerchantBalanceWhereUniqueInput
  }

  /**
   * MerchantBalance findFirst
   */
  export type MerchantBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceInclude<ExtArgs> | null
    /**
     * Filter, which MerchantBalance to fetch.
     */
    where?: MerchantBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantBalances to fetch.
     */
    orderBy?: MerchantBalanceOrderByWithRelationInput | MerchantBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerchantBalances.
     */
    cursor?: MerchantBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerchantBalances.
     */
    distinct?: MerchantBalanceScalarFieldEnum | MerchantBalanceScalarFieldEnum[]
  }

  /**
   * MerchantBalance findFirstOrThrow
   */
  export type MerchantBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceInclude<ExtArgs> | null
    /**
     * Filter, which MerchantBalance to fetch.
     */
    where?: MerchantBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantBalances to fetch.
     */
    orderBy?: MerchantBalanceOrderByWithRelationInput | MerchantBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerchantBalances.
     */
    cursor?: MerchantBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerchantBalances.
     */
    distinct?: MerchantBalanceScalarFieldEnum | MerchantBalanceScalarFieldEnum[]
  }

  /**
   * MerchantBalance findMany
   */
  export type MerchantBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceInclude<ExtArgs> | null
    /**
     * Filter, which MerchantBalances to fetch.
     */
    where?: MerchantBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchantBalances to fetch.
     */
    orderBy?: MerchantBalanceOrderByWithRelationInput | MerchantBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MerchantBalances.
     */
    cursor?: MerchantBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchantBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchantBalances.
     */
    skip?: number
    distinct?: MerchantBalanceScalarFieldEnum | MerchantBalanceScalarFieldEnum[]
  }

  /**
   * MerchantBalance create
   */
  export type MerchantBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a MerchantBalance.
     */
    data: XOR<MerchantBalanceCreateInput, MerchantBalanceUncheckedCreateInput>
  }

  /**
   * MerchantBalance createMany
   */
  export type MerchantBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MerchantBalances.
     */
    data: MerchantBalanceCreateManyInput | MerchantBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MerchantBalance createManyAndReturn
   */
  export type MerchantBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * The data used to create many MerchantBalances.
     */
    data: MerchantBalanceCreateManyInput | MerchantBalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MerchantBalance update
   */
  export type MerchantBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a MerchantBalance.
     */
    data: XOR<MerchantBalanceUpdateInput, MerchantBalanceUncheckedUpdateInput>
    /**
     * Choose, which MerchantBalance to update.
     */
    where: MerchantBalanceWhereUniqueInput
  }

  /**
   * MerchantBalance updateMany
   */
  export type MerchantBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MerchantBalances.
     */
    data: XOR<MerchantBalanceUpdateManyMutationInput, MerchantBalanceUncheckedUpdateManyInput>
    /**
     * Filter which MerchantBalances to update
     */
    where?: MerchantBalanceWhereInput
    /**
     * Limit how many MerchantBalances to update.
     */
    limit?: number
  }

  /**
   * MerchantBalance updateManyAndReturn
   */
  export type MerchantBalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * The data used to update MerchantBalances.
     */
    data: XOR<MerchantBalanceUpdateManyMutationInput, MerchantBalanceUncheckedUpdateManyInput>
    /**
     * Filter which MerchantBalances to update
     */
    where?: MerchantBalanceWhereInput
    /**
     * Limit how many MerchantBalances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MerchantBalance upsert
   */
  export type MerchantBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the MerchantBalance to update in case it exists.
     */
    where: MerchantBalanceWhereUniqueInput
    /**
     * In case the MerchantBalance found by the `where` argument doesn't exist, create a new MerchantBalance with this data.
     */
    create: XOR<MerchantBalanceCreateInput, MerchantBalanceUncheckedCreateInput>
    /**
     * In case the MerchantBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantBalanceUpdateInput, MerchantBalanceUncheckedUpdateInput>
  }

  /**
   * MerchantBalance delete
   */
  export type MerchantBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceInclude<ExtArgs> | null
    /**
     * Filter which MerchantBalance to delete.
     */
    where: MerchantBalanceWhereUniqueInput
  }

  /**
   * MerchantBalance deleteMany
   */
  export type MerchantBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerchantBalances to delete
     */
    where?: MerchantBalanceWhereInput
    /**
     * Limit how many MerchantBalances to delete.
     */
    limit?: number
  }

  /**
   * MerchantBalance without action
   */
  export type MerchantBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantBalance
     */
    select?: MerchantBalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchantBalance
     */
    omit?: MerchantBalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantBalanceInclude<ExtArgs> | null
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
    name: 'name',
    number: 'number',
    password: 'password',
    upiId: 'upiId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MerchantScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    number: 'number',
    upiId: 'upiId',
    auth_type: 'auth_type'
  };

  export type MerchantScalarFieldEnum = (typeof MerchantScalarFieldEnum)[keyof typeof MerchantScalarFieldEnum]


  export const OnRampTransactionScalarFieldEnum: {
    id: 'id',
    status: 'status',
    token: 'token',
    provider: 'provider',
    amount: 'amount',
    startTime: 'startTime',
    userId: 'userId'
  };

  export type OnRampTransactionScalarFieldEnum = (typeof OnRampTransactionScalarFieldEnum)[keyof typeof OnRampTransactionScalarFieldEnum]


  export const P2pTransferScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    timestamp: 'timestamp',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    toMerchantId: 'toMerchantId'
  };

  export type P2pTransferScalarFieldEnum = (typeof P2pTransferScalarFieldEnum)[keyof typeof P2pTransferScalarFieldEnum]


  export const UserBalanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    locked: 'locked'
  };

  export type UserBalanceScalarFieldEnum = (typeof UserBalanceScalarFieldEnum)[keyof typeof UserBalanceScalarFieldEnum]


  export const MerchantBalanceScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    amount: 'amount',
    locked: 'locked'
  };

  export type MerchantBalanceScalarFieldEnum = (typeof MerchantBalanceScalarFieldEnum)[keyof typeof MerchantBalanceScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'AuthType'
   */
  export type EnumAuthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthType'>
    


  /**
   * Reference to a field of type 'AuthType[]'
   */
  export type ListEnumAuthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthType[]'>
    


  /**
   * Reference to a field of type 'OnRampStatus'
   */
  export type EnumOnRampStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnRampStatus'>
    


  /**
   * Reference to a field of type 'OnRampStatus[]'
   */
  export type ListEnumOnRampStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnRampStatus[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    number?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    upiId?: StringNullableFilter<"User"> | string | null
    OnRampTransaction?: OnRampTransactionListRelationFilter
    balances?: UserBalanceListRelationFilter
    sentTransfers?: P2pTransferListRelationFilter
    receivedTransfers?: P2pTransferListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    number?: SortOrder
    password?: SortOrder
    upiId?: SortOrderInput | SortOrder
    OnRampTransaction?: OnRampTransactionOrderByRelationAggregateInput
    balances?: UserBalanceOrderByRelationAggregateInput
    sentTransfers?: P2pTransferOrderByRelationAggregateInput
    receivedTransfers?: P2pTransferOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    number?: string
    upiId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    OnRampTransaction?: OnRampTransactionListRelationFilter
    balances?: UserBalanceListRelationFilter
    sentTransfers?: P2pTransferListRelationFilter
    receivedTransfers?: P2pTransferListRelationFilter
  }, "id" | "email" | "number" | "upiId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    number?: SortOrder
    password?: SortOrder
    upiId?: SortOrderInput | SortOrder
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
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    number?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    upiId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type MerchantWhereInput = {
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    id?: IntFilter<"Merchant"> | number
    email?: StringFilter<"Merchant"> | string
    name?: StringNullableFilter<"Merchant"> | string | null
    number?: StringNullableFilter<"Merchant"> | string | null
    upiId?: StringNullableFilter<"Merchant"> | string | null
    auth_type?: EnumAuthTypeFilter<"Merchant"> | $Enums.AuthType
    balances?: MerchantBalanceListRelationFilter
    receivedTransfers?: P2pTransferListRelationFilter
  }

  export type MerchantOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    upiId?: SortOrderInput | SortOrder
    auth_type?: SortOrder
    balances?: MerchantBalanceOrderByRelationAggregateInput
    receivedTransfers?: P2pTransferOrderByRelationAggregateInput
  }

  export type MerchantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    number?: string
    upiId?: string
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    name?: StringNullableFilter<"Merchant"> | string | null
    auth_type?: EnumAuthTypeFilter<"Merchant"> | $Enums.AuthType
    balances?: MerchantBalanceListRelationFilter
    receivedTransfers?: P2pTransferListRelationFilter
  }, "id" | "email" | "number" | "upiId">

  export type MerchantOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    upiId?: SortOrderInput | SortOrder
    auth_type?: SortOrder
    _count?: MerchantCountOrderByAggregateInput
    _avg?: MerchantAvgOrderByAggregateInput
    _max?: MerchantMaxOrderByAggregateInput
    _min?: MerchantMinOrderByAggregateInput
    _sum?: MerchantSumOrderByAggregateInput
  }

  export type MerchantScalarWhereWithAggregatesInput = {
    AND?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    OR?: MerchantScalarWhereWithAggregatesInput[]
    NOT?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Merchant"> | number
    email?: StringWithAggregatesFilter<"Merchant"> | string
    name?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    number?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    upiId?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    auth_type?: EnumAuthTypeWithAggregatesFilter<"Merchant"> | $Enums.AuthType
  }

  export type OnRampTransactionWhereInput = {
    AND?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    OR?: OnRampTransactionWhereInput[]
    NOT?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    id?: IntFilter<"OnRampTransaction"> | number
    status?: EnumOnRampStatusFilter<"OnRampTransaction"> | $Enums.OnRampStatus
    token?: StringFilter<"OnRampTransaction"> | string
    provider?: StringFilter<"OnRampTransaction"> | string
    amount?: IntFilter<"OnRampTransaction"> | number
    startTime?: DateTimeFilter<"OnRampTransaction"> | Date | string
    userId?: IntFilter<"OnRampTransaction"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OnRampTransactionOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OnRampTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    OR?: OnRampTransactionWhereInput[]
    NOT?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    status?: EnumOnRampStatusFilter<"OnRampTransaction"> | $Enums.OnRampStatus
    provider?: StringFilter<"OnRampTransaction"> | string
    amount?: IntFilter<"OnRampTransaction"> | number
    startTime?: DateTimeFilter<"OnRampTransaction"> | Date | string
    userId?: IntFilter<"OnRampTransaction"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type OnRampTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
    _count?: OnRampTransactionCountOrderByAggregateInput
    _avg?: OnRampTransactionAvgOrderByAggregateInput
    _max?: OnRampTransactionMaxOrderByAggregateInput
    _min?: OnRampTransactionMinOrderByAggregateInput
    _sum?: OnRampTransactionSumOrderByAggregateInput
  }

  export type OnRampTransactionScalarWhereWithAggregatesInput = {
    AND?: OnRampTransactionScalarWhereWithAggregatesInput | OnRampTransactionScalarWhereWithAggregatesInput[]
    OR?: OnRampTransactionScalarWhereWithAggregatesInput[]
    NOT?: OnRampTransactionScalarWhereWithAggregatesInput | OnRampTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OnRampTransaction"> | number
    status?: EnumOnRampStatusWithAggregatesFilter<"OnRampTransaction"> | $Enums.OnRampStatus
    token?: StringWithAggregatesFilter<"OnRampTransaction"> | string
    provider?: StringWithAggregatesFilter<"OnRampTransaction"> | string
    amount?: IntWithAggregatesFilter<"OnRampTransaction"> | number
    startTime?: DateTimeWithAggregatesFilter<"OnRampTransaction"> | Date | string
    userId?: IntWithAggregatesFilter<"OnRampTransaction"> | number
  }

  export type P2pTransferWhereInput = {
    AND?: P2pTransferWhereInput | P2pTransferWhereInput[]
    OR?: P2pTransferWhereInput[]
    NOT?: P2pTransferWhereInput | P2pTransferWhereInput[]
    id?: IntFilter<"P2pTransfer"> | number
    amount?: IntFilter<"P2pTransfer"> | number
    timestamp?: DateTimeFilter<"P2pTransfer"> | Date | string
    fromUserId?: IntFilter<"P2pTransfer"> | number
    toUserId?: IntNullableFilter<"P2pTransfer"> | number | null
    toMerchantId?: IntNullableFilter<"P2pTransfer"> | number | null
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    toMerchant?: XOR<MerchantNullableScalarRelationFilter, MerchantWhereInput> | null
  }

  export type P2pTransferOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrderInput | SortOrder
    toMerchantId?: SortOrderInput | SortOrder
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
    toMerchant?: MerchantOrderByWithRelationInput
  }

  export type P2pTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: P2pTransferWhereInput | P2pTransferWhereInput[]
    OR?: P2pTransferWhereInput[]
    NOT?: P2pTransferWhereInput | P2pTransferWhereInput[]
    amount?: IntFilter<"P2pTransfer"> | number
    timestamp?: DateTimeFilter<"P2pTransfer"> | Date | string
    fromUserId?: IntFilter<"P2pTransfer"> | number
    toUserId?: IntNullableFilter<"P2pTransfer"> | number | null
    toMerchantId?: IntNullableFilter<"P2pTransfer"> | number | null
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    toMerchant?: XOR<MerchantNullableScalarRelationFilter, MerchantWhereInput> | null
  }, "id">

  export type P2pTransferOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrderInput | SortOrder
    toMerchantId?: SortOrderInput | SortOrder
    _count?: P2pTransferCountOrderByAggregateInput
    _avg?: P2pTransferAvgOrderByAggregateInput
    _max?: P2pTransferMaxOrderByAggregateInput
    _min?: P2pTransferMinOrderByAggregateInput
    _sum?: P2pTransferSumOrderByAggregateInput
  }

  export type P2pTransferScalarWhereWithAggregatesInput = {
    AND?: P2pTransferScalarWhereWithAggregatesInput | P2pTransferScalarWhereWithAggregatesInput[]
    OR?: P2pTransferScalarWhereWithAggregatesInput[]
    NOT?: P2pTransferScalarWhereWithAggregatesInput | P2pTransferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"P2pTransfer"> | number
    amount?: IntWithAggregatesFilter<"P2pTransfer"> | number
    timestamp?: DateTimeWithAggregatesFilter<"P2pTransfer"> | Date | string
    fromUserId?: IntWithAggregatesFilter<"P2pTransfer"> | number
    toUserId?: IntNullableWithAggregatesFilter<"P2pTransfer"> | number | null
    toMerchantId?: IntNullableWithAggregatesFilter<"P2pTransfer"> | number | null
  }

  export type UserBalanceWhereInput = {
    AND?: UserBalanceWhereInput | UserBalanceWhereInput[]
    OR?: UserBalanceWhereInput[]
    NOT?: UserBalanceWhereInput | UserBalanceWhereInput[]
    id?: IntFilter<"UserBalance"> | number
    userId?: IntFilter<"UserBalance"> | number
    amount?: IntFilter<"UserBalance"> | number
    locked?: IntFilter<"UserBalance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserBalanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserBalanceWhereInput | UserBalanceWhereInput[]
    OR?: UserBalanceWhereInput[]
    NOT?: UserBalanceWhereInput | UserBalanceWhereInput[]
    amount?: IntFilter<"UserBalance"> | number
    locked?: IntFilter<"UserBalance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    _count?: UserBalanceCountOrderByAggregateInput
    _avg?: UserBalanceAvgOrderByAggregateInput
    _max?: UserBalanceMaxOrderByAggregateInput
    _min?: UserBalanceMinOrderByAggregateInput
    _sum?: UserBalanceSumOrderByAggregateInput
  }

  export type UserBalanceScalarWhereWithAggregatesInput = {
    AND?: UserBalanceScalarWhereWithAggregatesInput | UserBalanceScalarWhereWithAggregatesInput[]
    OR?: UserBalanceScalarWhereWithAggregatesInput[]
    NOT?: UserBalanceScalarWhereWithAggregatesInput | UserBalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserBalance"> | number
    userId?: IntWithAggregatesFilter<"UserBalance"> | number
    amount?: IntWithAggregatesFilter<"UserBalance"> | number
    locked?: IntWithAggregatesFilter<"UserBalance"> | number
  }

  export type MerchantBalanceWhereInput = {
    AND?: MerchantBalanceWhereInput | MerchantBalanceWhereInput[]
    OR?: MerchantBalanceWhereInput[]
    NOT?: MerchantBalanceWhereInput | MerchantBalanceWhereInput[]
    id?: IntFilter<"MerchantBalance"> | number
    merchantId?: IntFilter<"MerchantBalance"> | number
    amount?: IntFilter<"MerchantBalance"> | number
    locked?: IntFilter<"MerchantBalance"> | number
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
  }

  export type MerchantBalanceOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type MerchantBalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    merchantId?: number
    AND?: MerchantBalanceWhereInput | MerchantBalanceWhereInput[]
    OR?: MerchantBalanceWhereInput[]
    NOT?: MerchantBalanceWhereInput | MerchantBalanceWhereInput[]
    amount?: IntFilter<"MerchantBalance"> | number
    locked?: IntFilter<"MerchantBalance"> | number
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
  }, "id" | "merchantId">

  export type MerchantBalanceOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    _count?: MerchantBalanceCountOrderByAggregateInput
    _avg?: MerchantBalanceAvgOrderByAggregateInput
    _max?: MerchantBalanceMaxOrderByAggregateInput
    _min?: MerchantBalanceMinOrderByAggregateInput
    _sum?: MerchantBalanceSumOrderByAggregateInput
  }

  export type MerchantBalanceScalarWhereWithAggregatesInput = {
    AND?: MerchantBalanceScalarWhereWithAggregatesInput | MerchantBalanceScalarWhereWithAggregatesInput[]
    OR?: MerchantBalanceScalarWhereWithAggregatesInput[]
    NOT?: MerchantBalanceScalarWhereWithAggregatesInput | MerchantBalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MerchantBalance"> | number
    merchantId?: IntWithAggregatesFilter<"MerchantBalance"> | number
    amount?: IntWithAggregatesFilter<"MerchantBalance"> | number
    locked?: IntWithAggregatesFilter<"MerchantBalance"> | number
  }

  export type UserCreateInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    upiId?: string | null
    OnRampTransaction?: OnRampTransactionCreateNestedManyWithoutUserInput
    balances?: UserBalanceCreateNestedManyWithoutUserInput
    sentTransfers?: P2pTransferCreateNestedManyWithoutFromUserInput
    receivedTransfers?: P2pTransferCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    upiId?: string | null
    OnRampTransaction?: OnRampTransactionUncheckedCreateNestedManyWithoutUserInput
    balances?: UserBalanceUncheckedCreateNestedManyWithoutUserInput
    sentTransfers?: P2pTransferUncheckedCreateNestedManyWithoutFromUserInput
    receivedTransfers?: P2pTransferUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    OnRampTransaction?: OnRampTransactionUpdateManyWithoutUserNestedInput
    balances?: UserBalanceUpdateManyWithoutUserNestedInput
    sentTransfers?: P2pTransferUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: P2pTransferUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    OnRampTransaction?: OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput
    balances?: UserBalanceUncheckedUpdateManyWithoutUserNestedInput
    sentTransfers?: P2pTransferUncheckedUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: P2pTransferUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    upiId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MerchantCreateInput = {
    email: string
    name?: string | null
    number?: string | null
    upiId?: string | null
    auth_type: $Enums.AuthType
    balances?: MerchantBalanceCreateNestedManyWithoutMerchantInput
    receivedTransfers?: P2pTransferCreateNestedManyWithoutToMerchantInput
  }

  export type MerchantUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    number?: string | null
    upiId?: string | null
    auth_type: $Enums.AuthType
    balances?: MerchantBalanceUncheckedCreateNestedManyWithoutMerchantInput
    receivedTransfers?: P2pTransferUncheckedCreateNestedManyWithoutToMerchantInput
  }

  export type MerchantUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    balances?: MerchantBalanceUpdateManyWithoutMerchantNestedInput
    receivedTransfers?: P2pTransferUpdateManyWithoutToMerchantNestedInput
  }

  export type MerchantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    balances?: MerchantBalanceUncheckedUpdateManyWithoutMerchantNestedInput
    receivedTransfers?: P2pTransferUncheckedUpdateManyWithoutToMerchantNestedInput
  }

  export type MerchantCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    number?: string | null
    upiId?: string | null
    auth_type: $Enums.AuthType
  }

  export type MerchantUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
  }

  export type MerchantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
  }

  export type OnRampTransactionCreateInput = {
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
    user: UserCreateNestedOneWithoutOnRampTransactionInput
  }

  export type OnRampTransactionUncheckedCreateInput = {
    id?: number
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
    userId: number
  }

  export type OnRampTransactionUpdateInput = {
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOnRampTransactionNestedInput
  }

  export type OnRampTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OnRampTransactionCreateManyInput = {
    id?: number
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
    userId: number
  }

  export type OnRampTransactionUpdateManyMutationInput = {
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnRampTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type P2pTransferCreateInput = {
    amount: number
    timestamp: Date | string
    fromUser: UserCreateNestedOneWithoutSentTransfersInput
    toUser?: UserCreateNestedOneWithoutReceivedTransfersInput
    toMerchant?: MerchantCreateNestedOneWithoutReceivedTransfersInput
  }

  export type P2pTransferUncheckedCreateInput = {
    id?: number
    amount: number
    timestamp: Date | string
    fromUserId: number
    toUserId?: number | null
    toMerchantId?: number | null
  }

  export type P2pTransferUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentTransfersNestedInput
    toUser?: UserUpdateOneWithoutReceivedTransfersNestedInput
    toMerchant?: MerchantUpdateOneWithoutReceivedTransfersNestedInput
  }

  export type P2pTransferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: NullableIntFieldUpdateOperationsInput | number | null
    toMerchantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type P2pTransferCreateManyInput = {
    id?: number
    amount: number
    timestamp: Date | string
    fromUserId: number
    toUserId?: number | null
    toMerchantId?: number | null
  }

  export type P2pTransferUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type P2pTransferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: NullableIntFieldUpdateOperationsInput | number | null
    toMerchantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserBalanceCreateInput = {
    amount?: number
    locked?: number
    user: UserCreateNestedOneWithoutBalancesInput
  }

  export type UserBalanceUncheckedCreateInput = {
    id?: number
    userId: number
    amount?: number
    locked?: number
  }

  export type UserBalanceUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type UserBalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type UserBalanceCreateManyInput = {
    id?: number
    userId: number
    amount?: number
    locked?: number
  }

  export type UserBalanceUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type UserBalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type MerchantBalanceCreateInput = {
    amount?: number
    locked?: number
    merchant: MerchantCreateNestedOneWithoutBalancesInput
  }

  export type MerchantBalanceUncheckedCreateInput = {
    id?: number
    merchantId: number
    amount?: number
    locked?: number
  }

  export type MerchantBalanceUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    merchant?: MerchantUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type MerchantBalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type MerchantBalanceCreateManyInput = {
    id?: number
    merchantId: number
    amount?: number
    locked?: number
  }

  export type MerchantBalanceUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type MerchantBalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    merchantId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
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

  export type OnRampTransactionListRelationFilter = {
    every?: OnRampTransactionWhereInput
    some?: OnRampTransactionWhereInput
    none?: OnRampTransactionWhereInput
  }

  export type UserBalanceListRelationFilter = {
    every?: UserBalanceWhereInput
    some?: UserBalanceWhereInput
    none?: UserBalanceWhereInput
  }

  export type P2pTransferListRelationFilter = {
    every?: P2pTransferWhereInput
    some?: P2pTransferWhereInput
    none?: P2pTransferWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OnRampTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type P2pTransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    upiId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    upiId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    upiId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumAuthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeFilter<$PrismaModel> | $Enums.AuthType
  }

  export type MerchantBalanceListRelationFilter = {
    every?: MerchantBalanceWhereInput
    some?: MerchantBalanceWhereInput
    none?: MerchantBalanceWhereInput
  }

  export type MerchantBalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MerchantCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    upiId?: SortOrder
    auth_type?: SortOrder
  }

  export type MerchantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MerchantMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    upiId?: SortOrder
    auth_type?: SortOrder
  }

  export type MerchantMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    upiId?: SortOrder
    auth_type?: SortOrder
  }

  export type MerchantSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAuthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthTypeFilter<$PrismaModel>
  }

  export type EnumOnRampStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusFilter<$PrismaModel> | $Enums.OnRampStatus
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OnRampTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type EnumOnRampStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusWithAggregatesFilter<$PrismaModel> | $Enums.OnRampStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOnRampStatusFilter<$PrismaModel>
    _max?: NestedEnumOnRampStatusFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MerchantNullableScalarRelationFilter = {
    is?: MerchantWhereInput | null
    isNot?: MerchantWhereInput | null
  }

  export type P2pTransferCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    toMerchantId?: SortOrder
  }

  export type P2pTransferAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    toMerchantId?: SortOrder
  }

  export type P2pTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    toMerchantId?: SortOrder
  }

  export type P2pTransferMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    toMerchantId?: SortOrder
  }

  export type P2pTransferSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    toMerchantId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type UserBalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type UserBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type UserBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type UserBalanceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type MerchantScalarRelationFilter = {
    is?: MerchantWhereInput
    isNot?: MerchantWhereInput
  }

  export type MerchantBalanceCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type MerchantBalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type MerchantBalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type MerchantBalanceMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type MerchantBalanceSumOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type OnRampTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
  }

  export type UserBalanceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBalanceCreateWithoutUserInput, UserBalanceUncheckedCreateWithoutUserInput> | UserBalanceCreateWithoutUserInput[] | UserBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBalanceCreateOrConnectWithoutUserInput | UserBalanceCreateOrConnectWithoutUserInput[]
    createMany?: UserBalanceCreateManyUserInputEnvelope
    connect?: UserBalanceWhereUniqueInput | UserBalanceWhereUniqueInput[]
  }

  export type P2pTransferCreateNestedManyWithoutFromUserInput = {
    create?: XOR<P2pTransferCreateWithoutFromUserInput, P2pTransferUncheckedCreateWithoutFromUserInput> | P2pTransferCreateWithoutFromUserInput[] | P2pTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutFromUserInput | P2pTransferCreateOrConnectWithoutFromUserInput[]
    createMany?: P2pTransferCreateManyFromUserInputEnvelope
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
  }

  export type P2pTransferCreateNestedManyWithoutToUserInput = {
    create?: XOR<P2pTransferCreateWithoutToUserInput, P2pTransferUncheckedCreateWithoutToUserInput> | P2pTransferCreateWithoutToUserInput[] | P2pTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutToUserInput | P2pTransferCreateOrConnectWithoutToUserInput[]
    createMany?: P2pTransferCreateManyToUserInputEnvelope
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
  }

  export type OnRampTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
  }

  export type UserBalanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBalanceCreateWithoutUserInput, UserBalanceUncheckedCreateWithoutUserInput> | UserBalanceCreateWithoutUserInput[] | UserBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBalanceCreateOrConnectWithoutUserInput | UserBalanceCreateOrConnectWithoutUserInput[]
    createMany?: UserBalanceCreateManyUserInputEnvelope
    connect?: UserBalanceWhereUniqueInput | UserBalanceWhereUniqueInput[]
  }

  export type P2pTransferUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<P2pTransferCreateWithoutFromUserInput, P2pTransferUncheckedCreateWithoutFromUserInput> | P2pTransferCreateWithoutFromUserInput[] | P2pTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutFromUserInput | P2pTransferCreateOrConnectWithoutFromUserInput[]
    createMany?: P2pTransferCreateManyFromUserInputEnvelope
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
  }

  export type P2pTransferUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<P2pTransferCreateWithoutToUserInput, P2pTransferUncheckedCreateWithoutToUserInput> | P2pTransferCreateWithoutToUserInput[] | P2pTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutToUserInput | P2pTransferCreateOrConnectWithoutToUserInput[]
    createMany?: P2pTransferCreateManyToUserInputEnvelope
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type OnRampTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    upsert?: OnRampTransactionUpsertWithWhereUniqueWithoutUserInput | OnRampTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    set?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    disconnect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    delete?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    update?: OnRampTransactionUpdateWithWhereUniqueWithoutUserInput | OnRampTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OnRampTransactionUpdateManyWithWhereWithoutUserInput | OnRampTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
  }

  export type UserBalanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBalanceCreateWithoutUserInput, UserBalanceUncheckedCreateWithoutUserInput> | UserBalanceCreateWithoutUserInput[] | UserBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBalanceCreateOrConnectWithoutUserInput | UserBalanceCreateOrConnectWithoutUserInput[]
    upsert?: UserBalanceUpsertWithWhereUniqueWithoutUserInput | UserBalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBalanceCreateManyUserInputEnvelope
    set?: UserBalanceWhereUniqueInput | UserBalanceWhereUniqueInput[]
    disconnect?: UserBalanceWhereUniqueInput | UserBalanceWhereUniqueInput[]
    delete?: UserBalanceWhereUniqueInput | UserBalanceWhereUniqueInput[]
    connect?: UserBalanceWhereUniqueInput | UserBalanceWhereUniqueInput[]
    update?: UserBalanceUpdateWithWhereUniqueWithoutUserInput | UserBalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBalanceUpdateManyWithWhereWithoutUserInput | UserBalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBalanceScalarWhereInput | UserBalanceScalarWhereInput[]
  }

  export type P2pTransferUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<P2pTransferCreateWithoutFromUserInput, P2pTransferUncheckedCreateWithoutFromUserInput> | P2pTransferCreateWithoutFromUserInput[] | P2pTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutFromUserInput | P2pTransferCreateOrConnectWithoutFromUserInput[]
    upsert?: P2pTransferUpsertWithWhereUniqueWithoutFromUserInput | P2pTransferUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: P2pTransferCreateManyFromUserInputEnvelope
    set?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    disconnect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    delete?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    update?: P2pTransferUpdateWithWhereUniqueWithoutFromUserInput | P2pTransferUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: P2pTransferUpdateManyWithWhereWithoutFromUserInput | P2pTransferUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: P2pTransferScalarWhereInput | P2pTransferScalarWhereInput[]
  }

  export type P2pTransferUpdateManyWithoutToUserNestedInput = {
    create?: XOR<P2pTransferCreateWithoutToUserInput, P2pTransferUncheckedCreateWithoutToUserInput> | P2pTransferCreateWithoutToUserInput[] | P2pTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutToUserInput | P2pTransferCreateOrConnectWithoutToUserInput[]
    upsert?: P2pTransferUpsertWithWhereUniqueWithoutToUserInput | P2pTransferUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: P2pTransferCreateManyToUserInputEnvelope
    set?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    disconnect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    delete?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    update?: P2pTransferUpdateWithWhereUniqueWithoutToUserInput | P2pTransferUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: P2pTransferUpdateManyWithWhereWithoutToUserInput | P2pTransferUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: P2pTransferScalarWhereInput | P2pTransferScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    upsert?: OnRampTransactionUpsertWithWhereUniqueWithoutUserInput | OnRampTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    set?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    disconnect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    delete?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    update?: OnRampTransactionUpdateWithWhereUniqueWithoutUserInput | OnRampTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OnRampTransactionUpdateManyWithWhereWithoutUserInput | OnRampTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
  }

  export type UserBalanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBalanceCreateWithoutUserInput, UserBalanceUncheckedCreateWithoutUserInput> | UserBalanceCreateWithoutUserInput[] | UserBalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBalanceCreateOrConnectWithoutUserInput | UserBalanceCreateOrConnectWithoutUserInput[]
    upsert?: UserBalanceUpsertWithWhereUniqueWithoutUserInput | UserBalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBalanceCreateManyUserInputEnvelope
    set?: UserBalanceWhereUniqueInput | UserBalanceWhereUniqueInput[]
    disconnect?: UserBalanceWhereUniqueInput | UserBalanceWhereUniqueInput[]
    delete?: UserBalanceWhereUniqueInput | UserBalanceWhereUniqueInput[]
    connect?: UserBalanceWhereUniqueInput | UserBalanceWhereUniqueInput[]
    update?: UserBalanceUpdateWithWhereUniqueWithoutUserInput | UserBalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBalanceUpdateManyWithWhereWithoutUserInput | UserBalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBalanceScalarWhereInput | UserBalanceScalarWhereInput[]
  }

  export type P2pTransferUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<P2pTransferCreateWithoutFromUserInput, P2pTransferUncheckedCreateWithoutFromUserInput> | P2pTransferCreateWithoutFromUserInput[] | P2pTransferUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutFromUserInput | P2pTransferCreateOrConnectWithoutFromUserInput[]
    upsert?: P2pTransferUpsertWithWhereUniqueWithoutFromUserInput | P2pTransferUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: P2pTransferCreateManyFromUserInputEnvelope
    set?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    disconnect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    delete?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    update?: P2pTransferUpdateWithWhereUniqueWithoutFromUserInput | P2pTransferUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: P2pTransferUpdateManyWithWhereWithoutFromUserInput | P2pTransferUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: P2pTransferScalarWhereInput | P2pTransferScalarWhereInput[]
  }

  export type P2pTransferUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<P2pTransferCreateWithoutToUserInput, P2pTransferUncheckedCreateWithoutToUserInput> | P2pTransferCreateWithoutToUserInput[] | P2pTransferUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutToUserInput | P2pTransferCreateOrConnectWithoutToUserInput[]
    upsert?: P2pTransferUpsertWithWhereUniqueWithoutToUserInput | P2pTransferUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: P2pTransferCreateManyToUserInputEnvelope
    set?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    disconnect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    delete?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    update?: P2pTransferUpdateWithWhereUniqueWithoutToUserInput | P2pTransferUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: P2pTransferUpdateManyWithWhereWithoutToUserInput | P2pTransferUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: P2pTransferScalarWhereInput | P2pTransferScalarWhereInput[]
  }

  export type MerchantBalanceCreateNestedManyWithoutMerchantInput = {
    create?: XOR<MerchantBalanceCreateWithoutMerchantInput, MerchantBalanceUncheckedCreateWithoutMerchantInput> | MerchantBalanceCreateWithoutMerchantInput[] | MerchantBalanceUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: MerchantBalanceCreateOrConnectWithoutMerchantInput | MerchantBalanceCreateOrConnectWithoutMerchantInput[]
    createMany?: MerchantBalanceCreateManyMerchantInputEnvelope
    connect?: MerchantBalanceWhereUniqueInput | MerchantBalanceWhereUniqueInput[]
  }

  export type P2pTransferCreateNestedManyWithoutToMerchantInput = {
    create?: XOR<P2pTransferCreateWithoutToMerchantInput, P2pTransferUncheckedCreateWithoutToMerchantInput> | P2pTransferCreateWithoutToMerchantInput[] | P2pTransferUncheckedCreateWithoutToMerchantInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutToMerchantInput | P2pTransferCreateOrConnectWithoutToMerchantInput[]
    createMany?: P2pTransferCreateManyToMerchantInputEnvelope
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
  }

  export type MerchantBalanceUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<MerchantBalanceCreateWithoutMerchantInput, MerchantBalanceUncheckedCreateWithoutMerchantInput> | MerchantBalanceCreateWithoutMerchantInput[] | MerchantBalanceUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: MerchantBalanceCreateOrConnectWithoutMerchantInput | MerchantBalanceCreateOrConnectWithoutMerchantInput[]
    createMany?: MerchantBalanceCreateManyMerchantInputEnvelope
    connect?: MerchantBalanceWhereUniqueInput | MerchantBalanceWhereUniqueInput[]
  }

  export type P2pTransferUncheckedCreateNestedManyWithoutToMerchantInput = {
    create?: XOR<P2pTransferCreateWithoutToMerchantInput, P2pTransferUncheckedCreateWithoutToMerchantInput> | P2pTransferCreateWithoutToMerchantInput[] | P2pTransferUncheckedCreateWithoutToMerchantInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutToMerchantInput | P2pTransferCreateOrConnectWithoutToMerchantInput[]
    createMany?: P2pTransferCreateManyToMerchantInputEnvelope
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
  }

  export type EnumAuthTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuthType
  }

  export type MerchantBalanceUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<MerchantBalanceCreateWithoutMerchantInput, MerchantBalanceUncheckedCreateWithoutMerchantInput> | MerchantBalanceCreateWithoutMerchantInput[] | MerchantBalanceUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: MerchantBalanceCreateOrConnectWithoutMerchantInput | MerchantBalanceCreateOrConnectWithoutMerchantInput[]
    upsert?: MerchantBalanceUpsertWithWhereUniqueWithoutMerchantInput | MerchantBalanceUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: MerchantBalanceCreateManyMerchantInputEnvelope
    set?: MerchantBalanceWhereUniqueInput | MerchantBalanceWhereUniqueInput[]
    disconnect?: MerchantBalanceWhereUniqueInput | MerchantBalanceWhereUniqueInput[]
    delete?: MerchantBalanceWhereUniqueInput | MerchantBalanceWhereUniqueInput[]
    connect?: MerchantBalanceWhereUniqueInput | MerchantBalanceWhereUniqueInput[]
    update?: MerchantBalanceUpdateWithWhereUniqueWithoutMerchantInput | MerchantBalanceUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: MerchantBalanceUpdateManyWithWhereWithoutMerchantInput | MerchantBalanceUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: MerchantBalanceScalarWhereInput | MerchantBalanceScalarWhereInput[]
  }

  export type P2pTransferUpdateManyWithoutToMerchantNestedInput = {
    create?: XOR<P2pTransferCreateWithoutToMerchantInput, P2pTransferUncheckedCreateWithoutToMerchantInput> | P2pTransferCreateWithoutToMerchantInput[] | P2pTransferUncheckedCreateWithoutToMerchantInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutToMerchantInput | P2pTransferCreateOrConnectWithoutToMerchantInput[]
    upsert?: P2pTransferUpsertWithWhereUniqueWithoutToMerchantInput | P2pTransferUpsertWithWhereUniqueWithoutToMerchantInput[]
    createMany?: P2pTransferCreateManyToMerchantInputEnvelope
    set?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    disconnect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    delete?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    update?: P2pTransferUpdateWithWhereUniqueWithoutToMerchantInput | P2pTransferUpdateWithWhereUniqueWithoutToMerchantInput[]
    updateMany?: P2pTransferUpdateManyWithWhereWithoutToMerchantInput | P2pTransferUpdateManyWithWhereWithoutToMerchantInput[]
    deleteMany?: P2pTransferScalarWhereInput | P2pTransferScalarWhereInput[]
  }

  export type MerchantBalanceUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<MerchantBalanceCreateWithoutMerchantInput, MerchantBalanceUncheckedCreateWithoutMerchantInput> | MerchantBalanceCreateWithoutMerchantInput[] | MerchantBalanceUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: MerchantBalanceCreateOrConnectWithoutMerchantInput | MerchantBalanceCreateOrConnectWithoutMerchantInput[]
    upsert?: MerchantBalanceUpsertWithWhereUniqueWithoutMerchantInput | MerchantBalanceUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: MerchantBalanceCreateManyMerchantInputEnvelope
    set?: MerchantBalanceWhereUniqueInput | MerchantBalanceWhereUniqueInput[]
    disconnect?: MerchantBalanceWhereUniqueInput | MerchantBalanceWhereUniqueInput[]
    delete?: MerchantBalanceWhereUniqueInput | MerchantBalanceWhereUniqueInput[]
    connect?: MerchantBalanceWhereUniqueInput | MerchantBalanceWhereUniqueInput[]
    update?: MerchantBalanceUpdateWithWhereUniqueWithoutMerchantInput | MerchantBalanceUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: MerchantBalanceUpdateManyWithWhereWithoutMerchantInput | MerchantBalanceUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: MerchantBalanceScalarWhereInput | MerchantBalanceScalarWhereInput[]
  }

  export type P2pTransferUncheckedUpdateManyWithoutToMerchantNestedInput = {
    create?: XOR<P2pTransferCreateWithoutToMerchantInput, P2pTransferUncheckedCreateWithoutToMerchantInput> | P2pTransferCreateWithoutToMerchantInput[] | P2pTransferUncheckedCreateWithoutToMerchantInput[]
    connectOrCreate?: P2pTransferCreateOrConnectWithoutToMerchantInput | P2pTransferCreateOrConnectWithoutToMerchantInput[]
    upsert?: P2pTransferUpsertWithWhereUniqueWithoutToMerchantInput | P2pTransferUpsertWithWhereUniqueWithoutToMerchantInput[]
    createMany?: P2pTransferCreateManyToMerchantInputEnvelope
    set?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    disconnect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    delete?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    connect?: P2pTransferWhereUniqueInput | P2pTransferWhereUniqueInput[]
    update?: P2pTransferUpdateWithWhereUniqueWithoutToMerchantInput | P2pTransferUpdateWithWhereUniqueWithoutToMerchantInput[]
    updateMany?: P2pTransferUpdateManyWithWhereWithoutToMerchantInput | P2pTransferUpdateManyWithWhereWithoutToMerchantInput[]
    deleteMany?: P2pTransferScalarWhereInput | P2pTransferScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOnRampTransactionInput = {
    create?: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnRampTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOnRampStatusFieldUpdateOperationsInput = {
    set?: $Enums.OnRampStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutOnRampTransactionNestedInput = {
    create?: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnRampTransactionInput
    upsert?: UserUpsertWithoutOnRampTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOnRampTransactionInput, UserUpdateWithoutOnRampTransactionInput>, UserUncheckedUpdateWithoutOnRampTransactionInput>
  }

  export type UserCreateNestedOneWithoutSentTransfersInput = {
    create?: XOR<UserCreateWithoutSentTransfersInput, UserUncheckedCreateWithoutSentTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransfersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedTransfersInput = {
    create?: XOR<UserCreateWithoutReceivedTransfersInput, UserUncheckedCreateWithoutReceivedTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransfersInput
    connect?: UserWhereUniqueInput
  }

  export type MerchantCreateNestedOneWithoutReceivedTransfersInput = {
    create?: XOR<MerchantCreateWithoutReceivedTransfersInput, MerchantUncheckedCreateWithoutReceivedTransfersInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutReceivedTransfersInput
    connect?: MerchantWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentTransfersNestedInput = {
    create?: XOR<UserCreateWithoutSentTransfersInput, UserUncheckedCreateWithoutSentTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransfersInput
    upsert?: UserUpsertWithoutSentTransfersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentTransfersInput, UserUpdateWithoutSentTransfersInput>, UserUncheckedUpdateWithoutSentTransfersInput>
  }

  export type UserUpdateOneWithoutReceivedTransfersNestedInput = {
    create?: XOR<UserCreateWithoutReceivedTransfersInput, UserUncheckedCreateWithoutReceivedTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransfersInput
    upsert?: UserUpsertWithoutReceivedTransfersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedTransfersInput, UserUpdateWithoutReceivedTransfersInput>, UserUncheckedUpdateWithoutReceivedTransfersInput>
  }

  export type MerchantUpdateOneWithoutReceivedTransfersNestedInput = {
    create?: XOR<MerchantCreateWithoutReceivedTransfersInput, MerchantUncheckedCreateWithoutReceivedTransfersInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutReceivedTransfersInput
    upsert?: MerchantUpsertWithoutReceivedTransfersInput
    disconnect?: MerchantWhereInput | boolean
    delete?: MerchantWhereInput | boolean
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutReceivedTransfersInput, MerchantUpdateWithoutReceivedTransfersInput>, MerchantUncheckedUpdateWithoutReceivedTransfersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutBalancesInput = {
    create?: XOR<UserCreateWithoutBalancesInput, UserUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalancesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<UserCreateWithoutBalancesInput, UserUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalancesInput
    upsert?: UserUpsertWithoutBalancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBalancesInput, UserUpdateWithoutBalancesInput>, UserUncheckedUpdateWithoutBalancesInput>
  }

  export type MerchantCreateNestedOneWithoutBalancesInput = {
    create?: XOR<MerchantCreateWithoutBalancesInput, MerchantUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutBalancesInput
    connect?: MerchantWhereUniqueInput
  }

  export type MerchantUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<MerchantCreateWithoutBalancesInput, MerchantUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutBalancesInput
    upsert?: MerchantUpsertWithoutBalancesInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutBalancesInput, MerchantUpdateWithoutBalancesInput>, MerchantUncheckedUpdateWithoutBalancesInput>
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

  export type NestedEnumAuthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeFilter<$PrismaModel> | $Enums.AuthType
  }

  export type NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthTypeFilter<$PrismaModel>
  }

  export type NestedEnumOnRampStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusFilter<$PrismaModel> | $Enums.OnRampStatus
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

  export type NestedEnumOnRampStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusWithAggregatesFilter<$PrismaModel> | $Enums.OnRampStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOnRampStatusFilter<$PrismaModel>
    _max?: NestedEnumOnRampStatusFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type OnRampTransactionCreateWithoutUserInput = {
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
  }

  export type OnRampTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
  }

  export type OnRampTransactionCreateOrConnectWithoutUserInput = {
    where: OnRampTransactionWhereUniqueInput
    create: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput>
  }

  export type OnRampTransactionCreateManyUserInputEnvelope = {
    data: OnRampTransactionCreateManyUserInput | OnRampTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBalanceCreateWithoutUserInput = {
    amount?: number
    locked?: number
  }

  export type UserBalanceUncheckedCreateWithoutUserInput = {
    id?: number
    amount?: number
    locked?: number
  }

  export type UserBalanceCreateOrConnectWithoutUserInput = {
    where: UserBalanceWhereUniqueInput
    create: XOR<UserBalanceCreateWithoutUserInput, UserBalanceUncheckedCreateWithoutUserInput>
  }

  export type UserBalanceCreateManyUserInputEnvelope = {
    data: UserBalanceCreateManyUserInput | UserBalanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type P2pTransferCreateWithoutFromUserInput = {
    amount: number
    timestamp: Date | string
    toUser?: UserCreateNestedOneWithoutReceivedTransfersInput
    toMerchant?: MerchantCreateNestedOneWithoutReceivedTransfersInput
  }

  export type P2pTransferUncheckedCreateWithoutFromUserInput = {
    id?: number
    amount: number
    timestamp: Date | string
    toUserId?: number | null
    toMerchantId?: number | null
  }

  export type P2pTransferCreateOrConnectWithoutFromUserInput = {
    where: P2pTransferWhereUniqueInput
    create: XOR<P2pTransferCreateWithoutFromUserInput, P2pTransferUncheckedCreateWithoutFromUserInput>
  }

  export type P2pTransferCreateManyFromUserInputEnvelope = {
    data: P2pTransferCreateManyFromUserInput | P2pTransferCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type P2pTransferCreateWithoutToUserInput = {
    amount: number
    timestamp: Date | string
    fromUser: UserCreateNestedOneWithoutSentTransfersInput
    toMerchant?: MerchantCreateNestedOneWithoutReceivedTransfersInput
  }

  export type P2pTransferUncheckedCreateWithoutToUserInput = {
    id?: number
    amount: number
    timestamp: Date | string
    fromUserId: number
    toMerchantId?: number | null
  }

  export type P2pTransferCreateOrConnectWithoutToUserInput = {
    where: P2pTransferWhereUniqueInput
    create: XOR<P2pTransferCreateWithoutToUserInput, P2pTransferUncheckedCreateWithoutToUserInput>
  }

  export type P2pTransferCreateManyToUserInputEnvelope = {
    data: P2pTransferCreateManyToUserInput | P2pTransferCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type OnRampTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: OnRampTransactionWhereUniqueInput
    update: XOR<OnRampTransactionUpdateWithoutUserInput, OnRampTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput>
  }

  export type OnRampTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: OnRampTransactionWhereUniqueInput
    data: XOR<OnRampTransactionUpdateWithoutUserInput, OnRampTransactionUncheckedUpdateWithoutUserInput>
  }

  export type OnRampTransactionUpdateManyWithWhereWithoutUserInput = {
    where: OnRampTransactionScalarWhereInput
    data: XOR<OnRampTransactionUpdateManyMutationInput, OnRampTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type OnRampTransactionScalarWhereInput = {
    AND?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
    OR?: OnRampTransactionScalarWhereInput[]
    NOT?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
    id?: IntFilter<"OnRampTransaction"> | number
    status?: EnumOnRampStatusFilter<"OnRampTransaction"> | $Enums.OnRampStatus
    token?: StringFilter<"OnRampTransaction"> | string
    provider?: StringFilter<"OnRampTransaction"> | string
    amount?: IntFilter<"OnRampTransaction"> | number
    startTime?: DateTimeFilter<"OnRampTransaction"> | Date | string
    userId?: IntFilter<"OnRampTransaction"> | number
  }

  export type UserBalanceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBalanceWhereUniqueInput
    update: XOR<UserBalanceUpdateWithoutUserInput, UserBalanceUncheckedUpdateWithoutUserInput>
    create: XOR<UserBalanceCreateWithoutUserInput, UserBalanceUncheckedCreateWithoutUserInput>
  }

  export type UserBalanceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBalanceWhereUniqueInput
    data: XOR<UserBalanceUpdateWithoutUserInput, UserBalanceUncheckedUpdateWithoutUserInput>
  }

  export type UserBalanceUpdateManyWithWhereWithoutUserInput = {
    where: UserBalanceScalarWhereInput
    data: XOR<UserBalanceUpdateManyMutationInput, UserBalanceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBalanceScalarWhereInput = {
    AND?: UserBalanceScalarWhereInput | UserBalanceScalarWhereInput[]
    OR?: UserBalanceScalarWhereInput[]
    NOT?: UserBalanceScalarWhereInput | UserBalanceScalarWhereInput[]
    id?: IntFilter<"UserBalance"> | number
    userId?: IntFilter<"UserBalance"> | number
    amount?: IntFilter<"UserBalance"> | number
    locked?: IntFilter<"UserBalance"> | number
  }

  export type P2pTransferUpsertWithWhereUniqueWithoutFromUserInput = {
    where: P2pTransferWhereUniqueInput
    update: XOR<P2pTransferUpdateWithoutFromUserInput, P2pTransferUncheckedUpdateWithoutFromUserInput>
    create: XOR<P2pTransferCreateWithoutFromUserInput, P2pTransferUncheckedCreateWithoutFromUserInput>
  }

  export type P2pTransferUpdateWithWhereUniqueWithoutFromUserInput = {
    where: P2pTransferWhereUniqueInput
    data: XOR<P2pTransferUpdateWithoutFromUserInput, P2pTransferUncheckedUpdateWithoutFromUserInput>
  }

  export type P2pTransferUpdateManyWithWhereWithoutFromUserInput = {
    where: P2pTransferScalarWhereInput
    data: XOR<P2pTransferUpdateManyMutationInput, P2pTransferUncheckedUpdateManyWithoutFromUserInput>
  }

  export type P2pTransferScalarWhereInput = {
    AND?: P2pTransferScalarWhereInput | P2pTransferScalarWhereInput[]
    OR?: P2pTransferScalarWhereInput[]
    NOT?: P2pTransferScalarWhereInput | P2pTransferScalarWhereInput[]
    id?: IntFilter<"P2pTransfer"> | number
    amount?: IntFilter<"P2pTransfer"> | number
    timestamp?: DateTimeFilter<"P2pTransfer"> | Date | string
    fromUserId?: IntFilter<"P2pTransfer"> | number
    toUserId?: IntNullableFilter<"P2pTransfer"> | number | null
    toMerchantId?: IntNullableFilter<"P2pTransfer"> | number | null
  }

  export type P2pTransferUpsertWithWhereUniqueWithoutToUserInput = {
    where: P2pTransferWhereUniqueInput
    update: XOR<P2pTransferUpdateWithoutToUserInput, P2pTransferUncheckedUpdateWithoutToUserInput>
    create: XOR<P2pTransferCreateWithoutToUserInput, P2pTransferUncheckedCreateWithoutToUserInput>
  }

  export type P2pTransferUpdateWithWhereUniqueWithoutToUserInput = {
    where: P2pTransferWhereUniqueInput
    data: XOR<P2pTransferUpdateWithoutToUserInput, P2pTransferUncheckedUpdateWithoutToUserInput>
  }

  export type P2pTransferUpdateManyWithWhereWithoutToUserInput = {
    where: P2pTransferScalarWhereInput
    data: XOR<P2pTransferUpdateManyMutationInput, P2pTransferUncheckedUpdateManyWithoutToUserInput>
  }

  export type MerchantBalanceCreateWithoutMerchantInput = {
    amount?: number
    locked?: number
  }

  export type MerchantBalanceUncheckedCreateWithoutMerchantInput = {
    id?: number
    amount?: number
    locked?: number
  }

  export type MerchantBalanceCreateOrConnectWithoutMerchantInput = {
    where: MerchantBalanceWhereUniqueInput
    create: XOR<MerchantBalanceCreateWithoutMerchantInput, MerchantBalanceUncheckedCreateWithoutMerchantInput>
  }

  export type MerchantBalanceCreateManyMerchantInputEnvelope = {
    data: MerchantBalanceCreateManyMerchantInput | MerchantBalanceCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type P2pTransferCreateWithoutToMerchantInput = {
    amount: number
    timestamp: Date | string
    fromUser: UserCreateNestedOneWithoutSentTransfersInput
    toUser?: UserCreateNestedOneWithoutReceivedTransfersInput
  }

  export type P2pTransferUncheckedCreateWithoutToMerchantInput = {
    id?: number
    amount: number
    timestamp: Date | string
    fromUserId: number
    toUserId?: number | null
  }

  export type P2pTransferCreateOrConnectWithoutToMerchantInput = {
    where: P2pTransferWhereUniqueInput
    create: XOR<P2pTransferCreateWithoutToMerchantInput, P2pTransferUncheckedCreateWithoutToMerchantInput>
  }

  export type P2pTransferCreateManyToMerchantInputEnvelope = {
    data: P2pTransferCreateManyToMerchantInput | P2pTransferCreateManyToMerchantInput[]
    skipDuplicates?: boolean
  }

  export type MerchantBalanceUpsertWithWhereUniqueWithoutMerchantInput = {
    where: MerchantBalanceWhereUniqueInput
    update: XOR<MerchantBalanceUpdateWithoutMerchantInput, MerchantBalanceUncheckedUpdateWithoutMerchantInput>
    create: XOR<MerchantBalanceCreateWithoutMerchantInput, MerchantBalanceUncheckedCreateWithoutMerchantInput>
  }

  export type MerchantBalanceUpdateWithWhereUniqueWithoutMerchantInput = {
    where: MerchantBalanceWhereUniqueInput
    data: XOR<MerchantBalanceUpdateWithoutMerchantInput, MerchantBalanceUncheckedUpdateWithoutMerchantInput>
  }

  export type MerchantBalanceUpdateManyWithWhereWithoutMerchantInput = {
    where: MerchantBalanceScalarWhereInput
    data: XOR<MerchantBalanceUpdateManyMutationInput, MerchantBalanceUncheckedUpdateManyWithoutMerchantInput>
  }

  export type MerchantBalanceScalarWhereInput = {
    AND?: MerchantBalanceScalarWhereInput | MerchantBalanceScalarWhereInput[]
    OR?: MerchantBalanceScalarWhereInput[]
    NOT?: MerchantBalanceScalarWhereInput | MerchantBalanceScalarWhereInput[]
    id?: IntFilter<"MerchantBalance"> | number
    merchantId?: IntFilter<"MerchantBalance"> | number
    amount?: IntFilter<"MerchantBalance"> | number
    locked?: IntFilter<"MerchantBalance"> | number
  }

  export type P2pTransferUpsertWithWhereUniqueWithoutToMerchantInput = {
    where: P2pTransferWhereUniqueInput
    update: XOR<P2pTransferUpdateWithoutToMerchantInput, P2pTransferUncheckedUpdateWithoutToMerchantInput>
    create: XOR<P2pTransferCreateWithoutToMerchantInput, P2pTransferUncheckedCreateWithoutToMerchantInput>
  }

  export type P2pTransferUpdateWithWhereUniqueWithoutToMerchantInput = {
    where: P2pTransferWhereUniqueInput
    data: XOR<P2pTransferUpdateWithoutToMerchantInput, P2pTransferUncheckedUpdateWithoutToMerchantInput>
  }

  export type P2pTransferUpdateManyWithWhereWithoutToMerchantInput = {
    where: P2pTransferScalarWhereInput
    data: XOR<P2pTransferUpdateManyMutationInput, P2pTransferUncheckedUpdateManyWithoutToMerchantInput>
  }

  export type UserCreateWithoutOnRampTransactionInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    upiId?: string | null
    balances?: UserBalanceCreateNestedManyWithoutUserInput
    sentTransfers?: P2pTransferCreateNestedManyWithoutFromUserInput
    receivedTransfers?: P2pTransferCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutOnRampTransactionInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    upiId?: string | null
    balances?: UserBalanceUncheckedCreateNestedManyWithoutUserInput
    sentTransfers?: P2pTransferUncheckedCreateNestedManyWithoutFromUserInput
    receivedTransfers?: P2pTransferUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutOnRampTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
  }

  export type UserUpsertWithoutOnRampTransactionInput = {
    update: XOR<UserUpdateWithoutOnRampTransactionInput, UserUncheckedUpdateWithoutOnRampTransactionInput>
    create: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOnRampTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOnRampTransactionInput, UserUncheckedUpdateWithoutOnRampTransactionInput>
  }

  export type UserUpdateWithoutOnRampTransactionInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    balances?: UserBalanceUpdateManyWithoutUserNestedInput
    sentTransfers?: P2pTransferUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: P2pTransferUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOnRampTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    balances?: UserBalanceUncheckedUpdateManyWithoutUserNestedInput
    sentTransfers?: P2pTransferUncheckedUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: P2pTransferUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateWithoutSentTransfersInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    upiId?: string | null
    OnRampTransaction?: OnRampTransactionCreateNestedManyWithoutUserInput
    balances?: UserBalanceCreateNestedManyWithoutUserInput
    receivedTransfers?: P2pTransferCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutSentTransfersInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    upiId?: string | null
    OnRampTransaction?: OnRampTransactionUncheckedCreateNestedManyWithoutUserInput
    balances?: UserBalanceUncheckedCreateNestedManyWithoutUserInput
    receivedTransfers?: P2pTransferUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutSentTransfersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentTransfersInput, UserUncheckedCreateWithoutSentTransfersInput>
  }

  export type UserCreateWithoutReceivedTransfersInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    upiId?: string | null
    OnRampTransaction?: OnRampTransactionCreateNestedManyWithoutUserInput
    balances?: UserBalanceCreateNestedManyWithoutUserInput
    sentTransfers?: P2pTransferCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutReceivedTransfersInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    upiId?: string | null
    OnRampTransaction?: OnRampTransactionUncheckedCreateNestedManyWithoutUserInput
    balances?: UserBalanceUncheckedCreateNestedManyWithoutUserInput
    sentTransfers?: P2pTransferUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutReceivedTransfersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedTransfersInput, UserUncheckedCreateWithoutReceivedTransfersInput>
  }

  export type MerchantCreateWithoutReceivedTransfersInput = {
    email: string
    name?: string | null
    number?: string | null
    upiId?: string | null
    auth_type: $Enums.AuthType
    balances?: MerchantBalanceCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutReceivedTransfersInput = {
    id?: number
    email: string
    name?: string | null
    number?: string | null
    upiId?: string | null
    auth_type: $Enums.AuthType
    balances?: MerchantBalanceUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutReceivedTransfersInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutReceivedTransfersInput, MerchantUncheckedCreateWithoutReceivedTransfersInput>
  }

  export type UserUpsertWithoutSentTransfersInput = {
    update: XOR<UserUpdateWithoutSentTransfersInput, UserUncheckedUpdateWithoutSentTransfersInput>
    create: XOR<UserCreateWithoutSentTransfersInput, UserUncheckedCreateWithoutSentTransfersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentTransfersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentTransfersInput, UserUncheckedUpdateWithoutSentTransfersInput>
  }

  export type UserUpdateWithoutSentTransfersInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    OnRampTransaction?: OnRampTransactionUpdateManyWithoutUserNestedInput
    balances?: UserBalanceUpdateManyWithoutUserNestedInput
    receivedTransfers?: P2pTransferUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentTransfersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    OnRampTransaction?: OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput
    balances?: UserBalanceUncheckedUpdateManyWithoutUserNestedInput
    receivedTransfers?: P2pTransferUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutReceivedTransfersInput = {
    update: XOR<UserUpdateWithoutReceivedTransfersInput, UserUncheckedUpdateWithoutReceivedTransfersInput>
    create: XOR<UserCreateWithoutReceivedTransfersInput, UserUncheckedCreateWithoutReceivedTransfersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedTransfersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedTransfersInput, UserUncheckedUpdateWithoutReceivedTransfersInput>
  }

  export type UserUpdateWithoutReceivedTransfersInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    OnRampTransaction?: OnRampTransactionUpdateManyWithoutUserNestedInput
    balances?: UserBalanceUpdateManyWithoutUserNestedInput
    sentTransfers?: P2pTransferUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedTransfersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    OnRampTransaction?: OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput
    balances?: UserBalanceUncheckedUpdateManyWithoutUserNestedInput
    sentTransfers?: P2pTransferUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type MerchantUpsertWithoutReceivedTransfersInput = {
    update: XOR<MerchantUpdateWithoutReceivedTransfersInput, MerchantUncheckedUpdateWithoutReceivedTransfersInput>
    create: XOR<MerchantCreateWithoutReceivedTransfersInput, MerchantUncheckedCreateWithoutReceivedTransfersInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutReceivedTransfersInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutReceivedTransfersInput, MerchantUncheckedUpdateWithoutReceivedTransfersInput>
  }

  export type MerchantUpdateWithoutReceivedTransfersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    balances?: MerchantBalanceUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutReceivedTransfersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    balances?: MerchantBalanceUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type UserCreateWithoutBalancesInput = {
    email?: string | null
    name?: string | null
    number: string
    password: string
    upiId?: string | null
    OnRampTransaction?: OnRampTransactionCreateNestedManyWithoutUserInput
    sentTransfers?: P2pTransferCreateNestedManyWithoutFromUserInput
    receivedTransfers?: P2pTransferCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutBalancesInput = {
    id?: number
    email?: string | null
    name?: string | null
    number: string
    password: string
    upiId?: string | null
    OnRampTransaction?: OnRampTransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransfers?: P2pTransferUncheckedCreateNestedManyWithoutFromUserInput
    receivedTransfers?: P2pTransferUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutBalancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalancesInput, UserUncheckedCreateWithoutBalancesInput>
  }

  export type UserUpsertWithoutBalancesInput = {
    update: XOR<UserUpdateWithoutBalancesInput, UserUncheckedUpdateWithoutBalancesInput>
    create: XOR<UserCreateWithoutBalancesInput, UserUncheckedCreateWithoutBalancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBalancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBalancesInput, UserUncheckedUpdateWithoutBalancesInput>
  }

  export type UserUpdateWithoutBalancesInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    OnRampTransaction?: OnRampTransactionUpdateManyWithoutUserNestedInput
    sentTransfers?: P2pTransferUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: P2pTransferUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    OnRampTransaction?: OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransfers?: P2pTransferUncheckedUpdateManyWithoutFromUserNestedInput
    receivedTransfers?: P2pTransferUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type MerchantCreateWithoutBalancesInput = {
    email: string
    name?: string | null
    number?: string | null
    upiId?: string | null
    auth_type: $Enums.AuthType
    receivedTransfers?: P2pTransferCreateNestedManyWithoutToMerchantInput
  }

  export type MerchantUncheckedCreateWithoutBalancesInput = {
    id?: number
    email: string
    name?: string | null
    number?: string | null
    upiId?: string | null
    auth_type: $Enums.AuthType
    receivedTransfers?: P2pTransferUncheckedCreateNestedManyWithoutToMerchantInput
  }

  export type MerchantCreateOrConnectWithoutBalancesInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutBalancesInput, MerchantUncheckedCreateWithoutBalancesInput>
  }

  export type MerchantUpsertWithoutBalancesInput = {
    update: XOR<MerchantUpdateWithoutBalancesInput, MerchantUncheckedUpdateWithoutBalancesInput>
    create: XOR<MerchantCreateWithoutBalancesInput, MerchantUncheckedCreateWithoutBalancesInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutBalancesInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutBalancesInput, MerchantUncheckedUpdateWithoutBalancesInput>
  }

  export type MerchantUpdateWithoutBalancesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    receivedTransfers?: P2pTransferUpdateManyWithoutToMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    receivedTransfers?: P2pTransferUncheckedUpdateManyWithoutToMerchantNestedInput
  }

  export type OnRampTransactionCreateManyUserInput = {
    id?: number
    status: $Enums.OnRampStatus
    token: string
    provider: string
    amount: number
    startTime: Date | string
  }

  export type UserBalanceCreateManyUserInput = {
    id?: number
    amount?: number
    locked?: number
  }

  export type P2pTransferCreateManyFromUserInput = {
    id?: number
    amount: number
    timestamp: Date | string
    toUserId?: number | null
    toMerchantId?: number | null
  }

  export type P2pTransferCreateManyToUserInput = {
    id?: number
    amount: number
    timestamp: Date | string
    fromUserId: number
    toMerchantId?: number | null
  }

  export type OnRampTransactionUpdateWithoutUserInput = {
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnRampTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnRampTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBalanceUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type UserBalanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type UserBalanceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type P2pTransferUpdateWithoutFromUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    toUser?: UserUpdateOneWithoutReceivedTransfersNestedInput
    toMerchant?: MerchantUpdateOneWithoutReceivedTransfersNestedInput
  }

  export type P2pTransferUncheckedUpdateWithoutFromUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    toUserId?: NullableIntFieldUpdateOperationsInput | number | null
    toMerchantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type P2pTransferUncheckedUpdateManyWithoutFromUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    toUserId?: NullableIntFieldUpdateOperationsInput | number | null
    toMerchantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type P2pTransferUpdateWithoutToUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentTransfersNestedInput
    toMerchant?: MerchantUpdateOneWithoutReceivedTransfersNestedInput
  }

  export type P2pTransferUncheckedUpdateWithoutToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    toMerchantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type P2pTransferUncheckedUpdateManyWithoutToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    toMerchantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MerchantBalanceCreateManyMerchantInput = {
    id?: number
    amount?: number
    locked?: number
  }

  export type P2pTransferCreateManyToMerchantInput = {
    id?: number
    amount: number
    timestamp: Date | string
    fromUserId: number
    toUserId?: number | null
  }

  export type MerchantBalanceUpdateWithoutMerchantInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type MerchantBalanceUncheckedUpdateWithoutMerchantInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type MerchantBalanceUncheckedUpdateManyWithoutMerchantInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type P2pTransferUpdateWithoutToMerchantInput = {
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentTransfersNestedInput
    toUser?: UserUpdateOneWithoutReceivedTransfersNestedInput
  }

  export type P2pTransferUncheckedUpdateWithoutToMerchantInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type P2pTransferUncheckedUpdateManyWithoutToMerchantInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: NullableIntFieldUpdateOperationsInput | number | null
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