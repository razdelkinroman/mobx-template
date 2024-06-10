import { observer } from 'mobx-react-lite';
import { TUser } from '../../stores/users/types';
import { useStores } from '../../stores';
import { UserFilterButton } from './styles';

interface IUserProps {
    user: TUser;
}

export const User = observer(({ user }: IUserProps) => {
    const { postsStore, usersStore } = useStores();
    const isActive = usersStore.activeUserID === user.id;

    const onFilterPostsByUserId = () => {
        if (isActive) {
            usersStore.setActiveUserID(null);
        } else {
            usersStore.setActiveUserID(user.id);
        }
    };

    return (
        <UserFilterButton $active={isActive} onClick={onFilterPostsByUserId}>
            {user.name} - {postsStore.getPostsCountByUser(user.id)}
        </UserFilterButton>
    );
});
