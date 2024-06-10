import { useStores } from '../../stores';
import { TPost } from '../../stores/posts/types';
import { PostContainer } from './styles';

interface IPostProps {
    post: TPost;
}

export const Post = ({ post }: IPostProps) => {
    const { usersStore } = useStores();

    return (
        <PostContainer>
            <p>{usersStore.getUserName(post.userId)}</p>
            <p>{post.title}</p>
        </PostContainer>
    );
};
