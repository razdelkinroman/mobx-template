import { makeAutoObservable } from 'mobx';
import { RootStore } from '..';
import { TPost } from './types';

export class PostsStore {
    _posts: TPost[] = [];
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    get posts() {
        const activeId = this.rootStore.usersStore.activeUserID;

        if (activeId) {
            return this._posts.filter((i) => i.userId === activeId);
        } else {
            return this._posts;
        }
    }

    get postsCountByUser() {
        const res: Record<string, number> = {};

        this._posts.forEach((i) => {
            if (res[i.userId]) {
                res[i.userId]++;
            } else {
                res[i.userId] = 1;
            }
        });

        return res;
    }

    getPostsCountByUser = (userId: number) => {
        return this.postsCountByUser[userId];
    };

    setPosts = (items: TPost[]) => {
        this._posts = items;
    };
}
