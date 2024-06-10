import { makeAutoObservable } from 'mobx';
import { RootStore } from '..';
import { TUser } from './types';

export class UsersStore {
    private _rootStore: RootStore;
    users: TUser[] = [];
    activeUserID: number | null = null;

    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this._rootStore = rootStore;
    }

    getUserName = (id: TUser['id']): string => {
        const user = this.users.find((i) => i.id === id);

        return user?.name || 'Неизвестный клиент';
    };

    setUsers = (items: TUser[]) => {
        this.users = items;
    };

    setActiveUserID = (id: TUser['id'] | null) => {
        this.activeUserID = id;
    };
}
