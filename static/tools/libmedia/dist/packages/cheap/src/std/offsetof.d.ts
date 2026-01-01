export default function offsetof<T extends new (init?: Partial<{}>) => any>(struct: T, key: T extends new (init?: Partial<{}>) => infer U ? keyof U : never): uint32;
