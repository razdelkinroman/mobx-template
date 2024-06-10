import { createContext, useContext } from 'react';
import { AppStore } from './app';
import { PostsStore } from './posts';
import { UsersStore } from './users';

export class RootStore {
    usersStore: UsersStore;
    postsStore: PostsStore;
    appStore: AppStore;

    constructor() {
        this.appStore = new AppStore();
        this.usersStore = new UsersStore(this);
        this.postsStore = new PostsStore(this);
    }
}

export const rootStore = new RootStore();

const StoresContext = createContext(rootStore);

export const useStores = () => useContext(StoresContext);
