type TGenNode<
  K extends number | string,
  IsRoot extends boolean,
> = IsRoot extends true
  ? `${K}`
  : `.${K}` | (K extends number ? `.[${K}]` | `[${K}]` : never);

export type TObjectKeyPaths<
  T extends object,
  IsRoot extends boolean = true,
  K extends keyof T = keyof T,
> = K extends number | string
  ?
      | TGenNode<K, IsRoot>
      | (T[K] extends object
          ? `${TGenNode<K, IsRoot>}${TObjectKeyPaths<T[K], false>}`
          : never)
  : never;
