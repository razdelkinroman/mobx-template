import { RootService } from '..';
import { RootStore } from '../../stores';

export class UsersService {
    rootService: RootService;
    rootStore: RootStore;

    constructor(rootService: RootService, rootStore: RootStore) {
        this.rootService = rootService;
        this.rootStore = rootStore;
    }

    getUsers = () => {
        this.rootService.apiService.getUsers().then((i) => this.rootStore.usersStore.setUsers(i));
    };
}
