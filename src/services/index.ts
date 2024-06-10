import { createContext, useContext } from 'react';
import { RootStore, rootStore } from '../stores';
import { ApiService } from './api';
import { AppService } from './app';
import { PostsService } from './posts';
import { UsersService } from './users';

export class RootService {
    apiService: ApiService;
    appService: AppService;
    usersService: UsersService;
    postsService: PostsService;
    rootStore: RootStore;

    constructor() {
        this.apiService = new ApiService();
        this.appService = new AppService(this);
        this.usersService = new UsersService(this, rootStore);
        this.postsService = new PostsService(this, rootStore);
        this.rootStore = rootStore;
    }
}

export const rootService = new RootService();

const ServicesContext = createContext(rootService);

export const useServices = () => useContext(ServicesContext);
