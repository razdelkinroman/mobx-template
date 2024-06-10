import axios from 'axios';
import { TPost } from '../../stores/posts/types';
import { TUser } from '../../stores/users/types';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export class ApiService {
    getUsers = async () => {
        const res = await api.get<TUser[]>('/users');

        return res.data;
    };

    getPosts = async () => {
        const res = await api.get<TPost[]>('/posts');

        return res.data;
    };
}
