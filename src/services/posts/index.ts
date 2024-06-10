import { RootService } from '..';
import { RootStore } from '../../stores';

export class PostsService {
    rootService: RootService;
    rootStore: RootStore;

    constructor(rootService: RootService, rootStore: RootStore) {
        this.rootService = rootService;
        this.rootStore = rootStore;
    }

    getPosts = () => {
        this.rootService.apiService.getPosts().then((i) => this.rootStore.postsStore.setPosts(i));
    };
}
