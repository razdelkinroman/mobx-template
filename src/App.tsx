import { observer } from 'mobx-react-lite';
import { useStores } from './stores';
import { useServices } from './services';
import { User } from './components/User';
import { Post } from './components/Post';
import { useEffect } from 'react';
import { Header } from './components/Header';
import './App.css';

function App() {
    const { postsStore, usersStore } = useStores();
    const { postsService, usersService } = useServices();

    useEffect(() => {
        postsService.getPosts();
        usersService.getUsers();
    }, []);

    return (
        <div className='App'>
            <Header />
            <div className='app-container'>
                <div className='left-panel'>
                    <div className='user-list'>
                        {usersStore.users.map((user) => (
                            <User key={user.id} user={user} />
                        ))}
                    </div>
                </div>
                <div className='main-container'>
                    {postsStore.posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default observer(App);
