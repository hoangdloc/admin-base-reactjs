/* eslint-disable @typescript-eslint/no-use-before-define */

type TDeepReadonly<T> = T extends (...args: readonly any[]) => any
  ? T
  : T extends any[]
    ? TDeepReadonlyArray<T[number]>
    : T extends object
      ? TDeepReadonlyObject<T>
      : T;

type TDeepReadonlyArray<T> = ReadonlyArray<TDeepReadonly<T>>;
type TDeepReadonlyObject<T> = {
  readonly [P in keyof T]: TDeepReadonly<T[P]>;
};

export type { TDeepReadonly, TDeepReadonlyArray, TDeepReadonlyObject };
