import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
import { HeaderWrapper } from './styles';

export const Header = observer(() => {
    const { usersStore, postsStore } = useStores();

    return (
        <HeaderWrapper>
            <div>
                <span>Количество пользователей: </span>
                <span>{usersStore.users.length}</span>
            </div>
            <div>
                <span>Количество сообщений: </span>
                <span>{postsStore.posts.length}</span>
            </div>
        </HeaderWrapper>
    );
});
