export function exclude<T extends Object, Key extends keyof T>(
    user: T,
    keys: Key[]
): Omit<T, Key> {
    const result = Object.fromEntries(
        Object.entries(user).filter(([key]) => !keys.includes(key as Key))
    );

    return result as Omit<T, Key>;
}
