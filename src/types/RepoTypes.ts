export type id = number;

export interface BasicRepo<T> {
    get: (id: id) => Promise<Array<T>>; // MySQL always return an array
    create: (data: T) => Promise<Partial<T>>;
}

export interface TUsersRepo<T> extends BasicRepo<T> {
    getAll: () => Promise<Array<T>>;
}
